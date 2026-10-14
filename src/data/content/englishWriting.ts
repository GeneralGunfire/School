import type { Chapter } from '../../lib/types';
import { h2, h3, p, ul, box, table, qa, lessonIn, type WB } from './writeKit';

/**
 * English Home Language, Grade 10, Paper 3: Writing.
 * Section A is one essay (50 marks); Section B is two transactional texts (25 marks each).
 * The marking split and word counts below follow the usual CAPS Grade 10 pattern; where a school
 * sets something different, the teacher's instruction wins. All model texts are original.
 */

const CH = 'eng-writing';
const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>) =>
  lessonIn('english', CH, id, title, minutes, blocks);

const ESSAY_NOTE = 'Length: about 400–450 words for the Grade 10 essay. The plan comes first in the exam booklet and is marked, so always write one.';

/* ── 1. How Paper 3 works ─────────────────────────────────────────────── */

const OVERVIEW = L('eng-w-overview', 'Paper 3 Overview and How You Are Marked', 15, [
  h2('What Paper 3 looks like'),
  p('Paper 3 (Writing) is a two-hour paper of 100 marks. In Section A you write ONE essay chosen from several topics. In Section B you write TWO transactional texts, each from a different question. Time yourself: roughly 55–60 minutes on the essay and 25–30 minutes on each transactional text, including planning and editing.'),
  table([
    ['Section A: Essay', 'One topic from a choice of narrative, descriptive, reflective, argumentative or discursive questions. About 400–450 words.'],
    ['Section B: Transactional texts', 'Two texts, such as a formal letter, informal letter, letter to the press, email, report, speech, review, newspaper article, obituary or diary entry. Roughly 120–150 words each. The format is part of the marks.'],
    ['Planning', 'A plan (mind map, flow chart, bullet list) must appear BEFORE each piece of writing. No plan, lost marks.'],
    ['Editing', 'Leave five minutes at the end to proofread: spelling, punctuation, tenses, paragraphs and word count.'],
  ]),
  h2('How an essay is marked'),
  p('Markers use a rubric with three strands. The split below is the typical CAPS pattern for a 50-mark essay.'),
  table([
    ['Content and planning (about 30)', 'Does the essay answer THIS topic? Are the ideas original, well developed and convincing? Is the plan sensible and does the essay follow it?'],
    ['Language, style and editing (about 15)', 'Vocabulary, sentence variety, figurative language, correct grammar, spelling and punctuation, tone suited to the topic.'],
    ['Structure (about 5)', 'A clear introduction, logically ordered paragraphs, a strong conclusion, and linking words that connect ideas.'],
  ]),
  h2('Choosing your topic'),
  ul([
    'Read every topic twice. The topic wording tells you the TYPE: “Describe…” is descriptive, “Write about the day when…” is narrative, “Reflect on…” is reflective, “Do you agree…” is argumentative.',
    'Pick the topic you have the most REAL detail for: places you know, feelings you remember, things you have an opinion about.',
    'Stay on topic. A beautifully written essay on the wrong question loses most of the content marks.',
    'Plan for five minutes: a key idea for each paragraph and one striking image or example you can use.',
  ]),
  h2('The five types at a glance'),
  table([
    ['Narrative', 'A story with a plot: setting, characters, a problem that builds to a climax, and a resolution. Shows rather than tells. Usually past tense. Dialogue is allowed but keep it purposeful.'],
    ['Descriptive', 'A word-picture of a place, person, event or object. No plot. Organised logically (for example arriving, middle, leaving) and rich in the five senses.'],
    ['Reflective', 'A personal look back at an experience and what it taught you. Moves between “what happened” and “what I realised”. First person, thoughtful tone.'],
    ['Argumentative', 'You take a side and persuade. A clear stance, strong reasons, evidence, an answer to the other side, and a firm conclusion.'],
    ['Discursive', 'You explore a topic from several angles before reaching a balanced conclusion. More open than argumentative.'],
  ]),
  box(ESSAY_NOTE),
]);

/* ── 2. Language toolkit ──────────────────────────────────────────────── */

