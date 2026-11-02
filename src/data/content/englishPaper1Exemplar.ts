import type { Chapter } from '../../lib/types';

/**
 * English Home Language, Grade 10 CAPS — November 2026 Exemplar, Paper 1.
 * Comprehension (30), Summary (10), Language structures and conventions (30). TOTAL: 70, 2 hours.
 * Paper 1 only: no essay/creative writing (that is Paper 3, out of scope here).
 *
 * Source: 9 photographed exemplar pages. The paper itself carried only a
 * handful of handwritten answers in Question 1 (1.1 and 1.2, partially).
 * Every other model answer in this chapter — the rest of Section A, all of
 * Section B, and all of Section C — was composed for this file from the
 * passages and questions as printed, since the source pages were otherwise
 * blank/unanswered. This is noted again in the callout below.
 */

const CH = 'eng-paper1-exemplar';

const TEXT_A = `WHY HAVEN'T YOU REPLIED YET?

1. There was once a perfectly reasonable explanation for not replying to someone: you had not seen the message. Today, that explanation is harder to use. Your phone is probably nearby. The message has been delivered. Two blue ticks confirm that you have read it. You were "online" three minutes ago. So why haven't you replied?

2. Digital communication has created a strange expectation: being reachable is increasingly confused with being available. Smartphones allow us to contact one another almost instantly, but the ability to communicate instantly seems to have created the expectation that we should respond instantly too.

3. Messaging apps provide plenty of clues about what other people are doing. Read receipts reveal that a message has been opened. "Last seen" shows when somebody was active. Typing indicators announce that a response may be coming. Some platforms even encourage users to maintain daily "streaks". Individually, these features may seem harmless. Together, however, they can make an ordinary conversation feel surprisingly demanding.

4. Imagine sending a friend a message at 7:15 p.m. A minute later, the ticks turn blue. Ten minutes pass without a response, yet you notice that your friend is online again. Suddenly, questions appear: Did I say something wrong? Are they annoyed with me? Why are they ignoring me? Nothing has actually happened, but the silence begins to feel like a message of its own.

5. The pressure works both ways. The person who has not replied may also become anxious. Perhaps the message was opened while studying. Perhaps the person was tired, busy or simply did not feel like having a conversation. Strangely, "I didn't feel like talking" has become a reason that many people feel guilty about giving.

6. We behave differently in the physical world. You probably would not arrive at a friend's house late at night, knock repeatedly on the door and demand to know why your friend does not want to talk. Yet sending "Hello?", "???" and "I can see you're online" within a few minutes can become the digital equivalent.

7. Of course, this does not mean that ignoring people is acceptable. Communication matters in friendships. Consistently refusing to answer someone, disappearing during an important conversation or ignoring an urgent message can be inconsiderate. Setting boundaries should not become an excuse for treating others badly.

8. The difficulty is finding a reasonable balance. A person may open an app to check a school announcement, answer a parent or quickly look at a message. Being online does not necessarily mean being ready for a conversation. The little green dot beside someone's name tells us that a device is connected; it tells us very little about the person behind the screen.

9. Healthy digital communication therefore requires something technology cannot provide: perspective. Instead of assuming that a delayed response means rejection, we can give people reasonable time to answer. We can also communicate our own boundaries. A simple "I'm studying; I'll reply later" may prevent an unnecessary argument.

10. Perhaps we need to rethink what availability means. Owning a smartphone does not mean surrendering every quiet moment to everyone who can contact us. Friendship requires connection, but connection should not mean permanent access. After all, we are people, not customer-service departments operating twenty-four hours a day.

So, the next time those blue ticks appear without a reply, resist the temptation to send five question marks. Instant messaging gives us the ability to reach someone immediately. It does not give us the right to demand their immediate attention.

Adapted for examination purposes`;

const TEXT_B = `TEXT B (cartoon — a phone chat screen)

A chat labelled "Bestie", shown as online. The message thread reads:
Hey (19:01, read)
You there? (19:02, read)
??? (19:04, read)
I can see you're online! (19:05, read)
Why are you ignoring me??? (19:06, read)

A speech bubble beside the phone says: "I opened the app to send my mom ONE message!"`;

