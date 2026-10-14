import type { Chapter, Lesson } from '../../lib/types';
import { h2, h3, p, ul, box, table, qa, peel, lessonIn, type WB } from './writeKit';
import { CH, R_CONTEXT, R_TIMELINE, R_ACT1, R_ACT2 } from './romeoA';
import { R_ACT3, R_ACT4, R_ACT5 } from './romeoB';
import { R_ROMEO_JULIET, R_SUPPORTING, R_FAMILIES } from './romeoC';
import { R_THEMES, R_MOTIFS, R_LANGUAGE, R_BLAME } from './romeoD';

/** Romeo and Juliet: key quotations, exam practice, glossary; and the assembled chapter. */

const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>): Lesson =>
  lessonIn('english', CH, id, title, minutes, blocks);

/** A quotation table: quote | scene | what it shows. */
const quotes = (heading: string, rows: [string, string, string][]): WB[] => [
  h2(heading),
  table(rows.map(([q, where, why]) => [`“${q}”`, `${where}. ${why}`] as [string, string])),
];

export const R_QUOTES = L('rj-quotes', 'Key Quotations with Analysis', 60, [
  p('Learn short quotations (a line or even a few words). In an essay you can weave them into your sentence. Each row gives the quote, who says it and where, and what it shows.'),
  ...quotes('The feud and hate', [
    ['Two households, both alike in dignity', 'Chorus, Prologue', 'Equal in status: the feud is a pointless quarrel between equals.'],
    ['From ancient grudge break to new mutiny', 'Chorus, Prologue', 'The feud is old and its cause is forgotten. “Mutiny” shows it disturbs the whole city.'],
    ['What, drawn, and talk of peace? I hate the word, / As I hate hell, all Montagues, and thee', 'Tybalt, 1.1', 'Violent hatred; “hell” and “hate” alliterate. He is the voice of the feud.'],
    ['Rebellious subjects, enemies to peace', 'Prince, 1.1', 'The Prince’s anger at the brawlers; he links the feud to public disorder.'],
    ['My only love sprung from my only hate!', 'Juliet, 1.5', 'Antithesis: her love grows out of the family hatred. The lovers are trapped by the feud.'],
    ['A plague o’ both your houses!', 'Mercutio, 3.1', 'His dying curse blames both families equally. Repeated three times for emphasis.'],
    ['See what a scourge is laid upon your hate, / That heaven finds means to kill your joys with love', 'Prince, 5.3', 'The Prince tells the families that their hate has been punished by the deaths of their children.'],
  ]),
  ...quotes('Love', [
    ['O, she doth teach the torches to burn bright!', 'Romeo, 1.5', 'Light imagery: Juliet is so radiant that she outshines torches. Love at first sight.'],
    ['Did my heart love till now? Forswear it, sight! / For I ne’er saw true beauty till this night', 'Romeo, 1.5', 'He rejects his love for Rosaline instantly, which shows how sudden and sincere his new love is.'],
    ['If I profane with my unworthiest hand / This holy shrine, the gentle sin is this', 'Romeo, 1.5', 'Religious imagery: Juliet is a saint; Romeo a pilgrim. The shared sonnet shows harmony.'],
    ['But, soft! what light through yonder window breaks? / It is the east, and Juliet is the sun', 'Romeo, 2.2', 'Metaphor: Juliet is the sun, giver of life and warmth.'],
    ['What’s in a name? That which we call a rose / By any other name would smell as sweet', 'Juliet, 2.2', 'She argues that a name has no real meaning; love should not be limited by family labels.'],
    ['My bounty is as boundless as the sea, / My love as deep', 'Juliet, 2.2', 'Hyperbole and sea imagery: her love is endless. She is generous and honest.'],
    ['Parting is such sweet sorrow, / That I shall say good night till it be morrow', 'Juliet, 2.2', 'An oxymoron: the pain of parting is also sweet because it shows love.'],
    ['These violent delights have violent ends / And in their triumph die, like fire and powder, / Which, as they kiss, consume', 'Friar, 2.6', 'The Friar’s warning: intense passion destroys itself. A simile of gunpowder.'],
    ['Give me my Romeo; and, when he shall die, / Take him and cut him out in little stars', 'Juliet, 3.2', 'Love and death together; she imagines Romeo among the stars, making the world “in love with night”.'],
    ['Shall I speak ill of him that is my husband?', 'Juliet, 3.2', 'Her loyalty to Romeo above family. A rhetorical question.'],
    ['Thus with a kiss I die', 'Romeo, 5.3', 'His last words: a kiss links love with death.'],
  ]),
  ...quotes('Fate and chance', [
    ['A pair of star-cross’d lovers take their life', 'Chorus, Prologue', 'The stars decide their fate. “Take their life” announces the ending.'],
    ['Some consequence yet hanging in the stars', 'Romeo, 1.4', 'Foreshadowing: Romeo senses doom.'],
    ['O, I am fortune’s fool!', 'Romeo, 3.1', 'He feels he is a plaything of fate after killing Tybalt.'],
    ['I have an ill-divining soul! / Methinks I see thee, now thou art below, / As one dead in the bottom of a tomb', 'Juliet, 3.5', 'A vision of Romeo’s death. Dramatic irony.'],
    ['Then I defy you, stars!', 'Romeo, 5.1', 'He challenges fate, but his rash action fulfils it.'],
    ['Unhappy fortune!', 'Friar Laurence, 5.2', 'The Friar blames bad luck for the failed letter.'],
  ]),
  ...quotes('Haste and time', [
    ['Wisely and slow; they stumble that run fast', 'Friar, 2.3', 'Advice to slow down; the central warning of the play.'],
    ['It is too rash, too unadvised, too sudden; / Too like the lightning', 'Juliet, 2.2', 'Triple adjectives for emphasis; the lightning simile links brightness and brevity.'],
    ['Too swift arrives as tardy as too slow', 'Friar, 2.6', 'Haste is as dangerous as delay.'],
    ['Gallop apace, you fiery-footed steeds', 'Juliet, 3.2', 'Her impatience, in the form of a command to the sun’s horses to bring night.'],
  ]),
  ...quotes('Violence and honour', [
    ['Now, by the stock and honour of my kin, / To strike him dead I hold it not a sin', 'Tybalt, 1.5', 'Honour defined as revenge.'],
    ['O calm, dishonourable, vile submission!', 'Mercutio, 3.1', 'He sees Romeo’s refusal to fight as shameful. Shows the honour culture.'],
    ['Ask for me tomorrow, and you shall find me a grave man', 'Mercutio, 3.1', 'A pun on “grave”, a joke in his dying moment.'],
    ['Thy beauty hath made me effeminate / And in my temper soften’d valour’s steel!', 'Romeo, 3.1', 'He feels love has made him weak, and he turns to violence.'],
    ['Mercy but murders, pardoning those that kill', 'Prince, 3.1', 'Explains why Romeo is banished rather than pardoned.'],
  ]),
  ...quotes('Family and obedience', [
    ['It is an honour that I dream not of', 'Juliet, 1.3', 'Polite, obedient and cautious. Her early attitude to marriage.'],
    ['My will to her consent is but a part', 'Capulet, 1.2', 'At first he respects Juliet’s opinion.'],
    ['Hang thee, young baggage! disobedient wretch!', 'Capulet, 3.5', 'The rage of a tyrant. Insults show his sense of ownership.'],
    ['An you be mine, I’ll give you to my friend; / An you be not, hang, beg, starve, die in the streets', 'Capulet, 3.5', 'Brutal ultimatum.'],
    ['Talk not to me, for I’ll not speak a word: / Do as thou wilt, for I have done with thee', 'Lady Capulet, 3.5', 'She abandons Juliet.'],
    ['I think it best you married with the County', 'Nurse, 3.5', 'Her betrayal of Juliet’s trust.'],
    ['If all else fail, myself have power to die', 'Juliet, 3.5', 'She is now willing to take her own life.'],
  ]),
  ...quotes('Death', [
    ['My grave is like to be my wedding bed', 'Juliet, 1.5', 'Dramatic irony and foreshadowing.'],
    ['Death lies on her like an untimely frost / Upon the sweetest flower of all the field', 'Capulet, 4.5', 'Death as a frost killing a flower: natural imagery of loss.'],
    ['Death is my son-in-law, Death is my heir', 'Capulet, 4.5', 'Death as a rival husband. Dramatic irony.'],
    ['A grave? O, no! a lantern, slaughter’d youth, / For here lies Juliet, and her beauty makes / This vault a feasting presence full of light', 'Romeo, 5.3', 'Light imagery in the tomb: beauty beats death.'],
    ['Death, that hath suck’d the honey of thy breath, / Hath had no power yet upon thy beauty', 'Romeo, 5.3', 'Death is personified, but seems powerless.'],
    ['O happy dagger! / This is thy sheath; there rust, and let me die', 'Juliet, 5.3', 'She welcomes death; the dagger becomes a lover’s sheath.'],
    ['For never was a story of more woe / Than this of Juliet and her Romeo', 'Prince, 5.3', 'The closing couplet gives the play its tragic title.'],
  ]),
  ...quotes('Character: the Friar and the Nurse', [
    ['Within the infant rind of this small flower / Poison hath residence, and medicine power', 'Friar, 2.3', 'Good and evil are intertwined; foreshadows the potion.'],
    ['For this alliance may so happy prove, / To turn your households’ rancour to pure love', 'Friar, 2.3', 'His hope: marriage might end the feud.'],
    ['Art thou a man? thy form cries out thou art; / Thy tears are womanish', 'Friar, 3.3', 'He tells Romeo to act like a man.'],
    ['Thou wast the prettiest babe that e’er I nursed', 'Nurse, 1.3', 'The Nurse’s warmth towards Juliet.'],
    ['Ancient damnation! O most wicked fiend!', 'Juliet, 3.5', 'Her anger at the Nurse’s betrayal.'],
  ]),
  box('Tip: choose three or four quotations per theme and practise explaining each in two sentences: what it means, and what technique makes it effective.'),
]);

