import type { Lesson } from '../../lib/types';
import { r, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 8 Probability: Task 6 questions 5-10 (tree diagrams). Book pp. 202-203; photo 81.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_TASK_6B = prob('alg-u8-task-6b', 'E. Tree Diagrams: Task 6 (continued)', 45, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '5', context: r`Fine day $\tfrac37$, wet day $\tfrac47$. Fine day: Sipho walks $\tfrac7{10}$, mother drives $\tfrac2{10}$, taxi $\tfrac1{10}$. Wet day: walks $\tfrac19$, mother drives $\tfrac59$, taxi $\tfrac39$.`, q: r`5.1 Draw a tree diagram. 5.2 For a day selected at random, what is the probability Sipho takes a taxi?`, a: r`5.1 First branches fine $\tfrac37$ / wet $\tfrac47$; each splits into walk, mother, taxi with the fractions above. 5.2 $\dfrac37\times\dfrac1{10}+\dfrac47\times\dfrac39=\dfrac3{70}+\dfrac4{21}=\dfrac{49}{210}=\dfrac7{30}$.` },
    { n: '5.3', q: r`If Sipho goes to school 215 days a year, estimate how many days his mother drives him.`, a: r`$P(\text{mother})=\dfrac37\times\dfrac2{10}+\dfrac47\times\dfrac59=\dfrac{6}{70}+\dfrac{20}{63}=\dfrac{127}{315}\approx0{,}403$. $215\times0{,}403\approx87$ days.` },
    { n: '6', context: r`A bag has 3 white, 4 green and 5 red balls ($12$ in all). Two balls are drawn without replacement.`, q: r`6.1 Probability the balls are the same colour. 6.2 Different colours.`, a: r`6.1 $\dfrac3{12}\cdot\dfrac2{11}+\dfrac4{12}\cdot\dfrac3{11}+\dfrac5{12}\cdot\dfrac4{11}=\dfrac{6+12+20}{132}=\dfrac{19}{66}$. 6.2 $1-\dfrac{19}{66}=\dfrac{47}{66}$.` },
    { n: '7', context: r`20 boys and 15 girls in a class. The teacher chooses 3 learners at random, one after the other.`, q: r`7.1 Probability the first is a boy. 7.2 Draw a tree diagram with all outcomes. 7.3 Probability of boy, girl, boy in that order. 7.4 All three are girls. 7.5 At least one is a boy.`, a: r`7.1 $\dfrac{20}{35}=\dfrac47$. 7.2 Branches: first boy $\tfrac{20}{35}$ / girl $\tfrac{15}{35}$; second after a boy: boy $\tfrac{19}{34}$, girl $\tfrac{15}{34}$; after a girl: boy $\tfrac{20}{34}$, girl $\tfrac{14}{34}$; and so on, giving 8 outcomes BBB … GGG. 7.3 $\dfrac{20}{35}\cdot\dfrac{15}{34}\cdot\dfrac{19}{33}=\dfrac{190}{1\,309}$. 7.4 $\dfrac{15}{35}\cdot\dfrac{14}{34}\cdot\dfrac{13}{33}=\dfrac{13}{187}$. 7.5 $1-\dfrac{13}{187}=\dfrac{174}{187}$.` },
    { n: '8', context: r`80% of stolen vehicles are stolen by syndicates, 20% by individuals. Syndicate vehicles: 24% recovered within 48 h, 16% after 48 h, 60% never. Individuals: 38% within 48 h, 58% after, 4% never.`, q: r`8.1 Draw a tree diagram. 8.2 Probability a stolen vehicle is stolen by a syndicate and recovered within 48 hours. 8.3 Probability a stolen vehicle will not be recovered.`, a: r`8.2 $0{,}8\times0{,}24=0{,}192$. 8.3 $0{,}8\times0{,}60+0{,}2\times0{,}04=0{,}48+0{,}008=0{,}488$.` },
    { n: '9', context: r`The probability of rain on a given day is 63%. A child has a 12% chance of falling in dry weather and is three times as likely to fall in wet weather.`, q: r`9.1 Draw a tree diagram. 9.2 Probability a child will not fall on any given day. 9.3 Probability a child falls in dry weather.`, a: r`Dry $=0{,}37$. Fall in wet $=3\times0{,}12=0{,}36$. 9.2 $0{,}37\times0{,}88+0{,}63\times0{,}64=0{,}3256+0{,}4032=0{,}7288$. 9.3 $0{,}37\times0{,}12=0{,}0444$.` },
    { n: '10', context: r`The SA swimming team has 3 men and 5 women. A different captain is chosen for each of two qualifying rounds.`, q: r`Draw a tree diagram for men/women captains in round 1 then round 2, with all probabilities.`, a: r`Round 1: M $\tfrac38$, W $\tfrac58$. Round 2 (a different person): after M: M $\tfrac27$, W $\tfrac57$; after W: M $\tfrac37$, W $\tfrac47$. Outcomes: MM $\tfrac{6}{56}=\tfrac3{28}$; MW $\tfrac{15}{56}$; WM $\tfrac{15}{56}$; WW $\tfrac{20}{56}=\tfrac5{14}$. Sum $=1$ ✔.` },
  ]),
  note(r`These are my own worked answers; the book’s answer key was not photographed.`),
]);

export const ALG_PROB_10_LESSONS: Lesson[] = [PROB_TASK_6B];