const TEXT_C = `HOW TO STOP YOUR PHONE FROM OWNING YOUR TIME

Our phones help us communicate, organise our lives and stay informed, but they can also demand more attention than we realise. A quick glance at one message can easily become several minutes of replying, scrolling and checking notifications. Fortunately, simple habits can help us control our availability without cutting ourselves off from others.

Begin by disabling unnecessary notifications. Your concentration does not need to be interrupted whenever someone likes a photograph, posts in a group chat or sends a meme. Keep alerts for genuinely important communication and check everything else later.

Instead of responding whenever a message arrives, decide when you will check your phone. During homework, complete a section or task before looking at messages. This allows you to concentrate without constantly switching between schoolwork and conversations.

Features such as Do Not Disturb and Focus Mode can also protect your time. Activate them while studying, sleeping or spending time with family. Silencing notifications temporarily allows you to decide where your attention belongs.

Remember that reading a message does not require an immediate response. Some messages need thought, while others arrive at inconvenient times. Reply when you have the time and energy to communicate properly.

It also helps to tell friends when you are unavailable. If people know that you usually study during certain hours, they are less likely to interpret a delayed response as anger or rejection.

Create a cut-off time for your phone at night. Leaving it away from your bed can prevent late-night messages and endless scrolling from interfering with valuable sleep.

Finally, extend the same courtesy to others. Avoid repeatedly messaging someone who has not answered. Respect their time and accept that being online does not automatically mean that a person is available to talk.

[Adapted for examination purposes.]`;

const TEXT_F = `THE GROUP CHAT

1. Class group chats can be extremely useful. Learners use them to share reminders, discuss homework and ask questions. However they can also become chaotic very quickly.

2. One learner asks, "What pages must we study"? Within minutes, thirty messages appear, but only three of them has anything to do with the question. The rest are memes, voice notes and completely unrelated conversations.

3. Group chats are most useful when everyone communicates clear and respects other peoples time. Before sending another message at midnight, perhaps ask yourself: Does everyone really need to know this right now?

Adapted for examination purposes.`;

