import type { Lesson } from '../../lib/types';
import { h2, h3, p, ul, box, table, lessonIn, type WB } from './writeKit';
import { CH } from './romeoA';

/** Romeo and Juliet: character analysis. */

const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>): Lesson =>
  lessonIn('english', CH, id, title, minutes, blocks);

/** A character profile: who, traits with evidence, development, function. */
const profile = (
  name: string,
  who: string,
  traits: [string, string][],
  development: string,
  relationships: [string, string][],
  function_: string,
  examAngle: string,
): WB[] => [
  h2(name),
  p(who),
  h3('Key traits and the evidence for them'),
  table(traits),
  h3('How the character changes'),
  p(development),
  h3('Key relationships'),
  table(relationships),
  h3('Dramatic function'),
  p(function_),
  box(`Exam angle: ${examAngle}`),
];

export const R_ROMEO_JULIET = L('rj-char-leads', 'Characters: Romeo and Juliet', 45, [
  ...profile(
    'Romeo Montague',
    'The only son of Montague and Lady Montague, about sixteen. Romeo begins the play as a sulky, self-dramatising lover and ends it as a tragic hero who loves, kills and dies for Juliet.',
    [
      ['Romantic and passionate', 'He falls in love instantly, twice: “Did my heart love till now? Forswear it, sight! / For I ne’er saw true beauty till this night” (1.5). His language about Juliet is full of light and religion: “It is the east, and Juliet is the sun.”'],
      ['Melancholy and self-indulgent (at first)', 'His Rosaline-sickness is conventional and theatrical: “O brawling love! O loving hate!” (1.1). He shuts himself in a dark room and wanders at night. Benvolio and Mercutio tease him for it.'],
      ['Impulsive and extreme', 'He marries on a day’s acquaintance, kills Tybalt without thinking in 3.1, wants to kill himself over banishment in 3.3, and rushes to the tomb in 5.1. The Friar warns him: “Wisely and slow; they stumble that run fast.”'],
      ['Loyal and sensitive', 'He cannot bear to fight Tybalt because of Juliet, tries to stop the fight, and blames himself for Mercutio’s death. Loyalty to his friend, though, overrides his caution.'],
      ['Peace-loving but honour-bound', 'He tries to avoid violence (“I do protest I never injured thee”), but when Mercutio dies, he gives in to the code of honour: “Now, Tybalt, take the ‘villain’ back again.”'],
      ['Fatalistic', 'He senses disaster from the beginning (“Some consequence yet hanging in the stars”), calls himself “fortune’s fool”, and defies the stars at the end.'],
    ],
    'Romeo moves from fantasy to reality. In Act 1 he is in love with love; with Juliet he finds mutual, grown-up feeling. The killing of Tybalt shows that his hot temper can override his love, and the banishment pushes him to despair. In the tomb he is calm and decisive, which makes his tragedy more moving, though his certainty that Juliet is dead is mistaken. Ironically, the quiet at the end of his life is the result of his haste.',
    [
      ['Juliet', 'His one true love and the centre of his life. He tells her his name is “hateful” to himself.'],
      ['Mercutio', 'Close friend and foil. Mercutio is cynical about love; Romeo is devoted to it.'],
      ['Benvolio', 'Loyal cousin and peacemaker, who cares about Romeo’s moods.'],
      ['Friar Laurence', 'Father-figure and confessor, who guides but cannot restrain him.'],
      ['Tybalt', 'The enemy whose death seals Romeo’s fate.'],
      ['Montague and Lady Montague', 'Worried parents who do not understand their son; his exile contributes to Lady Montague’s death.'],
    ],
    'Romeo is the tragic hero whose actions drive the plot forward. His shift from Rosaline to Juliet tests the idea of true love, and his impulsiveness embodies the theme of haste. As the main victim of fate and his own choices, he gives the audience both sympathy and frustration.',
    'When asked how far Romeo is responsible for the tragedy, separate his CHOICES (killing Tybalt, rushing to the tomb) from CHANCE (the plague, the letter). Use the Friar’s warning about haste.',
  ),
  ...profile(
    'Juliet Capulet',
    'The only surviving child of Capulet and Lady Capulet, not yet fourteen. Juliet starts the play as an obedient, sheltered girl and in five days becomes one of Shakespeare’s boldest heroines.',
    [
      ['Obedient and dutiful (at first)', '“It is an honour that I dream not of” (1.3). She agrees to “look to like” Paris, only if looking makes her like him.'],
      ['Intelligent and practical', 'At the balcony she questions Romeo’s oaths, warns that the love is “too rash, too unadvised, too sudden” and takes the lead by proposing marriage. She also thinks about the danger: “If they do see thee, they will murder thee.”'],
      ['Passionate and imaginative', 'Her speech “Gallop apace, you fiery-footed steeds” is erotic and poetic. She imagines Romeo cut “in little stars”.'],
      ['Brave and resolute', 'She defies her father, faces the loss of her family, and, in 4.3, drinks the potion despite her terror: “Love give me strength!” She is willing to die rather than betray her marriage.'],
      ['Loyal to Romeo above all', 'In 3.2, when the Nurse curses Romeo, she says: “Shall I speak ill of him that is my husband?” She puts her husband above her cousin and family.'],
      ['Capable of deceit', 'She pretends to obey her father (4.2) and tells her mother ambiguous half-truths (“whom you know I hate”). Her deceptions are driven by desperation, not malice.'],
    ],
    'Juliet matures faster than anyone else in the play. Her early obedience gives way to independence as she is isolated one by one: Romeo is banished, her father threatens her, her mother abandons her, the Nurse betrays her. By the end she makes the most difficult decisions alone, and even her death is a deliberate act. Her speech in 4.3 shows both her youth (she is terrified) and her courage (she goes through with it).',
    [
      ['Romeo', 'Husband and the love of her life. She is the more practical of the two.'],
      ['The Nurse', 'A mother-figure, confidante and go-between. Their bond breaks when the Nurse advises her to marry Paris.'],
      ['Capulet', 'Loving father who becomes tyrannical when disobeyed. See 3.5.'],
      ['Lady Capulet', 'Cold, formal mother who cannot offer emotional support.'],
      ['Friar Laurence', 'Her last adult ally and the architect of the sleeping-potion plan.'],
      ['Paris', 'The suitor she never wanted. She is polite and distant to him.'],
    ],
    'Juliet shows the effect of the patriarchy on a young woman and the strength she finds to resist it. She is the moral and emotional centre of the second half of the play. She also embodies the theme of youthful love’s power against the older generation’s rigid authority.',
    'Trace Juliet’s development across the play with three or four key quotations (1.3, 2.2, 3.5, 4.3). Note how isolation drives her growth.',
  ),
  h2('Romeo and Juliet compared'),
  table([
    ['Language', 'Romeo’s love language is full of conventional images (sun, stars, saints). Juliet’s is more direct and practical, though also poetic.'],
    ['Attitude to haste', 'Romeo rushes in; Juliet is the first to say the love is “too rash”, yet she goes along.'],
    ['Reaction to crisis', 'Romeo despairs and threatens suicide (3.3); Juliet thinks and plans (4.1).'],
    ['Attitude to their families', 'Romeo is willing to abandon his name; Juliet challenges the idea of names but remains loyal to the people she loves.'],
    ['Ending', 'Romeo acts too fast and Juliet wakes too late. Both die for the other.'],
  ]),
]);

