import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_15: Chapter = {
  id: 'business-ch15',
  subjectId: 'business',
  title: 'Chapter 15: Relationship and Team Performance',
  summary: 'Grade 10 Term 4, Paper 2 — Business objectives, the benefits of teamwork, interpersonal relationships in the workplace, factors that influence team relationships (prejudice, discrimination, diversity, belief, equity), and the criteria for successful and collaborative team performance.',
  paper: 2,
  category: 'Business Roles',
  lessons: [
    // ── Lesson 1: Key Definitions & Exam Guideline ──────────────────────────
    {
      id: 'bs-ch15-definitions',
      chapterId: 'business-ch15',
      subjectId: 'business',
      title: 'Key Definitions & Exam Guideline',
      minutes: 10,
      blocks: [
        { id: 'bs15-def-h1', type: 'heading', level: 2, text: 'Exam Guideline for Relationship and Team Performance' },
        {
          id: 'bs15-def-tip',
          type: 'callout',
          text: 'Exam Tip: Learners must be able to — discuss ways in which people need to work together to accomplish business objectives; discuss factors that influence team relationships (e.g. prejudice, beliefs, values, diversity); list/understand business objectives (profit, productivity, service); explain interpersonal relationships in the workplace, including management levels; discuss personal beliefs and values and how they influence business relationships (prejudice, discrimination, equity, diversity); list/discuss the criteria for successful and collaborative team performance and assess a team against these criteria; and explain how team members work in a team to accomplish business objectives (clear objectives, openness, mutual respect, support, mutual trust, commitment, sound inter-team relations, individual development, reviewing team processes).',
        },
        {
          id: 'bs15-def-table',
          type: 'definitions',
          rows: [
            { term: 'Team', meaning: 'Consists of two or more people who work together in a business or organization to achieve a common goal.' },
            { term: 'Relationship', meaning: 'The connection between employees, colleagues, customers and suppliers.' },
            { term: 'Prejudice', meaning: 'A preconceived opinion or judgement of something or someone. Prejudice is normally not based on reason or fact, and can lead to discrimination. Some types of prejudice include racism, xenophobia, sexism and religious prejudice.' },
            { term: 'Beliefs', meaning: 'A feeling of being sure that a person or thing exists or is true or trustworthy.' },
            { term: 'Values', meaning: 'The beliefs of being sure that a person or thing exists or is true or trustworthy.' },
            { term: 'Diversity', meaning: 'What makes people unique and includes different cultures, backgrounds, beliefs, gender, language and life experiences.' },
            { term: 'Productivity', meaning: 'A way to measure efficiency.' },
            { term: 'Service', meaning: 'An activity that is delivered by the business to another party like a customer, or another department.' },
            { term: 'Interpersonal relationships', meaning: 'The relationship between two employees working at the same place.' },
            { term: 'Discrimination', meaning: 'Certain prejudice that occur when an employee is treated unfairly because of race, gender, sexuality, religion or disability.' },
            { term: 'Equity', meaning: 'The practice of being fair or impartial in the workplace. Equity is achieved when there is no discrimination.' },
            { term: 'Profit', meaning: 'The financial advantage or benefit.' },
            { term: 'Management levels', meaning: 'Refers to a line of demarcation between various managerial positions in an organization.' },
            { term: 'Collaboration', meaning: 'The action of working with someone to produce something.' },
            { term: 'Openness', meaning: 'The quality of being relatively free from obstruction or relatively unoccupied.' },
            { term: 'Mutual Respect', meaning: 'Underpins good relationships. To have respect for a person involves a fundamental belief in their right to exist, to be heard, and to have the same opportunities as everyone else.' },
            { term: 'Mutual trust', meaning: 'When employees enjoy a culture of honesty and psychological safety.' },
            { term: 'Peer relationships', meaning: 'Peer relationships are the relationships between employees that are on the same level at the workplace. Employees are equal and the relationships are based on mutual respect.' },
            { term: 'Group relationships', meaning: 'Group relationships are the relationships between members of a team or group. Healthy group relationships will ensure good results, whereas poor relationships between group members may result in conflict.' },
            { term: 'Authority relationships', meaning: 'Authority relationships are relationships between a manager and subordinate. This relationship is based on mutual respect.' },
            { term: 'External relationships', meaning: 'External relationships in a workplace refer to the relationships with people outside of the company or business. These types of relationships are usually based on service delivery or outsourcing.' },
          ],
        },
      ],
    },

    // ── Lesson 2: Introduction & Business Objectives ────────────────────────
    {
      id: 'bs-ch15-objectives',
      chapterId: 'business-ch15',
      subjectId: 'business',
      title: 'Introduction & Business Objectives',
      minutes: 14,
      blocks: [
        { id: 'bs15-intro-h1', type: 'heading', level: 2, text: 'Introduction' },
        {
          id: 'bs15-intro-text',
          type: 'paragraph',
          text: 'Teamwork is when two or more people come together to reach a common goal. Successful teams communicate frequently and openly, team members can engage with one another, and they are flexible to ensure the overall success of the team. Teamwork can be natural for some people, but difficult for others. Poor relationships amongst team members can be characterized by emotional and behavioral actions that can create distress, anger, and withdrawal. This can create a divided team, which in turn can lead to poorer team performance. In this topic we will learn about the benefits of teamwork and the importance of everyone on a team in achieving business objectives. We will also learn about some of the factors that can influence team relationships.',
        },
        { id: 'bs15-obj-h1', type: 'heading', level: 2, text: '1. The Meaning of Business Objectives' },
        {
          id: 'bs15-obj-meaning',
          type: 'list',
          text: [
            'A business objective explains in detail the steps they plan to take in order to achieve a specific goal. Types of business objectives: profit, productivity, service.',
            'A good business objective focuses on profit, productivity and service.',
            'Good business objectives are also aligned to the vision, mission and purpose of the business.',
          ],
        },
        { id: 'bs15-obj-ex-h', type: 'heading', level: 3, text: '1.2 Examples of Business Objectives' },
        {
          id: 'bs15-obj-ex-table',
          type: 'definitions',
          rows: [
            { term: 'Improve customer service', meaning: 'Decrease our customer complaints by 25% in the next six months. Good customer service will help us to retain customers and generate continued/sustained revenue.' },
            { term: 'Business survival', meaning: 'Grow our business by attracting and maintaining loyal customers during these difficult first three years without compromising quality.' },
            { term: 'Increase market share', meaning: 'Increase our market share by 5% in the next six months. We will do this by launching a digital marketing campaign by end of the month.' },
            { term: 'Increase profitability', meaning: 'Maximize profits by increasing our profitability by 2% in the next twelve months.' },
            { term: 'Employee retention and human resources', meaning: 'We value our team and want to avoid a high employee turnover as that will have a negative impact on productivity.' },
            { term: 'Social responsibility', meaning: 'Use environmentally friendly material to produce our products and packaging. Become a "green business" by December 2030.' },
          ],
        },
        {
          id: 'bs15-obj-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain what is meant by a "business objective."',
              marks: 3,
              a: 'A business objective explains in detail the steps a business plans to take in order to achieve a specific goal. A good business objective focuses on profit, productivity and service, and is aligned to the vision, mission and purpose of the business.',
            },
            {
              q: 'List the THREE types of business objectives.',
              marks: 3,
              a: ['Profit', 'Productivity', 'Service'],
            },
            {
              q: 'Give an example of a business objective related to "increasing market share."',
              marks: 2,
              a: 'Example: "Increase our market share by 5% in the next six months by launching a digital marketing campaign by the end of the month."',
            },
          ],
        },
      ],
    },

    // ── Lesson 3: The Benefits of Teamwork ──────────────────────────────────
    {
      id: 'bs-ch15-teamwork-benefits',
      chapterId: 'business-ch15',
      subjectId: 'business',
      title: '2. The Benefits of Teamwork',
      minutes: 16,
      blocks: [
        { id: 'bs15-tw-h1', type: 'heading', level: 2, text: '2. The Benefits of Teamwork' },
        {
          id: 'bs15-tw-intro',
          type: 'paragraph',
          text: 'Teamwork is important for achieving business objectives. Teamwork can be described as a group of individuals working together efficiently and effectively towards a common goal.',
        },
        {
          id: 'bs15-tw-benefits',
          type: 'list',
          text: [
            'The members of the team learn from each other and grow.',
            'The team achieve more than the individual.',
            'Good teamwork helps business to achieve its objectives.',
            'Gives employees more control over their jobs.',
            'The performance of all team members improves because they support each other’s skills.',
            'Teamwork encourages workers to increase their range of skills to increase productivity.',
            'Teamwork improves effective communication.',
            'Teamwork can create strong relationships among employees, which in turn leads to better communication within a team.',
            'Teamwork promotes healthy risk-taking/working as a team allows team members to take more risks, because they have the support of the team in case of failure.',
            'Teamwork promotes a wider sense of ownership when working together to achieve business objectives.',
            'The team members feel connected to the company which builds loyalty towards the company and individual job satisfaction.',
            'Teamwork promotes creativity and learning — creativity thrives when people work together as a team.',
            'Teamwork creates synergy to maximize energy levels of employees.',
          ],
        },
        { id: 'bs15-tw-env-h', type: 'heading', level: 3, text: '2.1 Ways Businesses Can Create an Environment That Enables Teams to Work Effectively' },
        {
          id: 'bs15-tw-env-intro',
          type: 'paragraph',
          text: 'Great results can be achieved through teamwork, so it is important that a business creates an environment that enables teams to work effectively.',
        },
        {
          id: 'bs15-tw-env-list',
          type: 'list',
          text: [
            'Ensure the team clearly understands the business objectives.',
            'Set ground rules for the team.',
            'Establish team values and goals.',
            'Consider each employee’s ideas as valuable.',
            'Be clear and specific when communicating to prevent confusion.',
            'Encourage listening and brainstorming.',
            'Encourage trust, respect, and cooperation among members of the team.',
            'Encourage team members to share information and resources effectively.',
            'Delegate problem-solving tasks to the team.',
            'Establish a method for arriving at a consensus to prevent conflict.',
            'Be aware of employees’ unspoken feelings.',
          ],
        },
        {
          id: 'bs15-tw-qa',
          type: 'questions',
          qa: [
            {
              q: 'Discuss any FOUR benefits of teamwork for a business.',
              marks: 8,
              a: [
                'Team members learn from each other and grow, and the team achieves more than any individual could alone.',
                'Teamwork improves effective communication and creates strong relationships among employees.',
                'It promotes healthy risk-taking, since team members have the support of the team in case of failure.',
                'It promotes a wider sense of ownership, which builds loyalty towards the company and individual job satisfaction.',
                'It promotes creativity and learning, and creates synergy that maximises employees’ energy levels (any 4).',
              ],
            },
            {
              q: 'Recommend/suggest TWO ways a business can create an environment that enables teams to work effectively.',
              marks: 4,
              a: [
                'Ensure the team clearly understands the business objectives, and set ground rules and team values/goals.',
                'Encourage trust, respect, and cooperation among team members.',
                'Establish a method for arriving at a consensus to prevent conflict (any 2).',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Interpersonal Relationships & Management Levels ──────────
    {
      id: 'bs-ch15-interpersonal',
      chapterId: 'business-ch15',
      subjectId: 'business',
      title: '3–4. Management Levels & Interpersonal Relationships',
      minutes: 16,
      blocks: [
        { id: 'bs15-mgmt-h1', type: 'heading', level: 2, text: '3. Different Hierarchies and Management Levels' },
        {
          id: 'bs15-mgmt-text',
          type: 'paragraph',
          text: 'Management levels refer to a line of demarcation between various managerial positions in an organization. Every level of management, and every employee, plays a role in achieving the business objectives.',
        },
        { id: 'bs15-ir-h1', type: 'heading', level: 2, text: '4. The Meaning of Interpersonal Relationship' },
        {
          id: 'bs15-ir-meaning',
          type: 'list',
          text: [
            'Interpersonal relationships in the workplace refer to a strong association among individuals working together.',
            'Interpersonal relationships in the workplace allow team members to share a special relationship.',
            'Team members build up a relationship of trust, openness, understanding and effective communication.',
            'Everyone plays a role in achieving the business objectives.',
          ],
        },
        { id: 'bs15-ir-imp-h', type: 'heading', level: 3, text: '4.1 The Importance of Each Individual in Achieving Business Objectives' },
        {
          id: 'bs15-ir-imp',
          type: 'list',
          text: [
            'The quality of interpersonal relationships impacts on the productivity of teams.',
            'If employees are skilled and knowledgeable, teams will be strong and efficient.',
            'Great results can be achieved through teamwork, so it is important that a business creates an environment that enables teams to work effectively.',
            'Usually, employees will take pride in their work if they are aware of how their efforts impact on achieving the business objectives.',
            'Celebrating milestones and praising team members helps employees feel excited to be part of the team. This in turn can lead to higher productivity.',
          ],
        },
        { id: 'bs15-ir-types-h', type: 'heading', level: 3, text: '4.2 Types of Interpersonal Working Relationships' },
        {
          id: 'bs15-ir-types-intro',
          type: 'paragraph',
          text: 'Great results can be achieved through teamwork and effective interpersonal relationships. It is important that a business creates an environment that enables teams to work effectively. The following are examples of the different types of interpersonal relationships that can occur in the workplace:',
        },
        {
          id: 'bs15-ir-types-table',
          type: 'definitions',
          rows: [
            { term: 'Peer relationships', meaning: 'The relationships between employees that are on the same level at the workplace. Employees are equal and the relationships are based on mutual respect.' },
            { term: 'Group relationships', meaning: 'The relationships between members of a team or group. Healthy group relationships will ensure good results, whereas poor relationships between group members may result in conflict.' },
            { term: 'Authority relationships', meaning: 'Relationships between a manager and subordinate. This relationship is based on mutual respect.' },
            { term: 'External relationships', meaning: 'Relationships with people outside of the company or business. These types of relationships are usually based on service delivery or outsourcing.' },
          ],
        },
        {
          id: 'bs15-ir-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain what is meant by "interpersonal relationship" in the workplace.',
              marks: 3,
              a: 'Interpersonal relationships in the workplace refer to a strong association among individuals working together. Team members build up a relationship of trust, openness, understanding and effective communication, and everyone plays a role in achieving the business objectives.',
            },
            {
              q: 'Distinguish between "peer relationships" and "authority relationships."',
              marks: 4,
              a: [
                'Peer relationships are relationships between employees who are on the same level at the workplace, where employees are equal and the relationship is based on mutual respect.',
                'Authority relationships are relationships between a manager and a subordinate, also based on mutual respect, but between different levels of authority.',
              ],
            },
            {
              q: 'Explain the importance of each individual in achieving business objectives.',
              marks: 4,
              a: [
                'The quality of interpersonal relationships impacts the productivity of teams; if employees are skilled and knowledgeable, teams will be strong and efficient.',
                'Employees take pride in their work when they are aware of how their efforts contribute to the business objectives.',
                'Celebrating milestones and praising team members helps employees feel excited to be part of the team, which can lead to higher productivity.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Factors Influencing Team Relationships ───────────────────
    {
      id: 'bs-ch15-factors',
      chapterId: 'business-ch15',
      subjectId: 'business',
      title: '4.3–4.5 Factors That Influence Team Relationships',
      minutes: 18,
      blocks: [
        { id: 'bs15-fac-h1', type: 'heading', level: 2, text: '4.3 Factors That Can Influence Team Relationships' },
        {
          id: 'bs15-fac-intro',
          type: 'paragraph',
          text: 'There are several factors that can influence team relationships. This section looks at some of these factors, together with the ways in which businesses can address them.',
        },
        {
          id: 'bs15-fac-tip',
          type: 'callout',
          text: 'Exam Tip: This table pairs each factor with the specific way businesses address it — learn them as PAIRS, since a common question gives you the factor and asks you to recommend how the business should respond.',
        },
        { id: 'bs15-fac-prej-h', type: 'heading', level: 3, text: 'Prejudice' },
        {
          id: 'bs15-fac-prej',
          type: 'list',
          text: [
            'Prejudice is a negative attitude towards an individual. This attitude is usually based on the differences between individuals who may belong to a particular social group.',
            'For example, prejudice is common against people who are members of an unfamiliar cultural group.',
          ],
        },
        {
          id: 'bs15-fac-prej-address-h',
          type: 'heading',
          level: 3,
          text: 'Ways to Address Prejudice',
        },
        {
          id: 'bs15-fac-prej-address',
          type: 'list',
          text: ['Teambuilding activities among staff members.', 'Awareness of cross-cultural differences.'],
        },
        { id: 'bs15-fac-disc-h', type: 'heading', level: 3, text: 'Discrimination' },
        {
          id: 'bs15-fac-disc',
          type: 'paragraph',
          text: 'Discrimination is negative action towards an individual because of their belonging to a certain gender, race, religion, or sexual orientation.',
        },
        {
          id: 'bs15-fac-disc-address-h',
          type: 'heading',
          level: 3,
          text: 'Ways to Address Discrimination',
        },
        {
          id: 'bs15-fac-disc-address',
          type: 'list',
          text: [
            'Human relation policy should include that discrimination will not be allowed.',
            'Procedure to report discrimination in the business.',
          ],
        },
        { id: 'bs15-fac-div-h', type: 'heading', level: 3, text: 'Diversity' },
        {
          id: 'bs15-fac-div',
          type: 'paragraph',
          text: 'Diversity is the practice of including or involving people from a range of different social and ethnic backgrounds, and of different genders and sexual orientations.',
        },
        {
          id: 'bs15-fac-div-address-h',
          type: 'heading',
          level: 3,
          text: 'Ways to Address Diversity',
        },
        {
          id: 'bs15-fac-div-address',
          type: 'list',
          text: [
            'Adhere to policy of equal opportunities when appointing new staff.',
            'Teambuilding activities amongst staff members.',
          ],
        },
        { id: 'bs15-fac-bel-h', type: 'heading', level: 3, text: 'Belief' },
        {
          id: 'bs15-fac-bel',
          type: 'paragraph',
          text: 'Belief is a conviction that we generally accept to be true without evidence or proof. Beliefs are related to culture and religion. Beliefs influence our thoughts and attitudes, and we must be aware of them.',
        },
        {
          id: 'bs15-fac-bel-address-h',
          type: 'heading',
          level: 3,
          text: 'Ways to Address Belief',
        },
        {
          id: 'bs15-fac-bel-address',
          type: 'list',
          text: ['Awareness of moral values and integrity in the business.'],
        },
        { id: 'bs15-fac-eq-h', type: 'heading', level: 3, text: 'Equity' },
        {
          id: 'bs15-fac-eq',
          type: 'list',
          text: [
            'Equity in the workplace refers to respectful and dignified treatment of every person in the business.',
            'Equity encourages diversity in decision making/allows job satisfaction and employee engagement.',
          ],
        },
        {
          id: 'bs15-fac-eq-address-h',
          type: 'heading',
          level: 3,
          text: 'Ways to Address Equity',
        },
        {
          id: 'bs15-fac-eq-address',
          type: 'list',
          text: ['Human resource policy should promote equity through appointment, promotion and allocation of resources.'],
        },
        { id: 'bs15-fac-promote-h', type: 'heading', level: 2, text: '4.4 Ways to Promote Healthy Interpersonal Relationships in the Workplace' },
        {
          id: 'bs15-fac-promote',
          type: 'list',
          text: [
            'Having empathy for others is an important skill employees need to build healthy interpersonal relationships in the workplace.',
            'Empathy helps team members to consider the thoughts, feelings and needs of others.',
            'Relying on other people builds trust and teamwork establishes strong relationships.',
            'Despite occasional disagreements, an effective team enjoys working and shares a strong bond.',
          ],
        },
        { id: 'bs15-fac-general-h', type: 'heading', level: 2, text: '4.5 Ways in Which Businesses Can Address Factors That Influence Team Relationships' },
        {
          id: 'bs15-fac-general-intro',
          type: 'paragraph',
          text: 'A business can create an environment that enables teams to work effectively:',
        },
        {
          id: 'bs15-fac-general-list',
          type: 'list',
          text: [
            'The business can make sure that employees understand and believe in business objectives.',
            'The business should listen to employees when they share ideas.',
            'Important decisions should be taken through a process of teamwork.',
            'Good teamwork needs to be awarded and mistakes must be viewed as opportunities to learn and grow.',
            'Being clear and specific when communicating to prevent confusion.',
            'Encouraging trust, respect, and cooperation among members of the team.',
            'Encouraging team members to share information and resources effectively.',
            'Delegating problem-solving tasks to the team.',
            'Establishing a method for arriving at a consensus to prevent conflict.',
          ],
        },
        {
          id: 'bs15-fac-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define "prejudice" and "discrimination," and explain how they are related.',
              marks: 4,
              a: [
                'Prejudice is a preconceived opinion or judgement of something or someone, not normally based on reason or fact.',
                'Discrimination occurs when an employee is treated unfairly because of race, gender, sexuality, religion or disability.',
                'Prejudice can lead to discrimination — the negative attitude (prejudice) turns into a negative action (discrimination).',
              ],
            },
            {
              q: 'Recommend TWO ways a business can address discrimination in the workplace.',
              marks: 4,
              a: [
                'Include in the human relations policy that discrimination will not be allowed.',
                'Establish a procedure to report discrimination in the business.',
              ],
            },
            {
              q: 'Explain the term "diversity" and suggest ONE way a business can address it.',
              marks: 3,
              a: 'Diversity is the practice of including or involving people from a range of different social and ethnic backgrounds, and of different genders and sexual orientations. Businesses can address it by adhering to a policy of equal opportunities when appointing new staff, or by running teambuilding activities amongst staff.',
            },
            {
              q: 'Discuss how a business can promote healthy interpersonal relationships in the workplace.',
              marks: 4,
              a: [
                'Employees should build empathy — considering the thoughts, feelings and needs of others.',
                'Relying on other people builds trust, and teamwork establishes strong relationships.',
                'Teams should learn to work through occasional disagreements while still sharing a strong bond.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Criteria for Successful Team Performance ──────────────────
    {
      id: 'bs-ch15-team-performance',
      chapterId: 'business-ch15',
      subjectId: 'business',
      title: '5. Criteria for Successful Team Performance',
      minutes: 18,
      blocks: [
        { id: 'bs15-crit-h1', type: 'heading', level: 2, text: '5. Criteria for Successful and Collaborative Team Performance' },
        {
          id: 'bs15-crit-intro',
          type: 'paragraph',
          text: 'Working in a team to achieve business objectives requires clear objectives, openness, mutual respect, support, and mutual trust. Team members need to be committed to the business. In order to improve teamwork, regular review of the team processes needs to be done. Team members must know what they want to achieve.',
        },
        {
          id: 'bs15-crit-tip',
          type: 'callout',
          text: 'Exam Tip: Remember the SIX criteria: 5.1 Clear objectives and agreed goals, 5.2 Interpersonal attitudes and behaviour, 5.3 Shared values and mutual respect, 5.4 Communication, 5.5 Co-operation/Collaboration, 5.6 Mutual respect, support, trust. You may be asked to assess a given team against these criteria.',
        },
        { id: 'bs15-crit1-h', type: 'heading', level: 3, text: '5.1 Clear Objectives and Agreed Goals' },
        {
          id: 'bs15-crit1',
          type: 'list',
          text: [
            'Team members must agree on goals and set clear objectives.',
            'Team members who agree to the goals will be committed.',
            'Team members will show more commitment if the objectives are understood clearly. Teams need to focus on the agreed goals essential for success.',
            'Team members should know what they want to achieve.',
            'Clear goals for direction.',
          ],
        },
        { id: 'bs15-crit2-h', type: 'heading', level: 3, text: '5.2 Interpersonal Attitudes and Behaviour' },
        {
          id: 'bs15-crit2',
          type: 'list',
          text: [
            'Team members have a positive attitude of support and motivation towards each other.',
            'Good interpersonal relationships will ensure job satisfaction and, in this way, increase the productivity of the team.',
            'Team members are committed and enthusiastic towards achieving a common goal.',
            'Team leaders give credit to members for positive contributions.',
          ],
        },
        { id: 'bs15-crit3-h', type: 'heading', level: 3, text: '5.3 Shared Values and Mutual Respect' },
        {
          id: 'bs15-crit3',
          type: 'list',
          text: [
            'Shows respect for the knowledge or skills of other members.',
            'Perform team tasks with integrity, meeting team deadlines with necessary commitment to team goals.',
            'Shows loyalty, respect and trust towards team members despite differences.',
            'Perform team tasks with integrity/pursuing responsibility/meeting team deadlines with necessary commitment to team goals.',
          ],
        },
        { id: 'bs15-crit4-h', type: 'heading', level: 3, text: '5.4 Communication' },
        {
          id: 'bs15-crit4',
          type: 'list',
          text: [
            'A clear set of processes and procedures for teamwork ensures that every team member understands their role.',
            'Efficient communication between members may result in quick decisions.',
            'Quality feedback from team members will improve the morale of the team.',
            'Open discussions between team members will lead to effective problem solving.',
            'Continuous review of the team progress ensures that team members can correct/minimize mistakes and can act pro-actively to ensure that goals are achieved.',
          ],
        },
        { id: 'bs15-crit5-h', type: 'heading', level: 3, text: '5.5 Co-operation/Collaboration' },
        {
          id: 'bs15-crit5',
          type: 'list',
          text: [
            'Clearly defined and realistic goals will ensure all team members know exactly what is expected of them.',
            'All team members should actively participate in the decision-making process.',
            'Show a willingness to cooperate as a unit to achieve team objectives.',
            'Co-operate with management to achieve team/business objectives.',
            'Agree on how to get a task done effectively and without wasting time on conflict resolution.',
            'A balanced composition of skills, knowledge, experience and expertise ensures that teams achieve their objectives.',
          ],
        },
        { id: 'bs15-crit6-h', type: 'heading', level: 3, text: '5.6 Mutual Respect, Support, Trust' },
        {
          id: 'bs15-crit6',
          type: 'list',
          text: [
            'Team members must not fear being laughed at or rejected for expressing concern. This will encourage participation.',
            'Team members should consult with all group members.',
            'Team members should learn from one another.',
            'Team members must support and trust one another to be an effective team.',
            'Reliability, doing what you say you will and taking risks with others help to build mutual trust.',
          ],
        },
        {
          id: 'bs15-crit-qa',
          type: 'questions',
          qa: [
            {
              q: 'List the SIX criteria for successful and collaborative team performance.',
              marks: 6,
              a: [
                'Clear objectives and agreed goals',
                'Interpersonal attitudes and behaviour',
                'Shared values and mutual respect',
                'Communication',
                'Co-operation/Collaboration',
                'Mutual respect, support, trust',
              ],
            },
            {
              q: 'Explain why "clear objectives and agreed goals" are important for successful team performance.',
              marks: 4,
              a: [
                'Team members must agree on goals and set clear objectives to give the team clear direction.',
                'Team members who agree to the goals will be committed, and will show more commitment if the objectives are understood clearly.',
                'Teams need to focus on the agreed goals that are essential for success.',
              ],
            },
            {
              q: 'Discuss the role of communication in successful team performance.',
              marks: 5,
              a: [
                'A clear set of processes and procedures ensures every team member understands their role.',
                'Efficient communication may result in quick decisions, and quality feedback improves team morale.',
                'Open discussions between team members lead to effective problem solving.',
                'Continuous review of team progress allows team members to correct mistakes and act pro-actively to ensure goals are achieved.',
              ],
            },
            {
              q: 'ESSAY: Discuss how team members can work in a team to accomplish business objectives. (150–200 words)',
              marks: 10,
              a: 'Teams accomplish business objectives when all members agree on clear objectives and goals, giving the team a shared sense of direction and commitment. Members must display positive interpersonal attitudes — supporting and motivating each other, with team leaders giving credit for positive contributions. Shared values and mutual respect mean members respect each other’s knowledge and skills, perform tasks with integrity, and show loyalty despite differences. Clear communication, through defined processes, efficient feedback and open discussion, ensures everyone understands their role and problems are solved effectively. Co-operation and collaboration require all members to participate actively in decision-making and work as a unit towards shared objectives. Finally, mutual respect, support and trust allow members to express concerns without fear of rejection, consult with one another, and rely on each other’s reliability. Regularly reviewing these team processes helps the team to continuously improve, correct mistakes, and remain focused on achieving the business’s objectives through sound, collaborative teamwork.',
            },
          ],
        },
      ],
    },
  ],
};
