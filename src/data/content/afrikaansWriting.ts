import type { Chapter } from '../../lib/types';
import { h2, h3, p, ul, box, table, qa, lessonIn, type WB } from './writeKit';

/**
 * Afrikaans Graad 10, Vraestel 3: Skryfwerk.
 * Written for Afrikaans First Additional Language (EAT): essay about 250–300 words, longer
 * transactional text about 120–150 words, shorter text about 80–100 words. Your teacher may set
 * different lengths; Home Language learners should write longer. Every model text is original and
 * carries an English translation for the translation toggle.
 */

const CH = 'afr-skryf';
const L = (id: string, title: string, titleEn: string, minutes: number, blocks: Array<WB | WB[]>) =>
  lessonIn('afrikaans', CH, id, title, minutes, blocks, titleEn);

/** A paragraph with its English translation. */
const a = (af: string, en: string): WB => p(af, en);
/** A formatted block (letter layout) with its English translation. */
const f = (af: string, en: string): WB => box(af, en);

const OORSIG = L('afr-w-oorsig', 'Oorsig van Vraestel 3: Skryf', 'Overview of Paper 3: Writing', 15, [
  h2('Hoe Vraestel 3 lyk'),
  p('Vraestel 3 toets jou skryfvaardigheid. Jy skryf EEN opstel (Afdeling A), EEN lang transaksionele teks (Afdeling B) en EEN kort transaksionele teks (Afdeling C). Jy kies self uit ’n keuse van vrae. Beplan altyd EERS, en skryf die plan voor die finale produk neer.',
    'Paper 3 tests your writing. You write ONE essay (Section A), ONE longer transactional text (Section B) and ONE shorter transactional text (Section C). You choose from several questions. Always plan FIRST and write the plan before the final text.'),
  table([
    ['Afdeling A: Opstel', 'Een opstel uit ’n keuse van onderwerpe (beskrywend, verhalend/narratief, beskouend/argumentatief, besinnend/reflektief). Ongeveer 250–300 woorde.'],
    ['Afdeling B: Lang transaksionele teks', 'Een teks soos ’n formele of informele brief, e-pos, brief aan die pers, resensie, verslag of toespraak. Ongeveer 120–150 woorde.'],
    ['Afdeling C: Kort transaksionele teks', 'Een kort teks, soos ’n dagboekinskrywing, uitnodiging, advertensie, kennisgewing of huldeblyk. Ongeveer 80–100 woorde.'],
    ['Beplanning', 'Gebruik ’n breinkaart of ’n idee-lys. Die plan moet voor die finale teks verskyn.'],
    ['Redigering', 'Los vyf minute om te lees: spelling, leestekens, tyd, paragrawe, woordtelling. Skryf die aantal woorde onderaan.'],
  ]),
  box('Let wel: die woordgetalle is ’n riglyn vir Eerste Addisionele Taal. Volg altyd jou onderwyser se aanwysings. Huistaal-leerders skryf langer tekste.', 'Note: the word counts are a guide for First Additional Language. Always follow your teacher’s instructions. Home Language learners write longer texts.'),
  h2('Hoe word jy gemerk?'),
  table([
    ['Inhoud en beplanning', 'Beantwoord jy die onderwerp? Is die idees helder, volledig en oortuigend? Het jy beplan?'],
    ['Taal, styl en redigering', 'Woordeskat, sinsbou, spelling, leestekens en die regte register (formeel of informeel).'],
    ['Struktuur / formaat', 'Opstel: inleiding, paragrawe, slot. Transaksioneel: die korrekte formaat vir die soort teks.'],
  ]),
  h2('Die vyf soorte opstelle'),
  table([
    ['Beskrywende opstel', 'Jy skilder ’n prentjie met woorde van ’n plek, persoon of gebeurtenis. Gebruik die vyf sintuie. Daar is geen storie nie.'],
    ['Verhalende (narratiewe) opstel', 'Jy vertel ’n storie met ’n begin, ’n probleem, ’n hoogtepunt en ’n einde. Meestal verlede tyd.'],
    ['Besinnende (reflektiewe) opstel', 'Jy dink terug aan ’n ervaring en sê wat jy daaruit geleer het. Eerste persoon.'],
    ['Beskouende (argumentatiewe) opstel', 'Jy kies ’n standpunt en oortuig die leser met redes en voorbeelde. Teenwoordige tyd.'],
    ['Dialoog-opstel', 'Meestal met ’n gesprek as kern; minder algemeen in Graad 10.'],
  ]),
  h2('Taalgereedskap'),
  table([
    ['Skakelwoorde', 'eerstens, tweedens, verder, ook, boonop, egter, maar, daarom, gevolglik, uiteindelik, ten slotte, in elk geval'],
    ['Beeldspraak', 'vergelyking (soos / asof), metafoor (die klas was ’n oond), personifikasie (die wind fluister), oordrywing (ek het ’n ewigheid gewag)'],
    ['Sterk begin', 'aksie, dialoog, sintuiglike besonderhede of ’n vraag'],
    ['Slot', 'herhaal jou punt in nuwe woorde en eindig met ’n sterk gedagte'],
  ]),
  h2('Redigeringslys'),
  ul([
    'Het ek die onderwerp beantwoord?',
    'Hoofletters, punte, kommas en aanhalingstekens reg?',
    'Werkwoordtyd deurgaans dieselfde (verlede tyd in stories)?',
    'Dubbele ontkenning gebruik (Ek het nie gesien nie)? Is die woordorde in bysinne reg (… omdat ek moeg is)?',
    'Het ek die woorde getel en onderaan neergeskryf?',
  ], [
    'Did I answer the topic?',
    'Capitals, full stops, commas and quotation marks correct?',
    'Tense consistent (past tense in stories)?',
    'Double negative used? Word order in subordinate clauses correct?',
    'Did I count the words and write the number at the bottom?',
  ]),
]);

