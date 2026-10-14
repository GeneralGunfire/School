import type { Lesson } from '../../lib/types';
import { h2, h3, p, ul, box, quote, table, lessonIn, type WB } from './writeKit';

/**
 * Romeo and Juliet: context, timeline and scene-by-scene narrative of the Prologue, Act 1 and Act 2.
 * Quotations are from Shakespeare’s text (public domain). Each scene follows the same pattern:
 * what happens, why it happens, why it matters.
 */

export const CH = 'eng-romeo';
const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>): Lesson =>
  lessonIn('english', CH, id, title, minutes, blocks);

/** One scene: where and when, what happens, why it matters, and a key quotation. */
const scene = (title: string, setting: string, happens: string[], why: string, line: string, who: string): WB[] => [
  h3(title),
  box(`Setting: ${setting}`),
  ...happens.map((t) => p(t)),
  table([['Why it matters', why]]),
  quote(`${line}  (${who})`),
];

export const R_CONTEXT = L('rj-context', 'Background and Context', 30, [
  h2('The play at a glance'),
  table([
    ['Title', 'The Most Excellent and Lamentable Tragedy of Romeo and Juliet'],
    ['Writer', 'William Shakespeare (1564–1616), written about 1595–96'],
    ['Genre', 'Tragedy. The audience is told from the Prologue that the lovers will die, so the interest is in HOW and WHY.'],
    ['Setting', 'Verona, Italy (with Mantua briefly). Hot summer days and one long night; nearly all of the action takes place in about five days.'],
    ['Structure', 'Five acts. A Chorus speaks a sonnet at the start of the play and before Act 2.'],
    ['Language', 'Mostly blank verse (unrhymed iambic pentameter) with rhyming couplets, sonnets, and prose for comic and lower-status characters.'],
    ['Source', 'Based on Arthur Brooke’s long poem The Tragicall Historye of Romeus and Juliet (1562). Shakespeare compressed the time from months to days and made Mercutio and the Nurse far more vivid.'],
  ]),
  h2('Shakespeare and his theatre'),
  p('Shakespeare wrote for the Globe and other open-air playhouses in London. Audiences ranged from nobles in the galleries to ordinary people standing in the yard, who paid a penny. There was no lighting and almost no scenery, so the language had to create the setting. When Romeo says it is night in a sunlit theatre, the words paint the dark. All the roles, including Juliet and the Nurse, were played by men and boys.'),
  p('A play like this had to hold a noisy crowd. That explains the sword fights, the bawdy jokes, the surprising twists and the fast pace of the story. It also explains why Shakespeare mixes comedy (Mercutio, the Nurse, the servants) with tragedy: it keeps the audience engaged and makes the tragedy hit harder when the laughter stops.'),
  h2('The world of the play'),
  table([
    ['Patriarchy', 'Fathers controlled their daughters’ lives. A daughter was expected to obey and marry the man her father chose; refusing was shocking disobedience. Capulet’s rage in Act 3 Scene 5 makes sense in this context.'],
    ['Marriage', 'Marriages among rich families were arranged for money, status and alliance. Girls could marry from about thirteen, so Juliet’s age (almost fourteen) was not unusual then. Love matches, like Romeo and Juliet’s, were rebellious.'],
    ['Honour and feuding', 'Noble families defended their name with violence. A man who refused to fight was thought a coward. Tybalt and Mercutio both die defending their honour.'],
    ['Religion', 'The play is set in Catholic Italy. Friar Laurence is a Franciscan. Marriage, confession, sin and the afterlife all matter: suicide was considered a mortal sin, which makes the ending especially shocking.'],
    ['Fate and astrology', 'Many Elizabethans believed the stars influenced human lives. The Prologue’s “star-cross’d lovers” would immediately suggest doomed love.'],
    ['Courtly love', 'A literary fashion in which a lover worships an unattainable lady and suffers beautifully (Romeo’s first, melodramatic love for Rosaline). Shakespeare contrasts this with real, mutual love.'],
    ['Plague', 'Outbreaks of plague were common and quarantine houses were sealed. The plague stops Friar John delivering the letter, a very realistic obstacle for the first audience.'],
  ]),
  h2('Tragedy: how the form works'),
  ul([
    'A tragic story shows a good or admirable person (or people) brought down by a combination of flaw, circumstance and fate.',
    'The audience feels pity and fear (catharsis), and the death of the central characters usually leaves the community changed.',
    'In Romeo and Juliet there is no single villain. The “flaw” is shared: a feud, impulsive young love, adult stubbornness and bad luck combine.',
    'The Prologue reveals the ending. This creates DRAMATIC IRONY, where the audience knows more than the characters, and turns every happy moment into a painful one.',
  ]),
  h2('The Prologue: what it promises'),
  quote('Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean.\nFrom forth the fatal loins of these two foes\nA pair of star-cross’d lovers take their life;\nWhose misadventured piteous overthrows\nDo with their death bury their parents’ strife.'),
  p('In fourteen lines (a sonnet) the Chorus tells us the setting, the cause (an “ancient grudge”), the central lovers, their fate (“take their life”) and the result (“bury their parents’ strife”). Important phrases: “star-cross’d” (thwarted by the stars), “death-mark’d love” (love marked for death), “fatal” (fated and deadly), “misadventured” (unlucky), and “two hours’ traffic of our stage”, which tells us how long the performance runs.'),
]);