const TOOLKIT = L('eng-w-toolkit', 'Language Toolkit for Essays', 20, [
  h2('Show, don’t tell'),
  p('“Telling” names a feeling. “Showing” lets the reader see the evidence of the feeling. Markers reward showing.'),
  table([
    ['Tell: She was nervous.', 'Show: Her palms left damp prints on the exam paper and her pen would not stop tapping the desk.'],
    ['Tell: The room was messy.', 'Show: Jerseys hung from the curtain rail, and a pyramid of plates leaned beside the bed.'],
    ['Tell: He was angry.', 'Show: He slammed the gate so hard the whole fence shuddered.'],
    ['Tell: It was cold.', 'Show: Our breath hung in the air like small, grey ghosts.'],
  ]),
  h2('Figurative language you can actually use'),
  table([
    ['Simile', 'Compares with “like” or “as”: The taxi rank hummed like a hive.'],
    ['Metaphor', 'Says one thing IS another: The classroom was an oven.'],
    ['Personification', 'Gives human actions to things: The wind tugged at my blazer, begging me to stay out.'],
    ['Onomatopoeia', 'Sound words: sizzle, clatter, thud, hiss.'],
    ['Alliteration', 'Repeated starting sounds: The sun slid slowly behind the shivering shacks.'],
    ['Hyperbole', 'Deliberate exaggeration: I had waited a hundred years for that bell.'],
    ['Oxymoron', 'Opposites together: a deafening silence, a bitter sweetness.'],
    ['Rhetorical question', 'A question asked for effect, mostly in argumentative writing: How many more warnings do we need?'],
  ]),
  p('Use figures of speech with care. Two or three fresh, well-chosen images beat ten clichés. Avoid “as white as snow”, “the sun was shining brightly”, “my heart skipped a beat”.'),
  h2('Start strongly'),
  table([
    ['Action', 'The ball left my boot and hung in the air for what felt like an hour.'],
    ['Dialogue', '“If you move, we are all dead,” Thabo whispered.'],
    ['Sensory detail', 'The smell of frying vetkoek and diesel was the first thing I noticed.'],
    ['Question or bold statement (argumentative)', 'Every day, thousands of South African teenagers lose hours of sleep to a glowing screen.'],
  ]),
  h2('Linking words (discourse markers)'),
  table([
    ['Adding', 'furthermore, moreover, in addition, also, not only… but also'],
    ['Contrasting', 'however, on the other hand, nevertheless, although, whereas, despite this'],
    ['Cause and result', 'therefore, as a result, consequently, because of this, thus'],
    ['Sequencing', 'firstly, secondly, finally, meanwhile, soon afterwards, by the time'],
    ['Concluding', 'in conclusion, to sum up, ultimately, in the end'],
  ]),
  h2('Paragraphs and sentences'),
  ul([
    'One main idea per paragraph. Start a new paragraph for a new idea, a new speaker, a new place or a jump in time.',
    'Vary your sentence length. Follow a long, flowing sentence with a short one for impact.',
    'Do not begin every sentence with the same word.',
    'Keep your tense consistent: narrative and reflective usually stay in the past tense, argumentative in the present.',
  ]),
  h2('Your editing checklist (last five minutes)'),
  ul([
    'Does the essay answer the topic I chose?',
    'Does it have an introduction, clear paragraphs and a conclusion?',
    'Capital letters, full stops, apostrophes and speech marks correct?',
    'Spelling of common words (separate, definitely, necessary, their/there/they’re)?',
    'Subject–verb agreement and tense consistent?',
    'Is the word count in the right range?',
  ]),
]);

/* ── 3. Model essays ──────────────────────────────────────────────────── */

