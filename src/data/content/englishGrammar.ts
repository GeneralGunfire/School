import type { Chapter } from '../../lib/types';
import { h2, p, ul, box, table, qa, lessonIn, type WB } from './writeKit';
import type { AcronymItem } from '../../lib/types';

/**
 * English Home Language / First Additional Language, Grade 10–11: Grammar & Language.
 * Covers the "Language Structures and Conventions" section tested in Paper 1 (short texts,
 * advertisements, cartoons, editing) and the language-technique questions that appear in
 * the comprehension and poetry sections of Paper 2. CAPS does not fix one rigid list, but
 * these are the concepts that recur across NSC and provincial papers at this level.
 */

const CH = 'eng-grammar';
const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>) =>
  lessonIn('english', CH, id, title, minutes, blocks);

const acro = (word: string, forWhat: string, items: AcronymItem[]): WB => ({ type: 'acronym', word, forWhat, items });

const TIP = (text: string): WB => box(`Exam tip: ${text}`);

/* ── 1. Figures of speech and language techniques ────────────────────── */

const FIGURES = L('eng-g-figures', 'Figures of Speech and Language Techniques', 35, [
  h2('Why this matters'),
  p('Every Paper 1 language section and most Paper 2 comprehensions ask you to identify a figure of speech or language technique and explain its EFFECT. "Name it" earns one mark; "explain what it does to the reader, or why the writer chose it here" earns the rest. Always answer both parts, even when the question only seems to ask for the name.'),
  h2('Comparison devices'),
  table([
    ['Simile', 'A direct comparison using "like" or "as". Example: "The crowd roared like a wounded lion." Effect: makes the crowd’s noise vivid and threatening by comparing it to something the reader can picture.'],
    ['Metaphor', 'States that one thing IS another, with no "like" or "as". Example: "Her classroom was a battlefield." Effect: suggests conflict and tension more forcefully than a simile would, because it claims the comparison as fact.'],
    ['Personification', 'Gives human qualities, actions or feelings to an object, animal or idea. Example: "The old house groaned in the wind." Effect: makes the setting feel alive, often to build atmosphere or menace.'],
    ['Pathetic fallacy', 'A special case of personification: the weather or landscape is given emotions that mirror a character’s mood. Example: "The sky wept over the funeral." Effect: the setting reflects and intensifies the mood of the scene.'],
    ['Symbolism', 'An object, person or colour stands for something beyond its literal meaning. Example: a dove representing peace. Effect: lets a writer suggest an idea without stating it directly.'],
    ['Imagery', 'Language that appeals to any of the five senses to create a mental picture. Example: "the sharp tang of vinegar chips." Effect: makes writing vivid and immediate by letting the reader almost taste, see or hear the scene.'],
  ]),
  h2('Exaggeration, understatement and contradiction'),
  table([
    ['Hyperbole', 'Deliberate, obvious exaggeration, not meant to be taken literally. Example: "I have told you a million times." Effect: emphasises strong feeling (frustration, excitement) through exaggeration.'],
    ['Understatement', 'Deliberately makes something seem less important or serious than it is. Example: after a car crash, saying "That was a bit of a bump." Effect: can create irony, humour, or show a character’s calm (or shock).'],
    ['Oxymoron', 'Two contradictory terms placed side by side. Example: "a deafening silence", "bittersweet". Effect: captures a complex or paradoxical experience in a short, striking phrase.'],
    ['Paradox', 'A statement that seems self-contradictory but reveals a deeper truth once you think about it. Example: "The more you give away, the more you have." Effect: forces the reader to pause and think, revealing an unexpected truth.'],
    ['Irony (verbal)', 'Saying the opposite of what is meant, usually for sarcastic or humorous effect. Example: calling a disastrous meal "delicious". Effect: creates humour or criticism by meaning the opposite of the literal words.'],
    ['Irony (situational)', 'An outcome that is the opposite of what was expected. Example: a fire station burning down. Effect: highlights the unexpectedness or unfairness of an event.'],
    ['Irony (dramatic)', 'The audience/reader knows something a character does not. Example: in a play, the audience knows the "friend" is a traitor before the hero does. Effect: builds tension, because the reader anticipates what the character cannot see coming.'],
    ['Euphemism', 'A mild or indirect word/phrase substituted for a harsh or unpleasant one. Example: "passed away" instead of "died". Effect: softens an unpleasant truth, often to be polite or tactful.'],
  ]),
  h2('Sound and repetition devices'),
  table([
    ['Onomatopoeia', 'A word that imitates the sound it describes. Example: "buzz", "clatter", "hiss". Effect: lets the reader hear the sound described, making writing more immediate.'],
    ['Alliteration', 'Repetition of the same consonant sound at the start of nearby words. Example: "the whispering wind". Effect: creates rhythm or emphasis and can mimic the sound being described (soft "w" sounds suit a gentle wind).'],
    ['Assonance', 'Repetition of the same vowel sound within nearby words (not necessarily at the start). Example: "the light of the fire danced." Effect: creates a musical or flowing quality in the line.'],
    ['Repetition', 'A word or phrase deliberately used more than once. Example: "Never, never, never give up." Effect: emphasises an idea and can build emotional intensity or urgency.'],
  ]),
  h2('Rhetorical and persuasive devices'),
  table([
    ['Rhetorical question', 'A question asked to make a point, not to get an answer. Example: "How much longer must we wait?" Effect: involves the reader directly and implies the answer is obvious, strengthening an argument.'],
    ['Pun', 'A play on words that have the same sound but different meanings, or a single word with two meanings, used for humour. Example: a bakery sign reading "Rolling in dough". Effect: creates humour and draws attention to the message, often used in advertising.'],
    ['Idiom', 'A fixed expression whose meaning is not literal. Example: "it’s raining cats and dogs" (meaning "raining heavily"). Effect: adds colour and familiarity to language, though a strong essay avoids over-using them.'],
    ['Cliché', 'An expression so overused it has lost its original impact. Example: "at the end of the day", "as white as snow". Effect: usually weakens writing — examiners mark clichés down in creative work, so name them as a WEAKNESS when asked to critique a text.'],
  ]),
  h2('Tone, register and meaning'),
  table([
    ['Tone', 'The writer’s attitude towards the subject, conveyed through word choice (e.g. mocking, solemn, nostalgic, urgent). Identify it from diction, not from guessing the writer’s mood.'],
    ['Register', 'The level of formality in language, matched to audience and purpose (formal, informal, slang, technical). A text message and a job application use different registers for the same information.'],
    ['Connotation', 'The feelings or associations a word carries beyond its dictionary meaning. Example: "home" connotes warmth and belonging, beyond its literal meaning of "a dwelling".'],
    ['Denotation', 'The literal, dictionary definition of a word, with no added feeling. Example: the denotation of "home" is simply "a place where one lives".'],
  ]),
  acro('SPIRITS', 'Devices to scan for first in any unseen text (a reading checklist, not a fixed order)', [
    { letter: 'S', stands: 'Simile / Symbolism', note: 'Look for "like"/"as", or an object standing for something bigger' },
    { letter: 'P', stands: 'Personification', note: 'Human qualities given to things' },
    { letter: 'I', stands: 'Irony', note: 'Said vs meant, or expected vs actual' },
    { letter: 'R', stands: 'Rhetorical question', note: 'A question not meant to be answered' },
    { letter: 'I', stands: 'Imagery', note: 'Sensory detail — sight, sound, smell, touch, taste' },
    { letter: 'T', stands: 'Tone', note: 'The writer’s attitude, shown through word choice' },
    { letter: 'S', stands: 'Sound devices', note: 'Alliteration, assonance, onomatopoeia, repetition' },
  ]),
  TIP('Never just name the device. The mark allocation almost always rewards the EFFECT — what the device does to the reader, or why the writer chose those exact words here, not elsewhere.'),
  qa([
    { q: 'Identify the figure of speech in "The exam was a mountain I could not climb" and explain its effect.', a: 'Metaphor. It compares the exam directly to a mountain (without "like"/"as"), suggesting the exam felt impossibly difficult and overwhelming, as climbing a mountain would be.' },
    { q: '"I’m just a little bit tired" (said after staying awake for 36 hours). Name the device and its effect.', a: 'Understatement (or verbal irony). It deliberately downplays extreme exhaustion, which can create humour or show the speaker is trying to appear unaffected.' },
    { q: 'Why would a writer use a rhetorical question instead of a direct statement in a persuasive speech?', a: 'A rhetorical question draws the audience into the argument by making them supply the (obvious) answer themselves, which feels more persuasive than simply being told what to think.', marks: 2 },
  ]),
]);

