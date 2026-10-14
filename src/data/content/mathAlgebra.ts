import type { Chapter } from '@/lib/types';
import { ALG_PATTERNS_1_LESSONS } from './algebraPatterns1';
import { ALG_PATTERNS_2_LESSONS } from './algebraPatterns2';
import { ALG_PATTERNS_3_LESSONS } from './algebraPatterns3';
import { ALG_FACTORISATION_1_LESSONS } from './algebraFactorisation1';
import { ALG_FACTORISATION_2_LESSONS } from './algebraFactorisation2';
import { ALG_FACTORISATION_3_LESSONS } from './algebraFactorisation3';
import { ALG_FACTORISATION_4_LESSONS } from './algebraFactorisation4';
import { ALG_FACTORISATION_5_LESSONS } from './algebraFactorisation5';
import { ALG_FACTORISATION_6_LESSONS } from './algebraFactorisation6';
import { ALG_QUADRATIC_1_LESSONS } from './algebraQuadratic1';
import { ALG_QUADRATIC_2_LESSONS } from './algebraQuadratic2';
import { ALG_QUADRATIC_3_LESSONS } from './algebraQuadratic3';
import { ALG_QUADRATIC_4_LESSONS } from './algebraQuadratic4';
import { ALG_QUADRATIC_5_LESSONS } from './algebraQuadratic5';
import { ALG_FUNCTIONS_1_LESSONS } from './algebraFunctions1';
import { ALG_FUNCTIONS_2_LESSONS } from './algebraFunctions2';
import { ALG_FUNCTIONS_3_LESSONS } from './algebraFunctions3';
import { ALG_FUNCTIONS_4_LESSONS } from './algebraFunctions4';
import { ALG_FUNCTIONS_5_LESSONS } from './algebraFunctions5';
import { ALG_FUNCTIONS_6_LESSONS } from './algebraFunctions6';
import { ALG_FUNCTIONS_7_LESSONS, ALG_HYPERBOLA_1_LESSONS } from './algebraFunctions7';
import { ALG_HYPERBOLA_2_LESSONS } from './algebraFunctions8';
import { ALG_HYPERBOLA_3_LESSONS } from './algebraFunctions9';
import { ALG_HYPERBOLA_4_LESSONS } from './algebraFunctions10';
import { ALG_HYPERBOLA_5_LESSONS } from './algebraFunctions11';
import { ALG_EXPONENTIAL_1_LESSONS } from './algebraExponential1';
import { ALG_EXPONENTIAL_2_LESSONS } from './algebraExponential2';
import { ALG_EXPONENTIAL_3_LESSONS } from './algebraExponential3';
import { ALG_EXPONENTIAL_4_LESSONS } from './algebraExponential4';
import { ALG_MIXED_1_LESSONS } from './algebraMixed1';
import { ALG_MIXED_2_LESSONS } from './algebraMixed2';
import { ALG_MIXED_3_LESSONS } from './algebraMixed3';
import { ALG_MIXED_4_LESSONS } from './algebraMixed4';
import { ALG_MIXED_5_LESSONS } from './algebraMixed5';
import { ALG_MIXED_6_LESSONS } from './algebraMixed6';
import { ALG_MIXED_7_LESSONS } from './algebraMixed7';
import { ALG_MIXED_8_LESSONS, ALG_TRIALS_U6_LESSONS } from './algebraMixed8';
import { ALG_TRIALS_U6B_LESSONS } from './algebraTrialsU6b';
import { ALG_FINANCE_1_LESSONS, ALG_TRIALS_U6C_LESSONS } from './algebraFinance1';
import { ALG_FINANCE_2_LESSONS } from './algebraFinance2';
import { ALG_FINANCE_3_LESSONS } from './algebraFinance3';
import { ALG_FINANCE_4_LESSONS } from './algebraFinance4';
import { ALG_FINANCE_5_LESSONS } from './algebraFinance5';
import { ALG_FINANCE_6_LESSONS } from './algebraFinance6';
import { ALG_FINANCE_7_LESSONS } from './algebraFinance7';
import { ALG_FINANCE_8_LESSONS } from './algebraFinance8';
import { ALG_PROB_1_LESSONS, ALG_FINANCE_9_LESSONS } from './algebraProb1';
import { ALG_PROB_2_LESSONS } from './algebraProb2';
import { ALG_PROB_3_LESSONS } from './algebraProb3';
import { ALG_PROB_4_LESSONS } from './algebraProb4';
import { ALG_PROB_5_LESSONS } from './algebraProb5';
import { ALG_PROB_6_LESSONS } from './algebraProb6';
import { ALG_PROB_7_LESSONS } from './algebraProb7';
import { ALG_PROB_8_LESSONS } from './algebraProb8';
import { ALG_PROB_9_LESSONS } from './algebraProb9';
import { ALG_PROB_10_LESSONS } from './algebraProb10';
import { ALG_PROB_11_LESSONS } from './algebraProb11';
import { ALG_PROB_12_LESSONS } from './algebraProb12';
import { ALG_REVISION_1_LESSONS } from './algebraRevision1';
import { ALG_REVISION_2_LESSONS } from './algebraRevision2';
import { ALG_REVISION_3_LESSONS } from './algebraRevision3';
import { ALG_REVISION_4_LESSONS } from './algebraRevision4';
import { ALG_REVISION_5_LESSONS } from './algebraRevision5';
import { ALG_REVISION_6_LESSONS } from './algebraRevision6';
import { ALG_REVISION_7_LESSONS } from './algebraRevision7';
import { ALG_REVISION_8_LESSONS } from './algebraRevision8';
import { ALG_REVISION_9_LESSONS } from './algebraRevision9';
import { ALG_REVISION_10_LESSONS } from './algebraRevision10';
import { ALG_EXP_1_LESSONS } from './algebraExponents1';
import { ALG_EXP_2_LESSONS } from './algebraExponents2';
import { ALG_SURDS_LESSONS } from './algebraSurds';
import { ALG_RATIONALISE_LESSONS } from './algebraRationalise';
import { ALG_TRIALS_1_LESSONS } from './algebraTrials1';