export const R_EXAM = L('rj-exam', 'Exam Skills: Essays and Context Questions', 50, [
  h2('Types of question'),
  table([
    ['Essay question (about 400–500 words)', 'A statement or question about a theme, character or play as a whole. You argue a point of view with evidence.'],
    ['Context (extract) question', 'A passage from the play with short questions on meaning, language, character and link to the whole play.'],
    ['Paragraph question', 'A single focused paragraph, often asking you to discuss a quote or character.'],
  ]),
  h2('Essay planning in four steps'),
  ul([
    'Underline the key words (theme, character, “to what extent”, “discuss”).',
    'Decide your LINE OF ARGUMENT in one sentence.',
    'Plan three or four body paragraphs, each with a quotation or scene.',
    'Draft your conclusion: restate your argument, do not just summarise.',
  ]),
  h2('PEEL paragraphs explained'),
  table([
    ['Point', 'Topic sentence that answers the question.'],
    ['Evidence', 'A quotation or specific moment from the play.'],
    ['Explain', 'What the evidence shows and how it supports your point (include the technique or effect).'],
    ['Link', 'Tie the paragraph back to the question and set up the next point.'],
  ]),
  h2('Essay 1: “Romeo and Juliet is a play about the power of love.” Discuss.'),
  box('Line of argument: love is powerful because it changes people, defies the feud, and finally ends it, but it cannot save the lovers.'),
  p('Introduction (model): In Romeo and Juliet, Shakespeare shows love as a force strong enough to unite enemies and to drive two young people to death. Although the play is set in a world of hate, the lovers’ devotion transforms them and, in the end, reconciles their families. This essay will argue that love is the most powerful force in the play, but that it triumphs only through tragedy.'),
  ...peel(
    'Body paragraph 1',
    'Love is powerful because it changes Romeo and Juliet completely.',
    'Romeo is first lovesick over Rosaline, but on seeing Juliet he asks, “Did my heart love till now? Forswear it, sight!”. Juliet, who was obedient in Act 1, defies her father in Act 3.',
    'The shift shows that true love transforms identity: Romeo moves from self-indulgent fantasy to real commitment, and Juliet from a dutiful child to an independent woman.',
    'This transformation is evidence that love is stronger than habit, family and fear.',
  ),
  ...peel(
    'Body paragraph 2',
    'Love defies the hatred that divides Verona.',
    'Juliet argues, “What’s in a name? That which we call a rose / By any other name would smell as sweet”, and Romeo offers to give up his name: “Henceforth I never will be Romeo.”',
    'Here Shakespeare uses the rose metaphor to suggest that the family labels that cause hatred are meaningless compared to love. The lovers value each other more than their houses.',
    'This is a challenge to the feud, which shows the power of love to question social divisions.',
  ),
  ...peel(
    'Body paragraph 3',
    'Love’s power is shown in the lovers’ willingness to sacrifice everything, even life.',
    'Juliet drinks the potion saying, “Love give me strength!”, and Romeo dies with the words, “Thus with a kiss I die.”',
    'The final kiss combines love and death, showing that their devotion is stronger than the fear of death.',
    'This sacrifice proves how powerful love is, even if it is also fatal.',
  ),
  ...peel(
    'Body paragraph 4',
    'Love finally ends the feud, but only at the cost of the lovers’ lives.',
    'The Prince says to the families: “See what a scourge is laid upon your hate, / That heaven finds means to kill your joys with love.” Capulet and Montague then shake hands.',
    'The deaths achieve what the Prince’s threats could not. The families’ reconciliation shows love’s power to heal society, but the cost is terrible.',
    'This ending supports the argument that love is powerful, but that its victory is tragic.',
  ),
  p('Conclusion (model): In conclusion, Romeo and Juliet presents love as a transforming and defiant force. It changes the lovers, challenges the meaning of names, inspires sacrifice and finally brings peace to Verona. However, because this peace is built on the deaths of the young, Shakespeare reminds us that the power of love comes with a heavy price.'),
  h2('Essay 2: “Fate, not the characters, is responsible for the tragedy.” To what extent do you agree?'),
  box('Line of argument: fate plays a part, but the characters’ choices, especially haste, are more to blame.'),
  ...peel(
    'Body paragraph 1: fate',
    'There is strong evidence that fate drives the tragedy.',
    'The Prologue calls the lovers “star-cross’d” and their love “death-mark’d”. Romeo senses “some consequence yet hanging in the stars”.',
    'The audience is told the ending in advance, which creates a sense of inevitability. Premonitions add to the feeling that the characters are caught in a pattern.',
    'This supports the view that fate has a role.',
  ),
  ...peel(
    'Body paragraph 2: chance',
    'Chance events also seem to conspire against the lovers.',
    'Friar John is quarantined and the letter does not reach Romeo; Juliet wakes “a minute” after Romeo dies.',
    'These coincidences feel like cruel luck. If the letter had arrived, the deaths would have been avoided.',
    'These events lend weight to the idea that fate is responsible.',
  ),
  ...peel(
    'Body paragraph 3: choices',
    'However, the characters’ own choices create the situation in which chance does harm.',
    'Romeo kills Tybalt; Capulet forces the marriage; the Friar designs a secret plan; Romeo rushes to the tomb.',
    'Each decision is made in haste. The Friar warns, “Wisely and slow; they stumble that run fast”, but the warning is ignored.',
    'This shows that human actions are at least as important as fate.',
  ),
  p('Conclusion (model): Overall, fate seems to shape the play, but the characters’ rash decisions give fate its opportunity. The tragedy results from the combination of chance, haste and the destructive feud, and the characters bear much of the responsibility.'),
  h2('Context question practice'),
  box('Extract: JULIET: O Romeo, Romeo! wherefore art thou Romeo? / Deny thy father and refuse thy name; / Or, if thou wilt not, be but sworn my love, / And I’ll no longer be a Capulet.'),
  qa([
    { q: 'What does “wherefore” mean in this extract? (1)', a: 'Why. Juliet asks why Romeo has to be a Montague, not where he is.' },
    { q: 'Where are Romeo and Juliet in this scene, and who knows he is there? (2)', a: 'They are in the Capulet orchard under Juliet’s window (the balcony scene). Romeo is hidden and Juliet does not know he is listening.' },
    { q: 'Explain what Juliet asks Romeo to do and why. (2)', a: 'She asks him to give up his name or just to promise to love her, in which case she will give up hers. She wants to remove the barrier of the feud.' },
    { q: 'Identify the dramatic technique when Romeo overhears her. (2)', a: 'Aside / dramatic irony: Juliet thinks she is alone and speaks her secret feelings, which Romeo overhears. The audience knows they are both in love before they do.' },
    { q: 'How does this speech show Juliet’s character? (3)', a: 'It shows her boldness and honesty, as she speaks openly about her love, and her intelligence, as she questions the importance of names. She is also willing to defy her family.' },
    { q: 'How does this scene link to the tragedy at the end of the play? (3)', a: 'The feud that makes the names an obstacle also causes the deaths of Mercutio, Tybalt, Paris, and the lovers. Juliet wishes she could abandon her name, but in the end, their families’ hatred destroys them.' },
  ]),
  h2('Final checklist'),
  ul([
    'Have I answered the exact question and kept a clear line of argument?',
    'Does each paragraph have a point, a quotation, an explanation and a link?',
    'Have I used technique words (imagery, irony, oxymoron, soliloquy) with their effect?',
    'Have I covered both sides if the question says “to what extent”?',
    'Is there a clear conclusion that does more than repeat the question?',
  ]),
]);