/* ── 2. Word formation, vocabulary and register ───────────────────────── */

const WORDS = L('eng-g-words', 'Word Formation, Vocabulary and Register', 25, [
  h2('How new words enter English'),
  p('Language questions sometimes ask you to identify HOW a word was formed, especially with new or unusual words in advertisements and articles.'),
  table([
    ['Neologism', 'A newly coined word, not yet (or only recently) in standard dictionaries. Example: "selfie", "vlog".'],
    ['Compounding', 'Two whole words joined to form one new word. Example: "laptop" (lap + top), "sunflower".'],
    ['Blending', 'Parts of two words merged into one. Example: "brunch" (breakfast + lunch), "smog" (smoke + fog).'],
    ['Clipping', 'A longer word shortened, keeping the same meaning. Example: "ad" from "advertisement", "flu" from "influenza".'],
    ['Acronym', 'Formed from initial letters and pronounced as a single word. Example: "NASA", "SARS" (pronounced as words, not letter by letter).'],
    ['Initialism', 'Formed from initial letters but pronounced letter by letter. Example: "ATM", "SMS".'],
    ['Borrowing', 'A word taken from another language, often unchanged. Example: "braai" (Afrikaans), "safari" (Swahili/Arabic).'],
    ['Affixation', 'Adding a prefix or suffix to a base word to change its meaning or word class. Example: "un-" + "happy" = "unhappy"; "teach" + "-er" = "teacher".'],
  ]),
  h2('Prefixes and suffixes worth knowing'),
  table([
    ['un-, dis-, im-, in-, non-', 'Negative/opposite prefixes: unhappy, disagree, impossible, incorrect, nonsense.'],
    ['re-', 'Again: rewrite, replay.'],
    ['-able / -ible', 'Capable of being: washable, flexible.'],
    ['-ful / -less', 'Full of / without: careful, careless.'],
    ['-ise / -ize, -ation', 'Turns a noun/adjective into a verb, or a verb into a noun: modernise, modernisation.'],
    ['-ly', 'Turns an adjective into an adverb: quick → quickly.'],
  ]),
  h2('Registers and varieties of language'),
  table([
    ['Jargon', 'Specialised vocabulary used within a profession or field, often unclear to outsiders. Example: "RAM", "firewall" in computing.'],
    ['Colloquialism', 'Informal, conversational language appropriate to everyday speech but not formal writing. Example: "y’all", "gonna".'],
    ['Slang', 'Very informal, often trendy vocabulary used by a particular group, that changes quickly over time. Example: "lit", "savage" used to mean impressive.'],
    ['Archaic language', 'Old-fashioned words or forms no longer in common use, often found in older poetry/drama. Example: "thee", "thou", "wherefore".'],
    ['Euphemism vs dysphemism', 'A euphemism softens a harsh idea ("let go" for "fired"); a dysphemism deliberately makes something sound harsher or cruder than necessary ("croaked" for "died").'],
    ['Bias', 'Language that unfairly favours one side, often through loaded or emotive word choice rather than neutral fact. Example: calling protesters "a mob" instead of "a crowd".'],
  ]),
  TIP('When asked to identify a word’s register (formal/informal/slang), look at the whole sentence around it — the SAME word can be neutral in one context and slang in another.'),
  qa([
    { q: 'What process formed the word "smog"? Explain your answer.', a: 'Blending. Parts of two existing words, "smoke" and "fog", are merged into one new word that combines both meanings.' },
    { q: 'Identify the device: "At the end of the day, we gave him the boot." Explain its effect in a formal report.', a: 'Both phrases are clichés/colloquialisms ("at the end of the day", "gave him the boot" meaning dismissed him). In a formal report they are inappropriate, since they lower the register and sound too casual for the audience and purpose.' },
  ]),
]);