export const R_TIMELINE = L('rj-timeline', 'The Five-Day Timeline', 20, [
  h2('The whole play in five days'),
  p('One of Shakespeare’s greatest changes was to squeeze the story into about four and a half days. The speed gives the play its feverish energy and is also one of its themes: haste. Everything that goes wrong goes wrong because people rush.'),
  table([
    ['Sunday morning (1.1–1.2)', 'Brawl in the street; Prince’s warning; Romeo is lovesick over Rosaline; Paris asks Capulet for Juliet’s hand.'],
    ['Sunday evening (1.3–1.5)', 'Capulet’s feast: Romeo sees Juliet, they kiss, and learn they are enemies.'],
    ['Sunday night (2.2)', 'The balcony scene: they swear love and agree to marry.'],
    ['Monday (2.3–2.6)', 'Friar Laurence agrees; the Nurse carries messages; Romeo and Juliet are secretly married in the afternoon.'],
    ['Monday afternoon (3.1)', 'Tybalt kills Mercutio; Romeo kills Tybalt; the Prince banishes Romeo.'],
    ['Monday night (3.2, 3.5)', 'Juliet waits; the wedding night; the lovers spend the night together.'],
    ['Tuesday dawn (3.5)', 'They part; Romeo goes to Mantua. Capulet announces the marriage to Paris for Thursday; Juliet refuses.'],
    ['Tuesday (4.1–4.2)', 'Friar’s sleeping potion plan; Juliet pretends to obey.'],
    ['Tuesday night (4.3)', 'Juliet drinks the potion.'],
    ['Wednesday (4.4–4.5)', 'Juliet is found “dead”; the wedding turns into a funeral. (Capulet moves the wedding forward a day, so the timing is tighter.)'],
    ['Wednesday–Thursday (5.1–5.3)', 'Romeo hears that Juliet is dead and buys poison; the Friar’s letter fails; the tomb scene and the deaths; the families reconcile.'],
  ]),
  h2('A chain of cause and effect'),
  p('Each event leads to the next, like falling dominoes. Understanding the chain helps you answer “who or what is to blame?”.'),
  ul([
    'Ancient grudge → street brawls → the Prince’s threat of death for breaking the peace.',
    'Romeo is heartbroken over Rosaline → Benvolio suggests the feast → Romeo meets Juliet.',
    'Love at first sight → a secret marriage (they cannot tell their families because of the feud).',
    'Tybalt’s anger at Romeo being at the feast → he challenges Romeo → Romeo refuses → Mercutio fights and dies.',
    'Romeo’s revenge for Mercutio → Tybalt dies → Romeo is banished.',
    'Capulet, believing he is helping Juliet recover from grief, brings the wedding to Paris forward → Juliet must find a way out.',
    'Friar’s plan relies on a letter → the letter is delayed by plague → Romeo hears the news of Juliet’s “death” first.',
    'Romeo rushes to the tomb with poison → Juliet wakes a moment too late → both die.',
    'The deaths finally end the feud.',
  ]),
  box('Exam tip: when asked about fate or chance, use this chain. Show where characters CHOOSE (Romeo kills Tybalt) and where chance intervenes (the plague). The best answers weigh both.'),
]);