const NARRATIVE = L('eng-w-narrative', 'Model Narrative Essays', 30, [
  h2('Narrative essay: how to build it'),
  table([
    ['Opening', 'Drop the reader into a moment. Establish place and character quickly.'],
    ['Build-up', 'Show the problem growing. Use sensory detail and short, tense sentences.'],
    ['Climax', 'The moment everything is decided. Slow it down.'],
    ['Resolution', 'What changes? End with an image or a line that lingers, not “and then I woke up”.'],
  ]),
  h3('Plan (Essay 1)'),
  box('Topic: “The last taxi home”\nSetting: dusk, a Khayelitsha taxi rank, narrator is 15\nProblem: last taxi, no money, a stranger\nClimax: narrator decides whether to trust the driver\nResolution: arrives home; small lesson about kindness\nImages: smell of fried food, orange light, the taxi’s rattle'),
  h3('Model essay 1: “The Last Taxi Home”'),
  p('The sky above the rank had turned the colour of bruised peaches by the time I realised the last Nyanga taxi had gone. Around me the vendors were stacking their crates, and the smell of fried onions and diesel hung in the air like a heavy blanket. My phone was dead. My purse held exactly eleven rand, and the fare was fourteen.'),
  p('“You look lost, my girl,” said a woman folding her tablecloth. I mumbled that I was fine and walked to the edge of the rank, where a battered white minibus stood idling, its sliding door half open. A man in a faded Kaizer Chiefs cap leaned out of the driver’s window. “Last one for Nyanga,” he called. “Climb in.”'),
  p('Everything my mother had ever warned me about rushed through my head. Strangers. Empty taxis. Night. My throat felt as dry as chalk. I counted the coins in my hand a second time, as though the number might change. Eleven. The shadows beneath the stalls were growing longer, and the vendors’ voices were thinning out until only the hum of the engine remained.'),
  p('“I am eleven rand short,” I said finally, my voice smaller than I wanted it to be.'),
  p('He looked at me for a long moment. Then he laughed, not unkindly, and tapped the dashboard where a school photograph was stuck beside a rosary. “That is my daughter, Zinhle. She is your age. If she were standing here with eleven rand, what would I want?” He did not wait for an answer. “Get in.”'),
  p('I sat in the front seat with my bag pressed against my chest like a shield. The minibus shuddered onto the road, its dashboard light flickering orange, and the streetlamps of the N2 slid past in long golden stripes. For the first ten minutes I said nothing at all. Slowly, though, my fingers loosened. He hummed an old Mango Groove song, slightly out of tune, and somewhere between the second and third robot I found myself humming along.'),
  p('When we reached my street, the porch light was on and my mother stood at the gate with her arms folded. I braced myself for the lecture, but she was looking past me, at the driver. He lifted two fingers from the steering wheel in a small salute and drove off before I could offer him even the eleven rand.'),
  p('That night I lay awake listening to the rattle of the minibus fade into the distance. I had been so sure I knew how that evening would end. Instead, a stranger had given me a lesson I could not have learnt in any classroom: that fear is a loud voice, but it is not always a truthful one. Since then I have never again walked past someone who needed a hand, because I know exactly how heavy eleven rand can feel.'),
  box('Approx. 475 words (the upper end; trim a sentence or two if your limit is 450). Why it works: strong sensory opening, specific local detail, tension that builds, one short dialogue scene, and an ending that delivers a lesson without sermonising.'),
  h3('Plan (Essay 2)'),
  box('Topic: “A decision I almost regretted”\nTense: past. Narrator: first person.\nBeginning: sports field, Saturday morning, an unfair call\nMiddle: temptation to cheat in the final\nClimax: choosing honesty at match point\nEnd: loses the match, wins respect'),
  h3('Model essay 2: “Match Point”'),
  p('The rugby field at Westridge was still damp with dew when the whistle shrilled for the last time, and I realised, with a sinking feeling, that I was the only person who knew the truth. The referee had awarded us a try. The ball had never touched the ground. It had slipped from my fingers a full metre short of the line.'),
  p('Our supporters were already roaring. Mr Dlamini, our coach, was punching the air. Behind me, Sipho grabbed my shoulders and shook me as if I had won the World Cup. “Eight points ahead!” he shouted. “We are through to the final!”'),
  p('I could not smile. My legs felt heavy, and the grass seemed to tilt slightly beneath my boots. Here was the moment the whole season had been building towards, handed to me on a plate, and it tasted like metal. The opposition’s captain was staring at me across the field. He did not argue with the referee. He simply looked at me, as though he already knew what I was thinking.'),
  p('For the next ten minutes, I told myself every excuse I could find. The referee had made the decision; it was not my job to overrule him. Other teams had been lucky before. Nobody would ever know. But each excuse rang hollow, like a coin spun on a cracked plate.'),
  p('When the whistle blew for the restart, I walked up to the referee with my heart hammering. “Sir,” I said, “I did not ground the ball.”'),
  p('There was a silence so complete I could hear a taxi hooting on the main road. The referee frowned, consulted his touch judge, and slowly lowered his arm. The try was disallowed. The groan from our supporters rolled across the field like thunder.'),
  p('We lost that match by two points. In the change room, nobody spoke. Sipho would not meet my eye. I sat with my head between my knees, certain I had thrown away my friends’ dreams for the sake of a conscience nobody had asked me to have.'),
  p('Then the door opened, and Mr Dlamini stood there with his arms folded. “Who told that referee the truth?” he asked quietly. I raised my hand. He nodded once, slowly. “Good,” he said. “Then you are the only one in this room who won today.”'),
  p('I have thought about those words ever since. We never got our medal, but I walk onto every field knowing exactly who I am, and that is a victory no referee can take away or give.'),
  box('Approx. 420 words. Why it works: a moral dilemma with real tension, controlled dialogue, vivid similes (“like a coin spun on a cracked plate”), and a reflective ending that does not feel forced.'),
]);