/* ── 3. Parts of speech I: nouns, pronouns, verbs ─────────────────────── */

const POS1 = L('eng-g-pos1', 'Parts of Speech I: Nouns, Pronouns and Verbs', 30, [
  h2('Nouns'),
  table([
    ['Common noun', 'A general name for a person, place or thing: city, teacher, phone.'],
    ['Proper noun', 'The specific name of a person, place or thing, always capitalised: Cape Town, Thabo, Samsung.'],
    ['Collective noun', 'Names a group as a single unit: a herd of cattle, a team of players, a flock of birds.'],
    ['Abstract noun', 'Names an idea, quality or feeling that cannot be touched: honesty, freedom, joy.'],
    ['Concrete noun', 'Names something that can be perceived by the senses: table, rain, dog.'],
    ['Countable / uncountable noun', 'Countable nouns have a plural form (book/books); uncountable nouns do not normally take a plural (water, advice, information).'],
  ]),
  h2('Pronouns'),
  table([
    ['Personal', 'Replaces a specific noun: I, you, he, she, it, we, they (and me, him, her, us, them as objects).'],
    ['Possessive', 'Shows ownership: my/mine, your/yours, his, her/hers, its, our/ours, their/theirs.'],
    ['Reflexive', 'Refers back to the subject of the sentence: myself, yourself, himself, herself, itself, ourselves, themselves.'],
    ['Demonstrative', 'Points something out: this, that, these, those.'],
    ['Relative', 'Introduces a relative clause and links it to a noun: who, whom, whose, which, that.'],
    ['Interrogative', 'Used to ask a question: who, what, which, whose.'],
    ['Indefinite', 'Refers to a non-specific person or thing: someone, anyone, everybody, nothing, several.'],
  ]),
  h2('Verbs'),
  table([
    ['Transitive verb', 'Takes a direct object — needs something to act upon. Example: "She kicked the ball." (ball = object)'],
    ['Intransitive verb', 'Does not take a direct object — complete on its own. Example: "The baby slept."'],
    ['Finite verb', 'Shows tense and agrees with its subject; can stand as the main verb of a sentence. Example: "She walks to school."'],
    ['Non-finite verb', 'Does not show tense on its own: infinitives (to walk), gerunds (walking as a noun), and participles used as adjectives (the broken window).'],
    ['Auxiliary (helping) verb', 'Supports the main verb to build tense, mood or voice. Example: is, have, will, do, in "She is running", "They have left".'],
    ['Modal verb', 'An auxiliary that expresses necessity, possibility, permission or ability: can, could, may, might, must, shall, should, will, would.'],
    ['Phrasal verb', 'A verb combined with a preposition/adverb that creates a new meaning. Example: "give up" (surrender), "look after" (care for), "run into" (meet by chance).'],
  ]),
  TIP('"Look up the word" (search for it) and "look up at the sky" (glance upward) use the SAME two words but one is a phrasal verb with an idiomatic meaning and the other is just a verb plus a literal preposition. Context decides.'),
  qa([
    { q: 'Identify the type of pronoun in "The book, which I borrowed, is overdue."', a: 'Relative pronoun ("which") — it introduces a relative clause and links it back to the noun "book".' },
    { q: 'Is the verb "arrived" in "The train arrived" transitive or intransitive? Explain.', a: 'Intransitive — the sentence is complete without a direct object; nothing receives the action of arriving.' },
    { q: 'Identify the phrasal verb in "She finally gave up smoking" and explain what it means.', a: '"Gave up" is the phrasal verb; it means "stopped" or "quit", a meaning that is not obvious from "give" and "up" taken separately.' },
  ]),
]);

