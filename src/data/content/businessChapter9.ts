import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_9: Chapter = {
  id: 'business-ch9',
  subjectId: 'business',
  title: 'Chapter 9: Social Responsibility',
  summary: 'Grade 10 Term 2, Paper 2 — The meaning of social responsibility, Corporate Social Responsibility (CSR), and the initiatives businesses can take to address socio-economic issues such as poverty, inequality, HIV/Aids, gambling, unemployment, crime and violence.',
  paper: 2,
  category: 'Business Roles',
  lessons: [
    // ── Lesson 1: Key Definitions ────────────────────────────────────────────
    {
      id: 'bs-ch9-definitions',
      chapterId: 'business-ch9',
      subjectId: 'business',
      title: 'Key Definitions & Exam Guideline',
      minutes: 8,
      blocks: [
        { id: 'bs9-def-h1', type: 'heading', level: 2, text: 'Exam Guideline for Social Responsibility' },
        {
          id: 'bs9-def-tip',
          type: 'callout',
          text: 'Exam Tip: Learners must be able to — define "social responsibility" and give practical examples; define/elaborate on Corporate Social Responsibility; recommend/suggest initiatives businesses can take to address socio-economic issues; interview local businesses on initiatives taken; and evaluate the extent to which these initiatives have addressed the socio-economic issues.',
        },
        {
          id: 'bs9-def-intro',
          type: 'paragraph',
          text: 'Learn the two core definitions below word-for-word — they are the foundation for every question in this chapter.',
        },
        {
          id: 'bs9-def-table',
          type: 'definitions',
          rows: [
            {
              term: 'Social responsibility',
              meaning: 'When each person is responsible for the effects their behaviours and lifestyle has on the environment and others. It means that any person/group/organisation has a responsibility to act in a way that benefits society as a whole. It also means getting actively involved in projects that can have a positive impact on society in a sustainable way.',
            },
            {
              term: 'Corporate Social Responsibility (CSR)',
              meaning: 'The term used when a business takes responsibility for its impact on society and the environment. It is an ethical way of doing business in the interest of both the business and the wider community. A business needs to be careful that all its actions protect the environment and improve the quality of life for the citizens of the country. CSR is the way businesses manage their resources/processes to impact positively on society.',
            },
          ],
        },
        {
          id: 'bs9-def-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "social responsibility."',
              marks: 2,
              a: 'Social responsibility is when each person is responsible for the effects their behaviours and lifestyle has on the environment and others. It means that any person/group/organisation has a responsibility to act in a way that benefits society as a whole.',
            },
            {
              q: 'Define/elaborate on the meaning of Corporate Social Responsibility.',
              marks: 4,
              a: [
                'CSR is the term used when a business takes responsibility for its impact on society and the environment.',
                'It is an ethical way of doing business in the interest of both the business and the wider community.',
                'A business needs to be careful that all its actions protect the environment and improve the quality of life for citizens of the country.',
                'It is the way businesses manage their resources/processes to impact positively on society.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: The Meaning of Social Responsibility ──────────────────────
    {
      id: 'bs-ch9-social-responsibility',
      chapterId: 'business-ch9',
      subjectId: 'business',
      title: '1. The Meaning of Social Responsibility',
      minutes: 12,
      blocks: [
        { id: 'bs9-sr-h1', type: 'heading', level: 2, text: '1. Social Responsibility' },
        { id: 'bs9-sr-meaning-h', type: 'heading', level: 3, text: 'The Meaning of Social Responsibility' },
        {
          id: 'bs9-sr-meaning',
          type: 'list',
          text: [
            'Social responsibility is when each person is responsible for the effects their behaviours and lifestyle has on the environment and others.',
            'It means that any person/group/organization has a responsibility to act in a way that benefit society as a whole.',
            'Social responsibility also means getting actively involved in projects that can have a positive impact on society in a sustainable way.',
            'Every individual and organisation can contribute towards the well-being of the community and the environment in which they live.',
            'Being socially responsible means that individuals take responsibility for the effects of their behaviour and lifestyle on the environment and on others.',
          ],
        },
        {
          id: 'bs9-sr-means-h',
          type: 'heading',
          level: 3,
          text: 'Social Responsibility Means:',
        },
        {
          id: 'bs9-sr-means',
          type: 'list',
          text: [
            'That each person has a duty to act in the best interests of their environment and society as a whole.',
            'That every individual and organisation can contribute towards the well-being of the community and the environment in which they live.',
          ],
        },
        {
          id: 'bs9-sr-examples-h',
          type: 'heading',
          level: 3,
          text: 'Common Examples of Social Responsibility',
        },
        {
          id: 'bs9-sr-examples',
          type: 'list',
          text: [
            'Reducing our carbon footprints: a carbon footprint refers to how much carbon dioxide the activities a person or company emits. These could include direct emissions from fossil-fuel combustion, for example in manufacturing, heating, transportation, electricity, and the consumption of goods and services.',
            'Donations to charities: when you help others, it will empower you. You will also feel happier and more fulfilled.',
            'Volunteering in the community: this is a way in which a person or group of people in a community take part in voluntary social, charitable and environmental activities towards the betterment of a community.',
          ],
        },
        {
          id: 'bs9-sr-qa',
          type: 'questions',
          qa: [
            {
              q: 'Give any TWO practical examples of social responsibility.',
              marks: 4,
              a: [
                'Reducing carbon footprints (reducing the carbon dioxide emitted by activities such as manufacturing, heating, transportation and electricity use).',
                'Donating to charities.',
                'Volunteering in the community (any 2 of the 3).',
              ],
            },
            {
              q: 'Explain what is meant by being "socially responsible."',
              marks: 3,
              a: 'Being socially responsible means that individuals take responsibility for the effects of their behaviour and lifestyle on the environment and on others. Each person has a duty to act in the best interests of their environment and society as a whole, and every individual/organisation can contribute towards the well-being of the community and environment in which they live.',
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Corporate Social Responsibility ───────────────────────────
    {
      id: 'bs-ch9-csr',
      chapterId: 'business-ch9',
      subjectId: 'business',
      title: '2. Corporate Social Responsibility (CSR)',
      minutes: 10,
      blocks: [
        { id: 'bs9-csr-h1', type: 'heading', level: 2, text: '2. Corporate Social Responsibility (CSR)' },
        { id: 'bs9-csr-meaning-h', type: 'heading', level: 3, text: '2.1 The Meaning of Corporate Social Responsibility/CSR' },
        {
          id: 'bs9-csr-meaning',
          type: 'list',
          text: [
            'It is the term used when a business takes responsibility for its impact on society and the environment.',
            'It is an ethical way of doing business in the interest of both the business and the wider community.',
            'Corporate social responsibility means that a business needs to be careful that all its actions protect the environment and improve the quality of life for the citizens of the country.',
            'It is the way businesses manage their resources/processes to impact positively on society.',
          ],
        },
        { id: 'bs9-csr-env-h', type: 'heading', level: 3, text: 'The Environment Consists Of:' },
        {
          id: 'bs9-csr-env',
          type: 'list',
          text: [
            'The air we breathe — this can be polluted by harmful smoke or other gases that are released into air.',
            'Rivers and other natural water resources — which can be polluted by factories.',
          ],
        },
        {
          id: 'bs9-csr-goal',
          type: 'paragraph',
          text: 'Businesses should avoid doing things that harm the environment and people. The goal of CSR is to have a positive impact on the environment/consumer/employees/communities/stakeholder.',
        },
        {
          id: 'bs9-csr-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain what is meant by the term "Corporate Social Responsibility (CSR)."',
              marks: 4,
              a: [
                'It is the term used when a business takes responsibility for its impact on society and the environment.',
                'It is an ethical way of doing business in the interest of both the business and the wider community.',
                'A business needs to be careful that all its actions protect the environment and improve the quality of life for citizens of the country.',
              ],
            },
            {
              q: 'What is the goal of CSR?',
              marks: 2,
              a: 'The goal of CSR is to have a positive impact on the environment, consumers, employees, communities and other stakeholders.',
            },
            {
              q: 'Name TWO things that make up "the environment" as referred to in CSR, and explain how each can be polluted.',
              marks: 4,
              a: [
                'The air we breathe — this can be polluted by harmful smoke or other gases released into the air.',
                'Rivers and other natural water resources — these can be polluted by factories.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Initiatives — Poverty, Inequality, HIV/Aids, Gambling ─────
    {
      id: 'bs-ch9-initiatives-1',
      chapterId: 'business-ch9',
      subjectId: 'business',
      title: 'Initiatives: Poverty, Inequality, HIV/Aids & Gambling',
      minutes: 15,
      blocks: [
        { id: 'bs9-init1-h1', type: 'heading', level: 2, text: 'Initiatives Businesses Take to Address Socio-Economic Issues' },
        {
          id: 'bs9-init1-tip',
          type: 'callout',
          text: 'Exam Tip: These "initiatives" questions usually give you a specific socio-economic issue (e.g. "crime" or "unemployment") and ask you to recommend/suggest what a business can do. Learn each list under its own heading so you don\'t mix them up.',
        },
        { id: 'bs9-init1-poverty-h', type: 'heading', level: 3, text: 'Initiatives Businesses Can Take to Address Inequality and Poverty' },
        {
          id: 'bs9-init1-poverty',
          type: 'list',
          text: [
            'Businesses can provide bursaries to matriculants for furthering their studies or offer learnerships/apprenticeships for scarce skills within their organisations.',
            'Develop employees’ skills.',
            'Invest in a young starting SME that can be a business competitor, buyer or supplier.',
            'Businesses could also organise and encourage entrepreneurial programmes for startups. In this way, they can stimulate growth in the economy.',
            'Employees could offer their time and/or services through volunteer programs.',
            'Support poverty alleviation programs that are offered by the government.',
            'Businesses could also upskill their employees through targeted training in the workplace.',
            'Donate money/food parcels to local NGOs.',
          ],
        },
        { id: 'bs9-init1-hiv-h', type: 'heading', level: 3, text: 'Initiatives Businesses Can Take to Address HIV/Aids' },
        {
          id: 'bs9-init1-hiv',
          type: 'list',
          text: [
            'Counselling programs/train counsellors to provide for infected and affected persons/employees.',
            'Develop counselling programs for infected/affected persons/employees.',
            'Businesses should conduct regular workshops and information sessions on the effects of HIV/AIDS on the employees and their peers.',
            'They should initiate and develop counselling programs for infected/affected persons/employees.',
            'Roll out anti-retroviral (ARV) treatment programs (ART) for the infected employees.',
            'Encourage employees to join HIV/Aids support groups.',
            'Develop strategies to deal with stigma and discrimination.',
            'Participate in the HIV/Aids prevention programmes implemented in the community.',
            'Support non-governmental organisational/community-based organisations that work with people infected/affected by HIV/AIDS in the community.',
          ],
        },
        { id: 'bs9-init1-gambling-h', type: 'heading', level: 3, text: 'Initiatives Businesses Can Take to Address Gambling' },
        {
          id: 'bs9-init1-gambling',
          type: 'list',
          text: [
            'Offer financial literacy education to them.',
            'Businesses must make use of organizations such as Gamblers Anonymous and the National Council on Problem Gambling to help gamblers fight their addiction.',
          ],
        },
        {
          id: 'bs9-init1-qa',
          type: 'questions',
          qa: [
            {
              q: 'Recommend TWO initiatives businesses can take to address poverty and inequality.',
              marks: 4,
              a: [
                'Provide bursaries to matriculants or offer learnerships/apprenticeships for scarce skills.',
                'Donate money/food parcels to local NGOs.',
                'Support poverty alleviation programs offered by the government (any 2).',
              ],
            },
            {
              q: 'Suggest TWO initiatives a business can take to address the impact of HIV/Aids on its employees.',
              marks: 4,
              a: [
                'Develop/train counselling programs for infected and affected employees.',
                'Roll out anti-retroviral (ARV) treatment programs (ART) for infected employees.',
                'Conduct regular workshops and information sessions on the effects of HIV/AIDS (any 2).',
              ],
            },
            {
              q: 'How can businesses help employees who struggle with gambling addiction?',
              marks: 2,
              a: 'Businesses can offer financial literacy education, and make use of organisations such as Gamblers Anonymous and the National Council on Problem Gambling to help gamblers fight their addiction.',
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Initiatives — Unemployment, Crime & Violence ──────────────
    {
      id: 'bs-ch9-initiatives-2',
      chapterId: 'business-ch9',
      subjectId: 'business',
      title: 'Initiatives: Unemployment, Crime & Violence',
      minutes: 15,
      blocks: [
        { id: 'bs9-init2-h1', type: 'heading', level: 2, text: 'Further Initiatives Businesses Take to Address Socio-Economic Issues' },
        { id: 'bs9-init2-unemp-h', type: 'heading', level: 3, text: 'Initiatives Businesses Can Take to Address Unemployment' },
        {
          id: 'bs9-init2-unemp',
          type: 'list',
          text: [
            'Provide skills development programs through learnerships.',
            'Offer bursaries to the community to improve the level of education.',
            'Create jobs for members of the community.',
            'Provide entrepreneurial programs that can promote self-employment.',
            'Support existing small businesses to create more employment opportunities.',
          ],
        },
        { id: 'bs9-init2-poverty2-h', type: 'heading', level: 3, text: 'Further Initiatives Businesses Can Take to Address Poverty and Inequality' },
        {
          id: 'bs9-init2-poverty2',
          type: 'list',
          text: [
            'Invest in a young starting SME that can be a business competitor, buyer or supplier.',
            'Attract the best employees by being socially responsible and offering the best volunteering programs.',
            'Support poverty alleviation programs that are offered by the government.',
            'Donate money/food parcels to local NGOs.',
            'Increase employment through economic growth.',
            'Introduce more training programs and apprenticeship to develop skills.',
            'Encourage entrepreneurship through business training and mentoring entrepreneurs.',
            'Improve infrastructure and services in poor communities.',
          ],
        },
        { id: 'bs9-init2-crime-h', type: 'heading', level: 3, text: 'Initiatives Businesses Can Take to Address Crime' },
        {
          id: 'bs9-init2-crime',
          type: 'list',
          text: [
            'Businesses should encourage their employees to participate in community policing forums.',
            'Offer employment.',
            'Get involved in the local community on sustainable projects with community.',
            'Sponsor special sports programmes by providing finance (prize money) for special community events.',
            'Adopt a school; by providing most of its needs.',
          ],
        },
        { id: 'bs9-init2-violence-h', type: 'heading', level: 3, text: 'Initiatives Businesses Can Take to Address Violence' },
        {
          id: 'bs9-init2-violence',
          type: 'list',
          text: [
            'Provide an employee assistance program (EAP) to enable employees with personal problems to seek help.',
            'Provide counselling facilities / refer victims to private counsellors.',
          ],
        },
        {
          id: 'bs9-init2-qa',
          type: 'questions',
          qa: [
            {
              q: 'Recommend TWO initiatives businesses can take to address unemployment.',
              marks: 4,
              a: [
                'Provide skills development programs through learnerships.',
                'Create jobs for members of the community.',
                'Provide entrepreneurial programs that promote self-employment (any 2).',
              ],
            },
            {
              q: 'Suggest TWO ways in which businesses can help address crime in the community.',
              marks: 4,
              a: [
                'Encourage employees to participate in community policing forums.',
                'Offer employment.',
                'Sponsor special sports programmes for the community.',
                'Adopt a school by providing most of its needs (any 2).',
              ],
            },
            {
              q: 'How can a business assist employees affected by violence?',
              marks: 2,
              a: 'The business can provide an employee assistance program (EAP) to enable employees with personal problems to seek help, and provide counselling facilities or refer victims to private counsellors.',
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Other CSR Initiatives & Exam Practice ─────────────────────
    {
      id: 'bs-ch9-other-csr',
      chapterId: 'business-ch9',
      subjectId: 'business',
      title: 'Other CSR Initiatives & Exam Practice',
      minutes: 14,
      blocks: [
        { id: 'bs9-other-h1', type: 'heading', level: 2, text: 'Other Examples of Corporate Social Responsibility Initiatives' },
        {
          id: 'bs9-other-list',
          type: 'list',
          text: [
            'Reducing carbon footprints.',
            'Donations to charities.',
            'Volunteering in the community.',
            'Producing socially responsible goods and services.',
            'Treating employees in a socially responsible way.',
            'Ensuring production techniques are socially responsible.',
            'Initiating community projects.',
          ],
        },
        {
          id: 'bs9-other-tip',
          type: 'callout',
          text: 'Exam Tip: Interview-and-evaluate questions (a common Paper 2 task) ask you to interview local businesses on the initiatives they have taken, and then evaluate the extent to which those initiatives have addressed the socio-economic issue. Be ready to explain HOW you would measure success — e.g. fewer complaints, more jobs created, reduced crime statistics, improved health outcomes.',
        },
        { id: 'bs9-other-qa-h', type: 'heading', level: 2, text: 'Exam Practice' },
        {
          id: 'bs9-other-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name any THREE other examples of CSR initiatives besides addressing specific socio-economic issues.',
              marks: 3,
              a: [
                'Reducing carbon footprints.',
                'Donations to charities.',
                'Volunteering in the community (any 3 of: producing socially responsible goods/services, treating employees responsibly, ensuring production techniques are socially responsible, initiating community projects).',
              ],
            },
            {
              q: 'Distinguish between "social responsibility" and "Corporate Social Responsibility."',
              marks: 4,
              a: [
                'Social responsibility applies to any person, group or organisation and means acting in a way that benefits society as a whole.',
                'Corporate Social Responsibility (CSR) specifically applies to a business taking responsibility for its impact on society and the environment as an ethical way of doing business.',
              ],
            },
            {
              q: 'ESSAY: Discuss how businesses can address socio-economic issues such as poverty, HIV/Aids, unemployment and crime through Corporate Social Responsibility initiatives. (150–200 words)',
              marks: 10,
              a: 'Businesses have a responsibility to use their resources to improve the quality of life of the communities they operate in. To address poverty and inequality, businesses can provide bursaries, learnerships and apprenticeships, donate money or food parcels to NGOs, and support government poverty alleviation programs. To address HIV/Aids, businesses can develop counselling programs, roll out ARV treatment programs for infected employees, and run workshops to reduce stigma and discrimination. To address unemployment, businesses can create jobs, offer bursaries to improve education, and support small businesses and entrepreneurial programs that promote self-employment. To address crime, businesses can encourage employees to join community policing forums, sponsor community sports programmes, and adopt schools. All of these initiatives form part of CSR — an ethical way of doing business that protects the environment and improves quality of life for citizens, while also benefiting the business through a positive public image and a more stable, skilled community to operate in.',
            },
          ],
        },
      ],
    },
  ],
};
