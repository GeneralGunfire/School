import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_13: Chapter = {
  id: 'business-ch13',
  subjectId: 'business',
  title: 'Chapter 13: Presentation of Business Information',
  summary:
    'Grade 10 Term 3 — The importance of business reports, guidelines for writing an effective report, the role of graphs/diagrams/symbols, verbal presentations, types and purpose of visual aids, and factors to consider when designing a presentation.',
  paper: 2,
  category: 'Business Ventures',
  lessons: [
    // ── Lesson 1: Definitions & Business Reports ─────────────────────────────
    {
      id: 'bs-ch13-reports',
      chapterId: 'business-ch13',
      subjectId: 'business',
      title: 'Key Definitions & the Importance of Business Reports',
      minutes: 12,
      blocks: [
        { id: 'bs13-def-h1', type: 'heading', level: 2, text: 'Terms & Definitions' },
        {
          id: 'bs13-def-tip',
          type: 'callout',
          text: 'Exam Tip: Learn to distinguish verbal from non-verbal presentation, and know the definitions of each visual aid listed in the table — these are commonly tested as matching or scenario questions.',
        },
        {
          id: 'bs13-def-table',
          type: 'definitions',
          rows: [
            { term: 'Business report', meaning: 'A written document that communicates information to assist business decision making. A key communication tool that provides an evaluation of a particular issue relating to the performance of the business.' },
            { term: 'Graphs', meaning: 'A two-dimensional drawing showing a relationship between two sets of variables by means of a line/curve/bars.' },
            { term: 'Presentation', meaning: 'The act of communicating information/data to an audience/stakeholder in an organisation.' },
            { term: 'Verbal presentation', meaning: 'The presentation is delivered through word of mouth or in words.' },
            { term: 'Non-verbal presentation', meaning: 'Presentation is delivered through writing or supporting material — the transfer of information through the use of business reports, handouts, charts, and posters with the support of visual aids.' },
            { term: 'Visual aid', meaning: 'Refers to charts/pictures/images that help to clarify a point/enhance a presentation.' },
            { term: 'Audio-visual aid', meaning: 'Material or tool directed to both the sense of hearing and sight, e.g. a projector.' },
            { term: 'Data projector', meaning: 'A device that projects images from a computer onto a screen.' },
            { term: 'Interactive whiteboard', meaning: 'A device that has a data projector attached to it. It also has special pens that a presenter can write with on it.' },
            { term: 'Overhead projector', meaning: 'A device that shines light through a glass on which a translucent slide is placed.' },
            { term: 'Handout', meaning: 'Printed information provided to the audience to accompany a presentation — a written summary of information dealt with in a presentation.' },
            { term: 'Diagrams', meaning: 'A drawing showing the appearance/structure/workings of data in a schematic representation.' },
            { term: 'Flip chart', meaning: 'A large pad of paper, bound so that each page can be turned over at the top to reveal the next page, used on a stand.' },
            { term: 'Tables', meaning: 'A data structure that organises information into rows and columns.' },
          ],
        },
        { id: 'bs13-reports-h1', type: 'heading', level: 2, text: '1. The Importance of Business Reports' },
        {
          id: 'bs13-reports-list',
          type: 'list',
          text: [
            'A business report aims to provide a critical analysis of how the business is performing in all business functions of the organisation.',
            'Business reports are used to guide decision making in the business.',
            'Business reports enable management to keep track of every activity done in each department.',
            'It allows business owners and senior management the opportunity to investigate and solve any identified issues.',
            'It enables senior management to be informed on how each department is doing.',
            'Business reports provide information for management that is timely and factual.',
          ],
        },
        { id: 'bs13-verbal-h', type: 'heading', level: 3, text: 'Verbal vs Non-Verbal Presentation' },
        {
          id: 'bs13-verbal-list',
          type: 'list',
          text: [
            'Presentations may be done verbally or non-verbally.',
            'Verbal presentation means a presentation is delivered through speech or orally.',
            'Delivering effective verbal presentations involves what you say (verbal), how you say it with your voice (vocal), and everything the audience can see about you (visual). It is the verbal and visual equivalent of a written report.',
            'Non-verbal presentation is the transfer of information through the use of business reports, handouts, charts, and posters with the support of visual aids.',
            'A business report is a key communication tool that provides an evaluation of a particular issue relating to the performance of the business.',
            'A handout is a written summary of information dealt with in a presentation.',
            'Charts (referred to as newsprint) are used to record and visually display information that will engage and stimulate audience participation.',
            'Posters are usually large, printed sheets that contain pictures and are posted in a public place.',
          ],
        },
        {
          id: 'bs13-reports-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "business report."',
              marks: 2,
              a: 'A business report is a written document that communicates information to assist business decision making. It is a key communication tool that provides an evaluation of a particular issue relating to the performance of the business.',
            },
            {
              q: 'Name any THREE reasons why business reports are important.',
              marks: 3,
              a: [
                'They are used to guide decision making in the business.',
                'They enable management to keep track of every activity done in each department.',
                'They provide information for management that is timely and factual.',
              ],
            },
            {
              q: 'Distinguish between verbal and non-verbal presentation.',
              marks: 4,
              a: [
                'Verbal presentation is delivered through speech/orally — what is said, how it is said with the voice, and what the audience can see of the presenter.',
                'Non-verbal presentation is the transfer of information through business reports, handouts, charts, and posters, supported by visual aids.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Writing Business Reports & Graphs/Diagrams ───────────────
    {
      id: 'bs-ch13-writing-graphs',
      chapterId: 'business-ch13',
      subjectId: 'business',
      title: 'Writing an Effective Business Report & Using Graphs/Diagrams',
      minutes: 14,
      blocks: [
        {
          id: 'bs13-write-h1',
          type: 'heading',
          level: 2,
          text: 'Guidelines on Writing an Effective Business Report',
        },
        {
          id: 'bs13-write-list',
          type: 'list',
          text: [
            'Determine the scope of the report.',
            'Determine the target audience of the report.',
            'Determine how the report should be presented.',
            'Collect the necessary information.',
            'Prepare an overview of what the audience need to know and the details that should be included in the report.',
            'Write concisely/briefly, and only include important information.',
            'Use regular/basic language/simple grammar and clear, short sentences.',
            'Use accurate/meaningful visual aids, such as tables, graphs, drawings, etc.',
            'Spend time revising the report and correcting spelling mistakes and grammatical errors.',
            'Get someone to look at the report and make suggestions for improvement.',
          ],
        },
        {
          id: 'bs13-write-tip',
          type: 'callout',
          text: 'Exam Tip: "Outline guidelines for writing an effective business report" is a popular long question — be ready to list at least 5–6 of the above points in order.',
        },
        {
          id: 'bs13-graphs-h1',
          type: 'heading',
          level: 2,
          text: '4. The Importance, Advantages and Disadvantages of Graphs, Diagrams, Symbols, Pictures',
        },
        {
          id: 'bs13-graphs-intro',
          type: 'list',
          text: [
            'Graphs, diagrams and symbols/pictures are visual aids that help a reader/audience see what you are talking about in a business report or when giving a presentation.',
            'Graphs are more likely to be used to present data in a form that is easy for the reader/audience to understand.',
            'Images and diagrams are typically used to explain concepts or theories.',
          ],
        },
        { id: 'bs13-graphs-41-h', type: 'heading', level: 3, text: '4.1 The Importance of Graphs/Diagrams, Symbols, Pictures (Visual Aids)' },
        {
          id: 'bs13-graphs-41',
          type: 'list',
          text: [
            'Diagrammatic data presentation allows understanding of data more easily.',
            'It helps illustrate points to the reader/audience more easily and effectively.',
            "It also helps maintain the audience's interest during the presentation.",
            'It engages the audience with the presentation, making them remember it afterward.',
            'Diagrams are interesting, relevant, and support the presentation.',
            'Visual aids will effectively help convey the message.',
            'It helps to clarify the message and provides a point of reference for the mind.',
          ],
        },
        {
          id: 'bs13-graphs-42-h',
          type: 'heading',
          level: 3,
          text: '4.2 Advantages and Disadvantages of Graphs, Diagrams, Symbols/Pictures (Visual Aids)',
        },
        { id: 'bs13-graphs-adv-h', type: 'heading', level: 3, text: 'Advantages' },
        {
          id: 'bs13-graphs-adv',
          type: 'list',
          text: [
            'Graphical representation of information helps with understanding and identifying patterns and trends in data.',
            'It enables quick analysis of large amounts of data at one time, and assists in making predictions and informed decisions.',
            'A lot of information can be displayed in an easy-to-understand format.',
            'Graphs do not require much explanation.',
            'Visual aids simplify the presentation when using complex information.',
          ],
        },
        { id: 'bs13-graphs-dis-h', type: 'heading', level: 3, text: 'Disadvantages' },
        {
          id: 'bs13-graphs-dis',
          type: 'list',
          text: [
            'Too many diagrams and graphs can be confusing to the audience.',
            'Information can easily be manipulated, causing false interpretations.',
            'It may distract the audience from the speech, as they pay more attention to the visual aids.',
            'Preparation of graphs and diagrams is time-consuming.',
          ],
        },
        {
          id: 'bs13-write-graphs-qa',
          type: 'questions',
          qa: [
            {
              q: 'Outline any FIVE guidelines for writing an effective business report.',
              marks: 5,
              a: [
                'Determine the scope and target audience of the report.',
                'Determine how the report should be presented, and collect the necessary information.',
                'Write concisely and only include important information, using simple language and clear sentences.',
                'Use accurate and meaningful visual aids such as tables and graphs.',
                'Revise the report, correct errors, and get someone else to review it.',
              ],
            },
            {
              q: 'Explain the importance of using graphs/diagrams in a business report or presentation.',
              marks: 4,
              a: [
                'They allow data to be understood more easily and help illustrate points effectively.',
                "They help maintain the audience's interest and help them remember the presentation.",
                'They help clarify the message and provide a point of reference for the mind.',
              ],
            },
            {
              q: 'Discuss TWO advantages and TWO disadvantages of using graphs and diagrams in a presentation.',
              marks: 8,
              a: [
                'Advantage: Graphical representation helps identify patterns and trends in data quickly.',
                'Advantage: A lot of information can be displayed in an easy-to-understand format without much explanation.',
                'Disadvantage: Too many diagrams/graphs can confuse the audience.',
                'Disadvantage: Information can easily be manipulated, causing false interpretations.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Verbal Presentations ────────────────────────────────────────
    {
      id: 'bs-ch13-verbal-presentation',
      chapterId: 'business-ch13',
      subjectId: 'business',
      title: 'Preparing for a Verbal Presentation',
      minutes: 12,
      blocks: [
        {
          id: 'bs13-vp-h1',
          type: 'heading',
          level: 2,
          text: 'Factors That Must Be Considered When Preparing for a Verbal Presentation',
        },
        {
          id: 'bs13-vp-intro',
          type: 'paragraph',
          text: 'Several aspects need to be considered when preparing for a verbal presentation. These are:',
        },
        {
          id: 'bs13-vp-list',
          type: 'list',
          text: [
            'Write down the purpose and main points of the presentation.',
            'Capturing the main aim in the introduction of the presentation.',
            'Relevant and accurate presentation of the information.',
            'Being fully conversant with the content of the presentation.',
            'Knowing the background of the audience to determine the appropriate visual aids.',
            'Preparing a structure of the presentation with an introduction, body, and conclusion.',
            'Summarising the key facts in the conclusion, and showing that all aspects have been addressed.',
            'Creating visual aids that will assist in getting the point across effectively.',
            'Visiting the venue and ensuring that the equipment provided is working and suitable.',
            'Considering the time frame for the presentation.',
            'Practising the presentation and noting how long it takes.',
            'Practising in front of a person who will give an honest opinion of the presentation.',
            'Preparing for the feedback session by anticipating possible questions.',
            'Information to be presented should be relevant and accurate.',
            'Preparing support material to enhance the presentation.',
            'Preparing for the feedback session by anticipating possible questions/comments.',
          ],
        },
        {
          id: 'bs13-vp-tip',
          type: 'callout',
          text: 'Exam Tip: This is a classic "name/state factors" long question. Group the points mentally into three buckets: PREPARATION (content, structure, visual aids), PRACTICE (venue, timing, rehearsal) and FEEDBACK (anticipating questions) to recall them more easily.',
        },
        {
          id: 'bs13-vp-qa',
          type: 'questions',
          qa: [
            {
              q: 'Outline any FIVE factors that must be considered when preparing for a verbal presentation.',
              marks: 5,
              a: [
                'Write down the purpose and main points of the presentation.',
                'Be fully conversant with the content of the presentation.',
                'Know the background of the audience to determine appropriate visual aids.',
                'Prepare a structure with an introduction, body and conclusion.',
                'Practise the presentation and note how long it takes.',
                'Prepare for the feedback session by anticipating possible questions.',
              ],
            },
            {
              q: 'Explain why it is important to visit the venue before a presentation.',
              marks: 2,
              a: 'Visiting the venue ensures that the equipment provided is working and suitable, which helps the presentation to run smoothly without technical problems.',
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Types, Definitions & Purpose of Visual Aids ───────────────
    {
      id: 'bs-ch13-visual-aids',
      chapterId: 'business-ch13',
      subjectId: 'business',
      title: 'Types, Definitions & Purpose of Visual Aids',
      minutes: 16,
      blocks: [
        { id: 'bs13-va-h1', type: 'heading', level: 2, text: '6. Types of Visual Aids' },
        {
          id: 'bs13-va-types',
          type: 'list',
          text: [
            'Handouts/flyers/brochures',
            'Interactive whiteboard/smart board',
            'Posters/signs/banners/flags',
            'Overhead projector',
            'Flip charts',
            'Graphs',
            'PowerPoint/data projector/slides',
          ],
        },
        { id: 'bs13-va-def-h', type: 'heading', level: 2, text: '7. Definition of Visual Aids' },
        {
          id: 'bs13-va-def-table',
          type: 'definitions',
          rows: [
            {
              term: 'PowerPoint / Data Projector / Slides',
              meaning: 'Usually used for large groups. Projects images from a computer to a screen. Shows summaries/graphs/relationships/diagrams/process steps etc. Can be used to create a mood through showing images and videos. Slides summarise information to increase understanding.',
            },
            {
              term: 'Handouts',
              meaning: 'Used for small or large groups. Used to give a summary of the presentation and provides follow-up activities. Contains a summary of the most important points. They are given to the audience when they leave after the presentation. Provide details that cannot be included in the presentation, such as financial statements. They provide structure and focus for the presentation.',
            },
            {
              term: 'Interactive Whiteboard',
              meaning: 'Can be used for small or large groups. Can be used in brainstorming sessions to capture feedback and ideas. Can be linked to other whiteboards in other venues. Uses coded pens to write new information and feedback.',
            },
            {
              term: 'Flyers/Brochures',
              meaning: 'Can be used as an effective marketing tool. Can be used for attracting people to an advert.',
            },
            {
              term: 'Posters/Signs/Banners/Flags',
              meaning: 'Are used to communicate with potential customers. Can be used as a marketing strategy. They summarise information and discussions for stakeholders. They can be decorated to attract attention to the information on them.',
            },
            {
              term: 'Charts/Flip Charts',
              meaning: 'A flip chart is a board with paper attached at the top that can be flipped over to present information sequentially. Charts can be used for a small group. Used to summarise discussions. Records ideas and feedback given by the group. Does not need electricity and is therefore a cheaper visual aid. Management may show the organisation\'s structure in the form of an organisational chart.',
            },
          ],
        },
        { id: 'bs13-va-purpose-h', type: 'heading', level: 2, text: '8. The Purpose of Audio-Visual Aids' },
        {
          id: 'bs13-va-purpose',
          type: 'list',
          text: [
            'They add value and clarity to the presentation.',
            'They make the presentation more interesting and memorable.',
            'Visual aids reinforce what the presenter has said.',
            'They create an atmosphere, such as showing videos.',
            'Helps get the message across more easily.',
            'Keeps the audience engaged during the presentation.',
            'They add power and punch to the presentation.',
            'Enhance the presentation.',
            'Create excitement.',
            'Help the audience to remember the presentation.',
          ],
        },
        {
          id: 'bs13-va-tip',
          type: 'callout',
          text: 'Exam Tip: Scenario questions often describe a visual aid ("a board with paper that flips over" or "needs no electricity") and ask you to identify it (Flip Chart) and explain its purpose — read the full definitions table carefully.',
        },
        {
          id: 'bs13-va-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name any FOUR types of visual aids.',
              marks: 4,
              a: ['PowerPoint/data projector/slides', 'Handouts', 'Flip charts', 'Posters/signs/banners/flags (any 4)'],
            },
            {
              q: 'Identify the visual aid being described: "It does not need electricity, can be used for a small group, and is used to summarise discussions by recording ideas and feedback given by the group."',
              marks: 2,
              a: 'This is a Flip Chart. It is a board with paper attached at the top that can be flipped over to present information sequentially, used to summarise discussions and record ideas and feedback.',
            },
            {
              q: 'Explain any FOUR purposes of audio-visual aids.',
              marks: 4,
              a: [
                'They add value and clarity to the presentation.',
                'They make the presentation more interesting and memorable.',
                'They reinforce what the presenter has said.',
                'They help keep the audience engaged and help them remember the presentation.',
              ],
            },
            {
              q: 'Discuss the use of handouts as a visual aid.',
              marks: 4,
              a: [
                'Handouts can be used for small or large groups.',
                'They give a summary of the presentation and provide follow-up activities.',
                'They contain a summary of the most important points and are given to the audience when they leave.',
                'They provide details that cannot be included in the presentation, such as financial statements, and give structure and focus to the presentation.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Designing a Presentation ───────────────────────────────────
    {
      id: 'bs-ch13-designing',
      chapterId: 'business-ch13',
      subjectId: 'business',
      title: 'Factors to Consider When Designing a Presentation',
      minutes: 12,
      blocks: [
        {
          id: 'bs13-design-h1',
          type: 'heading',
          level: 2,
          text: '9. Factors to Consider When Preparing/Designing a Presentation',
        },
        {
          id: 'bs13-design-intro',
          type: 'paragraph',
          text: 'The following factors must be considered when designing a presentation:',
        },
        {
          id: 'bs13-design-list',
          type: 'list',
          text: [
            'Start with the text and heading.',
            'Use large, clear fonts that are easy to read.',
            'Selecting a suitable background that would not distract from the content.',
            'Choosing images that may help to communicate the message.',
            'Including graphics and images related to the content.',
            'Adding special effects to support the message.',
            'Creating hyperlinks to allow quick access to other files.',
            'Keeping images and graphics simple.',
            'Using outlines on slides and keeping detailed explanations for the verbal presentation.',
            'Limiting each slide to five or six lines.',
            'Making sure the grammar is correct.',
            'Proofreading carefully.',
            'Ending with a closing message that the audience will remember.',
            'Being colourful and grabbing attention.',
            'Being meaningful and appropriate.',
            'Selecting a suitable background.',
            'Structuring information in a logical sequence.',
            'Limiting the information on each slide.',
            'Avoiding long sentences and keeping it simple.',
            'Avoiding fancy decorations.',
          ],
        },
        {
          id: 'bs13-design-tip',
          type: 'callout',
          text: 'Exam Tip: The golden rule tested most often is "limit each slide to five or six lines" and "avoid long sentences — keep it simple." Expect a question asking you to critique a badly designed slide using these rules.',
        },
        {
          id: 'bs13-design-qa',
          type: 'questions',
          qa: [
            {
              q: 'Outline any FIVE factors that must be considered when designing a presentation.',
              marks: 5,
              a: [
                'Use large, clear fonts that are easy to read.',
                'Select a suitable background that will not distract from the content.',
                'Keep images and graphics simple, and limit each slide to five or six lines.',
                'Structure information in a logical sequence and avoid long sentences.',
                'Proofread carefully and ensure correct grammar.',
                'End with a closing message that the audience will remember.',
              ],
            },
            {
              q: 'Explain why it is important to limit the amount of text on each slide of a presentation.',
              marks: 2,
              a: 'Limiting text to outlines (five or six lines per slide) keeps the slide easy to read, avoids overwhelming the audience, and keeps the detailed explanation for the verbal part of the presentation.',
            },
            {
              q: 'ESSAY: Discuss the factors a business should consider when designing an effective presentation, and explain how visual aids contribute to a successful presentation. (150–200 words)',
              marks: 10,
              a: 'When designing a presentation, a business should use large, clear fonts and a suitable background that does not distract from the content, while keeping images and graphics simple and relevant to the message. Information should be structured in a logical sequence, with each slide limited to five or six lines, avoiding long sentences and fancy decorations that could confuse the audience. The presenter should use outlines on slides and keep detailed explanations for the verbal part of the presentation, ending with a closing message the audience will remember, and ensuring grammar is correct through careful proofreading. Visual aids such as PowerPoint slides, handouts, posters, and flip charts contribute to a successful presentation by adding value and clarity, making the presentation more interesting and memorable, and reinforcing what the presenter has said. They keep the audience engaged, help convey complex information quickly, and provide a point of reference for the mind. However, visual aids must be used carefully, as too many diagrams or graphics can confuse or distract the audience from the actual message being delivered.',
            },
          ],
        },
      ],
    },
  ],
};