/* ── 4. Parts of speech II: modifiers, connectors, determiners ──────────── */

const POS2 = L('eng-g-pos2', 'Parts of Speech II: Adjectives, Adverbs, Prepositions, Conjunctions, Interjections', 25, [
  h2('Adjectives'),
  p('An adjective describes or modifies a noun or pronoun, usually answering "which one", "how many" or "what kind". Example: "the tall, exhausted runner."'),
  table([
    ['Descriptive', 'Describes a quality: brave, tall, blue.'],
    ['Quantitative', 'Shows amount or number: five, many, several.'],
    ['Demonstrative', 'Points out a specific noun: this book, those shoes (the same words as demonstrative pronouns, but used before a noun).'],
    ['Possessive', 'Shows ownership before a noun: my, your, his, her, its, our, their.'],
    ['Comparative / superlative', 'Compares two (faster, better) or three-or-more things (fastest, best).'],
  ]),
  h2('Adverbs'),
  p('An adverb modifies a verb, adjective or another adverb, usually answering "how", "when", "where" or "to what extent". Many (not all) end in "-ly": quickly, carefully, extremely.'),
  table([
    ['Manner', 'How something happens: slowly, carefully, well.'],
    ['Time', 'When: yesterday, soon, now.'],
    ['Place', 'Where: here, there, everywhere.'],
    ['Degree', 'To what extent: very, almost, quite, too.'],
    ['Frequency', 'How often: always, never, often, rarely.'],
  ]),
  h2('Prepositions'),
  p('A preposition shows the relationship (place, time, direction, manner) between a noun/pronoun and another word in the sentence: in, on, at, under, between, during, since, towards, despite.'),
  box('Common confusions: "different FROM" (not "to", in formal writing); "arrive AT" a place, "arrive IN" a city/country; "since" for a point in time, "for" for a duration — "since 2020" vs "for three years".'),
  h2('Conjunctions'),
  table([
    ['Coordinating', 'Joins equal grammatical units. FANBOYS: for, and, nor, but, or, yet, so.'],
    ['Subordinating', 'Joins a subordinate (dependent) clause to a main clause: because, although, since, if, when, unless, while.'],
    ['Correlative', 'Work in pairs: either…or, neither…nor, not only…but also, both…and.'],
  ]),
  h2('Interjections'),
  p('A short exclamation that expresses sudden emotion, usually standing alone and followed by an exclamation mark: "Wow!", "Ouch!", "Hey!", "Oh no!"'),
  h2('Articles and determiners'),
  table([
    ['Definite article', '"The" — refers to a specific, already-known noun: "the dog" (a particular dog).'],
    ['Indefinite article', '"A"/"An" — refers to any one, non-specific example: "a dog" (any dog). Use "an" before a vowel SOUND, not just a vowel letter: "an hour", but "a university".'],
    ['Other determiners', 'Words that limit or specify a noun without being articles: this/that/these/those, my/your/his, some/any/no, each/every.'],
  ]),
  qa([
    { q: 'Identify the part of speech of the underlined word: "She works <u>extremely</u> hard." Explain.', a: 'Adverb of degree — it modifies the adverb "hard", showing the intensity of how hard she works.' },
    { q: 'Choose the correct preposition and explain: "He has lived in Durban ___ 2015."', a: '"Since" — because it marks a specific starting POINT in time, not a duration (which would use "for").' },
    { q: 'Identify the conjunction type in "Neither the teacher nor the learners were ready."', a: 'Correlative conjunction ("neither…nor") — a paired conjunction joining two alternatives.' },
  ]),
]);