export const MATH_ALGEBRA_EQUATIONS: Chapter = {
  id: 'math-algebra-equations', subjectId: 'math-algebra', title: 'Equations & Inequalities', summary: '', lessons: [],
};
export const MATH_EXPONENTS_SURDS: Chapter = {
  id: 'math-exponents-surds', subjectId: 'math-algebra', title: 'Unit 2 · Exponents & Surds',
  summary: 'Exponential laws, scientific notation and (to come) surds.',
  lessons: [...ALG_EXP_1_LESSONS, ...ALG_EXP_2_LESSONS, ...ALG_SURDS_LESSONS, ...ALG_RATIONALISE_LESSONS, ...ALG_TRIALS_1_LESSONS],
};
export const MATH_NUMBER_PATTERNS: Chapter = {
  id: 'math-number-patterns', subjectId: 'math-algebra', title: 'Unit 3 · Number Patterns',
  summary: 'Common patterns, arithmetic (linear) and quadratic sequences.',
  lessons: [...ALG_PATTERNS_1_LESSONS, ...ALG_PATTERNS_2_LESSONS, ...ALG_PATTERNS_3_LESSONS],
};
export const MATH_ALGEBRA_FACTORISATION: Chapter = {
  id: 'math-algebra-factorisation', subjectId: 'math-algebra', title: 'Unit 4 · Factorisation',
  summary: 'Products of factors, then factorising expressions.',
  lessons: [...ALG_FACTORISATION_1_LESSONS, ...ALG_FACTORISATION_2_LESSONS, ...ALG_FACTORISATION_3_LESSONS, ...ALG_FACTORISATION_4_LESSONS, ...ALG_FACTORISATION_5_LESSONS, ...ALG_FACTORISATION_6_LESSONS],
};
export const MATH_QUADRATIC_EQUATIONS: Chapter = {
  id: 'math-quadratic-equations', subjectId: 'math-algebra', title: 'Unit 5 · Quadratic Equations',
  summary: 'Solving by factorisation, by square roots, by completing the square and by the formula.',
  lessons: [...ALG_QUADRATIC_1_LESSONS, ...ALG_QUADRATIC_2_LESSONS, ...ALG_QUADRATIC_3_LESSONS, ...ALG_QUADRATIC_4_LESSONS, ...ALG_QUADRATIC_5_LESSONS],
};
export const MATH_FUNCTIONS_PARABOLA: Chapter = {
  id: 'math-functions-parabola', subjectId: 'math-algebra', title: 'Unit 6 · Functions: Parabola', summary: '', lessons: [...ALG_FUNCTIONS_1_LESSONS, ...ALG_FUNCTIONS_2_LESSONS, ...ALG_FUNCTIONS_3_LESSONS, ...ALG_FUNCTIONS_4_LESSONS, ...ALG_FUNCTIONS_5_LESSONS, ...ALG_FUNCTIONS_6_LESSONS, ...ALG_FUNCTIONS_7_LESSONS],
};
export const MATH_FUNCTIONS_HYPERBOLA: Chapter = {
  id: 'math-functions-hyperbola', subjectId: 'math-algebra', title: 'Unit 6 · Hyperbola', summary: '', lessons: [...ALG_HYPERBOLA_1_LESSONS, ...ALG_HYPERBOLA_2_LESSONS, ...ALG_HYPERBOLA_3_LESSONS, ...ALG_HYPERBOLA_4_LESSONS, ...ALG_HYPERBOLA_5_LESSONS],
};
export const MATH_FUNCTIONS_EXPONENTIAL: Chapter = {
  id: 'math-functions-exponential', subjectId: 'math-algebra', title: 'Unit 6 · Exponential Function', summary: '', lessons: [...ALG_EXPONENTIAL_1_LESSONS, ...ALG_EXPONENTIAL_2_LESSONS, ...ALG_EXPONENTIAL_3_LESSONS, ...ALG_EXPONENTIAL_4_LESSONS],
};
export const MATH_FUNCTIONS_MIXED: Chapter = {
  id: 'math-functions-mixed', subjectId: 'math-algebra', title: 'Unit 6 · Mixed Functions', summary: '', lessons: [...ALG_MIXED_1_LESSONS, ...ALG_MIXED_2_LESSONS, ...ALG_MIXED_3_LESSONS, ...ALG_MIXED_4_LESSONS, ...ALG_MIXED_5_LESSONS, ...ALG_MIXED_6_LESSONS, ...ALG_MIXED_7_LESSONS, ...ALG_MIXED_8_LESSONS],
};
export const MATH_FUNCTIONS_TRIALS: Chapter = {
  id: 'math-functions-trials', subjectId: 'math-algebra', title: 'Unit 6 · Trial Tests', summary: '', lessons: [...ALG_TRIALS_U6_LESSONS, ...ALG_TRIALS_U6B_LESSONS, ...ALG_TRIALS_U6C_LESSONS],
};
export const MATH_ALGEBRA_REVISION: Chapter = {
  id: 'math-algebra-revision', subjectId: 'math-algebra', title: 'Revision and Exemplars', summary: '', lessons: [...ALG_REVISION_1_LESSONS, ...ALG_REVISION_2_LESSONS, ...ALG_REVISION_3_LESSONS, ...ALG_REVISION_4_LESSONS, ...ALG_REVISION_5_LESSONS, ...ALG_REVISION_6_LESSONS, ...ALG_REVISION_7_LESSONS, ...ALG_REVISION_8_LESSONS, ...ALG_REVISION_9_LESSONS, ...ALG_REVISION_10_LESSONS],
};
export const MATH_FINANCE: Chapter = {
  id: 'math-finance', subjectId: 'math-algebra', title: 'Unit 7 · Finance', summary: '', lessons: [...ALG_FINANCE_1_LESSONS, ...ALG_FINANCE_2_LESSONS, ...ALG_FINANCE_3_LESSONS, ...ALG_FINANCE_4_LESSONS, ...ALG_FINANCE_5_LESSONS, ...ALG_FINANCE_6_LESSONS, ...ALG_FINANCE_7_LESSONS, ...ALG_FINANCE_8_LESSONS, ...ALG_FINANCE_9_LESSONS],
};
export const MATH_PROBABILITY: Chapter = {
  id: 'math-probability', subjectId: 'math-algebra', title: 'Unit 8 · Probability', summary: '', lessons: [...ALG_PROB_1_LESSONS, ...ALG_PROB_2_LESSONS, ...ALG_PROB_3_LESSONS, ...ALG_PROB_4_LESSONS, ...ALG_PROB_5_LESSONS, ...ALG_PROB_6_LESSONS, ...ALG_PROB_7_LESSONS, ...ALG_PROB_8_LESSONS, ...ALG_PROB_9_LESSONS, ...ALG_PROB_10_LESSONS, ...ALG_PROB_11_LESSONS, ...ALG_PROB_12_LESSONS],
};