export const R_SUPPORTING = L('rj-char-support', 'Characters: Mercutio, Tybalt, Benvolio, Nurse and Friar', 50, [
  ...profile(
    'Mercutio',
    'A kinsman of the Prince and Romeo’s closest friend. Witty, restless and highly imaginative, he is one of Shakespeare’s most memorable characters, and he dies at the play’s turning point.',
    [
      ['Witty and playful', 'His puns and wordplay fill 2.4. Even dying he jokes: “Ask for me tomorrow, and you shall find me a grave man.”'],
      ['Imaginative', 'The Queen Mab speech (1.4) is a dazzling invention, which grows darker and angrier as it goes.'],
      ['Cynical about love', 'He mocks Romeo’s romantic poses and speaks of love as purely physical. “If love be rough with you, be rough with love.”'],
      ['Quick-tempered and proud', 'He cannot bear Romeo’s “dishonourable, vile submission” to Tybalt and fights himself.'],
      ['Loyal', 'He fights for Romeo’s honour without knowing the reason for Romeo’s calm.'],
    ],
    'Mercutio does not change much, but his tone darkens as the play proceeds. His last words, “A plague o’ both your houses!”, show that his sarcasm has turned into bitterness: he blames the feud for his senseless death.',
    [
      ['Romeo', 'Close friend and foil. Mercutio is rooted in the real, physical world; Romeo is lost in romantic idealism.'],
      ['Tybalt', 'Rival. Mercutio calls him “Prince of Cats” and mocks his fashionable duelling.'],
      ['Benvolio', 'Friend who tries to restrain him, though Mercutio teases him too.'],
    ],
    'Mercutio provides humour and a cynical counterpoint to Romeo’s romanticism. His death is the turning point of the play: with him, the comedy ends. He also shows how the feud destroys innocent lives, since he belongs to neither family.',
    'Link Mercutio’s death to the theme of violence and honour. His curse shows the audience that the feud, not the individuals, is the real villain.',
  ),
  h3('Mercutio’s dramatic function, looked at more closely'),
  p('Mercutio is not a Montague, yet he dies defending Montague honour; this makes him the clearest proof in the whole play that the feud harms people who have no stake in it. Structurally, he exists to do several jobs at once: he mocks the conventions of romantic love (the Queen Mab speech, the jokes about Rosaline) so that the audience can see how different Romeo’s love for Juliet really is; he supplies the play’s wit and energy in Acts 1–3, so that his death removes the last source of comedy and signals, more than any other single event, that the play has become a tragedy; and his dying curse, repeated three times, gives the audience the play’s clearest verdict on who is really responsible: “A plague o’ both your houses!” is aimed at the Montagues and Capulets equally, not at Tybalt alone.'),
  box('Exam angle: examiners often ask you to discuss Mercutio’s significance "beyond comic relief". Always mention that his death (1) ends the comic register of the play, (2) directly causes Romeo’s revenge and banishment, and (3) voices the play’s judgement on the feud through his curse.'),
  ...profile(
    'Tybalt',
    'Juliet’s cousin, “Prince of Cats”, a skilled swordsman and the fiercest defender of Capulet honour. He is the play’s most aggressive character.',
    [
      ['Aggressive and hot-tempered', '“What, drawn, and talk of peace? I hate the word, / As I hate hell, all Montagues, and thee.” (1.1)'],
      ['Proud and sensitive to insult', 'He is outraged that Romeo comes to the feast: “To strike him dead I hold it not a sin.”'],
      ['Obedient to Capulet (grudgingly)', 'He obeys Capulet’s order to leave Romeo alone but vows revenge: “Patience perforce with wilful choler meeting / Makes my flesh tremble.”'],
      ['Skilled and vain', 'Mercutio mocks his fashionable fencing terms.'],
    ],
    'Tybalt does not change: he is consistent in his hatred, and that is his tragedy. He is the match that lights the fire: his challenge forces the fight that kills Mercutio, Romeo’s revenge kills him, and Romeo’s banishment follows.',
    [
      ['Capulet', 'A respected elder who restrains him at the feast.'],
      ['Romeo', 'Hated enemy; Tybalt does not know Romeo is now his cousin by marriage.'],
      ['Mercutio', 'Antagonist and victim.'],
    ],
    'Tybalt represents the violence and hatred of the feud. He is the aggressor in the two fights, and his death is the immediate cause of the banishment.',
    'Compare Tybalt and Benvolio as opposite responses to the feud: violence versus peace.',
  ),
  h3('Tybalt as a foil'),
  p('Tybalt works most clearly as a foil (a contrasting character who throws another character’s qualities into relief) in three pairings. Against Benvolio, he shows the difference between a Capulet and a Montague who both claim to defend their family, yet choose opposite methods: Tybalt draws his sword in 1.1 at the first opportunity, while Benvolio immediately tries to “keep the peace”. Against Romeo, he shows the difference between inherited, unthinking hatred ("I hate the word, / As I hate hell, all Montagues, and thee") and Romeo’s new, chosen love, which makes Romeo literally unable to hate the man his new wife calls cousin. Against Mercutio, Tybalt’s practised, fashionable swordsmanship (mocked as “Prince of Cats”) is set against Mercutio’s improvised wit; Tybalt’s skill with a blade, not his wit, is what kills Mercutio, reminding the audience that in Verona a sharp tongue is no match for a sharp sword.'),
  ...profile(
    'Benvolio',
    'Romeo’s cousin and friend, and Montague’s nephew. His name means “good will”, and he is the peacemaker of the play.',
    [
      ['Peaceful', '“I do but keep the peace: put up thy sword.” (1.1)'],
      ['Sensible and caring', 'He tries to help Romeo forget Rosaline and advises caution on a hot day: “the Capulets abroad”.'],
      ['Honest', 'He gives the Prince a truthful account of the fight (3.1).'],
    ],
    'Benvolio stays consistent, but his advice is ignored, and he vanishes from the play after Act 3.',
    [
      ['Romeo', 'Loyal friend whose advice Romeo ignores.'],
      ['Mercutio', 'Friend, though they are very different.'],
    ],
    'He is a foil to Tybalt and shows that reason and peace are still available. His truthful report to the Prince helps spare Romeo’s life.',
    'Contrast Benvolio and Tybalt as responses to violence.',
  ),
  ...profile(
    'The Nurse',
    'Juliet’s nurse and surrogate mother, who also breast-fed Juliet and lost her own daughter, Susan. She is warm, earthy and talkative, with a bawdy sense of humour.',
    [
      ['Warm and loving', 'Her speech about Juliet’s childhood (1.3) is full of affection.'],
      ['Comic and earthy', 'She rambles, makes sexual jokes and teases Romeo’s friends (2.4).'],
      ['Loyal but practical', 'She helps arrange the marriage, but in 3.5 she advises Juliet to marry Paris: “I think it best you married with the County. / O, he’s a lovely gentleman!”'],
      ['Limited in understanding', 'She sees marriage as a matter of security and does not grasp the depth of Juliet’s love.'],
    ],
    'The Nurse starts as Juliet’s closest friend but ends as a source of betrayal. Her practical advice in 3.5 shows she cannot see beyond conventional comfort, and Juliet turns away from her for good: “Ancient damnation! O most wicked fiend!”',
    [
      ['Juliet', 'Mother-figure and confidante until 3.5.'],
      ['Lady Capulet', 'The Nurse is more of a mother than Lady Capulet is.'],
      ['Romeo', 'Go-between who likes him.'],
    ],
    'The Nurse provides humour and a warm contrast to Lady Capulet’s coldness. Her betrayal isolates Juliet and pushes her towards the Friar. She also reflects a common view of love as practical, in contrast to the idealism of Romeo and Juliet.',
    'Discuss the Nurse as both comic relief and an example of failed support.',
  ),
  h3('The Nurse: characterisation and comic relief in more depth'),
  p('Shakespeare marks the Nurse as a comic, lower-status figure through her language as much as her actions: her long, rambling speech in 1.3 wanders from Juliet’s weaning to a bawdy joke from her dead husband, in sentences that run on and double back, unlike the controlled, formal verse of Lady Capulet in the same scene. In 2.4 she becomes the butt of Mercutio and Benvolio’s mockery, which she does not fully understand, generating further comedy at her expense (“Scurvy knave!”). Her comic function has a serious purpose: by making the audience laugh at and with her, Shakespeare builds affection for her before 3.5, so that her betrayal of Juliet, however understandable in practical terms, lands as a genuine emotional blow rather than a plot device. Her limitation is not malice but a different value system: she measures a match by wealth and looks (“he’s a lovely gentleman”), not by love, and so cannot understand why Juliet would refuse a “good” match.'),
  ...profile(
    'Friar Laurence',
    'A Franciscan friar, Romeo’s confessor and trusted friend. He is a herbalist, wise, compassionate and well-meaning, but his plans lead to tragedy.',
    [
      ['Wise and thoughtful', 'He understands that good and evil are mixed (the herb speech) and warns of haste: “Wisely and slow; they stumble that run fast.”'],
      ['Hopeful', 'He marries the lovers hoping to “turn your households’ rancour to pure love”.'],
      ['Compassionate', 'He helps Romeo and Juliet repeatedly and speaks gently to Juliet.'],
      ['Secretive and cautious to a fault', 'He keeps the marriage secret and chooses a clandestine plan.'],
      ['Fearful at the end', 'He runs from the tomb when he hears the watch, abandoning Juliet.'],
    ],
    'The Friar begins as a wise counsellor and ends as a broken man who admits his share of guilt. His plan to fake Juliet’s death puts a great deal of weight on timing and a single letter, and when it fails, he is unable to save either of them. In 5.3 he honestly confesses and the Prince declares: “We still have known thee for a holy man.”',
    [
      ['Romeo', 'Confessor and father-figure who cannot restrain him.'],
      ['Juliet', 'Last adult ally.'],
      ['Friar John', 'The failed messenger.'],
    ],
    'The Friar represents the older generation’s attempt to repair the damage of the feud. His good intentions go wrong, which makes him one of the play’s tragic figures, and raises questions about whether secret action can solve public problems.',
    'He is often blamed for the deaths. Weigh the case: his marriage plan, the potion plan, the single messenger and his flight, against the real obstacle of the plague.',
  ),
  h3('The Friar’s moral ambiguity'),
  p('Friar Laurence is a religious authority who repeatedly chooses secrecy and deception over honesty, which complicates any simple reading of him as purely good. He agrees to marry Romeo and Juliet without their parents’ knowledge or consent, partly out of compassion, but openly admits his real motive is political: he hopes the marriage will “turn your households’ rancour to pure love”, using the young couple’s feelings as a tool to solve an adult problem. He then devises an elaborate deception, the sleeping potion, that requires faking a death, lying to an entire grieving family, and trusting a single unreliable letter. When the plan collapses, his instinct in the tomb is self-preservation: he flees and leaves Juliet alone with two corpses, which is a serious failure of the pastoral care he is supposed to provide. His final speech to the Prince is honest and takes responsibility, which is in his favour, and the Prince still calls him “a holy man”, so the play does not condemn him outright. The ambiguity is the point: his wisdom (the herb speech, his warnings against haste) is real, but his actions do not always live up to it.'),
  box('Exam angle: a strong answer on the Friar avoids simply calling him "good" or "bad". Show both the compassionate wisdom (his advice, his willingness to help) and the reckless deception (the secret marriage, the risky potion plan, his flight from the tomb), and conclude with your own judgement.'),
]);

