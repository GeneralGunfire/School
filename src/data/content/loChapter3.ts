import type { Chapter } from '@/lib/types';

export const LO_CHAPTER_3: Chapter = {
  id: 'lo-ch3',
  subjectId: 'life-orientation',
  title: 'Chapter 3: Democracy and Human Rights',
  summary: 'Term 2/3 — The Constitution and Bill of Rights, democracy and citizenship, diversity and discrimination, xenophobia, gender-based violence, doping and ethics in sport, and volunteerism and civic responsibility.',
  category: 'Term 2/3',
  lessons: [
    // ── Lesson 1: The Constitution and Bill of Rights ────────────────────────
    {
      id: 'lo-ch3-constitution',
      chapterId: 'lo-ch3',
      subjectId: 'life-orientation',
      title: 'The Constitution and the Bill of Rights',
      minutes: 14,
      blocks: [
        { id: 'lo3-con-h1', type: 'heading', level: 2, text: 'The Constitution and the Bill of Rights' },
        {
          id: 'lo3-con-def',
          type: 'definitions',
          rows: [
            { term: 'Constitution', meaning: 'The supreme law of South Africa; no other law or government action may contradict it. It sets out how the country is governed and protects the rights of all people.' },
            { term: 'Bill of Rights', meaning: 'Chapter 2 of the Constitution, which sets out the fundamental human rights of all people in South Africa.' },
            { term: 'Democracy', meaning: 'A system of government in which power is held by the people, either directly or through freely elected representatives.' },
          ],
        },
        { id: 'lo3-con-rights-h', type: 'heading', level: 3, text: 'Selected Rights in the Bill of Rights' },
        {
          id: 'lo3-con-rights',
          type: 'list',
          text: [
            'The right to equality — everyone is equal before the law and may not be unfairly discriminated against.',
            'The right to human dignity.',
            'The right to life.',
            'The right to freedom and security of the person.',
            'The right to privacy.',
            'Freedom of religion, belief and opinion.',
            'Freedom of expression.',
            'The right to a safe environment that is not harmful to health or wellbeing.',
            'The right to basic education.',
            'The right to access healthcare, food, water and social security.',
          ],
        },
        { id: 'lo3-con-values-h', type: 'heading', level: 3, text: 'Founding Values of the Constitution' },
        {
          id: 'lo3-con-values',
          type: 'list',
          text: ['Human dignity, the achievement of equality and the advancement of human rights and freedoms.', 'Non-racialism and non-sexism.', 'Supremacy of the Constitution and the rule of law.', 'Universal adult suffrage and a multi-party system of democratic government.'],
        },
        {
          id: 'lo3-con-qa',
          type: 'questions',
          qa: [
            { q: 'Define the Constitution.', marks: 2, a: 'The Constitution is the supreme law of South Africa; no other law or government action may contradict it, and it protects the rights of all people.' },
            { q: 'Name any TWO rights found in the Bill of Rights.', marks: 2, a: ['The right to equality', 'The right to human dignity', 'The right to freedom and security of the person (any TWO)'] },
            {
              q: 'Discuss THREE founding values of the South African Constitution.',
              marks: 6,
              a: [
                'Human dignity and the advancement of human rights and freedoms.',
                'Non-racialism and non-sexism.',
                'Supremacy of the Constitution and the rule of law.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Diversity and Discrimination ───────────────────────────────
    {
      id: 'lo-ch3-diversity-discrimination',
      chapterId: 'lo-ch3',
      subjectId: 'life-orientation',
      title: 'Diversity and Discrimination',
      minutes: 14,
      blocks: [
        { id: 'lo3-div-h1', type: 'heading', level: 2, text: 'Diversity and Discrimination' },
        {
          id: 'lo3-div-def',
          type: 'definitions',
          rows: [
            { term: 'Diversity', meaning: 'The range of human differences, including race, ethnicity, gender, age, religion, disability, sexual orientation, language and culture, within a group or society.' },
            { term: 'Discrimination', meaning: 'The unjust or unfair treatment of a person or group based on characteristics such as race, gender, religion, disability or sexual orientation.' },
            { term: 'Prejudice', meaning: 'A preconceived, usually negative, opinion or attitude towards a person or group that is not based on actual experience or fact.' },
            { term: 'Stereotype', meaning: 'An oversimplified, widely held belief about a particular group of people.' },
          ],
        },
        { id: 'lo3-div-forms-h', type: 'heading', level: 3, text: 'Forms of Discrimination' },
        {
          id: 'lo3-div-forms',
          type: 'list',
          text: ['Racism — discrimination based on race or ethnicity.', 'Sexism — discrimination based on gender.', 'Ableism — discrimination against people with disabilities.', 'Homophobia — discrimination based on sexual orientation.', 'Xenophobia — discrimination against foreign nationals.', 'Ageism — discrimination based on age.'],
        },
        { id: 'lo3-div-impact-h', type: 'heading', level: 3, text: 'Impact of Discrimination' },
        {
          id: 'lo3-div-impact',
          type: 'list',
          text: ['Psychological harm — anxiety, depression, lowered self-esteem.', 'Social exclusion and marginalisation.', 'Economic disadvantage — unequal access to jobs, education and services.', 'Can escalate into violence (e.g. xenophobic attacks, hate crimes).'],
        },
        { id: 'lo3-div-combat-h', type: 'heading', level: 3, text: 'Combating Discrimination' },
        {
          id: 'lo3-div-combat',
          type: 'list',
          text: ['Promote education and awareness about diversity from a young age.', 'Challenge stereotypes and prejudiced comments when you encounter them.', 'Support anti-discrimination laws and policies (e.g. the Employment Equity Act, PEPUDA).', 'Build inclusive school and community environments.', 'Celebrate and learn about different cultures, religions and backgrounds.'],
        },
        {
          id: 'lo3-div-qa',
          type: 'questions',
          qa: [
            { q: 'Define discrimination.', marks: 2, a: 'Discrimination is the unjust or unfair treatment of a person or group based on characteristics such as race, gender, religion, disability or sexual orientation.' },
            {
              q: 'Discuss THREE ways in which discrimination can be combated in schools.',
              marks: 6,
              a: ['Promote education and awareness about diversity.', 'Challenge stereotypes and prejudiced comments when encountered.', 'Build an inclusive school culture that celebrates different backgrounds.'],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Xenophobia ──────────────────────────────────────────────────
    {
      id: 'lo-ch3-xenophobia',
      chapterId: 'lo-ch3',
      subjectId: 'life-orientation',
      title: 'Xenophobia',
      minutes: 12,
      blocks: [
        { id: 'lo3-xen-h1', type: 'heading', level: 2, text: 'Xenophobia' },
        {
          id: 'lo3-xen-def',
          type: 'list',
          text: [
            'Xenophobia is an intense dislike, fear or hatred of people from other countries — a human rights violation when it leads to discrimination or violence against foreign nationals.',
            'South Africa has experienced several waves of xenophobic violence, including attacks on foreign-owned shops and communities.',
          ],
        },
        { id: 'lo3-xen-causes-h', type: 'heading', level: 3, text: 'Causes of Xenophobia' },
        {
          id: 'lo3-xen-causes',
          type: 'list',
          text: [
            'Competition for scarce jobs and resources.',
            'Misinformation and myths blaming foreign nationals for crime or unemployment.',
            'Poverty and frustration directed at vulnerable, visible outsiders.',
            'Lack of understanding of migrants\' legal rights and circumstances.',
            'Political and media rhetoric that scapegoats foreign nationals.',
          ],
        },
        { id: 'lo3-xen-impact-h', type: 'heading', level: 3, text: 'Impact of Xenophobia' },
        {
          id: 'lo3-xen-impact',
          type: 'list',
          text: [
            'Violence towards foreign nationals is a human rights violation — it breaches the right to life, dignity and security of the person.',
            'Destruction of foreign-owned businesses and loss of livelihoods.',
            'Damage to South Africa\'s international relations and reputation.',
            'Deepens social division and distrust within communities.',
            'Displacement of people who lose their homes and safety.',
          ],
        },
        { id: 'lo3-xen-reduce-h', type: 'heading', level: 3, text: 'Strategies to Reduce Xenophobia' },
        {
          id: 'lo3-xen-reduce',
          type: 'list',
          text: [
            'Promote accurate information and dispel myths about migration and crime statistics.',
            'Encourage dialogue and interaction between local and migrant communities.',
            'Enforce laws that protect the rights of foreign nationals.',
            'Address underlying socio-economic issues such as unemployment and poverty.',
            'Promote Ubuntu and a culture of tolerance through education campaigns.',
          ],
        },
        {
          id: 'lo3-xen-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term xenophobia.', marks: 2, a: 'Xenophobia is an intense dislike, fear or hatred of people from other countries, which becomes a human rights violation when it results in discrimination or violence.' },
            { q: 'State how the cartoon characters feel about foreigners is a human rights violation.', marks: 2, a: 'Violence or hostility towards foreign nationals breaches their constitutional right to life, dignity and security of the person, regardless of their nationality.' },
            {
              q: 'Explain TWO possible reasons why xenophobia on our country is very popular or in demand.',
              marks: 4,
              a: ['Competition for scarce jobs and resources creates resentment towards foreign nationals.', 'Misinformation and political/media rhetoric scapegoat foreign nationals for crime and unemployment.'],
            },
            {
              q: 'Critically discuss why South African nationals may feel that citizens need to resort to violent and destructive protests.',
              marks: 4,
              a: 'Some South Africans feel that peaceful appeals have failed to produce visible change, so frustration over high unemployment, poverty and perceived government inaction can build to the point where people turn to violent, destructive action to force attention — though this response is unlawful and ultimately harms both victims and the communities involved.',
            },
            {
              q: 'Analyse TWO promotional strategies the government could put into place to decrease violent and destructive protest action against foreigners.',
              marks: 8,
              a: [
                'Public awareness campaigns using accurate statistics to dispel myths that foreign nationals are responsible for crime and unemployment.',
                'Community dialogue programmes that bring together local and migrant communities to build understanding and reduce tension.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Gender-Based Violence and the Right to Say No ──────────────
    {
      id: 'lo-ch3-gbv',
      chapterId: 'lo-ch3',
      subjectId: 'life-orientation',
      title: 'Gender-Based Violence and the Right to Say "No"',
      minutes: 14,
      blocks: [
        { id: 'lo3-gbv-h1', type: 'heading', level: 2, text: 'Gender-Based Violence and the Right to Say "No"' },
        {
          id: 'lo3-gbv-def',
          type: 'definitions',
          rows: [
            { term: 'Gender-based violence (GBV)', meaning: 'Harmful acts directed at an individual based on their gender, including physical, sexual, emotional and economic abuse.' },
            { term: 'Consent', meaning: 'A clear, voluntary and informed agreement to engage in an activity; it can be withdrawn at any time.' },
            { term: 'The right to say "no"', meaning: 'Every person\'s constitutional right to refuse to participate in any activity, including sexual activity, without being pressured, coerced or punished for it.' },
          ],
        },
        { id: 'lo3-gbv-reasons-h', type: 'heading', level: 3, text: 'Reasons Individuals May Feel Unable to Use Their Right to Say "No"' },
        {
          id: 'lo3-gbv-reasons',
          type: 'list',
          text: [
            'Fear of rejection or losing the relationship.',
            'Peer pressure to conform to what friends are doing.',
            'Low self-esteem and a need for approval or validation.',
            'Power imbalances in the relationship (e.g. age, financial dependence).',
            'Fear of physical or emotional retaliation/violence.',
            'Cultural or social pressure/gender norms that discourage refusal.',
            'Manipulation or coercion by the other person.',
          ],
        },
        { id: 'lo3-gbv-empower-h', type: 'heading', level: 3, text: 'How the Right to Say "No" Empowers Individuals' },
        {
          id: 'lo3-gbv-empower',
          type: 'list',
          text: [
            'Builds self-respect and reinforces personal boundaries.',
            'Protects against unwanted sexual activity and its consequences (e.g. unplanned pregnancy, STIs).',
            'Encourages young people to resist pressure before they are emotionally or physically ready.',
            'Promotes healthier, more equal relationships based on mutual respect.',
            'Reduces vulnerability to exploitation and abuse.',
          ],
        },
        { id: 'lo3-gbv-religion-h', type: 'heading', level: 3, text: 'Ethical Teachings of Major Religions on the Right to Say "No"' },
        {
          id: 'lo3-gbv-religion',
          type: 'list',
          text: [
            'Most major religions (Christianity, Islam, Judaism, Hinduism, Buddhism) teach respect for the dignity and bodily autonomy of every person.',
            'Many faiths emphasise abstinence before marriage and self-discipline, which can reinforce an individual\'s confidence in exercising their right to say "no".',
            'Religious teachings on compassion and respect for others discourage coercion and support consent-based relationships.',
            'Understanding these teachings can strengthen an individual\'s resolve and give them a value-based reason to resist pressure, though religious belief is personal and should never be used to shame or coerce others.',
          ],
        },
        {
          id: 'lo3-gbv-qa',
          type: 'questions',
          qa: [
            { n: '6.1', q: 'State FOUR reasons why individuals may feel unable to use their right to say "no".', marks: 4, a: ['Fear of rejection or losing the relationship.', 'Peer pressure to conform.', 'Low self-esteem and need for approval.', 'Power imbalances or fear of retaliation.'] },
            { n: '6.2', q: 'Explain how the right to say "no" can empower individuals to resist pressure to engage in sexual activities before they are ready.', marks: 8, a: ['It builds self-respect and reinforces personal boundaries, giving individuals the confidence to refuse unwanted activity.', 'It protects against the physical and emotional consequences of unwanted sexual activity, such as unplanned pregnancy or STIs, by allowing a person to wait until they are truly ready.'] },
            { n: '6.3', q: 'Discuss the impact that understanding the ethical teachings of major religions could have on individuals exercising their right to say "no" in South Africa.', marks: 8, a: 'Understanding religious teachings on dignity, bodily autonomy and self-discipline can give individuals an additional value-based foundation for confidently exercising their right to say "no", strengthening their resolve against pressure; however, since South Africa is a diverse, multi-faith society, this understanding must be balanced with respect for personal choice, so that religious belief empowers rather than shames or coerces individuals.' },
          ],
        },
      ],
    },

    // ── Lesson 5: Volunteerism and Civic Responsibility ──────────────────────
    {
      id: 'lo-ch3-volunteerism',
      chapterId: 'lo-ch3',
      subjectId: 'life-orientation',
      title: 'Volunteerism and Civic Responsibility',
      minutes: 12,
      blocks: [
        { id: 'lo3-vol-h1', type: 'heading', level: 2, text: 'Volunteerism and Civic Responsibility' },
        {
          id: 'lo3-vol-def',
          type: 'definitions',
          rows: [
            { term: 'Volunteerism', meaning: 'The act of offering your time, skills or resources to help others or a cause, without expecting payment.' },
            { term: 'Social thinking skills', meaning: 'The ability to understand, interpret and respond appropriately to social situations and the needs/perspectives of others.' },
            { term: 'Non-profit organisation (NPO)', meaning: 'An organisation that uses its funds to pursue a social or community goal rather than to generate profit for owners or shareholders.' },
          ],
        },
        { id: 'lo3-vol-skills-h', type: 'heading', level: 3, text: 'Skills Developed Through Volunteering' },
        {
          id: 'lo3-vol-skills',
          type: 'list',
          text: ['Social thinking and empathy — understanding the needs and perspectives of others.', 'Teamwork and communication skills.', 'Leadership and initiative.', 'Problem-solving under real-world constraints.', 'Time management and reliability.'],
        },
        { id: 'lo3-vol-why-h', type: 'heading', level: 3, text: 'Why Young People Should Volunteer' },
        {
          id: 'lo3-vol-why',
          type: 'list',
          text: [
            'Volunteering could be regarded as an act of exercising those skills because it gives young people real opportunities to practise social thinking, empathy and leadership in a low-stakes, supportive environment.',
            'Helps young people develop and discover their own self-identity by exposing them to new experiences, people and challenges outside their usual environment.',
            'Builds a sense of purpose and connection to the broader community.',
            'Strengthens a CV and demonstrates initiative to future employers or tertiary institutions.',
            'Communities benefit directly from the skills, energy and time that volunteers contribute.',
          ],
        },
        {
          id: 'lo3-vol-qa',
          type: 'questions',
          qa: [
            { n: '4.1', q: 'Define the term "social thinking skills" and give THREE reasons why volunteering could be regarded as an act of exercising those skills.', marks: 4, a: 'Social thinking skills are the ability to understand, interpret and respond appropriately to social situations and the needs of others. Volunteering exercises these skills because: (1) it requires reading and responding to the needs of people in different circumstances; (2) it involves working cooperatively within a team or organisation; (3) it builds empathy through direct contact with people facing hardship.' },
            { n: '4.2', q: 'Analyse TWO reasons why young people should volunteer within their communities to develop their own self-identity.', marks: 8, a: ['Volunteering exposes young people to new experiences and perspectives beyond their usual environment, helping them discover their own values, strengths and interests.', 'Working alongside diverse people and facing real community challenges builds confidence and a clearer sense of purpose, both of which are central to forming a stable self-identity.'] },
            { n: '4.3', q: 'Critically discuss TWO ways in which the community could benefit from having young people volunteer.', marks: 8, a: ['Communities gain practical support — such as food distribution or tutoring — that they may not otherwise have the capacity or funding to provide.', 'Young volunteers bring fresh energy and new ideas, and their involvement can inspire further community participation and a stronger sense of collective responsibility; however, the benefit depends on volunteers being well-supported and the work being sustained rather than once-off.'] },
          ],
        },
      ],
    },

    // ── Lesson 6: Doping and Ethics in Sport ──────────────────────────────────
    {
      id: 'lo-ch3-doping',
      chapterId: 'lo-ch3',
      subjectId: 'life-orientation',
      title: 'Doping and Ethics in Sport',
      minutes: 12,
      blocks: [
        { id: 'lo3-dop-h1', type: 'heading', level: 2, text: 'Doping and Ethics in Sport' },
        {
          id: 'lo3-dop-def',
          type: 'list',
          text: [
            'Doping is the use of banned/illegal substances (e.g. steroids) by athletes to artificially improve their performance.',
            'It is a breach of sporting ethics because it creates an unfair advantage and undermines fair competition.',
          ],
        },
        { id: 'lo3-dop-reasons-h', type: 'heading', level: 3, text: 'Why Athletes May Make the Illegal Decision to Start Doping' },
        {
          id: 'lo3-dop-reasons',
          type: 'list',
          text: [
            'Pressure to win and secure sponsorships/prize money.',
            'Belief that competitors are already doping, creating a perceived need to "level the playing field".',
            'Pressure from coaches, team doctors or sporting federations.',
            'Desire to recover faster from injury or extend a career.',
            'Weak testing and enforcement in some sports/countries, reducing perceived risk.',
          ],
        },
        { id: 'lo3-dop-maladmin-h', type: 'heading', level: 3, text: 'Maladministration and Enforcement' },
        {
          id: 'lo3-dop-maladmin',
          type: 'list',
          text: [
            'Maladministration (corruption, cover-ups, inconsistent testing) in sporting bodies makes it difficult to enforce anti-doping laws consistently.',
            'Under-resourced testing agencies may be unable to test all athletes regularly.',
            'Conflicts of interest can arise when sporting bodies prioritise reputation/revenue over clean competition.',
          ],
        },
        { id: 'lo3-dop-skills-h', type: 'heading', level: 3, text: 'Skills to Effectively Stop Athletes from Doping' },
        {
          id: 'lo3-dop-skills',
          type: 'list',
          text: [
            'Critical thinking — athletes assessing the long-term health and ethical consequences of doping, not just short-term gain.',
            'Decision-making skills to resist pressure from coaches/peers to dope.',
            'Strong personal values and integrity instilled through sports education programmes.',
            'Assertiveness to refuse banned substances offered by others.',
          ],
        },
        {
          id: 'lo3-dop-qa',
          type: 'questions',
          qa: [
            { q: 'Give the definition of the term "doping".', marks: 2, a: 'Doping is the use of banned/illegal substances by athletes to improve their sporting performance.' },
            { n: '3.2', q: 'State TWO reasons why athletes may take drugs in sports.', marks: 2, a: ['Pressure to win and secure sponsorships or prize money.', 'Belief that competitors are already doping.'] },
            { n: '3.3', q: 'Explain ONE negative effect of taking drugs in sports coverage.', marks: 2, a: 'Doping scandals damage an athlete\'s reputation and can lead to stripped titles, bans and loss of sponsorship, as seen in high-profile cases.' },
            { n: '3.4', q: 'Discuss TWO examples in which different sport bodies could be biased.', marks: 4, a: ['A sporting body may delay or soften sanctions against a high-profile or medal-winning athlete to protect its own reputation.', 'Wealthier sporting federations may have better-resourced testing programmes than poorer ones, creating inconsistent enforcement across countries.'] },
            { n: '3.5', q: 'Assess TWO ways in which different sport bodies could discourage doping in their sport.', marks: 4, a: ['Implement rigorous, randomised and well-funded testing throughout the year, not only before major competitions.', 'Apply consistent, transparent and significant sanctions regardless of an athlete\'s profile or medal status.'] },
            { n: '3.6', q: 'Provide TWO strategies that your school can adopt to prevent steroid use within school sports. In your answer indicate how these strategies can be implemented most effectively in a school context.', marks: 6, a: ['Education programmes that teach learners about the health risks and ethical consequences of doping, delivered through Life Orientation lessons and guest speakers from sports science or medical backgrounds.', 'Clear school sports codes of conduct with consistent consequences for banned substance use, communicated to learners, coaches and parents at the start of each season.'] },
          ],
        },
      ],
    },
  ],
};
