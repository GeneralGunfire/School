import type { Chapter } from '@/lib/types';

export const LO_CHAPTER_4: Chapter = {
  id: 'lo-ch4',
  subjectId: 'life-orientation',
  title: 'Chapter 4: Careers and Career Choices',
  summary: 'Term 3 — The world of work, career fields, post-school study options, the job market and the impact of globalisation and scarce skills, and planning a career path.',
  category: 'Term 3',
  lessons: [
    // ── Lesson 1: The World of Work ──────────────────────────────────────────
    {
      id: 'lo-ch4-world-of-work',
      chapterId: 'lo-ch4',
      subjectId: 'life-orientation',
      title: 'The World of Work',
      minutes: 14,
      blocks: [
        { id: 'lo4-wow-h1', type: 'heading', level: 2, text: 'The World of Work' },
        {
          id: 'lo4-wow-def',
          type: 'definitions',
          rows: [
            { term: 'Career', meaning: 'A person\'s chosen path of progressive achievement, usually involving a sequence of related jobs, across their working life.' },
            { term: 'Occupation', meaning: 'A specific job or profession a person does to earn a living, e.g. teacher, electrician, accountant.' },
            { term: 'Job market', meaning: 'The supply of, and demand for, labour — where employers seek workers and workers seek employment.' },
            { term: 'Entrepreneurship', meaning: 'The process of starting and running your own business, taking on financial risk in the hope of profit.' },
          ],
        },
        { id: 'lo4-wow-changing-h', type: 'heading', level: 3, text: 'The Changing World of Work' },
        {
          id: 'lo4-wow-changing',
          type: 'list',
          text: [
            'Technology and automation are changing which jobs exist and which skills are in demand.',
            'Globalisation connects local job markets to international trends and competition.',
            'The gig economy and remote work have increased flexible, non-traditional employment.',
            'Lifelong learning is increasingly necessary as industries evolve faster than before.',
            'Entrepreneurship is growing in importance as a response to limited formal employment.',
          ],
        },
        { id: 'lo4-wow-factors-h', type: 'heading', level: 3, text: 'Factors to Consider When Choosing a Career' },
        {
          id: 'lo4-wow-factors',
          type: 'list',
          text: [
            'Your interests, strengths, values and personality.',
            'Academic subjects and results that qualify you for a field.',
            'Job availability and demand in that field (scarce skills vs oversupplied fields).',
            'Income potential and working conditions.',
            'Required training, qualifications and costs of further study.',
            'Opportunities for growth and advancement.',
          ],
        },
        {
          id: 'lo4-wow-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "career".', marks: 2, a: 'A career is a person\'s chosen path of progressive achievement, usually involving a sequence of related jobs across their working life.' },
            {
              q: 'Discuss THREE factors a Grade 10 learner should consider when choosing a career.',
              marks: 6,
              a: [
                'Personal interests, strengths and values — a career should align with what you enjoy and are good at.',
                'Required subjects, qualifications and academic performance needed to enter the field.',
                'Job availability and demand — whether the field has scarce skills or an oversupply of job seekers.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Career Fields ───────────────────────────────────────────────
    {
      id: 'lo-ch4-career-fields',
      chapterId: 'lo-ch4',
      subjectId: 'life-orientation',
      title: 'Career Fields',
      minutes: 12,
      blocks: [
        { id: 'lo4-cf-h1', type: 'heading', level: 2, text: 'Career Fields' },
        {
          id: 'lo4-cf-list',
          type: 'list',
          text: [
            'Humanities and Social Sciences — teaching, law, psychology, social work, journalism.',
            'Natural and Physical Sciences — medicine, engineering, biotechnology, environmental science.',
            'Mathematical Sciences — actuarial science, statistics, computer science, data science.',
            'Economic and Management Sciences — accounting, business management, marketing, finance.',
            'Human/Social Services — nursing, counselling, community development.',
            'Agriculture and Nature Conservation — farming, veterinary science, forestry.',
            'Arts and Culture — visual art, performing arts, design, music.',
            'Technology/Trades — artisan trades (electrician, plumber, welder), IT, engineering technology.',
          ],
        },
        { id: 'lo4-cf-scarce-h', type: 'heading', level: 3, text: 'Scarce Skills in South Africa' },
        {
          id: 'lo4-cf-scarce',
          type: 'list',
          text: [
            'Scarce skills are occupations where there are too few qualified people to meet demand.',
            'In South Africa, scarce skills are commonly found in IT, engineering, finance, healthcare, and skilled trades.',
            'Scarce skills matter because fields with a shortage of qualified people usually offer better job security and salary prospects to those who train in them.',
            'Choosing a scarce-skills field can improve a learner\'s future employability.',
          ],
        },
        {
          id: 'lo4-cf-qa',
          type: 'questions',
          qa: [
            { q: 'Define the phrase "scarce skills".', marks: 1, a: 'Scarce skills are occupations where there are too few qualified people available to meet the demand for that skill in the job market.' },
            { q: 'State THREE reasons why it\'s important for people to learn these scarce skills.', marks: 3, a: ['Scarce skills offer better job security because demand exceeds supply.', 'They often come with higher earning potential.', 'Learning scarce skills helps fill critical national shortages and supports economic growth.'] },
          ],
        },
      ],
    },

    // ── Lesson 3: Post-School Study Options ──────────────────────────────────
    {
      id: 'lo-ch4-post-school',
      chapterId: 'lo-ch4',
      subjectId: 'life-orientation',
      title: 'Post-School Study Options',
      minutes: 12,
      blocks: [
        { id: 'lo4-ps-h1', type: 'heading', level: 2, text: 'Post-School Study Options' },
        {
          id: 'lo4-ps-table',
          type: 'definitions',
          rows: [
            { term: 'University', meaning: 'Offers academic degrees (Bachelor\'s, Honours, Master\'s, Doctorate) typically requiring a National Senior Certificate with a Bachelor\'s pass and subject-specific admission requirements.' },
            { term: 'University of Technology', meaning: 'Offers more practically-oriented diplomas and degrees, often with workplace experience components, e.g. engineering, IT, applied sciences.' },
            { term: 'TVET College', meaning: 'Technical and Vocational Education and Training colleges offer vocational/occupational qualifications and artisan trade training, often more accessible and affordable than university.' },
            { term: 'Apprenticeship/Learnership', meaning: 'Combines structured workplace training with part-time study, leading to a recognised trade or occupational qualification while earning an allowance.' },
            { term: 'Private colleges', meaning: 'Offer accredited diplomas/certificates in specific fields, e.g. business, hospitality, media.' },
          ],
        },
        { id: 'lo4-ps-factors-h', type: 'heading', level: 3, text: 'Choosing the Right Post-School Option' },
        {
          id: 'lo4-ps-factors',
          type: 'list',
          text: [
            'Consider admission requirements (subjects and marks needed).',
            'Consider cost — tuition, accommodation, and available bursaries/loans (e.g. NSFAS).',
            'Consider the practical vs theoretical nature of the qualification and how you learn best.',
            'Research the employability of graduates from the institution/programme.',
            'Consider location and whether you would need to relocate.',
          ],
        },
        {
          id: 'lo4-ps-qa',
          type: 'questions',
          qa: [
            { q: 'Name any TWO post-school study options available to Grade 12 graduates.', marks: 2, a: ['University', 'TVET College', 'Apprenticeship/Learnership (any TWO)'] },
            {
              q: 'Discuss TWO factors a learner should consider when choosing a post-school study option.',
              marks: 4,
              a: ['Admission requirements — the subjects and marks needed to be accepted.', 'Cost of study and availability of bursaries or financial aid such as NSFAS.'],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Job Market Trends, Globalisation and Skills Shortages ──────
    {
      id: 'lo-ch4-job-market-trends',
      chapterId: 'lo-ch4',
      subjectId: 'life-orientation',
      title: 'Job Market Trends, Globalisation and Skills Shortages',
      minutes: 14,
      blocks: [
        { id: 'lo4-jmt-h1', type: 'heading', level: 2, text: 'Job Market Trends, Globalisation and Skills Shortages' },
        {
          id: 'lo4-jmt-tip',
          type: 'callout',
          text: 'Exam Tip: "Globalisation has led to an exponential increase in job opportunities. This can be seen from the change in the unemployment rate and employment-to-population ratio of an economy. However, this increase is not evenly seen across all sectors and countries." Know this definition and be ready to apply it to extracts about global/local job trends.',
        },
        { id: 'lo4-jmt-def-h', type: 'heading', level: 3, text: 'Defining Globalisation' },
        {
          id: 'lo4-jmt-def',
          type: 'list',
          text: [
            'Globalisation is the increasing interconnectedness of countries through trade, technology, investment and the movement of people and information.',
            'It has led to an exponential increase in job opportunities worldwide, but this growth is not evenly distributed across all sectors and countries.',
          ],
        },
        { id: 'lo4-jmt-drivers-h', type: 'heading', level: 3, text: 'Drivers of Change in Emerging Demands and Changing Career Patterns' },
        {
          id: 'lo4-jmt-drivers',
          type: 'list',
          text: [
            'Rapid technological advancement and automation, which create new roles while making others obsolete.',
            'Globalisation, which exposes local job seekers to international competition and opportunities.',
            'Changing demographics and a growing, more educated workforce entering the job market.',
            'Shifts in consumer demand and industry growth (e.g. renewable energy, digital services).',
          ],
        },
        { id: 'lo4-jmt-trends-h', type: 'heading', level: 3, text: 'Trends in the Global Career Market' },
        {
          id: 'lo4-jmt-trends',
          type: 'list',
          text: [
            'Growing demand for digital and IT skills across almost all industries.',
            'Rise of remote and flexible working arrangements.',
            'Increasing emphasis on lifelong learning and reskilling as industries evolve.',
            'Greater demand for skills in healthcare, due to ageing populations in many countries.',
            'Growth of the green economy and renewable energy careers.',
          ],
        },
        { id: 'lo4-jmt-scarce-h', type: 'heading', level: 3, text: 'Facts About the Skills Shortage in South Africa' },
        {
          id: 'lo4-jmt-scarce',
          type: 'list',
          text: [
            'South Africa faces a critical skills shortage across almost all sectors, particularly IT and finance.',
            'Recruiters and HR specialists battle to fill vacancies for skilled positions, which slows business growth and affects the country\'s GDP.',
            'Sectors hit hardest include Medical & Health, Marketing, Design, Media & Business, and Engineering.',
            'Shortages are felt almost across the board, from technology and finance to skilled trades.',
          ],
        },
        { id: 'lo4-jmt-strategies-h', type: 'heading', level: 3, text: 'Strategies for Future Job Trends' },
        {
          id: 'lo4-jmt-strategies',
          type: 'list',
          text: [
            'Choose subjects and qualifications aligned with scarce-skills fields.',
            'Develop digital literacy regardless of career field, since most jobs now require some technology skills.',
            'Pursue lifelong learning and be willing to reskill as industries change.',
            'Build practical experience through internships, learnerships or part-time work.',
            'Stay informed about labour market trends when planning a career path.',
          ],
        },
        {
          id: 'lo4-jmt-qa',
          type: 'questions',
          qa: [
            { n: '3.1', q: 'Define globalisation.', marks: 1, a: 'Globalisation is the increasing interconnectedness of countries through trade, technology, investment and the movement of people and information.' },
            { n: '3.2', q: 'State FOUR drivers of change in emerging demands and changing career patterns.', marks: 4, a: ['Rapid technological advancement and automation.', 'Globalisation exposing local workers to international competition.', 'Changing demographics and a growing, more educated workforce.', 'Shifts in consumer demand and industry growth.'] },
            { n: '3.3', q: 'Describe THREE facts about the job market.', marks: 3, a: ['South Africa faces a critical skills shortage across almost all sectors.', 'Recruiters battle to fill vacancies for skilled positions, which affects business growth and GDP.', 'Shortages are hardest felt in Medical & Health, IT, Marketing, Design and Engineering.'] },
            { n: '3.4', q: 'Fully discuss THREE trends in the global career market.', marks: 6, a: ['Growing demand for digital and IT skills across almost all industries as technology transforms how work is done.', 'Rise of remote and flexible working arrangements, changing where and how people can access job opportunities.', 'Increasing emphasis on lifelong learning and reskilling, since industries now change faster than traditional career paths assumed.'] },
            { n: '3.5', q: 'Discuss THREE consequences of not following trends and demands of the job market.', marks: 6, a: ['A learner may train for a field with an oversupply of job seekers, leading to difficulty finding employment.', 'Skills gained may quickly become outdated if the industry shifts, reducing long-term employability.', 'Missed opportunities in growing, well-paying scarce-skills fields that the learner may have been well-suited for.'] },
          ],
        },
      ],
    },

    // ── Lesson 5: Planning a Career Path ──────────────────────────────────────
    {
      id: 'lo-ch4-career-planning',
      chapterId: 'lo-ch4',
      subjectId: 'life-orientation',
      title: 'Planning a Career Path',
      minutes: 12,
      blocks: [
        { id: 'lo4-cp-h1', type: 'heading', level: 2, text: 'Planning a Career Path' },
        { id: 'lo4-cp-steps-h', type: 'heading', level: 3, text: 'Steps to Planning a Career Path' },
        {
          id: 'lo4-cp-steps',
          type: 'list',
          text: [
            '1. Self-assessment — identify your interests, strengths, values and personality type.',
            '2. Research career fields and occupations that match your self-assessment.',
            '3. Identify the subjects and marks required to pursue your chosen field.',
            '4. Research post-school study options and institutions offering relevant qualifications.',
            '5. Investigate funding options — bursaries, loans, NSFAS, scholarships.',
            '6. Gain practical exposure through job shadowing, internships or volunteering.',
            '7. Set short-, medium- and long-term goals, and review your plan regularly as circumstances change.',
          ],
        },
        { id: 'lo4-cp-ready-h', type: 'heading', level: 3, text: 'Ensuring Readiness for Future Employment Opportunities' },
        {
          id: 'lo4-cp-ready',
          type: 'list',
          text: [
            'Stay informed about which skills and industries are in demand.',
            'Choose subjects strategically in Grade 10, since subject choices affect which fields of study remain open.',
            'Build soft skills — communication, teamwork, problem-solving and adaptability — valued across all careers.',
            'Seek mentorship from people already working in your field of interest.',
            'Keep career plans flexible, since the job market continues to change rapidly.',
          ],
        },
        {
          id: 'lo4-cp-qa',
          type: 'questions',
          qa: [
            { q: 'Provide TWO strategies that school learners could put into place to ensure that they are ready for future employment opportunities. Also indicate how EACH strategy could lead to more employment opportunities in their future.', marks: 6, a: [
              'Staying informed about in-demand skills and choosing subjects strategically — this ensures learners qualify for growing fields rather than oversupplied ones, directly improving their future employability.',
              'Building practical experience through job shadowing, internships or volunteering — this gives learners real workplace exposure and references, which make them more competitive candidates when they enter the job market.',
            ] },
          ],
        },
      ],
    },
  ],
};
