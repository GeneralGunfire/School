/// <reference lib="webworker" />
import { KokoroTTS } from 'kokoro-js';

/** Runs the neural voice model off the main thread so the UI never freezes. */

let model: Promise<KokoroTTS> | undefined;

function load() {
  model ??= (async () => {
    // WebGPU is unreliable across WebViews (not just missing — some report
    // `navigator.gpu` present but then fail to get an adapter), so prefer
    // plain WASM unless WebGPU demonstrably works, rather than trusting
    // feature-detection alone and silently falling back to the system
    // voice when it doesn't.
    let useGpu = false;
    try {
      const gpu = (navigator as unknown as { gpu?: { requestAdapter: () => Promise<unknown> } }).gpu;
      if (gpu) useGpu = !!(await gpu.requestAdapter());
    } catch (err) {
      console.warn('[tts] WebGPU adapter check failed, using WASM:', err);
    }

    try {
      return await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {
        dtype: useGpu ? 'fp32' : 'q8',
        device: useGpu ? 'webgpu' : 'wasm',
        progress_callback: (p: { status: string; progress?: number }) => {
          if (p.status === 'progress') postMessage({ type: 'progress', value: p.progress ?? 0 });
        },
      });
    } catch (err) {
      console.error('[tts] Kokoro load failed on', useGpu ? 'webgpu' : 'wasm', '— retrying on wasm/q8:', err);
      try {
        return await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', { dtype: 'q8', device: 'wasm' });
      } catch (err2) {
        console.error('[tts] Kokoro load failed on wasm fallback too:', err2);
        throw err2;
      }
    }
  })();
  return model;
}

self.onmessage = async (e: MessageEvent<{ id: number; text: string; voice: string; speed: number }>) => {
  const { id, text, voice, speed } = e.data;
  try {
    const tts = await load();
    postMessage({ type: 'ready' });
    const audio = await tts.generate(text, { voice: voice as never, speed });
    const samples = audio.audio as Float32Array;
    postMessage({ type: 'audio', id, samples, rate: audio.sampling_rate }, [samples.buffer]);
  } catch (err) {
    postMessage({ type: 'error', id, message: String(err) });
  }
};