const DESCRIPTIVE = L('eng-w-descriptive', 'Model Descriptive Essays', 25, [
  h2('Descriptive essay: how to build it'),
  ul([
    'Choose an order and stick to it: arriving, moving through, leaving; or far to near; or morning to night.',
    'Cover at least four senses (sight, sound, smell, touch or taste).',
    'Choose precise nouns and verbs (“shuffled”, not “walked slowly”).',
    'Let ONE mood run through the description: busy, peaceful, eerie, joyful.',
    'There is no plot. Do not suddenly add a story.',
  ]),
  h3('Plan (Essay 1)'),
  box('Topic: “A Saturday morning at the market”\nOrder: arriving → vegetable stalls → food stalls → leaving\nMood: warm, noisy, alive\nSenses: smell of spices, sound of haggling, bright colours, heat on skin\nImage: the market as a living creature'),
  h3('Model essay 1: “The Saturday Market”'),
  p('By seven o’clock on a Saturday morning, the Bellville market is already awake and stretching. From the car park I can hear it before I can see it: a low, rolling hum of voices, the clang of trolley wheels on concrete, and somewhere beneath it all, a radio playing maskandi music as if the day itself had a heartbeat.'),
  p('The first stalls are the vegetable sellers, and they are a riot of colour. Tomatoes are piled into red pyramids, glossy as polished marbles. Spinach leaves lie in damp green bundles, still smelling faintly of the earth they came from. An old woman in a doek the colour of marigolds sits on an upturned crate, snapping beans into a plastic basin, her fingers moving faster than my eyes can follow. “Three bunches for ten rand, my child,” she calls, and her smile creases her whole face.'),
  p('Further in, the air changes. The smell of frying vetkoek rolls over me, warm and heavy, mixing with the sharp perfume of cumin and coriander from the spice tables. Pyramids of orange, yellow and brick-red powder sit in open bags, and the trader scoops them with a battered tin cup, his forearms dusted with colour. A little girl presses her nose against a glass jar of sweets and leaves a smudge as round as a coin.'),
  p('The noise swells towards the middle of the market. Two men argue cheerfully over the price of a plastic bucket, their voices rising and falling like a song they both know the words to. Chickens complain from their wire cages. A boy weaves between the shoppers on a bicycle, ringing his bell with great importance. Heat gathers under the tin roof and presses against my shoulders, and the smell of sweat, smoke and sugar makes the whole place feel gloriously alive.'),
  p('At the far end, the crowd thins. The stalls here sell second-hand books and old vinyl records, and the mood softens into something slower and dustier. A man in a woollen hat lifts a record carefully from its sleeve, holding it to the light as though it were made of glass. For a moment, the noise behind me dulls to a murmur.'),
  p('By the time I walk back to the car, my arms are heavy with bags and my pockets are light. The sun has climbed high and fierce, and the market is breathing at full strength. As I look back, it seems less like a place and more like a creature, a loud, generous, endlessly hungry creature that wakes every Saturday to feed the whole neighbourhood.'),
  box('Approx. 430 words. Why it works: a clear route through the place, all five senses, fresh similes, precise detail, and a single closing metaphor that ties the whole description together.'),
  h3('Plan (Essay 2)'),
  box('Topic: “Describe an empty school at night”\nMood: eerie but gentle\nOrder: gate → corridor → classroom → hall → exit\nSenses: echo, smell of floor polish, cold air, flickering light'),
  h3('Model essay 2: “After the Last Bell”'),
  p('When the last bus has rattled away and the caretaker’s keys have jingled into silence, my school becomes a stranger. The gate, so busy by day, stands half-closed and sagging, one chain hanging from it like a loose tooth. Beyond it, the quad lies still under the weak orange glow of a single lamp, and the flagpole casts a long, thin shadow across the paving.'),
  p('Inside the main corridor, the air is cool and tastes faintly of floor polish and chalk dust. My footsteps echo, a slow tap, tap, tap that seems to belong to somebody else. Rows of lockers line the walls like sleeping soldiers, their dented doors catching the light from the window at the end of the passage. Somewhere above me a tap drips, patient and steady, counting the seconds in the dark.'),
  p('The Grade 10 classroom is unrecognisable without us. Chairs are stacked upside down on the desks, their metal legs reaching up like the bare branches of a winter tree. The whiteboard still holds the faint ghost of this morning’s equations, half-wiped, a few numbers drifting in the grey smear. A single forgotten jersey hangs over a chair and, in the dim light, looks like a small, patient figure waiting for the morning.'),
  p('The school hall is the largest silence of all. Moonlight falls through the high windows in long, pale rectangles across the polished floor, and the stage curtains hang motionless, heavy as sleeping animals. When I speak, even in a whisper, the word travels the whole length of the room and comes back to me thinner, as though the building were repeating my secrets.'),
  p('Down the corridor, the library is darker still. Shelves stand in long, silent rows, and the smell of old paper rises from the books like the breath of something sleeping. A single desk lamp, left on by mistake, throws a small yellow circle on the table, and inside it a pencil lies where somebody dropped it hours ago. The room feels less empty than interrupted, as though the learners have only stepped out for a moment and may come back at any second.'),
  p('At the exit, I pause with my hand on the cold metal of the door. Behind me the empty corridors stretch away into shadow, but they no longer feel threatening. They feel like a held breath, a great quiet animal resting before the noise of morning. I step outside and the night air rushes over me, and the school settles behind me, patient and waiting.'),
  box('Approx. 410 words. Why it works: a clear route through the building, all five senses, and one mood (quiet, watchful) from start to finish.'),
]);

