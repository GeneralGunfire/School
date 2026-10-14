import type { Lesson } from '../../lib/types';
import { h2, h3, p, ul, box, table, lessonIn, type WB } from './writeKit';
import { CH } from './romeoA';

/** Romeo and Juliet: themes, motifs and imagery, language and dramatic technique, and the question of blame. */

const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>): Lesson =>
  lessonIn('english', CH, id, title, minutes, blocks);

/** A theme: what it is, where it shows, quotations, how it develops, how to use it in an essay. */
const theme = (
  name: string,
  idea: string,
  evidence: [string, string][],
  develops: string,
  essayLine: string,
): WB[] => [
  h2(name),
  p(idea),
  h3('Where you see it'),
  table(evidence),
  h3('How the theme develops'),
  p(develops),
  box(`Essay angle: ${essayLine}`),
];

export const R_THEMES = L('rj-themes', 'Themes', 60, [
  p('A theme is an idea that runs through the whole play. In Romeo and Juliet the themes connect: love is shaped by hate, fate interacts with haste, and the young pay for the mistakes of the old. When you write about a theme, always tie it to specific scenes and short quotations.'),
  ...theme(
    'Love',
    'The play shows many kinds of love: romantic love (Romeo and Juliet), conventional or “courtly” love (Romeo and Rosaline), arranged marriage (Paris and Juliet), physical love (Mercutio and the Nurse), family love (the Capulets, the Nurse), and friendship (Romeo, Mercutio and Benvolio). Shakespeare tests each one and shows that the lovers’ bond is both intense and dangerous.',
    [
      ['True love vs infatuation', 'Romeo’s love for Rosaline is conventional and melodramatic (“O brawling love! O loving hate!”). When he sees Juliet, he feels something different: “Did my heart love till now?” The contrast makes his later love seem real.'],
      ['Love as a religion', 'Their first conversation is a sonnet in which Romeo is a pilgrim and Juliet a saint (1.5). Love is a sacred devotion.'],
      ['Love as light', 'Romeo describes Juliet as “the sun”, who “doth teach the torches to burn bright”. Love brightens a dark world.'],
      ['Love and danger', 'Friar Laurence warns, “These violent delights have violent ends”. Juliet worries that it is “like the lightning”.'],
      ['Love as sacrifice', 'In the end each chooses to die rather than live without the other.'],
      ['Love vs Mercutio’s view', 'Mercutio sees love as physical and foolish: “If love be rough with you, be rough with love.”'],
      ['Parental love', 'Capulet loves Juliet but demonstrates control; the Nurse loves her in a practical way; Lady Capulet is distant.'],
    ],
    'The play moves from imagined love (Rosaline) to real love (Juliet), from joy to grief. The final reconciliation of the families suggests that love, though destroyed, ultimately triumphs over hate. This ending is both bitter and hopeful.',
    'Do not just say the play is about love. Discuss which KIND of love Shakespeare presents as most powerful or most dangerous, and why.',
  ),
  ...theme(
    'Hate and the Feud',
    'The feud between the Montagues and the Capulets is the source of the tragedy. No one remembers its cause (“ancient grudge”), but it kills Mercutio, Tybalt and Paris and ultimately the lovers.',
    [
      ['Hate in the first scene', 'Servants insult each other, and Tybalt says: “I hate the word, / As I hate hell, all Montagues, and thee.”'],
      ['Hate is inherited', 'Even Romeo and Juliet know it is a family quarrel: “My only love sprung from my only hate!” (1.5).'],
      ['Hate and names', 'Juliet argues that a name is meaningless. But the feud makes names deadly: “Deny thy father and refuse thy name.”'],
      ['Hate kills the innocent', 'Mercutio dies, cursing: “A plague o’ both your houses!”'],
      ['Hate and love together', 'Romeo’s oxymorons: “O brawling love! O loving hate!”'],
      ['Hate ends', 'The Prince says to the families: “See what a scourge is laid upon your hate, / That heaven finds means to kill your joys with love.”'],
    ],
    'The play begins with hate expressed in public violence, but love slowly challenges it. By the end the families are united in grief. The cost of ending the feud is the death of their children.',
    'Argue whether the feud, rather than any individual, is the real villain of the play.',
  ),
  ...theme(
    'Fate vs Free Will',
    'Do the characters control their lives, or are they victims of fate? The play suggests both. The Prologue says the lovers are “star-cross’d”, but the characters also make rash choices.',
    [
      ['The Prologue', '“A pair of star-cross’d lovers take their life”, “death-mark’d love”. The ending is announced.'],
      ['Premonitions', 'Romeo before the feast: “Some consequence yet hanging in the stars.” Juliet after the marriage: “I have an ill-divining soul” (3.5).'],
      ['Chance events', 'The servant who cannot read, the plague that delays Friar John, Juliet waking seconds too late.'],
      ['Romeo’s response', '“O, I am fortune’s fool!” (3.1), “Then I defy you, stars!” (5.1).'],
      ['Free choice', 'Romeo kills Tybalt by choice; Capulet decides to bring the wedding forward; the Friar chooses to plan the fake death.'],
    ],
    'Fate seems strongest at the beginning (the Prologue, Romeo’s dream), but the fatal decisions are human ones. The play suggests that fate and choice are intertwined: characters make choices, but chance turns them into tragedy.',
    'Make a balanced argument. Use the chain of events to show where choice and chance interact.',
  ),
  ...theme(
    'Haste and Time',
    'Everything moves fast in the play: five days from meeting to death. Haste is the engine of the tragedy, and the Friar warns of it repeatedly.',
    [
      ['Quick love', 'They fall in love in a night and marry within a day. Juliet says it is “too rash, too unadvised, too sudden”.'],
      ['Friar’s warnings', '“Wisely and slow; they stumble that run fast.” and “Too swift arrives as tardy as too slow.”'],
      ['Haste in action', 'Romeo kills Tybalt at once and rushes to the tomb. Capulet hurries the wedding.'],
      ['Waiting and delay', 'Juliet’s impatience with the Nurse (2.5); the delay of the letter.'],
      ['Time pressure', 'Capulet moves the wedding forward a day.'],
    ],
    'The pace rises through the play. Haste at first feels thrilling and romantic but becomes deadly in the final act.',
    'Link haste to character: Romeo, Capulet and Juliet all act quickly; the Friar warns but then devises a rushed plan himself.',
  ),
  ...theme(
    'Youth and Age',
    'The play sets passionate, impulsive young people against the older generation, who are supposed to be wise but are also flawed.',
    [
      ['Young energy', 'Romeo, Juliet, Mercutio, Tybalt and Benvolio all act quickly.'],
      ['Adult failure', 'Capulet’s tyranny, Lady Capulet’s coldness, the Nurse’s betrayal, the Friar’s risky scheme and the Prince’s leniency.'],
      ['Generational blindness', 'The parents do not know their children’s secrets. Montague does not know why Romeo is sad; Capulet does not know Juliet is married.'],
      ['Reconciliation', 'The older generation finally unites over the bodies of the young.'],
    ],
    'Both generations contribute to the tragedy, and the youthful victims pay for the adults’ failure to end the feud.',
    'Discuss whether the young lovers or the adults bear more responsibility.',
  ),
  ...theme(
    'Violence, Honour and Masculinity',
    'In Verona, a man must defend his family’s honour with a sword. Violence is the expected response to an insult, and refusal is seen as cowardice.',
    [
      ['Honour code', 'Tybalt: “Now, by the stock and honour of my kin, / To strike him dead I hold it not a sin.”'],
      ['Romeo’s struggle', 'He refuses to fight Tybalt, then fights after Mercutio dies. After the fight, he says love has made him “effeminate” and that his “temper soften’d valour’s steel”.'],
      ['Mercutio’s anger', '“O calm, dishonourable, vile submission!”'],
      ['The Friar’s rebuke', '“Art thou a man? thy form cries out thou art; / Thy tears are womanish.”'],
    ],
    'The play criticises a culture of violence and shows how masculine honour kills.',
    'Use Romeo and Mercutio to show the pressure on young men to fight.',
  ),
  ...theme(
    'Family, Duty and Obedience',
    'Juliet must obey her father, and her disobedience is shocking. The play examines how loyalty to family clashes with loyalty to love.',
    [
      ['Patriarchy', 'Capulet: “An you be mine, I’ll give you to my friend; / An you be not, hang, beg, starve, die in the streets.”'],
      ['Juliet’s dilemma', 'She chooses her husband over her family, rebuking the Nurse: “Shall I speak ill of him that is my husband?”'],
      ['Secret marriage', 'The couple act in secret because of the feud.'],
      ['Names and identity', '“What’s in a name?” The names define people’s roles and loyalties.'],
    ],
    'Juliet’s journey is from obedience to independent action. The cost is isolation.',
    'Show how a society that controls daughters creates the conditions for tragedy.',
  ),
  ...theme(
    'Death',
    'Death is present throughout: in the Prologue, the brawls, Romeo’s fantasies, Juliet’s “grave... my wedding bed” and the final scene. Death is personified as a rival lover and a husband.',
    [
      ['Foreshadowing', '“My grave is like to be my wedding bed.” (Juliet, 1.5)'],
      ['Death as a lover', 'Romeo: “Shall I believe that unsubstantial Death is amorous?” Capulet: “Death is my son-in-law.”'],
      ['Tomb and womb', 'The Friar: “The earth that’s nature’s mother is her tomb; / What is her burying grave, that is her womb.”'],
      ['Death’s power', 'Romeo in the tomb: “Death, that hath suck’d the honey of thy breath, / Hath had no power yet upon thy beauty.”'],
    ],
    'Death moves from a threat (the Prince’s warning) to a reality (Mercutio, Tybalt) and finally a choice (Romeo and Juliet).',
    'Show how language connects love and death.',
  ),
]);

