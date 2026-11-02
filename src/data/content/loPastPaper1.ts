import type { Chapter } from '@/lib/types';

/**
 * Real past paper #1 — Johannesburg East District, PLC Paper, Grade 10,
 * 31 October 2025. 100 marks, 2h30. Section A and B compulsory; Section C
 * answer any TWO of three questions. A learner's handwritten answers are
 * preserved on Section A Question 1 (MCQs circled, blanks filled in, short
 * answers written); Sections B and C had no legible handwriting in the
 * source photos, so those model answers are composed to match CAPS content
 * and are flagged accordingly.
 */
export const LO_PAST_PAPER_1: Chapter = {
  id: 'lo-past-paper-1',
  subjectId: 'life-orientation',
  title: 'Past Paper 1: Johannesburg East District PLC (Oct 2025)',
  summary: 'Johannesburg East District PLC Paper, Grade 10, 31 October 2025. 100 marks, 2 hours 30 minutes. Section A (compulsory): self-awareness, power relations, gender and scarce skills. Section B (compulsory): social issues (poverty/food insecurity) and the job market. Section C (choose 2 of 3): doping ethics, volunteerism, and the right to say no.',
  category: 'Past Papers',
  lessons: [
    // ── Section A ─────────────────────────────────────────────────────────
    {
      id: 'lo-pp1-section-a',
      chapterId: 'lo-past-paper-1',
      subjectId: 'life-orientation',
      title: 'Section A (Compulsory)',
      minutes: 30,
      blocks: [
        { id: 'pp1-a-h1', type: 'heading', level: 2, text: 'Section A — Question 1 (Compulsory)' },
        {
          id: 'pp1-a-callout',
          type: 'callout',
          text: 'Source: Johannesburg East District PLC Paper, Grade 10, 31 October 2025. The handwritten answers below (MCQ letters circled, blanks filled in, short answers) are preserved from the real learner script where legible.',
        },
        {
          id: 'pp1-a-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1.1',
              context: 'Various options are provided as possible answers to the following questions. Choose the answer and write only the letter (A–D) next to the question number.',
              q: 'Power relations imply: A) Control or authority over another person B) Not having equal power in a relationship C) Sharing of power between people in a relationship D) Decision-making not always shared',
              marks: 1,
              a: 'C) Sharing of power between people in a relationship',
            },
            { n: '1.1.2', q: 'To support, encourage and give praise to others is to: A) affirm others B) be assertive C) be self-aware D) reflect on others', marks: 1, a: 'A) affirm others' },
            { n: '1.1.3', q: 'Gender refers to: A) Being male or female B) Masculinity C) Sexual orientation D) Femininity', marks: 1, a: 'A) Being male or female' },
            { n: '1.1.4', q: 'The government uses tax contributions from working individuals, businesses and companies to: A) finance the disabled B) finance students who cannot afford to pay for college and university fees C) run the country and pay for infrastructure D) all of the above', marks: 1, a: 'D) all of the above' },
            {
              n: '1.1.5',
              q: 'The African traditional religious belief system can be summed up as follows: A) The goal of life is to realize the supreme soul as the innermost of one\'s own identity B) The principal beliefs are in the Ten Commandments C) It centers on the belief in God and the Creator through the power and appeasement of ancestors D) Belief in the trinity: the Father, the Son and the Holy Spirit',
              marks: 1,
              a: 'C) It centers on the belief in God and the Creator through the power and appeasement of ancestors',
            },
            { n: '1.2.1', context: 'Give one word or phrase for the following statements.', q: 'Working on behalf of others without payment for your time and services.', marks: 1, a: 'Volunteering' },
            { n: '1.2.2', q: 'Careers where there are few or no qualified and experienced people to do the work.', marks: 1, a: 'Scarce skills' },
            { n: '1.2.3', q: 'Express yourself clearly so that others do not misunderstand you.', marks: 1, a: 'Assertiveness' },
            { n: '1.2.4', q: 'The natural abilities you were born with.', marks: 1, a: 'Talents' },
            { n: '1.2.5', q: 'Unjust and unfair treatment of others based on their religion, race and colour.', marks: 1, a: 'Discrimination' },
            {
              n: '1.3.1',
              context: 'Answer the following questions by writing the answer next to the question numbers (1.3.1 to 1.3.4) in the ANSWER BOOK/FOLIO provided. Write your answers in full sentences.',
              q: 'State FOUR social inequalities that a social and environmental issue could assist you to choose the appropriate subjects for your chosen career.',
              marks: 4,
              a: 'Illegible / page cut off in the source photo — not answered in the scanned script. (Model guidance: social inequalities to consider include unequal access to quality schooling, lack of career guidance in under-resourced schools, financial barriers to subject-related extra resources, and limited exposure to role models in certain careers.)',
            },
            {
              n: '1.3.2',
              q: 'Explain TWO ways that self-awareness could assist you to choose the appropriate subjects for your chosen career.',
              marks: 4,
              a: 'Not legible in the source photo. (Model guidance: self-awareness helps a learner identify their genuine strengths and interests rather than choosing subjects based on peer pressure; it also helps them recognise weaknesses early so they can seek support or choose a more suitable subject combination.)',
            },
            {
              n: '1.3.3',
              q: 'Suggest ONE way in which teenagers can support each other as they go through the changes associated with puberty and the related emotional difficulties.',
              marks: 2,
              a: 'Listen without judgement and reassure each other that the physical and emotional changes of puberty are a normal part of growing up.',
            },
            {
              n: '1.3.4',
              q: 'Differentiate between scanning and skimming as methods of reading.',
              marks: 2,
              a: 'Scanning is reading quickly to find specific information in a text, while skimming is reading quickly to get a general overview or main idea of a text.',
            },
          ],
        },
        { id: 'pp1-a-total', type: 'callout', text: 'TOTAL SECTION A: 20' },
      ],
    },

    // ── Section B ─────────────────────────────────────────────────────────
    {
      id: 'lo-pp1-section-b',
      chapterId: 'lo-past-paper-1',
      subjectId: 'life-orientation',
      title: 'Section B (Compulsory)',
      minutes: 35,
      blocks: [
        { id: 'pp1-b-h1', type: 'heading', level: 2, text: 'Section B — Question 2 (Social Issues) and Question 3 (Job Market and Trends)' },
        {
          id: 'pp1-b-note',
          type: 'callout',
          text: 'No legible handwritten answers were visible for Section B in the source photos. The model answers below are composed to match CAPS Grade 10 content and the mark allocations shown on the real paper.',
        },
        { id: 'pp1-b-q2-h', type: 'heading', level: 3, text: 'Question 2: Topic — Social Issues' },
        {
          id: 'pp1-b-q2',
          type: 'questions',
          qa: [
            {
              n: '2.1',
              context: 'Study the picture below [a drawing depicting hunger and poverty, accessed from istockphoto.com, 17 October 2024] and answer the questions that follow.',
              q: 'State FOUR harmful effects of poverty.',
              marks: 4,
              a: ['Malnutrition and stunted physical/cognitive development in children.', 'Limited access to quality education, often leading to school dropout.', 'Poor access to healthcare services.', 'Increased vulnerability to crime and substance abuse.'],
            },
            {
              n: '2.2',
              q: 'Discuss TWO aspects that will indicate unequal access to basic resources and services.',
              marks: 4,
              a: ['Unequal access to clean water, sanitation and electricity between informal settlements and formal suburbs.', 'Unequal access to quality healthcare facilities between wealthy and poor areas.'],
            },
            {
              n: '2.3',
              q: 'Discuss THREE ways an individual can overcome poverty.',
              marks: 6,
              a: ['Pursue education and skills development to improve future employability.', 'Volunteer time or support community feeding schemes and NPOs.', 'Practise budgeting and financial literacy to use limited resources wisely.'],
            },
            {
              n: '2.4',
              q: 'Poverty leads to food insecurity and malnutrition. Discuss food insecurity and how it leads to malnutrition.',
              marks: 6,
              a: 'Food insecurity means households cannot reliably access enough nutritious food and often rely on cheap, low-nutrient staples. Without a varied diet containing essential vitamins, minerals and protein, the body experiences malnutrition, which leads to stunted growth, weakened immunity and poor concentration, especially in children.',
            },
          ],
        },
        { id: 'pp1-b-q3-h', type: 'heading', level: 3, text: 'Question 3: Topic — Job Market and Trends' },
        {
          id: 'pp1-b-q3',
          type: 'questions',
          qa: [
            {
              n: '3.1',
              context: 'Read the following extract [on globalisation and the job market] and answer questions that follow.',
              q: 'Define globalisation.',
              marks: 1,
              a: 'Globalisation is the increasing interconnectedness of countries through trade, technology, investment, and the movement of people and information, leading to an exponential increase in job opportunities that is not evenly spread across all sectors and countries.',
            },
            {
              n: '3.2',
              q: 'State FOUR drivers of change in emerging demands and changing career patterns.',
              marks: 4,
              a: ['Rapid technological advancement and automation.', 'Globalisation exposing local workers to international competition.', 'Changing demographics and a growing, more educated workforce.', 'Shifts in consumer demand and industry growth.'],
            },
            {
              n: '3.3',
              q: 'Describe THREE facts about the job market.',
              marks: 3,
              a: ['South Africa faces a critical skills shortage across almost all sectors.', 'Recruiters and HR specialists struggle to fill vacancies for skilled positions.', 'Skills shortages ultimately affect business growth and the country\'s GDP.'],
            },
            {
              n: '3.4',
              q: 'Fully discuss THREE trends in the global career market.',
              marks: 6,
              a: ['Growing demand for digital and IT skills across almost all industries.', 'Rise of remote and flexible working arrangements.', 'Increasing emphasis on lifelong learning and reskilling as industries evolve faster than before.'],
            },
            {
              n: '3.5',
              q: 'Discuss THREE consequences of not following trends and demands of the job market.',
              marks: 6,
              a: ['A learner may train in a field with an oversupply of job seekers, making it harder to find employment.', 'Skills gained may become outdated if the industry shifts, reducing long-term employability.', 'Missed opportunities in growing, well-paying scarce-skills fields the learner may have been suited to.'],
            },
          ],
        },
        { id: 'pp1-b-total', type: 'callout', text: 'TOTAL SECTION B: 40' },
      ],
    },

    // ── Section C ─────────────────────────────────────────────────────────
    {
      id: 'lo-pp1-section-c',
      chapterId: 'lo-past-paper-1',
      subjectId: 'life-orientation',
      title: 'Section C — Answer Any TWO of Three (Q4, Q5, Q6)',
      minutes: 40,
      blocks: [
        { id: 'pp1-c-h1', type: 'heading', level: 2, text: 'Section C' },
        {
          id: 'pp1-c-instructions',
          type: 'callout',
          text: 'Instruction from the real paper: "Answer any TWO questions in this section. Your response must be in an essay form. Marks will only be allocated for full sentences." No legible handwritten answers were visible for Section C in the source photos; the model answers below are composed to match CAPS content and the real mark allocations.',
        },
        { id: 'pp1-c-q4-h', type: 'heading', level: 3, text: 'Question 4: The Changing Face of the Volunteer' },
        {
          id: 'pp1-c-q4',
          type: 'questions',
          qa: [
            {
              n: '4.1',
              context: 'Read the extract below (The Changing Face of the Volunteer, adapted from sagoodnews.co.za, accessed 28 March 2024) and answer the questions that follow. Write paragraphs on volunteerism.',
              q: 'Define the term \'social thinking skills\' and give THREE reasons why volunteering could be regarded as an act of exercising those skills.',
              marks: 4,
              a: 'Social thinking skills are the ability to understand, interpret and respond appropriately to social situations and the needs of others. Volunteering exercises these skills because: it requires reading and responding to the needs of people in different circumstances; it involves working cooperatively within a team or organisation; and it builds empathy through direct contact with people facing hardship.',
            },
            {
              n: '4.2',
              q: 'Analyse TWO reasons why young people should volunteer within their communities to develop their own self-identity.',
              marks: 8,
              a: ['Volunteering exposes young people to new experiences and perspectives beyond their usual environment, helping them discover their own values, strengths and interests.', 'Working alongside diverse people and facing real community challenges builds confidence and a clearer sense of purpose, both central to forming a stable self-identity.'],
            },
            {
              n: '4.3',
              q: 'Critically discuss TWO ways in which the community could benefit from having young people volunteer.',
              marks: 8,
              a: ['Communities gain practical support, such as food distribution or tutoring, that they may not otherwise have capacity or funding to provide.', 'Young volunteers bring fresh energy and new ideas, which can inspire further community participation — though the benefit depends on volunteers being well-supported and the work being sustained rather than once-off.'],
            },
          ],
        },
        { id: 'pp1-c-q5-h', type: 'heading', level: 3, text: 'Question 5: Doping in Sport' },
        {
          id: 'pp1-c-q5',
          type: 'questions',
          qa: [
            {
              n: '5.1',
              context: 'Study the infographic below (Dubious Distinction — countries with highest % of adverse doping findings, adapted from linkedin.com, accessed 18 August 2024). Glossary: Doping — using substances to improve performance. Write paragraphs on doping.',
              q: 'State FOUR reasons why athletes might make the illegal decision to start doping.',
              marks: 4,
              a: ['Pressure to win and secure sponsorships or prize money.', 'Belief that competitors are already doping.', 'Pressure from coaches, team doctors or sporting federations.', 'Desire to recover faster from injury or extend a career.'],
            },
            {
              n: '5.2',
              q: 'Analyse how maladministration in sporting bodies could make it difficult to enforce drug taking laws in sports.',
              marks: 8,
              a: 'Maladministration — such as corruption, cover-ups or inconsistent testing — undermines fair and reliable enforcement because sporting bodies may protect high-profile or medal-winning athletes to preserve the organisation\'s reputation and revenue. Under-resourced or poorly managed testing agencies may also be unable to test all athletes regularly or consistently across different countries, creating loopholes that athletes can exploit.',
            },
            {
              n: '5.3',
              q: 'Critically discuss skills that may enable the sports industry to effectively stop athletes from doping.',
              marks: 8,
              a: 'Critical thinking and ethics education can help athletes weigh the long-term health and reputational consequences of doping against short-term competitive gain. Strong, assertive decision-making skills help athletes resist pressure from coaches or peers to use banned substances. Ultimately, these individual skills must be paired with rigorous, consistent and well-funded testing programmes, since skills alone cannot overcome systemic enforcement failures.',
            },
          ],
        },
        { id: 'pp1-c-q6-h', type: 'heading', level: 3, text: 'Question 6: The Right to Say "No"' },
        {
          id: 'pp1-c-q6',
          type: 'questions',
          qa: [
            {
              n: '6.1',
              context: 'Study the image below ("NO is NO", source: derebus.org.za, accessed 8 September 2024). Write paragraphs on the right to say \'no\'.',
              q: 'State FOUR reasons why individuals may feel unable to use their right to say \'no\'.',
              marks: 4,
              a: ['Fear of rejection or losing the relationship.', 'Peer pressure to conform to what friends are doing.', 'Low self-esteem and a need for approval.', 'Power imbalances in the relationship or fear of retaliation.'],
            },
            {
              n: '6.2',
              q: 'Explain how the right to say \'no\' can empower individuals to resist pressure to engage in sexual activities before they are ready.',
              marks: 8,
              a: 'The right to say "no" builds self-respect and reinforces personal boundaries, giving individuals the confidence to refuse unwanted activity without guilt. It also protects against the physical and emotional consequences of unwanted sexual activity, such as unplanned pregnancy or sexually transmitted infections, by allowing a person to wait until they are genuinely ready, both emotionally and physically.',
            },
            {
              n: '6.3',
              q: 'Discuss the impact that understanding the ethical teachings of major religions could have on individuals exercising their right to say \'no\' in South Africa.',
              marks: 8,
              a: 'Understanding religious teachings on dignity, bodily autonomy and self-discipline can give individuals an additional value-based foundation for confidently exercising their right to say "no", strengthening their resolve against pressure. However, since South Africa is a diverse, multi-faith society, this understanding must be balanced with respect for personal choice, so that religious belief empowers individuals rather than being used to shame or coerce them.',
            },
          ],
        },
        { id: 'pp1-c-total', type: 'callout', text: 'TOTAL SECTION C: 40 | GRAND TOTAL: 100' },
      ],
    },
  ],
};
