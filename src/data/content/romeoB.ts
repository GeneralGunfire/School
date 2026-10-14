import type { Lesson } from '../../lib/types';
import { h2, h3, p, box, quote, table, lessonIn, type WB } from './writeKit';
import { CH } from './romeoA';

/** Romeo and Juliet: scene-by-scene narrative of Acts 3, 4 and 5. */

const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>): Lesson =>
  lessonIn('english', CH, id, title, minutes, blocks);

const scene = (title: string, setting: string, happens: string[], why: string, line: string, who: string): WB[] => [
  h3(title),
  box(`Setting: ${setting}`),
  ...happens.map((t) => p(t)),
  table([['Why it matters', why]]),
  quote(`${line}  (${who})`),
];

export const R_ACT3 = L('rj-act3', 'Act 3: Scene-by-Scene Narrative', 45, [
  h2('Act 3: the turning point'),
  p('Act 3 is the hinge of the whole play. Until now the story has moved towards a comedy ending; from the moment Mercutio dies, it hurtles towards tragedy. In a single hot afternoon two men are killed, Romeo is banished, and the lovers spend one night together before being torn apart.'),
  scene(
    'Act 3, Scene 1: Mercutio and Tybalt die',
    'A public place in Verona, Monday afternoon, a hot day',
    [
      'Benvolio warns Mercutio that they should go indoors because “the day is hot, the Capulets abroad, / And, if we meet, we shall not scape a brawl”. Mercutio laughs at him. Tybalt arrives and demands to speak with Romeo. When Romeo arrives, Tybalt insults him: “Romeo, the love I bear thee can afford / No better term than this: thou art a villain.”',
      'Romeo is now secretly married to Tybalt’s cousin, and so refuses to fight: “I do protest I never injured thee, / But love thee better than thou canst devise.” Mercutio, who knows nothing of the marriage, is disgusted by Romeo’s refusal: “O calm, dishonourable, vile submission!” He draws his sword and fights Tybalt himself. Romeo tries to stop the fight by stepping between them. Tybalt stabs Mercutio under Romeo’s arm and runs away.',
      'Mercutio is mortally wounded but jokes grimly: “Ask for me tomorrow, and you shall find me a grave man.” He repeats the curse three times: “A plague o’ both your houses!” and he blames the feud for his death. He is carried off and dies.',
      'Romeo is overcome with guilt and anger: “O sweet Juliet, / Thy beauty hath made me effeminate / And in my temper soften’d valour’s steel!” When Tybalt returns, Romeo fights him furiously and kills him. Benvolio urges him to flee: “Romeo, away, be gone! / The citizens are up, and Tybalt slain.” Romeo cries, “O, I am fortune’s fool!”',
      'The Prince arrives with the families. Benvolio tells the story fairly. Lady Capulet demands Romeo’s death, but the Prince decides against execution: Romeo killed Tybalt only after Tybalt killed Mercutio, who was the Prince’s kinsman. Instead he banishes Romeo from Verona: “Mercy but murders, pardoning those that kill.” If Romeo is found in Verona, he will be put to death.',
    ],
    'This is the turning point. The play changes from romantic comedy to tragedy. Romeo’s decision to take revenge is a free choice, and his impulsiveness shows the cost of honour and anger. “A plague o’ both your houses” sums up the damage the feud does to innocent people. Mercutio, the wittiest character, is gone, and with him the play’s lightness.',
    'A plague o’ both your houses!',
    'Mercutio, 3.1',
  ),
  scene(
    'Act 3, Scene 2: Juliet waits, then hears the news',
    'Capulet’s orchard, Monday evening',
    [
      'Juliet waits for night and for Romeo, in one of the most beautiful speeches in the play: “Gallop apace, you fiery-footed steeds, / Towards Phoebus’ lodging.” She longs for the dark so that she and Romeo can be together, imagining that when he dies he will be cut up into little stars so that “all the world will be in love with night”.',
      'The Nurse arrives, wringing her hands, and delivers the news so confusingly that Juliet at first thinks Romeo is dead. When she learns that Tybalt is dead and Romeo is banished, Juliet’s feelings swing wildly. She first curses Romeo, “O serpent heart, hid with a flowering face!”, but then rebukes the Nurse for speaking ill of him: “Shall I speak ill of him that is my husband?” She decides that the real tragedy is not Tybalt’s death but Romeo’s banishment: “‘Banished’ / There is no end, no limit, measure, bound, / In that word’s death.”',
      'The Nurse promises to find Romeo and bring him to Juliet that night. Juliet gives her a ring for him.',
    ],
    'Juliet must choose between her family and her husband, and she chooses Romeo. This loyalty is a major step in her growth. The scene also shows the Nurse’s clumsy love and the danger of delay and miscommunication.',
    'Shall I speak ill of him that is my husband?',
    'Juliet, 3.2',
  ),
  scene(
    'Act 3, Scene 3: Romeo’s despair and the Friar’s rebuke',
    'Friar Laurence’s cell, Monday evening',
    [
      'Romeo hides in the Friar’s cell. The Friar tells him the Prince’s sentence is banishment, not death, a mercy. Romeo does not see it that way: “There is no world without Verona walls, / But purgatory, torture, hell itself.” He throws himself on the ground and weeps.',
      'The Nurse arrives and tells him how Juliet is also crying. Romeo draws his dagger to kill himself, but the Nurse and Friar stop him. The Friar scolds him for his weakness: “Art thou a man? thy form cries out thou art; / Thy tears are womanish; thy wild acts denote / The unreasonable fury of a beast.” He tells Romeo to be grateful: he is alive, Juliet is alive and Tybalt, who wanted to kill him, is dead. He proposes a plan: Romeo should spend the night with Juliet, leave before dawn for Mantua, and wait while the Friar reconciles the families and arranges a pardon.',
    ],
    'Romeo’s despair shows his tendency to extremes and his impulsiveness: he thinks banishment is worse than death. The Friar gives sensible advice, but his plan relies on secrecy and timing, which prepares us for what goes wrong.',
    'There is no world without Verona walls, / But purgatory, torture, hell itself.',
    'Romeo, 3.3',
  ),
  scene(
    'Act 3, Scene 4: Capulet decides',
    'A room in Capulet’s house, late Monday night',
    [
      'Capulet, Lady Capulet and Paris discuss Juliet. Capulet apologises to Paris that they have not had time to plead his case because of Tybalt’s death. Suddenly, believing that a quick marriage will help Juliet recover from her grief, Capulet announces that she will marry Paris on Thursday, in three days. He sends Lady Capulet to tell Juliet.',
    ],
    'This is a tragic mistake made from good intentions. Capulet thinks he is helping Juliet, but does not know that she is already married. Within the world of the play, he has the right to arrange her marriage, and his decision pushes Juliet towards desperation.',
    'Sir Paris, I will make a desperate tender / Of my child’s love.',
    'Capulet, 3.4',
  ),
  scene(
    'Act 3, Scene 5: The parting and Capulet’s fury',
    'Juliet’s bedroom and then the same room, Tuesday dawn',
    [
      'Romeo and Juliet wake in each other’s arms at dawn. Juliet tries to persuade herself that it is not yet morning: “It was the nightingale, and not the lark.” Romeo, though, knows he must leave: “It was the lark, the herald of the morn.” Realising how dangerous it is for him to stay, Juliet urges him to go. They part with a sense of dread, and Juliet says, “O God! I have an ill-divining soul! / Methinks I see thee, now thou art below, / As one dead in the bottom of a tomb.”',
      'Lady Capulet enters and, misreading Juliet’s tears as grief for Tybalt, says she will have Romeo poisoned in Mantua. She then tells Juliet the news: she will marry Paris on Thursday at St Peter’s Church. Juliet refuses: “I will not marry yet; and, when I do, I swear, / It shall be Romeo, whom you know I hate, / Rather than Paris.” (She speaks with double meaning.)',
      'Capulet enters and, when he hears the refusal, flies into a terrifying rage: “Hang thee, young baggage! disobedient wretch!” He threatens to disown her: “An you be mine, I’ll give you to my friend; / An you be not, hang, beg, starve, die in the streets, / For, by my soul, I’ll ne’er acknowledge thee.” Juliet begs on her knees, but her mother says, “Talk not to me, for I’ll not speak a word: / Do as thou wilt, for I have done with thee.”',
      'The Nurse, the one person Juliet trusted, advises her to forget Romeo and marry Paris: “I think it best you married with the County.” Juliet is devastated: “Ancient damnation! O most wicked fiend!” Left alone, she decides to go to the Friar, and says, “If all else fail, myself have power to die.”',
    ],
    'This is the moment Juliet is utterly isolated: her father threatens her, her mother abandons her, and her Nurse betrays her. It highlights the harshness of the patriarchal society and shows Juliet’s growing independence and courage. The closing line introduces suicide as a possibility, preparing for the final act.',
    'If all else fail, myself have power to die.',
    'Juliet, 3.5',
  ),
]);