const BESKRYWEND = L('afr-w-beskrywend', 'Modelopstelle: Beskrywend en Verhalend', 'Model essays: descriptive and narrative', 35, [
  h2('Beskrywende opstel: ’n Dag by die strand'),
  box('Plan: Onderwerp: ’n Dag by die strand. Volgorde: aankoms, water, sand en mense, vertrek. Sintuie: sig, klank, reuk, aanraking, smaak. Stemming: vrolik en lewendig.', 'Plan: Topic: a day at the beach. Order: arrival, water, sand and people, leaving. Senses: sight, sound, smell, touch, taste. Mood: cheerful and lively.'),
  a('Toe ons by Gordonsbaai uit die motor klim, het die sout in die lug my dadelik in die gesig getref. Die son het soos ’n groot goue muntstuk bo die berge gehang, en die see het in lang, blink linte teen die strand uitgerol.',
    'When we got out of the car at Gordon’s Bay, the salt in the air hit me in the face at once. The sun hung like a big gold coin above the mountains, and the sea rolled onto the beach in long, shiny ribbons.'),
  a('Die water is koud en helder soos glas. Ek storm in tot my enkels nat is en gil toe die eerste golf my knieë tref. Die skuim sis om my voete en trek die sand onder my uit, asof die see my wil terugtrek. Meeue skree bo my kop, en êrens agter my slaan ’n bal teen ’n plank: tok, tok, tok.',
    'The water is cold and clear as glass. I rush in until my ankles are wet and shriek when the first wave hits my knees. The foam hisses around my feet and pulls the sand from under me, as if the sea wants to pull me back. Gulls scream above my head, and somewhere behind me a ball hits a board: tok, tok, tok.'),
  a('Op die strand is dit soos ’n kleurryke mark. Kinders bou sandkastele met toringe en grawe. ’n Ou man in ’n strooihoed lees sy koerant onder ’n gestreepte sambreel. Die reuk van sonroom en gebraaide vis hang in die lug, en ’n verkoper roep: “Roomys! Koue roomys!” Die warm sand brand onder my kaal voete totdat ek vinnig na die nat sand hardloop.',
    'On the beach it is like a colourful market. Children build sandcastles with towers and moats. An old man in a straw hat reads his newspaper under a striped umbrella. The smell of sunscreen and fried fish hangs in the air, and a vendor calls: “Ice cream! Cold ice cream!” The warm sand burns my bare feet until I run quickly to the wet sand.'),
  a('Teen die middag voel my vel styf van die sout. Ons eet pap, vrugte en yskoue lemoensap, en elke mondvol smaak na die see. Die skadus van die berge word langer, en die water verander van blou na ’n sagte pienk.',
    'By the afternoon my skin feels stiff with salt. We eat porridge, fruit and ice-cold orange juice, and every mouthful tastes of the sea. The shadows of the mountains grow longer, and the water changes from blue to a soft pink.'),
  a('Teen vyfuur begin die mense stadig inpak. Handdoeke word uitgeskud, sambrele toegemaak en moeë kinders in motors getrek. Die strand word weer stil, en net die see praat nog, sag en eenvoudig, soos iemand wat vir homself neurie.',
    'By five o’clock the people slowly begin to pack up. Towels are shaken out, umbrellas closed and tired children pulled into cars. The beach becomes quiet again, and only the sea still speaks, softly and simply, like someone humming to himself.'),
  a('Toe ons weer in die motor klim, is my oë swaar en my hare vol sand. Ek kyk deur die venster terug na die strand en weet dat ek hierdie dag nooit sal vergeet nie.',
    'When we climb into the car again, my eyes are heavy and my hair full of sand. I look back through the window at the beach and know that I will never forget this day.'),
  box('Ongeveer 280 woorde. Waarom dit werk: duidelike volgorde, vyf sintuie, vars vergelykings en ’n rustige slot. Voeg ’n bietjie meer detail by om 250–300 woorde te haal.', 'About 280 words. Why it works: clear order, five senses, fresh similes and a calm ending. Add a little more detail to reach 250–300 words.'),
  h2('Verhalende opstel: Die dag toe ek verdwaal het'),
  box('Plan: Begin: ’n skoolkamp in die berge. Probleem: ek loop weg van die groep. Hoogtepunt: die donker en die vrees. Einde: ek word gevind en leer om te luister.', 'Plan: Start: a school camp in the mountains. Problem: I walk away from the group. Climax: the dark and the fear. End: I am found and learn to listen.'),
  a('“Bly by die groep!” het mnr. Botha vir die derde keer geroep, maar ek het hom nie gehoor nie. Ek was agter ’n pragtige voël aan wat langs die bergpad gefladder het, en ek wou net ’n foto neem. Toe ek weer opkyk, was die res van die graad 10’s nêrens meer te sien nie.',
    '“Stay with the group!” Mr Botha called for the third time, but I did not hear him. I was following a beautiful bird that fluttered along the mountain path, and I only wanted to take a photo. When I looked up again, the rest of the Grade 10s were nowhere to be seen.'),
  a('Eers het ek net gelag. Ek het gedink hulle is net om die draai. Maar die pad het in twee gesplit, en ek kon nie onthou watter een ons gevolg het nie. My selfoon het geen sein gehad nie. Die son het agter die berge begin sak, en die bome se skaduwees het soos lang, swart vingers oor die grond gekruip.',
    'At first I just laughed. I thought they were just round the corner. But the path split in two, and I could not remember which one we had followed. My phone had no signal. The sun began to sink behind the mountains, and the shadows of the trees crept across the ground like long, black fingers.'),
  a('My hart het soos ’n trom in my ore geklop. Ek het begin hardloop, maar elke boom het dieselfde gelyk. Toe ek struikel en op my knieë val, het die trane vanself gekom. Ek was koud, bang en alleen.',
    'My heart pounded like a drum in my ears. I started to run, but every tree looked the same. When I tripped and fell on my knees, the tears came by themselves. I was cold, scared and alone.'),
  a('Ek het stilgestaan en probeer luister. Êrens ver weg het ’n hond geblaf, en die wind het deur die bome gesug. Ek het begin dink aan my ma, wat vanaand sou wonder hoekom ek nie bel nie, en my keel het toegetrek.',
    'I stood still and tried to listen. Somewhere far away a dog barked, and the wind sighed through the trees. I began to think of my mother, who would wonder tonight why I was not phoning, and my throat tightened.'),
  a('Toe onthou ek wat mnr. Botha ons die eerste dag gesê het: “As jy verdwaal, bly stil en maak lawaai.” Ek het op ’n rots gaan sit, my wit trui in die lug gehou en so hard as wat ek kon geskreeu. Na wat soos ure gevoel het, het ’n flitslig tussen die bome verskyn.',
    'Then I remembered what Mr Botha had told us on the first day: “If you get lost, stay still and make noise.” I sat on a rock, held my white jersey in the air and shouted as loud as I could. After what felt like hours, a torch appeared between the trees.'),
  a('“Daar is sy!” het iemand geroep. Mnr. Botha het my styf vasgehou en nie ’n woord gesê nie. Daardie aand, onder ’n warm kombers, het ek geleer dat luister soms jou lewe kan red.',
    '“There she is!” someone called. Mr Botha held me tightly and said not a word. That evening, under a warm blanket, I learnt that listening can sometimes save your life.'),
  box('Ongeveer 285 woorde. Waarom dit werk: ’n duidelike begin, ’n probleem wat groei, ’n spanningsvolle hoogtepunt en ’n einde met ’n les.', 'About 285 words. Why it works: a clear start, a growing problem, a tense climax and an ending with a lesson.'),
]);

