import type { Chapter } from '@/lib/types';

/**
 * Scope: Problem-Solving & Creative Thinking — scope-only chapter for Paper 2.
 *
 * Contains ONLY the content on the student's Paper 2 exam-scope sheet for this
 * source chapter, extracted from the full chapter. Linked from the "Exam Scope:
 * Paper 2" Overview checklist so a student lands here, not in the full chapter.
 */

export const BUSINESS_EXAM_P2_CH11: Chapter = {
  id: 'business-exam-p2-ch11',
  subjectId: 'business',
  title: 'Scope: Problem-Solving & Creative Thinking',
  summary: 'Only the content on your Paper 2 exam scope — nothing else.',
  paper: 2,
  hidden: true,
  lessons: [
{
  id: 'bs-p2x-problem-solving',
  chapterId: 'business-exam-p2-ch11',
  subjectId: 'business' as const,
  title: 'Problem-Solving: Meaning, vs Decision-Making & the Full Problem-Solving Cycle',
  minutes: 22,
  blocks: [
    { id: 'p2x-ps-h1', type: 'heading' as const, level: 2 as const, text: 'The Meaning of Problem-Solving' },
    {
      id: 'p2x-ps-meaning',
      type: 'list' as const,
      text: [
        'Problem solving is the ability to search for and find information relating to the problem.',
        'It is the process of finding solutions to difficult or complex issues. It requires creative thinking. Alternative solutions are identified and critically evaluated. Effective problem-solving results in good decision-making.',
        'It is a process of identifying and analysing the problem and coming up with solutions.',
        'Problems can be solved by a group/team or an individual, using various techniques.',
      ],
    },
    {
      id: 'p2x-ps-tip',
      type: 'callout' as const,
      text: 'Exam Tip: "Decision-making" and "problem-solving" are often confused. Decision-making is usually ONE person choosing between alternatives, and is a PART of the problem-solving process (step 4: choose the best solution). Problem-solving is the WHOLE process and usually involves a group/team.',
    },
    { id: 'p2x-ps-dm-h', type: 'heading' as const, level: 3 as const, text: 'Decision-Making vs Problem-Solving' },
    {
      id: 'p2x-ps-dm-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Decision-making — made by', meaning: 'Decisions are usually made by one person.' },
        { term: 'Problem-solving — made by', meaning: 'Usually involves a group/team.' },
        { term: 'Decision-making — alternatives', meaning: 'Various alternatives are considered before deciding on the best one.' },
        { term: 'Problem-solving — alternatives', meaning: 'Alternative solutions are identified and evaluated.' },
        { term: 'Decision-making — definition', meaning: 'The process of choosing from several alternatives.' },
        { term: 'Problem-solving — definition', meaning: 'The process of finding a solution to a problem.' },
        { term: 'Decision-making — relation', meaning: 'Part of the problem-solving process where a solution is chosen.' },
        { term: 'Problem-solving — relation', meaning: 'Involves analysing the problem to identify solutions.' },
      ],
    },
    { id: 'p2x-ps-cycle-h1', type: 'heading' as const, level: 2 as const, text: 'The Problem-Solving Cycle/Steps' },
    {
      id: 'p2x-ps-cycle-intro',
      type: 'paragraph' as const,
      text: 'Businesses need a process they can use to solve their problems. The problem-solving cycle consists of EIGHT steps, in order:',
    },
    {
      id: 'p2x-ps-cycle-list',
      type: 'list' as const,
      text: [
        'Identify the problem.',
        'Define the problem.',
        'Develop an action plan.',
        'Choose the best solution/strategy.',
        'Allocate the resources.',
        'Implement the suggested solution/action plan.',
        'Monitor the implementation of the solution/action plan.',
        'Evaluate the implemented solution/action plan.',
      ],
    },
    { id: 'p2x-ps-step1-h', type: 'heading' as const, level: 3 as const, text: '1. Identify the Problem' },
    {
      id: 'p2x-ps-step1',
      type: 'list' as const,
      text: ['Acknowledge that there is a problem, and identify the exact problem.', 'Break the problem into smaller/separate parts that are easier to solve.', 'Develop a detailed problem-solving statement including the effect the problem has on the business.', 'Get the opinions and suggestions of everyone involved; collect as much information as possible.'],
    },
    { id: 'p2x-ps-step2-h', type: 'heading' as const, level: 3 as const, text: '2. Define the Problem' },
    {
      id: 'p2x-ps-step2',
      type: 'list' as const,
      text: ['Define the causes of the problem; focus on the real problem by finding out as much information as possible.', 'This step can only take place once the business knows and understands its problem.', 'Generate a definition that is concrete and specific so it becomes easier to find a solution.'],
    },
    { id: 'p2x-ps-step3-h', type: 'heading' as const, level: 3 as const, text: '3. Develop an Action Plan' },
    {
      id: 'p2x-ps-step3',
      type: 'list' as const,
      text: ['Identify all different possible solutions by constructing a course of action that will change the situation.', 'Use problem-solving techniques to formulate relevant strategies, considering different solutions using creative thinking techniques.', 'The solution must be realistic and executable; the action plan includes details of activities to be performed.'],
    },
    { id: 'p2x-ps-step4-h', type: 'heading' as const, level: 3 as const, text: '4. Choose the Best Solution/Strategy' },
    {
      id: 'p2x-ps-step4',
      type: 'list' as const,
      text: ['Set criteria for the best solution/strategy — time/cost/risk involved.', 'The best solution should match the size and resources of the business.', 'If the solution is not appropriate, go back to defining the problem.'],
    },
    { id: 'p2x-ps-step5-h', type: 'heading' as const, level: 3 as const, text: '5. Allocate the Resources' },
    {
      id: 'p2x-ps-step5',
      type: 'list' as const,
      text: ['Arrange the necessary resources — money/staff/time/equipment — to assign tasks and execute by priority.', 'Plan carefully so as not to interrupt normal running of the business; consider buying affordable and effective resources.', 'Communicate with employees so they understand the strategy and know who will do each job.'],
    },
    { id: 'p2x-ps-step6-h', type: 'heading' as const, level: 3 as const, text: '6. Implement the Suggested Solution/Action Plan' },
    {
      id: 'p2x-ps-step6',
      type: 'list' as const,
      text: ['Carry out the solution/action plan and have the necessary resources to implement it.', 'Plan the steps required and consider the method and time of implementation.'],
    },
    { id: 'p2x-ps-step7-h', type: 'heading' as const, level: 3 as const, text: '7. Monitor the Implementation of the Solution/Action Plan' },
    {
      id: 'p2x-ps-step7',
      type: 'list' as const,
      text: ['Closely observe the solution/action plan, gathering feedback to ensure it is being implemented as expected.', 'Monitor whether the strategy is solving the problem as defined in step 1.', 'If the strategy is not working, return to step 3 and come up with an alternative strategy.'],
    },
    { id: 'p2x-ps-step8-h', type: 'heading' as const, level: 3 as const, text: '8. Evaluate the Implemented Solution/Action Plan' },
    {
      id: 'p2x-ps-step8',
      type: 'list' as const,
      text: ['Consider the advantages and disadvantages of the whole process, including whether it solved the problem.', 'Use critical evaluation and analytical skills to evaluate the strategy and identify areas for improvement.', 'Get the views of all the people involved in the process.'],
    },
    {
      id: 'p2x-ps-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Distinguish between decision-making and problem-solving.', marks: 4, a: ['Decisions are usually made by one person; problem-solving usually involves a group/team.', 'Decision-making is the process of choosing from several alternatives; problem-solving is the process of finding a solution to a problem.', 'Decision-making is part of the problem-solving process; problem-solving involves analysing the problem to identify solutions.'] },
        { q: 'Name the EIGHT steps of the problem-solving cycle, in order.', marks: 8, a: ['Identify the problem.', 'Define the problem.', 'Develop an action plan.', 'Choose the best solution/strategy.', 'Allocate the resources.', 'Implement the suggested solution/action plan.', 'Monitor the implementation of the solution/action plan.', 'Evaluate the implemented solution/action plan.'] },
        { q: 'Explain what happens during the "Define the problem" step.', marks: 4, a: ['This step can only happen once the business understands its problem.', 'The business must define the causes of the problem by gathering as much information as possible.', 'A concrete, specific definition is generated to make finding a solution easier.'] },
        { q: 'What should a business do if, during the "Monitor" step, the strategy is found not to be working?', marks: 2, a: 'It should return to step 3 (Develop an action plan) and come up with an alternative strategy.' },
      ],
    },
  ],
},
{
  id: 'bs-p2x-creative-thinking',
  chapterId: 'business-exam-p2-ch11',
  subjectId: 'business' as const,
  title: 'Creative Thinking: Meaning, Benefits & Entrepreneurial Opportunities',
  minutes: 18,
  blocks: [
    { id: 'p2x-ct-h1', type: 'heading' as const, level: 2 as const, text: 'The Meaning of Creative Thinking' },
    {
      id: 'p2x-ct-meaning',
      type: 'list' as const,
      text: [
        'Creative thinking is the ability to think original, varied and innovative ideas.',
        'It focuses on exploring ideas/generating possibilities/looking for many possible solutions.',
        'Thinking in a way that is unconventional and original — producing new ideas and making them real.',
        'Involves the process of generating innovative and imaginative ideas; it is the ability to see something in a new way.',
        'It is also about being able to think of unique ideas or new approaches to solve problems.',
        'Whether a business considers changing a product or creating a new advertisement in an ever-changing world, creative thinking in the workplace can have a positive impact.',
      ],
    },
    { id: 'p2x-ct-adv-h', type: 'heading' as const, level: 3 as const, text: 'The Advantages/Benefits of Creative Thinking in the Workplace' },
    {
      id: 'p2x-ct-adv',
      type: 'list' as const,
      text: [
        'New, innovative, and better ideas and solutions are generated.',
        'Improves the quality of solutions to business problems; complex business problems may be solved.',
        'Products and services can be marketed creatively; creativity is key to staying one step ahead of competitors.',
        'Leads to increased productivity of the entire business.',
        'Leads to more positive attitudes, as managers and employees feel they have contributed towards problem-solving.',
        'Improves motivation amongst staff members, resulting in a happy workforce and reduced voluntary turnover.',
        'Stimulates profitable new ideas for products/marketing campaigns/public relations.',
        'Helps businesses respond to the threat of competition and remain leaders in the field.',
        'Helps management and employees keep up with fast-changing technology.',
        'Leads to the development of better methods of production to save on costs.',
        'New products/services can be designed to meet changing needs of customers.',
      ],
    },
    { id: 'p2x-ct-ent-h1', type: 'heading' as const, level: 2 as const, text: 'Creative Thinking & Entrepreneurial Opportunities' },
    {
      id: 'p2x-ct-ent-intro',
      type: 'list' as const,
      text: [
        'Successful entrepreneurs use creative thinking to come up with new products/services.',
        'They create a new market for their products that never existed before.',
        'Creative thinking can be applied to continuously improve products and stay ahead of competition.',
      ],
    },
    { id: 'p2x-ct-ent-env-h', type: 'heading' as const, level: 3 as const, text: 'Designing Environments That Stimulate Creative Thinking' },
    {
      id: 'p2x-ct-ent-env',
      type: 'list' as const,
      text: [
        'Encourage staff to come up with new ideas and alternative ways of doing things.',
        'Respond enthusiastically to all ideas and never let anyone feel less important.',
        'Make time for brainstorming sessions/regular workshops.',
        'Place suggestion boxes around the workplace and keep communication channels open for new ideas.',
        'Train staff in innovative techniques, creative problem-solving skills, mind-mapping and lateral thinking.',
        'Encourage job swops within the organisation and study how other businesses are doing things.',
        'Regard indigenous knowledge as a valuable resource when solving problems or identifying opportunities.',
      ],
    },
    {
      id: 'p2x-ct-ent-sustain',
      type: 'paragraph' as const,
      text: 'Creative thinking and problem-solving are necessary components of sustainable business practice. A fundamental part of every manager\'s role is finding ways to solve problems: management can come up with creative solutions and can be creative in managing/motivating employees; employees can come up with creative strategies; new products can be designed to meet changing preferences; existing goods/services can be adapted to meet ever-changing needs; goods and services can be marketed creatively; public relations can design and implement creative strategies.',
    },
    {
      id: 'p2x-ct-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Elaborate on the meaning of creative thinking.', marks: 4, a: ['Creative thinking is the ability to think original, varied and innovative ideas.', 'It focuses on exploring ideas/generating possibilities/looking for many possible solutions.', 'It involves thinking in a way that is unconventional and original — producing new ideas and making them real.'] },
        { q: 'Outline FOUR advantages/benefits of creative thinking in the workplace.', marks: 4, a: ['New, innovative, and better ideas and solutions are generated.', 'It improves the quality of solutions to business problems.', 'It leads to increased productivity.', 'It improves motivation amongst staff members (any 4).'] },
        { q: 'Explain how businesses use creative thinking to generate entrepreneurial opportunities.', marks: 6, a: ['Successful entrepreneurs use creative thinking to create new products/services and markets that never existed before.', 'Creative thinking is applied to continuously improve products and stay ahead of competition.', 'Businesses design environments that stimulate creative thinking, e.g. brainstorming sessions, suggestion boxes, and training staff in creative problem-solving techniques.'] },
      ],
    },
  ],
},
{
  id: 'bs-p2x-techniques',
  chapterId: 'business-exam-p2-ch11',
  subjectId: 'business' as const,
  title: 'Techniques: Force-Field Analysis, Delphi, Nominal Group & Brainstorming',
  minutes: 24,
  blocks: [
    {
      id: 'p2x-tc-intro',
      type: 'paragraph' as const,
      text: 'The four problem-solving techniques are: Force Field Analysis, Delphi Technique, Nominal Group Technique, and Brainstorming. Be ready to apply each technique to a given business scenario.',
    },
    { id: 'p2x-tc-ffa-h1', type: 'heading' as const, level: 2 as const, text: 'Force Field Analysis' },
    {
      id: 'p2x-tc-ffa-meaning',
      type: 'list' as const,
      text: [
        'A technique used to determine the forces that are for and against a decision, aimed at facilitating change in the business.',
        'People are often resistant to change and will act against change taking place.',
        'Management is a force acting FOR change, while employees are often a force acting AGAINST change.',
      ],
    },
    { id: 'p2x-tc-ffa-app-h', type: 'heading' as const, level: 3 as const, text: 'Application' },
    {
      id: 'p2x-tc-ffa-app',
      type: 'list' as const,
      text: [
        'Describe the current situation and the desired situation; write a plan/proposal for change in the middle.',
        'List all forces driving (positive) and resisting (negative) change in columns.',
        'Allocate a score for each, from 1 (weak) to 5 (strong).',
        'Weigh up the positives and negatives, then decide if the project is viable.',
        'If not viable, check which resisting forces can be influenced/mitigated/avoided to make change possible.',
        'Find ways to increase the forces for change and diminish the forces against it; develop a strategy accordingly.',
        'Identify priorities and develop an action plan.',
        'Change should be communicated effectively to employees, explaining reasons and benefits, and dealing with all questions.',
      ],
    },
    { id: 'p2x-tc-delphi-h1', type: 'heading' as const, level: 2 as const, text: 'Delphi Technique' },
    {
      id: 'p2x-tc-delphi-meaning',
      type: 'list' as const,
      text: [
        'Used when trying to solve a big problem for which there seem to be no previous examples.',
        'A method that relies on a panel of experts to find solutions to a problem.',
        'Experts are intentionally kept apart so their responses are not influenced by other experts.',
        'Uses a series of questionnaires to obtain and summarise feedback, bringing about agreement from different views.',
      ],
    },
    { id: 'p2x-tc-delphi-app-h', type: 'heading' as const, level: 3 as const, text: 'Application' },
    {
      id: 'p2x-tc-delphi-app',
      type: 'list' as const,
      text: [
        'A panel of experts is invited to participate and is contacted individually.',
        'A questionnaire is designed and distributed; the panel individually responds and suggests solutions.',
        'Responses are summarised in a feedback report, and a second questionnaire related to the feedback is sent out.',
        'Panel members provide further input after studying the results; they complete the second questionnaire.',
        'A third questionnaire is distributed based on the second round\'s feedback.',
        'A final summary/feedback report is prepared and consensus is reached on the best solution.',
      ],
    },
    { id: 'p2x-tc-ngt-h1', type: 'heading' as const, level: 2 as const, text: 'Nominal Group Technique' },
    {
      id: 'p2x-tc-ngt-meaning',
      type: 'list' as const,
      text: [
        'Used to avoid the disadvantages of group discussions.',
        'Each employee silently brainstorms and generates ideas on their own, writing them down.',
        'A voting process is added to rank the ideas generated; everyone participates in silence.',
      ],
    },
    { id: 'p2x-tc-ngt-app-h', type: 'heading' as const, level: 3 as const, text: 'Application' },
    {
      id: 'p2x-tc-ngt-app',
      type: 'list' as const,
      text: [
        'The group is divided into smaller groups of 5 or 6 around a table; the problem is defined clearly.',
        'Each person silently brainstorms as many ideas as possible and writes them down.',
        'One by one, each person gives one solution/idea with a short explanation, written on a big sheet of paper.',
        'This continues until all possible solutions are recorded; no criticism is allowed, only clarifying questions.',
        'Duplicate ideas are eliminated; individuals anonymously rank suggestions from 1 upwards.',
        'Ratings are collected and calculated; results are shared with the group in order of points.',
        'Each group presents the solution deemed best according to the votes.',
      ],
    },
    { id: 'p2x-tc-brain-h1', type: 'heading' as const, level: 2 as const, text: 'Brainstorming' },
    {
      id: 'p2x-tc-brain-meaning',
      type: 'list' as const,
      text: [
        'A group activity to find a solution for a specific problem by gathering a list of ideas spontaneously.',
        'A method for inspiring creative problem solving by encouraging group members to come up with thoughts and ideas.',
        'Businesses use it when they want to involve employees/the team in decision-making.',
        'Needs to be managed by a facilitator to ensure the best result is achieved.',
      ],
    },
    { id: 'p2x-tc-brain-app-h', type: 'heading' as const, level: 3 as const, text: 'Application' },
    {
      id: 'p2x-tc-brain-app',
      type: 'list' as const,
      text: [
        'The problem must be defined clearly; people suggest ideas and solutions at random.',
        'All ideas are written on a flip chart; the facilitator encourages everyone to participate, with no criticism.',
        'When time is up/no more ideas, the sheets are hung around the room; similar ideas are grouped using coloured pens.',
        'The group evaluates and rates the ideas according to how successful each is likely to be.',
        'A plan of action is discussed to put the best ideas into practice.',
      ],
    },
    {
      id: 'p2x-tc-tip',
      type: 'callout' as const,
      text: 'Exam Tip: You may be given a scenario and asked to IDENTIFY which technique is being used. Clues: Force Field Analysis = "forces for/against change, scored 1-5". Delphi = "panel of experts, kept apart, series of questionnaires". Nominal Group = "silent individual writing, one-by-one sharing, anonymous ranking". Brainstorming = "random ideas shouted out, written on a flip chart, grouped by a facilitator".',
    },
    {
      id: 'p2x-tc-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Explain Force Field Analysis and discuss how it is applied.', marks: 9, a: ['It is a technique to determine the forces for and against a decision, aimed at facilitating change — management favours change, employees often resist it.', 'The business describes the current and desired situation, lists driving and resisting forces in columns, and scores each from 1 (weak) to 5 (strong).', 'The positives and negatives are weighed to decide viability; a strategy is developed to reduce resisting forces, with priorities and an action plan.'] },
        { q: 'Explain why the Delphi technique is useful when there is no previous example of a problem, and outline how it is applied.', marks: 10, a: ['It relies on a panel of experts kept apart so responses are not influenced by each other, making it suited to large, unprecedented problems.', 'A panel is invited and contacted individually; a questionnaire is distributed and responses summarised in a feedback report.', 'A second, then third, questionnaire is sent based on prior feedback, until a final report and consensus on the best solution is reached.'] },
        { q: 'Identify the technique: "The manager divided the group into teams of six, asked each person to silently write down their own ideas, then had each person share one idea at a time until all ideas were recorded on a chart. Members then anonymously ranked the ideas."', marks: 2, a: 'This is the Nominal Group Technique — identifiable by the silent individual brainstorming, round-by-round sharing of one idea at a time, and anonymous ranking/voting.' },
        { q: 'Define "brainstorming" and discuss how it is applied, including the role of the facilitator.', marks: 8, a: ['Brainstorming is a group activity to find a solution to a specific problem by gathering a list of ideas spontaneously.', 'The problem is defined clearly; people suggest ideas at random, which are written on a flip chart.', 'The facilitator ensures everyone participates and no one criticises suggestions; similar ideas are later grouped and rated, and a plan of action is discussed.'] },
      ],
    },
  ],
}
  ],
};