export const R_ACT1 = L('rj-act1', 'Act 1: Scene-by-Scene Narrative', 40, [
  h2('Prologue and Act 1: love and hate collide'),
  p('Act 1 sets up everything that follows: the feud, Romeo’s melancholy, the plan for Juliet to marry Paris, and the fateful meeting of the lovers. By the end of Act 1 the audience has seen love and hate, comedy and menace, and knows that the two are about to meet.'),
  scene(
    'Act 1, Scene 1: A street brawl in Verona',
    'A public place in Verona, early on a Sunday morning',
    [
      'Two Capulet servants, Sampson and Gregory, joke crudely about fighting Montague servants and the women of the Montague household. When Abram and Balthasar (Montague servants) appear, Sampson bites his thumb at them, a deliberate insult. A fight begins.',
      'Benvolio, a Montague, tries to part them: “I do but keep the peace.” At that moment Tybalt, a hot-headed Capulet, arrives. He refuses to put away his sword: “What, drawn, and talk of peace? I hate the word, / As I hate hell, all Montagues, and thee.” Citizens join the fight, and both Lord Capulet and Lord Montague arrive in a rage and have to be restrained by their wives.',
      'Prince Escalus, the ruler of Verona, stops the fight. He is furious, calling the brawlers “Rebellious subjects, enemies to peace”. He declares that any future breach of the peace will be punished by death.',
      'Later, Lady Montague and Montague discuss their son Romeo, who has been wandering alone at night, avoiding company. Benvolio finds Romeo and learns that he is lovesick for Rosaline, who has vowed to remain chaste. Romeo speaks in contradictions: “O brawling love! O loving hate!” Benvolio advises him to look at other women and forget her.',
    ],
    'The first scene shows hatred in action and introduces the feud that will ultimately destroy the lovers. It sets up Tybalt’s aggression, Benvolio as the peacemaker, and the Prince’s threat, which makes later violence deadly. We also meet Romeo as a self-indulgent, conventional lover, who is in love with the idea of love, a contrast to the real love he will soon find.',
    'Here’s much to do with hate, but more with love.',
    'Romeo, 1.1',
  ),
  scene(
    'Act 1, Scene 2: Paris’s request and a servant’s mistake',
    'A street, and Capulet’s house',
    [
      'Capulet speaks with Paris, a wealthy young nobleman and a relative of the Prince, who asks to marry Juliet. Capulet says Juliet is only thirteen (“too young”) and asks Paris to wait two years, though he says Paris may “woo her, gentle Paris”, and invites him to the feast that night.',
      'Capulet gives his illiterate servant a list of guests to invite. In the street, the servant meets Romeo and Benvolio and asks Romeo to read the list. Romeo reads it and learns that Rosaline will be at the Capulet feast. Benvolio persuades Romeo to attend and compare her with other beauties.',
    ],
    'The servant’s mistake, accidentally inviting the enemy to the feast, is a classic example of how chance is woven into the plot. It also introduces Paris as a rival, and shows that Capulet at first values his daughter’s happiness (“My will to her consent is but a part”). Notice how his attitude changes later.',
    'My will to her consent is but a part.',
    'Capulet, 1.2',
  ),
  scene(
    'Act 1, Scene 3: Juliet and the Nurse',
    'A room in Capulet’s house, afternoon',
    [
      'Lady Capulet calls for Juliet. The Nurse, who raised Juliet and breast-fed her, rambles at length about Juliet’s childhood and her late daughter Susan. She tells the funny story of how Juliet, aged three, fell and was comforted with a bawdy joke from the Nurse’s husband. Lady Capulet brusquely interrupts.',
      'Lady Capulet tells Juliet about Paris’s proposal. She reminds Juliet that she herself was a mother at Juliet’s age. Juliet responds obediently but without enthusiasm: “It is an honour that I dream not of.” She agrees to “look to like, if looking liking move”, meaning she will consider Paris, but only if she comes to like him.',
    ],
    'This scene introduces the Nurse’s earthy humour, the very different relationships Juliet has with her mother (formal, distant) and her Nurse (warm, affectionate), and the pressure on Juliet to marry. Juliet is polite, obedient and cautious, which makes her later rebellion more striking.',
    'It is an honour that I dream not of.',
    'Juliet, 1.3',
  ),
  scene(
    'Act 1, Scene 4: On the way to the masque',
    'A street outside Capulet’s house, evening',
    [
      'Romeo, Mercutio, Benvolio and others, wearing masks, approach the Capulet feast. Romeo is still gloomy and says he has had a bad dream. Mercutio, witty, restless and cynical, teases him with the famous Queen Mab speech, describing a tiny fairy who visits sleepers and fills their dreams with desires: lovers dream of love, soldiers dream of battle, lawyers dream of fees. His speech grows wilder and more bitter until Romeo stops him.',
      'Romeo says he has a premonition: “my mind misgives / Some consequence yet hanging in the stars / Shall bitterly begin his fearful date / With this night’s revels.” He then follows his friends into the party.',
    ],
    'The Queen Mab speech shows Mercutio’s imagination and his disillusionment with love and dreams. Romeo’s forebodings are an example of foreshadowing: the audience senses that the night will have terrible consequences. Fate is already at work.',
    'Some consequence yet hanging in the stars.',
    'Romeo, 1.4',
  ),
  scene(
    'Act 1, Scene 5: The Capulet feast; love at first sight',
    'A hall in Capulet’s house, night',
    [
      'Servants hurry about preparing the party. Capulet welcomes guests and tells an older relative of the days when he, too, danced in masks.',
      'Romeo sees Juliet across the room and is instantly struck: “O, she doth teach the torches to burn bright!” and “Did my heart love till now? forswear it, sight! / For I ne’er saw true beauty till this night.” Rosaline is forgotten at once. Tybalt hears Romeo’s voice and recognises him. He is outraged and wants to kill him on the spot. Capulet forbids it, to preserve the peace and his reputation as host, and scolds Tybalt: “Content thee, gentle coz, let him alone; / He bears him like a portly gentleman.” Tybalt swallows his rage but promises revenge.',
      'Meanwhile Romeo approaches Juliet. Their first conversation is a shared sonnet filled with religious imagery, with Romeo as a pilgrim and Juliet as a saint: “If I profane with my unworthiest hand / This holy shrine, the gentle sin is this.” They kiss twice. The Nurse then calls Juliet away, and each separately learns the other’s identity. Romeo says, “My life is my foe’s debt.” Juliet says, “My only love sprung from my only hate! / Too early seen unknown, and known too late!” and adds “My grave is like to be my wedding bed.”',
    ],
    'The meeting of the lovers is the turning point of the whole play. The sonnet they share shows their connection is instant, mutual and spiritual. It also bonds love with the language of religion, danger and death. Juliet’s remark about her grave is powerful dramatic irony. The scene also shows Tybalt’s uncontrollable hatred and Capulet’s power: the first sign of the conflict between the individuals’ choices and the authority of the older generation.',
    'My only love sprung from my only hate!',
    'Juliet, 1.5',
  ),
]);