export const ENGLISH_PAPER1_EXEMPLAR: Chapter = {
  id: CH,
  subjectId: 'english',
  title: 'Paper 1 Exemplar: Comprehension, Summary & Language (Grade 10)',
  summary: 'Grade 10 CAPS November Exemplar, Paper 1 (70 marks, 2 hours) — Section A Comprehension, Section B Summary, Section C Language Structures and Conventions, with full model answers.',
  category: 'Past Papers',
  lessons: [
    // ── Lesson 1: Section A — Comprehension ─────────────────────────────
    {
      id: 'eng-p1-section-a',
      chapterId: CH,
      subjectId: 'english',
      title: 'Section A: Comprehension (30 marks)',
      minutes: 40,
      blocks: [
        {
          id: 'p1-a-callout',
          type: 'callout',
          text: 'This is the Grade 10 CAPS English Home Language November 2026 Exemplar, Paper 1 — Comprehension, Summary and Language Structures and Conventions (no essay/creative writing section; that belongs to Paper 3). TOTAL: 70 marks, TIME: 2 hours. The source pages had handwritten answers only for Questions 1.1 and part of 1.2 — these are marked below as "From the paper". Every other model answer in this chapter (the rest of Section A, all of Section B, and all of Section C) was composed for this file, since those pages were otherwise unanswered.',
        },
        { id: 'p1-a-h1', type: 'heading', level: 2, text: 'Question 1: Reading for Meaning and Understanding' },
        { id: 'p1-a-instr', type: 'paragraph', text: 'Read TEXTS A and B below and answer the questions set.' },
        { id: 'p1-a-texta-h', type: 'heading', level: 3, text: 'TEXT A' },
        { id: 'p1-a-texta', type: 'quote', text: TEXT_A },
        { id: 'p1-a-textb-h', type: 'heading', level: 3, text: 'TEXT B' },
        { id: 'p1-a-textb', type: 'quote', text: TEXT_B },
        { id: 'p1-a-qh', type: 'heading', level: 2, text: 'Questions: Text A' },
        {
          id: 'p1-a-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1',
              context: 'Refer to paragraph 1.',
              q: 'What evidence does the writer give to show that a person has seen a message? State TWO details.',
              marks: 2,
              a: ['(From the paper) Two blue ticks', '(From the paper) [The person was shown as] online [three minutes ago]'],
            },
            {
              n: '1.2',
              context: 'Refer to paragraph 2.',
              q: 'Explain the difference between being "reachable" and being "available" in the context of the article.',
              marks: 2,
              a: 'Being "reachable" means a person can be contacted or sent a message because a device or medium is available to receive it; being "available" means the person themselves is actually ready and willing to communicate at that moment. The article argues that people often confuse the two: a phone being reachable does not mean the person behind it is available for a conversation.',
            },
            {
              n: '1.3',
              context: 'Refer to paragraph 3.',
              q: 'Why does the writer place the word "streaks" in inverted commas?',
              marks: 1,
              a: 'Because "streaks" is being used as a specific, informal platform term (referring to a feature that rewards daily consecutive messaging) rather than in its ordinary dictionary sense, and the inverted commas distance the writer slightly from the term, hinting at mild criticism of the feature.',
            },
            {
              n: '1.4',
              context: 'Refer to paragraph 3.',
              q: 'Explain what the writer means when stating that messaging features can make an ordinary conversation feel "surprisingly demanding".',
              marks: 2,
              a: 'The writer means that features such as read receipts, "last seen", typing indicators and streaks each seem minor on their own, but together they create constant pressure to monitor and respond to messages, turning what should be a relaxed, everyday conversation into something that feels urgent and stressful to keep up with.',
            },
            {
              n: '1.5',
              context: 'Refer to paragraph 4.',
              q: 'What does the series of questions in italics reveal about the sender\'s state of mind?',
              marks: 2,
              a: 'The repeated questions ("Did I say something wrong? Are they annoyed with me? Why are they ignoring me?") reveal that the sender is anxious, insecure and quick to assume the worst, even though nothing has actually happened — they are reading rejection or conflict into a simple, unexplained delay.',
            },
            {
              n: '1.6',
              context: 'Refer to paragraph 4.',
              q: 'Explain the meaning of the statement: "the silence begins to feel like a message of its own."',
              marks: 2,
              a: 'This means that even though the other person has said nothing, the sender starts to interpret that silence as though it were a deliberate message — for example, a sign of anger, rejection or disinterest — rather than simply the absence of a reply.',
            },
            {
              n: '1.7',
              context: 'Refer to paragraph 5.',
              q: 'Why might someone feel guilty about saying, "I didn\'t feel like talking"?',
              marks: 2,
              a: 'Because modern digital culture creates an expectation of constant availability, so admitting to simply not wanting to talk can feel like an unacceptable or selfish excuse, even though it is a normal and reasonable human need, making people feel they must justify their silence rather than simply exercising a boundary.',
            },
            {
              n: '1.8',
              context: 'Refer to paragraph 6.',
              q: 'Explain how the writer\'s comparison between knocking repeatedly on a friend\'s door and repeatedly messaging someone strengthens the argument.',
              marks: 3,
              a: 'The comparison takes behaviour that would clearly be seen as rude, intrusive and unreasonable in the physical world (arriving uninvited at night and demanding entry) and shows that sending repeated messages such as "Hello?", "???" and "I can see you\'re online" is the digital equivalent of that same behaviour. Because readers would instantly recognise the door-knocking scenario as inconsiderate, the comparison makes the online behaviour, which can otherwise feel normal, seem equally unreasonable, strengthening the writer\'s argument that constant digital pressure is a real intrusion.',
            },
            {
              n: '1.9',
              context: 'Refer to paragraph 7.',
              q: 'Why does the writer acknowledge that ignoring messages can sometimes be inconsiderate?',
              marks: 2,
              a: 'The writer acknowledges this to present a balanced argument rather than suggesting that people may ignore others without consequence. By admitting that consistently refusing to answer, disappearing during an important conversation or ignoring something urgent can genuinely hurt relationships, the writer shows that setting boundaries is not a blanket excuse for being inconsiderate.',
            },
            {
              n: '1.10',
              context: 'Refer to paragraph 8.',
              q: 'Explain the significance of the distinction the writer makes between "a device" and "the person behind the screen".',
              marks: 3,
              a: 'This distinction is significant because it is the core idea of the whole passage: indicators like the green "online" dot only show that a phone or device is connected to the internet, not that the actual person using it is free, willing or emotionally ready to engage in conversation. By separating the device from the person, the writer undermines the assumption that being technically online is the same as being available, which justifies the writer\'s argument that people should stop treating online status as proof of availability.',
            },
            {
              n: '1.11',
              context: 'Refer to paragraphs 9–10.',
              q: 'Critically discuss whether the writer presents a balanced view of expectations surrounding replies to messages. Support your answer with evidence from the text.',
              marks: 3,
              a: 'Yes, the writer presents a balanced view. Rather than arguing only that people are entitled to ignore messages, the writer offers practical, two-sided solutions: senders should "give people reasonable time to answer" instead of assuming rejection, while receivers should "communicate our own boundaries" (for example, "I\'m studying; I\'ll reply later"). The writer also balances the argument earlier, in paragraph 7, by conceding that ignoring people can be "inconsiderate". This shows the writer is not simply excusing non-response but is asking both senders and receivers to adjust their expectations and behaviour, which demonstrates a fair, two-sided treatment of the issue.',
            },
          ],
        },
        { id: 'p1-a-qh-b', type: 'heading', level: 2, text: 'Questions: Text B' },
        {
          id: 'p1-a-qa-b',
          type: 'questions',
          qa: [
            {
              n: '1.12',
              q: 'Identify ONE visual detail that shows that the girl is busy with schoolwork.',
              marks: 1,
              a: 'The speech bubble shows her saying she opened the app only to send her mom "ONE message" (implying she is occupied with something else, such as studying/homework, and only glanced at her phone briefly) — this is the one visual/textual detail available on the cartoon that signals she has something else demanding her attention.',
            },
            {
              n: '1.13',
              q: 'What does the girl\'s facial expression suggest about how she feels about the messages she is receiving?',
              marks: 1,
              a: 'Her expression (and the exclamation in her speech bubble) suggests she feels exasperated, overwhelmed or frustrated — she is being bombarded with messages for a situation that, from her side, is minor and unfair, since she only intended to send one quick message.',
            },
            {
              n: '1.14',
              q: 'Explain how the increasing urgency of the friend\'s messages contributes to the humour of the cartoon.',
              marks: 2,
              a: 'The messages escalate rapidly and comically from a casual "Hey" to an accusing "Why are you ignoring me???" within only five minutes, which is an exaggerated, over-the-top reaction to a very short delay. The humour comes from the gap between how serious and dramatic the friend\'s messages sound and how trivial and ordinary the real reason for the "ignoring" actually is (the girl simply opened the app to send her mom one message), which many readers will recognise from their own experience.',
            },
          ],
        },
        { id: 'p1-a-qh-ab', type: 'heading', level: 2, text: 'Questions: Text A and Text B' },
        {
          id: 'p1-a-qa-ab',
          type: 'questions',
          qa: [
            {
              n: '1.15',
              q: 'Does TEXT B effectively reinforce the writer\'s argument in TEXT A that being online does not necessarily mean being available? Discuss your view by referring to BOTH texts.',
              marks: 2,
              a: 'Yes, TEXT B effectively reinforces TEXT A\'s argument. TEXT A states that "being online does not necessarily mean being ready for a conversation" and that the green dot "tells us very little about the person behind the screen". TEXT B illustrates this exact idea humorously: the girl appears "online" to her friend, which triggers an escalating string of anxious, accusing messages, yet in reality she had simply opened the app briefly to message her mother and was never available for a full conversation. The cartoon turns the article\'s abstract argument into a relatable, concrete example of the same misunderstanding.',
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Section B — Summary ───────────────────────────────────
    {
      id: 'eng-p1-section-b',
      chapterId: CH,
      subjectId: 'english',
      title: 'Section B: Summary (10 marks)',
      minutes: 20,
      blocks: [
        { id: 'p1-b-h1', type: 'heading', level: 2, text: 'Question 2: Summary in Your Own Words' },
        {
          id: 'p1-b-instr',
          type: 'callout',
          text: 'Read TEXT C below and summarise SEVEN ways to create healthier boundaries with your phone and messages.\n\nInstructions: your summary must include SEVEN points; must be written in your own words; must be written as a fluent paragraph; must NOT exceed 90 words; you are not required to provide a title; indicate your word count at the end of your summary.',
        },
        { id: 'p1-b-textc-h', type: 'heading', level: 3, text: 'TEXT C' },
        { id: 'p1-b-textc', type: 'quote', text: TEXT_C },
        {
          id: 'p1-b-qa',
          type: 'questions',
          qa: [
            {
              q: 'Summarise SEVEN ways to create healthier boundaries with your phone and messages, in your own words, as a single fluent paragraph not exceeding 90 words.',
              marks: 10,
              a: 'Turn off unnecessary notifications and keep alerts only for important messages. Finish a task before checking your phone instead of replying immediately. Use Do Not Disturb or Focus Mode when studying, sleeping or with family. Remember a message does not need an instant response; reply once you have time. Tell friends when you are usually unavailable, so delays are not misread as anger. Keep your phone away from your bed at night to protect sleep. Finally, do not repeatedly message someone who has not replied, and accept that being online does not mean being available. (89 words)',
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Section C — Language Structures and Conventions ───────
    {
      id: 'eng-p1-section-c',
      chapterId: CH,
      subjectId: 'english',
      title: 'Section C: Language Structures and Conventions (30 marks)',
      minutes: 35,
      blocks: [
        { id: 'p1-c-h1', type: 'heading', level: 2, text: 'Question 3: Analysing Advertising (Text D)' },
        { id: 'p1-c-instr3', type: 'paragraph', text: 'Study the advertisement (TEXT D) below and answer the set questions.' },
        {
          id: 'p1-c-textd',
          type: 'callout',
          text: 'TEXT D (advertisement): A fast-food ad for "BITE". Headline: "YOUR WALLET CALLED. IT WANTS SOME CHANGE BACK." with a cartoon wallet character and the tagline "THINK SMARTER. SPEND HAPPIER." Shows a burger, chips and a cold drink, labelled "THE AFTER-SCHOOL BOX: Burger + Chips + Drink — R49.90 — BIG HUNGER. SMALL BUDGET." Icons read "Great food / Good times / Happier days". Brand name "BITE", slogan "Grab it. Bite it. Love it." and "REAL FOOD FOR REAL LIFE."',
        },
        {
          id: 'p1-c-qa3',
          type: 'questions',
          qa: [
            {
              n: '3.1',
              q: 'Identify the target market of this advertisement. Give ONE reason for your answer.',
              marks: 2,
              a: 'The target market is school learners/teenagers (and budget-conscious young people). This is shown by the product being named "The After-School Box", which is explicitly aimed at learners buying food after school, and by the low, pocket-money-friendly price of R49.90 emphasised by "BIG HUNGER. SMALL BUDGET."',
            },
            {
              n: '3.2',
              q: 'Explain the use of personification in the headline: "YOUR WALLET CALLED. IT WANTS SOME CHANGE BACK."',
              marks: 2,
              a: 'The wallet, an inanimate object, is given the human ability to "call" and to "want" something, as though it were a person phoning to complain. This personification humorously suggests that the product is so affordable that even the customer\'s own wallet is asking for its unspent money (its "change") back, emphasising the advert\'s central message of low cost and good value.',
            },
            {
              n: '3.3',
              q: 'Discuss how the visual presentation of the food contributes to the effectiveness of the advertisement.',
              marks: 2,
              a: 'The burger, chips and cold drink are shown as large, detailed, close-up images that dominate the advertisement, making the food look appetising, generous in portion and immediately desirable. This visual emphasis draws the eye straight to the product before the viewer even reads the text, and makes the low price feel like exceptional value for a satisfying meal, strengthening the advert\'s persuasive appeal to a hungry, budget-conscious target market.',
            },
            {
              n: '3.4',
              q: 'Explain how the contrast in "BIG HUNGER. SMALL BUDGET." is used to persuade the target market.',
              marks: 2,
              a: 'The slogan contrasts two opposites, "big" and "small", to show that a large problem (hunger) can be solved despite a limiting factor (a small budget). This reassures cost-conscious learners that they do not need to spend a lot of money to be satisfied, directly addressing their main concern (affordability) while still promising a filling, generous meal.',
            },
            {
              n: '3.5',
              q: 'In your opinion, is the slogan "Grab it. Bite it. Love it." effective in promoting BITEBOX? Justify your response.',
              marks: 2,
              a: 'Yes, the slogan is effective. It uses a short, punchy tricolon of imperative verbs ("Grab", "Bite", "Love") that mirrors the natural sequence of eating, making it memorable and easy to recall. The repetition of short, rhythmic phrases also creates a catchy, almost jingle-like effect, and the brand name "BITE" is reinforced within the slogan itself, which strengthens brand recognition.',
            },
          ],
        },

        { id: 'p1-c-h2', type: 'heading', level: 2, text: 'Question 4: Understanding Other Aspects of the Media (Text E)' },
        { id: 'p1-c-instr4', type: 'paragraph', text: 'Study the cartoon (TEXT E) below and answer the set questions.' },
        {
          id: 'p1-c-texte',
          type: 'callout',
          text: 'TEXT E (cartoon, "The Group Project" — "SAME DEADLINE. DIFFERENT EFFORT."): Frame 1 — two learners have worked for two hours on a project; a third learner has a near-empty desk and says "We\'ve been working on this project for two hours. What have you done?" Frame 2 — Learner 3 leans back, phone/AI app open, saying "Relax. I\'ve got AI." Frame 3 — the AI app shows an error message ("ERROR. Please try again later"); Learner 3 looks shocked: "Wait... WHAT?" Frame 4 — Learner 2 says "Looks like you\'ll have to use your own intelligence," to which Learner 3 asks "Is there an app for that?" Caption: "GOOD IDEAS COME FROM MINDS, NOT APPS."',
        },
        {
          id: 'p1-c-qa4',
          type: 'questions',
          qa: [
            {
              n: '4.1',
              q: 'Refer to frame 1 and identify ONE visual detail which suggests that Learner 3 has contributed very little to the project.',
              marks: 1,
              a: 'Learner 3\'s desk/workspace is shown empty or far less covered in notes and books than those of the other two learners, who are surrounded by papers and visibly working, visually signalling that Learner 3 has not been doing any of the project work.',
            },
            {
              n: '4.2',
              q: 'What does Learner 3\'s use of the word "Relax" in Frame 2 suggest about his attitude towards the project?',
              marks: 2,
              a: 'The word "Relax" suggests that Learner 3 is dismissive, overconfident and unconcerned about the group\'s workload, treating his group members\' worry as unnecessary because he believes AI will do the work for him instead of contributing his own effort.',
            },
            {
              n: '4.3',
              q: 'Account for the change in Learner 3\'s facial expression and body language from Frame 2 to Frame 3.',
              marks: 2,
              a: 'In Frame 2 he is relaxed and smug, confident that the AI app will solve the problem for him. In Frame 3, after the app returns an error, his expression and posture shift to shock and panic, because the one thing he was relying on to avoid doing any work has failed him, leaving him with no contribution to the project after all.',
            },
            {
              n: '4.4',
              q: 'Refer to frame 4 and explain the humour in Learner 2\'s statement: "Looks like you\'ll have to use your own intelligence."',
              marks: 2,
              a: 'The humour lies in the pun on "AI" (Artificial Intelligence) versus "your own intelligence" (natural, human intelligence) — Learner 2 points out, with light sarcasm, that now that the artificial shortcut has failed, Learner 3 will actually have to think and work for himself, which is ironic given how confidently he dismissed that need earlier.',
            },
            {
              n: '4.5',
              q: 'Explain why Learner 3\'s final question, "Is there an app for that?", is ironic.',
              marks: 2,
              a: 'It is ironic because Learner 3 has just been told, directly, that he needs to use his own intelligence instead of relying on technology, yet his immediate response is to look for another app to solve the problem for him — he completely misses the lesson of the moment and repeats the very behaviour that caused his problem in the first place.',
            },
            {
              n: '4.6',
              q: 'What message does the cartoonist convey about learners\' dependence on technology?',
              marks: 1,
              a: 'The cartoonist suggests that over-reliance on technology such as AI can replace genuine effort, critical thinking and creativity, and warns that real, reliable ideas and problem-solving come from human minds, not from apps, as stated directly in the caption "GOOD IDEAS COME FROM MINDS, NOT APPS."',
            },
          ],
        },

        { id: 'p1-c-h3', type: 'heading', level: 2, text: 'Question 5: Using Language Correctly (Text F)' },
        { id: 'p1-c-instr5', type: 'paragraph', text: 'Read TEXT F, which contains some deliberate errors, and answer the set questions.' },
        { id: 'p1-c-textf-h', type: 'heading', level: 3, text: 'TEXT F' },
        { id: 'p1-c-textf', type: 'quote', text: TEXT_F },
        {
          id: 'p1-c-qa5',
          type: 'questions',
          qa: [
            {
              n: '5.1',
              context: 'Refer to Paragraph 1.',
              q: 'Rewrite the third sentence, inserting the missing punctuation mark.',
              marks: 1,
              a: '"However, they can also become chaotic very quickly." (A comma is needed after the introductory discourse marker "However".)',
            },
            {
              n: '5.2',
              q: 'Correct the punctuation error in the direct speech in Paragraph 2.',
              marks: 1,
              a: 'The question mark belongs inside the closing quotation mark, not after it: "What pages must we study?" (not "What pages must we study"?).',
            },
            {
              n: '5.3',
              q: 'Identify and correct the concord error in Paragraph 2.',
              marks: 1,
              a: 'Error: "only three of them has anything to do with the question." Correction: "only three of them HAVE anything to do with the question" (the subject "three" is plural, so it needs a plural verb).',
            },
            {
              n: '5.4',
              q: 'Give the singular form of "memes".',
              marks: 1,
              a: '"Meme".',
            },
            {
              n: '5.5',
              q: 'Give an antonym for "useful" as it is used in Paragraph 3.',
              marks: 1,
              a: '"Useless" (or "unhelpful"/"pointless").',
            },
            {
              n: '5.6',
              q: 'Correct the incorrect form of the word "clear" in Paragraph 3.',
              marks: 2,
              a: '"Everyone communicates clear" should be "everyone communicates CLEARLY" — "clear" is an adjective, but a verb ("communicates") must be modified by an adverb, so the "-ly" adverb form is required.',
            },
            {
              n: '5.7',
              q: 'Rewrite "other peoples time" correctly by inserting the missing apostrophe.',
              marks: 1,
              a: '"Other people\'s time" (possessive apostrophe before the "s", since "people" is already plural and the time belongs to those people).',
            },
            {
              n: '5.8',
              q: 'Identify the part of speech of "midnight" in Paragraph 3.',
              marks: 1,
              a: 'Noun (a common noun naming a specific point in time).',
            },
            {
              n: '5.9',
              q: 'Rewrite the following sentence in the passive voice: "Learners use them to share reminders."',
              marks: 1,
              a: '"They are used by learners to share reminders."',
            },
            {
              n: '5.10',
              q: 'Explain the effect of the rhetorical question at the end of the text.',
              marks: 1,
              a: 'The rhetorical question ("Does everyone really need to know this right now?") is not meant to be answered aloud; it encourages the reader to pause and reflect on their own messaging habits before sending a late-night message, making the writer\'s point about consideration and self-restraint more persuasive and personal than a direct instruction would.',
            },
          ],
        },
      ],
    },
  ],
};