/* ── 5. Tenses ─────────────────────────────────────────────────────────── */

const TENSES = L('eng-g-tenses', 'Tenses: Forming and Using Them Correctly', 30, [
  h2('Why tense questions matter'),
  p('Tense errors are one of the most commonly tested and most commonly lost marks in Section C/Language in Context. You may be asked to change a sentence to a given tense, or to correct a tense error in a given passage.'),
  h2('Present tenses'),
  table([
    ['Simple present', 'Habitual action or fact. "She walks to school."'],
    ['Present continuous', 'Action happening now, or a temporary ongoing action. "She is walking to school."'],
    ['Present perfect', 'A past action with a present result/relevance, or an action completed at an unspecified time. "She has walked to school." (has + past participle)'],
    ['Present perfect continuous', 'An action that started in the past and is still continuing. "She has been walking to school since January."'],
  ]),
  h2('Past tenses'),
  table([
    ['Simple past', 'A completed action at a specific past time. "She walked to school yesterday."'],
    ['Past continuous', 'An ongoing action in the past, often interrupted by another action. "She was walking to school when it started to rain."'],
    ['Past perfect', 'An action completed before another past action — the "earlier of two pasts". "She had walked to school before the bell rang." (had + past participle)'],
    ['Past perfect continuous', 'An ongoing action in the past that finished before another past event. "She had been walking for ten minutes when the bus passed her."'],
  ]),
  h2('Future tenses'),
  table([
    ['Simple future', 'A prediction or decision about the future. "She will walk to school."'],
    ['Future continuous', 'An ongoing action at a specific future time. "She will be walking to school at eight tomorrow."'],
    ['Future perfect', 'An action that will be completed before a specified future time. "She will have walked ten kilometres by the time she arrives."'],
    ['Future perfect continuous', 'An ongoing action that will have continued up to a point in the future. "By June, she will have been walking to school for a year."'],
  ]),
  acro('SPACE', 'A quick tense-check order when editing a passage', [
    { letter: 'S', stands: 'Spot the time clue', note: 'Words like "yesterday", "since", "by tomorrow" tell you which tense is needed' },
    { letter: 'P', stands: 'Pick the aspect', note: 'Simple (fact), continuous (ongoing), perfect (completed relative to another point), or perfect continuous' },
    { letter: 'A', stands: 'Auxiliary check', note: 'Does the sentence need has/have/had, is/was/will be?' },
    { letter: 'C', stands: 'Correct form of the main verb', note: 'Base form, -ing form, or past participle, matched to the auxiliary used' },
    { letter: 'E', stands: 'Entire sentence stays consistent', note: 'Don’t slip into a different tense partway through the sentence' },
  ]),
  TIP('When asked to rewrite a sentence in a given tense, change ONLY what the tense requires — don’t rewrite the whole sentence, and don’t accidentally change the meaning.'),
  qa([
    { q: 'Rewrite in the past perfect tense: "She finishes her homework before dinner."', a: '"She had finished her homework before dinner."' },
    { q: 'Identify and correct the tense error: "By next year, I will finish the course." (The sentence should express an action completed by a future point.)', a: 'Error: "will finish" should be future perfect, since the action is completed BY a future point in time. Correct: "By next year, I will have finished the course."' },
    { q: 'Explain the difference in meaning between "I have lived here for ten years" and "I lived here for ten years."', a: 'The present perfect ("have lived") shows the action continues into the present — the speaker still lives there. The simple past ("lived") shows a completed period that has ended — the speaker no longer lives there.' },
  ]),
]);

/* ── 6. Voice and reported speech ─────────────────────────────────────── */