export const R_MOTIFS = L('rj-motifs', 'Motifs, Imagery and Symbols', 35, [
  h2('What these terms mean'),
  table([
    ['Motif', 'A recurring image, idea or word that builds meaning across the play.'],
    ['Imagery', 'Words that create pictures or sense impressions (sight, sound, touch).'],
    ['Symbol', 'An object or image that stands for a larger idea.'],
  ]),
  h2('Light and dark'),
  p('The most important image pattern in the play. The lovers meet at night, and Romeo and Juliet are repeatedly linked to light in a dark world.'),
  table([
    ['Romeo about Juliet', '“O, she doth teach the torches to burn bright!” “It is the east, and Juliet is the sun.” “A lantern... her beauty makes / This vault a feasting presence full of light.”'],
    ['Juliet about Romeo', '“Come, night; come, Romeo; come, thou day in night.” She wants him cut into stars “And he will make the face of heaven so fine / That all the world will be in love with night.”'],
    ['Lightning', '“Too like the lightning, which doth cease to be / Ere one can say ‘It lightens.’” Brightness that is gone in an instant.'],
    ['Darkness and secrecy', 'The lovers must meet at night and hide their marriage. Night offers privacy but also danger.'],
    ['Meaning', 'Love is a bright but fragile light in a dark, violent world. Light also suggests that love is short-lived.'],
  ]),
  h2('Stars, fate and the heavens'),
  ul([
    '“Star-cross’d lovers” and “death-mark’d love” in the Prologue.',
    '“Some consequence yet hanging in the stars” (1.4).',
    '“I defy you, stars!” (5.1).',
    'Juliet’s wish that Romeo become stars. The heavens are both a romantic image and a sign of destiny.',
  ]),
  h2('Poison and medicine'),
  p('The Friar’s herb speech announces the motif: “Within the infant rind of this small flower / Poison hath residence, and medicine power.” The same plant can heal or kill. Juliet’s potion is “medicine” that looks like death, and Romeo’s poison is a “cordial” (a comforting drink). Love, too, is both healing and deadly. The apothecary’s drug becomes the instrument of the lovers’ deaths.'),
  h2('Religious imagery'),
  p('In 1.5, the lovers speak in terms of pilgrims, saints, shrines and prayer: “If I profane with my unworthiest hand / This holy shrine, the gentle sin is this”. Their love is a kind of religion. In contrast, the Friar’s religious role is tested when he arranges a secret marriage and a deception.'),
  h2('Birds'),
  table([
    ['Nightingale and lark', 'In 3.5 Juliet pretends the bird is the nightingale (night) so Romeo will stay; he knows it is the lark (morning). A moment of love turns into a moment of danger.'],
    ['Caged bird', 'Juliet longs for Romeo as a bird she would keep close but “no further than a wanton’s bird”.'],
    ['Falcon', 'Juliet: “Hist! Romeo, hist! O, for a falconer’s voice.”'],
  ]),
  h2('Oxymoron and opposites'),
  p('Romeo’s speeches pair opposites: “O brawling love! O loving hate! / O anything of nothing first create! / O heavy lightness! serious vanity!”. The oxymoron reflects the play’s theme that love and hate, joy and sorrow, life and death are bound together.'),
  h2('Sun and moon'),
  p('The sun stands for Juliet, warmth, life. The moon is inconstant. Juliet refuses to let Romeo swear by it: “O, swear not by the moon, th’ inconstant moon, / That monthly changes in her circled orb.”'),
  h2('Roses and flowers'),
  p('“What’s in a name? That which we call a rose / By any other name would smell as sweet.” Flowers also suggest beauty that fades: Capulet: “Death lies on her like an untimely frost / Upon the sweetest flower of all the field.”'),
  h2('Symbolic objects'),
  table([
    ['Swords', 'Violence and honour. Several characters die by the sword.'],
    ['The ring', 'Juliet sends a ring to Romeo; a token of their marriage.'],
    ['Rope ladder', 'A means of access: the lovers’ secret.'],
    ['The vial', 'A symbol of hope that turns to despair.'],
    ['The tomb', 'Where love and death meet. Juliet’s fear: “bones of all my buried ancestors”.'],
    ['The letter', 'Communication and its failure.'],
  ]),
]);

