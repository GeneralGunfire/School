import type { Chapter } from '@/lib/types';

export const ENGLISH_POETRY_CHAPTER: Chapter = {
  id: 'english-poetry-ch1',
  subjectId: 'english',
  title: 'Poetry',
  summary: 'Eight poems studied for Grade 10 English — context, analysis, and exam preparation.',
  lessons: [

    /* ═══════════════════════════════════════════════════════════════════════
       INTRODUCTION TO POETRY — General Guide
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-intro',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: 'Introduction to Poetry',
      minutes: 15,
      blocks: [
        { id: 'ep-i-h1', type: 'heading', level: 2, text: 'Introduction to Poetry' },
        { id: 'ep-i-p1', type: 'paragraph', text: 'Before we begin analysing poetry, we need to understand the following concepts and vocabulary.' },

        { id: 'ep-i-h2', type: 'heading', level: 3, text: 'Key Concepts' },
        {
          id: 'ep-i-defs',
          type: 'definitions',
          rows: [
            { term: 'Theme and Message', meaning: 'The theme refers to the main idea or the subject of the poem. A poem is usually written about a specific topic or area of interest. The message is the lesson that the poet conveys/communicates to the reader.' },
            { term: 'Intention', meaning: 'The reason the poet has written the poem. What does the poet aim to achieve by writing this poem? The poet may want to express love, to criticise, to protest, to evoke sympathy and/or to express admiration.' },
            { term: 'Style', meaning: 'Style refers to the way the poet expresses himself/herself. The specific traits of the poet that is present in their writing, including the choice of words and language used. It helps to look at the period in which the poem was written to determine the style, e.g. conversational, technical, humorous.' },
            { term: 'Diction', meaning: "The diction refers to the poet's choice of words. Poets carefully select each word to express their thoughts and feelings. The choice of words is closely linked to the poet's intent. Remember to consider the denotative and connotative meaning of the words used." },
            { term: 'Tone', meaning: "The tone refers to the poet's attitude or feelings. It is used to convey his/her emotions and to set the mood of the poem. It is established through the choice of words, the imagery, or the structure of the poem. The tone can vary within a poem, e.g. sarcastic, bitter, joyful, frustrated, melancholic." },
            { term: 'Mood', meaning: "The mood or feeling of a poem refers to the atmosphere created by the poet. It is closely related to the tone of the poem. The mood reflects the speaker's attitude towards his/her subject matter. A sad/melancholic tone would create a depressing mood." },
            { term: 'Point of View', meaning: 'The point of view is the perspective from which we experience the poem. It is important to distinguish between the poet and the speaker. The poet is the author/writer while the speaker is the narrator, the voice telling us the thoughts/feelings/story.' },
            { term: 'Rhythm', meaning: 'The beat created by the sounds of the words in a poem. The varied repetition of the beats creates the rhythm. The function of rhythm is to emphasise words in a poem. It helps to create a specific mood or atmosphere or to convey a particular theme.' },
            { term: 'Meter', meaning: 'Meter refers to the pattern of stressed (strong) and unstressed (weak) syllables. Each unit or part of the pattern is called a \'foot\'. Iambic — unstressed syllable followed by a stressed syllable. Trochaic — stressed syllable followed by an unstressed syllable.' },
            { term: 'Rhyme', meaning: 'Words that sound alike because they share the same ending vowel and consonant sounds. A rhyme scheme refers to a pattern of rhyming words or sounds. End rhyme: words at the end of each line forms a rhyming pattern. Internal rhyme: a word in the middle of the line that rhymes with a word at the end.' },
          ],
        },

        { id: 'ep-i-h3', type: 'heading', level: 3, text: 'Figures of Speech' },
        {
          id: 'ep-i-fos',
          type: 'definitions',
          rows: [
            { term: 'Alliteration', meaning: 'Repetition of the consonant sounds. E.g. "Anthem for doomed youth" — repetition of the "d" sound.' },
            { term: 'Assonance', meaning: 'Repetition of vowel sounds (a, e, i, o, u). E.g. "Only the stuttering rifles\' rapid rattle" — repetition of the "r" sound.' },
            { term: 'Onomatopoeia', meaning: 'Words that imitate the sound that they are naming. E.g. bang, crash, buzz.' },
            { term: 'Simile', meaning: 'Comparison of two things using "like" or "as". E.g. "thou hadst a voice whose sound was like the sea".' },
            { term: 'Metaphor', meaning: 'Direct comparison of two things. E.g. "the falcon cannot hear the falconer" — The poet compares humanity and a falcon to a sense of order that is lost.' },
            { term: 'Extended Metaphor', meaning: 'When the metaphor continues for several lines or the entire stanza. E.g. "The Second Coming" by WB Yeats employs complex imagery and symbols to refer to the political and historical context of the time.' },
            { term: 'Personification', meaning: 'Attributing human or life-like qualities to non-human objects. E.g. The poet claims the "sun" is angry and vigilant. The sun represents the patriarchy.' },
            { term: 'Antithesis', meaning: 'When two contrasting ideas are put together to achieve a desired outcome. E.g. "You are easy on the eyes but hard on the heart."' },
            { term: 'Sarcasm', meaning: 'Sarcasm is created when a speaker makes a statement that clearly indicates the opposite of what they feel or believe. The tone of voice indicates the sarcasm. E.g. "I really love killing animals for food."' },
            { term: 'Irony', meaning: 'The definition of irony as a literary device is a situation in which there is contrast between expectation and reality. The outcome is different than expected.' },
            { term: 'Metonymy', meaning: 'The substitution of one term for another. E.g. "altar, sword and pen, Fireside" is used to symbolize the army, its writers and homes.' },
            { term: 'Hyperbole', meaning: 'An intentional exaggeration or overstatement, often used for emphasis. E.g. "the boy I cannot live without" — She claims that without him she would die.' },
            { term: 'Rhetorical Question', meaning: 'Questions asked not for an answer but to make a point/emphasise an idea. E.g. The poem ends with rhetorical questions aimed at men/patriarchy.' },
            { term: 'Enjambment', meaning: 'The continuation of a sentence or thought, without a pause, beyond the end of one line. E.g. Almost all lines of the poem are enjambed to create a narrative style.' },
            { term: 'Apostrophe', meaning: 'A figure of speech in which a character or speaker addresses someone who is absent. E.g. "Milton! Thou shouldst be living at this hour" — The poet addresses John Milton, a dead poet.' },
            { term: 'Anaphora', meaning: 'The repetition of a word or phrase at the beginning of multiple lines. E.g. "The" at the start of all three lines of stanza three.' },
          ],
        },

        { id: 'ep-i-h4', type: 'heading', level: 3, text: 'Types of Imagery' },
        {
          id: 'ep-i-imagery',
          type: 'definitions',
          rows: [
            { term: 'Visual Imagery', meaning: 'Images that appeal to sight — colours, shapes, light.' },
            { term: 'Olfactory Imagery', meaning: 'Images that appeal to smell.' },
            { term: 'Gustatory Imagery', meaning: 'Images that appeal to taste.' },
            { term: 'Tactile Imagery', meaning: 'Images that appeal to touch — texture, temperature.' },
            { term: 'Auditory Imagery', meaning: 'Images that appeal to hearing — sounds, music, noise.' },
          ],
        },

        { id: 'ep-i-h5', type: 'heading', level: 3, text: 'Positive Tone/Attitude Words' },
        {
          id: 'ep-i-positive',
          type: 'list',
          text: [
            'Amiable, Appreciative, Authoritative, Benevolent, Brave, Calm, Cheerful, Cheery, Compassionate, Complimentary, Confident',
            'Consoling, Content, Dreamy, Ecstatic, Elated, Elevated, Encouraging, Energetic, Enthusiastic, Excited, Exuberant, Fanciful',
            'Friendly, Happy, Hopeful, Impassioned, Jovial, Joyful, Jubilant, Light-hearted, Loving, Optimistic, Passionate, Peaceful',
            'Playful, Pleasant, Proud, Relaxed, Reverent, Romantic, Soothing, Surprised, Sweet, Sympathetic, Vibrant, Whimsical',
          ],
        },

        { id: 'ep-i-h6', type: 'heading', level: 3, text: 'Negative Tone/Attitude Words' },
        {
          id: 'ep-i-negative',
          type: 'list',
          text: [
            'Accusing, Agitated, Apathetic, Belligerent, Childish, Choleric, Condescending, Disappointing, Hurtful, Irritated',
            'Furious, Quarrelsome, Aggravated, Arrogant, Bitter, Coarse, Disgruntled, Harsh, Contradictory, Indignant, Superficial',
            'Desperate, Inflammatory, Critical, Haughty, Disgusted, Cold, Boring, Artificial, Angry, Audacious, Brash',
            'Hateful, Insulting, Condemning, Disinterested, Outraged',
          ],
        },

        { id: 'ep-i-h7', type: 'heading', level: 3, text: 'Neutral Tone/Attitude Words' },
        {
          id: 'ep-i-neutral',
          type: 'list',
          text: [
            'Reflective, Baffled, Clinical, Detached, Dramatic, Fervent, Matter-of-fact, Informative, Intimate',
            'Allusive, Sincere, Consoling, Didactic, Earnest, Formal, Historic, Inquisitive, Serious',
            'Reminiscent, Candid, Contemplative, Meditative, Expectant, Forthright, Humble, Learned, Resigned',
            'Restrained, Ceremonious, Nostalgic, Factual, Objective, Pleading, Questioning',
          ],
        },

        { id: 'ep-i-h8', type: 'heading', level: 3, text: 'Language to Write About Poetry' },
        {
          id: 'ep-i-lang',
          type: 'definitions',
          rows: [
            { term: 'Evokes', meaning: 'To call up a memory or a feeling about something. E.g. "The word evokes a sense of freedom."' },
            { term: 'Alludes to', meaning: 'Makes reference to/hints at. E.g. "The sound alludes to running water."' },
            { term: 'Elicits', meaning: 'To give rise to; to call forth. E.g. "The comparison elicits our sympathies."' },
            { term: 'Suggests', meaning: 'Put forward for consideration. E.g. "The image suggests the passing of time."' },
            { term: 'Has connotations of', meaning: 'Is associated with. E.g. "The word has connotations of defiance."' },
            { term: 'Conveys', meaning: 'Carries (a meaning of...). E.g. "The simile conveys a sense of generosity."' },
            { term: 'Implies', meaning: 'Suggests, but does not state obviously. E.g. "The metaphor implies a life of suffering and hardship."' },
          ],
        },

        { id: 'ep-i-h9', type: 'heading', level: 3, text: 'How to Read a Poem' },
        {
          id: 'ep-i-read',
          type: 'callout',
          text: 'Getting started: Read the poem silently. Read it several times to improve your understanding. Where possible, read the poem aloud to yourself and to someone else. What are your first impressions of the poem? How does it make you feel? What sort of poem is it? (ballad, epic, free verse, lyric, narrative poem, elegy or a sonnet?)',
        },
        {
          id: 'ep-i-deeper',
          type: 'list',
          text: [
            'Does the poem use rhyme? Does the rhyme form a pattern? What is it? What is the effect?',
            'Does the poem have a rhythm (regular beat)? Try to describe it and explain its effect.',
            'Is the poem written in free verse (with no set rhythm)? What is the effect?',
            'Does the poem have a particular shape or unusual layout? Why do you think the poet has done this?',
            'Is the poem concerned with giving a description of people, things, events or thoughts?',
            'What are they? Does the poem tell a story? Give an outline.',
            'Is the poem funny or serious? Explain how and why.',
            'Is the poem warm and generous or savage and cutting or somewhere in between?',
          ],
        },

        { id: 'ep-i-h10', type: 'heading', level: 3, text: 'How to Analyse a Poem' },
        {
          id: 'ep-i-analyse',
          type: 'list',
          text: [
            'Title of the Poem: Look at the title. The poet may have spent a lot of time thinking about naming the piece. What can be observed from this and what further questions can be asked?',
            'Literal Meaning: Pay heed to the vocabulary used. Make a list of unknown words and phrases. Check the meaning of words — some text may have had a different meaning a century ago.',
            'Structure: What does each stanza discuss? How do the stanzas relate to each other? What logical sense does it have? Is there emotional sense that can be evaluated? Does having a strict format say anything about the poet?',
            'Speaker: Look at the persona/speaker and see what details can be obtained. Is there some race or religious references to pick up on?',
            'Recipient: Who or what is the poem designed for? What does the poet want from the reader?',
            'Purpose: Identify the purpose — as this usually will be what the poet is describing. Then the theme can be identified also.',
            'Language and Imagery: Analyse the literal information available, which is the denotative meaning. Then analyse the imagery, symbolism, and figures of speech to find the connotative meaning.',
            'Symbols: Look for pictures described within the text. Analyse why they have been depicted. Also look for groups of images.',
            'Poetic Devices: Look for techniques like metaphors, similes, personification, and alliteration. Identify the actual devices used and why it was chosen.',
            'Music of the Poem: Consider meter, rhythm, special effects, rhyme, sound effects, and whether the poet breaks any rules (unconventional style).',
          ],
        },

        { id: 'ep-i-h11', type: 'heading', level: 3, text: 'Poetry Essay Checklist' },
        {
          id: 'ep-i-checklist',
          type: 'list',
          text: [
            '1. Do I understand the question? Have I unpacked the question? Underline keywords, instructional verbs.',
            '2. Does the title link to the question?',
            '3. Have I touched on: Structure, Diction, Imagery, Rhythm, Tone?',
            '4. Did I present a critical discussion?',
            '5. Has my conclusion addressed the question?',
            '6. Did I write in the third person?',
            '7. Did I write in the present tense?',
            '8. Do I have logical flowing paragraphs?',
            '9. Are my arguments supported from the poem?',
            '10. Did I retell the poem? (merely a paraphrase = bad)',
            '11. Did I stick to the word count?',
          ],
        },

        { id: 'ep-i-h12', type: 'heading', level: 3, text: 'Essay Layout' },
        {
          id: 'ep-i-essay',
          type: 'list',
          text: [
            'INTRODUCTION: Begin with an introductory paragraph. Write two or three sentences on the issues raised in the question and link these issues to an overview of the poem.',
            'BODY: You must use PARAGRAPHS. The body is an analysis of the poem, from the perspective of the issues raised in the question. This is where you use the diction, tone, structure and imagery to show how the poet\'s message is conveyed. This will be more than one paragraph.',
            'DICTION: Refers to the poet\'s choice of words. You have to explain WHY the speaker chose to use THESE PARTICULAR WORDS in the poem. The exact meaning depends on the context. Quote the words from the poem in your analysis.',
            'TONE: Refers to the language used by the speaker or writer to instigate an emotional effect on the reader or listener. The writer must bear in mind that the writer is in a certain frame of mind while writing, and this has an influence on the choice of language and vocabulary (DICTION) that is used.',
            'STRUCTURE: Refers to how the poem is presented on paper and it includes form. Structure can influence meaning, central ideas and rhythm.',
            'IMAGERY: Means to use figurative language to represent objects, actions and ideas in such a way that it appeals to our physical senses.',
            'CONCLUSION: Two to three sentences summarising your analysis. Your essay must have a central idea (thesis) that governs its development.',
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 1: Shall I Compare Thee to a Summer's Day? — Shakespeare
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-sonnet18',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: "Sonnet 18 — Shall I Compare Thee to a Summer's Day?",
      minutes: 25,
      blocks: [
        { id: 'ep-s18-h1', type: 'heading', level: 2, text: "Shall I compare thee to a summer's day?" },
        { id: 'ep-s18-author', type: 'callout', text: 'by William Shakespeare' },

        /* --- Context & Background --- */
        { id: 'ep-s18-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-s18-bio',
          type: 'paragraph',
          text: "William Shakespeare (1564–1616) is an English poet and playwright. Although he is regarded as the most important writer of English literature, not much is known about Shakespeare's personal life. He married Anne Hathaway and moved from his birthplace to London, where he wrote 35 plays, many of which are believed to be the finest achievements of the English language. He also wrote 154 sonnets. The first 126 were dedicated to a young man called W. H. (suspected to be the third earl of Southampton) and the rest to a mysterious woman who has become known as 'the dark lady.'",
        },

        { id: 'ep-s18-h-intro', type: 'heading', level: 3, text: 'Introduction' },
        {
          id: 'ep-s18-intro',
          type: 'paragraph',
          text: "Shakespeare's sonnets explore topics such as the nature of love, sexual passion, birth, death and time. In this particular sonnet, the speaker compares his beloved to a summer's day, giving different reasons why he is more beautiful than the day. His beauty can be preserved for all time because it is protected by the poem, which time cannot erase.",
        },

        { id: 'ep-s18-h-struct', type: 'heading', level: 3, text: 'Structure' },
        {
          id: 'ep-s18-struct',
          type: 'list',
          text: [
            'Sonnet 18 is a typical English or Shakespearean sonnet, having lines of iambic pentameter.',
            'The characteristic rhyme scheme: ABAB CDCD EFEF GG.',
            'Three quatrains followed by a couplet.',
            "The rhetorical tradition of an Italian or Petrarchan Sonnet: Petrarchan sonnets typically discussed the love and beauty of a beloved, often an unattainable love, but not always.",
            "A volta or shift in the poem's subject matter, beginning with the third quatrain.",
          ],
        },

        { id: 'ep-s18-tip-struct', type: 'callout', text: 'Exam Tip: Always mention the Shakespearean sonnet structure (3 quatrains + couplet, ABAB CDCD EFEF GG, iambic pentameter) and the volta at line 9 when answering structure questions on this poem.' },

        { id: 'ep-s18-h-sum', type: 'heading', level: 3, text: 'Summary' },
        {
          id: 'ep-s18-sum',
          type: 'paragraph',
          text: "The speaker begins by asking whether he should or will compare 'thee' to a summer's day. He then runs off a list of reasons why the comparison is inappropriate: summer is not all that great — winds shake the buds that emerged in Spring, summer ends too quickly, and the sun can get too hot or be hidden by clouds. He argues that everything beautiful eventually fades by chance or by nature's inevitable changes; however, his beloved's summer (happy, beautiful years) will never fade away. Moreover, death will never be able to take the beloved since the beloved exists through the eternal aspect of poetry.",
        },

        { id: 'ep-s18-h-themes', type: 'heading', level: 3, text: 'Themes' },
        {
          id: 'ep-s18-themes',
          type: 'list',
          text: [
            'Love, beauty, time, the eternal nature of poetry — His beloved\'s beauty will never fade because he is putting it into verse which will last forever.',
          ],
        },

        { id: 'ep-s18-h-tone', type: 'heading', level: 3, text: 'Tone' },
        {
          id: 'ep-s18-tone',
          type: 'paragraph',
          text: 'Endearing; deep devotion; adoration.',
        },

        { id: 'ep-s18-h-devices', type: 'heading', level: 3, text: 'Literary Devices' },
        {
          id: 'ep-s18-devices',
          type: 'definitions',
          rows: [
            { term: 'Extended Metaphor', meaning: "The entire poem is an extended metaphor comparing the beloved to a summer's day." },
            { term: 'Personification', meaning: '"Rough winds do shake the darling buds of May" — summer is personified as if renting a property (summer\'s lease). "Nor shall death brag" — death is personified as a figure who wanders in the shade, transcending all living creatures.' },
            { term: 'Rhetorical Question', meaning: "The opening line \"Shall I compare thee to a summer's day?\" draws the reader in immediately." },
            { term: 'Iambic Pentameter', meaning: 'Read the first two lines out loud. Notice how they are kind of bouncy? That\'s the iambic feet: "Shall I compare thee to a summer\'s day." The pronoun "I" is a stressed syllable in the first line, but the pronoun "Thou" is unstressed in the second line.' },
            { term: 'Repetition', meaning: "The concluding couplet has a repetition of the words, \"So long as\" to emphasise that the subject will remain constant as long as the poem exists." },
          ],
        },

        /* --- The Poem --- */
        { id: 'ep-s18-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-s18-poem',
          type: 'poem',
          lines: [
            { n: 1, text: "Shall I compare thee to a summer's day?", note: "The speaker starts by asking a rhetorical question as he attempts to compare his lover to a summer's day. Instead of ruminating on that, he tells the object of his affection why he thinks so.", devices: ['Rhetorical question'] },
            { n: 2, text: 'Thou art more lovely and more temperate:', note: "Summer is historically regarded as the best and most beautiful time possible, especially the colder parts of Europe. The image that the lover is 'more lovely and more temperate' is then surpassed by his lover. 'Lovely' is still quite commonly used in England and carries the same meaning (attractive, nice, beautiful), while 'temperate' in Shakespeare's time meant gentle-natured, restrained, moderate and composed. The second line refers directly to the lover with the second-person pronoun 'Thou'.", devices: ['Contrast'] },
            { n: 3, text: 'Rough winds do shake the darling buds of May,', note: "From lines 2-4 the speaker offers a series of reasons why the comparison is inappropriate. Winds blow, rainclouds gather and before you know where you are, summer is all too short. The 'rough winds' personify nature's harsh, unpredictable side.", devices: ['Personification', 'Alliteration'] },
            { n: 4, text: "And summer's lease hath all too short a date;", note: "Summer is personified as if it takes out a lease with nature, which has a defined expiration date that is too short for his case. Here, summer is personified as a lease — it is renting a property while the weather is fine, highlighting a shortness and impermanence.", devices: ['Metaphor', 'Personification'] },
            { n: 5, text: 'Sometime too hot the eye of heaven shines,', note: "Shakespeare personifies the sun, calling it 'the eye of heaven' with 'his gold complexion dimm'd' — the sun's complexion is dimmed in comparison to the beloved's. Giving the sun a human quality begins to diminish what we normally consider powerful and untouchable.", devices: ['Personification', 'Metaphor'] },
            { n: 6, text: "And often is his gold complexion dimm'd;", note: "Personification of nature — the speaker claims that by clouds, one cannot even see the sun at all (hidden, assumingly by clouds). He calls the sun 'his', and gives it a 'complexion', which generally refers to the colour of one's skin. This helps introduce Shakespeare's theme of lasting beauty.", devices: ['Personification'] },
            { n: 7, text: 'And every fair from fair sometime declines,', note: "The speaker gets even broader in his philosophy, declaring that everything beautiful eventually will fade away and lose its charm, either by chance or by the natural flow of time. This reinforces the ephemerality of beauty in contrast to the eternal beauty of his beloved.", devices: ['Philosophical tone'] },
            { n: 8, text: "By chance, or nature's changing course untrimm'd;", note: "'Untrimm'd' is also a term from sailing, as you 'trim' or adjust the sails to take advantage of the wind. This gives 'untrimm'd' a conjoined opposite: instead of 'made', it means 'unchanged in face of nature's natural changes'. With these lines, the speaker declares that everything beautiful must eventually lose its charm, either by chance or by the natural flow of time.", devices: ['Metaphor'] },
            { n: 9, text: 'But thy eternal summer shall not fade,', note: "The conjunction 'But' shows a turn at the start of line 9, his beloved's summer will not fade. The 'turn', or volta, of the poem occurs in the 9th line of a sonnet as the poem enters its latter phase. The latter part of the poem is marked by a more expansive tone and exploring deeper feelings. The beloved has become the very standard of beauty, ensuring that his beloved will last forever; saved from the oblivion that accompanies death.", devices: ['Volta'] },
            { n: 10, text: 'Nor lose possession of that fair thou ow\'st;', note: "Moving on from summer and the limitations inherent in nature, the speaker pronounces that the beloved he is speaking to will not lose their beauty. The 'eternal summer' that the subject of the poem is chosen is not subject to all of these traits. The hyperbole helps strengthen the idea that an 'eternal summer' will never be lost.", devices: ['Hyperbole'] },
            { n: 11, text: "Nor shall death brag thou wander'st in his shade,", note: "Personification: the speaker introduces death. Here, the poet portrays death as a figure who wanders in the shade. The act of equating death to a human being shows that his beloved transcends all living creatures and even acts of nature. The beloved is the ideal figure not only in the poet's eyes but also in others who will eventually read this poem.", devices: ['Personification'] },
            { n: 12, text: 'When in eternal lines to time thou grow\'st:', note: "The beloved's beauty is preserved through poetry. 'Eternal lines' refers to the lines of the poem that ensure the beloved will 'grow' in time rather than diminish.", devices: ['Metaphor'] },
            { n: 13, text: 'So long as men can breathe or eyes can see,', note: "The concluding couplet has a repetition of the words 'So long as' to emphasise that both ideas are equally important. The couplet, in the end, is a fuller admission of what the speaker points toward in line 12. An instrumental part of making this poem work is that the poet reveals his ability, as a poet, to eternise words. The poet is saying that his beloved's beauty will last as long as this poem exists.", devices: ['Repetition', 'Parallel structure'] },
            { n: 14, text: 'So long lives this, and this gives life to thee.', note: "While the poet is saying that his beloved's beauty will be eternal, in these last two lines, there seems to be a charge expressing great sentiment about his beloved. But in these last two lines, there is ultimately show that the poet is well aware of his skill. Overall, the use of imagery, form, and figurative language allows the poet to skillfully get his message across: that his beloved's beauty exceeds that of a summer's day. Shakespeare's methods also secure the everlasting nature of his poem.", devices: ['Conclusion', 'Self-referential'] },
          ],
        },

        /* --- Analysis & Glossary --- */
        { id: 'ep-s18-h-gloss', type: 'heading', level: 3, text: 'Glossary' },
        {
          id: 'ep-s18-gloss',
          type: 'definitions',
          rows: [
            { term: 'Temperate', meaning: 'Calm and collected' },
            { term: 'Darling buds of May', meaning: 'Refers to the new buds that appear in May during the English Spring time' },
            { term: 'Lease', meaning: 'It suggests that summer appears to a contract (a lease) that the colour and appearance of the skin on a person\'s face becomes less or worse' },
            { term: 'Complexion', meaning: 'The colour when Autumn appears' },
            { term: "Untrimm'd", meaning: "A shortening of the word 'untrimmed', which means not cut" },
            { term: "Ow'st", meaning: "A shortening of the word 'owest', meaning to have to show something or offer something" },
          ],
        },

        { id: 'ep-s18-tip-volta', type: 'callout', text: 'Exam Tip: The volta (turn) at line 9 is a favourite exam question. Remember that "But" signals the shift from listing summer\'s flaws to declaring the beloved\'s eternal beauty. The tone changes from comparative to triumphant and assertive. Always mention the volta when discussing how the message develops.' },

        /* --- Questions --- */
        { id: 'ep-s18-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-s18-q',
          type: 'questions',
          qa: [
            { q: "What is the mood and tone of Shakespeare's Sonnet 18?", marks: 2, a: "The mood is romantic and admiring. The tone is one of deep devotion and adoration, as the speaker expresses his love and commitment to preserving the beloved's beauty." },
            { q: 'Explain the effectiveness of the personification of nature in lines 3 and 4.', marks: 3, a: "Shakespeare personifies summer by giving it a 'lease' (line 4), suggesting it is temporary, like renting a property. The 'rough winds' in line 3 are given the human ability to 'shake' the buds. This personification emphasises the impermanence and unpredictability of nature, in contrast to the beloved's eternal beauty." },
            { q: 'In line 7 of Sonnet 18, what does the speaker emphasise by using alliteration?', marks: 2, a: "The alliteration of 'fair from fair' emphasises the idea that all beautiful things will eventually lose their beauty. The repetition of the 'f' sound draws attention to the concept of decline and fading." },
            { q: "Why does Shakespeare compare his beloved to a summer's day?", marks: 2, a: "Shakespeare compares his beloved to a summer's day because summer is traditionally seen as the most beautiful season. However, the comparison ultimately shows that the beloved surpasses summer — being more lovely and more constant." },
            { q: 'How does Shakespeare\'s use of the image "the eye of heaven" in Sonnet 18 refer not only to the sun, but convey something apart from the sun?', marks: 3, a: "The 'eye of heaven' personifies the sun as a watchful, almost divine entity. However, even this powerful force can be 'dimmed' by clouds, showing that even the most glorious aspects of nature are imperfect and temporary — unlike the beloved's beauty which is preserved in verse." },
            { q: 'What does the speaker mean by "eternal lines to time" (line 12)?', marks: 2, a: "The 'eternal lines' refer to the lines of the poem itself. The speaker is saying that through poetry, the beloved will grow in time rather than fade. The poem becomes a vehicle for immortality." },
            { q: 'In Sonnet 18, how does the message shift in line 9?', marks: 2, a: "Line 9 marks the volta (turn) of the sonnet. The conjunction 'But' signals a dramatic shift from listing summer's flaws to declaring that the beloved's beauty will never fade. The tone changes from comparative to triumphant and assertive." },
            { q: 'Comment on the personification of death in line 11.', marks: 3, a: "Death is personified as a boastful figure who 'brags' and has a 'shade' (shadow/darkness). The speaker declares that death will never be able to claim the beloved, because the beloved will live on through the poem. This personification diminishes death's power and elevates the immortalising power of poetry." },
          ],
        },

        { id: 'ep-s18-h-essay', type: 'heading', level: 3, text: 'Essay Question' },
        {
          id: 'ep-s18-essay',
          type: 'callout',
          text: "In this poem Shakespeare compares his beloved to a summer's day. With close reference to the poem, write an essay of 150-200 words to discuss the effective use of imagery (e.g. simile, personification, metaphor, alliteration etc.), diction and tone by the poet to convey this idea. [10]",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 2: Caged Bird — Maya Angelou
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-cagedbird',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: 'Caged Bird — Maya Angelou',
      minutes: 28,
      blocks: [
        { id: 'ep-cb-h1', type: 'heading', level: 2, text: 'Caged Bird' },
        { id: 'ep-cb-author', type: 'callout', text: 'by Maya Angelou' },

        /* --- Context & Background --- */
        { id: 'ep-cb-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-cb-bio',
          type: 'paragraph',
          text: "Maya Angelou (1928–2014) is an African American poet, author, dancer, singer, film producer, activist and feminist. She was most famous for her autobiography also titled 'I Know Why the Caged Bird Sings', which tells the story of her tough working-class background. She won many awards during her lifetime and was Professor of American studies in North Carolina.",
        },

        { id: 'ep-cb-h-intro', type: 'heading', level: 3, text: 'Introduction' },
        {
          id: 'ep-cb-intro',
          type: 'paragraph',
          text: "This poem compares the different experiences of a free bird and a caged bird. The poet highlights why it is that the caged bird sings: it is all it can do to taste freedom. (Metaphorically, the bird represents those who are imprisoned, or oppressed in some way (caged) by a social/political system, versus those who enjoy privilege, opportunities and autonomy (who are free).) One interpretation links the poem to the civil rights movement in America, where activists campaigned for justice and equality for Black people. The contrasting circumstances depicted could also relate to gender inequality, or any other situation where one group is empowered and the other is oppressed in some way.",
        },
        {
          id: 'ep-cb-intro2',
          type: 'paragraph',
          text: "This poem is an allegory — as well as literal meanings, it has deeper, symbolic meanings. The contrast between the lives of the caged bird and the free bird is an extended metaphor in which characters, events, settings or objects have symbolic as well as literal meanings. The contrast between the lives of African Americans and their white counterparts. The caged bird lives trapped, in a small space, tied down and mutilated (with his clipped wings) to prevent him from ever leaving. He dreams of freedom and the free bird takes this for granted.",
        },

        { id: 'ep-cb-tip-allegory', type: 'callout', text: 'Exam Tip: Always identify this poem as an allegory and extended metaphor. The free bird = privilege/white experience; the caged bird = oppression/Black experience. This dual reading (literal bird story + deeper social commentary) is essential for earning full marks on any contextual question.' },

        { id: 'ep-cb-h-struct', type: 'heading', level: 3, text: 'Structure' },
        {
          id: 'ep-cb-struct',
          type: 'list',
          text: [
            'Caged Bird is a six-stanza poem that is separated into stanzas that vary in length.',
            "Angelou chose to write the poem in free verse. This means that there is no single rhyme scheme or metrical pattern that unites all the lines, but there is iambic meter. This adds to the overall musicality of the poem.",
            "Iambs are also generally referred to as 'rising' because it is particularly apt because it plays to the content of the caged bird and the free bird, and reinforces the idea of singing.",
            'The repeated words, phrases and structures, and the refrain (stanzas three and six) contribute to this musical, lyrical quality.',
          ],
        },

        { id: 'ep-cb-h-title', type: 'heading', level: 3, text: 'Title' },
        {
          id: 'ep-cb-title',
          type: 'list',
          text: [
            'The bird represents the African American whose freedom, or the desire to be free, is taken away.',
            'The cage symbolises the oppression of segregation or the confinement of oppression.',
            'Caged (symbolically caged) — it indicates wings and restrictions.',
            'Bird (symbol) — a creature that has wings and is meant to fly, the fact that it can fly is indicative of freedom.',
            'Caged is thus a contradiction with the original freedom of a wild bird.',
            'Deeper meaning — An image of restriction is created.',
          ],
        },

        { id: 'ep-cb-h-themes', type: 'heading', level: 3, text: 'Themes' },
        {
          id: 'ep-cb-themes',
          type: 'list',
          text: [
            'It should be seen in a universal context as well.',
            "The poem contrasts the caged bird's pain and need for freedom. Think about the slave trade currently.",
            "The bird represents people in the actual world who are restricted/oppressed/discriminated against regardless of who they are.",
            "The bars of the cage represent the things that keep people from doing what they wish.",
            "This poem also speaks about the hope that people have and that the human spirit is much stronger than any oppression. The speaker wants people to see and hear the difference between the free bird and the caged bird.",
            "Lastly the speaker wants the reader to take home the idea that people with similar experiences may feel the same way, like a caged bird, who is not free, but has hope within them.",
          ],
        },

        /* --- The Poem --- */
        { id: 'ep-cb-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-cb-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'A free bird leaps', note: 'The free bird is described in terms of freedom and joy', devices: [] },
            { n: 2, text: 'on the back of the wind', note: '', devices: ['Metaphor'] },
            { n: 3, text: 'and floats downstream', note: 'Free-flowing, carefree lifestyle', devices: [] },
            { n: 4, text: 'till the current ends', note: '', devices: [] },
            { n: 5, text: 'and dips his wing', note: '', devices: [] },
            { n: 6, text: 'in the orange sun rays', note: '', devices: [] },
            { n: 7, text: 'and dares to claim the sky.', note: "The free bird has the right to 'claim the sky' — it owns its freedom", devices: ['Personification'] },
            { n: 8, text: 'But a bird that stalks', note: "'But' contrasts sharply with the first stanza", devices: ['Contrast'] },
            { n: 9, text: 'down his narrow cage', note: 'Confined space — restriction', devices: ['Imagery'] },
            { n: 10, text: 'can seldom see through', note: '', devices: [] },
            { n: 11, text: 'his bars of rage', note: "The 'bars of rage' represent anger and frustration", devices: ['Metaphor'] },
            { n: 12, text: 'his wings are clipped and', note: 'Physical mutilation — wings cut to prevent flight', devices: ['Imagery'] },
            { n: 13, text: 'his feet are tied', note: 'Further physical restraint', devices: [] },
            { n: 14, text: 'so he opens his throat to sing.', note: 'Singing is the only freedom left — the only act of resistance', devices: ['Irony'] },
            { n: 15, text: 'The caged bird sings', note: '', devices: [] },
            { n: 16, text: 'with a fearful trill', note: "'Fearful trill' — quavering sound, adds to the musical quality", devices: ['Onomatopoeia'] },
            { n: 17, text: 'of things unknown', note: 'The caged bird sings of freedom it has never experienced', devices: [] },
            { n: 18, text: 'but longed for still', note: '', devices: [] },
            { n: 19, text: 'and his tune is heard', note: '', devices: [] },
            { n: 20, text: 'on the distant hill', note: "'Heard on the distant hill' — the cry for freedom is heard far away but still distant", devices: [] },
            { n: 21, text: 'for the caged bird', note: '', devices: [] },
            { n: 22, text: 'sings of freedom.', note: 'The refrain — chorus of the poem', devices: ['Refrain'] },
            { n: 23, text: 'The free bird thinks of another breeze', note: "The free bird is lazy and would rather float on the wind instead of making its own path", devices: [] },
            { n: 24, text: 'and the trade winds soft through the sighing trees', note: "'Sighing trees' — personification", devices: ['Personification'] },
            { n: 25, text: 'and the fat worms waiting on a dawn bright lawn', note: 'The free bird has easy access to food — privilege', devices: ['Alliteration'] },
            { n: 26, text: 'and he names the sky his own', note: "The bird 'names' the sky — claims ownership", devices: ['Personification'] },
            { n: 27, text: 'But a caged bird stands on the grave of dreams', note: "'Grave of dreams' — powerful metaphor; the cage has become a graveyard where all hopes die", devices: ['Metaphor'] },
            { n: 28, text: 'his shadow shouts on a nightmare scream', note: "Even the bird's shadow is affected — 'shouts' and 'nightmare scream' convey extreme desperation", devices: ['Personification', 'Hyperbole'] },
            { n: 29, text: 'his wings are clipped and his feet are tied', note: 'Repetition from stanza 2 — reinforces the physical restraint', devices: ['Repetition'] },
            { n: 30, text: 'so he opens his throat to sing.', note: 'Despite everything, the bird still sings — resilience', devices: [] },
            { n: 31, text: 'The caged bird sings', note: '', devices: [] },
            { n: 32, text: 'with a fearful trill', note: '', devices: [] },
            { n: 33, text: 'of things unknown', note: '', devices: [] },
            { n: 34, text: 'but longed for still', note: '', devices: [] },
            { n: 35, text: 'and his tune is heard', note: '', devices: [] },
            { n: 36, text: 'on the distant hill', note: '', devices: [] },
            { n: 37, text: 'for the caged bird', note: '', devices: [] },
            { n: 38, text: 'sings of freedom.', note: 'Repetition of the refrain — the final stanza is identical to stanza 3, carrying the central message like a chorus', devices: ['Refrain', 'Repetition'] },
          ],
        },

        /* --- Stanza-by-Stanza Analysis --- */
        { id: 'ep-cb-h-s1', type: 'heading', level: 3, text: 'Stanza 1 Analysis' },
        {
          id: 'ep-cb-s1',
          type: 'paragraph',
          text: "In the first stanza, the poet refers to nature. She describes how a free bird leaps on the back of the wind, and the freedom it has, to go anywhere, whenever. It could 'claim the sky' because it is free. She describes the bird's flight against the orange sky. The way she describes the 'orange sun rays' gives the reader an appreciation for the natural beauty of the sky, and her description of how the bird 'dips his wing' helps the reader to appreciate the bird in his natural habitat enjoying his freedom. The stanza implies that the free bird is lazy and would rather float on the wind instead of making its own path. It is able to go wherever it pleases, demonstrating its easy-going, carefree lifestyle. The first stanza as a whole also introduces the free-flowing nature of the poem, which lacks a concrete rhyme scheme. This technique reflects the lack of restrictions faced by the free bird. Also, the combined use of assonance and consonance allows sounds to flow on one after another, further contributing to this bird's sense of unrestricted ease.",
        },

        { id: 'ep-cb-h-s2', type: 'heading', level: 3, text: 'Stanza 2 Analysis' },
        {
          id: 'ep-cb-s2',
          type: 'paragraph',
          text: "Introduces the limitations set upon the caged bird and how it affects the bird. It is still proud and calls out for freedom. This stanza of 'Caged Bird' contrasts sharply with the first. By using the word 'but' to begin this stanza, the speaker prepares the reader for this contrast. Then she describes the 'bird that stalks his narrow cage.' The tone is immediately and drastically changed from peaceful, satisfied, and joyful to one that is dark, unnerving, and even frustrating. She describes that this caged bird 'can seldom see through his bars of rage.' While the free bird enjoys the full sky, the caged bird rarely even gets a glimpse of the sky. The speaker then reveals that these are the very reasons the bird 'opens his throat to sing.'",
        },

        { id: 'ep-cb-h-s3', type: 'heading', level: 3, text: 'Stanza 3 Analysis (Refrain)' },
        {
          id: 'ep-cb-s3',
          type: 'paragraph',
          text: "Emphasises the caged bird and its plight. The stanza relates how the caged bird sings for freedom — as if it still has hope for things, it does not know of. The caged bird 'can be heard on the distant hill.' The bird is shown to be restrained against all that holds it back in an attempt to be freed. The third stanza reverts to the free bird, further cementing the difference between the free bird and the caged bird in the readers' minds. She writes that a free bird thinks of another breeze — the tone with which she writes the first and third stanzas so sharply contrasts with the second stanza that readers can feel the difference. The first and third stanzas seem and feel more droll and even oppressive.",
        },

        { id: 'ep-cb-h-s4', type: 'heading', level: 3, text: 'Stanza 4 Analysis' },
        {
          id: 'ep-cb-s4',
          type: 'paragraph',
          text: "The free bird — again. The free bird 'thinks of another breeze' showing that although it is free, the bird is greedy to have even more freedom. It is again implied to be lazy in that it is not content and is dissatisfied with the stream of wind that it is on, but not enough to do something about it. The stanza then describes how even things seem to come to the free bird as there are worms waiting for it at dawn on the lawn. The fourth stanza of 'Caged Bird' continues the parallel between the free bird and the caged bird. The first line serves to starkly contrast the two in the third stanza. It is dark and daunting. The reality of the life of the caged bird is revealed.",
        },

        { id: 'ep-cb-h-s5', type: 'heading', level: 3, text: 'Stanza 5 Analysis' },
        {
          id: 'ep-cb-s5',
          type: 'paragraph',
          text: "The bird is in its cage. The cage has become the 'grave of dreams.' The bird 'stands on the grave of dreams.' This reveals the author's feelings about freedom. She has so many dreams that have died because she was never given the freedom to achieve, and although all her white counterparts could, discrimination and racism made up by those nearest her cage, and although she sang, she felt her voice was not heard in the wide world but only as a distant noise. She still longed for freedom. The second line of this stanza is not only dark but even frightening. The speaker describes the bird's cries as 'shouts on nightmare scream.' At this point, the caged bird is so despondent in his life of captivity that his screams are like that of someone having a nightmare. The author repeats these lines: his wings are clipped.",
        },

        { id: 'ep-cb-h-s6', type: 'heading', level: 3, text: 'Stanza 6 Analysis' },
        {
          id: 'ep-cb-s6',
          type: 'paragraph',
          text: "Repetition of stanza 3 emphasises the frustrated caged bird and the fact that the bird's song is feared and respected. Reaffirming the idea that the bird opens his mouth to sing because his desire for freedom and his desire to express himself cannot be contained. This last stanza focuses on the caged bird yet again. The author implies that even though the caged bird may have never experienced true freedom, deep down, that bird still knows it was created to be free. Although 'freedom,' to the caged bird, is 'fearful' because it is 'unknown,' he still sings. Here, the speaker reveals that his cry for freedom is 'heard only as a distant noise.' She feels her cries are heard only as soft background noise. Her cries for freedom in the form of equality. She feels that although she sings, the caged bird may never have experienced freedom. This is paralleled to the African American struggle in Maya Angelou's time.",
        },

        { id: 'ep-cb-h-dev', type: 'heading', level: 3, text: 'Literary Devices' },
        {
          id: 'ep-cb-dev',
          type: 'definitions',
          rows: [
            { term: 'Enjambment', meaning: 'Appears when a poet cuts off a sentence or phrase with a line break before its natural stopping point. For example, the transition between lines one and two of the first stanza, and lines three and four of the second stanza.' },
            { term: 'Repetition', meaning: "Is seen throughout the poem but most prominently in the structure of the stanzas, in which the poet repeats the entire third stanza. The continual reference to the 'free bird' and 'caged bird.' One of the best examples is seen in the sixth stanza, in which the caged bird symbolises the confined and oppressed African American community in the United States." },
            { term: 'Symbolism', meaning: "The caged bird symbolises the confined and oppressed. The free bird symbolises privilege and freedom." },
            { term: 'Irony', meaning: "Occurs when an outcome is different than expected. For example, it is ironic that the free bird isn't singing, but the caged bird is." },
            { term: 'Alliteration', meaning: "Angelou makes use of several literary devices in 'Caged Bird.' Alliteration: 'sun' and 'sky' at the end of stanza one and 'cage/lean' in stanza two." },
            { term: "'Fearful trill' (stanza 3)", meaning: "Adds to the 'sound effect' and onomatopoeia — 'fearful trill' — quavering sound/birds warbling." },
          ],
        },

        { id: 'ep-cb-h-tonemood', type: 'heading', level: 3, text: 'Tone & Mood per Stanza' },
        {
          id: 'ep-cb-tonemood',
          type: 'definitions',
          rows: [
            { term: 'Stanza 1', meaning: 'Tone: Elation/Exuberant/Playful. A description of the free bird enjoying the open sky. Light-hearted with a darker tone at times. In the last line one can feel a shift in tone, it becomes almost arrogant — "claims the sky."' },
            { term: 'Stanza 2', meaning: 'Tone: Anger/Bitterness.' },
            { term: 'Stanza 3', meaning: 'Tone: Ominous/Frustrated. The reasons seem to be the extremity of difference between the free bird and the caged bird. The speaker expresses the hope one might still have when problems occur, but the verse closes on the caged bird still singing.' },
            { term: 'Stanzas 4 and 5', meaning: 'Tone becomes more positive and upbeat again, BUT the contrast between the free bird and the caged bird is now clearly contrasted with the free bird.' },
            { term: 'Stanza 6', meaning: 'The tone is depressing.' },
            { term: 'The refrain', meaning: "Section of poetry that is repeated like a chorus. It usually carries the central message of the poem and adds to the poem's lyrical/musical quality." },
          ],
        },

        { id: 'ep-cb-tip-contrast', type: 'callout', text: 'Exam Tip: The contrast between the free bird and the caged bird is the backbone of this poem. In any essay or contextual question, structure your answer around this contrast. Use specific verbs from each stanza: the free bird "leaps," "floats," "dips," "dares," and "claims" while the caged bird "stalks," is "clipped," "tied," and "stands on the grave of dreams." This verb contrast alone demonstrates the difference in their experiences.' },

        { id: 'ep-cb-h-fp', type: 'heading', level: 3, text: 'Further Points to Consider' },
        {
          id: 'ep-cb-fp',
          type: 'list',
          text: [
            "The poem is ultimately positive because although the caged bird has no freedom, his hope cannot be dimmed by the bars of the cage and 'clipped wings.'",
            "His song is so loud that it is heard on a distant hill, perhaps forcing the free bird to take notice.",
            'There are constant shifts in the poem.',
            'The poem begins with a positive, joyful free bird and shifts to the viewpoint of the caged bird.',
            'The greatest shift is from the 3rd to the 4th stanza.',
            'The behaviour and lives of both birds are compared throughout in very vivid ways, so that each one is separated completely.',
            "Finally, it shifts back to the caged bird and its song of hope which also conveys the speaker's feelings.",
          ],
        },

        { id: 'ep-cb-h-diction', type: 'heading', level: 3, text: 'Diction / Imagery / Poetic Devices' },
        {
          id: 'ep-cb-diction',
          type: 'list',
          text: [
            "Diction alternates between very harsh, strong words such as 'stalks' and 'fearful trill' in stanza 3 about the caged bird, to more flowing words such as 'floats' and 'sighing trees' when concerned with the free bird.",
            'Enjambment. There is very little punctuation in this poem. Most of the lines are connected in a single sentence with enjambed lines. This creates a fluid effect that contributes to the musical quality of the poem.',
            "Alliteration with onomatopoeia: '...fearful trill (stanza 3) adds to the sound effect and onomatopoeia — 'fearful trill' — quavering sound/birds warbling.",
          ],
        },

        /* --- Questions --- */
        { id: 'ep-cb-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-cb-q',
          type: 'questions',
          qa: [
            { q: 'Comment on the poet\'s use of verbs used in stanza one. How do they convey the experience of being a free bird?', marks: 3, a: "Verbs like 'leaps,' 'floats,' 'dips,' and 'dares' convey movement, freedom, and confidence. The free bird acts with energy and purpose. 'Dares to claim' suggests ownership and boldness — the bird takes possession of the sky without fear or restriction." },
            { q: 'By referring to stanza two, write down the ways in which the caged bird is trapped, and explain why he stalks.', marks: 3, a: "The caged bird is trapped in a 'narrow cage,' its wings are 'clipped,' and its feet are 'tied.' It 'stalks' because it is angry and frustrated — stalking implies a tense, pacing movement within the confined space. The bird cannot fly or move freely." },
            { q: 'Explain why the caged bird\'s trill (song) is fearful.', marks: 3, a: "The song is 'fearful' because it is about 'things unknown' — the bird sings of a freedom it has never experienced. The trill is filled with both hope and fear: hope for what could be, and fear that freedom may never come." },
            { q: 'Explain what is meant by the metaphor "a caged bird stands on the grave of dreams."', marks: 3, a: "The 'grave of dreams' is a powerful metaphor suggesting that all the bird's hopes and aspirations have died. The cage has become a burial ground for potential. The bird's dreams of freedom have been killed by its captivity and oppression." },
            { q: 'Discuss two ways that the refrain contributes to the overall meaning of the poem.', marks: 2, a: "(1) The refrain reinforces the central message — the caged bird's desperate but persistent song for freedom. (2) It creates a musical, chorus-like quality that mirrors the bird's singing, adding to the poem's lyrical nature and making the message memorable." },
            { q: 'Explain the two meanings hidden in "The free bird thinks of another breeze."', marks: 3, a: "(1) Literally, the free bird is thinking about flying on yet another breeze — it takes its freedom for granted. (2) Metaphorically, those with privilege are always looking for more — they are dissatisfied even with abundance, while the caged bird would be grateful for any freedom at all." },
            { q: 'What does the caged bird\'s singing reveal about him?', marks: 2, a: "The singing reveals the bird's resilience and refusal to give up hope. Despite being physically restrained, the bird's spirit remains unbroken. Singing is its only form of self-expression and resistance — the one freedom that cannot be taken away." },
            { q: 'The caged bird "sings of freedom." Why would the free bird not do the same?', marks: 3, a: "The free bird does not sing of freedom because it already has freedom — it takes it for granted. You only long for what you don't have. The caged bird's song is born from deprivation and longing, while the free bird simply enjoys its privileges without appreciating them." },
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 3: A Young Man's Thoughts Before June the 16th — Fhazel Johannesse
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-youngman',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: "A Young Man's Thoughts Before June the 16th",
      minutes: 25,
      blocks: [
        { id: 'ep-ym-h1', type: 'heading', level: 2, text: "A young man's thoughts" },
        { id: 'ep-ym-author', type: 'callout', text: 'by Fhazel Johannesse' },

        /* --- Context & Background --- */
        { id: 'ep-ym-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-ym-bio',
          type: 'paragraph',
          text: "Fhazel Johannesse (1954–) is a South African poet. He wrote most of his poetry during the 1970s and early 1980s. He and the poet Chris van Wyk started a Black Consciousness branch magazine, Wietie, that gave a voice to young aspirant black writers. However, the magazine was short-lived, as it was banned by the apartheid government.",
        },

        { id: 'ep-ym-h-context', type: 'heading', level: 3, text: 'Historical Context' },
        {
          id: 'ep-ym-context',
          type: 'paragraph',
          text: "On 16 June 1976, high school children from Soweto marched to protest against the government law that half of their schooling had to be in Afrikaans, which they saw as the language of the apartheid leaders and oppressors. The police shot live bullets and teargas, and many were injured or killed. After this tragic episode, many young people went into exile to join the underground resistance. In this poem, Johannesse imagines himself as one of those teenagers the day before the event, foreseeing the tragedy that will take place.",
        },

        { id: 'ep-ym-tip-context', type: 'callout', text: 'Exam Tip: Understanding the June 16, 1976 Soweto Uprising is essential for this poem. Questions will often ask about the historical context. Remember: the protest was against compulsory Afrikaans instruction, police used live ammunition on schoolchildren, and this event became a turning point in the anti-apartheid struggle.' },

        { id: 'ep-ym-h-struct', type: 'heading', level: 3, text: 'Structure' },
        {
          id: 'ep-ym-struct',
          type: 'list',
          text: [
            'Written in free verse.',
            'Has no capital letters.',
            'No punctuation.',
            'Not divided into stanzas.',
            'Symbolises a breaking away from the political oppression.',
            'The purpose of the lack of punctuation is to convey a natural, conversational tone and suggest that the poet does not follow set rules, just as he rejects the apartheid system.',
            'Enjambment — the poem runs on, connecting one idea to the next without pause, mirroring the flow of thoughts.',
          ],
        },

        { id: 'ep-ym-h-theme', type: 'heading', level: 3, text: 'Theme' },
        {
          id: 'ep-ym-theme',
          type: 'paragraph',
          text: "The horror that awaited young protesters on June 16th. It is told from the perspective of the young man who could possibly die in the violence that ensued on that day. It is also a scathing comment on the apartheid regime. The poet does this to prove that he is a normal young man, away from the political oppression. He shares his memories of a simple, ordinary life.",
        },

        { id: 'ep-ym-h-tone', type: 'heading', level: 3, text: 'Tone' },
        {
          id: 'ep-ym-tone',
          type: 'paragraph',
          text: "It can be seen as an elegy, because of its sad, mournful tone. The poem has a conversational tone — ends with resignation and acceptance of his fate. Run-on lines contribute to a sense of the poet's feelings. It also has the characteristics of a lyric as it expresses the poet's feelings — nostalgia, melancholy, longing, acceptance.",
        },

        /* --- The Poem --- */
        { id: 'ep-ym-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-ym-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'tomorrow i travel on a road', note: "The student's perspective, the day of the protest. 'i' suggests the student's insignificance in the perspective of improving education. 'Travel on a road' suggests the well-known metaphor of life being a journey.", devices: ['Extended metaphor'] },
            { n: 2, text: 'that winds to the top of the hill', note: "The student's journey in life is full of difficulty, as suggested by 'winds' and 'hill'. The road represents the long, arduous journey. The top of the hill is about the government that does not care for its people. The top of the hill may represent the end of the journey, and thus the end of his life.", devices: ['Metaphor'] },
            { n: 3, text: 'i take with me only the sweet', note: "The student takes only his memories on the winding road for comfort. The memories are clearly important to the speaker which emphasises the importance of the human aspects of his experience.", devices: [] },
            { n: 4, text: 'memories of my youth', note: "The protest rather than the political. He chooses to remember only the good memories of his youth, 'the sweet memories', joining the struggle to ensure that others will also have good memories.", devices: [] },
            { n: 5, text: 'my heart aches for my mother', note: "The student realises the heartache and grief his death will bring to his mother. 'Young man's' is emphasised by his feelings for his mother. Alliteration — 'my mother.' Concerned that his actions will bring her grief. Strong possibility that they will not see each other again.", devices: ['Alliteration'] },
            { n: 6, text: 'for friday nights with friends', note: "The student longs for a time when his life was simpler, and for the social presence of his friends. This shows the student to possess strong interpersonal bonds. Alliteration — 'for friday nights with friends' — alliteration places emphasis on close friends gathered closely around the table.", devices: ['Alliteration'] },
            { n: 7, text: 'around a table with the broad belch of beer', note: "The student recollects a simple instance with friends. This further emphasises that the student is merely a normal young man. He misses the way he was able to be carefree, and the use of 'broad belch of beer' (alliteration) shows how he has fun on his nights out with his friends, and how he is still just a child forced to live through an event he should never have to witness, let alone participate in.", devices: ['Alliteration'] },
            { n: 8, text: 'i ask only for a sad song', note: "In remembrance the student asks only that he be mourned with a song. This may suggest that he wishes his friends and family not to grieve for long over his passing. A dirge — a lament for the dead/mournful protest. Alliteration — 'a sad song to be sung at a funeral' — slows down the pace and suggests the singing of songs interspersed with tears and sadness.", devices: ['Alliteration'] },
            { n: 9, text: 'sung by a woman with downturned eyes', note: "The women who is to sing for him (assumedly his mother) has 'downturned eyes'. This could either be seen as a way to hide her grief or as a sign of submission to the oppressor (the apartheid government). Young man requests a sad song to be sung for him — he is certain of what lies ahead of him. If he does die, the songs will indeed be sad — singers will have 'downturned eyes' as they try to hide their grief.", devices: ['Imagery'] },
            { n: 10, text: 'and strummed by an old man with', note: "The old man represents contrast — juxtaposition of young/old. The word 'strummed' (assumedly his father) to grieve by means of the song. This line is in sharp contrast with the word 'young' in the title. This is an emphasis that the young people who are fighting for emancipation are more likely to die than the older folk.", devices: ['Juxtaposition'] },
            { n: 11, text: 'a broken bow', note: "The man has a 'broken bow' — alliteration. This may suggest physical scarring but may also suggest the grief of the student's death or from the years of oppression suffered under apartheid.", devices: ['Alliteration', 'Symbolism'] },
            { n: 12, text: 'o sing my sad song sing for me', note: "The student asks others to sing for him which may suggest that he is already dead, as he cannot sing for himself. His requests are simple. He does not want anything extravagant. The word 'o' adds to the sadness being felt at the thought of his funeral being conducted. It is an appeal to have a sad song being sung. Alliteration of the 's' sound reinforces the sombre mood in this line.", devices: ['Alliteration', 'Apostrophe'] },
            { n: 13, text: 'for my sunset is drenched with red', note: "The sunset describes the end of his life (sunset) as red. Red has connotations of anger, passion, blood and violence. 'Drenched' suggests his complete hopelessness — a large number of deaths. It also adds to the image of blood and suggests the slaughter of more than a thousand children. The sunset refers to the end of the day, and here, it is the end of all more days on Earth. His sunset will be red — drenched in blood. His day will be red — drenched in blood/his own — and that of others. Euphemism — line 13: 'my sunset is drenched with red' — he will die a violent death.", devices: ['Metaphor', 'Euphemism', 'Imagery'] },
          ],
        },

        /* --- Analysis --- */
        { id: 'ep-ym-h-fos', type: 'heading', level: 3, text: 'Figures of Speech' },
        {
          id: 'ep-ym-fos',
          type: 'definitions',
          rows: [
            { term: 'Metaphor', meaning: "Line 2 — 'road that winds to the top of the hill'" },
            { term: 'Alliteration', meaning: "Lines 6, 7, 8, 9 and 12 — 'for friday nights with friends', 'the broad belch of beer', 'sad song sung'" },
            { term: 'Onomatopoeia', meaning: "Lines 7 and 13 — 'belch', 'drenched'" },
            { term: 'Euphemism', meaning: "Line 13 — 'my sunset is drenched with red' — a gentle way of referring to a violent death" },
          ],
        },

        { id: 'ep-ym-tip-structure', type: 'callout', text: 'Exam Tip: When asked about the lack of punctuation and capital letters, always connect it to TWO points: (1) it mirrors the natural, conversational flow of thoughts, and (2) it symbolises the speaker\'s rejection of the rules imposed by the apartheid system. The lowercase "i" specifically diminishes the speaker\'s importance, reflecting how the apartheid system made Black people feel insignificant.' },

        /* --- Questions --- */
        { id: 'ep-ym-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-ym-q',
          type: 'questions',
          qa: [
            { q: 'What effect does the poet achieve by not using punctuation and capital letters?', marks: 2, a: "The lack of punctuation and capital letters creates a conversational, free-flowing tone that mirrors the natural flow of thoughts. It also symbolises the speaker's rejection of the rules imposed by the apartheid system — just as the protesters rejected unjust laws." },
            { q: 'Refer to line 7: "around a table..." Comment on the sound device that the poet uses.', marks: 3, a: "The alliteration 'broad belch of beer' uses the repetition of the 'b' sound. This creates a harsh, explosive sound that mimics the actual sound of a belch. It emphasises the carefree, informal nature of these gatherings — normal teenage experiences that the young man values." },
            { q: "Comment on the three things that the poet knows he will have to give up once he embarks on his journey of protest.", marks: 3, a: "The poet knows he will give up: (1) his relationship with his mother ('my heart aches for my mother'), (2) social gatherings with friends ('friday nights with friends'), and (3) simple pleasures like sharing a meal ('around a table with the broad belch of beer'). These represent his entire normal life." },
            { q: "Discuss the significance of the 'broken bow' in line 11.", marks: 2, a: "The 'broken bow' symbolises the brokenness caused by years of apartheid oppression — both physical and emotional suffering. It could also represent the broken spirit of the older generation who have endured decades of injustice. The musical instrument is damaged, just as the people have been damaged by the system." },
            { q: "Discuss the context in which this poem was written.", marks: 3, a: "The poem was written in the context of the June 16, 1976 Soweto Uprising, when high school students marched to protest against being forced to learn in Afrikaans. The police responded with live ammunition, killing and injuring many young people. The poem imagines the thoughts of one such student the day before the protest, knowing he may die." },
            { q: 'How does the word "drenched" in the last line effectively conclude this poem?', marks: 2, a: "'Drenched' suggests being completely soaked — the sunset is not merely coloured red but saturated with it. This implies excessive bloodshed and violence, effectively conveying the brutality of what awaits. The word carries connotations of helplessness, as one cannot stop being 'drenched' — the violence is overwhelming and inescapable." },
            { q: "What do the words 'winds to the top of the hill' suggest about the road (line 2)?", marks: 2, a: "The winding road suggests difficulty and struggle — the path is not straight or easy. 'Top of the hill' implies that the journey is uphill, requiring great effort. Metaphorically, the hill represents the enormous challenge of fighting against the apartheid system, and the winding path suggests the uncertain, dangerous route to freedom." },
            { q: 'Identify the tone in lines 8-13.', marks: 1, a: "The tone is sad, mournful and resigned — the speaker has accepted his fate and is making funeral requests." },
            { q: "Sunsets are often 'red'. Here, the poet suggests something more. Discuss.", marks: 2, a: "While a red sunset is natural, 'drenched with red' transforms it into a symbol of bloodshed and violence. The word 'drenched' implies saturation — not just a hint of red, but completely covered. The sunset also symbolises the end of life, making 'drenched with red' a powerful euphemism for a violent death." },
          ],
        },

        { id: 'ep-ym-h-essay', type: 'heading', level: 3, text: 'Essay Question' },
        {
          id: 'ep-ym-essay',
          type: 'callout',
          text: "A Young Men's Thoughts Before June 16 by Fhazel Johannesse is a poem written from the point of view of a young boy on the day before his death. He knows what will happen to him on June 16, and he writes a lament for himself and all the others who will share the same fate as him. With close reference to diction, imagery and tone, critically discuss the validity of this statement in a well-written essay of 150-200 words. [10]",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 4: The Road Not Taken — Robert Frost
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-roadnottaken',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: 'The Road Not Taken — Robert Frost',
      minutes: 28,
      blocks: [
        { id: 'ep-rnt-h1', type: 'heading', level: 2, text: 'The Road not Taken' },
        { id: 'ep-rnt-author', type: 'callout', text: 'by Robert Frost' },

        /* --- Context & Background --- */
        { id: 'ep-rnt-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-rnt-bio',
          type: 'paragraph',
          text: "Robert Frost (1874–1963) is an American poet. He is highly regarded for his realistic descriptions of rural life and his use of colloquial speech patterns. Frost's poems reflect a deep appreciation of nature. One of the most popular and respected poets of the twentieth century, Frost also received many rewards for his work, including four Pulitzer Prizes.",
        },

        { id: 'ep-rnt-h-struct', type: 'heading', level: 3, text: 'Form and Structure' },
        {
          id: 'ep-rnt-struct',
          type: 'list',
          text: [
            'The poem is a lyric and is written in four stanzas of five lines each.',
            'The poem follows a strict (ABAAB) rhyme scheme in each stanza and a strict meter to create cohesion, making it measured and reflective.',
            'A road splits into two paths in a wood. Both the wood and the path are commonly used metaphors for life and the choices we face.',
            "The road 'less traveled' symbolises the path of non-conformity.",
          ],
        },

        { id: 'ep-rnt-h-devices', type: 'heading', level: 3, text: 'Poetic Devices' },
        {
          id: 'ep-rnt-devices',
          type: 'definitions',
          rows: [
            { term: 'Anaphora', meaning: "The deliberate repetition of a word or phrase at the beginning of several successive verses, clauses, or paragraphs. E.g. repetition of 'And' in lines 2, 3, 4, 7, 11, 20." },
            { term: 'Antithesis', meaning: "A contrast or opposition between two things. E.g. 'as just as fair and having perhaps the better claim, both paths looked the same, but one was better.'" },
            { term: 'Enjambment', meaning: "The running on of the thought from one line, couplet, or stanza to the next without a punctuated pause, making it conversational. Continual run on lines throughout the poem." },
            { term: 'Extended Metaphor', meaning: "Road or Path refers to life choices. The metaphor of the bending path suggests that decision-making is often imperfect. We can only contemplate the short-term benefits and consequences of our decision." },
            { term: 'Assonance', meaning: "Repeated, long vowel sounds. In lines 6-12, assonance creates a pleasing melodic sound, creating a sense of nostalgia, perhaps tinged with regret. The assonance forces us to slow our reading, mimicking the speaker's deliberation as he ponders which path to choose and this culminates in line 13 with 'oh'." },
          ],
        },

        { id: 'ep-rnt-tip-metaphor', type: 'callout', text: 'Exam Tip: This entire poem is an extended metaphor. The road = life choices, the fork = a decision point, the wood = life itself. When the exam asks about figurative language, always start with the extended metaphor. Also note: the poem is often misread as celebrating individualism, but it is actually about the uncertainty and regret that accompany ALL choices.' },

        { id: 'ep-rnt-h-title', type: 'heading', level: 3, text: 'Title' },
        {
          id: 'ep-rnt-title',
          type: 'paragraph',
          text: "The title of this poem 'The Road Not Taken' focuses on lost opportunities and regret — the road that the speaker did not take. Although the speaker has made his choice, he cannot stop thinking about the road he left behind. It appears that the poem is about lost opportunities, and the complexities of choices, not just choosing the path that is fresh and new.",
        },

        { id: 'ep-rnt-h-theme', type: 'heading', level: 3, text: 'Theme' },
        {
          id: 'ep-rnt-theme',
          type: 'paragraph',
          text: "The major theme in Robert Frost's 'The Road Not Taken' is about making choices. The speaker in the poem is travelling road and comes upon a crossroad or a fork-in-the-road. Here the speaker needs to decide which road he will take. His decision will have far-reaching consequences. Frost seems to be saying that there is only the path taken and the path not taken. Once a choice has been made, he knows that he will look back and justify his decision. In his heart, however, he knows that he could also have taken the other path which was just as fair. So, he was choosing between two roads, or futures, that were different but potentially equally good.",
        },

        { id: 'ep-rnt-h-tone', type: 'heading', level: 3, text: 'Tone' },
        {
          id: 'ep-rnt-tone',
          type: 'paragraph',
          text: 'Regret; Contemplative.',
        },

        /* --- The Poem --- */
        { id: 'ep-rnt-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-rnt-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'Two roads diverged in a yellow wood,', note: "The woods are yellow — it is probably autumn, and the leaves are changing colours. 'Diverged' is just another word for split. There is a fork in the road.", devices: ['Imagery', 'Metaphor'] },
            { n: 2, text: 'And sorry I could not travel both', note: "The speaker wants to go down both roads at once, but since it is impossible to walk down two roads at once, he has to choose one road.", devices: [] },
            { n: 3, text: 'And be one traveler, long I stood', note: "The speaker is trying to make a decision. He is standing there trying to decide, and not in a carriage or car because he is standing.", devices: [] },
            { n: 4, text: 'And looked down one as far as I could', note: "The speaker really wants to see both paths — he is thinking hard about his choice. He can only see up to the first bend, where the undergrowth, the small plants and greenery of the woods, block his view.", devices: [] },
            { n: 5, text: 'To where it bent in the undergrowth;', note: "This is where the reader starts to think about the metaphorical meanings of this poem. He could be trying to peer into his future as far as he can. Since he cannot really predict the future, he can only see part of the path.", devices: ['Metaphor'] },
            { n: 6, text: 'Then took the other, as just as fair,', note: "So, after all this build-up about one road, the speaker takes the other path. Then a tricky 'as' is used. 'As just as fair.' Read without the first 'as', the phrase makes sense: it is 'just as fair.' But the first 'as' makes the phrase a little more difficult. Combining the words 'just' and 'fair' in the same phrase — both of these words have multiple meanings. The phrase could mean something like 'as just as it is fair', as in proper rightness and equal. But this does not quite apply to a road. The suggestion is that he means the road is just as pretty, but potentially equally good.", devices: ['Wordplay'] },
            { n: 7, text: 'And having perhaps the better claim,', note: "The speaker still seems pretty uncertain when he explains that this second path is better. It is only 'perhaps' better.", devices: [] },
            { n: 8, text: 'Because it was grassy and wanted wear;', note: "Then the speaker tells the audience why the path is better — it seems like it has not been walked on very much, because it is grassy and does not look worn. Be careful not to think that the phrase 'wanted wear' is personification (it is alliteration, though). 'Wanted' in this instance, means something more like 'lacked'.", devices: ['Alliteration'] },
            { n: 9, text: 'Though as for that the passing there', note: "The speaker of this poem really cannot seem to make up his mind. Just when we think we have got a declaration about which path is better, he changes his mind and admits that maybe they were equal after all. The 'as for that' refers to the path being less worn. 'The passing there' refers to traffic, probably on foot.", devices: [] },
            { n: 10, text: 'Had worn them really about the same,', note: "Repetitively, it is stated that the paths are equal, but we find out something new, that it's morning. It is possible that the speaker is the first to travel to this place on that day. The paths are covered with leaves, which have not been turned black by steps crushing them. At first, we thought one path was grassy and now it is covered with leaves. Possibly, the leaves are not very thick, or the grass sticks up in between them.", devices: [] },
            { n: 11, text: 'And both that morning equally lay', note: "", devices: [] },
            { n: 12, text: 'In leaves no step had trodden black.', note: "", devices: [] },
            { n: 13, text: 'Oh, I kept the first for another day!', note: "The speaker seems like he is already regretting his choice of path by saying he will come back to the one he missed, 'one day, later.' This is a familiar way to deal with difficult choices; one can always come back and an exclamation point at the end, this line is emphatic. The speaker 'feels strongly' about what he is saying here. With an 'Oh!' at the beginning and an exclamation point at the end, this line is emphatic.", devices: ['Exclamation'] },
            { n: 14, text: 'Yet knowing how way leads on to way,', note: "The speaker realises that this is hope to come back and try the other path may be foolish. He knows how 'way leads on to way' — how one road can lead to another, and then another, until you end up very far from where you started. Because of this, he does not think he will ever be able to come back.", devices: [] },
            { n: 15, text: 'I doubted if I should ever come back.', note: "", devices: [] },
            { n: 16, text: 'I shall be telling this with a sigh', note: "Line 16 is the turning point (volta) of the poem. Line 17 expands this idea. The speaker jumps forward in time. He does not know exactly when, but he knows that it is ages and ages 'hence,' or from now. He will be telling it with a sigh, though, which is interesting because sighs can be happy, sad, or merely reflective — and he does not know what kind of sigh it will be.", devices: ['Volta'] },
            { n: 17, text: 'Somewhere ages and ages hence:', note: "So we know that this choice is probably going to be important for the speaker's future, but we don't know if he is going to be happy about it or not.", devices: [] },
            { n: 18, text: 'Two roads diverged in a wood, and I—', note: "This line is a repetition of the first line of the poem, with the subtraction of the word 'yellow' and the addition of the words 'and I'. The repetition helps to bring the poem to a conclusion. It reminds the reader what is important in the poem — the concept of choosing between two different paths. Then, there is hesitation of 'and I' and the dash. This lets the reader know what is important. The speaker is about to say next is important.", devices: ['Repetition'] },
            { n: 19, text: 'I took the one less traveled by,', note: "In this line, the speaker sums up his story and tells his audience that he took the road less traveled by. With the hesitation in the line before, this declaration could be triumphant — or regretful. Also, remember it was not exactly clear that the road the speaker took was the one that looked less worn. He said at first that it looked less worn, but then that the two roads were actually about equal.", devices: [] },
            { n: 20, text: 'And that has made all the difference.', note: "At first glance it seems that this line is triumphant — the narrator took the path that no one else did and that is what made him successful. But he does not say that it made all the difference. He just knows that his choice is important — but it will make all the difference in his life. From where he is now, looking down the path as far as he can, he cannot tell if the future that it leads to is going to be good or bad.", devices: ['Ambiguity'] },
          ],
        },

        /* --- Analysis --- */
        { id: 'ep-rnt-h-levels', type: 'heading', level: 3, text: 'On a Literal and Figurative Level' },
        {
          id: 'ep-rnt-levels',
          type: 'definitions',
          rows: [
            { term: 'The wood', meaning: "Represents life itself." },
            { term: 'The fork in the road', meaning: "Represents those points in our lives when we have to make decisions that will affect our future." },
            { term: 'The two roads', meaning: "Represent the options and possibilities we can choose or paths we can travel in life. The roads are situated in a yellow wood — yellow is associated with age (as opposed to green) — the speaker is not at a very young period of his life. Second, the wood is yellow because the future is symbolised by its Autumn." },
            { term: "Speaker's inability to look into the future", meaning: "Symbolised by his physical inability to see what lies down the road. The undergrowth symbolises the fact that a person's choice is often made more difficult by obstacles or things that confuse him." },
          ],
        },

        { id: 'ep-rnt-h-gloss', type: 'heading', level: 3, text: 'Glossary' },
        {
          id: 'ep-rnt-gloss',
          type: 'definitions',
          rows: [
            { term: 'Diverged', meaning: 'Went in different directions' },
            { term: 'Undergrowth', meaning: 'A dense or thick area of shrubs and other plants; lacked' },
            { term: 'Trodden', meaning: 'Walked on' },
            { term: 'Hence', meaning: 'From now' },
          ],
        },

        { id: 'ep-rnt-tip-ambiguity', type: 'callout', text: 'Exam Tip: The final line "And that has made all the difference" is deliberately ambiguous. The speaker does NOT say whether the difference was positive or negative. The sigh in line 16 could be contented or regretful. When answering questions about the ending, always acknowledge this ambiguity — examiners reward nuanced answers that show you understand the poem is about the complexity of choice, not simply celebrating individualism.' },

        /* --- Questions --- */
        { id: 'ep-rnt-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-rnt-q',
          type: 'questions',
          qa: [
            { q: "Quote a line from this poem that tells the reader that the poet did not make a quick decision. (a) That the poet did not expect to get another chance to take the other road.", marks: 2, a: "(a) 'And be one traveler, long I stood' — this shows he stood for a long time deliberating. For the second part: 'I doubted if I should ever come back' — he knows he won't get another chance." },
            { q: "That the poet did not expect to get another chance to take the other road.", marks: 2, a: "'I doubted if I should ever come back' — the speaker acknowledges that once a choice is made, returning to try the other option is unlikely." },
            { q: "Identify the rhyme scheme used in the poem? Does it contribute to the overall meaning and rhythm of the poem?", marks: 3, a: "The rhyme scheme is ABAAB. Yes, it contributes to the measured, reflective quality of the poem. The consistent rhyme creates a sense of order and deliberation, mirroring the speaker's careful decision-making process. The enclosed rhyme also creates a sense of being 'trapped' between choices." },
            { q: "Explain ONE reason why it was hard for the speaker to decide which road to take.", marks: 2, a: "Both roads appeared to be equal — 'Had worn them really about the same' and 'both that morning equally lay / In leaves no step had trodden black.' The speaker could not clearly distinguish which path was better, making the choice extremely difficult." },
            { q: "The last stanza begins, 'I shall be telling this with a sigh/Somewhere ages and ages hence.' Why do you think the speaker will be 'telling this with a sigh'?", marks: 3, a: "The sigh is ambiguous — it could represent satisfaction (a contented sigh at having made a bold choice) or regret (a wistful sigh at the road not taken). The ambiguity is deliberate: the speaker acknowledges that he will never know what the other path held, and this uncertainty will stay with him forever." },
          ],
        },

        { id: 'ep-rnt-h-essay', type: 'heading', level: 3, text: 'Essay Question' },
        {
          id: 'ep-rnt-essay',
          type: 'callout',
          text: "In the poem, The Road Not Taken, the poet uses a reflective tone to address the significance of the choices one makes in life. With close reference to diction, tone and imagery, discuss the validity of this statement in a well-written essay of 150-200 words. [10]",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 5: Reapers in the Mieliefield — Mbuyiseni Oswald Mtshali
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-reapers',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: 'Reapers in the Mieliefield — Mbuyiseni Oswald Mtshali',
      minutes: 28,
      blocks: [
        { id: 'ep-rp-h1', type: 'heading', level: 2, text: 'Reapers in the mieliefield' },
        { id: 'ep-rp-author', type: 'callout', text: 'by Mbuyiseni Oswald Mtshali' },

        /* --- Context & Background --- */
        { id: 'ep-rp-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-rp-bio',
          type: 'paragraph',
          text: "Mbuyiseni Oswald Mtshali was born in Kwabhanye, which falls within what is now KwaZulu-Natal, in 1940. After completing secondary school, he studied by correspondence, getting a diploma with the Premier School of Journalism and Authorship. He worked as a messenger in Johannesburg, drawing on his observations of the city to write the poems that became his first collection, Sounds of a Cowhide Drum. It is one of the best-selling poetry books in South African history. Although he wrote his poetry in the 1970s and 1980s, its focus on oppression and experiences of black life under racial capitalism, it captures many dynamics which are central to how South Africa has historically worked.",
        },

        { id: 'ep-rp-h-struct', type: 'heading', level: 3, text: 'Structure' },
        {
          id: 'ep-rp-struct',
          type: 'list',
          text: [
            'The poem has 29 lines.',
            'The poem is written in free verse — there is no set rhythm or rhyme.',
            'The enjambed lines allow for a free flow of ideas as the difficult working conditions of the labourers are described.',
            'The five stanzas are rich with sound devices and many similes and metaphors.',
            'The word choice (diction) has a negative connotation and implies harshness, inhumane treatment and slavery.',
          ],
        },

        { id: 'ep-rp-h-analysis', type: 'heading', level: 3, text: 'Analysis' },
        {
          id: 'ep-rp-analysis',
          type: 'list',
          text: [
            'Mtshali points out the harsh conditions under which many labourers work.',
            'He records the suffering of the workers as he evokes the tedium, sweat and exhaustion of this kind of manual labour.',
            "The workers' lives are hard — they work in hot, dry and dusty conditions.",
            'They are treated almost like animals. The poem describes their work — it does not really comment on the situation.',
            'It still leaves the readers with an understanding of the way the workers are seen as unimportant and how their lives are almost completely all about labour.',
          ],
        },

        { id: 'ep-rp-h-tonemood', type: 'heading', level: 3, text: 'Tone and Mood' },
        {
          id: 'ep-rp-tonemood',
          type: 'paragraph',
          text: "It is oppressive and hints at slavery. It is illustrated by the description of the conditions under which the labourers work.",
        },

        { id: 'ep-rp-h-title', type: 'heading', level: 3, text: 'Title' },
        {
          id: 'ep-rp-title',
          type: 'paragraph',
          text: "The title is descriptive of what the poem is about. Indefinite article before 'mieliefield' shows the universal plight of nameless labourers on farms, doing critical tasks without acknowledgement.",
        },

        { id: 'ep-rp-h-theme', type: 'heading', level: 3, text: 'Theme' },
        {
          id: 'ep-rp-theme',
          type: 'paragraph',
          text: "He describes the suffering of the workers through the monotonous routine, the sweat and exhaustion that comes with this kind of manual labour. The poet highlights the harsh working conditions of labourers.",
        },

        { id: 'ep-rp-tip-dehumanisation', type: 'callout', text: 'Exam Tip: The dehumanisation of the workers is a key theme. Note how Mtshali compares the workers to animals throughout: women are "prancing wild mares," they rest in "kraals" (animal enclosures), and the sun "lashes" them like a slave-driver whips animals. The farmer on the tractor represents the power imbalance — he drives while they labour.' },

        /* --- The Poem --- */
        { id: 'ep-rp-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-rp-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'Faces furrowed and wet with sweat,', note: "Vivid description of the reapers as they labour in the scorching heat, deep in concentration. 'Faces furrowed' — negative connotation. Alliteration and assonance.", devices: ['Alliteration', 'Assonance', 'Imagery'] },
            { n: 2, text: 'Bags tied to their wasp waists,', note: "Physically they are thin, underfed, subject to horrible working conditions and receive poor treatment as labourers. 'Wasp waists' — alliteration, emphasises how thin they are.", devices: ['Alliteration', 'Imagery'] },
            { n: 3, text: 'women reapers bend mielie stalks,', note: '', devices: [] },
            { n: 4, text: 'break cobs in rustling sheaths,', note: '', devices: ['Onomatopoeia'] },
            { n: 5, text: 'toss them in the bags', note: "These lines convey a description of the labour done by the women, which is a physically demanding job. The action of picking mielies is described 'row upon row' conveying a sense of monotony. Laborious and tedious. Repetition.", devices: ['Repetition'] },
            { n: 6, text: 'and move through row upon row of maize.', note: "'Rustling' — onomatopoeia.", devices: [] },
            { n: 7, text: 'Behind them, like a desert tanker,', note: "Line 7-8: simile 'like a desert tanker.' The tractor blows up dust — ties in with the idea of the desert tanker. Line 9: personification of the sun.", devices: ['Simile'] },
            { n: 8, text: 'a dust-raising tractor', note: '', devices: [] },
            { n: 9, text: 'pulls a trailer,', note: '', devices: [] },
            { n: 10, text: 'driven by a pipe-puffing man', note: "Possibly refers to the farmer — he is in charge and drives the tractor while the labourers do all the hard work. 'Pipe-puffing' — alliteration.", devices: ['Alliteration'] },
            { n: 11, text: 'flashing tobacco-stained teeth', note: "The tobacco has stained his teeth — alliteration. Note the simile: 'as yellow as the harvested grain.'", devices: ['Simile'] },
            { n: 12, text: 'as yellow as the harvested grain.', note: "The farmer is 'part of the machine' — he does not do the real physical labour. He supervises.", devices: ['Simile'] },
            { n: 13, text: 'He stops to pick up bags loaded by', note: "The men working in the fields are now mentioned. They are thick-limbed (have well-built arms) because of the hard labour they perform every day.", devices: [] },
            { n: 14, text: 'thick-limbed labourers', note: "They are 'earthy' people. They wear vests because of the extreme heat, and they are caked with dirt from their labour.", devices: ['Imagery'] },
            { n: 15, text: 'in vests baked', note: '', devices: [] },
            { n: 16, text: 'brown with dust.', note: "'Baked brown' — alliteration.", devices: ['Alliteration'] },
            { n: 17, text: 'The sun lashes', note: "The sun is personified as a slave-driver or prison warder who carries a red-hot rod. The sun 'lashes the workers' to keep working. This indicates how the workers are treated — unavoidable in the sun — has connotations of being painful.", devices: ['Personification'] },
            { n: 18, text: 'the workers with a red-hot rod;', note: "They pause for a while to constantly wipe the sweat from their faces. This image suggests the cruel conditions under which the labourers work. The conditions they work under are dreadful — extreme pain and suffering.", devices: ['Metaphor', 'Imagery'] },
            { n: 19, text: 'they stop for a while', note: '', devices: [] },
            { n: 20, text: 'to wipe a brine-battered brow', note: "'Brine-battered brow' — alliteration which speaks to the hot conditions they are working in. The work is extremely physical and made harder by the extreme heat. Brine — salty water used for picking food — sweat compared to brine.", devices: ['Alliteration', 'Metaphor'] },
            { n: 21, text: 'and drink from battered cans', note: "They drink from 'battered cans' — they are also battered by the hard labour. Battered cans also speaks to the fact that they are poor — they do not have neat, shiny flasks.", devices: ['Imagery'] },
            { n: 22, text: 'and drink mabeli.', note: "'Mabeli' — alliteration — fermented maize drink.", devices: [] },
            { n: 23, text: 'buzzing with flies', note: '', devices: ['Onomatopoeia'] },
            { n: 24, text: "Thirst is slaked in seconds.", note: "The labourers have quenched their thirst with speed and satisfaction. 'Slaked in seconds' — alliteration.", devices: ['Alliteration'] },
            { n: 25, text: 'Men jerk bags like feather cushions', note: "The men have grown strong from their hard labour and can easily lift the heavy bags. 'Like feather cushions' — simile.", devices: ['Simile'] },
            { n: 26, text: 'And women become prancing wild', note: "Women are compared to 'prancing wild mares' — simile. Although their homes were often referred to as 'kraals', a 'kraal' is also an enclosure where cattle is kept. One could imply that the workers are dehumanised and compared to cattle.", devices: ['Simile'] },
            { n: 27, text: 'mares;', note: '', devices: [] },
            { n: 28, text: "soon the day's work will be done", note: "They look forward to the end of the day.", devices: [] },
            { n: 29, text: 'and the reapers will rest in their kraals.', note: "'Kraals' — enclosures/village. The reapers will rest in their kraals like animals.", devices: ['Imagery'] },
          ],
        },

        /* --- Analysis --- */
        { id: 'ep-rp-h-gloss', type: 'heading', level: 3, text: 'Glossary' },
        {
          id: 'ep-rp-gloss',
          type: 'definitions',
          rows: [
            { term: 'Furrowed', meaning: 'Deeply wrinkled' },
            { term: 'Sheaths', meaning: 'Casings' },
            { term: 'Tanker truck', meaning: 'Used to transport goods' },
            { term: 'Brine', meaning: 'Salty water' },
            { term: 'Mabeli', meaning: 'Mielie meal gruel, slightly fermented and drunk cold' },
            { term: 'Slaked', meaning: 'Quenched' },
            { term: 'Kraals', meaning: 'Enclosures/village' },
          ],
        },

        { id: 'ep-rp-h-mood', type: 'heading', level: 3, text: 'Mood' },
        {
          id: 'ep-rp-mood',
          type: 'paragraph',
          text: 'The mood is oppressive, and this is illustrated by the description of the conditions under which the labourers work.',
        },

        /* --- Questions --- */
        { id: 'ep-rp-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-rp-q',
          type: 'questions',
          qa: [
            { q: 'What are the tasks of the labourers?', marks: 2, a: "The labourers bend mielie stalks, break cobs from the stalks, toss them into bags tied at their waists, and move through row upon row of maize. The men also pick up loaded bags and carry them." },
            { q: 'Are the weather conditions conducive for what they are doing? Give reasons for your answer.', marks: 2, a: "No, the weather conditions are extremely harsh. The sun 'lashes the workers with a red-hot rod' (personification/metaphor), indicating scorching heat. They are covered in sweat ('brine-battered brow') and dust, making the physical labour even more gruelling." },
            { q: "Discuss how the personification in stanza 4 contributes to the reader's understanding of the labourers' working conditions.", marks: 2, a: "The sun is personified as a slave-driver who 'lashes the workers with a red-hot rod.' This creates the image of the sun as a cruel overseer, whipping the labourers. It suggests that the labourers are treated like slaves — they have no choice but to endure the punishing heat, just as slaves had no choice but to endure the lash." },
            { q: "In the last stanza, the poet states that after a break, the 'Men jerk bags like feather cushions.' Identify and explain how the figure of speech mentioned above illustrates the effects of the break.", marks: 3, a: "The simile 'like feather cushions' compares the heavy bags to something light and easy to lift. After their break, the labourers are refreshed enough to lift the bags as if they weigh nothing. This shows how brief rest restores their physical strength, but also how accustomed to hard labour these workers are — that heavy bags feel like feathers to them." },
            { q: 'Does the poet succeed in conveying the extreme working conditions of the workers? Discuss your view.', marks: 3, a: "Yes, through vivid imagery ('faces furrowed,' 'brine-battered brow'), powerful personification (the sun lashing workers), and degrading comparisons (women as 'prancing wild mares,' workers resting in 'kraals' like cattle). The cumulative effect of these devices creates a visceral picture of inhuman working conditions, exploitation, and dehumanisation." },
            { q: "Explain what the simile in line 7 ('like a desert tanker') suggests about the tractor.", marks: 2, a: "The simile compares the tractor to a desert tanker — a large vehicle that raises enormous clouds of dust as it moves through arid terrain. This suggests the tractor is powerful and mechanical, raising blinding dust that makes the workers' conditions even more unpleasant. It also contrasts with the human, physical labour of the reapers, emphasising the power imbalance between the mechanised farmer and the manual labourers." },
            { q: "Comment on the appropriateness of the title 'Reapers in the Mieliefield'.", marks: 3, a: "The title is deliberately plain and descriptive — 'reapers' (the labourers who harvest) 'in the mieliefield' (maize field). The indefinite article 'a' before 'mieliefield' would make the title more universal — these are not specific, named individuals but nameless, interchangeable workers. The simplicity of the title reflects how society views these workers: without identity or individuality. Yet the poem gives them dignity by observing their labour in vivid detail." },
            { q: "How does the poet use sound devices to convey the labourers' experience?", marks: 3, a: "Alliteration ('faces furrowed,' 'wasp waists,' 'brine-battered brow,' 'pipe-puffing') creates a harsh, staccato rhythm that mimics the physical shock of hard labour. Onomatopoeia ('rustling sheaths,' 'buzzing with flies') places the reader in the soundscape of the mielie field. Alliteration in 'thirst is slaked in seconds' creates a soothing, momentary relief from the harshness, emphasising the brief comfort of drinking before they must return to work." },
            { q: "Discuss how the portrayal of the farmer contrasts with that of the workers.", marks: 3, a: "The farmer (lines 10-12) is 'pipe-puffing' — leisurely smoking while the workers labour. He 'drives' (passive, in control) while they work physically. His teeth are 'tobacco-stained' yet yellow 'as the harvested grain' — a simile that connects him to the product of others' labour. He 'stops' (by choice) to collect bags others have loaded. The workers are described by their bodies: 'furrowed faces,' 'wasp waists,' 'thick-limbed' — defined by physical exertion. This contrast highlights the deep inequality between the exploiter and the exploited." },
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 6: Telephone Conversation — Wole Soyinka
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-telephone',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: 'Telephone Conversation — Wole Soyinka',
      minutes: 30,
      blocks: [
        { id: 'ep-tc-h1', type: 'heading', level: 2, text: 'Telephone Conversation' },
        { id: 'ep-tc-author', type: 'callout', text: 'by Wole Soyinka' },

        /* --- Context & Background --- */
        { id: 'ep-tc-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-tc-bio',
          type: 'paragraph',
          text: "Akinwande Oluwole Babatunde Soyinka Hon. FRSL, known as Wole Soyinka, is a Nigerian playwright, novelist, poet, and essayist in the English language. Born: 13 July 1934 (age 88 years). Wole Soyinka is best known as a playwright. Alongside his literary career, he has also worked as an actor and in theatres in Nigeria and Great Britain. His works also include poetry, novels, and essays.",
        },

        { id: 'ep-tc-h-intro', type: 'heading', level: 3, text: 'Introduction' },
        {
          id: 'ep-tc-intro',
          type: 'paragraph',
          text: "The poem exposes in a satirical way the presence of racial discrimination at individual level in society, even after the passing of laws against it. The poem describes a phone conversation between a landlady and the speaker, who is Black, about renting an apartment. The landlady is pleasant until she learns that the speaker is 'African,' at which point she demands to know how 'light' or 'dark' the speaker's skin is. In response, the speaker cleverly mocks the landlady's ignorance and prejudice, demonstrating that characterising people by their skin colour diminishes their humanity. The poet captured the essence of human interaction across racial differences. This piece of literature becomes significant as it exposes both the attitude of the white woman towards black people and the black man's anger towards discrimination.",
        },

        { id: 'ep-tc-h-struct', type: 'heading', level: 3, text: 'Form and Structure' },
        {
          id: 'ep-tc-struct',
          type: 'paragraph',
          text: "Wole Soyinka's 'Telephone Conversation' is a lyric poem written in free verse. The poem is a dialogue involving a black man and a white woman. The two are engaged in a phone call throughout the poem. The poem, to a considerable extent, follows the question-and-answer pattern. That is, the white landlady fires away one question after another and the black man, who is desperate for a place to stay, patiently answers them all. Also, a major part of the poem is written in the present tense.",
        },

        { id: 'ep-tc-h-lit', type: 'heading', level: 3, text: 'Literary Techniques' },
        {
          id: 'ep-tc-lit',
          type: 'list',
          text: [
            "Although 'Telephone Conversation' appears to be a short and simple poem, it is layered, and therefore, complex due to the techniques used in it.",
            'The techniques used, in terms of the use of language, make the ultimate message of the poem heard loud and clear.',
            "On one hand, for the most part, it uses repetition for emphasising the idea of the practice of racism by the so-called elites.",
            "The words 'dark' 'light' are often used for emphasising racism.",
            "On the other hand, the use of words describing colours and shades serves as evidence of racism in a society where everything light and very light represents the upper class, and dark and very dark represents the lower class.",
            'The lines of the poem get connected by Enjambment.',
            'There is Satire as well as Irony.',
            'Pun.',
            'Alliteration and Assonance.',
          ],
        },

        { id: 'ep-tc-h-theme', type: 'heading', level: 3, text: 'Main Theme' },
        {
          id: 'ep-tc-theme',
          type: 'list',
          text: [
            'Racism and Identity.',
            "In this poem, 'Telephone Conversation,' Wole Soyinka satirises racial discrimination in society regardless of the stringent laws against it.",
            'He brings to light how it is practised covertly by many white people. Through a simple telephone conversation, the poet provides an insightful observation and critique of the racially discriminating society.',
          ],
        },

        { id: 'ep-tc-tip-satire', type: 'callout', text: 'Exam Tip: This poem uses SATIRE and IRONY as its primary tools. The speaker is intellectually superior to the landlady throughout. Key ironic moments: (1) he "confesses" being African as if it were a crime, (2) "Considerate she was" is deeply sarcastic, (3) his detailed colour descriptions of body parts mock her obsession with skin colour. Capital letters represent the landlady\'s voice — always mention this visual technique in your answer.' },

        /* --- The Poem --- */
        { id: 'ep-tc-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-tc-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'The price seemed reasonable, location', note: "It seemed like a good property to rent for 3 reasons: price, location, and indifference of the landlady.", devices: [] },
            { n: 2, text: 'Indifferent. The landlady swore she lived', note: "", devices: [] },
            { n: 3, text: 'Off premises. Nothing remained', note: "The landlady lived 'off premises' — means more privacy.", devices: [] },
            { n: 4, text: 'But self-confession. "Madam," I warned,', note: "'Confess' has a negative ring to it. It means to admit to the truth. He had to 'confess', as if it is his fault that he is black. The landlady would have refused him.", devices: ['Irony'] },
            { n: 5, text: '"I hate a wasted journey—I am African."', note: "'I hate a wasted journey.' A wasted journey — if she does not rent the property to him because he is black, she would not rent it to him because of racial prejudice. IRONY: He cannot help being black. He was born that way. But he feels that he has to confess, as if it is his fault that he is black.", devices: ['Irony'] },
            { n: 6, text: 'Silence. Silenced transmission of', note: "There was silence on the phone. In that silence, she could 'hear' her struggling between racism and good manners, and she did not know how to respond. The silence is described 'pressurised good-breeding' — she was silent on the other side of the line. Voice, when it came: 'when she finally answered him.' This emphasises how deeply racist she is — she was thinking about how to deal with this information.", devices: ['Irony'] },
            { n: 7, text: 'Pressurized good-breeding. Voice, when it came,', note: "", devices: [] },
            { n: 8, text: 'Lipstick coated, long gold-rolled', note: "Lipstick coated, long gold-rolled — he describes what he thought she looked like. She sounded like the kind of person who would be wearing a long, gold coated of lipstick — a person holder in her mouth. Cigarette-holder piped — she describes a woman of a perceived higher social class.", devices: ['Imagery'] },
            { n: 9, text: 'Cigarette-holder pipped. Caught I was foully.', note: "IRONY: HE was not stuck in a bad position. SHE was. He feels guilty for being black and putting her in a bad position/making her uncomfortable. This shows HIS good breeding and good manners.", devices: ['Irony'] },
            { n: 10, text: '"HOW DARK?"...I had not misheard...."ARE YOU LIGHT', note: "'HOW DARK?' — she asked bluntly. It took me a second to realise that I hadn't misheard her. She repeated, 'Are you light skinned or very dark skinned?' It was like she was asking me something as simple as choosing between Button A and Button B on the phone booth — to make a call or to return my coins.", devices: ['Imagery'] },
            { n: 11, text: 'OR VERY DARK?" Button B. Button A. Stench', note: "'HOW DARK?' — he can't believe what he is hearing. 'ARE YOU LIGHT OR VERY LIGHT?' — his race is reduced to status of machine/telephone. She is being very rude. Stench of rancid breath of public hide-and-speak — he could hear the ugliness of her voice/the prejudice against his race over the phone/the public phone booth.", devices: ['Sarcasm'] },
            { n: 12, text: 'Of rancid breath of public hide-and-speak.', note: "", devices: ['Imagery'] },
            { n: 13, text: 'Red booth. Red pillar box. Red double-tiered', note: "Red booth, a red phone booth. A red mailbox, a red double-decker bus — its tires squelching through the hot asphalt. So, this kind of thing actually happens! Red pillar box — he describes his surroundings as if he wants to pinch himself — IS THIS REALLY HAPPENING?? IS SHE REALLY ASKING ME THESE QUESTIONS?? The colour RED shows his anger and strong emotions. It was real — this was really happening. He was not dreaming.", devices: ['Repetition', 'Symbolism'] },
            { n: 14, text: 'Omnibus squelching tar. It was real! Shamed', note: "", devices: ['Onomatopoeia'] },
            { n: 15, text: 'By ill-mannered silence, I gave in', note: "Feeling ashamed at my rude silence, he gave in and asked, utterly confused and shocked.", devices: [] },
            { n: 16, text: 'And asked, surrendered, simplification.', note: "Shamed by ill-mannered silence — he has been quiet for so long. Pushed dumbfounded to beg simplification — he still cannot really believe that she would ask such a question. He asks 'ONCE AGAIN', shows HIS superior breeding, manners and class — her bad manners.", devices: [] },
            { n: 17, text: 'Considerate she was, varying the emphasis—', note: "She was nice enough to vary the question: 'Are you dark-skinned,' 'Or very light?' Finally, it made sense. 'ARE YOU DARK? OR VERY LIGHT?' — The landlady is playing into the ignorant idea that black people with lighter skin (and, as such, whose skin is closer in appearance to that of white people) are superior to those with darker skin.", devices: ['Sarcasm'] },
            { n: 18, text: '"ARE YOU DARK? OR VERY LIGHT?" Revelation came.', note: "SARCASM: Asking the question in a different way (varying the emphasis) was not considerate, it was insulting. It was as if she was talking to someone of lower intelligence.", devices: ['Sarcasm'] },
            { n: 19, text: '"You mean—like plain or milk chocolate?"', note: "Finally, it made sense. I replied 'Are you asking if my skin is the colour of regular chocolate or milk chocolate?' Her confirmation was detached and formal, devastating in how thoughtless and impersonal she sounded.", devices: ['Sarcasm', 'Irony'] },
            { n: 20, text: 'Her assent was clinical, crushing in its light', note: "'Clinical, crushing' — cold, detached, impersonal. She is treating a human being like a specimen.", devices: ['Alliteration'] },
            { n: 21, text: 'Impersonality. Rapidly, wave-length adjusted,', note: "'Asks her if he must compare his skin colour to that of plain chocolate or milk chocolate.' 'You mean — like plain or milk chocolate.' Once again, she is comparing his skin in a clinical (detached/critical) and crushing (devastating) way.", devices: [] },
            { n: 22, text: 'I chose. "West African sepia"—and as after thought,', note: "He chose 'West African sepia.' And then, as an afterthought, 'Down in my passport.' Silence for spectroscopic examination. He quickly changed my tactics. He gave an answer: 'My skin colour is West African sepia.' At least it is in my passport. Then there was silence. But then her true feelings took over and she spoke, this time more harshly into the phone.", devices: ['Irony'] },
            { n: 23, text: '"Down in my passport." Silence for spectroscopic', note: "", devices: [] },
            { n: 24, text: 'Fight of fancy, ill truthfulness clanged her accent', note: "", devices: [] },
            { n: 25, text: 'Hard on the mouthpiece. "WHAT\'S THAT?" conceding', note: "'WHAT'S THAT?' — she asked, admitting, 'I don't know what that is.' 'It's a brunette,' he told her. 'That's pretty dark, isn't it?' she asked. 'Not altogether.' She admits her ignorance. We also see that she does not understand what he is saying — this shows that he is intellectually superior to her.", devices: ['Irony'] },
            { n: 26, text: '"DON\'T KNOW WHAT THAT IS." "Like brunette."', note: "", devices: [] },
            { n: 27, text: '"THAT\'S DARK, ISN\'T IT?" "Not altogether.', note: "", devices: [] },
            { n: 28, text: 'Facially, I am brunette, but, madam, you should see', note: "He uses descriptions of body parts to mock her — his face is brunette, his palms and soles are a 'peroxide blonde,' his bottom is 'raven black.' He is being deliberately tongue-in-cheek, mocking her ridiculous question by giving absurdly detailed descriptions.", devices: ['Sarcasm', 'Irony'] },
            { n: 29, text: 'The rest of me. Palm of my hand, soles of my feet', note: "", devices: [] },
            { n: 30, text: 'Are a peroxide blond. Friction, caused—', note: "", devices: [] },
            { n: 31, text: 'Foolishly, madam—by sitting down, has turned', note: "", devices: [] },
            { n: 32, text: 'My bottom raven black—One moment, madam!"—sensing', note: "", devices: [] },
            { n: 33, text: 'Her receiver rearing on the thunderclap', note: "As the poem closes, the landlady is about to hang up on the speaker — suggesting that, as a white person, she still holds the power in society to effectively silence the black speaker.", devices: ['Imagery'] },
            { n: 34, text: 'About my ears—"Madam," I pleaded, "wouldn\'t you rather', note: "He uses a mocking, sarcastic tone as he describes his skin colour. He doesn't just criticise the landlady's blatant racism, but also critiques the way she thinks about race itself. In doing so, the speaker refuses to let the ignorant choice that the landlady offers — for all the complexity of human identity be reduced to a simple, binary choice between 'dark' or 'light.'", devices: ['Sarcasm'] },
            { n: 35, text: 'See for yourself?"', note: "OBVIOUSLY, she does not want to see him. The speaker's ingenuity, however, the poem does not end on a triumphant note.", devices: ['Rhetorical question'] },
          ],
        },

        /* --- Summary & Analysis --- */
        { id: 'ep-tc-h-summary', type: 'heading', level: 3, text: 'Summary' },
        {
          id: 'ep-tc-summary',
          type: 'list',
          text: [
            "'Telephone Conversation' is a poem that satirises racism. The speaker, who is Black, makes fun of a white landlady who won't rent to him.",
            "At first the landlady seems ready to move forward with renting to the speaker, even 'Off premises.' She can't detect more than his or her race and b) that skin colour is irrelevant to the speaker's suitability as a tenant.",
            "When the speaker then makes a 'self-confession' about being 'African,' the conversation abruptly shifts to a discussion of skin tone.",
            "The speaker responds to this 'confession' by being ironic in the use of 'confession' here — a word usually associated with the revelation of something criminal, to undermine the racist notion that being 'African' is a bad thing.",
            "'Instead' of asking what an actual human being and potential tenant does professionally, the landlady reduces the speaker's question directly to a single attribute: skin colour. As such, the speaker refuses the landlady's question — to be not just offensive but also utterly illogical.",
            "The speaker also notes that the human body isn't just one colour: the speaker's face is 'brunette,' but the speaker's palms and foot soles are 'peroxide blonde.' The speaker is being deliberately tongue-in-cheek in the comparisons here, but the point is that race and identity are far too complex to be reduced to a simple, binary choice between 'dark' or 'light.'",
          ],
        },

        /* --- Questions --- */
        { id: 'ep-tc-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-tc-q',
          type: 'questions',
          qa: [
            { q: 'Refer to the final stanza: "About my ears..." Comment on how these lines convey the central idea of the poem.', marks: 3, a: "The final lines show the landlady about to slam down the phone ('receiver rearing on the thunderclap'), demonstrating that despite the speaker's intelligence and wit, racial prejudice ultimately 'wins' — the landlady refuses to engage. The speaker's plea 'wouldn't you rather see for yourself?' is both ironic and powerful — he knows she doesn't want to see him, but challenges her to confront her racism face to face." },
            { q: "How is the landlady perceived by the man? Is the man's perception of the lady parallel with her behaviour throughout the poem?", marks: 2, a: "Initially, the man perceives her as reasonable and 'considerate.' However, her true nature is revealed as ignorant and racist once she learns he is African. Yes, her behaviour throughout confirms this — she becomes increasingly clinical, impersonal, and rude, reducing his entire identity to a shade of skin colour." },
            { q: 'Refer to lines 6 and 7: "Silence. Silenced transmission of Pressurized good-breeding." Discuss the intervals of silence in the interaction between the landlady and the prospective tenant.', marks: 2, a: "The silence represents the landlady's internal struggle between her 'good breeding' (social manners) and her racism. She is caught off guard by his honesty and doesn't know how to respond without revealing her prejudice. The pressurised silence shows the tension between what she wants to say (something racist) and what her upbringing tells her is appropriate." },
            { q: "How are the speaker's feelings conveyed to the reader throughout the poem?", marks: 3, a: "Through irony, sarcasm, and vivid imagery. Initially, he feels the need to 'confess' (shame). The 'Red booth, Red pillar box' sequence shows his disbelief and anger. His 'surrender' to simplification shows frustration. Finally, his witty, sarcastic descriptions of his body parts (brunette face, peroxide blonde palms, raven black bottom) show his intelligence and defiance — he refuses to be diminished by her ignorance." },
            { q: 'How do we know he is stung by the landlady\'s insensitivity?', marks: 3, a: "His description of the silence as 'ill-mannered' shows he feels embarrassed. The repetition of red imagery (booth, pillar box, bus) suggests rising anger. 'Caught I was foully' and 'Shamed' directly express his hurt. His surrender to 'simplification' shows he is forced to degrade himself to communicate. The exclamation 'It was real!' reveals his disbelief that such prejudice still exists." },
            { q: 'Comment on how colour is emphasised throughout the poem.', marks: 3, a: "Colour is central to the poem's theme. The landlady uses 'dark' and 'light' to categorise race. The speaker responds with 'chocolate,' 'West African sepia,' 'brunette,' 'peroxide blonde,' and 'raven black' — showing the absurdity of reducing identity to colour. The red imagery (booth, pillar, bus) represents anger. Gold (cigarette holder) represents wealth. The contrast between these descriptions highlights how colour obsession distorts human interaction." },
            { q: 'Explain the use of capital letters in the poem.', marks: 2, a: "Capital letters represent the landlady's voice — she is shouting, emphasising, and demanding. 'HOW DARK?', 'ARE YOU LIGHT OR VERY DARK?', 'WHAT'S THAT?', 'THAT'S DARK, ISN'T IT?' — the capitals show her aggressive, demanding tone and her insensitivity. They create a visual contrast with the speaker's measured, lowercase responses, highlighting the power imbalance." },
            { q: "Do you think that the title 'Telephone Conversation' is suitable?", marks: 2, a: "Yes, the title is deceptively simple. On the surface, it describes a mundane phone call. But the poem reveals how even the most ordinary interaction can expose deep-seated racism. The telephone is significant because it means the landlady cannot see the speaker — making her obsession with his skin colour even more absurd and pointless." },
          ],
        },

        { id: 'ep-tc-h-essay', type: 'heading', level: 3, text: 'Essay Question' },
        {
          id: 'ep-tc-essay',
          type: 'callout',
          text: "'Telephone Conversation' by Wole Soyinka, exposes the existence of racial discrimination in society regardless of the stringent laws against it. Critically discuss this statement and state how the poet used tone, diction and structure to emphasise the theme. Your final answer should be presented as a well-written essay of 150-200 words. [10]",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 7: How Not to Stop — Gabeba Baderoon
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-hownottostop',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: 'How Not to Stop — Gabeba Baderoon',
      minutes: 30,
      blocks: [
        { id: 'ep-hns-h1', type: 'heading', level: 2, text: 'How not to stop' },
        { id: 'ep-hns-author', type: 'callout', text: 'by Gabeba Baderoon' },

        /* --- Context & Background --- */
        { id: 'ep-hns-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-hns-bio',
          type: 'paragraph',
          text: 'Gabeba Baderoon is a South African poet who lives in the United States.',
        },

        { id: 'ep-hns-h-summary', type: 'heading', level: 3, text: 'Summary' },
        {
          id: 'ep-hns-summary',
          type: 'list',
          text: [
            "This poem is about the relocation of the Coloured people from Lansdowne, Cape Malay. The poet's father has been part of the relocation and therefore is writing from a place where she experiences the after-effects of this relocation. The speaker and the poet could be one and the same.",
            "The speaker's father picks her up from school in a very fancy car. A Valiant was the car that Black people with money drove; there were very few BMW or MERC. It shows that Black people were better off than most people as they did not walk home.",
            "The reader gets the impression that the father was a very strict person who did not communicate during the drive home or when he sat at the head of the table during supper.",
            "The speaker recalls that the father had to force himself not to stop outside his old house as it was too painful. He still shopped in his old neighbourhood, but he never went back to visit his old house.",
            "The poet wants to expose and confront the issues of Colonialism and apartheid, looking at how it affected the ordinary people. Lives were ruined and families suffered over a long period of time.",
          ],
        },

        { id: 'ep-hns-h-title', type: 'heading', level: 3, text: 'Title Significance' },
        {
          id: 'ep-hns-title',
          type: 'list',
          text: [
            "How not to stop — significance of the title:",
            "Forced removal from his home that he had built.",
            "Pa's attachment/bond to his home and his past is clear.",
            "Under normal circumstances, it would be natural to stop outside your old home and perhaps even request a visit because of the nostalgia one experiences, especially when one leaves one's home unwillingly.",
            "How not to stop implies that he has to force himself to ignore the urge to reconnect with his beloved home.",
            "The title suggests that he will never get over the pain of losing his beloved home and the unfortunate impact of apartheid.",
          ],
        },

        { id: 'ep-hns-tip-title', type: 'callout', text: 'Exam Tip: The title "How not to stop" is frequently tested. It refers to Pa\'s daily emotional discipline of driving past his stolen home without stopping. The word "rehearsed" in line 21 is the key word connecting the title to the poem — it shows that NOT stopping requires deliberate, repeated practice, revealing the depth of his pain and attachment.' },

        { id: 'ep-hns-h-message', type: 'heading', level: 3, text: 'Message / Central Idea' },
        {
          id: 'ep-hns-message',
          type: 'list',
          text: [
            'The negative/painful effect of apartheid on non-white people of S.A. The inner conflict that non-white adults faced because of apartheid.',
            'The protective nature of non-white parents, who in spite of the abnormal conditions, tried their best to create a normal living environment for their children as well as a better future.',
          ],
        },

        { id: 'ep-hns-h-mood', type: 'heading', level: 3, text: 'The Mood' },
        {
          id: 'ep-hns-mood',
          type: 'paragraph',
          text: 'Tense because the father pretended to be stern in order to conceal his feelings.',
        },

        /* --- The Poem --- */
        { id: 'ep-hns-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-hns-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'Pa came to collect us from school', note: "Pa — term of endearment/respect for father. Usually Afrikaners and coloured people refer to their fathers as 'Pa.' 'Pa' is repeated at least 7 times. Significance: Pa is the focus of the poem. He was directly affected by apartheid. As head of the family, he has to function normally while carrying the pain of losing his home because of the Group Areas Act, that divided people geographically, placing them in separate areas according to Race.", devices: ['Repetition'] },
            { n: 2, text: 'in his white Valiant, the stem drive home.', note: "Line 2: Valiant — car that mostly non-white people drove. The stem drive home shows there was a lack of casual conversation, the mood was tense.", devices: ['Imagery'] },
            { n: 3, text: 'Pa sat at the head of the table,', note: "Head of table. Shows the respect his family had for him, yet he was evicted from his home that he had built. Depicts a patriarchal society in which the father was revered as the head of the household. The tense mood from the stem ride home is extended to lines 3-4 as Pa did not talk at the supper table.", devices: ['Symbolism'] },
            { n: 4, text: 'not talking at supper.', note: "", devices: [] },
            { n: 5, text: 'Pa stood in the driveway,', note: "Note the lines that show that he is hiding his feelings from his children: L2, L4, L6. The reader also gets this impression when the father faces his back to them while feeding the birds. Yet the birds are drawn to him, so it could be assumed that he is a good person. As sensitive as birds are. The relocation has changed his personality. He had to become hardened to face life. He turns away from the pigeons — appears to be hard, yet he feeds the birds and they appear to be drawn to him. He has a sensitive side.", devices: ['Imagery'] },
            { n: 6, text: 'with his back to us, throwing', note: "", devices: [] },
            { n: 7, text: 'seed into the wind with quick slings', note: "", devices: [] },
            { n: 8, text: 'of the hand, drawing the pigeons', note: "", devices: [] },
            { n: 9, text: 'as though he\'d called them.', note: "", devices: [] },
            { n: 10, text: 'Pa carved his own domino set,', note: "L10: Carved his own domino set. Creative/intelligent implies that if he had his way, he will carve a better life for his family yet he is stifled. The father was very good with his hands as he was able to build his own house.", devices: ['Symbolism'] },
            { n: 11, text: 'on weekend games sly as chess, slapped', note: "The father was also very intelligent as he always won during their Domino games. The father played Domino with them during the weekends which suggests a loving relationship even though he was strict — also the fact that he took the time to fetch his children from school.", devices: [] },
            { n: 12, text: 'the final piece on the wood table.', note: "", devices: [] },
            { n: 13, text: 'Pa drove us home past the house', note: "L13 — The speaker goes back to the ride home and explains that Pa drives past a house that he built himself. Forced removal of people of colour was common during apartheid. This explains the tense mood during the drive home. Although the speaker claims that Pa never looked back literally, it is evident that he was constantly on his mind even though he knew looking back would be a futile exercise as he can do nothing to change the past.", devices: ['Imagery'] },
            { n: 14, text: 'he built, from which his family was removed', note: "", devices: [] },
            { n: 15, text: 'in 1968, never looking again', note: "'Never looking again' — Pa refuses to look at the house because the memory is too painful.", devices: [] },
            { n: 16, text: 'in its direction.', note: "", devices: [] },
            { n: 17, text: 'Pa bought his leaf tea and hard cheddar', note: "Pa still patronises the stores that he used to whilst living in his old home. Pa's loyalty as a patron to these shops is juxtaposed by the betrayal he felt by his government who took away a house he had built — his lifetime.", devices: ['Juxtaposition'] },
            { n: 18, text: 'from Queen Bess supermarket and bread', note: "", devices: [] },
            { n: 19, text: 'at Protea bakery, the same shops', note: "", devices: [] },
            { n: 20, text: 'down the street from their old house.', note: "", devices: [] },
            { n: 21, text: 'Pa rehearsed how not to stop, not to get out', note: "'Rehearsed not to stop.' Tells the reader how difficult it was for him to let go. This again reveals a sensitive side to Pa as it exposes his emotional turmoil. His longing to go back and claim what rightfully belongs to him has to be restrained as he forces himself not to step out of the vehicle. The last line reinforces his ownership and the wrongful removal — it is a door that he made himself, yet he is denied access to it.", devices: [] },
            { n: 22, text: 'and walk to the front door he had made.', note: "'The front door he had made' — emphasises that he built this house with his own hands, making the forced removal even more painful and unjust.", devices: ['Imagery'] },
          ],
        },

        /* --- Questions --- */
        { id: 'ep-hns-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-hns-q',
          type: 'questions',
          qa: [
            { q: "Refer to line 2: 'in his white... stem drive home.' Explain what this line suggests about the speaker's upbringing.", marks: 2, a: "The Valiant car suggests the family was relatively well-off for a non-white family under apartheid. The 'stem drive home' (stern/silent drive) suggests a tense household where the father did not communicate openly, likely because of the emotional burden of apartheid." },
            { q: 'Why is the word "carved" in line 10 particularly appropriate?', marks: 2, a: "'Carved' is appropriate because it suggests skilled craftsmanship and creativity. Just as Pa carved the domino set with his hands, he also built his house with his own hands (the 'front door he had made'). The word emphasises his capability and intelligence, contrasting sharply with how the apartheid system treated him." },
            { q: "Refer to lines 21-22: 'Pa rehearsed how...he had made.' Critically discuss how the diction in these lines conveys the speaker's message about apartheid.", marks: 3, a: "'Rehearsed' implies repetitive practice — Pa had to actively train himself not to stop at his old home every time he drove past. This reveals the depth of his pain and attachment. 'Not to stop, not to get out' — the repetition of 'not to' emphasises the effort required to suppress his natural instinct. 'The front door he had made' is devastating — it confirms that he built this home himself, making the forced removal a deeply personal violation, not just a political act." },
            { q: "Critically comment on how lines 13-15 link to the title of the poem.", marks: 3, a: "Lines 13-15 describe Pa driving past the house he built but 'never looking again in its direction.' This connects directly to the title — 'How not to stop' is about the emotional discipline required to drive past your stolen home without stopping. Pa has 'rehearsed' this act of not stopping, suggesting it goes against every instinct. The title captures his daily struggle between longing and self-preservation." },
            { q: "Refer to lines 21-22: 'Pa rehearsed how...he had made.' What does the repetition of 'And' reveal about the speaker's feelings towards his forced removal?", marks: 3, a: "The repetition of 'and' creates a cumulative effect, building layer upon layer of memory and connection to the old neighbourhood. Each 'and' adds another detail that Pa clings to — the tea, the cheddar, the bakery, the shops — showing that his attachment to his community and home could not be severed by the Group Areas Act. The repetition reveals the speaker's deep understanding of her father's unspoken grief." },
            { q: "Account for the speaker's tone in the poem.", marks: 2, a: "The tone is reflective and tender, yet tinged with sadness and quiet anger. The speaker observes her father with empathy, noting the small ways he conceals his pain (turning his back, not talking, never looking at the house). There is also a sense of admiration for his strength and resilience, combined with sorrow for what apartheid took from him." },
          ],
        },

        { id: 'ep-hns-h-essay', type: 'heading', level: 3, text: 'Essay Question' },
        {
          id: 'ep-hns-essay',
          type: 'callout',
          text: "In 'How not to stop', the speaker explores the idea of apartheid, forced relocation and its painful effects. With close reference to diction, imagery, and tone, critically discuss this statement. Your response should take the form of a well-constructed essay of 150-200 words (about ONE page). [10]",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════════════════
       POEM 8: Hope is the Thing with Feathers — Emily Dickinson
       ═══════════════════════════════════════════════════════════════════════ */
    {
      id: 'ep-hope',
      chapterId: 'english-poetry-ch1',
      subjectId: 'english',
      title: '"Hope" is the Thing with Feathers — Emily Dickinson',
      minutes: 25,
      blocks: [
        { id: 'ep-hp-h1', type: 'heading', level: 2, text: '"Hope" is the thing with feathers' },
        { id: 'ep-hp-author', type: 'callout', text: 'by Emily Dickinson' },

        /* --- Context & Background --- */
        { id: 'ep-hp-h-bio', type: 'heading', level: 3, text: 'About the Poet' },
        {
          id: 'ep-hp-bio',
          type: 'paragraph',
          text: "American poet, 1830-1886. She was born in Massachusetts into a prominent family and was well-educated. She became a recluse and, by the end of her life, refused to leave her home or meet people. Her poems are often mysterious and make use of unusual punctuation marks. Common themes include death, nature and her own struggles and suffering. Only 7 of her 2000 poems were published in her lifetime. She is considered the greatest female American poet of the 19th century.",
        },

        { id: 'ep-hp-h-intro', type: 'heading', level: 3, text: 'Introduction' },
        {
          id: 'ep-hp-intro',
          type: 'paragraph',
          text: "Throughout, 'Hope is the Thing with Feathers,' the narrator perceives hope as a bird that resides inside humans. It persists dutifully without a break, singing constantly. Using a metaphor, she emphasises that it sings vigorously during a heavy storm to lay the bird in peace. As per the speaker, this bird never wavers by her side in the coldest of lands and strangest of seas, yet it never demanded a breadcrumb, singing away merrily.",
        },

        { id: 'ep-hp-h-about', type: 'heading', level: 3, text: 'About the Poem' },
        {
          id: 'ep-hp-about',
          type: 'list',
          text: [
            'This poem is a lyric in which the poet explores her understanding of hope, through the development of an extended metaphor.',
            'It is written simply but powerfully, using minimum words, mainly single-syllable words and a loose rhyme scheme: some end powerfully, rhymes and some internal rhymes.',
            "Dickinson's signature use of dashes is also evident.",
            'The poet uses a central metaphor of a tiny bird to convey her feelings about hope.',
            "She reflects on its frailties and strengths as well how it sustains her.",
            'The poem is reflective and introspective and suggests a quiet confidence in the power of hope.',
          ],
        },

        { id: 'ep-hp-h-struct', type: 'heading', level: 3, text: 'Structure & Form' },
        {
          id: 'ep-hp-struct',
          type: 'list',
          text: [
            "Rhyme: The poem follows a loose rhyme scheme of ABCB, conforming to the expected pattern of a ballad. The lines break the pattern (in both stanza one and stanza two) but generally, the pattern remains intact.",
            "Rhythm: 'Hope is the Thing with Feathers' is written in ballad meter, a common meter. This means that the lines alternate between iambic tetrameter and iambic trimeter. The odd-numbered lines contain a total of eight syllables. These are divided into sets of two, the first beat of which is unstressed and the second stressed. The even-numbered lines are written in iambic trimeter. This means, in regard to the metrical foot, that they follow the same pattern of stresses but contain only six syllables.",
            "Full of figurative language, this poem is an extended metaphor, transforming hope into a bird (the poet loved birds) that is ever present in the human soul. It sings, especially when times get tough. Hope springs eternal might be a reasonable summing up.",
            "With typical disregard for convention, Emily Dickinson's odd-looking syntax has clauses interrupted by dashes, and only one comma throughout. This can be confusing for the reader because of the need to pause and place extra emphasis on certain phrases.",
            "Caesura: When there is a break in a line of a metrical foot. Typically, this is achieved through punctuation. Dashes are one of the most recognisable features of Emily Dickinson's work as she commonly uses them in her poetry. They are used to create pauses throughout the poem (for caesuras). In 'Hope' is the thing with feathers - ', the dashes are used to place emphasis on the phrases that are placed after, or around the dashes.",
          ],
        },

        { id: 'ep-hp-h-devices', type: 'heading', level: 3, text: 'Literary Devices' },
        {
          id: 'ep-hp-devices',
          type: 'definitions',
          rows: [
            { term: 'Repetition', meaning: "The poet uses 'that' and 'and' throughout. 'Feathers' is repeated." },
            { term: 'Enjambment', meaning: "Seen when the poet cuts off a line before its natural stopping point. For example, seen between lines three and four of the second stanza." },
            { term: 'Metaphor', meaning: "Seen through the initial comparison between hope and a bird." },
            { term: 'Anaphora', meaning: "The repetition of the same word or phrase at the beginning of multiple lines. For example, 'And' which starts a total of five lines." },
            { term: 'Pathetic Fallacy', meaning: "Dickinson frequently references the weather. In the presence of the birdsong, the weather represents moments of emotional turmoil." },
          ],
        },

        { id: 'ep-hp-tip-metaphor', type: 'callout', text: 'Exam Tip: The extended metaphor (hope = bird) is central to every question on this poem. Remember the key parallel: birds have feathers (lightness/ability to rise), they perch (hope settles in the soul), they sing (hope communicates through feeling), they eat crumbs (yet hope asks nothing of us). Dickinson\'s dashes create caesura — always mention this when discussing her style.' },

        /* --- The Poem --- */
        { id: 'ep-hp-ph', type: 'heading', level: 2, text: 'The Poem' },
        {
          id: 'ep-hp-poem',
          type: 'poem',
          lines: [
            { n: 1, text: '"Hope" is the thing with feathers -', note: "Hope is compared to a bird — the central metaphor of the poem.", devices: ['Metaphor'] },
            { n: 2, text: 'That perches in the soul -', note: "Hope lives inside us, in our souls — it is always present.", devices: ['Metaphor'] },
            { n: 3, text: 'And sings the tune without the words -', note: "Hope communicates without language — it is a feeling, not a thought.", devices: ['Imagery'] },
            { n: 4, text: 'And never stops - at all.', note: "Hope is constant and never ceases. The dash before 'at all' adds emphasis.", devices: ['Caesura'] },
            { n: 5, text: 'And sweetest - in the gale - is heard -', note: "In the case of the second stanza, the speaker elucidates the expansive power of hope. It gets merrier and sweeter as the storm gets mightier and relentless. The speaker deems that no storm can sway hope and its adamant attitude. According to the speaker, it would take a deadly storm of astronomical proportions to flatten the bird of hope that has kept the ship sailing for most life.", devices: ['Paradox'] },
            { n: 6, text: 'And sore must be the storm -', note: "The storm must be extremely powerful to silence hope — but even then, it cannot.", devices: ['Personification'] },
            { n: 7, text: 'That could abash the little Bird -', note: "'Abash' means to humble or humiliate someone, to embarrass. The little Bird — capital B for Bird — is hope personified.", devices: ['Personification'] },
            { n: 8, text: 'That kept so many warm -', note: "Hope keeps people warm — it sustains and comforts humanity.", devices: ['Metaphor'] },
            { n: 9, text: "I've heard it in the chillest land,", note: "In the last stanza, Emily Dickinson concludes her poem by stressing that hope retains its clarity and tensile strength in the harshest of conditions, yet it never demands in return for its valiant services. Hope is inherently powerful and certainly needs no polishing, as it steers the ship from one storm to another with efficacy.", devices: ['Imagery'] },
            { n: 10, text: 'And on the strangest Sea -', note: "L7: Bird — capital B in Bird. The metaphorical aspect of 'Hope is the Thing with Feathers' is an old practice, used by well-known poets: the small bird represents hope in this poem. When abstract concepts such as death, love, and hope, they are under study, they are often represented by an object from nature — in this case, the bird.", devices: [] },
            { n: 11, text: 'Yet - never - in Extremity,', note: "Even in the most extreme circumstances, hope never asks for anything in return.", devices: ['Caesura'] },
            { n: 12, text: 'It asked a crumb - of me.', note: "Hope never demands anything. The bird metaphor is complete — birds eat crumbs, but hope doesn't even need that much from us. It gives freely without requiring anything in return.", devices: ['Metaphor'] },
          ],
        },

        /* --- Stanza Analysis --- */
        { id: 'ep-hp-h-s1', type: 'heading', level: 3, text: 'Stanza 1 Analysis' },
        {
          id: 'ep-hp-s1',
          type: 'paragraph',
          text: "Emily Dickinson is an expert employer of metaphors, as she uses the small bird to convey her message, indicating that hope burns in the harshest of storms, coldest of winds, and continuously within us, keeping us alive. In the case of the first quatrain, the narrator feels that hope can be deemed as a bird with feathers, sitting in its own tune merrily. It may not speak any specific language, yet it's a vital constituent of human souls. Just as incessantly, Emily Dickinson voices that hope is an eternal spring, as it's certainly present within human beings, enabling us to conquer unchartered territories.",
        },

        { id: 'ep-hp-h-s2', type: 'heading', level: 3, text: 'Stanza 2 Analysis' },
        {
          id: 'ep-hp-s2',
          type: 'paragraph',
          text: "In the case of the second stanza, the speaker elucidates the expansive power of hope. Over us, it gets merrier and sweeter as the storm gets mightier and relentless. The speaker deems that no storm can sway hope and its adamant attitude. According to the speaker, it would take a deadly storm of astronomical proportions to flatten the bird of hope that has kept the ship sailing for most of life.",
        },

        { id: 'ep-hp-h-s3', type: 'heading', level: 3, text: 'Stanza 3 Analysis' },
        {
          id: 'ep-hp-s3',
          type: 'paragraph',
          text: "In the last stanza or quatrain, Emily Dickinson concludes her poem by stressing that hope retains its clarity and tensile strength in the harshest of conditions, yet it never demands in return for its valiant services. Hope is inherently powerful and certainly needs no polishing, as it steers the ship from one storm to another with efficacy. The metaphorical aspect of 'Hope is the Thing with Feathers' is an old practice, used by well-known poets — the small bird represents hope in this poem. When abstract concepts such as death, love, and hope are under study, they are often represented by an object from nature — in this case, the bird.",
        },

        /* --- Title, Message, Features --- */
        { id: 'ep-hp-h-titleanalysis', type: 'heading', level: 3, text: 'Title Analysis' },
        {
          id: 'ep-hp-titleanalysis',
          type: 'definitions',
          rows: [
            { term: 'Hope is the thing with feathers', meaning: 'Metaphor for bird — implies not allowing oneself to be anchored/stuck/rooted, but instead allowing oneself the space/freedom to look for healing/improvement/second chances.' },
          ],
        },

        { id: 'ep-hp-h-msg', type: 'heading', level: 3, text: 'Message / Central Idea' },
        {
          id: 'ep-hp-msg',
          type: 'list',
          text: [
            'Importance of embracing/accepting the challenges and pain one has to face.',
            'Because our reactions to painful circumstances will either make them easier or more painful.',
            'The reaction of the bird to the strongest and most dangerous elements, in spite of the hunger it faces, is admirable — a tiny, fragile creature like a bird, can teach man how to behave when challenges are faced.',
            "The little creature accepts its faith.",
            'Hope is kept alive by the little creature\'s attitude.',
          ],
        },

        { id: 'ep-hp-h-features', type: 'heading', level: 3, text: 'Noteworthy Features' },
        {
          id: 'ep-hp-features',
          type: 'list',
          text: [
            'Use of punctuation (dashes).',
            'Tone: admiration.',
            'Use of sustained metaphor.',
            'L7: Bird — capital B in Bird.',
            'Sea.',
            'Philosophical mood.',
          ],
        },

        { id: 'ep-hp-h-gloss', type: 'heading', level: 3, text: 'Glossary' },
        {
          id: 'ep-hp-gloss',
          type: 'definitions',
          rows: [
            { term: 'Perches', meaning: 'Rests, roots' },
            { term: 'Gale', meaning: 'A very strong wind' },
            { term: 'Abash', meaning: 'To humble or humiliate someone, embarrass' },
            { term: 'Chillest', meaning: 'Error — coldest' },
          ],
        },

        /* --- Questions --- */
        { id: 'ep-hp-h-q', type: 'heading', level: 3, text: 'Questions' },
        {
          id: 'ep-hp-q',
          type: 'questions',
          qa: [
            { q: 'Identify and explain the qualities of the bird as revealed in the first stanza.', marks: 3, a: "The bird (hope) has feathers (lightness, ability to fly/rise), it 'perches in the soul' (it is always present within us), it 'sings the tune without the words' (it communicates through feeling, not logic), and it 'never stops — at all' (it is constant and persistent). These qualities portray hope as resilient, ever-present, and wordlessly comforting." },
            { q: "What does the gale represent in this poem?", marks: 1, a: "The gale represents the storms of life — challenges, hardship, adversity, and emotional turmoil that test a person's spirit." },
            { q: "Explain the significance of the poet's choice of words in lines 5-6: 'And sweetest — in the gale — is heard —'", marks: 3, a: "'Sweetest' is paradoxical — the bird's song is most beautiful precisely when the storm is worst. This suggests that hope is strongest when we need it most. The dashes create pauses that emphasise each phrase, forcing the reader to absorb the idea that adversity makes hope sweeter, not weaker." },
            { q: "How can hope's song be endless?", marks: 2, a: "Hope's song is endless because it 'never stops — at all.' Unlike physical things that wear out, hope is an abstract force that persists regardless of circumstances. It sings in the coldest lands and strangest seas, proving that no external condition can silence it." },
            { q: "Explain what the poet is implying when she says 'And sore must be the storm — That could abash the little Bird.'", marks: 3, a: "The poet implies that it would take an extraordinarily powerful storm to even embarrass (let alone defeat) hope. The word 'sore' means extreme/severe, and 'abash' means to shame. The implication is that hope is nearly indestructible — only the most devastating of circumstances could even come close to silencing it, and even then, it persists." },
            { q: 'Discuss the effectiveness of the last stanza in the context of the poem as a whole.', marks: 3, a: "The last stanza is effective because it shifts from the universal to the personal ('I've heard it,' 'of me'). After establishing hope's universal qualities in stanzas 1 and 2, Dickinson now confirms she has personally experienced hope in the 'chillest land' and 'strangest Sea' — extreme conditions. The final line, 'It asked a crumb — of me,' is powerful because it reveals that hope gives everything and asks for nothing in return, making it the most generous force in human experience." },
          ],
        },

        { id: 'ep-hp-h-aspects', type: 'heading', level: 3, text: 'Aspects for Analysis of ALL Poems' },
        {
          id: 'ep-hp-aspects',
          type: 'list',
          text: [
            'POET: Which country/place/time?',
            'Read the TITLE and note the poet. TITLE: Why this title? Meaning/significance of title. How does title indicate what the poem is about?',
            'SPEAKER: Who is the speaker? Is the poem about the speaker or is the speaker observing what is happening, and commenting on it?',
            'WHERE? Setting.',
            'THEMES: Central ideas/messages in the poem (most important message).',
            'TONE of speaker: Tone indicates: FEELING, ATTITUDE, MOOD (FAM): e.g. angry, jovial, confused, sad, playful, sombre, wise, sarcastic, etc.',
            "Look for lines or words that are repeated. Why the repetition? What is the effect or impact of the repetition? A REPETITION IS ALSO REFERRED TO A REFRAIN.",
            'IMAGERY: Means the various figures of speech: metaphor (a metaphor that appears throughout the poem = sustained metaphor), simile, euphemism (a subtle way of saying something harsh). Rhetorical questioning (answer not given/reader knows the answer). Hyperbole (exaggeration), implied, personification, pun (double meaning). In other words the figurative language.',
            "Look for a change in the poem: e.g. Speaker may be upset at what has happened. When he does so, he becomes calm. P.S. Not all change happens towards the end of a poem.",
            'SOME COMMON QUESTIONS AND WHAT THEY MEAN:',
            'Comment on the title and state its appropriateness.',
            'What is the impact of a particular line and is it appropriate? Impact means effect on the reader.',
            'What impression does a certain line/word/phrase create? Impression; effect it has on the reader. Why is it repeated?',
            'How does a certain word/line/phrase create the mood in the poem? Mood: atmosphere (e.g. The thick black atmosphere creates an evil or dark negative mood).',
            "You will also get questions where you are asked to respond critically. This means that you will look at what is said and say whether it is the correct/fair/justifiable way of looking at a point or not. You must also give a reason and refer to diction. Critical comments require you to look at all aspects before you comment.",
            'Words in the poem: imagery (certain lines where there are appropriate figures of speech and tone).',
            "How does a certain line show the central message in the poem?",
            'Diction: words used in a certain line in the poem.',
          ],
        },
      ],
    },
  ],
};