const VOICE_SPEECH = L('eng-g-voice-speech', 'Active vs Passive Voice; Direct vs Reported Speech', 25, [
  h2('Active and passive voice'),
  table([
    ['Active voice', 'The subject performs the action. "The dog bit the boy." Direct and usually more natural/concise.'],
    ['Passive voice', 'The subject receives the action; the doer is introduced with "by" or omitted. "The boy was bitten by the dog." / "The boy was bitten."'],
  ]),
  box('Forming the passive: take the object of the active sentence, make it the new subject, use the correct form of "be" + past participle, then add "by + the original subject" (optional).\n\nActive: The committee will announce the results.\nPassive: The results will be announced (by the committee).'),
  ul([
    'Use the passive when the DOER is unknown, unimportant, or deliberately hidden (common in formal/scientific writing and news reports): "The window was broken last night."',
    'Use the active for directness and clarity — most essay writing should default to active voice.',
    'Watch the tense: the passive must keep the SAME tense as the active original, just restructured. "She wrote the letter" (simple past active) → "The letter was written by her" (simple past passive), not "is written" or "has been written".',
  ]),
  h2('Direct and reported (indirect) speech'),
  p('Direct speech quotes the exact words spoken, in speech marks. Reported speech retells what was said, without quotation marks, and usually shifts tense, pronouns and time/place words "back" one step.'),
  table([
    ['Tense shift', 'Present → past, past → past perfect: "I am tired," she said → She said (that) she was tired.'],
    ['Pronoun shift', '"I" and "you" change to match who is reporting: "I will help you," he said to me → He said (that) he would help me.'],
    ['Time/place shift', 'now → then, today → that day, here → there, tomorrow → the next/following day, yesterday → the day before.'],
    ['Modal verb shift', 'will → would, can → could, may → might, must → had to.'],
    ['Questions', 'Reported questions lose the question mark and inversion: "Where are you going?" he asked → He asked where she was going.'],
    ['Commands', 'Reported with an infinitive, introduced by "told/asked + object + to": "Sit down!" she said → She told them to sit down.'],
  ]),
  box('Direct: "I have finished my project," said Thandi. "I will submit it tomorrow."\nReported: Thandi said (that) she had finished her project and that she would submit it the next day.'),
  TIP('No tense shift is needed if the reporting verb is in the present tense ("He says he IS tired") or if the original statement is a general/timeless truth ("She said the earth revolves around the sun").'),
  qa([
    { q: 'Change to the passive voice: "The chef is preparing the meal."', a: '"The meal is being prepared by the chef."' },
    { q: 'Change to reported speech: "I will call you tomorrow," he said to her.', a: 'He said (that) he would call her the next day / the following day.' },
    { q: 'Change to reported speech: "Are you coming to the party?" she asked him.', a: 'She asked him whether/if he was coming to the party.' },
  ]),
]);

/* ── 7. Sentences, clauses and phrases ───────────────────────────────── */

const SENTENCES = L('eng-g-sentences', 'Sentence Types, Clauses and Phrases', 25, [
  h2('The four sentence types'),
  table([
    ['Simple sentence', 'One independent (main) clause only. "The bell rang."'],
    ['Compound sentence', 'Two or more independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon. "The bell rang, and the learners ran outside."'],
    ['Complex sentence', 'One independent clause plus at least one dependent (subordinate) clause. "When the bell rang, the learners ran outside."'],
    ['Compound-complex sentence', 'At least two independent clauses PLUS at least one dependent clause. "When the bell rang, the learners ran outside, and the teachers followed slowly."'],
  ]),
  h2('Clauses'),
  table([
    ['Main (independent) clause', 'Contains a subject and a finite verb and can stand alone as a full sentence.'],
    ['Subordinate (dependent) clause', 'Contains a subject and verb but cannot stand alone — it depends on a main clause for its full meaning.'],
    ['Relative clause', 'A subordinate clause beginning with who/whom/whose/which/that, describing a noun. "The man who called me is my uncle."'],
    ['Noun clause', 'A subordinate clause that functions as a noun (subject, object or complement). "What she said surprised everyone." (subject)'],
    ['Adverbial clause', 'A subordinate clause that functions like an adverb, showing time, place, reason, condition, concession, etc. "Although it was raining, we went outside."'],
  ]),
  h2('Phrases'),
  p('A phrase is a group of related words without both a subject and a finite verb, functioning as a single unit. Example: "in the morning" (prepositional phrase), "running quickly" (participial phrase), "the tall, old oak tree" (noun phrase).'),
  TIP('Don’t confuse a phrase with a clause: a clause always has its own subject and verb; a phrase never has both.'),
  qa([
    { q: 'Identify the sentence type: "Although she was nervous, she walked onto the stage, and the audience cheered."', a: 'Compound-complex — it has two independent clauses ("she walked onto the stage" / "the audience cheered") joined by "and", plus a dependent clause ("Although she was nervous").' },
    { q: 'Identify the clause type of the underlined section: "The book <u>that I borrowed from the library</u> is overdue."', a: 'Relative clause — it begins with "that" and describes the noun "book".' },
    { q: 'Combine into one complex sentence: "The rain started. We had already left the stadium."', a: '"By the time the rain started, we had already left the stadium." (subordinating conjunction "by the time" creates the complex sentence)' },
  ]),
]);