export const R_LANGUAGE = L('rj-language', 'Language, Form and Dramatic Techniques', 40, [
  h2('Verse and prose'),
  table([
    ['Blank verse', 'Unrhymed lines of ten syllables in an iambic pattern (da-DUM da-DUM da-DUM da-DUM da-DUM). Used by noble characters and in serious moments. Example: “But, SOFT! what LIGHT through YON-der WIN-dow BREAKS?”'],
    ['Rhyming couplets', 'Two rhyming lines. They give a sense of finality and are often used to end scenes or speeches.'],
    ['Prose', 'Ordinary speech. Used by servants, the Nurse, and comic or informal moments, such as Mercutio’s banter.'],
    ['Sonnet', 'A fourteen-line poem. The Prologue is a sonnet. Romeo and Juliet speak a shared sonnet at their first meeting (1.5), and the Chorus speaks another before Act 2.'],
  ]),
  p('Why it matters: Shakespeare changes the form to show character and mood. Romeo and Juliet speak in poetry; the servants and Nurse often use prose. In 1.5 the lovers’ meeting is shaped into a sonnet, which shows their instant harmony.'),
  h2('Dramatic devices'),
  table([
    ['Dramatic irony', 'The audience knows more than the characters. Examples: the Prologue reveals the ending; Juliet says “My grave is like to be my wedding bed”; the wedding preparations in 4.4 while Juliet lies “dead”; Romeo’s misreading of Juliet as dead.'],
    ['Foreshadowing', 'Hints of coming events: “my mind misgives / Some consequence yet hanging in the stars”; Friar’s “violent delights have violent ends”; Juliet’s vision of Romeo “as one dead in the bottom of a tomb”.'],
    ['Soliloquy', 'A character alone on stage speaks thoughts aloud. Juliet’s speech before taking the potion (4.3) and Romeo’s final speech (5.3) reveal inner feelings.'],
    ['Aside', 'A short remark to the audience that other characters do not hear. Romeo’s asides during the balcony scene: “Shall I hear more, or shall I speak at this?”'],
    ['Chorus', 'A speaker outside the story who summarises. Here a sonnet at the start and at the start of Act 2.'],
    ['Foil', 'A character who contrasts with another: Mercutio and Romeo; Tybalt and Benvolio; Lady Capulet and the Nurse.'],
    ['Parallel scenes', 'Act 1 opens with a street fight and Act 3 with another; Capulet’s party and the funeral; wedding preparations and funeral preparations. These mirror and heighten each other.'],
    ['Comic relief', 'Humour from the Nurse, Mercutio and the servants before the mood darkens. After Mercutio’s death, the comedy fades.'],
    ['Pace', 'The play moves quickly, mirroring the lovers’ haste. The compressed time scale adds to tension.'],
  ]),
  h2('Figures of speech with examples'),
  table([
    ['Oxymoron', '“O brawling love! O loving hate!” “Parting is such sweet sorrow.”'],
    ['Metaphor', '“It is the east, and Juliet is the sun.” “Death is my son-in-law.”'],
    ['Simile', '“Too like the lightning.” “like fire and powder, / Which, as they kiss, consume.”'],
    ['Personification', '“Death, that hath suck’d the honey of thy breath.”'],
    ['Apostrophe', 'Speaking to someone or something absent: “Gallop apace, you fiery-footed steeds”; Romeo to the stars (“I defy you, stars”).'],
    ['Pun', 'Mercutio’s dying joke: “you shall find me a grave man”. Grave means serious and a burial place.'],
    ['Antithesis', 'Contrasting ideas side by side: “For never was a story of more woe / Than this of Juliet and her Romeo.” “These violent delights have violent ends.”'],
    ['Hyperbole', 'Extreme exaggeration, as in the lovers’ vows.'],
    ['Allusion', 'References to classical myths: Phoebus (the sun-god), Cupid, Diana.'],
    ['Bawdy humour', 'Sexual jokes from Mercutio and the Nurse. They add realism and contrast with the lovers’ pure language.'],
  ]),
  h2('How to write about language in an exam'),
  ul([
    'Name the device, quote briefly, and explain the EFFECT on the audience or on the meaning.',
    'Link language to character or theme: what does this tell us about Romeo or the idea of love?',
    'Use verbs like “suggests”, “reveals”, “emphasises”, “contrasts”.',
  ]),
  box('Formula: “Shakespeare uses [device] in “[short quote]” to [effect], which highlights [theme/character].”'),
]);