export const R_ACT2 = L('rj-act2', 'Act 2: Scene-by-Scene Narrative', 40, [
  h2('Act 2: the secret marriage'),
  p('Act 2 is the high point of hope in the play. Within one night and day the lovers declare their feelings, win the help of the Friar, and marry in secret. The mood is romantic and comic, but every promise of joy is shadowed by the Prologue.'),
  p('The Chorus opens Act 2 with another sonnet: the lovers’ old passion (Rosaline) is dead, and the new love is “beloved and loves again”, yet both are in danger because they are “foe supposed” and must steal their meetings “from fearful hooks”. Passion gives them “means to meet”, and “Temp’ring extremities with extreme sweet”.'),
  scene(
    'Act 2, Scene 1: Mercutio mocks the lover',
    'A lane by Capulet’s orchard wall, night',
    [
      'Romeo cannot leave. He climbs the Capulet orchard wall to find Juliet. Benvolio and Mercutio call for him, and Mercutio mocks the idea of Romeo in love, using crude jokes about Rosaline. Romeo, hidden, overhears and laughs quietly: “He jests at scars that never felt a wound.”',
    ],
    'Mercutio and Romeo have opposite views of love: Mercutio treats it as physical and foolish; Romeo sees it as spiritual and serious. The scene shows their friendship and ends with the stage empty, ready for the balcony.',
    'He jests at scars that never felt a wound.',
    'Romeo, 2.1',
  ),
  scene(
    'Act 2, Scene 2: The balcony scene',
    'Capulet’s orchard, under Juliet’s window, night',
    [
      'Juliet appears at her window above. Romeo, hidden below, whispers: “But, soft! what light through yonder window breaks? / It is the east, and Juliet is the sun.” She cannot see him and, believing she is alone, speaks aloud: “O Romeo, Romeo! wherefore art thou Romeo? / Deny thy father and refuse thy name.” (“Wherefore” means “why”, not “where”.) She argues that a name is meaningless: “What’s in a name? That which we call a rose / By any other name would smell as sweet.”',
      'Romeo reveals himself and offers to give up his name: “Call me but love, and I’ll be new baptised; / Henceforth I never will be Romeo.” Juliet is alarmed, as the walls are high and her kinsmen would kill him if they found him there. He replies: “With love’s light wings did I o’erperch these walls; / For stony limits cannot hold love out.” She worries that things are happening too fast: “It is too rash, too unadvised, too sudden; / Too like the lightning, which doth cease to be / Ere one can say ‘It lightens.’”',
      'Their love is mutual and certain. Juliet insists he must not swear by the inconstant moon but she asks, practically, for honest intentions: if he truly loves her, he should send word the next day to arrange a marriage. The Nurse keeps calling from within the house, and they part with the famous line, “Parting is such sweet sorrow, / That I shall say good night till it be morrow.” They agree that Romeo will send a messenger at nine the next morning.',
    ],
    'The balcony scene is the emotional heart of the play. Juliet is shown as intelligent, direct and brave: she is the one who proposes marriage, and she is the one who warns that their love is rash. The imagery of light and darkness, birds, and religion enriches the language. The scene also highlights the play’s tension between love and the family names that divide them, and the dramatic irony of “too like the lightning”.',
    'What’s in a name? That which we call a rose / By any other name would smell as sweet.',
    'Juliet, 2.2',
  ),
  scene(
    'Act 2, Scene 3: Friar Laurence and his herbs',
    'Friar Laurence’s cell, early Monday morning',
    [
      'Friar Laurence gathers herbs at dawn and reflects on how plants hold both good and harm: “Within the infant rind of this small flower / Poison hath residence, and medicine power.” Romeo arrives, having been up all night, and tells him he is in love with “the fair daughter of rich Capulet”. The Friar is amazed at the change from Rosaline and teases him about the fickleness of young men: “Young men’s love then lies / Not truly in their hearts, but in their eyes.”',
      'Romeo asks him to marry them that day. After hesitating, the Friar agrees, thinking the marriage might end the feud: “For this alliance may so happy prove, / To turn your households’ rancour to pure love.” He also warns Romeo to slow down: “Wisely and slow; they stumble that run fast.”',
    ],
    'The herb speech is an extended metaphor for the idea that good and evil are mixed, and foreshadows the use of the sleeping potion (and the apothecary’s poison). The Friar’s advice about haste states one of the play’s main themes. His decision to marry them, made with good intentions and some political hope, is a pivotal choice with fatal consequences.',
    'Wisely and slow; they stumble that run fast.',
    'Friar Laurence, 2.3',
  ),
  scene(
    'Act 2, Scene 4: The Nurse as messenger',
    'A street in Verona, Monday morning',
    [
      'Mercutio and Benvolio wonder where Romeo spent the night. Tybalt has sent a letter challenging Romeo to a duel. Mercutio mocks Tybalt as an affected, fashionable swordsman. When Romeo arrives, the three trade clever, rapid puns in a witty contest, which Mercutio loses and then declares a draw.',
      'The Nurse arrives with her servant Peter, and the young men tease her mercilessly. Romeo speaks to her privately and tells her to bring Juliet to Friar Laurence’s cell that afternoon for “shrift” (confession), where she will be married. He gives her money, which she accepts after pretending to refuse.',
    ],
    'The scene is full of comedy, but Tybalt’s challenge is a ticking bomb. It also shows the Nurse as a go-between and as someone who will later fail Juliet. The fast, comic pace contrasts with the slow, serious Friar.',
    'Now art thou sociable, now art thou Romeo.',
    'Mercutio, 2.4',
  ),
  scene(
    'Act 2, Scene 5: Juliet waits for the Nurse',
    'Capulet’s orchard, noon',
    [
      'Juliet has waited three hours for the Nurse, who finally arrives, out of breath and deliberately dragging out her news, complaining about her aching bones. Juliet’s impatience is painful and funny. At last the Nurse tells her to go to the Friar’s cell, “There stays a husband to make you a wife.”',
    ],
    'The comic delay shows time as a theme: for the lovers, minutes are an eternity. It also characterises the Nurse (earthy, teasing, loving) and Juliet’s eager impatience. Compare the later scene in which the Nurse brings dreadful news with a different kind of delay.',
    'Love’s heralds should be thoughts, / Which ten times faster glide than the sun’s beams.',
    'Juliet, 2.5',
  ),
  scene(
    'Act 2, Scene 6: The wedding',
    'Friar Laurence’s cell, Monday afternoon',
    [
      'Romeo and Friar Laurence wait. Romeo declares that nothing can overshadow his joy: “Do thou but close our hands with holy words, / Then love-devouring death do what he dare.” The Friar warns him: “These violent delights have violent ends / And in their triumph die, like fire and powder, / Which, as they kiss, consume.” He again advises moderation: “Too swift arrives as tardy as too slow.”',
      'Juliet arrives. They declare their love, and the Friar leads them away to be married.',
    ],
    'The Friar’s warning is a clear prophecy for the audience. The word “violent” links love and death, and the image of gunpowder and fire shows passion as both beautiful and destructive. This is the last moment of pure happiness in the play.',
    'These violent delights have violent ends.',
    'Friar Laurence, 2.6',
  ),
  box('Check-point: after Act 2, the lovers are married in secret, the Friar and Nurse are involved, and Tybalt is hunting Romeo. The audience knows that everything is about to break.'),
]);
