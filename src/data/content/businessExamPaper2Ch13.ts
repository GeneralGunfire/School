import type { Chapter } from '@/lib/types';

/**
 * Scope: Presentation of Business Information — scope-only chapter for Paper 2.
 *
 * Contains ONLY the content on the student's Paper 2 exam-scope sheet for this
 * source chapter, extracted from the full chapter. Linked from the "Exam Scope:
 * Paper 2" Overview checklist so a student lands here, not in the full chapter.
 */

export const BUSINESS_EXAM_P2_CH13: Chapter = {
  id: 'business-exam-p2-ch13',
  subjectId: 'business',
  title: 'Scope: Presentation of Business Information',
  summary: 'Only the content on your Paper 2 exam scope — nothing else.',
  paper: 2,
  hidden: true,
  lessons: [
{
  id: 'bs-p2x-presentation',
  chapterId: 'business-exam-p2-ch13',
  subjectId: 'business' as const,
  title: 'Presentation of Business Information: Reports, Graphs, Verbal Presentations & Visual Aids',
  minutes: 22,
  blocks: [
    { id: 'p2x-pr-h1', type: 'heading' as const, level: 2 as const, text: 'Key Definitions' },
    {
      id: 'p2x-pr-def-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Business report', meaning: 'A written document that communicates information to assist business decision making — a key communication tool that provides an evaluation of a particular issue relating to the performance of the business.' },
        { term: 'Graphs', meaning: 'A two-dimensional drawing showing a relationship between two sets of variables by means of a line/curve/bars.' },
        { term: 'Presentation', meaning: 'The act of communicating information/data to an audience/stakeholder in an organisation.' },
        { term: 'Verbal presentation', meaning: 'The presentation is delivered through word of mouth or in words.' },
        { term: 'Non-verbal presentation', meaning: 'Delivered through writing or supporting material — business reports, handouts, charts, and posters with the support of visual aids.' },
        { term: 'Visual aid', meaning: 'Charts/pictures/images that help to clarify a point/enhance a presentation.' },
        { term: 'Handout', meaning: 'Printed information provided to the audience to accompany a presentation — a written summary of information dealt with in a presentation.' },
        { term: 'Diagrams', meaning: 'A drawing showing the appearance/structure/workings of data in a schematic representation.' },
        { term: 'Flip chart', meaning: 'A large pad of paper, bound so that each page can be turned over at the top to reveal the next page, used on a stand.' },
      ],
    },
    { id: 'p2x-pr-h2', type: 'heading' as const, level: 2 as const, text: 'The Importance of Business Reports' },
    {
      id: 'p2x-pr-imp',
      type: 'list' as const,
      text: [
        'A business report aims to provide a critical analysis of how the business is performing in all business functions.',
        'Business reports guide decision making in the business.',
        'They enable management to keep track of every activity done in each department.',
        'They allow business owners and senior management to investigate and solve identified issues.',
        'They provide information for management that is timely and factual.',
      ],
    },
    { id: 'p2x-pr-verbal-h', type: 'heading' as const, level: 3 as const, text: 'Verbal vs Non-Verbal Presentation' },
    {
      id: 'p2x-pr-verbal',
      type: 'list' as const,
      text: [
        'Verbal presentation involves what you say (verbal), how you say it with your voice (vocal), and everything the audience can see about you (visual). It is the verbal and visual equivalent of a written report.',
        'Non-verbal presentation is the transfer of information through business reports, handouts, charts, and posters with the support of visual aids.',
        'A handout is a written summary of information dealt with in a presentation.',
        'Charts (newsprint) record and visually display information to engage and stimulate audience participation.',
      ],
    },
    { id: 'p2x-pr-write-h1', type: 'heading' as const, level: 2 as const, text: 'Guidelines on Writing an Effective Business Report' },
    {
      id: 'p2x-pr-write-list',
      type: 'list' as const,
      text: [
        'Determine the scope and target audience of the report.',
        'Determine how the report should be presented, and collect the necessary information.',
        'Prepare an overview of what the audience need to know and the details that should be included.',
        'Write concisely/briefly, including only important information.',
        'Use regular/basic language/simple grammar and clear, short sentences.',
        'Use accurate/meaningful visual aids, such as tables, graphs, drawings, etc.',
        'Spend time revising the report and correcting spelling/grammatical errors.',
        'Get someone to look at the report and make suggestions for improvement.',
      ],
    },
    { id: 'p2x-pr-graphs-h1', type: 'heading' as const, level: 2 as const, text: 'Graphs, Diagrams & Symbols/Pictures' },
    {
      id: 'p2x-pr-graphs-imp',
      type: 'list' as const,
      text: [
        'Diagrammatic data presentation allows understanding of data more easily.',
        'Helps illustrate points to the reader/audience more easily and effectively.',
        "Helps maintain the audience's interest and engages them, making them remember the presentation afterward.",
        'Helps to clarify the message and provides a point of reference for the mind.',
      ],
    },
    { id: 'p2x-pr-graphs-adv-h', type: 'heading' as const, level: 3 as const, text: 'Advantages' },
    {
      id: 'p2x-pr-graphs-adv',
      type: 'list' as const,
      text: [
        'Helps with understanding and identifying patterns and trends in data.',
        'Enables quick analysis of large amounts of data, assisting predictions and informed decisions.',
        'A lot of information can be displayed in an easy-to-understand format without much explanation.',
      ],
    },
    { id: 'p2x-pr-graphs-dis-h', type: 'heading' as const, level: 3 as const, text: 'Disadvantages' },
    {
      id: 'p2x-pr-graphs-dis',
      type: 'list' as const,
      text: [
        'Too many diagrams and graphs can be confusing to the audience.',
        'Information can easily be manipulated, causing false interpretations.',
        'May distract the audience from the speech, and preparation is time-consuming.',
      ],
    },
    { id: 'p2x-pr-vp-h1', type: 'heading' as const, level: 2 as const, text: 'Preparing for a Verbal Presentation' },
    {
      id: 'p2x-pr-vp-list',
      type: 'list' as const,
      text: [
        'Write down the purpose and main points of the presentation; capture the main aim in the introduction.',
        'Be relevant, accurate, and fully conversant with the content.',
        'Know the background of the audience to determine appropriate visual aids.',
        'Prepare a structure with an introduction, body, and conclusion; summarise key facts in the conclusion.',
        'Create visual aids that will assist in getting the point across effectively.',
        'Visit the venue and ensure equipment is working and suitable; consider the time frame.',
        'Practise the presentation (noting how long it takes) in front of someone who will give honest feedback.',
        'Prepare for the feedback session by anticipating possible questions/comments.',
      ],
    },
    { id: 'p2x-pr-va-h1', type: 'heading' as const, level: 2 as const, text: 'Types & Definitions of Visual Aids' },
    {
      id: 'p2x-pr-va-types',
      type: 'list' as const,
      text: ['Handouts/flyers/brochures', 'Interactive whiteboard/smart board', 'Posters/signs/banners/flags', 'Overhead projector', 'Flip charts', 'Graphs', 'PowerPoint/data projector/slides'],
    },
    {
      id: 'p2x-pr-va-def-table',
      type: 'definitions' as const,
      rows: [
        { term: 'PowerPoint / Data Projector / Slides', meaning: 'Usually for large groups. Projects images from a computer to a screen — summaries, graphs, relationships, diagrams, process steps. Can create a mood through images/videos.' },
        { term: 'Handouts', meaning: 'Used for small or large groups; give a summary and follow-up activities. Provide details that cannot be included in the presentation (e.g. financial statements). Give structure and focus to the presentation.' },
        { term: 'Interactive Whiteboard', meaning: 'Used for small or large groups; used in brainstorming sessions to capture feedback and ideas; can be linked to other whiteboards; uses coded pens.' },
        { term: 'Flyers/Brochures', meaning: 'An effective marketing tool, used to attract people to an advert.' },
        { term: 'Posters/Signs/Banners/Flags', meaning: 'Used to communicate with potential customers as a marketing strategy; summarise information for stakeholders; decorated to attract attention.' },
        { term: 'Charts/Flip Charts', meaning: 'A flip chart is a board with paper attached at the top that can be flipped over to present information sequentially. Used for small groups to summarise discussions and record ideas/feedback. Needs no electricity — a cheaper visual aid.' },
      ],
    },
    { id: 'p2x-pr-va-purpose-h', type: 'heading' as const, level: 2 as const, text: 'The Purpose of Audio-Visual Aids' },
    {
      id: 'p2x-pr-va-purpose',
      type: 'list' as const,
      text: [
        'Add value and clarity to the presentation; reinforce what the presenter has said.',
        'Make the presentation more interesting and memorable; help the audience remember it.',
        'Create an atmosphere (e.g. videos); keep the audience engaged; add power and punch; create excitement.',
      ],
    },
    { id: 'p2x-pr-design-h1', type: 'heading' as const, level: 2 as const, text: 'Factors to Consider When Designing a Presentation' },
    {
      id: 'p2x-pr-design-list',
      type: 'list' as const,
      text: [
        'Use large, clear fonts that are easy to read; select a suitable background that will not distract from the content.',
        'Choose images/graphics related to the content and keep them simple; add special effects to support the message.',
        'Use outlines on slides and keep detailed explanations for the verbal presentation.',
        'Limit each slide to five or six lines; structure information in a logical sequence; avoid long sentences and fancy decorations.',
        'Create hyperlinks to allow quick access to other files; make sure the grammar is correct; proofread carefully.',
        'End with a closing message that the audience will remember; be colourful, meaningful and appropriate.',
      ],
    },
  ],
}
  ],
};