export const R_BLAME = L('rj-blame', 'Who Is to Blame?', 30, [
  h2('The big question'),
  p('Exam questions often ask who or what is responsible for the deaths of Romeo and Juliet. There is no single answer, and a strong essay weighs several suspects. Use the chart below, then pick your line of argument.'),
  table([
    ['The feud', 'It makes love secret and the lovers helpless. It kills Mercutio and Tybalt. The Prince says it is “your hate” that has brought the “scourge”. Strong argument that it is the root cause.'],
    ['Fate', 'The Prologue announces the lovers are “star-cross’d”. The plague, the lost letter and Juliet’s waking seconds too late seem like fate. But fate is only part of the story.'],
    ['Romeo', 'He acts rashly: kills Tybalt, wants to die in 3.3, and kills himself without checking in 5.3. The Friar says he has been “wild”.'],
    ['Juliet', 'She marries in haste and chooses the risky potion. However, she is a teenager under pressure and acts for love.'],
    ['Tybalt', 'His aggression leads to Mercutio’s death and sets off the chain of events.'],
    ['Mercutio', 'He insists on fighting for Romeo’s honour, a choice that escalates the conflict.'],
    ['Capulet', 'He forces Juliet to marry Paris and moves up the wedding. His rage drives her to the Friar.'],
    ['Lady Capulet', 'Her coldness leaves Juliet alone.'],
    ['The Nurse', 'She gives Juliet advice that betrays her trust at the key moment.'],
    ['Friar Laurence', 'He marries the couple in secret, designs a risky plan, relies on one letter and flees the tomb.'],
    ['Friar John / the plague', 'The failed delivery is the immediate cause of the final tragedy, but it is bad luck, not bad intention.'],
    ['The Prince', 'His earlier leniency let the feud continue; he admits “I for winking at your discords too / Have lost a brace of kinsmen”.'],
  ]),
  h2('Choosing a line of argument'),
  ul([
    'Strong line 1: “The feud is the real villain; all the other causes are results of it.”',
    'Strong line 2: “Both fate and human choice are to blame, but the choices are more important because they are made again and again.”',
    'Strong line 3: “The adults failed the young: from the parents to the Friar and the Prince.”',
  ]),
  h2('Sample paragraph'),
  box('Point: The older generation must take much of the responsibility.\nEvidence: Capulet threatens to disown Juliet (“hang, beg, starve, die in the streets”), Lady Capulet says “I have done with thee”, and the Nurse tells her to marry Paris.\nExplain: Each adult Juliet turns to abandons her, which leaves her to rely on the Friar’s dangerous plan.\nLink: Therefore the adults’ failure of care directly causes the crisis that leads to the tomb.'),
]);
