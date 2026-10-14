import type { Lesson } from '../../lib/types';
import { GEOM_UNIT_5A_LESSONS } from './geometryUnit5a';
import { GEOM_UNIT_5B_LESSONS } from './geometryUnit5b';
import { GEOM_UNIT_5C_LESSONS } from './geometryUnit5c';
import { GEOM_UNIT_5D_LESSONS } from './geometryUnit5d';
import { GEOM_UNIT_5E_LESSONS } from './geometryUnit5e';

/** Paper 2 — Unit 5: Statistics, in book order. */
export const GEOM_UNIT_5_LESSONS: Lesson[] = [...GEOM_UNIT_5A_LESSONS, ...GEOM_UNIT_5B_LESSONS, ...GEOM_UNIT_5C_LESSONS, ...GEOM_UNIT_5D_LESSONS, ...GEOM_UNIT_5E_LESSONS];