const REFLECTIVE = L('eng-w-reflective', 'Model Reflective Essays', 25, [
  h2('Reflective essay: how to build it'),
  ul([
    'Choose ONE experience and look at it closely: what happened, what you felt, what you understand now.',
    'Move between the past (the event) and the present (what you realise today).',
    'Be honest. Admit mistakes. Markers reward genuine insight, not perfect behaviour.',
    'Use first person and a thoughtful, calm tone.',
    'End on what you learnt and how it has changed you, not on a summary of the plot.',
  ]),
  h3('Plan'),
  box('Topic: “A time when I failed and what it taught me”\nExperience: failing a Maths test after not studying\nFeelings: shame, anger at self, fear of telling parents\nChange: asks for help, builds a study timetable\nInsight: failure is information, not a verdict'),
  h3('Model essay 1: “The Test I Failed”'),
  p('I still remember the exact number: thirty-four per cent. It was written in red at the top of my Maths test, circled twice, and when my teacher handed it back face down, I knew before I turned it over that something had gone terribly wrong. My cheeks burned. Around me, my friends were comparing marks in loud, cheerful voices, and I slid the paper into my bag as though it were evidence at a crime scene.'),
  p('The truth was that I had no one to blame but myself. For weeks, I had told myself that Maths came easily to me. In Grade 9, I had scraped through with barely any effort, and I carried that confidence into Grade 10 like a lucky charm. While my classmates stayed behind for extra lessons, I scrolled through my phone. When Ms Naidoo warned us that the algebra section would be difficult, I nodded politely and did nothing about it.'),
  p('That evening, I sat on the edge of my bed and stared at the wall. I felt ashamed, but I also felt angry, and it took me a while to understand that the anger was not aimed at the test or the teacher. It was aimed at me. I rehearsed excuses for my parents: the paper was unfair, the questions were not in the textbook. Each one sounded weaker the more I repeated it.'),
  p('In the end, I told my mother the truth. I expected her to be furious. Instead, she was quiet for a long moment, and then she asked a question that has stayed with me ever since: “What are you going to do differently?” It was not a punishment. It was an invitation.'),
  p('The next morning I stayed behind after class and asked Ms Naidoo if she would go through my mistakes with me. She smiled, as though she had been waiting for me to ask, and spread my test paper across her desk. Together, we discovered that I did not misunderstand algebra at all. I simply rushed, skipped steps, and never checked my answers. That evening I drew up a timetable, forty minutes a night, and stuck it above my desk.'),
  p('Three weeks later, I scored sixty-eight per cent in the next test. It was not a perfect mark, but I have never been prouder of a number. More importantly, I understood something I had missed before: failure is not a verdict on who you are. It is information. It tells you exactly where to dig.'),
  p('Today, when I make a mistake, I try to remember that thirty-four per cent. It no longer makes my cheeks burn. It reminds me that the people I admire most are not the ones who never fail, but the ones who are brave enough to look at their red circle and ask, calmly, what they will do differently.'),
  box('Approx. 475 words. Why it works: honest voice, a clear then-and-now structure, small concrete details (red circle, timetable), and a final insight that is earned by the story.'),
  h3('Model essay 2: “What Silence Taught Me”'),
  p('When my grandmother moved in with us, I did not want to share my room with her. I was fourteen, my life was loud, and I resented the quiet old woman who knitted in the corner and never seemed to need anything. For the first month, I barely spoke to her. I rolled my eyes when she asked about my day, and I kept my headphones on whenever she entered the room.'),
  p('Looking back, I can see how selfish I was. She had left the home she lived in for fifty years, the garden she planted, the neighbours she knew by name, and she never complained. At night, I would hear her whispering prayers in isiXhosa, her voice thin and steady in the dark, and I would turn up my music to drown it out.'),
  p('Everything changed on a Tuesday afternoon when I came home with a bad report and found her at the kitchen table. Without a word, she pushed a cup of rooibos across to me and carried on peeling potatoes. I braced myself for questions, for advice, for a lecture. None came. We simply sat there, the knife scraping softly against the skins, and the silence between us felt, for the first time, like a gift.'),
  p('After a while, I started talking. I told her about the report, about my friends, about the fear that I was not good enough for anything. She listened with her whole face, nodding slowly. When I finished, she said only, “Sometimes a person needs somebody to carry the quiet with them.” I did not fully understand it then. I do now.'),
  p('Over the following months, I learnt that my grandmother’s silence was not emptiness. It was attention. She noticed everything: the days I was tired, the evenings I was sad, the small kindnesses I forgot I had done. She taught me to knit, badly, and to listen, a little better.'),
  p('Slowly, the house changed around her. My brothers began to sit on the stoep with her in the evenings, and even my father, who rarely sat still, took to drinking his coffee beside her chair. Her quiet was not something to be filled. It was a place where everybody in the family, one by one, learnt to rest.'),
  p('Last winter, she passed away. At her funeral I stood among the aunts and uncles and realised that the loudest thing in the room was the absence of her quiet. I still keep her unfinished scarf in my drawer, and when life grows too noisy, I take it out and hold it, and remember that sometimes the greatest gift you can give a person is simply your company.'),
  box('Approx. 430 words. Why it works: an emotional arc told with restraint; the “silence” motif returns at the beginning, middle and end; the reflection is personal rather than preachy.'),
]);

