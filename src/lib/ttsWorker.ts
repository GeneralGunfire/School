/// <reference lib="webworker" />
import { KokoroTTS } from 'kokoro-js';

/** Runs the neural voice model off the main thread so the UI never freezes. */

let model: Promise<KokoroTTS> | undefined;

function load() {
  model ??= (async () => {
    const gpu = 'gpu' in navigator;
    try {
      return await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {
        dtype: gpu ? 'fp32' : 'q8',
        device: gpu ? 'webgpu' : 'wasm',
        progress_callback: (p: { status: string; progress?: number }) => {
          if (p.status === 'progress') postMessage({ type: 'progress', value: p.progress ?? 0 });
        },
      });
    } catch {
      return KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', { dtype: 'q8', device: 'wasm' });
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
