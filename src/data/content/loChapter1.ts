import type { Chapter } from '@/lib/types';

export const LO_CHAPTER_1: Chapter = {
  id: 'lo-ch1',
  subjectId: 'life-orientation',
  title: 'Chapter 1: Development of the Self in Society',
  summary: 'Term 1 — Self-awareness, self-esteem and self-development, relationships and respect for diversity, power and power relations, gender roles and stereotypes, emotional intelligence, stress and coping, and study skills.',
  category: 'Term 1',
  lessons: [
    // ── Lesson 1: Self-Awareness and Self-Esteem ────────────────────────────
    {
      id: 'lo-ch1-self-awareness',
      chapterId: 'lo-ch1',
      subjectId: 'life-orientation',
      title: 'Self-Awareness, Self-Esteem and Self-Development',
      minutes: 14,
      blocks: [
        { id: 'lo1-sa-h1', type: 'heading', level: 2, text: 'Self-Awareness, Self-Esteem and Self-Development' },
        {
          id: 'lo1-sa-tip',
          type: 'callout',
          text: 'Exam Tip: "The first step to discover who you really are is called self-awareness." This exact phrasing appeared as an MCQ in the Oct 2025 Johannesburg East PLC paper — know the definitions of self-awareness, self-esteem, self-confidence and self-development precisely, as exams often test them as fill-in-the-blank or MCQ distractors against each other.',
        },
        { id: 'lo1-sa-def-h', type: 'heading', level: 3, text: 'Key Definitions' },
        {
          id: 'lo1-sa-def',
          type: 'definitions',
          rows: [
            { term: 'Self-awareness', meaning: 'The ability to recognise and understand your own personality, including your strengths, weaknesses, thoughts, beliefs, motivations and emotions. It is the first step to discovering who you really are.' },
            { term: 'Self-esteem', meaning: 'The way you value and feel about yourself — your overall sense of self-worth. High self-esteem comes from recognising your strengths and accepting your weaknesses.' },
            { term: 'Self-confidence', meaning: 'Trust in your own abilities, qualities and judgement; the belief that you can successfully face challenges and meet demands.' },
            { term: 'Self-development', meaning: 'The lifelong process of improving yourself through activities that build your talents, potential, employability and quality of life.' },
            { term: 'Self-image', meaning: 'The mental picture you have of yourself, including your physical appearance, abilities, personality and social roles.' },
            { term: 'Self-concept', meaning: 'The total way you perceive yourself, built from self-image, self-esteem and the "ideal self" you aspire to become.' },
          ],
        },
        { id: 'lo1-sa-factors-h', type: 'heading', level: 3, text: 'Factors That Shape Self-Awareness and Self-Esteem' },
        {
          id: 'lo1-sa-factors',
          type: 'list',
          text: [
            'Family upbringing and the messages received from parents/caregivers.',
            'Friends and peer groups — peer pressure can raise or lower self-esteem.',
            'Media and social media, which often present unrealistic body images and lifestyles.',
            'School experiences — academic success/failure, teacher feedback, bullying.',
            'Culture, religion and community values.',
            'Personal achievements and setbacks.',
            'Physical changes during puberty/adolescence.',
          ],
        },
        { id: 'lo1-sa-build-h', type: 'heading', level: 3, text: 'Ways to Build Self-Awareness and Self-Esteem' },
        {
          id: 'lo1-sa-build',
          type: 'list',
          text: [
            'Identify your personal strengths and weaknesses honestly.',
            'Set realistic, achievable goals and celebrate small successes.',
            'Practise positive self-talk instead of self-criticism.',
            'Surround yourself with supportive, affirming people.',
            'Reflect regularly — journaling or quiet self-reflection time.',
            'Accept constructive feedback without taking it as a personal attack.',
            'Engage in activities you are good at to build competence and confidence.',
          ],
        },
        {
          id: 'lo1-sa-qa',
          type: 'questions',
          qa: [
            { n: '1', q: 'The first step to discover who you really are is called ______.', marks: 1, a: 'Self-awareness' },
            { q: 'Define self-esteem.', marks: 2, a: 'Self-esteem is the way a person values and feels about themselves; their overall sense of self-worth.' },
            {
              q: 'Discuss THREE factors that influence a teenager\'s self-esteem.',
              marks: 6,
              a: [
                'Family upbringing — supportive or critical messages from parents shape how a teenager sees themselves.',
                'Peer groups and friends — peer pressure and acceptance/rejection strongly affect self-worth during adolescence.',
                'Media and social media — unrealistic images of beauty and success can lower self-esteem through comparison.',
                '(Any THREE, fully discussed: family, peers, media, school, culture/religion, physical changes.)',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Relationships and Respect for Diversity ───────────────────
    {
      id: 'lo-ch1-relationships',
      chapterId: 'lo-ch1',
      subjectId: 'life-orientation',
      title: 'Healthy Relationships and Respect for Diversity',
      minutes: 14,
      blocks: [
        { id: 'lo1-rel-h1', type: 'heading', level: 2, text: 'Healthy Relationships and Respect for Diversity' },
        { id: 'lo1-rel-def-h', type: 'heading', level: 3, text: 'Characteristics of a Healthy Relationship' },
        {
          id: 'lo1-rel-def',
          type: 'list',
          text: [
            'Mutual respect — both people value each other\'s feelings, opinions and boundaries.',
            'Trust and honesty.',
            'Open and clear communication.',
            'Equality — shared power and decision-making, not one person controlling the other.',
            'Support for each other\'s goals and individuality.',
            'Willingness to compromise and resolve conflict constructively.',
          ],
        },
        { id: 'lo1-rel-diff-h', type: 'heading', level: 3, text: 'Respecting Differences' },
        {
          id: 'lo1-rel-diff',
          type: 'list',
          text: [
            'South Africa is a diverse society — people differ in race, gender, ability, culture, religion, language and sexual orientation.',
            'Respecting differences means affirming others, giving praise, and accepting people as they are without judgement.',
            'Disagreeing respectfully means stating an opposing view without insulting, belittling or attacking the other person.',
            'Positive role models — people who demonstrate good values and behaviour that others can learn from and aspire to.',
          ],
        },
        {
          id: 'lo1-rel-note',
          type: 'callout',
          text: 'Exam Tip: "To support, encourage and give praise to others" = to AFFIRM others. This is a commonly tested MCQ definition.',
        },
        { id: 'lo1-rel-power-h', type: 'heading', level: 3, text: 'Power and Power Relations' },
        {
          id: 'lo1-rel-power',
          type: 'definitions',
          rows: [
            { term: 'Power', meaning: 'Control or authority over another person; the ability to influence or direct the behaviour of others.' },
            { term: 'Power relations', meaning: 'Sharing of power between people in a relationship — healthy relationships have balanced, shared power rather than one partner dominating the other.' },
            { term: 'Unequal power relations', meaning: 'Occur when one person has significantly more control, decision-making authority or influence than the other, which can lead to abuse, manipulation or exploitation.' },
          ],
        },
        { id: 'lo1-rel-gender-h', type: 'heading', level: 3, text: 'Gender' },
        {
          id: 'lo1-rel-gender',
          type: 'definitions',
          rows: [
            { term: 'Gender', meaning: 'The socially constructed roles, behaviours and attributes that a society considers appropriate for men and women — distinct from biological sex.' },
            { term: 'Masculinity', meaning: 'The set of characteristics, behaviours and roles traditionally associated with being male.' },
            { term: 'Femininity', meaning: 'The set of characteristics, behaviours and roles traditionally associated with being female.' },
            { term: 'Gender stereotype', meaning: 'An oversimplified, fixed belief about how men and women should behave, e.g. "boys don\'t cry" or "girls can\'t lead".' },
          ],
        },
        {
          id: 'lo1-rel-qa',
          type: 'questions',
          qa: [
            { q: 'Encouraging and giving praise to others is called ______.', marks: 1, a: 'To affirm others' },
            { q: 'Define power relations.', marks: 1, a: 'The sharing of power between people in a relationship.' },
            { q: 'Gender refers to:', marks: 1, a: 'Being male or female — the socially constructed roles and characteristics associated with each.' },
            {
              q: 'Explain THREE characteristics of a healthy relationship.',
              marks: 6,
              a: [
                'Mutual respect — both partners value each other\'s feelings and opinions.',
                'Trust and honesty — partners are truthful and reliable with one another.',
                'Equality — power and decision-making are shared, not controlled by one partner.',
                '(Any THREE, fully explained.)',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Emotional Intelligence ─────────────────────────────────────
    {
      id: 'lo-ch1-emotional-intelligence',
      chapterId: 'lo-ch1',
      subjectId: 'life-orientation',
      title: 'Emotional Intelligence',
      minutes: 12,
      blocks: [
        { id: 'lo1-ei-h1', type: 'heading', level: 2, text: 'Emotional Intelligence' },
        {
          id: 'lo1-ei-def',
          type: 'list',
          text: [
            'Emotional intelligence (EQ) is the ability to identify, understand and manage your own emotions, and to recognise and respond appropriately to the emotions of others.',
            'People with high EQ handle stress better, build stronger relationships and make more thoughtful decisions.',
          ],
        },
        { id: 'lo1-ei-components-h', type: 'heading', level: 3, text: 'Five Components of Emotional Intelligence' },
        {
          id: 'lo1-ei-acronym',
          type: 'acronym',
          word: 'SSMER',
          forWhat: 'The five components of emotional intelligence',
          items: [
            { letter: 'S', stands: 'Self-awareness — recognising your own emotions as they happen', note: 'Understanding how your feelings affect your thoughts and behaviour' },
            { letter: 'S', stands: 'Self-regulation — managing and controlling your emotional reactions', note: 'Staying calm and in control, even under pressure' },
            { letter: 'M', stands: 'Motivation — using emotions to pursue goals with energy and persistence', note: 'Staying optimistic despite setbacks' },
            { letter: 'E', stands: 'Empathy — recognising and understanding the emotions of others', note: 'Being able to see a situation from another person\'s perspective' },
            { letter: 'R', stands: 'Relationship/social skills — managing relationships and building rapport', note: 'Communicating clearly and resolving conflict well' },
          ],
        },
        { id: 'lo1-ei-importance-h', type: 'heading', level: 3, text: 'Why Emotional Intelligence Matters' },
        {
          id: 'lo1-ei-importance',
          type: 'list',
          text: [
            'Helps teenagers manage the emotional ups and downs of adolescence.',
            'Improves communication and reduces conflict in relationships.',
            'Builds resilience when facing setbacks or criticism.',
            'Supports better decision-making under pressure (e.g. resisting peer pressure).',
            'Is valued by employers as a workplace skill.',
          ],
        },
        {
          id: 'lo1-ei-qa',
          type: 'questions',
          qa: [
            { q: 'Define emotional intelligence.', marks: 2, a: 'Emotional intelligence is the ability to identify, understand and manage your own emotions, and to recognise and respond appropriately to the emotions of others.' },
            {
              q: 'Discuss any THREE components of emotional intelligence.',
              marks: 6,
              a: [
                'Self-awareness — recognising your own emotions as they occur.',
                'Self-regulation — managing and controlling emotional reactions appropriately.',
                'Empathy — understanding and being sensitive to the emotions of others.',
                '(Any THREE: self-awareness, self-regulation, motivation, empathy, social skills.)',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Stress, Coping and Resilience ──────────────────────────────
    {
      id: 'lo-ch1-stress-coping',
      chapterId: 'lo-ch1',
      subjectId: 'life-orientation',
      title: 'Stress, Coping Strategies and Resilience',
      minutes: 14,
      blocks: [
        { id: 'lo1-sc-h1', type: 'heading', level: 2, text: 'Stress, Coping Strategies and Resilience' },
        {
          id: 'lo1-sc-def',
          type: 'definitions',
          rows: [
            { term: 'Stress', meaning: 'The body and mind\'s response to pressure or demands that feel overwhelming — can be caused by exams, relationships, family problems or puberty-related changes.' },
            { term: 'Coping strategy', meaning: 'A method or technique used to manage stress and difficult emotions in a healthy way.' },
            { term: 'Resilience', meaning: 'The ability to recover quickly from setbacks, adapt to change, and keep functioning well despite difficult or stressful circumstances.' },
          ],
        },
        { id: 'lo1-sc-puberty-h', type: 'heading', level: 3, text: 'Changes Associated with Puberty and Related Emotional Difficulties' },
        {
          id: 'lo1-sc-puberty',
          type: 'list',
          text: [
            'Physical changes: growth spurts, voice changes, development of secondary sexual characteristics.',
            'Emotional changes: mood swings, increased sensitivity, confusion about identity.',
            'Social changes: shifting friendships, increased interest in romantic relationships, desire for independence from parents.',
            'These changes can cause anxiety, self-consciousness, irritability and lowered self-esteem if not well understood or supported.',
          ],
        },
        { id: 'lo1-sc-support-h', type: 'heading', level: 3, text: 'How Teenagers Can Support Each Other Through Puberty' },
        {
          id: 'lo1-sc-support',
          type: 'list',
          text: [
            'Listen without judgement when a friend shares what they are going through.',
            'Normalise the experience — reassure them that physical and emotional changes are a normal part of growing up.',
            'Avoid teasing or mocking friends about physical changes (e.g. voice cracking, acne, body shape).',
            'Encourage open conversation with trusted adults (parents, counsellors, teachers) where appropriate.',
            'Be patient with mood swings and avoid taking them personally.',
            'Share accurate information rather than rumours or myths.',
          ],
        },
        { id: 'lo1-sc-healthy-h', type: 'heading', level: 3, text: 'Healthy Coping Strategies' },
        {
          id: 'lo1-sc-healthy',
          type: 'list',
          text: [
            'Physical activity and exercise to release built-up tension.',
            'Talking to someone you trust about what is bothering you.',
            'Time management and planning to reduce academic pressure.',
            'Relaxation techniques — deep breathing, meditation, listening to music.',
            'Maintaining a balanced routine: sleep, nutrition, study and leisure time.',
            'Journaling or creative outlets to process emotions.',
          ],
        },
        { id: 'lo1-sc-unhealthy-h', type: 'heading', level: 3, text: 'Unhealthy Coping Strategies to Avoid' },
        {
          id: 'lo1-sc-unhealthy',
          type: 'list',
          text: ['Substance abuse (alcohol, drugs, smoking)', 'Avoidance or denial of the problem', 'Aggressive or violent outbursts', 'Social withdrawal and isolation', 'Self-harm'],
        },
        {
          id: 'lo1-sc-qa',
          type: 'questions',
          qa: [
            {
              q: 'Suggest ONE way in which teenagers can support each other as they go through the changes associated with puberty and the related emotional difficulties.',
              marks: 2,
              a: 'Listen without judgement and reassure each other that the physical and emotional changes of puberty are a normal part of growing up (accept any valid, well-explained strategy such as avoiding teasing, sharing accurate information, or encouraging each other to speak to a trusted adult).',
            },
            {
              q: 'Discuss THREE healthy coping strategies a teenager could use to manage stress.',
              marks: 6,
              a: [
                'Physical activity/exercise to release tension and improve mood.',
                'Talking to a trusted person about what is causing the stress.',
                'Time management to reduce the pressure of looming deadlines.',
                '(Any THREE, fully discussed.)',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Study Skills ───────────────────────────────────────────────
    {
      id: 'lo-ch1-study-skills',
      chapterId: 'lo-ch1',
      subjectId: 'life-orientation',
      title: 'Study Skills and Study Methods',
      minutes: 14,
      blocks: [
        { id: 'lo1-ss-h1', type: 'heading', level: 2, text: 'Study Skills and Study Methods' },
        {
          id: 'lo1-ss-tip',
          type: 'callout',
          text: 'Exam Tip: "Reading quickly to find specific information" = scanning. "Reading quickly to get a general overview/main idea" = skimming. Past papers ask you to differentiate between these two methods directly.',
        },
        { id: 'lo1-ss-reading-h', type: 'heading', level: 3, text: 'Reading Methods: Scanning vs Skimming' },
        {
          id: 'lo1-ss-reading',
          type: 'definitions',
          rows: [
            { term: 'Scanning', meaning: 'Moving your eyes quickly over text to find specific facts, keywords, dates or figures, without reading every word.' },
            { term: 'Skimming', meaning: 'Reading quickly over a text — headings, topic sentences, first and last paragraphs — to get a general idea or overview of what it is about.' },
          ],
        },
        { id: 'lo1-ss-methods-h', type: 'heading', level: 3, text: 'Effective Study Methods' },
        {
          id: 'lo1-ss-methods',
          type: 'list',
          text: [
            'Mind maps and diagrams to visually organise information.',
            'Summarising notes in your own words rather than copying verbatim.',
            'Flashcards for memorising key terms, dates and formulae.',
            'Past exam papers to practise applying knowledge under time pressure.',
            'The SQ3R method — Survey, Question, Read, Recite, Review.',
            'Spaced repetition — reviewing material at increasing intervals rather than cramming.',
            'Group study for discussing and testing each other on content.',
          ],
        },
        { id: 'lo1-ss-time-h', type: 'heading', level: 3, text: 'Time Management for Studying' },
        {
          id: 'lo1-ss-time',
          type: 'list',
          text: [
            'Draw up a realistic study timetable allocating time to each subject.',
            'Break large tasks into smaller, manageable chunks.',
            'Prioritise difficult or high-mark subjects/topics.',
            'Take regular short breaks to maintain concentration (e.g. the Pomodoro technique).',
            'Avoid procrastination by starting with the task you are dreading most.',
            'Study in a quiet, distraction-free environment.',
          ],
        },
        {
          id: 'lo1-ss-qa',
          type: 'questions',
          qa: [
            { q: 'Differentiate between scanning and skimming as methods of reading.', marks: 4, a: 'Scanning is reading quickly to find specific information, facts or keywords in a text. Skimming is reading quickly to get a general overview or main idea of what a text is about.' },
            {
              q: 'Discuss THREE study methods that can help a Grade 10 learner prepare effectively for examinations.',
              marks: 6,
              a: [
                'Mind maps — visually organise and connect information, making it easier to recall.',
                'Past exam papers — build familiarity with the format and time pressure of the real exam.',
                'A study timetable — ensures time is allocated fairly across all subjects and avoids last-minute cramming.',
                '(Any THREE, fully discussed.)',
              ],
            },
          ],
        },
      ],
    },
  ],
};