const ARGUMENTATIVE = L('eng-w-argumentative', 'Model Argumentative and Discursive Essays', 30, [
  h2('Argumentative essay: how to build it'),
  table([
    ['Introduction', 'Hook (question, statistic, bold statement), brief context, a clear STANCE statement.'],
    ['Body paragraph 1', 'Strongest argument. Point, evidence or example, explanation, link back to the stance.'],
    ['Body paragraph 2', 'Second argument, same pattern.'],
    ['Body paragraph 3', 'Third argument OR the counter-argument and your rebuttal.'],
    ['Conclusion', 'Restate the stance in fresh words, summarise, end with a call to action or a strong final thought.'],
  ]),
  ul([
    'Write in the present tense, formal register, no slang.',
    'Use rhetorical devices sparingly: rhetorical questions, the rule of three, direct address (“we”).',
    'Back your points with examples, statistics or logic. Never write “everybody knows”.',
  ]),
  h3('Plan (Essay 1)'),
  box('Topic: “Cellphones should be banned during school hours.” Do you agree?\nStance: AGREE (with a limited exception for emergencies)\nPoint 1: distraction and lower marks\nPoint 2: cyberbullying and social pressure\nPoint 3: lost face-to-face skills\nCounter: cellphones are useful learning tools → answer: schools can supply devices'),
  h3('Model essay 1: “Switch It Off”'),
  p('Imagine a classroom where every learner is looking at a teacher instead of a glowing rectangle. For many South African schools, that picture is already a memory. In an age when a cellphone is as common as a school bag, it is time to ask a difficult question: does the device in our pockets help us learn, or does it quietly steal our education? This essay argues that cellphones should be banned during school hours, with one sensible exception for genuine emergencies.'),
  p('Firstly, cellphones are the biggest distraction in the modern classroom. Research from several universities has found that even a silent phone lying face down on a desk reduces a learner’s concentration, because part of the brain keeps waiting for the next notification. A learner who checks a message every five minutes loses far more than five minutes of learning. Over a term, those lost minutes become lost marks. A ban would return that attention to where it belongs.'),
  p('Secondly, phones make cyberbullying easier and harder to escape. An insult shouted in a corridor can be forgotten, but a humiliating photograph shared in a group chat can reach hundreds of learners before the bell rings. Victims carry that cruelty into the classroom, and they often suffer in silence. If phones stay in lockers until the final bell, schools can protect learners during the hours they are responsible for them.'),
  p('Furthermore, a school day is one of the few places left where young people practise talking to one another. At break, learners who once played soccer or shared lunch now sit side by side, scrolling in silence. Conversation, eye contact and patience with another person’s opinion are skills that no app can teach. Removing phones gives those skills room to grow.'),
  p('Admittedly, supporters of cellphones argue that they are powerful learning tools, offering dictionaries, calculators and research at the tap of a finger. This is true, but it does not justify unrestricted use. Schools can provide supervised tablets or computer rooms for exactly these tasks, while keeping personal phones out of the equation. Parents who worry about emergencies can phone the school office, as generations did before them.'),
  p('In conclusion, the evidence is clear. Cellphones divide our attention, expose learners to bullying, and weaken the social skills they will need as adults. A ban during school hours is not a punishment; it is a gift of focus, safety and real connection. The time has come for our schools to be brave enough to switch it off.'),
  box('Approx. 415 words. Why it works: clear stance up front, three developed arguments with explanation, a fair counter-argument that is answered, and a confident conclusion.'),
  h3('Plan (Essay 2: discursive)'),
  box('Topic: “Social media has made teenagers lonelier.” Discuss.\nApproach: balanced, explore both sides then conclude\nFor: comparison, cyberbullying, replaces real friendship\nAgainst: connects isolated teens, support groups, shared interests\nConclusion: depends on HOW it is used'),
  h3('Model essay 2: “Connected, But Alone?”'),
  p('Teenagers today are never technically alone. Their phones buzz with messages, their feeds overflow with faces, and a friend is always only one tap away. Yet more and more young people describe themselves as lonely. This raises an uncomfortable question: has social media, the tool designed to bring us closer, actually pushed us apart? The answer, as this essay will show, is not simple.'),
  p('On the one hand, there is real evidence that social media can deepen loneliness. Teenagers scroll through carefully filtered photographs of parties, holidays and perfect friendships, and they compare these highlights with their own ordinary lives. A learner sitting at home on a Saturday night can feel excluded by a single post. In addition, time spent online often replaces time spent with friends in person, and a hundred likes cannot replace one honest conversation.'),
  p('Cyberbullying makes matters worse. Unkind comments follow victims home, into their bedrooms, at midnight, when there is nowhere to hide. Studies of teenage mental health have linked heavy social media use to anxiety and lower self-esteem, both of which feed loneliness.'),
  p('On the other hand, it would be unfair to ignore the benefits. For a teenager in a remote village, or one who feels different from the people around them, an online community can be a lifeline. Support groups for young people dealing with illness, grief or identity allow them to speak to others who understand. Friends who have moved to different cities stay in daily contact. In these cases, social media connects rather than isolates.'),
  p('The truth, then, seems to depend on how the platform is used. A teenager who uses it to arrange a soccer match or share a joke with a friend is likely to feel more connected. One who spends hours comparing and scrolling alone is likely to feel the opposite. The problem is not the technology itself, but the habits we build around it.'),
  p('Parents and schools also have a part to play. A family that agrees on a phone-free dinner, or a school that teaches learners how to spot unhealthy comparison, can make online life healthier. Teenagers who are taught to pause before they post, and to log off when they feel low, are far more likely to use these tools well.'),
  p('In conclusion, social media is neither a villain nor a saviour. It is a mirror that magnifies what teenagers already bring to it. If we teach young people to use it with balance, and to value face-to-face friendship above online approval, it can be a bridge. If we do not, it may remain a very crowded kind of loneliness.'),
  box('Approx. 425 words. Why it works: balanced discussion, topic sentences that signal direction (“On the one hand… On the other hand…”), and a measured conclusion that weighs both sides.'),
]);

