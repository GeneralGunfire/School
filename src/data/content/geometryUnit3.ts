import type { Lesson } from '../../lib/types';
import { GEOM_UNIT_3A_LESSONS } from './geometryUnit3a';
import { GEOM_UNIT_3B_LESSONS } from './geometryUnit3b';
import { GEOM_UNIT_3C_LESSONS } from './geometryUnit3c';
import { GEOM_UNIT_3D_LESSONS } from './geometryUnit3d';
import { GEOM_UNIT_3E_LESSONS } from './geometryUnit3e';
import { GEOM_UNIT_3F_LESSONS } from './geometryUnit3f';
import { GEOM_UNIT_3G_LESSONS } from './geometryUnit3g';

/** Paper 2 — Unit 3: Euclidean Geometry, in book order. */
export const GEOM_UNIT_3_LESSONS: Lesson[] = [...GEOM_UNIT_3A_LESSONS, ...GEOM_UNIT_3B_LESSONS, ...GEOM_UNIT_3C_LESSONS, ...GEOM_UNIT_3D_LESSONS, ...GEOM_UNIT_3E_LESSONS, ...GEOM_UNIT_3F_LESSONS, ...GEOM_UNIT_3G_LESSONS];