const BESKOUEND = L('afr-w-beskouend', 'Modelopstelle: Beskouend en Besinnend', 'Model essays: argumentative and reflective', 35, [
  h2('Beskouende opstel: Jongmense moet vrywilligerswerk doen'),
  box('Plan: Standpunt: stem saam. Argument 1: leer verantwoordelikheid. Argument 2: help die gemeenskap. Argument 3: bou ’n CV. Teenargument: skoolwerk is reeds baie. Slot: aanbeveling.', 'Plan: Stance: agree. Argument 1: learn responsibility. Argument 2: help the community. Argument 3: build a CV. Counter-argument: schoolwork is already a lot. Ending: recommendation.'),
  a('Elke Saterdag sit duisende jongmense in Suid-Afrika voor ’n skerm, terwyl daar buite ’n gemeenskap is wat hulp nodig het. Ek glo dat elke skoolkind minstens ’n paar ure per maand vrywilligerswerk moet doen.',
    'Every Saturday thousands of young people in South Africa sit in front of a screen while outside there is a community that needs help. I believe that every school child should do volunteer work for at least a few hours a month.'),
  a('Eerstens leer vrywilligerswerk ons verantwoordelikheid. As jy belowe het om Saterdagoggend by die hondehuis te wees, moet jy daar wees, al wil jy liewer slaap. So leer jy om te doen wat jy sê, ’n eienskap wat elke werkgewer waardeer.',
    'Firstly, volunteering teaches us responsibility. If you promised to be at the dog shelter on Saturday morning, you must be there, even if you would rather sleep. In this way you learn to do what you say, a quality that every employer values.'),
  a('Tweedens help jy regtig mense. ’n Groep leerders in Paarl het verlede jaar elke week kos aan bejaardes gelewer. Die ou mense was nie net dankbaar vir die kos nie, maar ook vir die geselskap. Een klein daad kan iemand se hele week verbeter.',
    'Secondly, you really help people. A group of learners in Paarl delivered food to the elderly every week last year. The old people were grateful not only for the food, but for the company. One small act can improve someone’s whole week.'),
  a('Boonop kan vrywilligerswerk jou kanse op ’n goeie werk verbeter. Wanneer jy later by ’n universiteit of ’n maatskappy aansoek doen, wys jou CV dat jy aktief, vriendelik en betroubaar is.',
    'In addition, volunteering can improve your chances of a good job. When you later apply to a university or company, your CV shows that you are active, friendly and reliable.'),
  a('Sommige mense sal sê dat skoolwerk reeds al ons tyd neem. Dit is waar, maar vrywilligerswerk hoef nie lank te wees nie. Twee ure per maand is genoeg, en skole kan dit by die program inpas.',
    'Some people will say that schoolwork already takes all our time. That is true, but volunteering need not be long. Two hours a month is enough, and schools can fit it into the programme.'),
  a('Daarby is vrywilligerswerk lekker. Wanneer jy saam met vriende ’n skool skilder of ’n skoon strand help skep, bou jy herinneringe wat jy nie voor ’n skerm kan kry nie. Jy leer nuwe mense ken en ontdek talente waarvan jy nie geweet het nie.',
    'Besides, volunteering is fun. When you paint a school with friends or help make a beach clean, you build memories you cannot get in front of a screen. You get to know new people and discover talents you did not know you had.'),
  a('Ten slotte moet skole en ouers jongmense aanmoedig om te help. Dit maak ons beter mense en ons land ’n beter plek. Kom ons gee nie net om as dit ons pas nie, maar ook wanneer iemand ons nodig het.',
    'Finally, schools and parents should encourage young people to help. It makes us better people and our country a better place. Let us care not only when it suits us, but also when someone needs us.'),
  box('Ongeveer 270 woorde. Waarom dit werk: duidelike standpunt, drie hoofargumente met voorbeelde, ’n teenargument wat beantwoord word en ’n slot met ’n oproep tot aksie.', 'About 270 words. Why it works: a clear stance, three main arguments with examples, a counter-argument that is answered and a closing call to action.'),
  h2('Besinnende opstel: ’n Les wat ek nooit sal vergeet nie'),
  box('Plan: Ervaring: ek het ’n vriend se geheim vertel. Gevoel: skaam en skuldig. Verandering: ek vra om verskoning. Les: vertroue is kosbaar.', 'Plan: Experience: I told a friend’s secret. Feeling: ashamed and guilty. Change: I apologise. Lesson: trust is precious.'),
  a('Ek onthou nog die oomblik toe ek besef het wat ek gedoen het. My beste vriendin, Liezel, het my in vertroue vertel dat sy in graad 9 gesak het en dit nie vir haar ouers durf sê nie. Twee dae later, tydens ’n gesprek met ons klas, het ek dit uitgeflap, net omdat ek wou lag.',
    'I still remember the moment I realised what I had done. My best friend, Liezel, told me in confidence that she had failed Grade 9 and did not dare tell her parents. Two days later, during a conversation with our class, I blurted it out, just because I wanted to laugh.'),
  a('Niemand het gelag nie. Liezel het my aangekyk met oë vol trane en sonder ’n woord weggestap. Daardie aand kon ek nie slaap nie. My maag het geknyp, en ek het die oomblik oor en oor in my kop gespeel. Ek het gedink: “Dit was net ’n grap,” maar die woorde het hol geklink.',
    'Nobody laughed. Liezel looked at me with eyes full of tears and walked away without a word. That evening I could not sleep. My stomach cramped, and I replayed the moment over and over in my head. I thought: “It was just a joke,” but the words sounded hollow.'),
  a('Die volgende oggend het ek haar by die hek gewag en gesê: “Ek is baie jammer. Ek het jou vertroue verbreek, en daar is geen verskoning daarvoor nie.” Sy het lank stil gebly. Toe het sy gesê: “Ek vergewe jou, maar ek sal nie vergeet nie.”',
    'The next morning I waited for her at the gate and said: “I am very sorry. I broke your trust, and there is no excuse for it.” She was silent for a long time. Then she said: “I forgive you, but I will not forget.”'),
  a('In die dae daarna het ek baie oor Liezel se gesig gedink. Ek het besef dat ’n geheim soos ’n kosbare ding is wat iemand jou toevertrou het om veilig te hou. Wanneer jy dit weggee, gee jy ’n stuk van daardie persoon weg, en jy kry dit nooit weer terug nie.',
    'In the days after, I thought a lot about Liezel’s face. I realised that a secret is like a precious thing someone has trusted you to keep safe. When you give it away, you give away a piece of that person, and you never get it back.'),
  a('Dit het weke geneem voordat ons weer soos vroeër kon praat. Vandag weet ek dat vertroue soos glas is: dit breek in ’n oomblik, maar dit duur lank om dit te herstel. Sedertdien dink ek twee keer voor ek iets vertel wat nie myne is nie.',
    'It took weeks before we could talk like before. Today I know that trust is like glass: it breaks in a moment, but takes a long time to repair. Since then I think twice before I tell something that is not mine.'),
  box('Ongeveer 260 woorde. Waarom dit werk: eerlike stem, duidelike dan-en-nou struktuur en ’n les wat uit die verhaal kom.', 'About 260 words. Why it works: honest voice, a clear then-and-now structure and a lesson that comes out of the story.'),
]);

