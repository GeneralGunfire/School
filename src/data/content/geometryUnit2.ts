import type { Lesson } from '../../lib/types';
import { GEOM_UNIT_2A_LESSONS } from './geometryUnit2a';
import { GEOM_UNIT_2B_LESSONS } from './geometryUnit2b';
import { GEOM_UNIT_2C_LESSONS } from './geometryUnit2c';
import { GEOM_UNIT_2D_LESSONS } from './geometryUnit2d';
import { GEOM_UNIT_2E_LESSONS } from './geometryUnit2e';

/** Paper 2 — Unit 2: Trigonometry, in book order. */
export const GEOM_UNIT_2_LESSONS: Lesson[] = [...GEOM_UNIT_2A_LESSONS, ...GEOM_UNIT_2B_LESSONS, ...GEOM_UNIT_2C_LESSONS, ...GEOM_UNIT_2D_LESSONS, ...GEOM_UNIT_2E_LESSONS];