export const R_FAMILIES = L('rj-char-families', 'Characters: The Families, Paris and the Prince', 40, [
  ...profile(
    'Lord Capulet',
    'Juliet’s father, a wealthy, powerful Veronese nobleman. He is warm and festive, but domineering. His behaviour shifts dramatically.',
    [
      ['Hospitable and generous', 'He welcomes the guests and tells everyone to enjoy the party.'],
      ['Initially concerned for Juliet', '“My will to her consent is but a part.” He asks Paris to wait.'],
      ['Controlling and tyrannical', 'In 3.5, he rages: “Hang thee, young baggage! disobedient wretch!” He threatens to disown her.'],
      ['Reasonable in the feud', 'At the feast he stops Tybalt and refuses to brawl, saying Romeo “bears him like a portly gentleman”.'],
      ['Impulsive', 'He moves the wedding forward on a whim, unwittingly worsening the crisis.'],
    ],
    'Capulet moves from a kind, indulgent father to an unreasonable tyrant, then to a broken, grieving man. His final gesture, offering Montague his hand, shows he has learnt from tragedy.',
    [
      ['Juliet', 'Daughter whom he loves and controls.'],
      ['Tybalt', 'Nephew whom he restrains.'],
      ['Montague', 'Rival with whom he ends in peace.'],
    ],
    'Capulet represents patriarchal authority and the older generation’s part in the tragedy. His anger at Juliet’s refusal is one of the main reasons she turns to the Friar.',
    'Discuss how Capulet’s changeability contributes to the tragedy.',
  ),
  ...profile(
    'Lady Capulet',
    'Juliet’s mother, who gave birth at about fourteen. Formal and ambitious, she is distant from Juliet.',
    [
      ['Cold and formal', 'She addresses Juliet as “daughter” and relies on the Nurse to be present when they talk.'],
      ['Ambitious for her daughter', 'She presents Paris in glowing terms: “read o’er the volume of young Paris’ face”.'],
      ['Vengeful', 'She wants Romeo killed after Tybalt’s death and plans to have him poisoned.'],
      ['Unsupportive', 'In 3.5 she abandons Juliet: “I have done with thee.”'],
    ],
    'She does not change; this unchanging coldness is part of what isolates Juliet.',
    [
      ['Juliet', 'A distant mother.'],
      ['Tybalt', 'Her nephew, whom she mourns bitterly.'],
    ],
    'She is a contrast to the Nurse and shows the lack of emotional support available to Juliet.',
    'Use her to explore the theme of family and obedience.',
  ),
  h3('Lady Capulet and Juliet: a relationship defined by distance'),
  p('Shakespeare marks the distance between Lady Capulet and Juliet through small details before the plot even requires it: in 1.3 Lady Capulet cannot discuss marriage with her own daughter without the Nurse in the room, and even then needs the Nurse to leave before raising the subject, as though she has no established habit of intimate talk with Juliet. Her language to Juliet is formal and transactional, asking “how stands your disposition to be married?” as a business question rather than a personal one, and describing Paris as a “volume” to be read for his qualities, like a kind of property. This formality is why Juliet turns instinctively to the Nurse for comfort, not her mother, throughout Acts 1 to 3. The relationship’s failure becomes decisive in 3.5: when Juliet begs on her knees for help, Lady Capulet’s refusal (“Talk not to me, for I’ll not speak a word... I have done with thee”) is delivered in plain, curt lines with none of the extended, anguished verse Capulet or the Nurse use elsewhere in the same scene, which makes her rejection feel colder, not calmer, than her husband’s rage.'),
  ...profile(
    'The Montagues',
    'Romeo’s parents. Montague is the head of the family and a rival of Capulet. Lady Montague is gentle and worried about her son.',
    [
      ['Concerned parents', 'They worry about Romeo’s moods: “Many a morning hath he there been seen, / With tears augmenting the fresh morning’s dew.”'],
      ['Peace-loving (Lady Montague)', 'She holds back her husband from fighting in 1.1.'],
      ['Tragic loss', 'Lady Montague dies of grief at Romeo’s exile.'],
    ],
    'The Montagues are shown mainly through their concern for Romeo. They learn too late how much their son suffered.',
    [
      ['Romeo', 'Beloved son who confides in Benvolio and the Friar rather than his parents.'],
    ],
    'They represent the other side of the feud, equally affected.',
    'Treat the Montagues and Capulets as equal victims of the feud.',
  ),
  ...profile(
    'Paris',
    'A wealthy young nobleman and kinsman of the Prince, who wants to marry Juliet.',
    [
      ['Polite and respectable', 'He speaks courteously to Capulet and the Friar.'],
      ['Sincere', 'He grieves for Juliet and brings flowers to her tomb.'],
      ['Conventional', 'He sees marriage as an arrangement and does not know Juliet well.'],
      ['Brave', 'He fights Romeo to protect the tomb: “Condemned villain, I do apprehend thee.”'],
    ],
    'Paris is not changed, but he is a sympathetic figure, who is another innocent casualty.',
    [
      ['Juliet', 'He loves her; she barely knows him.'],
      ['Capulet', 'Approved match.'],
      ['Romeo', 'Unwitting rival.'],
    ],
    'Paris embodies the conventional path Juliet rejects and adds pressure on her. His death at Romeo’s hand is another tragic consequence.',
    'Consider whether Paris is a villain or a victim.',
  ),
  h3('Paris as the “what might have been” suitor'),
  p('Paris is never written as a villain: he follows every social rule correctly, asks Capulet’s permission before approaching Juliet, grieves sincerely at her tomb and brings flowers, and even his final act, trying to arrest Romeo as Tybalt’s killer, is legally and morally reasonable from his point of view. Judged only by the standards of Verona’s respectable society, Paris would have made Juliet a safe, approved, uneventful match: wealthy, well-connected, and sanctioned by her father from the very first act. He represents the ordinary life Juliet was expected to choose and did not, which is exactly why he matters thematically: he is the measuring stick against which Romeo and Juliet’s extraordinary, forbidden love is judged. His tragedy is that he is an entirely innocent casualty of a love story he knows almost nothing about; he dies without ever understanding why Juliet refused him, which makes him, like Mercutio, a victim of the feud and the lovers’ secrecy rather than of any fault of his own.'),
  box('Exam angle: Paris is a useful character for "innocent victims of the feud" questions alongside Mercutio and Lady Montague. Note that, unlike Mercutio, Paris dies without ever learning the truth about Romeo and Juliet’s marriage, which makes his death particularly pointless within the story, even though it serves the plot.'),
  ...profile(
    'Prince Escalus',
    'The ruler of Verona, kinsman of Mercutio and Paris.',
    [
      ['Authoritative', 'He stops the brawl and threatens death for further violence.'],
      ['Just but harsh', 'He chooses exile over death for Romeo, but his rule fails to stop the feud.'],
      ['Reflective', 'At the end he accepts his own share of blame: “And I for winking at your discords too / Have lost a brace of kinsmen: all are punish’d.”'],
    ],
    'He moves from a stern threat to an admission that his leniency was part of the problem.',
    [
      ['The two families', 'He controls them in public but cannot end the hatred.'],
    ],
    'The Prince represents public law and order. His threats are what make the street fights fatal and his final judgement ends the play.',
    'Use the Prince to discuss justice, authority and responsibility.',
  ),
  h2('Minor characters you should know'),
  table([
    ['Rosaline', 'Romeo’s first love, never seen. She shows the shallowness of Romeo’s early idea of love.'],
    ['Sampson and Gregory', 'Capulet servants whose jokes and insults begin the play’s violence.'],
    ['Abram and Balthasar', 'Montague servants in the first fight; Balthasar later brings Romeo the false news of Juliet’s death.'],
    ['Peter', 'The Nurse’s servant; comic.'],
    ['Friar John', 'The Franciscan whose quarantine delays the Friar’s letter.'],
    ['The Apothecary', 'A poor man who sells Romeo poison against the law. Shows poverty and desperation.'],
    ['Paris’s Page', 'Summons the watch at the tomb.'],
    ['Old Capulet (the cousin)', 'An elderly relative at the feast. He and Capulet recall their dancing days.'],
  ]),
  h2('How the characters relate to each other'),
  ul([
    'Foils (opposites that highlight each other): Romeo and Mercutio; Tybalt and Benvolio; Lady Capulet and the Nurse; Juliet and Paris; Friar Laurence and Capulet.',
    'Parents and children: all three adult generations (Capulets, Montagues, the Friar as a spiritual father) fail to guide the young pair.',
    'Messengers: the Nurse, Balthasar and Friar John carry news that is delayed, distorted or wrong, and the tragedy depends on these failures.',
  ]),
]);