const FORMELE_BRIEWE = L('afr-w-briewe', 'Transaksionele Tekste: Briewe en E-pos', 'Transactional texts: letters and emails', 40, [
  h2('Formele brief: formaat'),
  box('Afsender se adres (regs bo)\nDatum\n\nOntvanger se titel, naam en adres\n\nAanhef: Geagte Meneer/Mevrou (of Geagte Mnr. Van Wyk)\n\nOnderwerp: (in vetdruk of onderstreep)\n\nParagraaf 1: rede vir die brief\nParagraaf 2: besonderhede\nParagraaf 3: wat jy wil hê/verwag\n\nSlot: Die uwe / Vriendelike groete\n\nHandtekening en volle naam', 'Sender’s address (top right)\nDate\n\nRecipient’s title, name and address\n\nSalutation: Dear Sir/Madam (or Dear Mr Van Wyk)\n\nSubject: (bold or underlined)\n\nParagraph 1: reason for the letter\nParagraph 2: details\nParagraph 3: what you want/expect\n\nClosing: Yours faithfully / Kind regards\n\nSignature and full name'),
  ul([
    'Formele register: geen slang of afkortings nie; wees beleefd en direk.',
    'Gebruik “u” en “uself” as jy ’n onbekende persoon aanspreek.',
    'Een idee per paragraaf; wees kort en feitelik.',
  ], [
    'Formal register: no slang or abbreviations; be polite and direct.',
    'Use “u” (formal you) when addressing a stranger.',
    'One idea per paragraph; be short and factual.',
  ]),
  h3('Model 1: formele brief (klagte)'),
  f(`Kerkstraat 12
Stellenbosch
7600
15 Maart 2025

Die Bestuurder
Vrugte-en-Groente Supermark
Hoofstraat 40
Stellenbosch
7600

Geagte Meneer/Mevrou

KLAGTE: BEDERFDE KOS

Ek skryf om my ongelukkigheid oor die kwaliteit van die vrugte wat ek verlede Saterdag by u winkel gekoop het, te uiter.

Toe ek by die huis kom, het ek gesien dat die appels sleg en die druiwe skimmel was. My ma moes die kos weggooi, en ek moes weer geld spandeer om ander kos te koop.

Ek versoek dus dat u my geld terugbetaal en toesien dat u personeel die vrugte elke dag nagaan. Ek heg my kwitansie hierby aan.

Dankie vir u aandag aan hierdie saak.

Die uwe

Anke van der Merwe`, `12 Church Street
Stellenbosch
7600
15 March 2025

The Manager
Fruit-and-Vegetable Supermarket
40 Main Street
Stellenbosch
7600

Dear Sir/Madam

COMPLAINT: ROTTEN FOOD

I am writing to express my unhappiness about the quality of the fruit I bought at your shop last Saturday.

When I got home I saw that the apples were bad and the grapes mouldy. My mother had to throw the food away, and I had to spend money again to buy other food.

I therefore request that you refund my money and make sure that your staff check the fruit every day. I attach my receipt.

Thank you for your attention to this matter.

Yours faithfully

Anke van der Merwe`),
  box('Waarom dit werk: korrekte formaat, onderwerpreël, paragrawe met een funksie elk (probleem, gevolg, versoek), beleefde formele taal. Ongeveer 125 woorde in die liggaam.', 'Why it works: correct format, subject line, paragraphs each with one function (problem, effect, request), polite formal language. About 125 words in the body.'),
  h3('Model 2: formele brief (aansoek om ’n vakansiewerk)'),
  f(`Protealaan 8
Bloemfontein
9301
2 Junie 2025

Die Personeelhoof
Speurders Boekwinkel
Voortrekkerstraat 55
Bloemfontein
9300

Geagte Meneer/Mevrou

AANSOEK OM VAKANSIEWERK

Ek verwys na u advertensie in Die Volksblad van 31 Mei en wil graag aansoek doen vir die tydelike pos as winkelassistent.

Ek is sestien jaar oud en in graad 10 by Hoërskool Dr. Viljoen. Ek is betroubaar, vriendelik en lief vir boeke. Verlede jaar het ek in my skool se biblioteek gehelp om boeke te sorteer. Ek kan goed met geld werk en is beskikbaar vanaf 28 Junie tot 20 Julie.

Ek sal baie bly wees as u my vir ’n onderhoud kan ontvang. My verwysings is beskikbaar op aanvraag.

Dankie vir u oorweging.

Die uwe

Karabo Molefe`, `8 Protea Avenue
Bloemfontein
9301
2 June 2025

The Personnel Manager
Detectives Bookshop
55 Voortrekker Street
Bloemfontein
9300

Dear Sir/Madam

APPLICATION FOR HOLIDAY WORK

I refer to your advertisement in Die Volksblad of 31 May and would like to apply for the temporary post of shop assistant.

I am sixteen years old and in Grade 10 at Dr Viljoen High School. I am reliable, friendly and love books. Last year I helped in my school’s library to sort books. I can work well with money and am available from 28 June to 20 July.

I would be very glad if you could receive me for an interview. My references are available on request.

Thank you for your consideration.

Yours faithfully

Karabo Molefe`),
  h2('Informele brief: formaat'),
  box('Jou adres (regs bo)\nDatum\n\nLiewe [voornaam],\n\nOpening: groet en reageer op haar/sy nuus\nMiddel: jou nuus en gevoelens\nSlot: vrae, planne, groete\n\nGroete / Jou vriendin / Liefde,\nJou naam', 'Your address (top right)\nDate\n\nDear [first name],\n\nOpening: greet and respond to her/his news\nMiddle: your news and feelings\nEnding: questions, plans, greetings\n\nGreetings / Your friend / Love,\nYour name'),
  h3('Model 3: informele brief (aan ’n vriendin)'),
  f(`Sonneblomstraat 21
Pretoria
0002
10 Februarie 2025

Liewe Nadia,

Hallo van Pretoria! Ek hoop jy is gesond en dat die son by julle nog skyn. Dankie vir jou laaste brief. Dit was so snaaks dat ek hardop gelag het!

Ek het uiteindelik by my nuwe skool gewoond geraak. Op die eerste dag was ek so senuagtig dat ek twee keer verdwaal het. Gelukkig het ’n meisie, Mia, my gehelp, en nou sit ons saam by die pouse. Sy is mal oor netbal, net soos jy, en ek speel nou ook.

Ek mis ons ou groep baie. Kom kuier asseblief in die September-vakansie. My ma sê jy is welkom, en ons kan Voortrekkermonument besoek.

Skryf gou en vertel my al jou nuus!

Baie liefde

Jou vriendin
Lize`, `21 Sunflower Street
Pretoria
0002
10 February 2025

Dear Nadia,

Hello from Pretoria! I hope you are well and that the sun is still shining at your place. Thank you for your last letter. It was so funny that I laughed out loud!

I have finally settled in at my new school. On the first day I was so nervous that I got lost twice. Luckily a girl, Mia, helped me, and now we sit together at break. She is mad about netball, just like you, and I now play too.

I miss our old group a lot. Please come and visit in the September holidays. My mother says you are welcome, and we can visit the Voortrekker Monument.

Write soon and tell me all your news!

Lots of love

Your friend
Lize`),
  h2('E-pos'),
  box(`Aan: hoof@hoerskoolbergsig.co.za
Onderwerp: Versoek om ’n herwinningsdag te hou

Geagte Me. Pillay

Ek is die voorsitter van die Omgewingsklub en wil graag toestemming vra om op Vrydag 14 Maart ’n herwinningsdag te hou.

Ons beplan om plastiekbottels en papier by die hoofhek in te samel. Die geld sal gebruik word om nuwe vuilgoedblikke vir die klaskamers te koop. Twaalf klublede het aangebied om te help, en mnr. Jacobs sal toesig hou.

Laat weet my asseblief of u die datum goedkeur.

Die uwe
Kagiso Dlamini
Graad 10B`, `To: head@bergsighighschool.co.za
Subject: Request to hold a recycling day

Dear Mrs Pillay

I am the chairperson of the Environmental Club and would like to ask permission to hold a recycling day on Friday 14 March.

We plan to collect plastic bottles and paper at the main gate. The money will be used to buy new rubbish bins for the classrooms. Twelve club members have offered to help, and Mr Jacobs will supervise.

Please let me know if you approve the date.

Yours faithfully
Kagiso Dlamini
Grade 10B`),
  h2('Brief aan die pers'),
  f(`Lelielaan 5
Wellington
7655
6 April 2025

Die Redakteur
Die Burger
Posbus 2271
Kaapstad
8000

Geagte Meneer/Mevrou

SKOON PARKE, SKOON TOEKOMS

Ek wil graag my kommer uitspreek oor die toestand van ons dorp se park. Verlede Sondag het ek oor veertig plastiekbottels en ’n gebreekte stoel langs die looppad getel.

Hierdie rommel is nie net lelik nie, maar ook gevaarlik. Gebreekte glas sny honde se pote, en plastiek spoel in die rivier af. Ons kan nie van besoekers verwag om ’n park te geniet wat ons soos ’n stortingsterrein behandel nie.

Ek doen ’n beroep op die munisipaliteit om meer blikke te plaas en oortreders te beboet. Ek daag ook elke leser uit om drie stukke rommel op te tel wanneer hy volgende keer ’n park besoek.

Die uwe

Johan Steyn`, `5 Lily Avenue
Wellington
7655
6 April 2025

The Editor
Die Burger
PO Box 2271
Cape Town
8000

Dear Sir/Madam

CLEAN PARKS, CLEAN FUTURE

I would like to express my concern about the state of our town’s park. Last Sunday I counted over forty plastic bottles and a broken chair along the walking path.

This litter is not only ugly but also dangerous. Broken glass cuts dogs’ paws, and plastic washes into the river. We cannot expect visitors to enjoy a park that we treat like a rubbish dump.

I appeal to the municipality to place more bins and to fine offenders. I also challenge every reader to pick up three pieces of litter next time they visit a park.

Yours faithfully

Johan Steyn`),
  qa([
    { q: 'Met watter slot sluit jy ’n brief wat met “Geagte Meneer/Mevrou” begin?', a: 'Met “Die uwe” of “Vriendelike groete”. Dit is formeel.' },
    { q: 'Is “Haai Me. Pillay, hoop jy’s goed!” aanvaarbaar in ’n formele brief?', a: 'Nee. Dit is te informeel. Skryf “Geagte Me. Pillay” en vermy slang en afkortings.' },
    { q: 'Waarvoor dien die onderwerpreël?', a: 'Dit vertel die leser in ’n oogopslag waaroor die brief gaan.' },
  ]),
]);