export const R_ACT4 = L('rj-act4', 'Act 4: Scene-by-Scene Narrative', 30, [
  h2('Act 4: the plan'),
  p('Act 4 is the shortest act. It is a thriller: Juliet and the Friar plan a desperate trick, and the audience watches it begin to unravel. The act is full of dramatic irony and ends with a scene of false mourning that is both grotesque and heartbreaking.'),
  scene(
    'Act 4, Scene 1: The Friar’s plan',
    'Friar Laurence’s cell, Tuesday',
    [
      'Paris is arranging his marriage with the Friar when Juliet arrives. Paris speaks lovingly, but Juliet’s answers are sharp and double-edged. She asks to speak to the Friar alone. When Paris leaves, she shows the Friar a knife and says she will kill herself rather than marry Paris: “O, bid me leap, rather than marry Paris, / From off the battlements of any tower.”',
      'The Friar offers a desperate scheme. On Wednesday night Juliet should drink a potion that will make her appear dead for “two and forty hours”. She will be laid in the Capulet family tomb. The Friar will send word to Romeo in Mantua, and he will be there when Juliet wakes, to take her away. The Friar warns her it will take courage; Juliet takes the vial and says, “Love give me strength! and strength shall help afford.”',
    ],
    'The plan depends on timing, a letter and trust. Juliet takes a terrible risk and shows remarkable courage. The Friar, who has been the voice of caution, now devises a risky deception, and so shares responsibility for what follows.',
    'Hold, daughter: I do spy a kind of hope.',
    'Friar Laurence, 4.1',
  ),
  scene(
    'Act 4, Scene 2: Juliet pretends to obey',
    'Capulet’s house, Tuesday',
    [
      'Capulet is busy arranging the wedding feast. Juliet returns from the Friar and kneels before her father, asking his pardon and promising to obey. Capulet is overjoyed and, in his delight, moves the wedding forward from Thursday to Wednesday. This unwittingly reduces the time Juliet has.',
    ],
    'Juliet’s deception shows her intelligence and resolve, but the earlier wedding date is a cruel twist of fate. Note Capulet’s change from fury to joy, showing how quickly he swings between extremes.',
    'Henceforward I am ever ruled by you.',
    'Juliet, 4.2',
  ),
  scene(
    'Act 4, Scene 3: Juliet drinks the potion',
    'Juliet’s bedroom, Tuesday night',
    [
      'Juliet sends the Nurse and her mother away so that she can be alone. She is frightened. In a long soliloquy she explores all her fears: “I have a faint cold fear thrills through my veins, / That almost freezes up the heat of life.” What if the potion does not work? What if it is poison from a friar who fears to be exposed? What if she wakes in the tomb before Romeo arrives, surrounded by the bones of her ancestors and the body of Tybalt? Will she go mad?',
      'She imagines she sees Tybalt’s ghost hunting Romeo. She pushes through her terror and drinks: “Romeo, I come! this do I drink to thee.” She falls onto her bed.',
    ],
    'This soliloquy is the most intense look into Juliet’s mind: the monologue shows she is no longer a child, but a young woman acting in the face of mortal terror. Her courage, in the face of real doubt, makes her a tragic heroine. The imagery of the tomb prepares the final scene.',
    'I have a faint cold fear thrills through my veins.',
    'Juliet, 4.3',
  ),
  scene(
    'Act 4, Scene 4: The wedding preparations',
    'Capulet’s house, before dawn on Wednesday',
    [
      'The household is awake early, rushing around with food and wine for the feast. Capulet and the Nurse make jokes. Capulet hears the musicians approaching and sends the Nurse to wake Juliet.',
    ],
    'This short, cheerful scene is dramatic irony at its most painful: the audience knows what the Nurse is about to find.',
    'Make haste, make haste! the bridegroom he is come already.',
    'Capulet, 4.4',
  ),
  scene(
    'Act 4, Scene 5: Juliet is found “dead”',
    'Juliet’s bedroom, Wednesday morning',
    [
      'The Nurse tries to wake Juliet, joking that she is a sleepyhead. When she realises Juliet is cold and stiff, she screams: “O woe! O woful, woful, woful day!” Lady Capulet and Capulet rush in. Their grief is overwhelming, and Capulet says: “Death lies on her like an untimely frost / Upon the sweetest flower of all the field.” He adds: “Death is my son-in-law, Death is my heir.”',
      'Paris and the Friar arrive. Everyone weeps, though the Friar urges them to be sensible: it is “her best” that she is in heaven. “The heavens do lour upon you for some ill; / Move them no more by crossing their high will.” The wedding clothes will become funeral clothes; the happiness will become mourning.',
      'The scene ends with a comic interlude: the musicians, Peter and the servants joke about their wages and whether they should still play. Some critics see this as relief; others as a bitter commentary on how life goes on.',
    ],
    'The grief here is real for the Capulets, which shows how much they loved Juliet, and makes their earlier cruelty even more painful. The audience, who know she is only sleeping, feel its painful irony, and the lines about death as a “son-in-law” anticipate the play’s ending.',
    'Death is my son-in-law, Death is my heir.',
    'Capulet, 4.5',
  ),
]);