/* ── 8. Concord, agreement and punctuation ───────────────────────────── */

const CONCORD = L('eng-g-concord', 'Subject–Verb Agreement (Concord) and Punctuation', 30, [
  h2('Subject–verb agreement (concord)'),
  p('The verb must agree in number (singular/plural) with its subject — one of the most heavily tested editing skills in Section C.'),
  table([
    ['Basic rule', 'Singular subject → singular verb; plural subject → plural verb. "The dog barks." / "The dogs bark."'],
    ['Collective nouns', 'Usually take a singular verb when acting as one unit: "The team IS playing well." (but plural if members act individually: "The team ARE arguing among themselves.")'],
    ['Compound subjects with "and"', 'Usually take a plural verb: "Tom and Lerato ARE coming."'],
    ['"Each", "every", "either", "neither", "everyone", "nobody"', 'Always take a SINGULAR verb, even when followed by "of + plural": "Each of the learners HAS a book." "Neither of them IS ready."'],
    ['Subjects joined by "or"/"nor"', 'The verb agrees with the subject CLOSEST to it: "Neither the teacher nor the learners WERE ready." "Neither the learners nor the teacher WAS ready."'],
    ['Intervening phrases', 'Ignore words between the subject and verb: "The box of chocolates IS on the table." (subject is "box", not "chocolates")'],
    ['Indefinite pronouns as subjects', '"Everybody", "someone", "anything" are singular: "Everybody IS welcome."'],
  ]),
  h2('Punctuation CAPS commonly tests'),
  table([
    ['Comma', 'Separates items in a list, joins two independent clauses before a coordinating conjunction in a compound sentence, and sets off a non-essential (non-restrictive) clause or introductory phrase: "After the match, we went home."'],
    ['Semicolon', 'Joins two closely related independent clauses WITHOUT a conjunction: "The sky darkened; the rain began." Also separates items in a list when the items themselves contain commas.'],
    ['Colon', 'Introduces a list, an explanation, or a quotation, after a complete independent clause: "She packed three things: a torch, a map and water."'],
    ['Apostrophe (possession)', 'Singular noun: add ’s ("the girl’s book"). Plural noun ending in s: add only ’ ("the girls’ books"). Irregular plural: add ’s ("the children’s toys").'],
    ['Apostrophe (contraction)', 'Marks omitted letters: don’t (do not), it’s (it is/it has). Never confuse "it’s" (contraction) with "its" (possessive pronoun, no apostrophe).'],
    ['Quotation marks', 'Enclose direct speech or a quoted/titled text; punctuation that belongs to the quotation goes inside the closing mark.'],
    ['Hyphen', 'Joins compound modifiers before a noun: "a well-known author", "a five-year-old child".'],
  ]),
  TIP('A classic trap: "its" vs "it’s". "Its" = possessive ("The dog wagged its tail"). "It’s" = "it is"/"it has" ("It’s raining"). Say the full form in your head to check which one you need.'),
  qa([
    { q: 'Correct the concord error: "Each of the students have submitted their assignment."', a: '"Each of the students HAS submitted their assignment." ("Each" always takes a singular verb, regardless of the plural phrase that follows it.)' },
    { q: 'Correct the concord error: "The committee is meeting to discuss their individual concerns, and they are all arguing."', a: 'Since the members are acting individually here, "the committee" should take a plural verb: "The committee ARE meeting to discuss their individual concerns, and they are all arguing."' },
    { q: 'Insert the correct punctuation: "My favourite subjects are English Mathematics and Life Orientation"', a: '"My favourite subjects are English, Mathematics and Life Orientation." (commas separate items in the list)' },
    { q: 'Choose correctly: "The cat chased ___ tail until ___ finally caught ___."', a: '"The cat chased ITS tail until IT finally caught IT." ("its" = possessive, no apostrophe; "it" = the subject pronoun, no apostrophe needed at all in that slot).' },
  ]),
]);

/* ── 9. Ambiguity, bias and cohesion; exam practice ───────────────────── */