const HULDEBLYK = L('afr-w-huldeblyk', 'Huldeblyk, Doodsberig en Dagboek', 'Tribute, obituary and diary entry', 40, [
  h2('Wat is ’n huldeblyk?'),
  p('’n Huldeblyk is ’n teks oor ’n persoon wat onlangs oorlede is (of oor ’n lewende persoon wat vereer word). Dit kan in ’n koerant verskyn of by ’n begrafnis voorgelees word. Daar is drie dele wat saamwerk: die doodsberig (die feite oor die persoon), die lofrede (die goeie dinge uit sy of haar lewe) en die huldeblyk self (persoonlike herinneringe en dank).',
    'A tribute is a text about a person who has recently died (or about a living person who is being honoured). It can appear in a newspaper or be read at a funeral. Three parts work together: the death notice (the facts about the person), the eulogy (the good things from his or her life) and the tribute itself (personal memories and thanks).'),
  h2('Kenmerke'),
  table([
    ['Styl', 'Formeel, vriendelik, liefdevol en taktvol. Vermy oordrewe sentimentaliteit.'],
    ['Inhoud (doodsberig)', 'Naam en van, ouderdom, datum en plek van afsterwe, geboortedatum en -plek, oorlewendes en begrafnisbesonderhede.'],
    ['Inhoud (lofrede)', 'Prestasies, werk, karaktereienskappe, bydrae tot die gemeenskap.'],
    ['Inhoud (huldeblyk)', 'Persoonlike herinneringe, staaltjies en vertroosting aan die gesin.'],
    ['Tyd', 'Verlede tyd vir die lewe van die persoon; teenwoordige of toekomende tyd vir die troos.'],
    ['Titel', 'Kort en toepaslik, bv. “Ons verloor ’n vriend” of “’n Lig gaan uit”.'],
  ]),
  h3('Model 1: doodsberig en huldeblyk vir ’n oupa'),
  f(`ONS VERLOOR ’N REUSE: HULDE AAN OUPA PIET

Piet Jacobus Swanepoel is op 3 April 2025 op die ouderdom van 82 jaar in Paarl oorlede. Hy is op 12 Mei 1942 in Wellington gebore. Hy laat sy eggenote, Marie, sy drie kinders, Annelie, Pieter en Sarie, en agt kleinkinders agter. Die begrafnis vind op Dinsdag 8 April om 11:00 in die NG Kerk, Paarl, plaas.

Oupa Piet was ’n boer, ’n kerkouderling en ’n vriend vir almal. Vir veertig jaar het hy vrugte op sy plaas gekweek en nooit ’n hawelose mens van sy hek af weggejaag nie. Hy het die gemeenskap gedien as ouderling en het die plaaskool jare lank gehelp bekostig.

Ek sal hom altyd onthou as ’n man met warm oë en ’n groot lag. Elke Sondag het hy vir ons “vetkoek met konfyt” gemaak en ons geleer dat vriendelikheid jou nooit iets kos nie. Hy het goed gebly, tot die einde toe.

Aan Ouma Marie en die gesin: mag die herinneringe aan hom julle troos. Rus sag, Oupa.`, `WE LOSE A GIANT: TRIBUTE TO GRANDPA PIET

Piet Jacobus Swanepoel passed away in Paarl on 3 April 2025 at the age of 82. He was born in Wellington on 12 May 1942. He leaves behind his wife, Marie, his three children, Annelie, Pieter and Sarie, and eight grandchildren. The funeral takes place on Tuesday 8 April at 11:00 in the NG Church, Paarl.

Grandpa Piet was a farmer, a church elder and a friend to everyone. For forty years he grew fruit on his farm and never chased a homeless person from his gate. He served the community as an elder and helped pay for the farm school for years.

I will always remember him as a man with warm eyes and a big laugh. Every Sunday he made us “vetkoek with jam” and taught us that kindness never costs you anything. He remained good until the end.

To Grandma Marie and the family: may the memories of him comfort you. Rest softly, Grandpa.`),
  box('Waarom dit werk: die titel is kort, alle belangrike feite is daar, die lofrede is spesifiek (en nie net “hy was ’n goeie man” nie), en die slot vertroos. Ongeveer 160 woorde; vir ’n kort teks kan jy dit tot 80–100 woorde inkort.', 'Why it works: the title is short, all important facts are there, the eulogy is specific (not just “he was a good man”), and the ending comforts. About 160 words; for a short text you can cut it to 80–100 words.'),
  h3('Model 2: kort huldeblyk aan ’n onderwyser'),
  f(`’N LIG GAAN UIT

Mnr. Hendrik Botha, ons wiskunde-onderwyser van twintig jaar, is op 14 Junie 2025 oorlede. Hy was 54.

Meneer Botha het nooit ’n kind laat opgee nie. Hy het ná skool gebly om vir ons te help en het ons geleer dat “’n fout jou net wys waar om te begin”. Ons sal sy geduld en sy snaakse grappe mis.

Ons dink aan sy vrou, Ria, en sy twee seuns. Mag hulle vrede vind. Dankie, Meneer.`, `A LIGHT GOES OUT

Mr Hendrik Botha, our maths teacher of twenty years, passed away on 14 June 2025. He was 54.

Mr Botha never let a child give up. He stayed after school to help us and taught us that “a mistake only shows you where to begin”. We will miss his patience and his funny jokes.

We think of his wife, Ria, and his two sons. May they find peace. Thank you, Sir.`),
  h3('Eufemismes (versagtende woorde)'),
  table([
    ['oorlede / heengegaan / ontslaap / sy oë vir altyd gesluit', 'dood'],
    ['die oorledene', 'die persoon wat dood is'],
    ['ons innige meelewing', 'our deepest sympathy'],
    ['rus in vrede', 'rest in peace'],
    ['hy laat agter', 'he leaves behind'],
  ]),
  h2('Dagboekinskrywing'),
  p('’n Dagboekinskrywing is persoonlike skryfwerk oor jou ervarings en gevoelens. Dit is in die eerste persoon geskryf, en jy gebruik gewoonlik die verlede tyd om te vertel wat gebeur het.',
    'A diary entry is personal writing about your experiences and feelings. It is written in the first person, and you usually use the past tense to tell what happened.'),
  table([
    ['Formaat', 'Datum (en soms tyd) bo-aan; “Liewe Dagboek” is opsioneel; ’n informele tuis-tuis-toon.'],
    ['Inhoud', 'Wat gebeur het, hoe jy gevoel het en wat jy daaruit geleer het.'],
    ['Taal', 'Eerste persoon, spreektaal is aanvaarbaar, kort sinne en uitroepe.'],
  ]),
  h3('Model 3: dagboekinskrywing'),
  f(`Maandag, 17 Maart 2025
21:30

Liewe Dagboek

Vandag was die ergste en die beste dag van my lewe! In die oggend het ek die wiskundetoets geskryf, en my hande het so gebewe dat ek skaars kon skryf. Ek het geweet ek het nie genoeg geleer nie.

Maar in die middag het Mnr. Botha my ná klas geroep en gesê: “Ek sien jy het hard probeer.” Ek het amper gehuil! Hy het aangebied om my gratis ná skool te help.

Ek is nou nog bang, maar ook hoopvol. Môre gaan ek begin leer, regtig.

Goeie nag.
Zandi`, `Monday, 17 March 2025
21:30

Dear Diary

Today was the worst and the best day of my life! In the morning I wrote the maths test, and my hands shook so much that I could hardly write. I knew I had not studied enough.

But in the afternoon Mr Botha called me after class and said: “I see you tried hard.” I almost cried! He offered to help me for free after school.

I am still scared now, but also hopeful. Tomorrow I will start studying, really.

Good night.
Zandi`),
  qa([
    { q: 'Noem drie feite wat in ’n doodsberig moet staan.', a: 'Byvoorbeeld: die persoon se naam en ouderdom, datum van afsterwe, oorlewendes (familie), en begrafnisbesonderhede.' },
    { q: 'Wat is die verskil tussen ’n lofrede en ’n doodsberig?', a: 'Die doodsberig gee die feite; die lofrede vertel van die persoon se goeie eienskappe en prestasies.' },
    { q: 'In watter persoon en tyd skryf jy ’n dagboek?', a: 'In die eerste persoon (ek) en meestal in die verlede tyd.' },
  ]),
]);

export const AFRIKAANS_WRITING_CHAPTER: Chapter = {
  id: CH,
  subjectId: 'afrikaans',
  title: 'Skryfwerk: Opstelle en Transaksionele Tekste',
  summary: 'Vraestel 3: hoe jy gemerk word, modelopstelle in vier style, en modelbriewe, e-pos, huldeblyk, doodsberig en dagboek. Met Engelse vertalings.',
  lessons: [OORSIG, BESKRYWEND, BESKOUEND, FORMELE_BRIEWE, HULDEBLYK],
};
