import type { Chapter } from '@/lib/types';

export const LO_CHAPTER_2: Chapter = {
  id: 'lo-ch2',
  subjectId: 'life-orientation',
  title: 'Chapter 2: Social and Environmental Responsibility',
  summary: 'Term 2 — Human rights violations and social issues, poverty, food insecurity and malnutrition, environmental health, nutrition and lifestyle diseases, substance abuse, and violence in schools and communities.',
  category: 'Term 2',
  lessons: [
    // ── Lesson 1: Poverty, Food Insecurity and Malnutrition ─────────────────
    {
      id: 'lo-ch2-poverty',
      chapterId: 'lo-ch2',
      subjectId: 'life-orientation',
      title: 'Poverty, Food Insecurity and Malnutrition',
      minutes: 14,
      blocks: [
        { id: 'lo2-pov-h1', type: 'heading', level: 2, text: 'Poverty, Food Insecurity and Malnutrition' },
        { id: 'lo2-pov-def-h', type: 'heading', level: 3, text: 'Key Definitions' },
        {
          id: 'lo2-pov-def',
          type: 'definitions',
          rows: [
            { term: 'Poverty', meaning: 'A state in which a person or household lacks the financial resources to meet basic needs such as food, shelter, clothing, healthcare and education.' },
            { term: 'Food insecurity', meaning: 'Unequal or unreliable access to basic/sufficient and nutritious food resources, due to the inability to afford or obtain them.' },
            { term: 'Malnutrition', meaning: 'Poor nutrition resulting from an insufficient, excessive or unbalanced diet, which impairs physical and mental health.' },
          ],
        },
        { id: 'lo2-pov-harm-h', type: 'heading', level: 3, text: 'Harmful Effects of Poverty' },
        {
          id: 'lo2-pov-harm',
          type: 'list',
          text: [
            'Malnutrition and stunted physical/cognitive development in children.',
            'Limited access to quality education, often leading to school dropout.',
            'Poor access to healthcare services, worsening illness and disease.',
            'Increased vulnerability to crime, exploitation and substance abuse.',
            'Psychological effects — stress, low self-esteem, hopelessness and depression.',
            'Overcrowded and unsafe living conditions.',
          ],
        },
        { id: 'lo2-pov-overcome-h', type: 'heading', level: 3, text: 'Ways an Individual Can Help Overcome Poverty' },
        {
          id: 'lo2-pov-overcome',
          type: 'list',
          text: [
            'Pursue education and skills development to improve future employability.',
            'Volunteer time or donate goods to community feeding schemes and NPOs.',
            'Support or start small income-generating projects (e.g. community gardens).',
            'Practise budgeting and financial literacy to use limited resources wisely.',
            'Raise awareness of poverty-relief programmes and government grants available.',
          ],
        },
        { id: 'lo2-pov-security-h', type: 'heading', level: 3, text: 'Discussing Food Insecurity and How It Leads to Malnutrition' },
        {
          id: 'lo2-pov-security',
          type: 'list',
          text: [
            'Food insecurity means households cannot reliably access enough nutritious food, often relying on cheap, low-nutrient staples.',
            'A diet lacking variety and essential nutrients (vitamins, minerals, protein) results in malnutrition.',
            'Malnutrition in children causes stunted growth, weakened immunity and poor concentration/learning ability.',
            'Cycles of poverty and food insecurity are often generational, as malnourished children struggle to reach their full potential as adults.',
          ],
        },
        { id: 'lo2-pov-strategies-h', type: 'heading', level: 3, text: 'Strategies to Overcome Food Insecurity' },
        {
          id: 'lo2-pov-strategies',
          type: 'list',
          text: [
            'Support government feeding schemes (e.g. the National School Nutrition Programme).',
            'Grow food at home or in community gardens.',
            'Support local food banks and NPOs that redistribute surplus food.',
            'Educate communities on affordable, nutritious meal planning.',
            'Advocate for job creation and social grants that increase household income.',
          ],
        },
        {
          id: 'lo2-pov-qa',
          type: 'questions',
          qa: [
            { n: '2.1', q: 'State FOUR harmful effects of poverty.', marks: 4, a: ['Malnutrition and stunted development in children.', 'Limited access to quality education.', 'Poor access to healthcare.', 'Increased vulnerability to crime and substance abuse.'] },
            { n: '2.2', q: 'Discuss TWO aspects that will indicate unequal access to basic resources and services.', marks: 4, a: ['Unequal access to quality healthcare facilities between wealthy and poor areas.', 'Unequal access to clean water, sanitation and electricity in informal settlements compared to formal suburbs.'] },
            { n: '2.3', q: 'Discuss THREE ways an individual can overcome poverty.', marks: 6, a: ['Pursue education and skills development to improve employability.', 'Volunteer or support community feeding schemes.', 'Practise budgeting to manage limited resources effectively.'] },
            { n: '2.4', q: 'Poverty leads to food insecurity and malnutrition. Discuss food insecurity and how it leads to malnutrition.', marks: 6, a: 'Food insecurity means households cannot reliably access enough nutritious food and often rely on cheap, low-nutrient staples. Without essential nutrients such as vitamins, minerals and protein, the body experiences malnutrition, leading to stunted growth, weakened immunity and poor concentration, particularly in children.' },
          ],
        },
      ],
    },

    // ── Lesson 2: Human Rights Violations and Social Issues ─────────────────
    {
      id: 'lo-ch2-human-rights-violations',
      chapterId: 'lo-ch2',
      subjectId: 'life-orientation',
      title: 'Human Rights Violations and Contemporary Social Issues',
      minutes: 14,
      blocks: [
        { id: 'lo2-hrv-h1', type: 'heading', level: 2, text: 'Human Rights Violations and Contemporary Social Issues' },
        {
          id: 'lo2-hrv-def',
          type: 'definitions',
          rows: [
            { term: 'Human rights violation', meaning: 'Any act (or failure to act) by a state, group or individual that breaches the rights guaranteed to a person, e.g. in the Bill of Rights.' },
            { term: 'Social issue', meaning: 'A problem that affects many people within a society and is considered undesirable, requiring collective or government intervention to resolve.' },
          ],
        },
        { id: 'lo2-hrv-examples-h', type: 'heading', level: 3, text: 'Common Human Rights Violations and Social Issues in South Africa' },
        {
          id: 'lo2-hrv-examples',
          type: 'list',
          text: [
            'Gender-based violence (GBV) and domestic abuse.',
            'Discrimination based on race, gender, disability or sexual orientation.',
            'Xenophobia — hostility and violence directed at foreign nationals.',
            'Unemployment and economic inequality.',
            'Violent crime, including school violence.',
            'Child abuse and neglect.',
            'Unequal access to quality education and healthcare.',
          ],
        },
        { id: 'lo2-hrv-impact-h', type: 'heading', level: 3, text: 'Impact of Human Rights Violations' },
        {
          id: 'lo2-hrv-impact',
          type: 'list',
          text: [
            'Physical and psychological trauma to victims.',
            'Breakdown of trust and safety within communities.',
            'Economic costs — lost productivity, healthcare costs, legal costs.',
            'Damage to South Africa\'s international reputation (e.g. xenophobic attacks).',
            'Intergenerational cycles of violence and trauma.',
          ],
        },
        {
          id: 'lo2-hrv-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "human rights violation".', marks: 2, a: 'A human rights violation is any act, or failure to act, that breaches a right guaranteed to a person, such as those listed in the Bill of Rights.' },
            { q: 'Name any TWO contemporary social issues affecting South African communities.', marks: 2, a: ['Gender-based violence', 'Xenophobia', 'Unemployment', 'Crime (any TWO)'] },
            {
              q: 'Discuss THREE ways human rights violations negatively impact a community.',
              marks: 6,
              a: [
                'Physical and psychological trauma suffered by victims and witnesses.',
                'Breakdown of trust and safety, making communities feel unsafe.',
                'Economic costs including lost productivity and increased healthcare/legal costs.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Environmental Health ───────────────────────────────────────
    {
      id: 'lo-ch2-environmental-health',
      chapterId: 'lo-ch2',
      subjectId: 'life-orientation',
      title: 'Environmental Health',
      minutes: 12,
      blocks: [
        { id: 'lo2-env-h1', type: 'heading', level: 2, text: 'Environmental Health' },
        {
          id: 'lo2-env-def',
          type: 'list',
          text: [
            'Environmental health refers to the aspects of human health, including quality of life, that are determined by physical, chemical, biological and social factors in the environment.',
            'Poor environmental conditions directly affect physical and mental health.',
          ],
        },
        { id: 'lo2-env-issues-h', type: 'heading', level: 3, text: 'Key Environmental Health Issues' },
        {
          id: 'lo2-env-issues',
          type: 'list',
          text: [
            'Air pollution from vehicles, factories and the burning of fuel for heating/cooking in informal settlements.',
            'Water pollution and inadequate access to clean water/sanitation.',
            'Poor waste management — illegal dumping and lack of refuse removal.',
            'Overcrowded and unsafe housing conditions (informal settlements).',
            'Noise pollution affecting mental wellbeing and sleep.',
            'Climate change effects — droughts, flooding and extreme weather events.',
          ],
        },
        { id: 'lo2-env-impact-h', type: 'heading', level: 3, text: 'Impact on Health' },
        {
          id: 'lo2-env-impact',
          type: 'list',
          text: [
            'Respiratory diseases (asthma, bronchitis) from polluted air.',
            'Waterborne diseases (cholera, diarrhoea) from contaminated water.',
            'Increased stress and mental health problems from unsafe/overcrowded living conditions.',
            'Spread of infectious disease due to poor sanitation.',
          ],
        },
        { id: 'lo2-env-solutions-h', type: 'heading', level: 3, text: 'Promoting Environmental Health' },
        {
          id: 'lo2-env-solutions',
          type: 'list',
          text: [
            'Participate in community clean-up campaigns and recycling programmes.',
            'Report illegal dumping to local authorities.',
            'Conserve water and reduce household waste.',
            'Support environmental education and awareness campaigns.',
            'Advocate for better service delivery (waste removal, clean water) in under-served communities.',
          ],
        },
        {
          id: 'lo2-env-qa',
          type: 'questions',
          qa: [
            { q: 'Define environmental health.', marks: 2, a: 'Environmental health refers to aspects of human health and quality of life that are determined by physical, chemical, biological and social factors in the environment.' },
            {
              q: 'Discuss THREE ways individuals can promote environmental health in their community.',
              marks: 6,
              a: [
                'Participate in community clean-up campaigns and recycling programmes.',
                'Conserve water and reduce household waste.',
                'Report illegal dumping to local authorities.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Nutrition and Lifestyle Diseases ───────────────────────────
    {
      id: 'lo-ch2-nutrition-lifestyle-diseases',
      chapterId: 'lo-ch2',
      subjectId: 'life-orientation',
      title: 'Nutrition and Lifestyle Diseases',
      minutes: 14,
      blocks: [
        { id: 'lo2-nut-h1', type: 'heading', level: 2, text: 'Nutrition and Lifestyle Diseases' },
        {
          id: 'lo2-nut-def',
          type: 'definitions',
          rows: [
            { term: 'Nutrition', meaning: 'The process of providing or obtaining the food necessary for health and growth.' },
            { term: 'Lifestyle disease', meaning: 'A disease linked to the way a person lives — diet, physical activity levels, substance use — rather than being caused by infection, e.g. type 2 diabetes, hypertension, obesity, some cancers.' },
          ],
        },
        { id: 'lo2-nut-diseases-h', type: 'heading', level: 3, text: 'Common Lifestyle Diseases' },
        {
          id: 'lo2-nut-diseases',
          type: 'list',
          text: [
            'Obesity — excess body fat caused by poor diet and inactivity.',
            'Type 2 diabetes — the body cannot effectively regulate blood sugar, linked to diet and obesity.',
            'Hypertension (high blood pressure) — linked to high salt intake, stress and inactivity.',
            'Cardiovascular disease — heart disease and stroke, linked to poor diet, smoking and inactivity.',
            'Some cancers linked to smoking, alcohol use and poor diet.',
          ],
        },
        { id: 'lo2-nut-causes-h', type: 'heading', level: 3, text: 'Causes of Lifestyle Diseases' },
        {
          id: 'lo2-nut-causes',
          type: 'list',
          text: [
            'Diets high in sugar, salt, saturated fat and processed food.',
            'Physical inactivity and sedentary behaviour (e.g. excessive screen time).',
            'Smoking and excessive alcohol consumption.',
            'Chronic stress and poor sleep.',
          ],
        },
        { id: 'lo2-nut-prevent-h', type: 'heading', level: 3, text: 'Preventing Lifestyle Diseases' },
        {
          id: 'lo2-nut-prevent',
          type: 'list',
          text: [
            'Eat a balanced diet with plenty of fruit, vegetables, whole grains and lean protein.',
            'Engage in regular physical activity (at least 30 minutes most days).',
            'Avoid smoking and limit alcohol intake.',
            'Manage stress through healthy coping strategies.',
            'Have regular health check-ups to catch problems early.',
          ],
        },
        {
          id: 'lo2-nut-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "lifestyle disease".', marks: 2, a: 'A lifestyle disease is a disease linked to the way a person lives, such as poor diet, physical inactivity or substance use, e.g. type 2 diabetes and hypertension.' },
            { q: 'Name any TWO lifestyle diseases.', marks: 2, a: ['Obesity', 'Type 2 diabetes', 'Hypertension', 'Cardiovascular disease (any TWO)'] },
            {
              q: 'Discuss THREE ways a teenager can prevent lifestyle diseases.',
              marks: 6,
              a: [
                'Eat a balanced diet rich in fruit, vegetables and whole grains, and low in processed food.',
                'Engage in regular physical activity, at least 30 minutes most days.',
                'Avoid smoking and limit alcohol consumption.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Substance Abuse ────────────────────────────────────────────
    {
      id: 'lo-ch2-substance-abuse',
      chapterId: 'lo-ch2',
      subjectId: 'life-orientation',
      title: 'Substance Abuse',
      minutes: 14,
      blocks: [
        { id: 'lo2-sub-h1', type: 'heading', level: 2, text: 'Substance Abuse' },
        {
          id: 'lo2-sub-def',
          type: 'definitions',
          rows: [
            { term: 'Substance abuse', meaning: 'The harmful or hazardous use of psychoactive substances, including alcohol and illegal drugs, that negatively affects a person\'s health, relationships and daily functioning.' },
            { term: 'Addiction', meaning: 'A chronic condition involving compulsive substance use despite harmful consequences, often accompanied by physical and/or psychological dependence.' },
            { term: 'Peer pressure', meaning: 'The influence exerted by a peer group encouraging a person to change their behaviour, attitudes or values to conform to group norms.' },
          ],
        },
        { id: 'lo2-sub-causes-h', type: 'heading', level: 3, text: 'Causes of Substance Abuse Among Teenagers' },
        {
          id: 'lo2-sub-causes',
          type: 'list',
          text: [
            'Peer pressure and the desire to fit in.',
            'Curiosity and experimentation.',
            'Escaping stress, trauma or difficult home circumstances.',
            'Easy availability of substances in some communities.',
            'Low self-esteem and lack of positive role models.',
            'Media glamorisation of alcohol/drug use.',
          ],
        },
        { id: 'lo2-sub-effects-h', type: 'heading', level: 3, text: 'Effects of Substance Abuse' },
        {
          id: 'lo2-sub-effects',
          type: 'list',
          text: [
            'Physical: organ damage, addiction, overdose risk, impaired brain development in teenagers.',
            'Psychological: anxiety, depression, impaired judgement and memory.',
            'Social: breakdown of relationships, school dropout, involvement in crime.',
            'Economic: cost of supporting a habit, reduced employability.',
          ],
        },
        { id: 'lo2-sub-resist-h', type: 'heading', level: 3, text: 'Strategies to Resist Substance Abuse' },
        {
          id: 'lo2-sub-resist',
          type: 'list',
          text: [
            'Build strong self-esteem and a clear sense of personal values.',
            'Practise assertiveness — being able to say "no" confidently.',
            'Choose friends who do not pressure you to use substances.',
            'Seek support from trusted adults, counsellors or support programmes.',
            'Get involved in positive activities such as sport, art or community service.',
            'Understand the real risks and consequences of substance use.',
          ],
        },
        {
          id: 'lo2-sub-qa',
          type: 'questions',
          qa: [
            { q: 'Define substance abuse.', marks: 2, a: 'Substance abuse is the harmful or hazardous use of psychoactive substances, including alcohol and illegal drugs, that negatively affects health, relationships and daily functioning.' },
            { q: 'State TWO causes of substance abuse among teenagers.', marks: 2, a: ['Peer pressure', 'Curiosity/experimentation', 'Escaping stress or trauma (any TWO)'] },
            {
              q: 'Discuss THREE strategies a teenager can use to resist peer pressure to use substances.',
              marks: 6,
              a: [
                'Build strong self-esteem and a clear sense of personal values so they are less swayed by others.',
                'Practise assertiveness — being able to confidently say "no".',
                'Choose friends/peer groups who do not pressure them to use substances.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Violence in Schools and Communities ────────────────────────
    {
      id: 'lo-ch2-violence',
      chapterId: 'lo-ch2',
      subjectId: 'life-orientation',
      title: 'Violence in Schools and Communities',
      minutes: 12,
      blocks: [
        { id: 'lo2-vio-h1', type: 'heading', level: 2, text: 'Violence in Schools and Communities' },
        {
          id: 'lo2-vio-def',
          type: 'list',
          text: [
            'School violence includes bullying, physical fights, weapon-related incidents and gang activity on or near school premises.',
            'It undermines a safe learning environment and can have lasting physical and psychological effects on victims, perpetrators and witnesses.',
          ],
        },
        { id: 'lo2-vio-causes-h', type: 'heading', level: 3, text: 'Causes of Violence in Schools' },
        {
          id: 'lo2-vio-causes',
          type: 'list',
          text: [
            'Exposure to violence at home or in the community.',
            'Gang involvement and the availability of weapons.',
            'Substance abuse.',
            'Poor conflict-resolution skills.',
            'Bullying and cyberbullying.',
            'Socio-economic stress and lack of parental supervision.',
          ],
        },
        { id: 'lo2-vio-impact-h', type: 'heading', level: 3, text: 'Emotional and Physical Impact of Violence' },
        {
          id: 'lo2-vio-impact',
          type: 'list',
          text: [
            'Physical: injury, disability or death.',
            'Emotional: fear, anxiety, trauma, depression, difficulty trusting others.',
            'Academic: absenteeism, reduced concentration and falling grades.',
            'Social: breakdown of trust within the school community.',
          ],
        },
        { id: 'lo2-vio-reduce-h', type: 'heading', level: 3, text: 'Strategies to Reduce Violence in Schools' },
        {
          id: 'lo2-vio-reduce',
          type: 'list',
          text: [
            'Implement clear anti-bullying policies with consistent consequences.',
            'Provide peer mediation and conflict-resolution programmes.',
            'Increase visible supervision during breaks and after school.',
            'Offer counselling support for learners affected by violence or trauma.',
            'Involve parents and the community in school safety initiatives.',
            'Promote a positive school culture built on respect and inclusion.',
          ],
        },
        {
          id: 'lo2-vio-qa',
          type: 'questions',
          qa: [
            { q: 'State ONE emotional and ONE physical impact of violence.', marks: 2, a: 'Emotional: fear, anxiety or trauma. Physical: injury or disability.' },
            {
              q: 'Discuss TWO reasons why school learners get involved in crime/violence.',
              marks: 4,
              a: ['Exposure to violence at home or in the community normalises violent behaviour.', 'Substance abuse impairs judgement and increases aggressive behaviour.'],
            },
            {
              q: 'Analyse TWO strategies a school could implement to reduce violence and remain healthy.',
              marks: 4,
              a: ['Implement clear anti-bullying policies with consistent consequences to deter violent behaviour.', 'Provide peer mediation and counselling support so learners can resolve conflict and process trauma constructively.'],
            },
          ],
        },
      ],
    },
  ],
};
