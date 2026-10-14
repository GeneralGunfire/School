import type { Chapter } from '@/lib/types';

/**
 * Die Kind — volledige boek (leesuitgawe)
 *
 * Elke les = een hoofstuk van die roman.
 * Elke blok het `text` (Afrikaans) en `en` (English).
 * Insig-callouts (sonder `en`) verskyn tussen paragrawe.
 *
 * Teks is gebaseer op die Petra Müller-roman soos voorgeskryf vir
 * Graad 10 CAPS Afrikaans Huistaal.
 */

export const DIE_KIND_BOEK: Chapter = {
  id: 'afr-die-kind-boek',
  subjectId: 'afrikaans',
  title: 'Die Kind — Volledige Boek',
  summary: 'Lees die volledige roman hoofstuk vir hoofstuk in Afrikaans met Engelse vertaling en insig-notas.',
  lessons: [

    // ── HOOFSTUK 1 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h1',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 1 — Die geboorte',
      titleEn: `Chapter 1 — The birth`,
      minutes: 18,
      blocks: [
        {
          id: 'dk1-h1', type: 'heading', level: 2,
          text: `Hoofstuk 1 — Die geboorte`,
          en: `Chapter 1 — The birth`,
        },
        {
          id: 'dk1-p1', type: 'paragraph',
          text: `Amazolo het alleen in haar iqhugwane gesit. Die nag was stil; net die riet het in die wind gesuis. Sy het haar hande op haar groot maag gevou en het die gevoel verwerp wat al hoe meer in haar gestyg het — die pyn, die druk, die onontkombaarheid van wat sou kom.`,
          en: `Amazolo sat alone in her iqhugwane. The night was still; only the reeds swished in the wind. She folded her hands over her swollen belly and rejected the feeling that kept rising within her — the pain, the pressure, the unavoidability of what was to come.`,
        },
        {
          id: 'dk1-ins1', type: 'callout',
          text: `INSIG: Amazolo se eensaamheid aan die begin stel dadelik die toon van verlatenheid. Mlenzana is weg — die leser weet nog nie waarom nie. Die stilte van die nag kontrasteer met die stormagtige gebeure wat sal volg.`,
        },
        {
          id: 'dk1-p2', type: 'paragraph',
          text: `Toe Zuziwe van oorkant die pad na haar gekom het, het sy net haar oë oopgemaak en weggedraai. Zuziwe het geweet wat om te doen. Sy het water gaan kook, het die klere uitgepak en het naby Amazolo gekniel. "Jy moet druk," het sy gesê. "Dit help as jy druk."`,
          en: `When Zuziwe came from across the road, Amazolo only opened her eyes and looked away. Zuziwe knew what to do. She went to boil water, unpacked the clothes and knelt near Amazolo. "You must push," she said. "It helps if you push."`,
        },
        {
          id: 'dk1-p3', type: 'paragraph',
          text: `"Ek wil nie," het Amazolo gesê. Haar stem was laag en eienaardig rustig — soos iemand wat afstand gedoen het van haar eie lyf. Zuziwe het haar hand geneem. "Jy het nie 'n keuse nie."`,
          en: `"I don\'t want to," said Amazolo. Her voice was low and strangely calm — like someone who had distanced herself from her own body. Zuziwe took her hand. "You don\'t have a choice."`,
        },
        {
          id: 'dk1-p4', type: 'paragraph',
          text: `Die kind is voor dagbreek gebore. Hy was klein en stil, en hy het nie dadelik gehuil nie. Toe hy wel begin huil, het Amazolo na die muur gedraai. Die vroedvrou — Zuziwe se suster — het die kind skoon gevee en in 'n lap toegedraai.`,
          en: `The child was born before dawn. He was small and quiet, and he did not cry immediately. When he did begin to cry, Amazolo turned to face the wall. The midwife — Zuziwe\'s sister — wiped the child clean and wrapped him in a cloth.`,
        },
        {
          id: 'dk1-p5', type: 'paragraph',
          text: `"Wat is die kind se naam?" het die vroedvrou gevra. Amazolo het nie geantwoord nie. "Amazolo," het Zuziwe gesê, "die vroedvrou vra vir die kind se naam." Amazolo het haar oë toegemaak. "Hy het nie 'n naam nie," het sy gesê. "Gee hom aan iemand wat vir hom 'n naam wil gee."`,
          en: `"What is the child\'s name?" asked the midwife. Amazolo did not answer. "Amazolo," said Zuziwe, "the midwife is asking for the child\'s name." Amazolo closed her eyes. "He has no name," she said. "Give him to someone who wants to give him a name."`,
        },
        {
          id: 'dk1-ins2', type: 'callout',
          text: `INSIG: Hierdie is die oomblik wat die sentrale tema vestig: identiteit begin met 'n naam. Amazolo se weigering om die kind te naam gee, is haar manier om sy bestaan te ontken. Die CAPS-eksamen vra dikwels na hierdie toneel en die effek daarvan op die tema van identiteit.`,
        },
        {
          id: 'dk1-p6', type: 'paragraph',
          text: `Zuziwe het die kind gevat. Sy het hom teen haar bors gedruk en saggies gepraat. "Jy is welkom," het sy gefluister. "Jy is hier." Die kind het opgehou huil. Amazolo het na die muur bly kyk.`,
          en: `Zuziwe took the child. She pressed him against her chest and spoke softly. "You are welcome," she whispered. "You are here." The child stopped crying. Amazolo continued looking at the wall.`,
        },
        {
          id: 'dk1-p7', type: 'paragraph',
          text: `Buite het die dag begin aanbreek. Die voëls het begin sing, 'n haan het gekraai ver in die veld, en die son het stadig bokant die heuwels begin verskyn. Dit was 'n gewone oggend in Msinga — maar niks sou ooit weer gewoon wees nie.`,
          en: `Outside the day began to break. The birds started to sing, a rooster crowed far in the fields, and the sun slowly began to appear above the hills. It was an ordinary morning in Msinga — but nothing would ever be ordinary again.`,
        },
      ],
    },

    // ── HOOFSTUK 2 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h2',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 2 — Sonder naam',
      titleEn: `Chapter 2 — Without a name`,
      minutes: 16,
      blocks: [
        {
          id: 'dk2-h1', type: 'heading', level: 2,
          text: `Hoofstuk 2 — Sonder naam`,
          en: `Chapter 2 — Without a name`,
        },
        {
          id: 'dk2-p1', type: 'paragraph',
          text: `Die dae het verby gegaan. Die kind het gegroei. Amazolo het vir hom melk gegee wanneer hy gehonger het, en sy het sy doeke gewas, maar sy het hom nooit by sy naam genoem nie — want hy het geen naam gehad nie. Sy het haar gesig weggedraai wanneer sy in sy oë sou kon sien.`,
          en: `The days passed. The child grew. Amazolo gave him milk when he was hungry, and she washed his nappies, but she never called him by name — because he had no name. She turned her face away whenever she would have been able to look into his eyes.`,
        },
        {
          id: 'dk2-ins1', type: 'callout',
          text: `INSIG: Let op die kontras: Amazolo sorg fisies vir die kind maar weier emosionele kontak. Dit is 'n kenmerk van haar innerlike konflik — haar liggaam doen wat nodig is, maar haar hart weier om betrokke te raak. Hierdie tegniek heet "showing" eerder as "telling".`,
        },
        {
          id: 'dk2-p2', type: 'paragraph',
          text: `Die kinders in die kraal het hom "Ongenagama" begin noem — "die een sonder 'n naam" in Zoeloe. Hulle het gelag en gewys. "Ongenagama! Ongenagama!" Die kind het geleer om nie te huil nie. Hy het geleer om te doen asof hy dit nie hoor nie.`,
          en: `The children in the kraal started calling him "Ongenagama" — "the one without a name" in Zulu. They laughed and pointed. "Ongenagama! Ongenagama!" The child learned not to cry. He learned to pretend he did not hear it.`,
        },
        {
          id: 'dk2-p3', type: 'paragraph',
          text: `Een dag het die kind na Amazolo toe gegaan terwyl sy potte aan die maak was. Sy hande was vuil van die speelgrond. Hy het voor haar gestaan en haar met groot oë aangekyk. "Hoekom het ek nie 'n naam nie?" het hy gevra. Amazolo se hande het stil geword op die klei.`,
          en: `One day the child went to Amazolo while she was making pots. His hands were dirty from the playground. He stood before her and looked at her with big eyes. "Why don\'t I have a name?" he asked. Amazolo\'s hands went still on the clay.`,
        },
        {
          id: 'dk2-p4', type: 'paragraph',
          text: `"Almal het name," het hy gesê. "Bongani het 'n naam. Sithembile het 'n naam. Selfs die hond het 'n naam." Amazolo het na die klei bly kyk. "As jy 'n naam het," het sy toe gesê, "dan is jy iemand. En jy is nie iemand nie." Sy het haar hande weer begin beweeg asof die gesprek verby was.`,
          en: `"Everyone has names," he said. "Bongani has a name. Sithembile has a name. Even the dog has a name." Amazolo kept looking at the clay. "If you have a name," she finally said, "then you are someone. And you are not someone." She began moving her hands again as if the conversation was over.`,
        },
        {
          id: 'dk2-ins2', type: 'callout',
          text: `INSIG: Hierdie dialoog is een van die mees ontleedde in die roman. "Jy is nie iemand nie" is nie net wreed nie — dit openbaar Amazolo se eie seerkry. Sy kan die kind nie erken nie sonder om haar verlies (Mlenzana) ook te erken. Die eksamen vra dikwels: "Wat openbaar hierdie woorde oor Amazolo se karakter?"`,
        },
        {
          id: 'dk2-p5', type: 'paragraph',
          text: `Die kind het omgedraai en teruggegaan na die speelgrond. Maar hy het nie meer gespeel nie. Hy het in die koelte van 'n boom gaan sit en na die grond gekyk. Hy het gedink aan name. Hy het gewonder hoe dit sal voel om iemand te wees.`,
          en: `The child turned around and went back to the playground. But he did not play anymore. He went and sat in the shade of a tree and looked at the ground. He thought about names. He wondered what it would feel like to be someone.`,
        },
        {
          id: 'dk2-p6', type: 'paragraph',
          text: `Zuziwe het hom daar gevind teen die aand. Sy het langs hom gaan sit sonder om iets te sê. Na 'n rukkie het sy haar hand op sy kop gesit. "Jy het 'n naam in my hart," het sy gesê. "Ek noem jou Intaba — die berg. Want berge staan vas."`,
          en: `Zuziwe found him there towards evening. She sat down beside him without saying anything. After a while she placed her hand on his head. "You have a name in my heart," she said. "I call you Intaba — the mountain. Because mountains stand firm."`,
        },
        {
          id: 'dk2-ins3', type: 'callout',
          text: `INSIG: Zuziwe se rol as surrogaat-moeder begin hier. Die naam "Intaba" (berg) is simbolies — dit voorspel die kind se later vasberadenheid. Stylfiguur: simboliek. Die berg staan ook teenoor Amazolo se "hy is nie iemand nie" — Zuziwe bevestig sy waarde.`,
        },
      ],
    },

    // ── HOOFSTUK 3 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h3',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 3 — Thandi',
      titleEn: `Chapter 3 — Thandi`,
      minutes: 18,
      blocks: [
        {
          id: 'dk3-h1', type: 'heading', level: 2,
          text: `Hoofstuk 3 — Thandi`,
          en: `Chapter 3 — Thandi`,
        },
        {
          id: 'dk3-p1', type: 'paragraph',
          text: `Thandi Mutwa het goed gewoon. Haar huis was groot en haar man Mvula het 'n suksesvolle boerdery gehad. Hulle het een seun gehad — Zolile — en hy was die lig van hul lewens. Thandi het elke môre gewaker en gedank vir wat sy gehad het.`,
          en: `Thandi Mutwa lived well. Her house was large and her husband Mvula had a successful farm. They had one son — Zolile — and he was the light of their lives. Thandi woke up every morning and gave thanks for what she had.`,
        },
        {
          id: 'dk3-p2', type: 'paragraph',
          text: `Maar Thandi was ook iemand wat geglo het sy weet wat reg is. Sy het nie baie geduld gehad met die ou gebruike nie. Toe Mvula haar 'n tradisionele Zoeloe-rok wou hê sy dra vir 'n fees, het sy gesê: "Dit is barbaars. Ek is 'n moderne vrou." Mvula het geswyg, maar sy oë het iets gesê wat sy nie wou hoor nie.`,
          en: `But Thandi was also someone who believed she knew what was right. She did not have much patience with old customs. When Mvula wanted her to wear a traditional Zulu dress for a feast, she said: "That is barbaric. I am a modern woman." Mvula was silent, but his eyes said something she did not want to hear.`,
        },
        {
          id: 'dk3-ins1', type: 'callout',
          text: `INSIG: Die konflik tussen Thandi en Mvula oor tradisie vs. moderniteit word hier ingelei. Dit is een van die hooftemas van die roman. Thandi verteenwoordig modernisering; Mvula verteenwoordig die bewaring van Zoeloe-kultuur. Hierdie konflik sal uiteindelik hul huwelik vernietig.`,
        },
        {
          id: 'dk3-p3', type: 'paragraph',
          text: `Dit was Zuziwe wat die kind na Thandi geneem het. "Hierdie kind het niemand nie," het Zuziwe gesê. "Sy ma wil hom nie hê nie. Jy het jou seun — hy is gelukkig. Maar dalk kan jy ook vir hierdie kind 'n plek gee om te bly." Thandi het die kind lank bekyk.`,
          en: `It was Zuziwe who took the child to Thandi. "This child has no one," said Zuziwe. "His mother doesn\'t want him. You have your son — he is happy. But perhaps you can also give this child a place to stay." Thandi looked at the child for a long time.`,
        },
        {
          id: 'dk3-p4', type: 'paragraph',
          text: `"Hoekom moet ek?" het Thandi gevra. "Ek het my eie kind." Zuziwe het gesê: "Jy het genoeg om te gee. En hierdie kind vra nie vir baie nie — net 'n plek. Net 'n naam." Thandi het na die kind se oë gekyk. Iets het in haar gesig versag.`,
          en: `"Why must I?" asked Thandi. "I have my own child." Zuziwe said: "You have enough to give. And this child does not ask for much — just a place. Just a name." Thandi looked into the child\'s eyes. Something softened in her face.`,
        },
        {
          id: 'dk3-p5', type: 'paragraph',
          text: `"Amazolo weet?" het Thandi gevra. "Amazolo het jou gestuur?" Zuziwe het geknik. "Sy kan hom nie grootmaak nie. Maar sy weet dat jy dit kan." Thandi het haar arms uitgestrek. Die kind het nie weggehardloop nie. Hy het nader gestap — versigtig, soos iemand wat geleer het om nie te gou te vertrou nie.`,
          en: `"Amazolo knows?" asked Thandi. "Did Amazolo send you?" Zuziwe nodded. "She cannot raise him. But she knows you can." Thandi stretched out her arms. The child did not run away. He stepped closer — carefully, like someone who had learned not to trust too quickly.`,
        },
        {
          id: 'dk3-ins2', type: 'callout',
          text: `INSIG: Die kind se versigtige nadering is insiggewend. Op hierdie ouderdom het hy al geleer dat die wêreld nie veilig is nie. Die outeur gebruik sy liggaamstaal om sy emosionele toestand te toon sonder om dit direk te sê — dit is karakterisering deur handeling.`,
        },
        {
          id: 'dk3-p6', type: 'paragraph',
          text: `Thandi het hom opgetel. Hy was ligter as wat sy gedink het. "Ons gaan jou 'n naam gee," het sy gesê. "Hier is jy nie sonder naam nie." Die kind het haar nek vasgehou. Dit was die eerste keer in sy lewe dat hy vasgehou is deur iemand wat hom wou vashou.`,
          en: `Thandi picked him up. He was lighter than she had expected. "We are going to give you a name," she said. "Here you are not without a name." The child held on to her neck. It was the first time in his life that he was held by someone who wanted to hold him.`,
        },
        {
          id: 'dk3-p7', type: 'paragraph',
          text: `Intussen het Amazolo alleen in haar iqhugwane gebly. Sy het potte gemaak en sy het naaldwerk gedoen vir Thandi — ses dae per week. Elke Sondag was sy vry. Op daardie Sondae het sy na die iqhugwane gegaan en die potte gemaak en die lug ingeasem en aan niks gedink nie.`,
          en: `Meanwhile Amazolo stayed alone in her iqhugwane. She made pots and she did needlework for Thandi — six days a week. Every Sunday she was free. On those Sundays she went to the iqhugwane and made pots and breathed in the air and thought of nothing.`,
        },
        {
          id: 'dk3-ins3', type: 'callout',
          text: `INSIG: Amazolo se poëmaak is 'n deurlopende motief van skeppende vernuf en tradisionele identiteit. Sy skep letterlik met haar hande — dit staan in kontras met haar onvermoë om 'n emosionele band te skep met haar kind. Die potte word ook later 'n simbool van haar nalatenskap.`,
        },
      ],
    },

    // ── HOOFSTUK 4 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h4',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 4 — Die stier en die naam',
      titleEn: `Chapter 4 — The bull and the name`,
      minutes: 17,
      blocks: [
        {
          id: 'dk4-h1', type: 'heading', level: 2,
          text: `Hoofstuk 4 — Die stier en die naam`,
          en: `Chapter 4 — The bull and the name`,
        },
        {
          id: 'dk4-p1', type: 'paragraph',
          text: `Die kind het begin skoolgaan by Thandi en Mvula. Hy het nou 'n naam — Zolile, soos Thandi en Mvula se eie seun genoem was. Maar mense het twee Zoliles geken, en soms het dit verwarring geskep. Die een Zolile was lewendig en nuuskierig; die ander was koel en stil.`,
          en: `The child started school at Thandi and Mvula\'s. He now had a name — Zolile, as Thandi and Mvula\'s own son had been called. But people knew two Zoliles, and sometimes this caused confusion. One Zolile was lively and curious; the other was cool and quiet.`,
        },
        {
          id: 'dk4-ins1', type: 'callout',
          text: `INSIG: Die naamgewing is ironies — die kind kry die naam van Thandi en Mvula se eie seun. Dit skep 'n dubbele identiteit wat later sentrale spanning sal veroorsaak: wie is hy werklik? Die naam Zolile beteken "kalm/rustig" in Zoeloe — ook simbolies van sy karakter.`,
        },
        {
          id: 'dk4-p2', type: 'paragraph',
          text: `Op 'n warm middag in die maand Desember was die twee Zoliles — die kind en Thandi se eie seun — naby die krale. Die groot stier het in 'n ander kampie gestaan. Niemand het die seun gesien wat na die stier toe gekruip het nie — niemand behalwe die kind.`,
          en: `On a hot afternoon in the month of December, the two Zoliles — the child and Thandi\'s own son — were near the kraals. The large bull stood in another pen. No one saw the boy crawling towards the bull — no one except the child.`,
        },
        {
          id: 'dk4-p3', type: 'paragraph',
          text: `"Moenie!" het die kind geskreeu. Maar dit was te laat. Die stier het gedraai en gestamp. Thandi se seun het gevlieg en op die grond geval. Hy het nie gestaan nie. Die kind het hardgehardloop om hulp te roep, sy stem so hoog soos die van 'n voël in doodsnood.`,
          en: `"Don\'t!" shouted the child. But it was too late. The bull turned and charged. Thandi\'s son flew through the air and fell to the ground. He did not get up. The child ran hard to call for help, his voice as high as that of a bird in mortal danger.`,
        },
        {
          id: 'dk4-p4', type: 'paragraph',
          text: `Thandi se seun Zolile is 'n week later dood. Die huis was vol mense, vol geween, vol stilte wat erger is as geween. Mvula het na die stier se kamp gestaan en gekyk lank nadat die ander mense weggegaan het. Hy kon nie die stier skiet nie. Maar hy kon nie die stier behou nie.`,
          en: `Thandi\'s son Zolile died a week later. The house was full of people, full of weeping, full of a silence that is worse than weeping. Mvula stood looking at the bull\'s pen long after the other people had gone. He could not shoot the bull. But he could not keep the bull.`,
        },
        {
          id: 'dk4-ins2', type: 'callout',
          text: `INSIG: Mvula se tweestryd oor die stier (skiet of nie skiet) is innerlike konflik. In Zoeloe-tradisie is beeste heilig — dit verteenwoordig rykdom en voorvaderlike geskenke. Om die stier te skiet sou 'n kulturele taboe wees. Die CAPS-eksamen vra dikwels: "Identifiseer en verduidelik die tipe konflik in hierdie toneel."`,
        },
        {
          id: 'dk4-p5', type: 'paragraph',
          text: `Thandi het na die begrafnis na die kind gekyk met nuwe oë. Sy seun was dood. Hierdie kind — Amazolo se kind — was nog lewendig. Iets in haar het besluit, sonder dat sy dit in woorde kon sê: hierdie kind is nou my kind. Nie as plaasvervanger nie. As kind.`,
          en: `Thandi looked at the child after the funeral with new eyes. Her son was dead. This child — Amazolo\'s child — was still alive. Something in her decided, without her being able to put it into words: this child is now my child. Not as a replacement. As a child.`,
        },
        {
          id: 'dk4-p6', type: 'paragraph',
          text: `Sy het na Amazolo gegaan. "Jou kind bly by my," het sy gesê. "Hy is nou my kind." Amazolo het haar reguit in die oë gekyk. "Hy is nooit jou kind nie," het sy gesê rustig. "Maar hy kan by jou bly as hy wil." Thandi het omgedraai sonder om te antwoord.`,
          en: `She went to Amazolo. "Your child stays with me," she said. "He is now my child." Amazolo looked her straight in the eyes. "He is never your child," she said calmly. "But he can stay with you if he wants." Thandi turned around without answering.`,
        },
        {
          id: 'dk4-ins3', type: 'callout',
          text: `INSIG: Amazolo se rustige maar besliste antwoord toon haar krag. Al het sy die kind "verwerp", weier sy dat 'n ander vrou hom as haar eiendom opeis. Dit is 'n subtiele maar belangrike moment van moederlike beskerming — die begin van haar karakterontwikkeling.`,
        },
      ],
    },

    // ── HOOFSTUK 5 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h5',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 5 — Die vlug',
      titleEn: `Chapter 5 — The flight`,
      minutes: 18,
      blocks: [
        {
          id: 'dk5-h1', type: 'heading', level: 2,
          text: `Hoofstuk 5 — Die vlug`,
          en: `Chapter 5 — The flight`,
        },
        {
          id: 'dk5-p1', type: 'paragraph',
          text: `Thandi wou die kind terugehê. Sy het tien mans gestuur om hom en Amazolo te gaan soek. Amazolo het dit geweet voor die mans uitgestuur is — sy het iets in Thandi se oë gesien die laaste keer dat sy by die huis was.`,
          en: `Thandi wanted the child back. She sent ten men to go and look for him and Amazolo. Amazolo had known it before the men were sent out — she had seen something in Thandi\'s eyes the last time she was at the house.`,
        },
        {
          id: 'dk5-p2', type: 'paragraph',
          text: `Die nag voor die mans uitgestuur sou word, het Amazolo die kind wakker gemaak. "Ons gaan," het sy gesê. "Nou. Sonder om afskeid te neem." Die kind het haar gesig bekyk in die donker. Hy het nie gevra waarheen nie. Hy het sy skoene aangetrek.`,
          en: `The night before the men were to be sent out, Amazolo woke the child. "We are going," she said. "Now. Without saying goodbye." The child looked at her face in the dark. He did not ask where to. He put on his shoes.`,
        },
        {
          id: 'dk5-ins1', type: 'callout',
          text: `INSIG: Die kind se stille gehoorsaamheid hier is betekenisvol. Hy vra nie. Hy debatteer nie. Hy vertrou Amazolo — en dit is die eerste teken dat die band tussen moeder en kind — al was dit gebrekkig — tog bestaan. Die besluit sonder afskeid onderstreep hul kwesbare posisie.`,
        },
        {
          id: 'dk5-p3', type: 'paragraph',
          text: `Hulle het snags gestap en bedags gerus. Die eerste nag was die hardste — die duisternis was dik en die paaie was onbekend. Amazolo het die kind se hand gehou. Dit was die eerste keer dat sy dit gedoen het. Die kind het nie sy hand teruggetrek nie.`,
          en: `They walked at night and rested by day. The first night was the hardest — the darkness was thick and the paths were unknown. Amazolo held the child\'s hand. It was the first time she had done so. The child did not pull his hand back.`,
        },
        {
          id: 'dk5-p4', type: 'paragraph',
          text: `Die derde nag het die honde hulle gevind. Die boer se honde — groot, vaal, honger. Amazolo het die kind agter haar gedruk. "Moenie beweeg nie," het sy gesê. Een hond het na haar been gespring. Sy het nie geskreeu nie. Sy het haar arm gebruik om die hap te stuit, en die hond het haar arm gebyt.`,
          en: `On the third night the dogs found them. The farmer\'s dogs — large, pale, hungry. Amazolo pushed the child behind her. "Don\'t move," she said. One dog leaped at her leg. She did not scream. She used her arm to block the bite, and the dog bit her arm.`,
        },
        {
          id: 'dk5-ins2', type: 'callout',
          text: `INSIG: Amazolo se selfopoffering om die kind te beskerm is 'n skarnieroomblik — hier sien ons die moeder in haar, al het sy haar best gedoen om dié kant te verberg. Let op die stylfiguur: sy skreeu nie — die stilte onderstreep haar krag eerder as 'n sin vol adjektiewe.`,
        },
        {
          id: 'dk5-p5', type: 'paragraph',
          text: `Hulle het 'n skuilplek gevind in 'n ou klipkraal. Amazolo het geweet watter plante om te gebruik vir die wonde — haar ma het haar geleer. Die kind het haar help soek in die donker, sy klein hande wat oor die grond gevoel het vir die regte blare.`,
          en: `They found a hiding place in an old stone kraal. Amazolo knew which plants to use for the wounds — her mother had taught her. The child helped her search in the dark, his small hands feeling over the ground for the right leaves.`,
        },
        {
          id: 'dk5-p6', type: 'paragraph',
          text: `"Sal ons veilig wees hier?" het die kind gevra. Amazolo het die plante fyn gevryf tussen haar hande. "Ek weet nie," het sy gesê. "Maar ons is hier. En ons is saam." Die kind het teen haar gelê. Vir die eerste keer in sy lewe het hy gevoel dat "saam" genoeg was.`,
          en: `"Will we be safe here?" the child asked. Amazolo rubbed the plants finely between her hands. "I don\'t know," she said. "But we are here. And we are together." The child lay against her. For the first time in his life he felt that "together" was enough.`,
        },
      ],
    },

    // ── HOOFSTUK 6 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h6',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 6 — Mlenzana en Sipho',
      titleEn: `Chapter 6 — Mlenzana and Sipho`,
      minutes: 19,
      blocks: [
        {
          id: 'dk6-h1', type: 'heading', level: 2,
          text: `Hoofstuk 6 — Mlenzana en Sipho`,
          en: `Chapter 6 — Mlenzana and Sipho`,
        },
        {
          id: 'dk6-p1', type: 'paragraph',
          text: `Mlenzana het Amazolo en die kind gevind in die klipkraal. Hy het teruggekom van die myne — sonder geld, sonder nuus, met net sy liggaam en sy skuld. Toe hy Amazolo se wonde gesien het, het iets in sy gesig verander. Hy het geknie sonder om te praat.`,
          en: `Mlenzana found Amazolo and the child in the stone kraal. He had come back from the mines — without money, without news, with only his body and his guilt. When he saw Amazolo\'s wounds, something changed in his face. He knelt down without speaking.`,
        },
        {
          id: 'dk6-ins1', type: 'callout',
          text: `INSIG: Mlenzana se terugkoms is vir die leser verrassend — ons het nie geweet hy was naby nie. Die roman gebruik die tegniek van "delayed revelation" (vertraagde onthulling): inligting kom stuksgewys. Let op dat hy nie apologiseer nie — hy knie net. Sy handeling praat namens hom.`,
        },
        {
          id: 'dk6-p2', type: 'paragraph',
          text: `"Gaan dokter toe," het Amazolo gesê. "Vir medisyne. Die wonde word erger." Mlenzana het geknik en weg is hy. Die kind het na hom gekyk totdat hy om 'n draai verdwyn het. "Is dit jou pa?" het die kind gevra. Amazolo het nie geantwoord nie.`,
          en: `"Go to the doctor," Amazolo said. "For medicine. The wounds are getting worse." Mlenzana nodded and away he went. The child watched him until he disappeared around a bend. "Is that your father?" the child asked. Amazolo did not answer.`,
        },
        {
          id: 'dk6-p3', type: 'paragraph',
          text: `Dit was Sipho Khumalo wat gekom het terwyl Mlenzana weg was. 'n Groot man met klein oë en 'n kierie in sy hand. Hy het by die kraal ingestap soos iemand wat die plek ken. Hy het Amazolo bekyk van kop tot tone.`,
          en: `It was Sipho Khumalo who came while Mlenzana was away. A large man with small eyes and a knobkerrie in his hand. He walked into the kraal like someone who owned the place. He looked Amazolo up and down.`,
        },
        {
          id: 'dk6-p4', type: 'paragraph',
          text: `"Jy is ver van die huis," het Sipho gesê. "Alleen." Amazolo het haar rug regop getrek en hom reguit aangekyk. "Ek is nie alleen nie," het sy gesê. "My man is hier naby." Sipho het gelag — 'n geluid soos klippe wat teen mekaar stamp. "Dan hoef hy nie te weet nie," het hy gesê.`,
          en: `"You are far from home," said Sipho. "Alone." Amazolo straightened her back and looked him straight in the eye. "I am not alone," she said. "My man is close by." Sipho laughed — a sound like stones knocking against each other. "Then he doesn\'t need to know," he said.`,
        },
        {
          id: 'dk6-ins2', type: 'callout',
          text: `INSIG: Sipho is 'n plat karakter — hy verteenwoordig geweld, hebsug en 'n totale gebrek aan empatie. Sy lag soos "klippe wat stamp" is 'n simile wat sy hardheid en koudheid uitdruk. Die eksamen mag vra: "Identifiseer en verduidelik die stylfiguur in hierdie reël."`,
        },
        {
          id: 'dk6-p5', type: 'paragraph',
          text: `Sipho het Amazolo se geld gesteel — die weinige wat sy gespaar het. Toe Mlenzana terugkom, het Sipho hom met die kierie geslaan en hom bewusteloos gelos. Die kind het dit alles gesien van agter 'n klip. Hy het nie beweeg nie. Hy het nie asemgehaal nie. Hy het net gekyk.`,
          en: `Sipho stole Amazolo\'s money — the little she had saved. When Mlenzana returned, Sipho struck him with the knobkerrie and left him unconscious. The child saw it all from behind a rock. He did not move. He did not breathe. He just watched.`,
        },
        {
          id: 'dk6-p6', type: 'paragraph',
          text: `Die kind het gewag totdat Sipho weg was. Toe het hy uitgecom en na Mlenzana toe gehardloop. Hy het op sy knieë geval en sy hande op Mlenzana se gesig gesit. "Wakker word," het hy gefluister. "Asseblief. Wakker word." Mlenzana het gekreun.`,
          en: `The child waited until Sipho was gone. Then he came out and ran to Mlenzana. He fell on his knees and placed his hands on Mlenzana\'s face. "Wake up," he whispered. "Please. Wake up." Mlenzana groaned.`,
        },
        {
          id: 'dk6-ins3', type: 'callout',
          text: `INSIG: Die kind se reaksie hier — om na 'n gewonde volwassene te hardloop — toon sy inherente sorg en moed. Onthou hy is nog klein. Die stylfiguur van herhaling ("Wakker word. Asseblief. Wakker word.") versterk die emosionele intensiteit. Dit is ook 'n goeie voorbeeld van dialoog as karakteriseringsmetode.`,
        },
      ],
    },

    // ── HOOFSTUK 7 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h7',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 7 — Die hof en die tronk',
      titleEn: `Chapter 7 — The court and the prison`,
      minutes: 17,
      blocks: [
        {
          id: 'dk7-h1', type: 'heading', level: 2,
          text: `Hoofstuk 7 — Die hof en die tronk`,
          en: `Chapter 7 — The court and the prison`,
        },
        {
          id: 'dk7-p1', type: 'paragraph',
          text: `Amazolo is voor die hof gedaag. Sy is beskuldig van diefstal — dat sy Thandi se kind gesteel het. In die hof het sy reggop gestaan en die regter reguit gekyk. Haar stem het nie gebewe nie toe sy gepraat het.`,
          en: `Amazolo was brought before the court. She was accused of theft — that she had stolen Thandi\'s child. In court she stood upright and looked the judge straight in the eye. Her voice did not tremble when she spoke.`,
        },
        {
          id: 'dk7-p2', type: 'paragraph',
          text: `"Ja," het sy gesê. "Ek het die kind gesteel." Die hofsal het stil geword. "Hy was nie my kind om te neem nie. Hy was haar kind." Dit was 'n leuen — maar dit was 'n leuen wat die kind sou beskerm. Sou hom 'n lewe gee wat sy hom nie kon gee nie.`,
          en: `"Yes," she said. "I stole the child." The courtroom went silent. "He was not my child to take. He was her child." It was a lie — but it was a lie that would protect the child. Would give him a life she could not give him.`,
        },
        {
          id: 'dk7-ins1', type: 'callout',
          text: `INSIG: Amazolo se leuen is moreel kompleks — dit is onselfsugtigheid gemaskeer as misdaad. Hierdie oomblik definieer haar karakter as iemand wat bereid is om haar eie eer op te offer vir haar kind. Die tema van onselfsugtige liefde word hier prominent. CAPS-vraag: "Is Amazolo se handeling geregverdig? Bespreek met verwysing na haar karakter."`,
        },
        {
          id: 'dk7-p3', type: 'paragraph',
          text: `Sy is tot drie jaar tronkstraf in Durban gevonnis. Die tronk was koud en die mense was hard. Maar Amazolo het haar kop opghehou. Sy het nie haar medetronklinge vir gunste gevra nie. Sy het geleer hoe om klere te maak — 'n vaardigheid wat later haar broodjie sou bak.`,
          en: `She was sentenced to three years\' imprisonment in Durban. The prison was cold and the people were harsh. But Amazolo held her head up. She did not ask her fellow inmates for favours. She learned how to make clothes — a skill that would later earn her living.`,
        },
        {
          id: 'dk7-p4', type: 'paragraph',
          text: `Die kind het nie geweet waar Amazolo was nie. Hy het by Thandi en Mvula gebly en goed gegaan op skool. Maar snags, wanneer die huis stil was, het hy wakker gelê en aan Amazolo gedink. Hy het geweet sy is weg. Hy het net nie geweet hoekom nie.`,
          en: `The child did not know where Amazolo was. He stayed with Thandi and Mvula and did well at school. But at night, when the house was quiet, he lay awake and thought of Amazolo. He knew she was gone. He just did not know why.`,
        },
        {
          id: 'dk7-ins2', type: 'callout',
          text: `INSIG: Die roman gebruik hier tydsprong (ellips) — ons spring oor die drie jaar tronktyd. Die fokus bly op die kind se onwetendheid, nie op Amazolo se lyding nie. Dit is 'n bewuste keuse: die verteller wil hê ons moet die kind se perspektief beleef.`,
        },
        {
          id: 'dk7-p5', type: 'paragraph',
          text: `Intussen het Sipho Mlenzana van 'n hoë krans afgestoot. Mlenzana het geval en dit het geklank soos niks — net 'n liggaam wat met die aarde bots. Sipho het omgedraai en weggestap sonder om terug te kyk. Niemand het dit gesien nie. Niemand het dit geweet nie — behalwe Sipho, en die berge, en die wind.`,
          en: `Meanwhile Sipho pushed Mlenzana off a high cliff. Mlenzana fell and it made a sound like nothing — just a body striking the earth. Sipho turned and walked away without looking back. No one saw it. No one knew — except Sipho, and the mountains, and the wind.`,
        },
        {
          id: 'dk7-ins3', type: 'callout',
          text: `INSIG: "Behalwe Sipho, en die berge, en die wind" is 'n sterk literêre reël — personifikasie van die natuur as getuie. Dit skep 'n gevoel dat Mlenzana se dood nie heeltemal onbekend is nie; die natuur dra dit. Dit berei ook die dramatiese ironie voor: die leser weet Mlenzana is dood; die ander karakters nie.`,
        },
      ],
    },

    // ── HOOFSTUK 8 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h8',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 8 — Mlenzana se storie',
      titleEn: `Chapter 8 — Mlenzana\'s story`,
      minutes: 16,
      blocks: [
        {
          id: 'dk8-h1', type: 'heading', level: 2,
          text: `Hoofstuk 8 — Mlenzana se storie`,
          en: `Chapter 8 — Mlenzana\'s story`,
        },
        {
          id: 'dk8-p1', type: 'paragraph',
          text: `Eers in hierdie hoofstuk verklaar die roman hoekom Mlenzana Msinga verlaat het. Dit was nie liefdeloosheid nie — dit was armoede. Die myne in Johannesburg het beloof wat Msinga nie kon gee nie: geld, 'n toekoms, 'n manier om vir Amazolo se kind te sorg.`,
          en: `Only in this chapter does the novel explain why Mlenzana left Msinga. It was not lovelessness — it was poverty. The mines in Johannesburg promised what Msinga could not give: money, a future, a way to care for Amazolo\'s child.`,
        },
        {
          id: 'dk8-ins1', type: 'callout',
          text: `INSIG: Dit is 'n sleutelmoment in die roman se struktuur — die leser kry hier agtergrond wat die gebeure van hoofstuk 1 in 'n nuwe lig plaas. Hierdie tegniek heet "analepsis" (terugflits). Mlenzana is nie die skurk nie; hy is 'n slagoffer van ekonomiese omstandighede — 'n sosiale kommentaar op mynwerkers se lewens in Suid-Afrika.`,
        },
        {
          id: 'dk8-p2', type: 'paragraph',
          text: `Op die myne het Mlenzana geleer hoe om te wag. Wag vir die sif, wag vir die sirene, wag vir die Sondag wanneer jy 'n brief kan skryf. Hy het vir Amazolo geskryf elke week. Maar die briewe het nooit aangekom nie — iemand het hulle onderskep, iemand in sy huis wat nie wou hê Amazolo moet hoor van hom nie.`,
          en: `On the mines Mlenzana learned how to wait. Wait for the sieve, wait for the siren, wait for Sunday when you could write a letter. He wrote to Amazolo every week. But the letters never arrived — someone intercepted them, someone in his house who did not want Amazolo to hear from him.`,
        },
        {
          id: 'dk8-p3', type: 'paragraph',
          text: `Amazolo het gedink Mlenzana het haar vergeet. Mlenzana het gedink Amazolo het hom vergeet. Tussen die twee was 'n stilte so breed soos 'n rivier — en soos 'n rivier het dit mense van mekaar gehou wat eintlik mekaar wou bereik.`,
          en: `Amazolo thought Mlenzana had forgotten her. Mlenzana thought Amazolo had forgotten him. Between the two was a silence as wide as a river — and like a river it kept apart people who actually wanted to reach each other.`,
        },
        {
          id: 'dk8-ins2', type: 'callout',
          text: `INSIG: "\'n Stilte so breed soos \'n rivier" is 'n vergelyking (simile) wat die kommunikasiebreuk tussen Amazolo en Mlenzana visualiseer. Die rivier is ook geografies relevant — die Tugela-rivier skei gemeenskappe in KwaZulu-Natal. Stylfiguur + geografiese simbool tegelyk.`,
        },
        {
          id: 'dk8-p4', type: 'paragraph',
          text: `Mlenzana het uiteindelik teruggekeer — te laat, soos dinge dikwels gebeur wanneer 'n mens die verkeerde tyd kies. Hy het gekom toe Amazolo al weg was, toe die kind al by Thandi was, toe die skade al klaar gedoen was. Hy het by Zuziwe aangeklop om te vra wat gebeur het.`,
          en: `Mlenzana eventually returned — too late, as things often happen when a person chooses the wrong time. He came when Amazolo was already gone, when the child was already with Thandi, when the damage was already done. He knocked at Zuziwe\'s door to ask what had happened.`,
        },
        {
          id: 'dk8-p5', type: 'paragraph',
          text: `Zuziwe het hom vertel. Al van die begin af. Die kind. Die naamloosheid. Die vlug. Die tronk. Mlenzana het na haar geluister sonder om te praat. Aan die einde het hy sy hande oor sy gesig gesit. Toe hy hulle afgehaal het, het sy oë gelyk soos die van 'n man wat 'n oorlog verloor het sonder om geweet te hê hy was in 'n oorlog.`,
          en: `Zuziwe told him. Everything from the beginning. The child. The namelessness. The flight. The prison. Mlenzana listened to her without speaking. At the end he placed his hands over his face. When he removed them, his eyes looked like those of a man who had lost a war without knowing he was in one.`,
        },
      ],
    },

    // ── HOOFSTUK 9 ─────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h9',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 9 — Amazolo kom huis toe',
      titleEn: `Chapter 9 — Amazolo comes home`,
      minutes: 16,
      blocks: [
        {
          id: 'dk9-h1', type: 'heading', level: 2,
          text: `Hoofstuk 9 — Amazolo kom huis toe`,
          en: `Chapter 9 — Amazolo comes home`,
        },
        {
          id: 'dk9-p1', type: 'paragraph',
          text: `Na drie jaar het Amazolo uit die tronk gekom. Sy het gelyk soos iemand wat 'n lang pad gelos het agter 'n tronk se mure. Haar klere was verslete maar haar rug was regop. Zuziwe het haar by die hek gewag.`,
          en: `After three years Amazolo came out of prison. She looked like someone who had left a long road behind prison walls. Her clothes were worn but her back was straight. Zuziwe waited for her at the gate.`,
        },
        {
          id: 'dk9-p2', type: 'paragraph',
          text: `"Welkom terug," het Zuziwe gesê. Amazolo het haar omhels. Geen woorde nie. Net die gewig van twee vroue teen mekaar — alles wat hulle gedeel het sonder om te weet hoe om dit te sê. Toe het Amazolo gesê: "Hoe gaan dit met die kind?"`,
          en: `"Welcome back," said Zuziwe. Amazolo embraced her. No words. Just the weight of two women against each other — everything they had shared without knowing how to say it. Then Amazolo said: "How is the child?"`,
        },
        {
          id: 'dk9-ins1', type: 'callout',
          text: `INSIG: Die eerste woorde Amazolo sê nadat sy die tronk verlaat, is oor die kind. Dit toon ondubbelsinning dat sy hom liefhet — al het haar vroeëre gedrag dit verberg. Karakterontwikkeling: sy is nie meer die vrou wat sy gesig weggedraai het nie.`,
        },
        {
          id: 'dk9-p3', type: 'paragraph',
          text: `Amazolo het teruggegaan na die iqhugwane. Maar dit was leeg — verwaarloos, die dak het gelek, die klei het geskeur. Sy het begin herstel. Sy hande het die klei leer onthou. Die potte was eers lelik, toe minder lelik, toe goed. Sy het begin verkoop op die mark.`,
          en: `Amazolo returned to the iqhugwane. But it was empty — neglected, the roof was leaking, the clay had cracked. She began to restore it. Her hands relearned the clay. The pots were first ugly, then less ugly, then good. She began selling at the market.`,
        },
        {
          id: 'dk9-p4', type: 'paragraph',
          text: `Thandi en Mvula het haar gevra om Msinga te verlaat. "Die kind is gelukkig hier," het Thandi gesê. "Jy sal hom verwar. Gaan." Amazolo het na haar gekyk lank. "Ek sal gaan," het sy gesê. "Maar nie vir jou nie. Vir hom." En sy het gegaan — eers na Mhlatuze, toe na Eshowe.`,
          en: `Thandi and Mvula asked her to leave Msinga. "The child is happy here," said Thandi. "You will confuse him. Go." Amazolo looked at her for a long time. "I will go," she said. "But not for you. For him." And she went — first to Mhlatuze, then to Eshowe.`,
        },
        {
          id: 'dk9-ins2', type: 'callout',
          text: `INSIG: "Nie vir jou nie. Vir hom." — Hierdie sin is een van die kragtigs van die roman. Dit wys dat Amazolo se keuses altyd kind-gesentreerd is, nooit ego-gesentreerd nie. Sy weier om Thandi die mag te gee om haar te "stuur" — maar sy doen tog wat goed is vir die kind. Dít is ware onselfsugtigheid.`,
        },
        {
          id: 'dk9-p5', type: 'paragraph',
          text: `In Eshowe het Amazolo 'n klein woonstel gekry. Sy het klere gemaak en verkoop. Sy het Thandi briewe geskryf — vriendelike briewe, vol dankbaarheid vir wat sy vir die kind doen. Thandi het nooit geantwoord nie. Maar sy het die briewe gehou.`,
          en: `In Eshowe Amazolo got a small flat. She made and sold clothes. She wrote letters to Thandi — friendly letters, full of gratitude for what she was doing for the child. Thandi never replied. But she kept the letters.`,
        },
      ],
    },

    // ── HOOFSTUK 10 ────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h10',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 10 — Zolile word groot',
      titleEn: `Chapter 10 — Zolile grows up`,
      minutes: 17,
      blocks: [
        {
          id: 'dk10-h1', type: 'heading', level: 2,
          text: `Hoofstuk 10 — Zolile word groot`,
          en: `Chapter 10 — Zolile grows up`,
        },
        {
          id: 'dk10-p1', type: 'paragraph',
          text: `Jare het verbygegaan. Zolile het gegroei van 'n versigtige seun tot 'n vasberade jongman. Op skool was hy stil maar skrander — die soort leerder wat nie hande opsteek nie maar altyd die regte antwoord het wanneer gevra word. Sy onderwysers het geweet hy sal ver gaan.`,
          en: `Years passed. Zolile grew from a cautious boy into a determined young man. At school he was quiet but sharp — the kind of student who does not raise his hand but always has the right answer when asked. His teachers knew he would go far.`,
        },
        {
          id: 'dk10-p2', type: 'paragraph',
          text: `Mvula het vir Zolile leer boer. Die twee het goed ooreengestem — hulle was albei rustig, albei hard werkend, albei meer gemaklik in die veld as in 'n sitkamer. Zolile het sy "pa" (soos hy Mvula genoem het) se gebruike geleer. Hy het geleer om vee te behandel, om reën te lees in wolkformasies.`,
          en: `Mvula taught Zolile to farm. The two got along well — they were both quiet, both hardworking, both more comfortable in the fields than in a living room. Zolile learned his "father\'s" (as he called Mvula) customs. He learned to treat cattle, to read rain in cloud formations.`,
        },
        {
          id: 'dk10-ins1', type: 'callout',
          text: `INSIG: Die pa-seun-verhouding tussen Mvula en Zolile is 'n belangrike subverhaal. Mvula se tradisionele waardes — boerdery, die land, voorvaderlike verbintenisse — word oorgedra op Zolile, wat later 'n dokter kies. Hierdie spanning (tradisie vs. toekoms) herhaal die roman se sentrale tema in die volgende geslag.`,
        },
        {
          id: 'dk10-p3', type: 'paragraph',
          text: `Die thomba-seremonie was 'n groot dag. Zolile het die tradisionele rituele van sy volk deurloop en 'n nuwe naam gekry: Mehlw\'e-ntombi — "die oë van 'n meisie." Die kinders op skool het gelag. Zolile het nie gelag nie. Hy het die naam gedra soos iemand wat weet dat name nie jou waarde bepaal nie.`,
          en: `The thomba ceremony was a great day. Zolile went through the traditional rituals of his people and received a new name: Mehlw\'e-ntombi — "the eyes of a girl." The children at school laughed. Zolile did not laugh. He wore the name like someone who knows that names do not determine your worth.`,
        },
        {
          id: 'dk10-ins2', type: 'callout',
          text: `INSIG: Die ironie van die naam "meisie-oë" is veelkantig — dit verbind terug na Amazolo se weigering om hom te "sien" as kind. Nou kry hy 'n naam wat impliseer dat hy sensitief sien. Die tema van identiteit ontwikkel: 'n naam is nie net 'n etiket nie maar ook 'n lens waardeur jy die wêreld sien.`,
        },
        {
          id: 'dk10-p4', type: 'paragraph',
          text: `In sy seniorfase het Zolile vir Mvula gesê: "Ek wil 'n dokter word." Mvula het lank geswyg. Toe het hy gesê: "Die boerdery het 'n boer nodig." Zolile het geantwoord: "Die land het dokters nodig." Dit was nie 'n argument nie — dit was twee man wat mekaar respekteer maar elk sy eie pad sien.`,
          en: `In his senior year Zolile told Mvula: "I want to become a doctor." Mvula was silent for a long time. Then he said: "The farm needs a farmer." Zolile replied: "The country needs doctors." It was not an argument — it was two men who respected each other but each saw his own path.`,
        },
      ],
    },

    // ── HOOFSTUK 11 ────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h11',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 11 — Nomsa en die brief',
      titleEn: `Chapter 11 — Nomsa and the letter`,
      minutes: 16,
      blocks: [
        {
          id: 'dk11-h1', type: 'heading', level: 2,
          text: `Hoofstuk 11 — Nomsa en die brief`,
          en: `Chapter 11 — Nomsa and the letter`,
        },
        {
          id: 'dk11-p1', type: 'paragraph',
          text: `Zolile het Nomsa ontmoet op 'n middag toe sy in die veld besig was om te teken. Sy het haar kop so laag gebuig oor haar sketsboekie dat sy hom nie gehoor het nader kom nie. Hy het staan en kyk na haar werk — fyn lyne wat die vlei uitgedruk het, 'n skildpad wat 'n steen geliyk het.`,
          en: `Zolile met Nomsa one afternoon when she was busy drawing in the veld. She had bent her head so low over her sketchbook that she did not hear him approach. He stood and looked at her work — fine lines that captured the wetland, a turtle that looked like a stone.`,
        },
        {
          id: 'dk11-p2', type: 'paragraph',
          text: `"Jy teken goed," het hy gesê. Sy het opgespring en haar sketsboek toegemaak. Toe sy hom gesien het, het sy oë versag. "Ek het nie geweet jy staan daar nie," het sy gesê. "Hoe lank al?" Hy het glimlag. "Lank genoeg om te sien dat jy die skildpad mooi getref het."`,
          en: `"You draw well," he said. She jumped up and closed her sketchbook. When she saw him, her eyes softened. "I didn\'t know you were standing there," she said. "How long?" He smiled. "Long enough to see that you captured the turtle well."`,
        },
        {
          id: 'dk11-ins1', type: 'callout',
          text: `INSIG: Nomsa is 'n kunstenares — sy "sien" die wêreld kreatief, net soos Amazolo kreatief met haar hande werk. Die parallel is bewus: die vrou wat Zolile kies, resoneer met die moeder wat hom grootgemaak het (in Amazolo se kunsvaardigheid). Die romanse begin rustig, sonder drama — tipies van Zolile se karakter.`,
        },
        {
          id: 'dk11-p3', type: 'paragraph',
          text: `Likwezi — Zolile se suster by Thandi en Mvula — het vir Zolile 'n brief gewys. Dit was 'n brief van Amazolo aan Thandi — geskryf jare gelede, maar nooit vir Zolile gewys nie. In die brief het Amazolo geskryf dat sy elke dag aan die kind dink. Dat sy hoop hy is gelukkig. Dat sy spyt is.`,
          en: `Likwezi — Zolile\'s sister at Thandi and Mvula\'s — showed Zolile a letter. It was a letter from Amazolo to Thandi — written years ago, but never shown to Zolile. In the letter Amazolo wrote that she thinks of the child every day. That she hopes he is happy. That she is sorry.`,
        },
        {
          id: 'dk11-p4', type: 'paragraph',
          text: `Zolile het die brief gelees. Twee maal. Drie maal. Toe het hy dit neergesit en lank na die muur gekyk. "Sy is my ma," het hy gesê. Dit was nie 'n vraag nie. Likwezi het geknik. "Ons het altyd geweet," het sy gesê. "Ons het net nie geweet wanneer om dit te sê nie."`,
          en: `Zolile read the letter. Twice. Three times. Then he put it down and looked at the wall for a long time. "She is my mother," he said. It was not a question. Likwezi nodded. "We always knew," she said. "We just did not know when to say it."`,
        },
        {
          id: 'dk11-ins2', type: 'callout',
          text: `INSIG: Die brief is die skarnieroomblik van die roman — die "peripeteia" of ommekeer. Zolile se ontdekking verander alles. Let op die roman se tegniek: die leser het al 'n paar hoofstukke geweet Amazolo is sy ma, maar Zolile het dit nie geweet nie. Dit is die opbou van dramatiese ironie wat hier opgelos word.`,
        },
        {
          id: 'dk11-p5', type: 'paragraph',
          text: `Zolile het slaap toe gegaan met die brief in sy hand. Die volgende oggend was hy vroegoggend al buite. Nomsa het hom langs die rivier gevind. "Iets het verander," het sy gesê. Hy het haar vertel van die brief. Sy het geluister sonder om te onderbreek. Toe hy klaar was, het sy gesê: "Dan moet ons haar gaan haal."`,
          en: `Zolile went to sleep with the letter in his hand. The next morning he was already outside early. Nomsa found him along the river. "Something has changed," she said. He told her about the letter. She listened without interrupting. When he finished, she said: "Then we must go and fetch her."`,
        },
      ],
    },

    // ── HOOFSTUK 12 ────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h12',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 12 — Tering en waarheid',
      titleEn: `Chapter 12 — Tuberculosis and truth`,
      minutes: 15,
      blocks: [
        {
          id: 'dk12-h1', type: 'heading', level: 2,
          text: `Hoofstuk 12 — Tering en waarheid`,
          en: `Chapter 12 — Tuberculosis and truth`,
        },
        {
          id: 'dk12-p1', type: 'paragraph',
          text: `In Eshowe het Amazolo swakker geword. Die suster by die kliniek het haar ondersoek en gesê: "Tering." Die woord was soos 'n klip wat in water val — dit het stilte gemaak. Amazolo het dit gehoor soos iemand wat al ver van homself af is.`,
          en: `In Eshowe Amazolo grew weaker. The nurse at the clinic examined her and said: "Tuberculosis." The word was like a stone dropping into water — it made silence. Amazolo heard it like someone who is already far away from herself.`,
        },
        {
          id: 'dk12-ins1', type: 'callout',
          text: `INSIG: Tering (TB) was 'n werklike krisis in KwaZulu-Natal in die laat twintigste eeu, en steeds vandag. Die roman gebruik Amazolo se siekte as sosiale realisme — dit is nie net 'n verhaalelement nie maar 'n kommentaar op die gesondheidsomstandighede van landelike vroue. Stylfiguur: "soos 'n klip wat in water val" — simile vir die skok van die diagnose.`,
        },
        {
          id: 'dk12-p2', type: 'paragraph',
          text: `Suster Gumede het Amazolo verpleeg. Sy was 'n klein vrou met groot hande en 'n stem soos klokke. Sy het vir Amazolo gesê: "Jy moet eet. Jy moet rus. Jy moet veg." Amazolo het geantwoord: "Ek het nie redes meer nie." Suster Gumede het haar hand gevat. "Jou seun is jou rede."`,
          en: `Sister Gumede nursed Amazolo. She was a small woman with large hands and a voice like bells. She told Amazolo: "You must eat. You must rest. You must fight." Amazolo replied: "I have no more reasons." Sister Gumede took her hand. "Your son is your reason."`,
        },
        {
          id: 'dk12-p3', type: 'paragraph',
          text: `Nomsa het Sipho Khumalo ontmoet in die dorp. Sipho was oud geword — sy gesig was gerimpel, sy oë was moeg. Hy het gedrink. Iets in hom wou praat. "Ek het 'n vrou se geld gesteel," het hy gesê. "En die man — die man het ek van die krans afgestoot." Hy het Nomsa se gesig bekyk. "Jy ken hom?"`,
          en: `Nomsa met Sipho Khumalo in town. Sipho had grown old — his face was wrinkled, his eyes were tired. He was drinking. Something in him wanted to speak. "I stole a woman\'s money," he said. "And the man — the man I pushed off the cliff." He looked at Nomsa\'s face. "You know him?"`,
        },
        {
          id: 'dk12-ins2', type: 'callout',
          text: `INSIG: Sipho se belydenis aan Nomsa is 'n katarsis-moment vir die plot. Die leser het lank gewag op hierdie onthulling. Interessant dat hy nie dit aan 'n gesagsfiguur bely nie — maar aan 'n jong vrou wat hy nie ken nie. Drankmisbruik en skuldgevoel dryf hom. Dit is 'n menslike moment selfs in 'n plat karakter.`,
        },
        {
          id: 'dk12-p4', type: 'paragraph',
          text: `Nomsa het na Zolile gaan terug met Sipho se woorde in haar kop. Sy het hom alles vertel. Zolile het regop gesit. "Mlenzana is dood," het hy gesê. Nie 'n vraag nie. 'n Vasstelling. Sy het geknik. Hy het lank geswyg. Toe het hy gesê: "Dan moet ek sy beendere gaan haal. 'n Man behoort nie sonder beendere te wees nie."`,
          en: `Nomsa went back to Zolile with Sipho\'s words in her head. She told him everything. Zolile sat upright. "Mlenzana is dead," he said. Not a question. A statement. She nodded. He was silent for a long time. Then he said: "Then I must go and fetch his bones. A man should not be without his bones."`,
        },
        {
          id: 'dk12-ins3', type: 'callout',
          text: `INSIG: "\'n Man behoort nie sonder beendere te wees nie" — dit is 'n verwysing na Zoeloe-tradisie: die beendere van die dooie moet tuisgebring word sodat die gees rus kan vind. Hierdie sin skakel Zolile met sy tradisionele wortels ten spyte van sy moderne ambisies. Die beendere-motief is een van die sterkste simbole in die roman.`,
        },
      ],
    },

    // ── HOOFSTUK 13 ────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h13',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 13 — Zolile gaan haal Amazolo',
      titleEn: `Chapter 13 — Zolile fetches Amazolo`,
      minutes: 17,
      blocks: [
        {
          id: 'dk13-h1', type: 'heading', level: 2,
          text: `Hoofstuk 13 — Zolile gaan haal Amazolo`,
          en: `Chapter 13 — Zolile fetches Amazolo`,
        },
        {
          id: 'dk13-p1', type: 'paragraph',
          text: `Suster Gumede het aangebied om saam te gaan. "Ek ken die pad na Eshowe," het sy gesê. "Jy is nog jonk." Zolile het geantwoord: "Ek moet dit alleen doen." Suster Gumede het hom lank bekyk. Toe het sy geknik. "Jy ken jouself," het sy gesê.`,
          en: `Sister Gumede offered to go along. "I know the way to Eshowe," she said. "You are still young." Zolile replied: "I must do this alone." Sister Gumede looked at him for a long time. Then she nodded. "You know yourself," she said.`,
        },
        {
          id: 'dk13-ins1', type: 'callout',
          text: `INSIG: "Jy ken jouself" — hierdie sin sluit die tema van identiteit op 'n subtiele manier. Deur die roman af het Zolile gesukkel om te verstaan wie hy is; nou erken selfs 'n buitestaander sy selfkennis. Sy onafhanklikheid is ook 'n karakter-kenmerk wat deur die verteller bevestig word.`,
        },
        {
          id: 'dk13-p2', type: 'paragraph',
          text: `Zolile het tradisionele klere vir Nomsa gegee om te dra wanneer sy Amazolo gaan ontmoet. "Sy het tradisies lief," het hy verduidelik. "Dit sal haar sê dat jy haar respekteer." Nomsa het die klere aangetrek sonder om te kla, al was dit vreemd vir haar. Sy het verstaan: dit was nie oor haar nie.`,
          en: `Zolile gave Nomsa traditional clothes to wear when she went to meet Amazolo. "She loves traditions," he explained. "It will tell her that you respect her." Nomsa put on the clothes without complaining, even though they felt strange to her. She understood: it was not about her.`,
        },
        {
          id: 'dk13-p3', type: 'paragraph',
          text: `In Eshowe het Zolile sy ma vir die eerste keer bewustelik as sy ma gesien. Sy was maer, haar oë groot in haar gesig, haar hande — die hande wat potte gemaak het — lê stil op haar skoot. Toe sy hom sien, het iets in haar bors losgelaat. Soos 'n knoop wat al baie jare vasgesit het.`,
          en: `In Eshowe Zolile saw his mother consciously as his mother for the first time. She was thin, her eyes large in her face, her hands — the hands that made pots — lay still in her lap. When she saw him, something in her chest released. Like a knot that had been tied for many years.`,
        },
        {
          id: 'dk13-ins2', type: 'callout',
          text: `INSIG: "Soos 'n knoop wat al baie jare vasgesit het" — simile wat die emosionele oplossing van Amazolo se ingehoue pyn beskryf. Haar hande wat stil lê (anders as die aktiewe hande wat potte maak) simboliseer haar fisiese swakte maar ook haar emosionele gereedheid om ontvang te word.`,
        },
        {
          id: 'dk13-p4', type: 'paragraph',
          text: `"Jy het gekom," het Amazolo gesê. Haar stem was dun maar haar oë was helder. "Ek het gekom," het Zolile gesê. Hy het neergekniel sodat hy op haar vlak was. "Ek kom jou haal, Ma. Jy gaan nie hier bly nie." Amazolo het haar oë toegemaak. "Ma," het sy herhaal. "Jy het gesê Ma."`,
          en: `"You came," said Amazolo. Her voice was thin but her eyes were clear. "I came," said Zolile. He knelt down so that he was at her level. "I am coming to take you home, Ma. You are not staying here." Amazolo closed her eyes. "Ma," she repeated. "You said Ma."`,
        },
        {
          id: 'dk13-ins3', type: 'callout',
          text: `INSIG: Die woord "Ma" is die hoogtepunt van die roman. Deur al die vorige hoofstukke was Amazolo nooit "Ma" nie — sy was naamloos vir hom. Hierdie enkele woord is die kulminasie van die identiteitsmotief: hy weet nou wie hy is, want hy weet nou wie sy ma is. Die eksamen vra dikwels na die "hoogtepunt" (klimaks) van die roman — dit is hier.`,
        },
        {
          id: 'dk13-p5', type: 'paragraph',
          text: `Amazolo het Nomsa bekyk. Nomsa het stil gestaan in die tradisionele klere. "Is sy jou meisie?" het Amazolo gevra. Zolile het geknik. Amazolo het vir Nomsa 'n lang tyd bestudeer. Toe het sy geglimlag — dun, maar eg. "Sy het my klere aan," het sy gesê. "Sy is goed."`,
          en: `Amazolo looked at Nomsa. Nomsa stood still in the traditional clothes. "Is she your girl?" asked Amazolo. Zolile nodded. Amazolo studied Nomsa for a long time. Then she smiled — thin, but genuine. "She is wearing my clothes," she said. "She is good."`,
        },
      ],
    },

    // ── HOOFSTUK 14 ────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h14',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 14 — Thandi se besoek',
      titleEn: `Chapter 14 — Thandi\'s visit`,
      minutes: 14,
      blocks: [
        {
          id: 'dk14-h1', type: 'heading', level: 2,
          text: `Hoofstuk 14 — Thandi se besoek`,
          en: `Chapter 14 — Thandi\'s visit`,
        },
        {
          id: 'dk14-p1', type: 'paragraph',
          text: `Thandi het gekom na Amazolo toe — nie om te argumenteer nie, nie om die kind terug te eis nie. Sy het gekom met kos en sonder woorde op die punt van haar tong. Amazolo het haar by die deur ontvang en binne gelaat. Die twee vroue het mekaar bekyk.`,
          en: `Thandi came to Amazolo — not to argue, not to reclaim the child. She came with food and without words on the tip of her tongue. Amazolo received her at the door and let her in. The two women looked at each other.`,
        },
        {
          id: 'dk14-ins1', type: 'callout',
          text: `INSIG: Hierdie toneel is die roman se groot vergelykingsmoment. Thandi het Amazolo lyding veroorsaak — maar sy kom met kos, nie met argumente nie. In Zoeloe-kultuur is kos deel van versoenende gebaartalig. Amazolo se besluit om haar in te laat toon vergewensgesindheid. Die tema: vergifnis as daad, nie as woord nie.`,
        },
        {
          id: 'dk14-p2', type: 'paragraph',
          text: `"Ek het verkeerd gedoen," het Thandi gesê. Die woorde het gelyk asof dit 'n lang pad moes reis voor dit haar mond kon verlaat. "Jy het hom goed grootgemaak," het Amazolo geantwoord. "Ek bedank jou." Thandi het gaan sit. "Hy noem my nie meer Ma nie," het sy gesê. "Hy noem jou Ma."`,
          en: `"I did wrong," said Thandi. The words seemed to have had to travel a long way before they could leave her mouth. "You raised him well," Amazolo replied. "I thank you." Thandi sat down. "He no longer calls me Ma," she said. "He calls you Ma."`,
        },
        {
          id: 'dk14-p3', type: 'paragraph',
          text: `"Hy sal altyd na jou kom kuier," het Amazolo gesê. "Ek belowe dit." Thandi het die kos op die tafel gesit. "Nee," het sy gesê. "Jy kan nie beloftes maak namens hom nie. Maar jy kan vir my sê jy sal hom nie weghou nie." Amazolo het 'n asem gevat. "Ek sal hom nie weghou nie."`,
          en: `"He will always come to visit you," said Amazolo. "I promise that." Thandi put the food on the table. "No," she said. "You cannot make promises on his behalf. But you can tell me you will not keep him away." Amazolo took a breath. "I will not keep him away."`,
        },
        {
          id: 'dk14-ins2', type: 'callout',
          text: `INSIG: Thandi se korreksie — "jy kan nie beloftes maak namens hom nie" — toon 'n moment van wysheid in 'n karakter wat tot dusver minder simpatiek was. Dit suggereer karakterontwikkeling ook in Thandi, wat anders 'n plat karakter sou gewees het. Die roman vermy swart-en-wit karakterisering.`,
        },
        {
          id: 'dk14-p4', type: 'paragraph',
          text: `Zolile het by die venster gestaan en na die twee vroue gekyk. Hy het nie ingegaan nie. Sommige gesprekke hoort aan die vroue wat dit voer. Hy het net gekyk en geweet: hierdie is waar sy verhaal begin loop het. In die plek tussen twee vroue wat albei iets van hom eis en albei iets van hom gee.`,
          en: `Zolile stood at the window and watched the two women. He did not go in. Some conversations belong to the women who have them. He just watched and knew: this is where his story began to run. In the space between two women who both demand something from him and both give something to him.`,
        },
      ],
    },

    // ── HOOFSTUK 15 ────────────────────────────────────────────────────────
    {
      id: 'dk-boek-h15',
      chapterId: 'afr-die-kind-boek',
      subjectId: 'afrikaans',
      title: 'Hoofstuk 15 — Mlenzana se beendere',
      titleEn: `Chapter 15 — Mlenzana\'s bones`,
      minutes: 17,
      blocks: [
        {
          id: 'dk15-h1', type: 'heading', level: 2,
          text: `Hoofstuk 15 — Mlenzana se beendere en die einde`,
          en: `Chapter 15 — Mlenzana\'s bones and the ending`,
        },
        {
          id: 'dk15-p1', type: 'paragraph',
          text: `Zolile het na die krans gegaan waar Mlenzana geval het. Hy het nie alleen gegaan nie — Mvula was saam, en twee mans uit die gemeenskap wat die pad geken het. Die krans was hoog en die wind het skerp gewaai. Benede was rotse en niks anders nie.`,
          en: `Zolile went to the cliff where Mlenzana had fallen. He did not go alone — Mvula went along, and two men from the community who knew the path. The cliff was high and the wind blew sharply. Below were rocks and nothing else.`,
        },
        {
          id: 'dk15-p2', type: 'paragraph',
          text: `Hulle het die beendere gevind — verspreide, stille dinge wat skaars nog lyk na die man wat Amazolo liefgehad het. Zolile het hulle opgetel sonder trilling in sy hande. Hy het hulle toegedraai in 'n wit doek en gesê: "Kom, Mlenzana. Jy gaan huis toe."`,
          en: `They found the bones — scattered, silent things that barely resembled the man Amazolo had loved. Zolile picked them up without a tremor in his hands. He wrapped them in a white cloth and said: "Come, Mlenzana. You are going home."`,
        },
        {
          id: 'dk15-ins1', type: 'callout',
          text: `INSIG: "Kom, Mlenzana. Jy gaan huis toe" — Zolile praat met die dooie asof hy lewendig is. Dit is 'n Zoeloe-tradisie: die siel (idlozi) is nog teenwoordig by die beendere totdat hulle begrawe is. Die byroep van Mlenzana is nie bygeloof nie — dit is kulturele kontinuïteit, en Zolile as aankomende dokter en kind van 'n naamlose vader vind hier sy volledige identiteit.`,
        },
        {
          id: 'dk15-p3', type: 'paragraph',
          text: `Die begrafnis was eenvoudig. Amazolo het bygedra — nie met kos of klere nie, maar met 'n pot. Sy laaste groot pot, fyn versier met die patrone van haar volk. Sy het dit langs die graf geplaas en gesê: "Ek het nie geweet jy het gesterf nie. Ek sou gekom het." Niemand het geantwoord nie, want niemand kon nie.`,
          en: `The funeral was simple. Amazolo contributed — not with food or clothes, but with a pot. Her last large pot, finely decorated with the patterns of her people. She placed it next to the grave and said: "I did not know you had died. I would have come." No one answered, because no one could.`,
        },
        {
          id: 'dk15-ins2', type: 'callout',
          text: `INSIG: Amazolo se laaste pot by die graf is die slotsom van die pot-motief. Deur die roman het die potte haar identiteit, haar onafhanklikheid en haar liefde verteenwoordig. Nou bied sy een aan by die dood van die man wat sy liefgehad het. Dit is die roman se rykste simboliese moment.`,
        },
        {
          id: 'dk15-p4', type: 'paragraph',
          text: `Later, by die huis, het Zolile langs Amazolo gaan sit. Sy het sy hand geneem. "Jy was die kind sonder naam," het sy gesê. "Maar jy is nooit sonder naam in my hart gewees nie. Ek het net nie geweet hoe om dit te sê nie."`,
          en: `Later, at the house, Zolile went and sat beside Amazolo. She took his hand. "You were the child without a name," she said. "But you were never without a name in my heart. I just did not know how to say it."`,
        },
        {
          id: 'dk15-ins3', type: 'callout',
          text: `INSIG: Hierdie sin is Amazolo se verduideliking van die roman se sentrale paradoks: sy het hom verwerp, maar nooit opgehou liefhê nie. Die roman suggereer dat liefde en handeling soms uitmekaarval wanneer 'n mens gebroke is. Haar "skuld" was nie harteloosheid nie — dit was 'n vrou wat te gebreek was om te gee wat sy gevoel het.`,
        },
        {
          id: 'dk15-p5', type: 'paragraph',
          text: `"Nee," het sy gesê toe hy antwoord wou gee. "'n Mens kan 'n olifant nie groter maak met 'n nuwe naam nie." Sy het sy hand vaster gevat. "Maar 'n naam gee erkenning. En erkenning is wat jy altyd gesoe het." Zolile het haar hand teruggehou. Buite het die son ondergegaan oor Msinga, oranje en goud, soos die begin van iets nuuts.`,
          en: `"No," she said when he was about to reply. "One cannot make an elephant bigger with a new name." She held his hand tighter. "But a name gives recognition. And recognition is what you always sought." Zolile held her hand back. Outside the sun set over Msinga, orange and gold, like the beginning of something new.`,
        },
        {
          id: 'dk15-ins4', type: 'callout',
          text: "INSIG: Die slot-beeld van die sonsondergang is vol simboliek: oranje en goud (die kleure van hoop en nuwe begin) oor Msinga (die plek van oorsprong). Die roman eindig nie met groot drama nie — dit eindig met 'n stille, menselike oomblik van twee mense wat mekaar vashou. Dit is die \"ontknoping\" — die slotoplossing na die klimaks in hoofstuk 13.",
        },
        {
          id: 'dk15-p6', type: 'paragraph',
          text: "En so het die kind — wat nooit 'n naam gehad het nie, wat gespeel het in die stof van 'n kraal sonder dat iemand sy naam genoem het — uiteindelik gevind wat hy altyd gesoe het: nie net 'n naam nie, maar die mens agter die naam. Die mens wat hom gemaak het. Die mens wat hom liefgehad het sonder om te weet hoe om dit te wys.",
          en: `And so the child — who had never had a name, who had played in the dust of a kraal without anyone calling his name — finally found what he had always sought: not just a name, but the person behind the name. The person who made him. The person who loved him without knowing how to show it.`,
        },
      ],
    },

  ],
};
