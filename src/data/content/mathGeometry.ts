import type { Chapter } from '../../lib/types';
import { GEOM_UNIT_1_LESSONS } from './geometryUnit1';
import { GEOM_UNIT_2_LESSONS } from './geometryUnit2';
import { GEOM_UNIT_3_LESSONS } from './geometryUnit3';
import { GEOM_UNIT_4_LESSONS } from './geometryUnit4';
import { GEOM_UNIT_5_LESSONS } from './geometryUnit5';
import { GEOM_REVISION_LESSONS } from './geometryRevision';

export const GEOM_ANALYTICAL: Chapter = {
  id: 'geom-analytical', subjectId: 'math-geometry', title: 'Unit 1 · Analytical Geometry',
  summary: 'Distance, midpoint, gradient, parallel and perpendicular lines, special quadrilaterals, the equation of a line and its angle of inclination.',
  lessons: GEOM_UNIT_1_LESSONS,
};
export const GEOM_TRIGONOMETRY: Chapter = {
  id: 'geom-trigonometry', subjectId: 'math-geometry', title: 'Unit 2 · Trigonometry',
  summary: 'Pythagoras, right-triangle ratios, the Cartesian plane, equations, identities, reference angles, special angles, graphs and applications.',
  lessons: GEOM_UNIT_2_LESSONS,
};
export const GEOM_EUCLIDEAN: Chapter = {
  id: 'geom-euclidean', subjectId: 'math-geometry', title: 'Unit 3 · Euclidean Geometry',
  summary: 'Congruent triangles and the proofs that build on them.',
  lessons: GEOM_UNIT_3_LESSONS,
};
export const GEOM_MEASUREMENTS: Chapter = {
  id: 'geom-measurements', subjectId: 'math-geometry', title: 'Unit 4 · Measurements',
  summary: 'Volume and surface area of prisms, cylinders, pyramids, cones and spheres.',
  lessons: GEOM_UNIT_4_LESSONS,
};
export const GEOM_STATISTICS: Chapter = {
  id: 'geom-statistics', subjectId: 'math-geometry', title: 'Unit 5 · Statistics',
  summary: 'Measures of central tendency, quartiles, box-and-whisker diagrams, histograms, ogives and scatter plots.',
  lessons: GEOM_UNIT_5_LESSONS,
};
export const GEOM_REVISION: Chapter = {
  id: 'geom-revision', subjectId: 'math-geometry', title: 'Revision and Exemplars',
  summary: 'Mixed revision sets and exemplar questions across all geometry units.',
  lessons: GEOM_REVISION_LESSONS,
};
