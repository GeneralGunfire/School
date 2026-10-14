import type { Figure } from '../../lib/types';
import { fig, h3, type B } from './geomKit';

/** Task 18 graph sketches, drawn from the equations worked out in the answers. */

const base = (curves: Figure['curves'], yRange: [number, number], caption: string, extra: Partial<Figure> = {}): Figure => {
  const wide = (520 - 62) / 360;
  return {
    xRange: [0, 360],
    yRange,
    xStep: 90,
    yStep: 1,
    xSuffix: '°',
    grid: true,
    stretch: (Math.min(240, 64 * (yRange[1] - yRange[0])) / (yRange[1] - yRange[0])) / wide,
    curves,
    caption,
    ...extra,
  };
};

export const H_GRAPHS_TASK_18_FIGURES: B[] = [
  h3('Question 1 — f and g'),
  fig(
    base([{ kind: 'cos', a: 2 }, { kind: 'sin', color: 'green' }], [-2.5, 2.5], 'Blue: f(x) = 2 cos x · Green: g(x) = sin x. They meet at A(63,4°; 0,89).', {
      points: [{ id: 'A', label: 'A', x: 63.4, y: 0.894, side: 'ne', color: 'alt' }],
    }),
  ),
  h3('Question 2 — sketch of f(x) = −2 cos x and g(x) = sin x − 1'),
  fig(base([{ kind: 'cos', a: -2 }, { kind: 'sin', q: -1, color: 'green' }], [-2.5, 2.5], 'Blue: f(x) = −2 cos x · Green: g(x) = sin x − 1. They meet at x = 90° (and again near 323°).')),
  h3('Question 3 — f(x) = tan x and g(x) = 3 cos x'),
  fig(
    base([{ kind: 'tan', domain: [0, 360] }, { kind: 'cos', a: 3, color: 'green' }], [-3.5, 3.5], 'Blue: f(x) = tan x · Green: g(x) = 3 cos x.', {
      asymptotes: [90, 270],
    }),
  ),
];