const ANALYSIS = L('eng-g-analysis', 'Ambiguity, Bias, Propaganda and Cohesion — Exam Practice', 30, [
  h2('Ambiguity'),
  p('A sentence is ambiguous when it can be reasonably understood in more than one way, usually because of unclear pronoun reference, misplaced modifiers, or missing punctuation.'),
  table([
    ['Unclear pronoun reference', '"When Sarah met Thandi, she was late." (Who was late — Sarah or Thandi? Unclear.)'],
    ['Misplaced modifier', '"I saw a man on the hill with a telescope." (Who has the telescope — the man, or the speaker?)'],
    ['Missing punctuation', '"I invited my parents the teacher and the principal" could mean 3 guests or that the parents ARE the teacher and principal, depending on comma placement.'],
  ]),
  h2('Fact vs opinion'),
  table([
    ['Fact', 'A statement that can be checked/proven true or false. "South Africa has nine provinces."'],
    ['Opinion', 'A personal judgement, belief or preference that cannot be objectively proven. "South Africa is the most beautiful country in the world."'],
  ]),
  p('Look for opinion markers: superlatives ("best", "worst"), value-laden adjectives ("disgraceful", "brilliant"), and verbs like "believe", "feel", "think".'),
  h2('Bias and propaganda techniques'),
  table([
    ['Loaded/emotive language', 'Word choice designed to trigger an emotional reaction rather than state neutral fact. "Freedom fighter" vs "terrorist" for the same person.'],
    ['Bandwagon', 'Suggests you should do/believe something because "everyone else" does. "Join the thousands who already switched."'],
    ['Appeal to authority', 'Uses a trusted or famous figure to endorse a claim, whether or not they are a relevant expert.'],
    ['Appeal to fear', 'Exaggerates a threat to pressure agreement or action.'],
    ['Repetition (slogan)', 'A short phrase repeated often so it is remembered and accepted without question.'],
    ['Card stacking (selective facts)', 'Presents only the facts that support one side, omitting inconvenient information.'],
    ['Name-calling', 'Attaches a negative label to a person/group to discredit them without argument.'],
  ]),
  h2('Register, audience and purpose'),
  p('Every text has a target AUDIENCE and PURPOSE (to inform, persuade, entertain, instruct). Language questions often ask you to judge whether the register suits the stated audience — a children’s pamphlet should not use dense jargon; a formal report should not use slang.'),
  h2('Cohesion and coherence'),
  table([
    ['Cohesion', 'The grammatical/lexical linking BETWEEN sentences and paragraphs — achieved with discourse markers (however, therefore, in addition), pronouns referring back to earlier nouns, and repeated key words.'],
    ['Coherence', 'The overall logical flow of ideas in a text — does it make sense as a whole, with ideas building sensibly from one to the next?'],
  ]),
  box('Common cohesive/discourse markers:\nAdding: furthermore, moreover, in addition\nContrasting: however, nevertheless, on the other hand\nCause/result: therefore, consequently, as a result\nSequence: firstly, subsequently, finally'),
  TIP('When a question asks "how does paragraph 3 link to paragraph 2?", point to the actual linking word or repeated idea — don’t just say "they are related".'),
  h2('Mixed exam-style practice'),
  qa([
    { q: 'Explain why the following sentence is ambiguous: "The manager told the employee he was being promoted."', a: 'The pronoun "he" could refer to either the manager or the employee, so it is unclear who is actually being promoted.' },
    { q: 'Identify whether this is fact or opinion and justify your answer: "Cape Town, with its unmatched natural beauty, receives over a million tourists a year."', a: 'It mixes both: "receives over a million tourists a year" is a checkable fact, while "unmatched natural beauty" is an opinion — a subjective value judgement that cannot be objectively proven.' },
    { q: 'Identify the propaganda technique: "Doctors everywhere recommend this toothpaste."', a: 'Appeal to authority (and implied bandwagon) — it uses the credibility of "doctors" as a group to persuade, without citing a specific, verifiable source.' },
    { q: 'Name the figure of speech AND identify the tense error, then correct it: "The silence screamed at her as she walk away."', a: 'Figure of speech: personification/oxymoron ("silence screamed" gives silence a human/contradictory action). Tense error: "walk" should be "walked" (simple past, to agree with "screamed").' },
    { q: 'Rewrite in reported speech, in the passive voice: The manager said, "We are reviewing the application now."', a: 'The manager said (that) the application was being reviewed then. (Reported speech shifts tense/time; recasting in the passive moves the focus from "we" to "the application".)' },
  ]),
]);

export const ENGLISH_GRAMMAR_CHAPTER: Chapter = {
  id: CH,
  subjectId: 'english',
  title: 'Grammar and Language (Grade 10–11)',
  summary: 'CAPS Language Structures and Conventions: figures of speech, word formation, parts of speech, tenses, voice, reported speech, sentences, concord, punctuation, and bias/cohesion — with exam-style practice throughout.',
  lessons: [FIGURES, WORDS, POS1, POS2, TENSES, VOICE_SPEECH, SENTENCES, CONCORD, ANALYSIS],
};