export const R_GLOSSARY = L('rj-glossary', 'Glossary and Quick Revision', 25, [
  h2('Elizabethan words you will meet'),
  table([
    ['Wherefore', 'Why (not where).'],
    ['Thou / thee / thy / thine', 'You / you (object) / your / yours (informal).'],
    ['Art / hast / dost / doth', 'Are / have / do / does.'],
    ['Hence / thence', 'From here / from there.'],
    ['Ere', 'Before.'],
    ['Anon', 'Soon, at once.'],
    ['Soft!', 'Wait, quietly.'],
    ['Prithee', 'I pray thee; please.'],
    ['Fie', 'An exclamation of disgust or disapproval.'],
    ['Coz', 'Cousin; also a friendly term for a relative.'],
    ['Marry', 'A mild oath, “indeed”.'],
    ['Alack / woe', 'Alas.'],
    ['Whence / whither', 'From where / to where.'],
    ['Shrift', 'Confession and absolution.'],
    ['Baggage', 'A worthless or insolent girl (an insult).'],
    ['County', 'Count (Paris).'],
    ['Apothecary', 'A person who sold drugs and medicine.'],
  ]),
  h2('Literary terms to know'),
  table([
    ['Tragedy', 'A play in which the hero is destroyed.'],
    ['Tragic hero', 'A noble character who falls through a flaw, mistake or fate.'],
    ['Catharsis', 'Release of emotion for the audience at the end of tragedy.'],
    ['Dramatic irony', 'The audience knows more than the characters.'],
    ['Soliloquy', 'A character speaks thoughts alone on stage.'],
    ['Aside', 'A remark to the audience unheard by others.'],
    ['Foil', 'A contrasting character.'],
    ['Oxymoron', 'Contradictory words together.'],
    ['Antithesis', 'Strong contrast in structure.'],
    ['Motif', 'A repeated image or idea.'],
    ['Blank verse', 'Unrhymed iambic pentameter.'],
    ['Couplet', 'Two rhyming lines.'],
    ['Sonnet', 'A 14-line poem.'],
    ['Chorus', 'A speaker outside the action.'],
  ]),
  h2('Ten-minute revision sheet'),
  ul([
    'Setting: Verona, five days, hot summer. The feud: Montague v Capulet.',
    'Act 1: brawl, Romeo and Rosaline, Paris asks for Juliet, the feast, first kiss.',
    'Act 2: balcony, Friar agrees, the Nurse carries messages, secret marriage.',
    'Act 3: Mercutio killed, Tybalt killed, Romeo banished, wedding night, Capulet’s rage.',
    'Act 4: the Friar’s plan, the potion, Juliet “dead”.',
    'Act 5: Romeo hears the false news, buys poison, the letter fails, the tomb, the deaths, the reconciliation.',
    'Themes: love, hate, fate, haste, youth v age, honour, family, death.',
    'Motifs: light/dark, stars, poison/medicine, religion, birds, sun/moon, flowers.',
    'Techniques: dramatic irony, foreshadowing, soliloquy, oxymoron, sonnet, blank verse.',
    'Blame: feud, fate, haste, parents, Nurse, Friar, the young people themselves.',
  ]),
  h3('Five-question self-test'),
  qa([
    { q: 'In which scene do Romeo and Juliet first meet, and what form does their conversation take?', a: 'Act 1 Scene 5, at the Capulet feast. They speak a shared sonnet with religious imagery.' },
    { q: 'What happens in Act 3 Scene 1 and why is it the turning point?', a: 'Tybalt kills Mercutio and Romeo kills Tybalt; Romeo is banished. The play turns from comedy to tragedy.' },
    { q: 'Name two reasons the Friar’s plan fails.', a: 'The plague quarantine stops Friar John delivering the letter; Romeo hears the false news of Juliet’s death from Balthasar.' },
    { q: 'What does the Prince say at the end about his own responsibility?', a: 'He says he too has lost kinsmen for “winking at your discords”, and “all are punish’d”.' },
    { q: 'Which three motifs would you discuss in an imagery essay?', a: 'Light and dark, poison and medicine, and stars and fate (or religion, birds, sun and moon).' },
  ]),
]);

export const ROMEO_JULIET_CHAPTER: Chapter = {
  id: CH,
  subjectId: 'english',
  title: 'Romeo and Juliet: Full Study Guide',
  summary: 'A complete guide: context, five-day timeline, scene-by-scene narrative of every act, characters, themes, imagery, language, key quotations, who is to blame, and exam practice.',
  lessons: [
    R_CONTEXT, R_TIMELINE, R_ACT1, R_ACT2, R_ACT3, R_ACT4, R_ACT5,
    R_ROMEO_JULIET, R_SUPPORTING, R_FAMILIES,
    R_THEMES, R_MOTIFS, R_LANGUAGE, R_BLAME,
    R_QUOTES, R_EXAM, R_GLOSSARY,
  ],
};