export const R_ACT5 = L('rj-act5', 'Act 5: Scene-by-Scene Narrative', 35, [
  h2('Act 5: the tragedy'),
  p('Act 5 is a rapid series of mistakes and coincidences leading to the deaths. The pace is deliberate and relentless, and the audience watches the tragedy unfold with helpless dread.'),
  scene(
    'Act 5, Scene 1: Romeo hears the news',
    'A street in Mantua, Wednesday',
    [
      'Romeo has had a happy dream in which Juliet found him dead but revived him with kisses: “If I may trust the flattering truth of sleep, / My dreams presage some joyful news at hand.” Then Balthasar, his servant, arrives from Verona with the news that Juliet is dead and in the Capulet tomb. He did not carry a letter from the Friar.',
      'Romeo’s reaction is swift and terrible: “Is it even so? then I defy you, stars!” He decides at once to die beside her. He hires an apothecary who is desperately poor and who, against the law that forbids selling poison, finally agrees: “My poverty, but not my will, consents.” Romeo replies, “I pay thy poverty, and not thy will.” He leaves with the poison: “Come, cordial and not poison, go with me / To Juliet’s grave; for there must I use thee.”',
    ],
    'Romeo’s impulsive nature leads him to rush to the tomb without checking. His “I defy you, stars” is his attempt to take control of fate, but it ironically fulfils it. The apothecary’s poverty reminds us how money and misery drive the world of the play.',
    'Is it even so? then I defy you, stars!',
    'Romeo, 5.1',
  ),
  scene(
    'Act 5, Scene 2: The letter fails',
    'Friar Laurence’s cell, Wednesday',
    [
      'Friar John, the messenger the Friar sent to Mantua, returns with the letter undelivered. He had been quarantined in a plague house and was not allowed to leave. The Friar realises the danger: Romeo does not know the truth. He sends for a crowbar and decides to go to the tomb himself to be there when Juliet wakes, and will hide her in his cell until Romeo comes.',
    ],
    'This is the moment where chance (the plague) wrecks the plan. However, the plan was dangerous and relied on a single messenger, so the Friar’s responsibility remains. The audience watches the clock tick towards disaster.',
    'Unhappy fortune!',
    'Friar Laurence, 5.2',
  ),
  scene(
    'Act 5, Scene 3: The tomb',
    'The Capulet monument, night',
    [
      'Paris comes to lay flowers at Juliet’s tomb, sending his page away to keep watch. He hears someone coming and hides. Romeo arrives with Balthasar and a crowbar. He orders Balthasar to leave and promises him money, warning him not to follow. Paris sees Romeo as the murderer of Tybalt and believes he has come to desecrate the grave. He confronts him. Romeo begs Paris to leave, but Paris insists on arresting him. They fight, and Romeo kills Paris. Paris’s dying request is to be laid beside Juliet, and Romeo agrees.',
      'Inside the tomb, Romeo sees Juliet and is awed by her beauty: “A grave? O, no! a lantern, slaughter’d youth, / For here lies Juliet, and her beauty makes / This vault a feasting presence full of light.” He asks forgiveness of Tybalt’s body and addresses Death, who “hath suck’d the honey of thy breath” and has not yet defeated her beauty. He drinks the poison: “Here’s to my love! O true apothecary! / Thy drugs are quick. Thus with a kiss I die.”',
      'Friar Laurence arrives just too late. Juliet wakes and asks for Romeo. The Friar sees that Romeo and Paris are dead, and hears the watch approaching. He urges Juliet to flee with him to a nunnery, but she refuses to leave. He runs away in fear. Juliet sees the poison cup and tries to kiss the last drops from Romeo’s lips. Hearing the watch, she takes his dagger: “O happy dagger! / This is thy sheath; there rust, and let me die.” She stabs herself and falls dead on Romeo’s body.',
      'The watch discovers the scene, and Paris’s page testifies. The Prince, Capulet, Lady Capulet and Montague (whose wife has died of grief at Romeo’s exile) arrive. The Friar gives the full account of the secret marriage, the potion and the failed letter, and admits his part. Balthasar and the page confirm the story, and Romeo’s letter to his father explains his plan.',
      'The Prince’s judgement falls on the families: “See what a scourge is laid upon your hate, / That heaven finds means to kill your joys with love.” Capulet takes Montague’s hand: “O brother Montague, give me thy hand.” Each promises to raise a golden statue to the other’s child. The play ends with the Prince’s famous lines: “A glooming peace this morning with it brings; / The sun, for sorrow, will not show his head... / For never was a story of more woe / Than this of Juliet and her Romeo.”',
    ],
    'The final scene brings together every strand of the play: the feud, haste, fate, the failure of adults and the power of love. The lovers’ deaths achieve what the Prince’s threats never could, the end of the feud. The reconciliation is bittersweet: peace comes only at a terrible price. The language of light, poison, kisses and death comes to its peak in Romeo’s final speech.',
    'For never was a story of more woe / Than this of Juliet and her Romeo.',
    'Prince, 5.3',
  ),
  h2('What the ending tells us'),
  table([
    ['Who is punished?', 'Everyone. The Prince says “All are punish’d”: he has lost kinsmen (Mercutio and Paris), the Montagues lose Romeo and Lady Montague, the Capulets lose Tybalt and Juliet.'],
    ['Does the ending bring hope?', 'Partly. The feud ends and the families unite in grief, but at an enormous cost. The “glooming peace” is a bitter victory.'],
    ['Who is to blame?', 'No single person. See the lesson on blame for the evidence for the feud, the Friar, the parents, the Nurse, Tybalt, Romeo and Juliet themselves, fate and chance.'],
  ]),
]);