/* ── 4. Transactional texts ───────────────────────────────────────────── */

const LETTERS = L('eng-w-letters', 'Transactional Texts: Letters and Emails', 35, [
  h2('Transactional texts: the basics'),
  p('A transactional text is writing with a real purpose and audience. The marker checks three things: (1) the correct FORMAT, (2) the right REGISTER (formal or informal), and (3) full, relevant CONTENT in clear language. Length is usually about 120–150 words, excluding addresses and the date.'),
  table([
    ['Formal letter', 'To a stranger or official (principal, manager, councillor). Formal language, no slang or contractions, polite and direct.'],
    ['Informal letter', 'To a friend or family. Friendly, chatty tone; contractions and personal detail are fine.'],
    ['Letter to the press', 'To a newspaper editor about a public issue. Formal, persuasive, and written so any reader can follow.'],
    ['Email', 'Quicker and shorter. Subject line, greeting, short paragraphs, sign-off. Formal or informal depending on the reader.'],
  ]),
  h2('Formal letter layout'),
  box('Sender’s address (top right)\nDate\n\nRecipient’s title, name and address (left)\n\nSalutation (Dear Sir/Madam, or Dear Mr/Ms Surname)\n\nSUBJECT LINE (centred or bold, underlined)\n\nParagraph 1: why you are writing\nParagraph 2: details and reasons\nParagraph 3: what you want done (a request or action)\n\nComplimentary close: Yours faithfully (Dear Sir/Madam)\n                     Yours sincerely (named person)\n\nSignature\nFull name printed below'),
  h3('Model formal letter 1: complaint'),
  box(`14 Protea Road
Rondebosch
7700
12 March 2025

The Municipal Manager
City of Cape Town: Roads and Lighting
PO Box 298
Cape Town
8000

Dear Sir/Madam

COMPLAINT: BROKEN STREETLIGHTS IN PROTEA ROAD

I am writing to report that the streetlights in Protea Road, Rondebosch, have not worked for the past three weeks.

Since the lights failed, residents have felt unsafe walking home in the dark. Two weeks ago a learner from my school had her cellphone snatched on this road at about 18:30. The poor lighting also makes it difficult for drivers to see pedestrians, and the pavement near number 20 is badly cracked.

I therefore request that you send a team to repair the lights as soon as possible. I would also appreciate a written reply telling me when the work will be done.

Thank you for your attention to this urgent matter.

Yours faithfully

T. Mokoena
Thandeka Mokoena`),
  box('Why it works: correct layout; subject line; each paragraph has one job (problem, effect, request); formal register with no contractions; specific details (dates, place, incident); polite but firm. About 130 words in the body.'),
  h3('Model formal letter 2: application for a holiday job'),
  box(`23 Gordon Street
Sunnyside
Pretoria
0002
5 June 2025

The Manager
Greenfield Garden Centre
85 Voortrekker Road
Pretoria
0001

Dear Sir/Madam

APPLICATION FOR A HOLIDAY JOB

I am a Grade 10 learner at Sunnyside High School, and I am writing to apply for the temporary job advertised in last Saturday’s Pretoria News.

I am sixteen years old and a reliable, hard-working person. I have helped in my uncle’s nursery for two years, where I learnt to water, pot and label plants and to serve customers politely. I am good at mathematics and can handle money accurately. I am available from 28 June to 20 July.

I would welcome the chance to prove myself and learn new skills. I can bring my school reference and attend an interview at any time convenient to you.

Thank you for considering my application.

Yours faithfully

Lerato Sithole`),
  box('Why it works: states the source of the advertisement, gives relevant skills and availability, shows enthusiasm without exaggerating, and ends with an offer of further information.'),
  h2('Informal letter layout'),
  box('Your address (top right)\nDate\n\nDear [first name],\n\nOpening: greet and respond to their news\nMiddle: your news, stories, feelings\nClosing: questions, plans, affectionate sign-off\n\nLove / Your friend / Cheers,\nYour name'),
  h3('Model informal letter: to a friend about a new school'),
  box(`7 Jacaranda Avenue
Bloemfontein
9301
18 February 2025

Dear Naledi,

Hi from Bloemfontein! I hope you are well and that Durban is still as hot as ever. Thank you for your last message. It made me laugh out loud!

I have finally settled in at my new school, and I must tell you everything. On the first day I was so nervous that I got lost twice and walked into the Grade 8 toilets by mistake (I will never live that down). Luckily a girl called Aisha showed me where to go, and now we sit together at break. She is mad about netball, just like you, so I have joined the team.

The teachers are strict but fair, and my favourite is Mr Pretorius, who tells terrible jokes in History. I do miss our old gang, though. Please come and visit during the September holidays. My mom says you are welcome to stay, and we can go to the Naval Hill lookout.

Write soon and tell me all your news!

Lots of love,
Zandi`),
  box('Why it works: warm, natural voice; contractions and humour are fine because the reader is a friend; it answers her earlier letter, tells a short story, and ends with an invitation. About 150 words.'),
  h3('Model letter to the press'),
  box(`45 Jan Smuts Avenue
Parktown
2193
10 April 2025

The Editor
The Star
PO Box 1014
Johannesburg
2000

Dear Sir/Madam

LITTER IS CHOKING OUR PARKS

I wish to draw attention to the shocking state of Parktown Park. On Sunday I counted more than forty plastic bottles, a dozen chip packets and a broken chair along the walking path alone.

This is not only ugly; it is dangerous. Broken glass cuts the paws of dogs and the feet of children, and plastic washes into the stream and eventually the ocean. We cannot expect tourists, or our own families, to enjoy a park that we treat as a rubbish dump.

I urge the city council to place more bins and to fine those who litter. I also challenge every reader to pick up three pieces of litter next time they visit a park. Small actions create clean spaces.

Yours faithfully

Sipho Radebe`),
  box('Why it works: strong factual opening, persuasive reasoning, a clear call to action to both authorities and readers, and an attention-grabbing headline. Written in formal register but readable by everyone.'),
  h2('Email'),
  box(`To: principal@parkviewhigh.co.za
Subject: Request to hold a recycling drive

Dear Mrs Pillay,

I am the chairperson of the Environmental Club, and I would like to ask permission to hold a recycling drive on Friday 14 March.

We plan to collect plastic bottles and paper at the main gate before school and during break. Proceeds from the recycling will go towards new classroom bins. About twelve club members have offered to help, and Mr Jacobs has agreed to supervise.

Please let me know if you approve the date. I would be glad to meet you to discuss the details.

Yours sincerely,
Kagiso Dlamini
Grade 10B, Environmental Club`),
  h2('Transactional text checklist'),
  ul([
    'Did I choose the correct text type and layout (sender’s address, date, salutation, subject line, closing)?',
    'Is my register consistent: formal for officials, relaxed for friends?',
    'Did I cover every point in the question (read the bullet points carefully)?',
    'Is my content in logical paragraphs of two to four sentences?',
    'Does my sign-off match my salutation (Dear Sir/Madam goes with Yours faithfully)?',
    'Spelling, punctuation and word count checked?',
  ]),
  qa([
    { q: 'You begin a letter “Dear Mr Khumalo”. Which closing do you use?', a: 'Yours sincerely, because you used the person’s name. Use “Yours faithfully” only with “Dear Sir/Madam”.' },
    { q: 'Is “Hi Mrs Pillay, hope you’re good!” acceptable in a formal letter?', a: 'No. It is too casual. Write “Dear Mrs Pillay” and avoid slang and contractions.' },
    { q: 'What does a subject line do?', a: 'It tells the reader at a glance why you are writing, so they can decide who should deal with it. It is a formal-letter feature.' },
  ]),
]);

export const ENGLISH_WRITING_CHAPTER: Chapter = {
  id: CH,
  subjectId: 'english',
  title: 'Writing: Essays and Transactional Texts',
  summary: 'Paper 3 skills: how essays are marked, a language toolkit, model essays in five styles, and model letters and emails.',
  lessons: [OVERVIEW, TOOLKIT, NARRATIVE, DESCRIPTIVE, REFLECTIVE, ARGUMENTATIVE, LETTERS],
};
