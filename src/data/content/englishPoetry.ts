import type { Chapter } from '@/lib/types';

/**
 * English — Grade 10
 * Poetry: 8 prescribed poems.
 *
 * Each poem is split into THREE lessons (mirroring the Afrikaans topic split):
 *   1. Context & Background  — biography, historical context, form, structure, themes
 *   2. The Poem & Analysis   — full poem text + line-by-line expandable analysis
 *   3. Questions & Essay     — short exam questions + model essay answer
 *
 * This gives 24 focused lessons across the chapter.
 */
export const ENGLISH_POETRY_CHAPTER: Chapter = {
  id: 'eng-poetry',
  subjectId: 'english',
  title: 'Poetry — Prescribed Poems',
  summary: 'Eight prescribed poems studied for themes, poetic devices, tone, mood, and exam essay writing.',
  term: 1,
  lessons: [

    /* ══════════════════════════════════════════════════════════════════════
       POEM 1 — Sonnet 18 (Shakespeare)
       Lesson A: Context & Form
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-s18-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Sonnet 18 — Context & Form',
      minutes: 8,
      blocks: [
        {
          id: 's18c-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet',
        },
        {
          id: 's18c-p1',
          type: 'paragraph',
          text: 'William Shakespeare (1564–1616) was an English playwright, poet, and actor — widely regarded as the greatest writer in the English language. He wrote 154 sonnets, probably during the 1590s. The sonnets were published in 1609 and are addressed to two figures: a "Fair Youth" (young man of beauty) and a "Dark Lady." Sonnet 18 is addressed to the Fair Youth.',
        },
        {
          id: 's18c-h2',
          type: 'heading',
          level: 2,
          text: 'Historical Context',
        },
        {
          id: 's18c-p2',
          type: 'paragraph',
          text: 'The Renaissance (c. 1400–1600) placed enormous value on beauty, art, and the power of language to preserve what time destroys. Shakespeare\'s sonnets are deeply engaged with the idea that poetry can defeat mortality. Sonnet 18 is the fullest expression of this belief: the poem argues that the beloved will live forever through the verses themselves.',
        },
        {
          id: 's18c-h3',
          type: 'heading',
          level: 2,
          text: 'Form & Structure',
        },
        {
          id: 's18c-form',
          type: 'definitions',
          rows: [
            { term: 'Sonnet type', meaning: 'Shakespearean (English) sonnet — 14 lines, 3 quatrains + 1 couplet.' },
            { term: 'Metre', meaning: 'Iambic pentameter: 10 syllables per line, da-DUM rhythm (unstressed / stressed).' },
            { term: 'Rhyme scheme', meaning: 'ABAB CDCD EFEF GG — three interlocking quatrains close with a rhyming couplet.' },
            { term: 'Volta', meaning: 'The "turn" in argument. Occurs at line 9 with "But" — shifts from "summer decays" to "you will not."' },
            { term: 'Couplet', meaning: 'The final two lines (13–14) that deliver the poem\'s central claim: poetry gives immortality.' },
          ],
        },
        {
          id: 's18c-h4',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 's18c-themes',
          type: 'list',
          text: [
            'The power of poetry / immortality through art — the poem argues literature can defeat death.',
            'The impermanence of nature — summer, beauty, and life are all temporary.',
            'Love and admiration — the speaker holds the beloved above all natural things.',
            'Time and decay — everything natural is subject to time\'s destruction.',
          ],
        },
        {
          id: 's18c-tone-h',
          type: 'heading',
          level: 3,
          text: 'Tone & Mood',
        },
        {
          id: 's18c-tone',
          type: 'paragraph',
          text: 'The tone begins contemplative and questioning (line 1), becomes observational and slightly melancholy as summer\'s flaws are catalogued (lines 3–8), then turns triumphant, confident, and celebratory from line 9 onwards. The mood is ultimately joyful and defiant — a victory over mortality through art.',
        },
      ],
    },

    /* ── Sonnet 18 — Lesson B: Poem & Analysis ─── */
    {
      id: 'eng-s18-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Sonnet 18 — Poem & Analysis',
      minutes: 14,
      blocks: [
        {
          id: 's18a-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 's18a-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'Shall I compare thee to a summer\'s day?' },
            { n: 2, text: 'Thou art more lovely and more temperate.' },
            { n: 3, text: 'Rough winds do shake the darling buds of May,' },
            { n: 4, text: 'And summer\'s lease hath all too short a date.' },
            { n: 5, text: 'Sometime too hot the eye of heaven shines,' },
            { n: 6, text: 'And often is his gold complexion dimmed;' },
            { n: 7, text: 'And every fair from fair sometime declines,' },
            { n: 8, text: 'By chance, or nature\'s changing course, untrimmed;' },
            { n: 9, text: 'But thy eternal summer shall not fade,' },
            { n: 10, text: 'Nor lose possession of that fair thou ow\'st,' },
            { n: 11, text: 'Nor shall death brag thou wand\'rest in his shade,' },
            { n: 12, text: 'When in eternal lines to Time thou grow\'st.' },
            { n: 13, text: 'So long as men can breathe, or eyes can see,' },
            { n: 14, text: 'So long lives this, and this gives life to thee.' },
          ],
        },
        {
          id: 's18a-analysis-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 's18a-lines',
          type: 'lines',
          lines: [
            {
              n: 1, text: 'Shall I compare thee to a summer\'s day?',
              note: 'The opening rhetorical question introduces the central comparison — and immediately signals it will be rejected. The speaker raises the summer comparison only to argue the beloved surpasses it.',
              devices: ['Rhetorical question', 'Direct address', 'Extended metaphor (summer)'],
            },
            {
              n: 2, text: 'Thou art more lovely and more temperate.',
              note: '"Temperate" = mild, balanced. The beloved is not just more beautiful but better-natured. Summer can be too hot, too stormy; the beloved is perfectly measured.',
              devices: ['Comparison', 'Archaic diction ("Thou art")'],
            },
            {
              n: 3, text: 'Rough winds do shake the darling buds of May,',
              note: '"Darling buds of May" — beloved spring blossoms — are shaken by rough winds. Nature damages its own most beautiful things. The beloved is more reliable than this.',
              devices: ['Imagery (visual, tactile)', 'Alliteration', 'Personification (winds shake)'],
            },
            {
              n: 4, text: 'And summer\'s lease hath all too short a date.',
              note: '"Lease" is a legal metaphor — summer only rents its time; it doesn\'t own permanence. "Too short a date" means the lease expires too quickly. Summer\'s beauty is brief.',
              devices: ['Metaphor (legal lease)', 'Personification of summer'],
            },
            {
              n: 5, text: 'Sometime too hot the eye of heaven shines,',
              note: '"Eye of heaven" = the sun. The sun sometimes shines too harshly — making summer unpleasant. Nature is inconsistent and extreme.',
              devices: ['Metaphor ("eye of heaven" = sun)', 'Imagery'],
            },
            {
              n: 6, text: 'And often is his gold complexion dimmed;',
              note: '"Gold complexion" personifies the sun as a being with a face. Clouds dim the sun. Even the sun\'s glory is frequently obscured — nothing in nature sustains beauty.',
              devices: ['Personification', 'Metaphor'],
            },
            {
              n: 7, text: 'And every fair from fair sometime declines,',
              note: '"Every fair" = every beautiful thing. Everything beautiful eventually loses its beauty. This is a universal law of nature that the beloved will escape.',
              devices: ['Repetition ("fair…fair")', 'Universal statement'],
            },
            {
              n: 8, text: 'By chance, or nature\'s changing course, untrimmed;',
              note: '"Untrimmed" = stripped of beauty. Beautiful things lose their looks either by accident ("chance") or by natural aging. The semicolon closes the argument for summer\'s flaws.',
              devices: ['Metaphor ("untrimmed")', 'Alliteration'],
            },
            {
              n: 9, text: 'But thy eternal summer shall not fade,',
              note: 'THE VOLTA — the poem turns here. "But" signals reversal. Everything before was negative; now the beloved\'s beauty is declared "eternal." This word directly contrasts all the temporary imagery.',
              devices: ['Volta', 'Antithesis', 'Metaphor ("eternal summer")'],
            },
            {
              n: 10, text: 'Nor lose possession of that fair thou ow\'st,',
              note: '"That fair thou ow\'st" = the beauty you possess. The beloved will not lose possession of beauty the way summer loses warmth. The legal ownership metaphor continues.',
              devices: ['Legal metaphor (possession)', 'Archaic diction'],
            },
            {
              n: 11, text: 'Nor shall death brag thou wand\'rest in his shade,',
              note: 'Death is personified as a boastful figure who claims souls. The poet defiantly declares death will NOT claim the beloved. The beloved will outlive even death.',
              devices: ['Personification of Death', 'Defiance / tone shift'],
            },
            {
              n: 12, text: 'When in eternal lines to Time thou grow\'st.',
              note: '"Eternal lines" = the lines of this very poem. The beloved grows into immortality THROUGH the poem. Poetry defeats time and death.',
              devices: ['Self-referential', 'Metaphor ("eternal lines")'],
            },
            {
              n: 13, text: 'So long as men can breathe, or eyes can see,',
              note: 'As long as humanity exists, the poem will endure. "Breathe" and "see" are synecdoche for human life.',
              devices: ['Synecdoche', 'Anaphora ("So long as… So long…")'],
            },
            {
              n: 14, text: 'So long lives this, and this gives life to thee.',
              note: '"This" = the poem itself. The poem lives, and through it the beloved lives eternally. Triumphant close.',
              devices: ['Anaphora', 'Paradox (poem gives life)', 'Self-referential'],
            },
          ],
        },
      ],
    },

    /* ── Sonnet 18 — Lesson C: Questions & Essay ─── */
    {
      id: 'eng-s18-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Sonnet 18 — Questions & Essay',
      minutes: 10,
      blocks: [
        {
          id: 's18q-h1',
          type: 'heading',
          level: 2,
          text: 'Exam Questions — Sonnet 18',
        },
        {
          id: 's18q-q',
          type: 'questions',
          qa: [
            {
              q: 'What does the opening question "Shall I compare thee to a summer\'s day?" tell you about the poem\'s subject?',
              marks: 2,
              a: [
                'The speaker is addressing a beloved person and considering whether to use summer as a metaphor for their beauty.',
                'The question is rhetorical — the speaker will argue the beloved is MORE beautiful than summer.',
              ],
            },
            {
              q: 'Identify and explain ONE poetic device in line 5: "Sometime too hot the eye of heaven shines."',
              marks: 2,
              a: '"Eye of heaven" is a METAPHOR for the sun. It compares the sun to an eye watching from above, giving it a human quality. This makes the sun\'s inconsistency feel personal — even the sun\'s "gaze" is unreliable.',
            },
            {
              q: 'Explain the VOLTA. Where does it occur and what changes?',
              marks: 3,
              a: [
                'The volta occurs at line 9, beginning with "But."',
                'Lines 1–8 catalogue summer\'s flaws — it is too short, too hot, inconsistent, and everything beautiful decays.',
                'From line 9, the speaker reverses the argument: the beloved\'s beauty is "eternal" and will not fade, preserved forever by the poem.',
              ],
            },
            {
              q: 'How does Shakespeare use the closing couplet to make a bold claim about poetry?',
              marks: 3,
              a: [
                '"So long as men can breathe, or eyes can see" — the poem will endure as long as humanity exists.',
                '"So long lives this, and this gives life to thee" — "this" is the poem, which gives the beloved eternal life.',
                'Shakespeare claims poetry is more powerful than time and death.',
              ],
            },
            {
              q: 'ESSAY: Discuss how Shakespeare uses contrast in Sonnet 18 to express admiration for the beloved. (8 marks)',
              marks: 8,
              a: [
                'INTRODUCTION: In Sonnet 18, Shakespeare uses sustained contrast between the impermanence of nature (summer) and the eternal beauty of the beloved to express admiration and argue for the immortalising power of poetry.',
                'BODY 1 — Nature as imperfect: "Rough winds do shake the darling buds of May" (line 3) and "summer\'s lease hath all too short a date" (line 4) show that summer is violent, brief, and temporary. Even the sun is inconsistent.',
                'BODY 2 — The beloved as superior: The beloved is "more lovely and more temperate" (line 2). "Temperate" suggests consistent, balanced — qualities summer lacks. Perfection set against nature\'s imperfection.',
                'BODY 3 — The volta and immortality: "But thy eternal summer shall not fade" (line 9) is the climax. Where summer fades, the beloved is "eternal." Death itself will not claim them.',
                'CONCLUSION: The poem\'s ultimate contrast is between mortality and immortality. These "eternal lines" (line 12) preserve the beloved beyond time and death. "So long lives this, and this gives life to thee" — admiration becomes an act of creation.',
              ],
            },
          ],
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════════
       POEM 2 — Caged Bird (Maya Angelou)
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-cb-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Caged Bird — Context & Form',
      minutes: 8,
      blocks: [
        {
          id: 'cbc-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet',
        },
        {
          id: 'cbc-p1',
          type: 'paragraph',
          text: 'Maya Angelou (1928–2014) was an African-American poet, memoirist, and civil rights activist. She experienced racial segregation and violence growing up in the American South. Her autobiographical novel "I Know Why the Caged Bird Sings" (1969) made her famous; this poem shares its title and central metaphor. She was a close friend of Malcolm X and Martin Luther King Jr., and her work is deeply embedded in the African-American struggle for civil rights.',
        },
        {
          id: 'cbc-h2',
          type: 'heading',
          level: 2,
          text: 'Historical Context',
        },
        {
          id: 'cbc-p2',
          type: 'paragraph',
          text: '"Caged Bird" (1983) draws on a metaphor first used by Paul Laurence Dunbar in "Sympathy" (1899). It reflects the African-American experience of racial segregation and systemic oppression. The "free bird" represents privileged, white America; the "caged bird" represents Black Americans imprisoned by racism, denied education, rights, and the most basic freedoms. Written in the post-civil rights era, the poem insists the struggle for equality is not over.',
        },
        {
          id: 'cbc-h3',
          type: 'heading',
          level: 2,
          text: 'Form & Structure',
        },
        {
          id: 'cbc-form',
          type: 'definitions',
          rows: [
            { term: 'Verse form', meaning: 'Free verse — no fixed rhyme scheme or metre, though some internal rhyme exists.' },
            { term: 'Structure', meaning: 'Six stanzas of varying length. The poem alternates between free bird and caged bird.' },
            { term: 'Refrain', meaning: 'The third stanza (caged bird\'s song) is REPEATED as the final stanza — emphasising the enduring cry for freedom.' },
            { term: 'Alternating structure', meaning: 'Free bird / caged bird / song / free bird / caged bird / song — mirrors the contrast between freedom and oppression.' },
          ],
        },
        {
          id: 'cbc-h4',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 'cbc-themes',
          type: 'list',
          text: [
            'Freedom vs. oppression — the central contrast of the poem.',
            'Racial inequality — the free/caged bird represents white privilege vs. Black oppression in America.',
            'Resilience of the human spirit — the caged bird still sings despite everything.',
            'The power of art and voice — singing is the last form of freedom available.',
            'Dreams and longing — the caged bird sings of things "unknown but longed for still."',
          ],
        },
      ],
    },

    {
      id: 'eng-cb-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Caged Bird — Poem & Analysis',
      minutes: 14,
      blocks: [
        {
          id: 'cba-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 'cba-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'A free bird leaps' },
            { n: 2, text: 'on the back of the wind' },
            { n: 3, text: 'and floats downstream' },
            { n: 4, text: 'till the current ends' },
            { n: 5, text: 'and dips his wing' },
            { n: 6, text: 'in the orange sun rays' },
            { n: 7, text: 'and dares to claim the sky.' },
            { n: 8, text: '' },
            { n: 9, text: 'But a bird that stalks' },
            { n: 10, text: 'down his narrow cage' },
            { n: 11, text: 'can seldom see through' },
            { n: 12, text: 'his bars of rage' },
            { n: 13, text: 'his wings are clipped and' },
            { n: 14, text: 'his feet are tied' },
            { n: 15, text: 'so he opens his throat to sing.' },
            { n: 16, text: '' },
            { n: 17, text: 'The caged bird sings' },
            { n: 18, text: 'with a fearful trill' },
            { n: 19, text: 'of things unknown' },
            { n: 20, text: 'but longed for still' },
            { n: 21, text: 'and his tune is heard' },
            { n: 22, text: 'on the distant hill' },
            { n: 23, text: 'for the caged bird' },
            { n: 24, text: 'sings of freedom.' },
            { n: 25, text: '' },
            { n: 26, text: 'The free bird thinks of another breeze' },
            { n: 27, text: 'and the trade winds soft through the sighing trees' },
            { n: 28, text: 'and the fat worms waiting on a dawn-bright lawn' },
            { n: 29, text: 'and he names the sky his own.' },
            { n: 30, text: '' },
            { n: 31, text: 'But a caged bird stands on the grave of dreams' },
            { n: 32, text: 'his shadow shouts on a nightmare scream' },
            { n: 33, text: 'his wings are clipped and his feet are tied' },
            { n: 34, text: 'so he opens his throat to sing.' },
            { n: 35, text: '' },
            { n: 36, text: 'The caged bird sings' },
            { n: 37, text: 'with a fearful trill' },
            { n: 38, text: 'of things unknown' },
            { n: 39, text: 'but longed for still' },
            { n: 40, text: 'and his tune is heard' },
            { n: 41, text: 'on the distant hill' },
            { n: 42, text: 'for the caged bird' },
            { n: 43, text: 'sings of freedom.' },
          ],
        },
        {
          id: 'cba-lines-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 'cba-lines',
          type: 'lines',
          lines: [
            {
              n: 1, text: 'A free bird leaps',
              note: 'The poem opens with energetic, upward movement — "leaps" suggests joy, spontaneity, physical exuberance. The free bird has agency and vitality. The brevity of the line mirrors the quickness and freedom of the leap.',
              devices: ['Action verb (leaps)', 'Extended metaphor begins'],
            },
            {
              n: 2, text: 'on the back of the wind',
              note: '"Back of the wind" personifies the wind as a creature you can ride. The free bird moves WITH nature, supported by it. This contrasts with the caged bird, which is imprisoned by human-made bars.',
              devices: ['Personification', 'Metaphor'],
            },
            {
              n: 7, text: 'and dares to claim the sky.',
              note: '"Dares to claim" — the free bird is bold and possessive. It treats the sky as its territory. This echoes the privilege of those allowed to "own" space — whether physical, political or social.',
              devices: ['Connotation of ownership/privilege', 'Diction ("dares")'],
            },
            {
              n: 9, text: 'But a bird that stalks',
              note: '"But" pivots the poem sharply. "Stalks" is a predatory, tense word used here for the caged bird\'s movement within its cage. It paces like a trapped animal — frustration and danger in the word.',
              devices: ['Contrast / antithesis', 'Connotation of "stalks"'],
            },
            {
              n: 12, text: 'his bars of rage',
              note: '"Bars of rage" — the physical bars of the cage AND bars of consuming anger. The caged bird is imprisoned by both literal bars and rage. Anger itself becomes a barrier.',
              devices: ['Metaphor', 'Double meaning (physical + emotional bars)'],
            },
            {
              n: 13, text: 'his wings are clipped and',
              note: '"Clipped wings" = deliberate mutilation to prevent flight. Represents the systematic denial of education, rights, and opportunities.',
              devices: ['Symbolism (clipped wings = denied potential)', 'Imagery'],
            },
            {
              n: 15, text: 'so he opens his throat to sing.',
              note: 'Even without wings, even with tied feet, the bird can still sing. Singing is the last freedom. Oppression cannot silence the human spirit entirely.',
              devices: ['Symbolism (singing = resilience/resistance)'],
            },
            {
              n: 18, text: 'with a fearful trill',
              note: '"Fearful" is ambiguous: the song comes from fear AND is awe-inspiring. "Trill" — a musical term — shows the bird is a genuine singer despite suffering.',
              devices: ['Ambiguity ("fearful")', 'Diction'],
            },
            {
              n: 24, text: 'sings of freedom.',
              note: 'The poem\'s most direct statement. The caged bird\'s song is about one thing: freedom. The word ends the refrain like a declaration.',
              devices: ['Theme statement', 'Direct diction'],
            },
            {
              n: 31, text: 'But a caged bird stands on the grave of dreams',
              note: '"Grave of dreams" — the caged bird\'s aspirations are dead and buried. "Stands on" suggests it is trapped above its own buried potential.',
              devices: ['Metaphor ("grave of dreams")', 'Imagery of death/burial'],
            },
            {
              n: 32, text: 'his shadow shouts on a nightmare scream',
              note: '"Shadow shouts" and "nightmare scream" — even the bird\'s shadow is in anguish. Synaesthesia (a shadow that makes sound) amplifies the intensity of suffering.',
              devices: ['Synaesthesia', 'Hyperbole', 'Imagery'],
            },
          ],
        },
      ],
    },

    {
      id: 'eng-cb-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Caged Bird — Questions & Essay',
      minutes: 10,
      blocks: [
        {
          id: 'cbq-h1',
          type: 'heading',
          level: 2,
          text: 'Exam Questions — Caged Bird',
        },
        {
          id: 'cbq-q',
          type: 'questions',
          qa: [
            {
              q: 'What does the "free bird" symbolise in Angelou\'s poem?',
              marks: 2,
              a: [
                'The free bird symbolises privileged people who are unrestricted — with freedom of movement, opportunity, and self-determination.',
                'In the context of Angelou\'s life and the poem\'s historical setting, it represents white Americans who "claim the sky" (line 7).',
              ],
            },
            {
              q: 'What is the effect of repeating the third stanza at the end of the poem?',
              marks: 3,
              a: [
                'The repetition emphasises that the desire for freedom is persistent and unsilenceable.',
                'It gives the poem a circular structure, suggesting the caged bird\'s situation has not changed — freedom is still denied.',
                'It reinforces the caged bird\'s resilience: no matter what, it continues to sing. The longing cannot be extinguished.',
              ],
            },
            {
              q: 'Explain the metaphor "bars of rage" (line 12).',
              marks: 2,
              a: [
                '"Bars of rage" has a double meaning: the physical bars of the cage, and the metaphorical bars of anger and frustration.',
                'The caged bird is imprisoned by both its literal cage AND by its own consuming rage — anger becomes an additional barrier to freedom.',
              ],
            },
            {
              q: 'ESSAY: Discuss how Angelou uses contrast to develop the theme of freedom in "Caged Bird." (8 marks)',
              marks: 8,
              a: [
                'INTRODUCTION: In "Caged Bird," Maya Angelou uses sustained, systematic contrast between the free bird and the caged bird to explore the theme of freedom and its denial, ultimately arguing that the human spirit cannot be completely suppressed.',
                'BODY 1 — Physical freedom vs. imprisonment: The free bird "leaps on the back of the wind" (line 2) — verbs of easy, effortless movement. The caged bird "stalks down his narrow cage" (lines 9–10) and its "wings are clipped and feet are tied" (lines 13–14). Expansive movement vs. brutal constriction.',
                'BODY 2 — Ownership and exclusion: The free bird "dares to claim the sky" (line 7) and "names the sky his own" (line 29). The caged bird "stands on the grave of dreams" (line 31) — denied not just space, but the right to dream.',
                'BODY 3 — Internal experience: The free bird thinks of "fat worms waiting on a dawn-bright lawn" (line 28) — sensory abundance. The caged bird sings with "a fearful trill of things unknown" (lines 18–19). One bird experiences reality fully; the other only imagines.',
                'CONCLUSION: Through these contrasts, Angelou captures the injustice of racial oppression. Yet the poem\'s final image — the caged bird singing of freedom — is also a triumph: despite everything, the voice rises. The bird that has least is the one that sings.',
              ],
            },
          ],
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════════
       POEM 3 — A Young Man's Thoughts Before June 16th (Johennesse)
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-j16-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: "A Young Man's Thoughts — Context & Form",
      minutes: 8,
      blocks: [
        {
          id: 'j16c-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet & Historical Context',
        },
        {
          id: 'j16c-p1',
          type: 'paragraph',
          text: 'Fhazel Johennesse is a South African poet who wrote this poem in the context of the Soweto Uprising of June 16, 1976 — when thousands of Black South African students marched in protest against the apartheid government\'s Afrikaans Medium Decree, which forced schools to teach in Afrikaans. Police opened fire on the peaceful students, killing many, including 13-year-old Hector Pieterson. The day is now commemorated as Youth Day. The poem imagines the inner thoughts of a young man the night before the march.',
        },
        {
          id: 'j16c-h2',
          type: 'heading',
          level: 2,
          text: 'Form & Structure',
        },
        {
          id: 'j16c-form',
          type: 'definitions',
          rows: [
            { term: 'Verse form', meaning: 'Free verse — no rhyme scheme or fixed metre. Informal, conversational.' },
            { term: 'Tense', meaning: 'Future tense ("i will," "i\'ll") throughout most of the poem; shifts to present tense in the final 5 lines ("tonight," "burns," "i\'m afraid").' },
            { term: 'Capitalisation', meaning: 'No capitalisation anywhere — not even "I" — suggesting youth, informality, and urgency; a refusal of formal conventions.' },
            { term: 'Refrain', meaning: '"After the revolution" repeated four times — a structural anchor emphasising deferred hope.' },
            { term: 'Volta', meaning: 'Line 15: "but tonight" — the poem pivots from future dreams to present danger.' },
          ],
        },
        {
          id: 'j16c-themes-h',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 'j16c-themes',
          type: 'list',
          text: [
            'Youth and sacrifice — ordinary young dreams deferred for political struggle.',
            'Hope and fear — the speaker holds both simultaneously.',
            'The human cost of oppression — apartheid denies the most basic human pleasures (mangoes, cinema, love).',
            'Courage and vulnerability — the young man is afraid but acts anyway.',
            'Revolution and its price — "after the revolution" implies survival is not guaranteed.',
          ],
        },
      ],
    },

    {
      id: 'eng-j16-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: "A Young Man's Thoughts — Poem & Analysis",
      minutes: 14,
      blocks: [
        {
          id: 'j16a-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 'j16a-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'tomorrow' },
            { n: 2, text: 'i will think about mangoes' },
            { n: 3, text: 'after the revolution' },
            { n: 4, text: 'i will think about mangoes' },
            { n: 5, text: 'yellow and bitten' },
            { n: 6, text: 'sweet in the sun' },
            { n: 7, text: 'i\'ll think of ntozake' },
            { n: 8, text: 'and her smile' },
            { n: 9, text: 'after the revolution' },
            { n: 10, text: 'maybe a better lovemaking' },
            { n: 11, text: 'after the revolution' },
            { n: 12, text: 'i\'ll eat rice and gravy' },
            { n: 13, text: 'i\'ll go to bioscope' },
            { n: 14, text: 'after the revolution' },
            { n: 15, text: 'but tonight' },
            { n: 16, text: 'the fire burns' },
            { n: 17, text: 'the cadres are massing' },
            { n: 18, text: 'in the smoke and flame' },
            { n: 19, text: 'and tonight i\'m afraid' },
          ],
        },
        {
          id: 'j16a-lines-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 'j16a-lines',
          type: 'lines',
          lines: [
            {
              n: 1, text: 'tomorrow',
              note: 'The single-word opening is startling. "Tomorrow" hangs alone — hopeful (there IS a tomorrow) and ominous (the speaker does not know what it holds). No capitalisation throughout signals informality, youth, and urgency.',
              devices: ['Enjambment', 'No capitalisation', 'Foreshadowing'],
            },
            {
              n: 2, text: 'i will think about mangoes',
              note: '"Mangoes" is a specific, sensory, culturally rooted image — a fruit of warmth, sweetness, and home. The young man\'s dreams are beautifully ordinary: not power or glory, but fruit. This makes his humanity vivid and the prospect of his death more tragic.',
              devices: ['Sensory imagery', 'Symbolism (mangoes = ordinary life)'],
            },
            {
              n: 3, text: 'after the revolution',
              note: '"After the revolution" is used as a refrain. Normal life is deferred until justice is achieved. The speaker accepts this sacrifice. But the phrase also implies he may not survive to enjoy these things.',
              devices: ['Refrain', 'Deferred hope', 'Political context'],
            },
            {
              n: 5, text: 'yellow and bitten',
              note: '"Yellow and bitten" is sensuously specific — a mango is ripe when yellow, "bitten" evokes pleasure and bodily enjoyment of life. It also subtly suggests something consumed, taken — possibly life itself.',
              devices: ['Sensory imagery', 'Connotation'],
            },
            {
              n: 7, text: 'i\'ll think of ntozake',
              note: 'Ntozake is a specific name — a loved one, probably a girlfriend. The personal, intimate detail grounds the poem in individual humanity. This is not an abstract revolutionary; this is a young man with someone he loves.',
              devices: ['Personalisation', 'Pathos'],
            },
            {
              n: 10, text: 'maybe a better lovemaking',
              note: '"Maybe" signals uncertainty — even after the revolution, he\'s not sure. "Better lovemaking" suggests even intimate life is impoverished by oppression and fear. Frank and human.',
              devices: ['Hedging ("maybe")', 'Bathos / mundane detail'],
            },
            {
              n: 13, text: 'i\'ll go to bioscope',
              note: '"Bioscope" is a South African word for cinema. Under apartheid, Black South Africans were excluded from many public spaces. Going to the bioscope is a dream of equality and normal life — not luxury.',
              devices: ['Cultural / historical reference', 'South African diction'],
            },
            {
              n: 15, text: 'but tonight',
              note: '"But tonight" — the poem pivots. All the warm dreams collapse. The present reality intrudes. This is the volta — the turn from future hope to present danger.',
              devices: ['Volta', 'Contrast (future dreams vs. present danger)'],
            },
            {
              n: 16, text: 'the fire burns',
              note: '"Fire burns" — literal fire (barricades, burning buildings) and the fire of revolution and anger. Present tense: this is happening NOW.',
              devices: ['Symbolism (fire = revolution/danger)', 'Present tense (immediacy)'],
            },
            {
              n: 19, text: 'and tonight i\'m afraid',
              note: 'The poem ends with radical honesty: "i\'m afraid." Despite all the bravado of revolution, this young man is frightened. The admission subverts the hero-narrative — revolutionaries are not fearless; they are human beings who act despite fear.',
              devices: ['Emotional climax', 'Vulnerability', 'Anti-heroic honesty'],
            },
          ],
        },
      ],
    },

    {
      id: 'eng-j16-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: "A Young Man's Thoughts — Questions & Essay",
      minutes: 10,
      blocks: [
        {
          id: 'j16q-h1',
          type: 'heading',
          level: 2,
          text: 'Exam Questions — A Young Man\'s Thoughts Before June 16th',
        },
        {
          id: 'j16q-q',
          type: 'questions',
          qa: [
            {
              q: 'What is the significance of the refrain "after the revolution"?',
              marks: 3,
              a: [
                '"After the revolution" is repeated four times as a refrain, emphasising that ordinary dreams are deferred — the speaker cannot enjoy them until justice is achieved.',
                'It shows that apartheid has interrupted normal life entirely — eating mangoes and going to cinema must wait.',
                'The refrain implies uncertainty: the speaker may not survive "the revolution" to enjoy these things. The phrase carries both hope and the shadow of death.',
              ],
            },
            {
              q: 'How does the final line "and tonight i\'m afraid" affect the reader?',
              marks: 3,
              a: [
                'The final line is a moment of profound honesty — after cataloguing all his hopes, the speaker admits fear, making him deeply human.',
                'It subverts the heroic narrative: the speaker is not fearless, but chooses to act despite fear.',
                'It creates pathos — the reader has come to care for this young man through his simple dreams, and now fears for his safety, knowing what June 16 brought.',
              ],
            },
            {
              q: 'Why does the poet not use any capital letters? What effect does this create?',
              marks: 2,
              a: [
                'The lack of capitalisation (even for "I") creates informality and intimacy — we hear the private, unguarded thoughts of a young man.',
                'It also creates urgency — the writing feels hasty, unedited, as if thoughts are rushing through before a dangerous night.',
              ],
            },
            {
              q: 'ESSAY: Discuss how Johennesse uses ordinary detail to comment on the extraordinary circumstances of apartheid South Africa. (8 marks)',
              marks: 8,
              a: [
                'INTRODUCTION: In "A Young Man\'s Thoughts Before June 16th," Fhazel Johennesse uses deliberately ordinary, everyday details — mangoes, rice, cinema, a girl\'s smile — to comment powerfully on the injustice of apartheid and the human cost of the Soweto Uprising.',
                'BODY 1 — Ordinariness of the speaker\'s dreams: The young man\'s dreams are achingly modest: "i will think about mangoes / yellow and bitten / sweet in the sun" (lines 2–6). A ripe mango is a mundane pleasure, yet it is deferred until "after the revolution." The contrast between the smallness of the dream and the magnitude of what is being fought for exposes the total denial of humanity under apartheid.',
                'BODY 2 — Love and human connection: He thinks of "ntozake / and her smile" and "maybe a better lovemaking" — personal, intimate hopes. By including these private, human moments, Johennesse insists the marchers of June 16 were real young people with loves and desires. Apartheid denied them even this.',
                'BODY 3 — The volta and present danger: The sudden shift to "but tonight / the fire burns" (lines 15–16) makes the contrast devastating. Warmth is extinguished by fire and fear. The juxtaposition of ordinary dreams and violent reality mirrors the historical reality: ordinary children marched into police bullets.',
                'CONCLUSION: The ordinary AMPLIFIES the extraordinary. By grounding the poem in the smallest pleasures — a mango, a film, a girl\'s smile — Johennesse makes the injustice of apartheid visceral. The poem does not argue for justice abstractly; it shows us, in the most human terms, what oppression actually costs.',
              ],
            },
          ],
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════════
       POEM 4 — The Road Not Taken (Robert Frost)
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-road-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'The Road Not Taken — Context & Form',
      minutes: 8,
      blocks: [
        {
          id: 'roadc-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet & Context',
        },
        {
          id: 'roadc-p1',
          type: 'paragraph',
          text: 'Robert Frost (1874–1963) was an American poet known for his plain-spoken voice and rural New England imagery. "The Road Not Taken" (1916) is one of the most widely read — and widely misread — poems in English. Most readers interpret it as a celebration of individualism ("I took the less-travelled road!"), but a careful reading reveals something more ironic. Frost wrote the poem partly as a gentle joke about his friend Edward Thomas, who could never decide which path to take on their walks together.',
        },
        {
          id: 'roadc-callout',
          type: 'callout',
          text: '⚠️ The Big Irony: The two roads are described as virtually EQUAL — "worn them really about the same" (line 11). The speaker\'s claim to have made a brave, individual choice is revealed as a self-delusion even as he makes it. The poem is about how we construct heroic stories about our ordinary choices.',
        },
        {
          id: 'roadc-h2',
          type: 'heading',
          level: 2,
          text: 'Form & Structure',
        },
        {
          id: 'roadc-form',
          type: 'definitions',
          rows: [
            { term: 'Stanzas', meaning: 'Four quintains (5-line stanzas).' },
            { term: 'Rhyme scheme', meaning: 'ABAAB in each stanza.' },
            { term: 'Metre', meaning: 'Rough iambic tetrameter (4 stressed beats per line).' },
            { term: 'Form', meaning: 'Dramatic monologue — one speaker reflecting alone in the woods.' },
            { term: 'Setting', meaning: '"Yellow wood" = autumn — transition, change, and endings. Perfect for a poem about life-choices.' },
          ],
        },
        {
          id: 'roadc-themes-h',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 'roadc-themes',
          type: 'list',
          text: [
            'Choices and regret — the speaker mourns that he cannot take both paths.',
            'Irony and self-delusion — the speaker convinces himself he chose bravely, but the roads were equal.',
            'Irreversibility of time — "way leads on to way"; you cannot undo life\'s choices.',
            'Self-narrative — how we construct stories about ourselves to impose meaning on random choices.',
          ],
        },
      ],
    },

    {
      id: 'eng-road-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'The Road Not Taken — Poem & Analysis',
      minutes: 14,
      blocks: [
        {
          id: 'roada-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 'roada-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'Two roads diverged in a yellow wood,' },
            { n: 2, text: 'And sorry I could not travel both' },
            { n: 3, text: 'And be one traveler, long I stood' },
            { n: 4, text: 'And looked down one as far as I could' },
            { n: 5, text: 'To where it bent in the undergrowth;' },
            { n: 6, text: '' },
            { n: 7, text: 'Then took the other, as just as fair,' },
            { n: 8, text: 'And having perhaps the better claim,' },
            { n: 9, text: 'Because it was grassy and wanted wear;' },
            { n: 10, text: 'Though as for that the passing there' },
            { n: 11, text: 'Had worn them really about the same,' },
            { n: 12, text: '' },
            { n: 13, text: 'And both that morning equally lay' },
            { n: 14, text: 'In leaves no step had trodden black.' },
            { n: 15, text: 'Oh, I kept the first for another day!' },
            { n: 16, text: 'Yet knowing how way leads on to way,' },
            { n: 17, text: 'I doubted if I should ever come back.' },
            { n: 18, text: '' },
            { n: 19, text: 'I shall be telling this with a sigh' },
            { n: 20, text: 'Somewhere ages and ages hence:' },
            { n: 21, text: 'Two roads diverged in a wood, and I —' },
            { n: 22, text: 'I took the one less traveled by,' },
            { n: 23, text: 'And that has made all the difference.' },
          ],
        },
        {
          id: 'roada-lines-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 'roada-lines',
          type: 'lines',
          lines: [
            {
              n: 1, text: 'Two roads diverged in a yellow wood,',
              note: '"Yellow wood" = autumn, transition, change approaching an end. "Diverged" forces a choice. This is the central situation: an unavoidable decision point in life.',
              devices: ['Setting / imagery (autumn)', 'Symbolism (diverging paths = life choices)', 'Extended metaphor'],
            },
            {
              n: 2, text: 'And sorry I could not travel both',
              note: 'The speaker REGRETS not being able to take both roads — not celebrating a unique choice but mourning a limitation. The poem opens in regret, not triumph.',
              devices: ['Regret / melancholy tone', 'Theme of limitation'],
            },
            {
              n: 7, text: 'Then took the other, as just as fair,',
              note: '"As just as fair" — both roads are equally beautiful and inviting. The speaker admits upfront the chosen road is NOT objectively better. This contradicts the popular reading of the poem.',
              devices: ['Irony (roads are equal)', 'Foreshadowing the poem\'s ambiguity'],
            },
            {
              n: 11, text: 'Had worn them really about the same,',
              note: 'THE KEY LINE most readers miss. The roads were equally worn, equally travelled. The speaker KNOWS this. His future claim to have chosen the "less travelled" road is already revealed as self-delusion.',
              devices: ['Irony', 'Self-delusion', 'Subverts the popular reading'],
            },
            {
              n: 16, text: 'Yet knowing how way leads on to way,',
              note: '"Way leads on to way" — once you take a path, it leads to further paths, taking you further from the fork forever. Life\'s choices are irreversible.',
              devices: ['Imagery (path as life journey)', 'Repetition ("way…way")', 'Irreversibility'],
            },
            {
              n: 19, text: 'I shall be telling this with a sigh',
              note: 'The speaker projects into the future — imagining himself as an old man telling this story. "With a sigh" is ambiguous: contentment? regret? The speaker knows he will construct a narrative that may not be entirely honest.',
              devices: ['Future perspective', 'Ambiguity ("sigh")', 'Dramatic irony'],
            },
            {
              n: 22, text: 'I took the one less traveled by,',
              note: 'This is the famous line — but it is the LIE the speaker will tell "ages hence." He knows the roads were equal (line 11). He will tell people he chose the less-travelled road because it makes a better, more heroic story.',
              devices: ['Dramatic irony', 'Self-mythologisation'],
            },
            {
              n: 23, text: 'And that has made all the difference.',
              note: '"All the difference" is deeply ambiguous. It could mean wonderful things happened, or simply that the choice changed everything — for better or worse unknown. The poem ends not in triumph but in uncertainty.',
              devices: ['Ambiguity', 'Irony', 'Open ending'],
            },
          ],
        },
      ],
    },

    {
      id: 'eng-road-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'The Road Not Taken — Questions & Essay',
      minutes: 10,
      blocks: [
        {
          id: 'roadq-h1',
          type: 'heading',
          level: 2,
          text: 'Exam Questions — The Road Not Taken',
        },
        {
          id: 'roadq-q',
          type: 'questions',
          qa: [
            {
              q: 'Why is "The Road Not Taken" often misunderstood? Explain with evidence from the poem.',
              marks: 4,
              a: [
                'Most readers interpret it as celebrating individuality — choosing the "less travelled" road. However, the poem is actually ironic.',
                'The second road is "as just as fair" (line 7) and "had worn them really about the same" (line 11) — the roads are EQUAL.',
                'The speaker knows this but will later tell people "I took the one less traveled by" (line 22) — constructing a heroic self-narrative that is not entirely true.',
                'The poem is actually about self-delusion and the stories we tell to justify our choices.',
              ],
            },
            {
              q: 'What does "way leads on to way" (line 16) mean?',
              marks: 2,
              a: [
                'Once you take a path, it leads to further paths — you move further from the original fork and can never go back.',
                'Life\'s choices are irreversible; each decision leads to more decisions that take you further from what you might have been.',
              ],
            },
            {
              q: 'ESSAY: Discuss the theme of choices and their consequences in "The Road Not Taken." (8 marks)',
              marks: 8,
              a: [
                'INTRODUCTION: Frost\'s "The Road Not Taken" uses the extended metaphor of two paths in an autumn wood to explore choices, their consequences, and the stories we tell ourselves about the decisions we make.',
                'BODY 1 — The impossibility of not choosing: The speaker is "sorry" he "could not travel both" (lines 2–3). Life demands choices, even when you would prefer all paths. The autumn setting emphasises transition and finality.',
                'BODY 2 — The ambiguity of the choice itself: Both roads are equal — "as just as fair" (line 7) and "worn really about the same" (line 11). The speaker WANTS to believe he chose bravely, but the evidence undermines this. The choice was arbitrary, not heroic.',
                'BODY 3 — Irreversibility: "Way leads on to way, / I doubted if I should ever come back" (lines 16–17). Once chosen, a path leads further from the fork. Life\'s choices are permanent.',
                'CONCLUSION: In the final stanza, the speaker will tell the story "with a sigh" and claim to have taken "the one less traveled by." This is the story he NEEDS to tell — it makes his life meaningful. The poem meditates on how humans impose meaning on random choices and live with the consequences.',
              ],
            },
          ],
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════════
       POEM 5 — Reapers in the Mieliefield (Gus Ferguson)
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-reapers-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Reapers in the Mieliefield — Context & Form',
      minutes: 6,
      blocks: [
        {
          id: 'rpc-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet & Context',
        },
        {
          id: 'rpc-p1',
          type: 'paragraph',
          text: 'Gus Ferguson is a South African poet and satirist. "Reapers in the Mieliefield" is set in a maize ("mielie") field at harvest time. A "mieliefield" is an Afrikaans word for a maize/corn field, grounding the poem firmly in a South African rural context. The poem celebrates the physical, rhythmic labour of the harvest and the community of workers, particularly the "dark hands" of Black South African farm labourers.',
        },
        {
          id: 'rpc-h2',
          type: 'heading',
          level: 2,
          text: 'Form & Key Devices',
        },
        {
          id: 'rpc-form',
          type: 'definitions',
          rows: [
            { term: 'Structure', meaning: 'Three stanzas of four lines each (quatrains).' },
            { term: 'Rhyme', meaning: 'Internal rhyme and end rhyme — "reason and season" (line 4). The rhyme creates a musical rhythm that mirrors the rhythmic work.' },
            { term: 'Rhythm', meaning: 'The poem\'s beat mirrors the repetitive stooping and rising of harvest work.' },
            { term: 'Imagery', meaning: 'Elemental imagery: wind, fire, earth, sun — the workers and nature are one.' },
          ],
        },
        {
          id: 'rpc-themes-h',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 'rpc-themes',
          type: 'list',
          text: [
            'Dignity of labour — the poem celebrates physical work as rhythmic and even beautiful.',
            'Community — the workers labour together, their voices rising as one.',
            'Human connection with nature — the workers\' rhythm matches the sun\'s cycle.',
            'South African identity — specifically grounds the scene in a South African landscape and labour history.',
          ],
        },
      ],
    },

    {
      id: 'eng-reapers-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Reapers in the Mieliefield — Poem & Analysis',
      minutes: 12,
      blocks: [
        {
          id: 'rpa-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 'rpa-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'Under the flare of the summer sun' },
            { n: 2, text: 'they gather the yield of the season' },
            { n: 3, text: 'and the sheaves of the corn are swept to the ground' },
            { n: 4, text: 'rhythmically, reason and season.' },
            { n: 5, text: '' },
            { n: 6, text: 'Their voices rise in the midday heat' },
            { n: 7, text: 'and the cadence of calling and singing' },
            { n: 8, text: 'is wind and is fire and is earth and is beat,' },
            { n: 9, text: 'the workers in motion, unswinging.' },
            { n: 10, text: '' },
            { n: 11, text: 'Knee-deep in the green, they stoop and they rise,' },
            { n: 12, text: 'the rhythm of toil is the sun\'s,' },
            { n: 13, text: 'the dark hands that gather, under blue skies,' },
            { n: 14, text: 'and the harvest that races and runs.' },
          ],
        },
        {
          id: 'rpa-lines-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 'rpa-lines',
          type: 'lines',
          lines: [
            {
              n: 1, text: 'Under the flare of the summer sun',
              note: '"Flare" — the sun is not simply shining but blazing intensely. The workers toil under extreme heat, speaking to the physical demands of harvest labour.',
              devices: ['Imagery (intense heat)', 'Setting'],
            },
            {
              n: 4, text: 'rhythmically, reason and season.',
              note: '"Reason and season" rhyme, creating a musical effect that mirrors rhythmic work. The pairing suggests work has its own internal logic — a right time and right way to harvest.',
              devices: ['Rhyme (reason/season)', 'Internal rhyme', 'Form mimicking labour'],
            },
            {
              n: 8, text: 'is wind and is fire and is earth and is beat,',
              note: 'The four elements — wind, fire, earth — plus "beat" (heartbeat) combine in the workers\' voices. Their singing is elemental, primal, part of nature. Repetition of "and is" creates a cumulative, pulsing rhythm imitating labour.',
              devices: ['Elemental imagery', 'Anaphora ("and is…")', 'Rhythm'],
            },
            {
              n: 11, text: 'Knee-deep in the green, they stoop and they rise,',
              note: '"Knee-deep in the green" — the workers\' bodies are immersed in the crop. "Stoop and rise" captures the repetitive physical motion with dignity. Human body and natural world are intertwined.',
              devices: ['Physical imagery', 'Repetition ("stoop and rise")', 'Rhythm of labour'],
            },
            {
              n: 12, text: 'the rhythm of toil is the sun\'s,',
              note: 'The workers\' rhythm is governed by the sun (sunrise to sunset, seasonal cycles). Human work aligned with natural rhythm — a beautiful connection.',
              devices: ['Metaphor (labour = solar rhythm)', 'Nature and humanity as one'],
            },
            {
              n: 13, text: 'the dark hands that gather, under blue skies,',
              note: '"Dark hands" identifies the workers as Black — recognition of who does the physical labour of South African farming. "Under blue skies" — beautiful landscape contrasting the hardness of work.',
              devices: ['Social commentary', 'Contrast (beauty vs. hard work)', 'Visual imagery'],
            },
            {
              n: 14, text: 'and the harvest that races and runs.',
              note: '"Races and runs" — the harvest is plentiful and urgent. The poem ends with energy and momentum. The harvest is almost alive.',
              devices: ['Personification (harvest races)', 'Energy / urgency', 'Imagery of abundance'],
            },
          ],
        },
      ],
    },

    {
      id: 'eng-reapers-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Reapers in the Mieliefield — Questions',
      minutes: 8,
      blocks: [
        {
          id: 'rpq-q',
          type: 'questions',
          qa: [
            {
              q: 'How does Ferguson use rhythm and sound devices to mirror the act of harvesting?',
              marks: 4,
              a: [
                'Ferguson uses internal rhyme ("reason and season," line 4) and repetition ("and is wind and is fire and is earth and is beat," line 8) to create a pulsing, repetitive rhythm imitating the physical motions of harvesting.',
                'The poem\'s beat mirrors the "stoop and rise" of the workers (line 11) — the form enacts the content.',
                'The workers\' singing is described as elemental ("wind and fire and earth") — rising from the landscape itself, suggesting that human work rhythm and nature\'s rhythm are one.',
              ],
            },
            {
              q: 'What is the significance of "the dark hands that gather" (line 13)?',
              marks: 2,
              a: [
                '"Dark hands" specifically identifies the workers as Black, recognising who performs the physical labour of farming in a South African context.',
                'The contrast between the beauty of "blue skies" and the hardness of labour also comments subtly on the inequality of who works the land.',
              ],
            },
            {
              q: 'Explain how the poem presents labour with dignity.',
              marks: 3,
              a: [
                'The workers\' movement is described as rhythmic and musical — "cadence of calling and singing" (line 7) — elevating their work to something artistic.',
                '"Knee-deep in the green, they stoop and they rise" (line 11) describes the physical reality of harvest with grace and symmetry.',
                'The alignment of human rhythm with the sun\'s rhythm (line 12) connects the workers to natural cycles, granting them a cosmic dignity.',
              ],
            },
          ],
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════════
       POEM 6 — Telephone Conversation (Wole Soyinka)
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-tel-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Telephone Conversation — Context & Form',
      minutes: 8,
      blocks: [
        {
          id: 'telc-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet & Context',
        },
        {
          id: 'telc-p1',
          type: 'paragraph',
          text: 'Wole Soyinka (born 1934) is a Nigerian playwright, poet, and the first African winner of the Nobel Prize in Literature (1986). "Telephone Conversation" (1960) is based on a real experience Soyinka had while living in London as a student: he phoned about a flat for rent and the landlady asked how dark his skin was. The poem is a devastating satire of British racism disguised as polite reserve. Soyinka uses wit, wordplay, and irony to expose the absurdity and cruelty of racial discrimination.',
        },
        {
          id: 'telc-h2',
          type: 'heading',
          level: 2,
          text: 'Form & Key Devices',
        },
        {
          id: 'telc-form',
          type: 'definitions',
          rows: [
            { term: 'Verse form', meaning: 'Free verse — no fixed rhyme or metre. The conversational flow mimics an actual phone call.' },
            { term: 'Capitals', meaning: 'The landlady\'s voice is written in CAPITALS to show volume, shock, crudeness — contrast with the speaker\'s measured tones.' },
            { term: 'Irony', meaning: '"Good-breeding" used for the landlady\'s polite racism — the ultimate irony.' },
            { term: 'Satire', meaning: 'The poem uses wit and humour to expose and mock racism rather than simply condemning it.' },
          ],
        },
        {
          id: 'telc-themes-h',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 'telc-themes',
          type: 'list',
          text: [
            'Racism and its absurdity — the poem exposes racial discrimination as ridiculous.',
            'Wit as resistance — the speaker uses humour and irony to deflect and expose racism.',
            'The mask of "polite society" — British "good breeding" as a cover for racism.',
            'Identity — the speaker refuses to be defined by the landlady\'s categories.',
            'Power dynamics — the speaker reclaims power through language and wit.',
          ],
        },
      ],
    },

    {
      id: 'eng-tel-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Telephone Conversation — Poem & Analysis',
      minutes: 16,
      blocks: [
        {
          id: 'tela-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 'tela-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'The price seemed reasonable, location' },
            { n: 2, text: 'Indifferent. The landlady swore she lived' },
            { n: 3, text: 'Off premises. Nothing remained' },
            { n: 4, text: 'But self-confession. "Madam," I warned,' },
            { n: 5, text: '"I hate a wasted journey — I am African."' },
            { n: 6, text: 'Silence. Silenced transmission of' },
            { n: 7, text: 'Pressurised good-breeding. Voice, when it came,' },
            { n: 8, text: 'Caught I in possession of' },
            { n: 9, text: 'Its colour. "ARE YOU LIGHT' },
            { n: 10, text: 'OR VERY DARK?" Button B. Button A. Stench' },
            { n: 11, text: 'Of rancid breath of public hide-and-seek.' },
            { n: 12, text: 'Red booth. Red pillar-box. Red double-tiered' },
            { n: 13, text: 'Omnibus squelching tar. It was real! Shamed' },
            { n: 14, text: 'By ill-mannered silence, surrender' },
            { n: 15, text: 'Pushed dumbfoundment to beg simplification.' },
            { n: 16, text: 'Considerate she was, varying the emphasis —' },
            { n: 17, text: '"ARE YOU DARK? OR VERY LIGHT?" Revelation came.' },
            { n: 18, text: '"You mean — like plain or milk chocolate?"' },
            { n: 19, text: 'Her assent was clinical, crushing in its light' },
            { n: 20, text: 'Impersonality. Rapidly, wave-length adjusted,' },
            { n: 21, text: 'I chose. "West African sepia" — and as afterthought,' },
            { n: 22, text: '"Down in my passport." Silence for spectroscopic' },
            { n: 23, text: 'Flight of fancy, till truthfulness clanged her accent' },
            { n: 24, text: 'Hard on the mouthpiece. "WHAT\'S THAT?" conceding' },
            { n: 25, text: '"DON\'T KNOW WHAT THAT IS." "Like brunette."' },
            { n: 26, text: '"THAT\'S DARK, ISN\'T IT?" "Not altogether.' },
            { n: 27, text: 'Facially, I am brunette, but, madam, you should see' },
            { n: 28, text: 'The rest of me. Palm of my hand, soles of my feet' },
            { n: 29, text: 'Are a peroxide blonde. Friction, caused —' },
            { n: 30, text: 'Foolishly, madam — by sitting down, has turned' },
            { n: 31, text: 'My bottom raven black —' },
            { n: 32, text: 'One moment madam!" — sensing' },
            { n: 33, text: 'Her receiver rearing on the thunder clap' },
            { n: 34, text: 'Of laughter. Madam?' },
          ],
        },
        {
          id: 'tela-lines-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 'tela-lines',
          type: 'lines',
          lines: [
            {
              n: 4, text: '"Madam," I warned, "I hate a wasted journey — I am African."',
              note: '"I warned" — the speaker treats his disclosure as a warning, knowing it may disqualify him. "I am African" is stated with quiet dignity. The dash creates a pause — the speaker gives the information carefully, knowing its consequences.',
              devices: ['Dramatic irony', 'Dignity in self-identification', 'Foreshadowing'],
            },
            {
              n: 6, text: 'Silence. Silenced transmission of',
              note: 'The double "silence/silenced" is significant. The pause speaks volumes — the landlady is calculating; the speaker is waiting. What is NOT said defines the moment.',
              devices: ['Repetition', 'Dramatic pause', 'Implicit racism'],
            },
            {
              n: 7, text: 'Pressurised good-breeding.',
              note: '"Good-breeding" = British cultural ideal of polite restraint. It is "pressurised" — the landlady works hard to maintain her veneer of politeness even as she prepares a racist question. Deep irony.',
              devices: ['Irony ("good-breeding")', 'Social satire (politeness masks racism)'],
            },
            {
              n: 9, text: '"ARE YOU LIGHT OR VERY DARK?"',
              note: 'The capitals scream — shockingly crude in contrast to polite circumlocutions before it. Naked racism with a thin veneer of practicality. Capitals make the racism impossible to hide.',
              devices: ['Capitalisation (emphasis, shock)', 'Exposed racism'],
            },
            {
              n: 12, text: 'Red booth. Red pillar-box. Red double-tiered',
              note: 'The speaker\'s gaze fixes on red — the colour of British identity (phone boxes, post boxes, buses). Red also = shame, anger, blood. The repetition creates a visual/emotional bombardment.',
              devices: ['Repetition of colour (red)', 'Symbolism (red = Britain, shame, anger)', 'Anaphora'],
            },
            {
              n: 18, text: '"You mean — like plain or milk chocolate?"',
              note: 'Soyinka\'s masterstroke: the speaker reduces the landlady\'s grotesque question to consumer chocolate categories. Funny AND devastating — he reduces himself to a commodity, echoing the history of colonialism and slavery.',
              devices: ['Irony', 'Wit / bathos', 'Metaphor (chocolate = skin)', 'Critique of colonialism'],
            },
            {
              n: 29, text: 'Are a peroxide blonde.',
              note: '"Peroxide blonde" — associated with white women who dye their hair. Parts of his body are "blonde." Comic, pointed, and devastating: exposes how arbitrary racial colour categories are.',
              devices: ['Irony / wit', 'Comic reversal', 'Exposes absurdity of racial categories'],
            },
            {
              n: 31, text: 'My bottom raven black —',
              note: 'Deliberately crude and comic — the speaker refuses to perform dignity for a racist. His wit is an act of resistance. Absurd, funny, and deeply serious simultaneously.',
              devices: ['Comic bathos', 'Resistance through wit', 'Refusal to perform dignity'],
            },
            {
              n: 33, text: 'Her receiver rearing on the thunder clap',
              note: '"Thunder clap of laughter" — the landlady hangs up; the speaker\'s wit has made her absurd. The poem ends before the conversation ends — the speaker has won the moral argument through language.',
              devices: ['Metaphor (thunder clap)', 'Ambiguity of laughter', 'Wit triumphs'],
            },
          ],
        },
      ],
    },

    {
      id: 'eng-tel-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'Telephone Conversation — Questions & Essay',
      minutes: 10,
      blocks: [
        {
          id: 'telq-q',
          type: 'questions',
          qa: [
            {
              q: 'How does Soyinka use irony to expose racism in "Telephone Conversation"?',
              marks: 4,
              a: [
                '"Pressurised good-breeding" (line 7) — the landlady\'s polite British manner is ironic cover for naked racism.',
                'The speaker\'s suggestion that skin colour could be compared to "plain or milk chocolate" (line 18) reduces the racist question to absurdity.',
                'Capitals ("ARE YOU LIGHT OR VERY DARK?" line 9) make the racism impossible to hide — the loudness exposes what was supposed to be politely implied.',
                'The speaker\'s detailed description of varying skin tones uses the landlady\'s own framework to expose how absurd racial classification is.',
              ],
            },
            {
              q: 'What is the significance of the red imagery (lines 12–13)?',
              marks: 3,
              a: [
                'Red booth, pillar-box, and omnibus are symbols of British identity — the Empire that colonised Africa.',
                'Red also connotes shame, anger, and blood — the speaker is shamed by the interaction, and the colour captures his emotional state.',
                'The repetition of red creates a bombardment effect, mirroring the overwhelm of encountering racism in what should be a simple housing transaction.',
              ],
            },
            {
              q: 'ESSAY: How does Soyinka use wit and satire to challenge racism in "Telephone Conversation"? (8 marks)',
              marks: 8,
              a: [
                'INTRODUCTION: In "Telephone Conversation," Wole Soyinka uses sharp wit, irony, and satire not merely to describe a racist encounter but to dismantle it — turning the racist\'s logic back on itself and claiming victory through language.',
                'BODY 1 — The mask of politeness: The poem opens with the landlady appearing reasonable. Her racism is hidden behind "pressurised good-breeding" (line 7). Soyinka\'s satire targets this quality: British polite racism, which performs decency while practising discrimination.',
                'BODY 2 — Wit as resistance: The speaker\'s comparison of his skin to "plain or milk chocolate" (line 18) adopts the landlady\'s colour-categorisation and reduces it to consumer goods — exposing both its absurdity and its roots in the commodity trade (including the slave trade).',
                'BODY 3 — Reclaiming agency: By describing his varying skin tones in detail (palm, soles, "raven black" bottom), the speaker forces the landlady to engage with the full absurdity of her question. He refuses to perform dignity for a racist; he performs comedy — a higher form of power.',
                'CONCLUSION: Soyinka argues that wit and language are the colonised subject\'s most powerful tools against racism. The last image is a "thunder clap of laughter." Whether the landlady laughs or the speaker does, the speaker has made her ridiculous. His art defeats her bigotry.',
              ],
            },
          ],
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════════
       POEM 7 — How Not to Stop a Nuclear War (Roger McGough)
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-nw-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'How Not to Stop a Nuclear War — Context & Form',
      minutes: 6,
      blocks: [
        {
          id: 'nwc-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet & Context',
        },
        {
          id: 'nwc-p1',
          type: 'paragraph',
          text: 'Roger McGough (born 1937) is a British poet associated with the Liverpool poets — known for accessible, often humorous poetry addressing serious social issues. This poem was written during the Cold War, when the threat of nuclear conflict between the USA and USSR was very real. McGough uses dark humour and satire to expose the absurdity of nuclear deterrence and human complacency in the face of catastrophic danger.',
        },
        {
          id: 'nwc-h2',
          type: 'heading',
          level: 2,
          text: 'Form & Key Devices',
        },
        {
          id: 'nwc-form',
          type: 'definitions',
          rows: [
            { term: 'Structure', meaning: 'A single stanza — a chain of 11 lines descending from citizen to soldier\'s finger.' },
            { term: 'Anaphora', meaning: 'Each line begins "[The/Your] [official] will write to [the next official]" — mimicking bureaucratic procedure.' },
            { term: 'Tense', meaning: 'Future tense throughout until line 10: "the nuclear war will have been over" — future perfect, meaning it is already over.' },
            { term: 'Understatement', meaning: '"For some considerable time" — devastatingly mild language for nuclear catastrophe.' },
            { term: 'Satire', meaning: 'The poem targets bureaucratic paralysis and the impossibility of democratic governance responding fast enough to existential threats.' },
          ],
        },
        {
          id: 'nwc-themes-h',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 'nwc-themes',
          type: 'list',
          text: [
            'Bureaucracy and its paralysis — democratic institutions cannot respond quickly enough to existential threats.',
            'Human complacency — the advice "write to your MP" is useless but people follow it anyway.',
            'The nuclear threat — Cold War anxiety about mass destruction.',
            'Dark humour as critique — laughter exposes a deadly serious flaw in governance.',
          ],
        },
      ],
    },

    {
      id: 'eng-nw-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'How Not to Stop a Nuclear War — Poem & Analysis',
      minutes: 10,
      blocks: [
        {
          id: 'nwa-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 'nwa-poem',
          type: 'poem',
          lines: [
            { n: 1, text: 'Write to your local MP.' },
            { n: 2, text: 'Your local MP will write to the Minister of Defence.' },
            { n: 3, text: 'The Minister of Defence will write to the Prime Minister.' },
            { n: 4, text: 'The Prime Minister will write to the President of the United States.' },
            { n: 5, text: 'The President of the United States will write to the President of Russia.' },
            { n: 6, text: 'The President of Russia will write to his Defence Minister.' },
            { n: 7, text: 'His Defence Minister will write to a General.' },
            { n: 8, text: 'The General will write to a soldier.' },
            { n: 9, text: 'The soldier will write to his finger.' },
            { n: 10, text: 'By this time the nuclear war will have been over.' },
            { n: 11, text: 'For some considerable time.' },
          ],
        },
        {
          id: 'nwa-lines-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 'nwa-lines',
          type: 'lines',
          lines: [
            {
              n: 1, text: 'Write to your local MP.',
              note: 'The poem begins with earnest, official advice — what citizens are told to do to effect political change. The instructional tone is reassuring. The satire is in watching this advice collapse completely by the end.',
              devices: ['Imperative tone', 'Satire (earnest advice, undercut)', 'Irony'],
            },
            {
              n: 2, text: 'Your local MP will write to the Minister of Defence.',
              note: 'The bureaucratic chain begins. Official language — "will write to" — appears functional and logical. The satire is in the revelation of how slowly this chain moves.',
              devices: ['Bureaucratic language', 'Anaphoric chain structure', 'Irony'],
            },
            {
              n: 9, text: 'The soldier will write to his finger.',
              note: 'The punchline — and it\'s brilliant. The "stop the war" message has finally arrived at the actual point of action: the finger on the trigger. But in the form of a letter — absurdly too late. Bureaucracy is too slow to prevent catastrophe.',
              devices: ['Black humour', 'Bathos (from war to a finger)', 'Absurdism', 'Satire'],
            },
            {
              n: 10, text: 'By this time the nuclear war will have been over.',
              note: 'Future perfect tense: "will have been" — the war is already over. The bureaucratic chain took so long that the catastrophe is complete. "Write to your MP" was utterly useless.',
              devices: ['Future perfect tense (war already done)', 'Bathos', 'Irony'],
            },
            {
              n: 11, text: 'For some considerable time.',
              note: '"Some considerable time" — devastating understatement. A nuclear catastrophe described with a mild British phrase of inconvenience. The gap between the enormity of reality and the smallness of the language is the poem\'s final, brilliant joke.',
              devices: ['Understatement', 'British understatement as comedy', 'Anti-climax'],
            },
          ],
        },
      ],
    },

    {
      id: 'eng-nw-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: 'How Not to Stop a Nuclear War — Questions',
      minutes: 8,
      blocks: [
        {
          id: 'nwq-q',
          type: 'questions',
          qa: [
            {
              q: 'Explain how McGough uses structure to build satirical effect.',
              marks: 3,
              a: [
                'The poem uses an anaphoric chain structure, with each line beginning "[official] will write to [next official]" — creating the appearance of logical, functional bureaucracy.',
                'The chain descends from citizen to MP to Prime Minister to Presidents and eventually to a soldier\'s finger — the actual trigger.',
                'The chain\'s very LENGTH is the joke: bureaucracy is so slow that "by this time the nuclear war will have been over" (line 10) — the structure enacts the satire.',
              ],
            },
            {
              q: 'What is the effect of the final line "For some considerable time"?',
              marks: 2,
              a: [
                '"Some considerable time" is a masterpiece of understatement — a mild British phrase used to describe nuclear catastrophe.',
                'The massive gap between this mild language and the reality of total destruction creates devastating irony: we respond to existential threats with the same mild irritation as a missed bus.',
              ],
            },
            {
              q: 'What does the line "The soldier will write to his finger" (line 9) suggest about the nature of bureaucracy?',
              marks: 3,
              a: [
                'The line reveals that the bureaucratic chain has passed through so many links that it only reaches the point of action (the finger on the nuclear trigger) at the very end.',
                'The absurdity of "writing to a finger" shows how bureaucracy translates human urgency into meaningless process.',
                'It satirises the idea that democratic institutions can prevent catastrophe: by the time the message arrives, it is far too late.',
              ],
            },
          ],
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════════
       POEM 8 — "Hope" is the Thing with Feathers (Emily Dickinson)
    ══════════════════════════════════════════════════════════════════════ */
    {
      id: 'eng-hope-context',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: '"Hope" is the Thing with Feathers — Context & Form',
      minutes: 8,
      blocks: [
        {
          id: 'hopec-h1',
          type: 'heading',
          level: 2,
          text: 'About the Poet',
        },
        {
          id: 'hopec-p1',
          type: 'paragraph',
          text: 'Emily Dickinson (1830–1886) was an American poet who lived a remarkably reclusive life in Amherst, Massachusetts. She wrote nearly 1,800 poems, most of which were published after her death. Her poetry is known for unconventional capitalisation, dashes, slant rhyme, and compressed, intense expression. She rarely left her home in her later years, yet her inner world was vast. "\'Hope\' is the Thing with Feathers" was written around 1861.',
        },
        {
          id: 'hopec-h2',
          type: 'heading',
          level: 2,
          text: 'Form & Structure',
        },
        {
          id: 'hopec-form',
          type: 'definitions',
          rows: [
            { term: 'Stanzas', meaning: 'Three quatrains (4-line stanzas).' },
            { term: 'Metre', meaning: 'Alternating iambic tetrameter and trimeter — common metre, used in hymns. Makes the poem feel like a prayer or spiritual song.' },
            { term: 'Rhyme', meaning: 'Slant rhyme (approximate rhyme: "soul/all," "Sea/me") — Dickinson\'s signature. Creates subtle dissonance, mirroring the uncertainty of hope.' },
            { term: 'Capitalisation', meaning: 'Dickinson capitalises "Hope," "Bird," "Soul," "Storm," "Extremity" — elevating abstract nouns to cosmic significance.' },
            { term: 'Dashes', meaning: 'Create pauses, emphasis, and a breathless quality that mirrors the fragile persistence of hope.' },
          ],
        },
        {
          id: 'hopec-themes-h',
          type: 'heading',
          level: 2,
          text: 'Themes',
        },
        {
          id: 'hopec-themes',
          type: 'list',
          text: [
            'Hope as a constant, unconditional presence — it never stops and asks nothing.',
            'Resilience in adversity — hope is sweetest precisely when conditions are worst.',
            'The inner life — hope lives in the soul, internal and inalienable.',
            'The paradox of hope — small and fragile, yet enduring the greatest storms.',
          ],
        },
      ],
    },

    {
      id: 'eng-hope-analysis',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: '"Hope" is the Thing with Feathers — Poem & Analysis',
      minutes: 14,
      blocks: [
        {
          id: 'hopea-poem-h',
          type: 'heading',
          level: 2,
          text: 'The Poem',
        },
        {
          id: 'hopea-poem',
          type: 'poem',
          lines: [
            { n: 1, text: '"Hope" is the thing with feathers —' },
            { n: 2, text: 'That perches in the soul —' },
            { n: 3, text: 'And sings the tune without the words —' },
            { n: 4, text: 'And never stops — at all —' },
            { n: 5, text: '' },
            { n: 6, text: 'And sweetest — in the Gale — is heard —' },
            { n: 7, text: 'And sore must be the storm —' },
            { n: 8, text: 'That could abash the little Bird' },
            { n: 9, text: 'That kept so many warm —' },
            { n: 10, text: '' },
            { n: 11, text: 'I\'ve heard it in the chillest land —' },
            { n: 12, text: 'And on the strangest Sea —' },
            { n: 13, text: 'Yet — never — in Extremity,' },
            { n: 14, text: 'It asked a crumb — of me.' },
          ],
        },
        {
          id: 'hopea-lines-h',
          type: 'heading',
          level: 2,
          text: 'Line-by-Line Analysis',
        },
        {
          id: 'hopea-lines',
          type: 'lines',
          lines: [
            {
              n: 1, text: '"Hope" is the thing with feathers —',
              note: 'Bold opening metaphor — Hope is compared to a bird. The quotes around "Hope" suggest it is being defined, examined. "Feathers" suggest lightness, flight, freedom — and the capacity to lift.',
              devices: ['Extended metaphor (Hope = bird)', 'Dashes (Dickinson signature)', 'Capitalisation'],
            },
            {
              n: 2, text: 'That perches in the soul —',
              note: '"Perches" — a bird rests on a branch; hope rests within the soul. The bird is INSIDE the person — hope is internal, personal, always present. It cannot be taken away by external forces.',
              devices: ['Metaphor (bird perching in soul)', 'Personification'],
            },
            {
              n: 3, text: 'And sings the tune without the words —',
              note: '"Tune without the words" — hope is a feeling rather than a rational thought. You cannot always explain hope in language; it is a wordless impulse that something good may come.',
              devices: ['Metaphor', 'Paradox (music without words)', 'Abstract made concrete'],
            },
            {
              n: 4, text: 'And never stops — at all —',
              note: '"Never stops — at all —" — hope is relentless and constant. The dashes create breathless emphasis. Hope keeps singing no matter what — both comforting and slightly unstoppable.',
              devices: ['Repetition / emphasis', 'Dashes', 'Constancy of hope'],
            },
            {
              n: 6, text: 'And sweetest — in the Gale — is heard —',
              note: 'The paradox: hope is SWEETEST in the worst conditions. When everything is terrible, hope\'s song is clearest. Counterintuitive but true — hope is most meaningful when most needed.',
              devices: ['Paradox (sweetest in the gale)', 'Capitalisation of "Gale"'],
            },
            {
              n: 7, text: 'And sore must be the storm —',
              note: '"Sore" = severe, harsh. The storm would have to be EXTREMELY bad to silence hope. Almost impossibly severe. Dickinson implies hope is nearly indestructible.',
              devices: ['Diction ("sore")', 'Conditional challenge to hope'],
            },
            {
              n: 8, text: 'That could abash the little Bird',
              note: '"Abash" = embarrass, silence, shame. Hope could be made to fall silent. The bird\'s smallness and fragility contrast with the storms it endures — vulnerability and resilience together.',
              devices: ['Diction ("abash")', 'Contrast (little bird vs. great storm)'],
            },
            {
              n: 11, text: 'I\'ve heard it in the chillest land —',
              note: 'First-person testimony. "Chillest land" = extreme cold, loneliness, desolation. And yet hope sang even there. Personal experience validates the poem\'s claim.',
              devices: ['First-person testimony', 'Imagery (cold, isolation)'],
            },
            {
              n: 14, text: 'It asked a crumb — of me.',
              note: 'The poem\'s final remarkable line. Hope asks NOTHING. "A crumb" is the tiniest thing — and even that is more than hope requires. Hope gives freely and endlessly, without cost or demand. The unconditional gift.',
              devices: ['Understatement ("a crumb")', 'Unconditional generosity of hope', 'Moving conclusion'],
            },
          ],
        },
        {
          id: 'hopea-devices-h',
          type: 'heading',
          level: 3,
          text: 'Key Poetic Devices Summary',
        },
        {
          id: 'hopea-devices',
          type: 'definitions',
          rows: [
            { term: 'Extended metaphor', meaning: 'Hope = a bird, sustained throughout all three stanzas.' },
            { term: 'Personification', meaning: 'Hope is given life, song, and the capacity to "perch," "sing," and be "abashed."' },
            { term: 'Paradox', meaning: 'Hope is "sweetest in the Gale" — most powerful when conditions are worst.' },
            { term: 'Slant rhyme', meaning: 'Approximate rhyme (soul/all, Sea/me) creates subtle dissonance, mirroring hope\'s uncertainty.' },
            { term: 'Capitalisation', meaning: 'Hope, Bird, Soul, Storm, Extremity — elevated to cosmic significance.' },
            { term: 'Dashes', meaning: 'Create pauses, emphasis, and breathless quality that mirrors fragile persistence.' },
          ],
        },
      ],
    },

    {
      id: 'eng-hope-questions',
      chapterId: 'eng-poetry',
      subjectId: 'english',
      title: '"Hope" is the Thing with Feathers — Questions & Essay',
      minutes: 10,
      blocks: [
        {
          id: 'hopeq-q',
          type: 'questions',
          qa: [
            {
              q: 'What does Dickinson mean by "Hope is the thing with feathers"?',
              marks: 2,
              a: [
                'Dickinson uses an extended metaphor comparing hope to a bird. "Feathers" represent lightness, flight, and song — suggesting hope is similarly light, free, and capable of lifting the human spirit.',
                'The bird "perches in the soul" (line 2), indicating hope is an inner quality, always present within a person.',
              ],
            },
            {
              q: 'Explain the paradox in stanza 2: "sweetest — in the Gale — is heard."',
              marks: 3,
              a: [
                'A paradox is a statement that seems contradictory but contains truth.',
                'A gale is a fierce storm — the worst of conditions. One would expect hope to be weakest or silenced.',
                'Dickinson argues the opposite: hope is sweetest (most beautiful, most meaningful) DURING the worst storms — because it is most needed.',
              ],
            },
            {
              q: 'What is the effect of the dashes Dickinson uses throughout the poem?',
              marks: 2,
              a: [
                'The dashes create dramatic pauses — they slow the reader down, forcing attention on each phrase.',
                'They also give the poem a breathless, fragile quality that mirrors the delicate yet persistent nature of hope.',
              ],
            },
            {
              q: 'ESSAY: Discuss how Dickinson uses the extended metaphor of the bird to explore the nature of hope. (8 marks)',
              marks: 8,
              a: [
                'INTRODUCTION: In "\'Hope\' is the Thing with Feathers," Emily Dickinson uses an extended metaphor of a small bird to explore hope as a persistent, generous, indestructible force that lives within the human soul — sweetest in adversity, and asking nothing in return.',
                'BODY 1 — Hope as the bird within: Hope is a bird "that perches in the soul" (line 2) — internal, not outside. It sings "the tune without the words" (line 3): hope is a feeling rather than a rational thought. Dickinson makes the abstract concrete: hope has feathers, it perches, it sings.',
                'BODY 2 — Resilience and the paradox of adversity: Hope is "sweetest in the Gale" (line 6) — paradoxically most powerful in the worst conditions. "Sore must be the storm" (line 7) that could silence the bird — almost nothing strong enough to extinguish it. The bird enduring storms captures hope\'s resilience.',
                'BODY 3 — Personal testimony and universality: "I\'ve heard it in the chillest land" (line 11) — personal testimony that hope endures in the coldest, most isolated places. It has "kept so many warm" (line 9) — hope is a comfort shared across many lives.',
                'CONCLUSION: The poem\'s final image — hope that never asked "a crumb of me" — completes the metaphor with a gift: hope is unconditional. Unlike most things of value, it costs nothing. By the poem\'s end, we understand hope not as an idea but as an experience: constant, freely given, and most precious when the storm is fiercest.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
