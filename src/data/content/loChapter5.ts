import type { Chapter } from '@/lib/types';

export const LO_CHAPTER_5: Chapter = {
  id: 'lo-ch5',
  subjectId: 'life-orientation',
  title: 'Chapter 5: Physical Education — Participation in Physical Activity',
  summary: 'Ongoing, all terms — The value of regular physical activity, components of fitness, safety in physical activity, and ethics and fair play in sport, including the link between exercise and lifestyle disease prevention.',
  category: 'Physical Education',
  lessons: [
    // ── Lesson 1: The Value of Physical Activity ─────────────────────────────
    {
      id: 'lo-ch5-value-of-activity',
      chapterId: 'lo-ch5',
      subjectId: 'life-orientation',
      title: 'The Value of Regular Physical Activity',
      minutes: 12,
      blocks: [
        { id: 'lo5-val-h1', type: 'heading', level: 2, text: 'The Value of Regular Physical Activity' },
        {
          id: 'lo5-val-def',
          type: 'definitions',
          rows: [
            { term: 'Physical activity', meaning: 'Any bodily movement produced by skeletal muscles that requires energy expenditure, including sport, exercise, play and everyday movement.' },
            { term: 'Physical fitness', meaning: 'The ability of the body to function efficiently and effectively in work, leisure activities and to resist disease.' },
          ],
        },
        { id: 'lo5-val-benefits-h', type: 'heading', level: 3, text: 'Benefits of Regular Physical Activity' },
        {
          id: 'lo5-val-benefits',
          type: 'list',
          text: [
            'Physical: strengthens the heart and lungs, builds muscle and bone strength, improves flexibility, helps maintain a healthy weight.',
            'Reduces the risk of lifestyle diseases such as obesity, type 2 diabetes, hypertension and cardiovascular disease.',
            'Mental: reduces stress, anxiety and symptoms of depression; releases endorphins that improve mood.',
            'Social: builds teamwork, communication and leadership skills through team sport.',
            'Academic: improves concentration, memory and energy levels, supporting better school performance.',
            'Builds discipline, resilience and goal-setting habits that carry into other areas of life.',
          ],
        },
        {
          id: 'lo5-val-qa',
          type: 'questions',
          qa: [
            { q: 'Define physical fitness.', marks: 2, a: 'Physical fitness is the ability of the body to function efficiently and effectively in work and leisure activities, and to resist disease.' },
            {
              q: 'Discuss THREE benefits of regular physical activity for a Grade 10 learner.',
              marks: 6,
              a: [
                'Physical: strengthens the heart, lungs, muscles and bones, and reduces the risk of lifestyle diseases.',
                'Mental: reduces stress and anxiety and improves mood through the release of endorphins.',
                'Academic: improves concentration and energy levels, supporting better school performance.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Components of Physical Fitness ──────────────────────────────
    {
      id: 'lo-ch5-fitness-components',
      chapterId: 'lo-ch5',
      subjectId: 'life-orientation',
      title: 'Components of Physical Fitness',
      minutes: 12,
      blocks: [
        { id: 'lo5-fc-h1', type: 'heading', level: 2, text: 'Components of Physical Fitness' },
        {
          id: 'lo5-fc-acronym',
          type: 'acronym',
          word: 'CSMFB',
          forWhat: 'The five health-related components of physical fitness',
          items: [
            { letter: 'C', stands: 'Cardiovascular endurance — the ability of the heart and lungs to supply oxygen during sustained activity', note: 'Built through activities like running, swimming and cycling' },
            { letter: 'S', stands: 'Strength — the maximum force a muscle or muscle group can produce', note: 'Built through resistance training' },
            { letter: 'M', stands: 'Muscular endurance — the ability of a muscle to repeat a movement over time without fatigue', note: 'Different from strength: endurance is about repetition, not maximum force' },
            { letter: 'F', stands: 'Flexibility — the range of motion available at a joint', note: 'Improved through stretching' },
            { letter: 'B', stands: 'Body composition — the ratio of fat mass to lean mass (muscle, bone, organs) in the body', note: 'A healthy body composition supports overall fitness and reduces disease risk' },
          ],
        },
        {
          id: 'lo5-fc-qa',
          type: 'questions',
          qa: [
            { q: 'Name any THREE components of physical fitness.', marks: 3, a: ['Cardiovascular endurance', 'Muscular strength', 'Flexibility (any THREE: also muscular endurance, body composition)'] },
            { q: 'Explain the difference between muscular strength and muscular endurance.', marks: 4, a: 'Muscular strength is the maximum force a muscle or muscle group can produce in a single effort, while muscular endurance is the ability of a muscle to repeat a movement or sustain a contraction over time without becoming fatigued.' },
          ],
        },
      ],
    },

    // ── Lesson 3: Safety in Physical Activity ─────────────────────────────────
    {
      id: 'lo-ch5-safety',
      chapterId: 'lo-ch5',
      subjectId: 'life-orientation',
      title: 'Safety in Physical Activity',
      minutes: 10,
      blocks: [
        { id: 'lo5-saf-h1', type: 'heading', level: 2, text: 'Safety in Physical Activity' },
        { id: 'lo5-saf-list-h', type: 'heading', level: 3, text: 'Safety Guidelines Before, During and After Exercise' },
        {
          id: 'lo5-saf-list',
          type: 'list',
          text: [
            'Warm up before activity to prepare muscles and joints and reduce injury risk.',
            'Use appropriate protective equipment for the activity/sport.',
            'Stay hydrated before, during and after exercise.',
            'Follow correct technique — poor technique is a common cause of injury.',
            'Progress gradually — avoid sudden increases in intensity or duration.',
            'Cool down and stretch after activity to aid recovery.',
            'Rest adequately between sessions to allow the body to recover.',
            'Stop and seek medical attention if experiencing pain, dizziness or chest discomfort.',
          ],
        },
        {
          id: 'lo5-saf-qa',
          type: 'questions',
          qa: [
            { q: 'State THREE safety precautions a learner should take before participating in physical activity.', marks: 3, a: ['Warm up to prepare muscles and joints.', 'Use appropriate protective equipment.', 'Stay hydrated.'] },
          ],
        },
      ],
    },

    // ── Lesson 4: Ethics and Fair Play in Sport ───────────────────────────────
    {
      id: 'lo-ch5-ethics-fair-play',
      chapterId: 'lo-ch5',
      subjectId: 'life-orientation',
      title: 'Ethics and Fair Play in Sport',
      minutes: 12,
      blocks: [
        { id: 'lo5-eth-h1', type: 'heading', level: 2, text: 'Ethics and Fair Play in Sport' },
        {
          id: 'lo5-eth-def',
          type: 'definitions',
          rows: [
            { term: 'Sportsmanship', meaning: 'Fair and generous behaviour or conduct towards opponents, teammates and officials in sport.' },
            { term: 'Fair play', meaning: 'Competing according to the rules of a sport, with honesty and respect for opponents, officials and the spirit of the game.' },
            { term: 'Doping', meaning: 'Using banned performance-enhancing substances to gain an unfair advantage in sport (see Chapter 3 for a full discussion).' },
          ],
        },
        { id: 'lo5-eth-principles-h', type: 'heading', level: 3, text: 'Principles of Fair Play' },
        {
          id: 'lo5-eth-principles',
          type: 'list',
          text: [
            'Respecting the rules of the game and the decisions of officials, even when you disagree.',
            'Respecting opponents, teammates and officials regardless of the outcome.',
            'Competing to the best of your ability without resorting to cheating.',
            'Accepting both victory and defeat graciously.',
            'Refusing to use banned substances or other unfair advantages.',
          ],
        },
        { id: 'lo5-eth-value-h', type: 'heading', level: 3, text: 'Why Ethics Matter in Sport' },
        {
          id: 'lo5-eth-value',
          type: 'list',
          text: [
            'Protects the integrity and credibility of competitive sport.',
            'Builds character, discipline and respect that extend beyond sport into daily life.',
            'Ensures a level playing field so that results reflect genuine skill and effort.',
            'Protects athletes\' long-term health by discouraging dangerous shortcuts such as doping.',
          ],
        },
        {
          id: 'lo5-eth-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "fair play".', marks: 2, a: 'Fair play means competing according to the rules of a sport, with honesty and respect for opponents, officials and the spirit of the game.' },
            {
              q: 'Discuss TWO reasons why ethics are important in sport.',
              marks: 4,
              a: ['Ethics protect the integrity of competition, ensuring results reflect genuine skill and effort.', 'Ethical conduct builds character, discipline and respect that extend beyond sport into other areas of life.'],
            },
          ],
        },
      ],
    },
  ],
};
