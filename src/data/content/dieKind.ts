import type { Chapter } from '@/lib/types';

/**
 * Die Kind — authored introduction chapter.
 *
 * Content extracted from the study-guide photographs in
 * `AfrikaansSetBook-DieKind/` (the edition's front matter, pages xiv–xxix,
 * plus the Zulu glossary on page 169). Page references in the text are the
 * novel's own page numbers, as the guide cites them.
 *
 * Every block carries `text` (Afrikaans) and `en` (English). The split-pane
 * and hover-tooltip reading modes both read `en`; a block without it renders
 * untranslated.
 *
 * Scope note: the guide's front matter does not name the author or translator
 * on any photographed page, so no author biography is asserted here. The
 * "Agtergrond" lesson covers publication, setting and cultural context, which
 * the source does support.
 */
export const DIE_KIND_CHAPTER: Chapter = {
  id: 'afr-die-kind',
  subjectId: 'afrikaans',
  title: 'Die Kind — Inleiding',
  summary: 'Agtergrond, opsomming, karakters, temas, tegniek en eksamenvoorbereiding.',
  term: 1,
  lessons: [
    /* ── 1. Background & context ────────────────────────────────────────── */
    {
      id: 'afr-die-kind-agtergrond',
      chapterId: 'afr-die-kind',
      subjectId: 'afrikaans',
      title: 'Agtergrond en konteks',
      titleEn: 'Background and context',
      minutes: 14,
      blocks: [
        {
          id: 'ag-h1',
          type: 'heading',
          level: 2,
          text: 'Wanneer en waar speel die roman af?',
          en: 'When and where is the novel set?',
        },
        {
          id: 'ag-p1',
          type: 'paragraph',
          text:
            'Die kind is in 1989 gepubliseer en die gebeure vind gedurende die tweede helfte van die twintigste eeu plaas. Alhoewel daar na stede soos Johannesburg, Pretoria en Durban verwys word, is die hoofruimte Msinga en omstreke in KwaZulu-Natal — ’n tipies landelike omgewing.',
          en:
            'Die kind was published in 1989 and the events take place during the second half of the twentieth century. Although cities such as Johannesburg, Pretoria and Durban are referred to, the main setting is Msinga and its surroundings in KwaZulu-Natal — a typically rural environment.',
        },
        {
          id: 'ag-p2',
          type: 'paragraph',
          text:
            'Binne hierdie groter ruimte verskuif die gebeure na verskeie plekke: Amazolo se huis in Msinga, die Mutwas se huis en plaas, die veld, Tugela Ferry, die tronk, Sipho se umuzi, die veldhospitaal, Zuziwe se huis, en Amazolo se huis in Mhlatuze en in Eshowe.',
          en:
            'Within this larger setting the events shift to various places: Amazolo’s house in Msinga, the Mutwas’ house and farm, the veld, Tugela Ferry, the prison, Sipho’s umuzi, the field hospital, Zuziwe’s house, and Amazolo’s house in Mhlatuze and in Eshowe.',
        },
        {
          id: 'ag-p3',
          type: 'paragraph',
          text:
            'Die beeld van die landelike omgewing word realisties oorgedra deur byvoorbeeld die beskrywing van die huise in Msinga, die veld, die potte wat Amazolo maak, die daaglikse roetine van die seuns wat bokke en beeste oppas, die kleredrag van die jong vrouens en meisies, die veldhospitaal en die umuzi’s.',
          en:
            'The image of the rural environment is conveyed realistically through, for example, the description of the houses in Msinga, the veld, the pots Amazolo makes, the daily routine of the boys who look after goats and cattle, the clothing of the young women and girls, the field hospital and the umuzis.',
        },
        {
          id: 'ag-h2',
          type: 'heading',
          level: 2,
          text: 'Hoe beïnvloed die ruimte die gebeure?',
          en: 'How does the setting influence the events?',
        },
        {
          id: 'ag-l1',
          type: 'list',
          text: [
            'Mlenzana het die landelike Msinga, waar daar min geleenthede is, verlaat om geld op die myne in Johannesburg te verdien.',
            'Amazolo verlaat haar tradisionele huis (iqhugwane) waarvoor sy baie lief is en trek dorp toe, waar daar elektrisiteit is sodat sy meer naaldwerk kan doen.',
          ],
          en: [
            'Mlenzana left rural Msinga, where there are few opportunities, to earn money on the mines in Johannesburg.',
            'Amazolo leaves the traditional house (iqhugwane) she loves dearly and moves to town, where there is electricity so that she can do more needlework.',
          ],
        },
        {
          id: 'ag-h3',
          type: 'heading',
          level: 2,
          text: 'Die titel',
          en: 'The title',
        },
        {
          id: 'ag-p4',
          type: 'paragraph',
          text:
            'In Die kind verwys die titel na die een hoofkarakter wat eers naamloos is, maar later as Zolile bekend staan. Dit is ’n doeltreffende titel, want dit sluit aan by die seun se aanvanklike naamloosheid. Omdat sy verhaal sentraal in die roman is, is dit sinvol dat die titel na hom verwys.',
          en:
            'In Die kind the title refers to the one main character who is at first nameless, but who later becomes known as Zolile. It is an effective title, because it connects to the boy’s initial namelessness. Because his story is central to the novel, it makes sense that the title refers to him.',
        },
        {
          id: 'ag-h4',
          type: 'heading',
          level: 2,
          text: 'Zoeloe-kultuur in die roman',
          en: 'Zulu culture in the novel',
        },
        {
          id: 'ag-p5',
          type: 'paragraph',
          text:
            'Die roman is diep gewortel in Zoeloe-tradisie. Die Zoeloes is bekend as dapper krygsmanne: voordat krygers op ekspedisies uitgestuur word, word seremonieel van hulle afskeid geneem en ’n groot fees word beplan, waarby dans ’n integrale deel van die program uitmaak. Tydens hierdie danse word die beskerming van uNkulunkulu gevra.',
          en:
            'The novel is deeply rooted in Zulu tradition. The Zulus are known as brave warriors: before warriors are sent out on expeditions they are ceremonially taken leave of and a great feast is planned, in which dance forms an integral part of the programme. During these dances the protection of uNkulunkulu is asked for.',
        },
        {
          id: 'ag-p6',
          type: 'paragraph',
          text:
            'Die huwelik is ’n belangrike instelling en hoeksteen van die Zoeloe-kultuur. ’n Bruilofsfees kan oor etlike dae strek; dit is die bruid en haar familie se voorreg om eerste te dans. Die Zoeloes glo ook aan die reïnkarnasie van die geeste van die dooies: wanneer iemand sterf, word spesiale offers aan die geeste gebring, bekend as amadhlozi.',
          en:
            'Marriage is an important institution and cornerstone of Zulu culture. A wedding feast can stretch over several days; it is the bride and her family’s privilege to dance first. The Zulus also believe in the reincarnation of the spirits of the dead: when someone dies, special offerings are brought to the spirits, known as amadhlozi.',
        },
        {
          id: 'ag-h5',
          type: 'heading',
          level: 3,
          text: 'Zoeloe-woorde wat jy moet ken',
          en: 'Zulu words you should know',
        },
        {
          id: 'ag-l2',
          type: 'list',
          text: [
            'Amazolo — beteken “dou”.',
            'Thandi — beteken “liefde”.',
            'Likwezi — beteken “oggendster”.',
            'Ongenagama — “die een sonder ’n naam”.',
            'iqhugwane — tradisionele Zoeloe-hut; malondolo — tipe rondawelhut met ’n kleimuur en ’n grasdak.',
            'umuzi — groep (tradisionele) huise binne ’n gemeenskaplike takomheining.',
            'Mehlw’e-ntombi — beteken letterlik “die oë van ’n meisie”.',
            'ukuthwala intombi — ’n tradisionele gebruik waartydens ’n jong man ’n vrou kan dwing om met hom te trou.',
            'amadhlozi — die geeste van die voorvaders.',
          ],
          en: [
            'Amazolo — means “dew”.',
            'Thandi — means “love”.',
            'Likwezi — means “morning star”.',
            'Ongenagama — “the one without a name”.',
            'iqhugwane — traditional Zulu hut; malondolo — a type of round hut with a clay wall and a grass roof.',
            'umuzi — a group of (traditional) houses within a common brushwood fence.',
            'Mehlw’e-ntombi — literally means “the eyes of a girl”.',
            'ukuthwala intombi — a traditional custom during which a young man can force a woman to marry him.',
            'amadhlozi — the spirits of the ancestors.',
          ],
        },
      ],
    },

    /* ── 2. Summary ─────────────────────────────────────────────────────── */
    {
      id: 'afr-die-kind-opsomming',
      chapterId: 'afr-die-kind',
      subjectId: 'afrikaans',
      title: 'Opsomming van die verhaal',
      titleEn: 'Summary of the story',
      minutes: 16,
      blocks: [
        {
          id: 'op-h1',
          type: 'heading',
          level: 2,
          text: 'Die verhaal in kort',
          en: 'The story in brief',
        },
        {
          id: 'op-p1',
          type: 'paragraph',
          text:
            'Die kind se aanvanklike verwerping deur sy eie ma, Amazolo, lei daartoe dat hy ná hulle seun se dood as kind van die welgestelde Thandi en Mvula grootgemaak word. Ter wille van die kind bly Amazolo weg van Msinga, maar wanneer Zolile as jong man besef dat Amazolo eintlik sy ma is, gaan haal hy haar en bring haar terug Msinga toe.',
          en:
            'The child’s initial rejection by his own mother, Amazolo, leads to him being raised as the child of the well-off Thandi and Mvula after their son’s death. For the child’s sake Amazolo stays away from Msinga, but when Zolile as a young man realises that Amazolo is in fact his mother, he fetches her and brings her back to Msinga.',
        },
        {
          id: 'op-h2',
          type: 'heading',
          level: 2,
          text: 'Hoofstuk 1–3: Verwerping',
          en: 'Chapters 1–3: Rejection',
        },
        {
          id: 'op-l1',
          type: 'list',
          text: [
            'Amazolo probeer ontslae raak van haar ongebore kind. Die kind word gebore en sy ignoreer hom.',
            'Zuziwe neem die kind na Thandi toe en waarsku Amazolo dat sy gestraf gaan word omdat sy haar kind verwerp.',
            'Thandi bring die kind ná ’n jaar terug na Amazolo toe. Amazolo werk ses dae ’n week by Thandi en raak nou baie lief vir die kind.',
            'Die ander kinders noem die kind “Ongenagama” en spot hom omdat hy nie ’n naam het nie.',
            'Zolile (Thandi en Mvula se seun) word deur die bul getrap en sterf ’n week later. Thandi sê dit is Amazolo se kind wat dood is en eis “haar” kind terug.',
            'Amazolo en die kind verdwyn. Thandi stel tien mans aan om hulle te gaan soek.',
          ],
          en: [
            'Amazolo tries to get rid of her unborn child. The child is born and she ignores him.',
            'Zuziwe takes the child to Thandi and warns Amazolo that she will be punished because she rejected her child.',
            'After a year Thandi brings the child back to Amazolo. Amazolo works six days a week at Thandi’s and now grows to love the child very much.',
            'The other children call the child “Ongenagama” and mock him because he does not have a name.',
            'Zolile (Thandi and Mvula’s son) is trampled by the bull and dies a week later. Thandi says it is Amazolo’s child who has died and demands “her” child back.',
            'Amazolo and the child disappear. Thandi appoints ten men to go and look for them.',
          ],
        },
        {
          id: 'op-h3',
          type: 'heading',
          level: 2,
          text: 'Hoofstuk 4–9: Die vlug en die geweld',
          en: 'Chapters 4–9: The flight and the violence',
        },
        {
          id: 'op-l2',
          type: 'list',
          text: [
            'Amazolo en haar kind vertrek in die geheim uit Msinga; hulle stap snags en rus bedags. Die derde nag word Amazolo deur ’n hond aangeval.',
            'Mlenzana vind hulle en gaan na die veldhospitaal om medisyne vir Amazolo te kry.',
            'Sipho Khumalo kom op Amazolo in haar skuilplek af, wil haar verkrag en steel haar geld.',
            'Sipho slaan Mlenzana bewusteloos met sy kierie. Die kind verdwaal en word deur ander seuns gespot.',
            'Amazolo gaan tronk toe. In die hof sê sy dat sy die kind van sy ma gesteel het, en word tot tronkstraf in Durban gevonnis.',
            'Sipho stamp Mlenzana van ’n hoë krans af en Mlenzana val hom dood.',
          ],
          en: [
            'Amazolo and her child leave Msinga in secret; they walk at night and rest by day. On the third night Amazolo is attacked by a dog.',
            'Mlenzana finds them and goes to the field hospital to get medicine for Amazolo.',
            'Sipho Khumalo comes upon Amazolo in her hiding place, wants to rape her and steals her money.',
            'Sipho beats Mlenzana unconscious with his knobkerrie. The child gets lost and is mocked by other boys.',
            'Amazolo goes to prison. In court she says that she stole the child from his mother, and is sentenced to imprisonment in Durban.',
            'Sipho pushes Mlenzana off a high cliff and Mlenzana falls to his death.',
          ],
        },
        {
          id: 'op-h4',
          type: 'heading',
          level: 2,
          text: 'Hoofstuk 10–15: Die naam en die ontknoping',
          en: 'Chapters 10–15: The name and the resolution',
        },
        {
          id: 'op-l3',
          type: 'list',
          text: [
            'Die kind se naam is nou Zolile. Hy begin skoolgaan. Ná drie jaar in die tronk kom Amazolo huis toe.',
            'Amazolo besluit om uit Msinga weg te trek nadat Mvula en Thandi haar gevra het om dit te doen.',
            'Zolile sê vir Mvula hy wil die volgende jaar gaan studeer om ’n dokter te word. Zuziwe sterf.',
            'Zolile ontmoet vir Nomsa terwyl sy in die veld teken. Likwezi wys vir Zolile die brief wat Amazolo vir Thandi geskryf het.',
            'Tering word by Amazolo gediagnoseer. Sipho erken aan Nomsa dat hy Amazolo se geld gesteel en Mlenzana doodgemaak het.',
            'Zolile gaan haal vir Amazolo en bring haar terug na Msinga. Hy gaan haal ook Mlenzana se beendere.',
          ],
          en: [
            'The child’s name is now Zolile. He starts school. After three years in prison Amazolo comes home.',
            'Amazolo decides to move away from Msinga after Mvula and Thandi asked her to do so.',
            'Zolile tells Mvula he wants to study the next year to become a doctor. Zuziwe dies.',
            'Zolile meets Nomsa while she is drawing in the veld. Likwezi shows Zolile the letter Amazolo wrote to Thandi.',
            'Amazolo is diagnosed with tuberculosis. Sipho admits to Nomsa that he stole Amazolo’s money and killed Mlenzana.',
            'Zolile fetches Amazolo and brings her back to Msinga. He also fetches Mlenzana’s bones.',
          ],
        },
      ],
    },

    /* ── 3. Characters ──────────────────────────────────────────────────── */
    {
      id: 'afr-die-kind-karakters',
      chapterId: 'afr-die-kind',
      subjectId: 'afrikaans',
      title: 'Karakters en karakterisering',
      titleEn: 'Characters and characterisation',
      minutes: 15,
      blocks: [
        {
          id: 'ka-p0',
          type: 'paragraph',
          text:
            'Amazolo en die kind (later Zolile) is die hoofkarakters in die roman. Albei is ronde karakters wat ons op verskeie vlakke leer ken.',
          en:
            'Amazolo and the child (later Zolile) are the main characters in the novel. Both are round characters whom we come to know on various levels.',
        },
        {
          id: 'ka-h1',
          type: 'heading',
          level: 2,
          text: 'Amazolo',
          en: 'Amazolo',
        },
        {
          id: 'ka-l1',
          type: 'list',
          text: [
            'Tradisievas: dit is vir haar belangrik om in ’n iqhugwane te bly; sy wou nie saam met Mlenzana Johannesburg toe gaan nie omdat sy naby haar mense wou bly.',
            'Sterk: ná die kind se geboorte hou sy by haar besluit om hom te ignoreer; wanneer Thandi die kind wil hê, vlug sy vrou-alleen met die kind.',
            'Onafhanklik: in Msinga en later in Eshowe gebruik sy haar vaardighede om potte en klere te maak om geld te verdien.',
            'Onselfsugtig: Amazolo staan die kind af aan Thandi omdat sy weet die Mutwas kan hom ’n goeie lewe gee.',
            'Kreatief: sy maak tradisionele potte en later klere.',
            'In voeling met die natuur: nadat die hond haar gebyt het, weet sy watter plante gebruik kan word om haar wonde te behandel.',
            'Nie haatdraend nie: Amazolo skryf aan Thandi en bedank haar vir wat sy vir die kind doen; wanneer Thandi haar kom besoek, ontvang sy haar met waardigheid.',
          ],
          en: [
            'Traditional: it is important to her to live in an iqhugwane; she did not want to go to Johannesburg with Mlenzana because she wanted to stay near her people.',
            'Strong: after the child’s birth she sticks to her decision to ignore him; when Thandi wants the child, she flees alone as a woman with the child.',
            'Independent: in Msinga and later in Eshowe she uses her skills to make pots and clothes to earn money.',
            'Unselfish: Amazolo gives the child up to Thandi because she knows the Mutwas can give him a good life.',
            'Creative: she makes traditional pots and later clothes.',
            'In tune with nature: after the dog bit her, she knows which plants can be used to treat her wounds.',
            'Not resentful: Amazolo writes to Thandi and thanks her for what she does for the child; when Thandi comes to visit her, she receives her with dignity.',
          ],
        },
        {
          id: 'ka-q1',
          type: 'quote',
          text:
            'Karakterontwikkeling vind in Amazolo plaas ten opsigte van haar gevoelens teenoor die kind. Aanvanklik wil sy niks met hom te doen hê nie, maar later raak sy baie lief vir hom. Haar liefde vir hom is so onselfsugtig dat sy bereid is om afstand van hom te doen sodat hy nie verward oor haar rol in sy lewe moet wees nie.',
          en:
            'Character development takes place in Amazolo with respect to her feelings towards the child. At first she wants nothing to do with him, but later she comes to love him very much. Her love for him is so unselfish that she is willing to give him up so that he need not be confused about her role in his life.',
        },
        {
          id: 'ka-h2',
          type: 'heading',
          level: 2,
          text: 'Die kind (later Zolile)',
          en: 'The child (later Zolile)',
        },
        {
          id: 'ka-l2',
          type: 'list',
          text: [
            'Is slim: as kind maak hy ’n plan om toegelaat te word om beeste op te pas.',
            'Is intelligent: hy doen baie goed op skool en word later ’n dokter.',
            'Is vasberade: hy gee nie moed op wanneer hy die waarheid oor Amazolo wil uitvind nie; hy gee ook nie moed op toe hy besluit het dat hy Nomsa as vrou wil hê nie.',
            'Toon begrip vir ander mense: nadat hy besef dat hy Amazolo se kind is, belowe hy vir Thandi dat hy nog steeds by haar sal kom kuier.',
            'Gee om vir sy medemens: hy help by die veldhospitaal; hy wil ’n dokter word.',
            'Is onafhanklik: al bied suster Gumede aan om saam met hom na Eshowe te gaan om Amazolo te gaan haal, weet hy dat hy dit op sy eie moet doen.',
            'Beskou tradisies as belangrik: hy gee vir Nomsa tradisionele klere om te dra wanneer sy Amazolo gaan ontmoet.',
          ],
          en: [
            'Is clever: as a child he makes a plan to be allowed to look after cattle.',
            'Is intelligent: he does very well at school and later becomes a doctor.',
            'Is determined: he does not give up when he wants to find out the truth about Amazolo; nor does he give up once he has decided that he wants Nomsa as his wife.',
            'Shows understanding for other people: after he realises that he is Amazolo’s child, he promises Thandi that he will still come and visit her.',
            'Cares for his fellow human beings: he helps at the field hospital; he wants to become a doctor.',
            'Is independent: although sister Gumede offers to go with him to Eshowe to fetch Amazolo, he knows that he must do it on his own.',
            'Regards traditions as important: he gives Nomsa traditional clothes to wear when she goes to meet Amazolo.',
          ],
        },
        {
          id: 'ka-h3',
          type: 'heading',
          level: 2,
          text: 'Ander karakters',
          en: 'Other characters',
        },
        {
          id: 'ka-p1',
          type: 'paragraph',
          text:
            'Die belangrikste newekarakters is Mlenzana, Zuziwe, Thandi en Mvula. Likwezi, Malandlela, die jong Zolile, Nomsa, Sipho en die Gumedes is ook newekarakters. Die jong Zolile (wat dood is) en Sipho is voorbeelde van plat karakters, want hulle is eendimensioneel en daar vind geen karakterontwikkeling in hulle plaas nie.',
          en:
            'The most important secondary characters are Mlenzana, Zuziwe, Thandi and Mvula. Likwezi, Malandlela, the young Zolile, Nomsa, Sipho and the Gumedes are also secondary characters. The young Zolile (who died) and Sipho are examples of flat characters, because they are one-dimensional and no character development takes place in them.',
        },
        {
          id: 'ka-h4',
          type: 'heading',
          level: 2,
          text: 'Verhoudings',
          en: 'Relationships',
        },
        {
          id: 'ka-l3',
          type: 'list',
          text: [
            'Amazolo se verhouding met die kind word al hoe sterker nadat sy hom oorspronklik nie wou hê nie.',
            'Amazolo se verhouding met Mlenzana verbeter wanneer hy haar en die kind vind, maar sy is teleurgesteld toe hy nie soos belowe vir haar hofsaak terugkom nie.',
            'Thandi en Mvula se verhouding versleg geleidelik omdat hulle waardes verskil — die tradisionele waardes is vir hom belangrik, maar sy heg geen waarde daaraan nie.',
            'Amazolo en Zuziwe se verhouding is belangrik, want Zuziwe ondersteun Amazolo deur dik en dun.',
            'Zolile en Mvula se verhouding is van die begin af sterker as sy verhouding met Thandi. Dit is ’n tipiese pa-seun-verhouding.',
          ],
          en: [
            'Amazolo’s relationship with the child grows ever stronger after she originally did not want him.',
            'Amazolo’s relationship with Mlenzana improves when he finds her and the child, but she is disappointed when he does not return for her court case as promised.',
            'Thandi and Mvula’s relationship deteriorates gradually because their values differ — traditional values are important to him, but she attaches no value to them.',
            'Amazolo and Zuziwe’s relationship is important, because Zuziwe supports Amazolo through thick and thin.',
            'Zolile and Mvula’s relationship is from the start stronger than his relationship with Thandi. It is a typical father-son relationship.',
          ],
        },
        {
          id: 'ka-h5',
          type: 'heading',
          level: 2,
          text: 'Metodes van karakterisering',
          en: 'Methods of characterisation',
        },
        {
          id: 'ka-l4',
          type: 'list',
          text: [
            'Beskrywing: die verteller of ’n ander karakter beskryf die persoon — byvoorbeeld die beskrywing van Amazolo wat toon hoe belangrik tradisies vir haar is (bladsy 2).',
            'Handeling: ’n mens leer karakters dikwels in ’n krisissituasie ken — Mlenzana se dapperheid en Sipho se gewelddadigheid blyk duidelik uit hulle konfrontasie (bladsy 65–66).',
            'Dialoog: wanneer Zolile na Amazolo in Eshowe gaan, is sy liefde vir haar duidelik in sy woorde (bladsy 130).',
          ],
          en: [
            'Description: the narrator or another character describes the person — for example the description of Amazolo that shows how important traditions are to her (page 2).',
            'Action: one often comes to know characters in a crisis situation — Mlenzana’s bravery and Sipho’s violence emerge clearly from their confrontation (pages 65–66).',
            'Dialogue: when Zolile goes to Amazolo in Eshowe, his love for her is clear in his words (page 130).',
          ],
        },
      ],
    },

    /* ── 4. Themes ──────────────────────────────────────────────────────── */
    {
      id: 'afr-die-kind-temas',
      chapterId: 'afr-die-kind',
      subjectId: 'afrikaans',
      title: 'Temas en motiewe',
      titleEn: 'Themes and motifs',
      minutes: 14,
      blocks: [
        {
          id: 'te-h1',
          type: 'heading',
          level: 2,
          text: 'Identiteit — die sentrale tema',
          en: 'Identity — the central theme',
        },
        {
          id: 'te-p1',
          type: 'paragraph',
          text:
            'In Die kind is die kwessie van identiteit (om ’n naam te hê) sentraal. Die kind het gedurende sy eerste ses jaar nie ’n naam gehad nie. Hierdie tema loop soos ’n draad deur die hele roman.',
          en:
            'In Die kind the question of identity (having a name) is central. The child did not have a name during his first six years. This theme runs like a thread through the entire novel.',
        },
        {
          id: 'te-l1',
          type: 'list',
          text: [
            'In hoofstuk 1 vra die vroedvrou wat die kind se naam is. Amazolo antwoord dat hy nie ’n naam het nie en gegee moet word aan iemand wat vir hom ’n naam wil gee. (bladsy 5)',
            'Amazolo wil nog altyd nie vir die kind ’n naam gee nie, want “dan sal hy iemand wees, en hy is nie”. (bladsy 14)',
            'Wanneer die ander kinders die kind “Ongenagama” (die een sonder naam) noem en hom spot, vra hy vir Amazolo hoekom hy nie ’n naam het nie. (bladsy 19)',
            'Wanneer die kind by Thandi en Mvula bly, raak hy gewoond daaraan om ’n naam te hê. (bladsy 86)',
            'Nadat Zolile deur die thomba-seremonie is en ’n nuwe naam (Mehlw’e-ntombi) gekry het, lag die kinders by die skool oor sy nuwe naam omdat dit “meisie-oë” beteken. (bladsy 105)',
          ],
          en: [
            'In chapter 1 the midwife asks what the child’s name is. Amazolo answers that he does not have a name and must be given to someone who wants to give him a name. (page 5)',
            'Amazolo still does not want to give the child a name, because “then he will be someone, and he is not”. (page 14)',
            'When the other children call the child “Ongenagama” (the one without a name) and mock him, he asks Amazolo why he does not have a name. (page 19)',
            'When the child lives with Thandi and Mvula, he becomes used to having a name. (page 86)',
            'After Zolile has been through the thomba ceremony and received a new name (Mehlw’e-ntombi), the children at school laugh at his new name because it means “girl’s eyes”. (page 105)',
          ],
        },
        {
          id: 'te-q1',
          type: 'quote',
          text:
            '“Nee. Jy het goed gedoen om hom naam te gee. Hy is wie hy is — ’n mens kan ’n olifant nie groter maak met ’n nuwe naam nie.” (bladsy 132)',
          en:
            '“No. You did well to give him a name. He is who he is — one cannot make an elephant bigger with a new name.” (page 132)',
        },
        {
          id: 'te-h2',
          type: 'heading',
          level: 2,
          text: 'Die konflik tussen die tradisionele en die moderne',
          en: 'The conflict between the traditional and the modern',
        },
        {
          id: 'te-l2',
          type: 'list',
          text: [
            'Mlenzana wil na Johannesburg gaan om geld te maak en nuwe dinge te ervaar, terwyl Amazolo in Msinga wil bly en tradisioneel wil leef. (bladsy 13, 18, 19, 57, 58)',
            'Thandi neem Mvula kwalik dat die tradisionele gebruike vir hom belangrik is, terwyl Mvula nie kan verstaan dat die tradisionele min waarde vir Thandi het nie. (bladsy 18, 20)',
            'Mvula wil hê Zolile moet soos hy boer, maar Zolile wil in die medisyne gaan studeer. (bladsy 106)',
          ],
          en: [
            'Mlenzana wants to go to Johannesburg to make money and experience new things, while Amazolo wants to stay in Msinga and live traditionally. (pages 13, 18, 19, 57, 58)',
            'Thandi blames Mvula for the fact that traditional customs are important to him, while Mvula cannot understand that the traditional has little value for Thandi. (pages 18, 20)',
            'Mvula wants Zolile to farm like him, but Zolile wants to go and study medicine. (page 106)',
          ],
        },
        {
          id: 'te-h3',
          type: 'heading',
          level: 2,
          text: 'Ander universele temas',
          en: 'Other universal themes',
        },
        {
          id: 'te-p2',
          type: 'paragraph',
          text:
            'Ander universele temas soos liefde en verlore liefde, waarheid en leuens, eensaamheid en verlies is ook belangrik in die roman.',
          en:
            'Other universal themes such as love and lost love, truth and lies, loneliness and loss are also important in the novel.',
        },
        {
          id: 'te-h4',
          type: 'heading',
          level: 2,
          text: 'Konflik',
          en: 'Conflict',
        },
        {
          id: 'te-p3',
          type: 'paragraph',
          text:
            'Konflik is sentraal in Die kind. Dit dryf die verhaal voort, dra by tot die opbou van spanning, en gee karakters geleentheid om te toon wie en wat hulle werklik is.',
          en:
            'Conflict is central in Die kind. It drives the story forward, contributes to the building of tension, and gives characters the opportunity to show who and what they really are.',
        },
        {
          id: 'te-l3',
          type: 'list',
          text: [
            'Konflik tussen karakters: Mvula en Thandi stry omdat die tradisionele Zoeloe-kleredrag vir hom belangrik is, maar sy dit as “barbaars” beskou. (bladsy 18)',
            'Konflik tussen karakters: Sipho slaan vir Mlenzana met ’n kierie en stoot hom van die krans af. (bladsy 66 en 85)',
            'Innerlike konflik: Mvula verkeer in ’n tweestryd oor of hy die bul wat sy seun doodgemaak het, moet skiet of nie. (bladsy 30, 31)',
            'Innerlike konflik: alhoewel Amazolo naby aan die kind wil wees, besluit sy ter wille van hom om Msinga te verlaat. (bladsy 103)',
          ],
          en: [
            'Conflict between characters: Mvula and Thandi argue because traditional Zulu dress is important to him, but she regards it as “barbaric”. (page 18)',
            'Conflict between characters: Sipho beats Mlenzana with a knobkerrie and pushes him off the cliff. (pages 66 and 85)',
            'Inner conflict: Mvula is torn over whether or not he should shoot the bull that killed his son. (pages 30, 31)',
            'Inner conflict: although Amazolo wants to be close to the child, she decides for his sake to leave Msinga. (page 103)',
          ],
        },
      ],
    },

    /* ── 5. Technique ───────────────────────────────────────────────────── */
    {
      id: 'afr-die-kind-tegniek',
      chapterId: 'afr-die-kind',
      subjectId: 'afrikaans',
      title: 'Verteltegniek en struktuur',
      titleEn: 'Narrative technique and structure',
      minutes: 13,
      blocks: [
        {
          id: 'tg-h1',
          type: 'heading',
          level: 2,
          text: 'Vertellersperspektief',
          en: 'Narrator perspective',
        },
        {
          id: 'tg-p1',
          type: 'paragraph',
          text:
            'In Die kind word ’n derdepersoonsverteller gebruik. Dit beteken dat die leser die gedagtes en gevoelens van verskillende karakters in verskillende tye en op verskillende plekke leer ken. Omdat die kind en Amazolo die hoofkarakters is, word die verhaal dikwels vertel soos wat hulle dit waarneem en tree hulle dus dikwels as fokalisator op.',
          en:
            'In Die kind a third-person narrator is used. This means that the reader comes to know the thoughts and feelings of different characters at different times and in different places. Because the child and Amazolo are the main characters, the story is often told as they perceive it and they therefore often act as focaliser.',
        },
        {
          id: 'tg-l1',
          type: 'list',
          text: [
            'Thandi is die fokalisator wanneer sy ’n plan bedink om die kind van Amazolo af te rokkel. (bladsy 32)',
            'Die leser beleef die aanval van die honde vanuit Amazolo se gesigspunt; sy is dus die fokalisator. (bladsy 45)',
            'Mlenzana is die fokalisator wanneer hy medisyne by die veldhospitaal gaan soek. (bladsy 53)',
            'Die kind is die fokalisator wanneer daar beskryf word hoe hy daaroor voel om by Thandi en Mvula te bly. (bladsy 86)',
            'Mvula is die fokalisator wanneer hy vir Zolile by die skool gaan haal. (bladsy 104)',
          ],
          en: [
            'Thandi is the focaliser when she devises a plan to lure the child away from Amazolo. (page 32)',
            'The reader experiences the attack of the dogs from Amazolo’s point of view; she is therefore the focaliser. (page 45)',
            'Mlenzana is the focaliser when he goes to look for medicine at the field hospital. (page 53)',
            'The child is the focaliser when it is described how he feels about living with Thandi and Mvula. (page 86)',
            'Mvula is the focaliser when he fetches Zolile from school. (page 104)',
          ],
        },
        {
          id: 'tg-h2',
          type: 'heading',
          level: 2,
          text: 'Tydhantering',
          en: 'Handling of time',
        },
        {
          id: 'tg-p2',
          type: 'paragraph',
          text:
            'Die verhaal word hoofsaaklik chronologies vertel, maar daar is terugflitse en tydspronge. ’n Voorbeeld van ’n terugflits is wanneer Amazolo terugdink aan hoe Mlenzana en sy vriende haar iqhugwane gebou het (bladsy 2). ’n Tydsprong kom voor tussen hoofstuk 6 en hoofstuk 7.',
          en:
            'The story is told mainly chronologically, but there are flashbacks and time leaps. An example of a flashback is when Amazolo thinks back to how Mlenzana and his friends built her iqhugwane (page 2). A time leap occurs between chapter 6 and chapter 7.',
        },
        {
          id: 'tg-callout1',
          type: 'callout',
          text:
            'Onthou vir die eksamen: in Die kind is die verteltyd 134 bladsye en die vertelde tyd is tussen 20 en 25 jaar — van die jaar voor die kind se geboorte tot wanneer Zolile op universiteit is.',
          en:
            'Remember for the exam: in Die kind the narrating time is 134 pages and the narrated time is between 20 and 25 years — from the year before the child’s birth until Zolile is at university.',
        },
        {
          id: 'tg-h3',
          type: 'heading',
          level: 2,
          text: 'Bou van die verhaal',
          en: 'Structure of the story',
        },
        {
          id: 'tg-p3',
          type: 'paragraph',
          text:
            'Die gebeurtenis wat die lewens van die karakters kompliseer en wat die verhaal laat “loop”, is Thandi se besluit om die kind van Amazolo terug te eis. Dit is die einde van die inleiding. Die verhaal bou op tot die onvermydelike krisis wanneer Zolile besef wie sy ouers is, en die hoogtepunt wanneer hy vir Amazolo gaan haal. In die ontknoping gaan haal Zolile Mlenzana se beendere.',
          en:
            'The event that complicates the characters’ lives and sets the story in motion is Thandi’s decision to reclaim the child from Amazolo. That is the end of the introduction. The story builds up to the inevitable crisis when Zolile realises who his parents are, and the climax when he goes to fetch Amazolo. In the resolution Zolile fetches Mlenzana’s bones.',
        },
        {
          id: 'tg-h4',
          type: 'heading',
          level: 3,
          text: 'Dramatiese ironie',
          en: 'Dramatic irony',
        },
        {
          id: 'tg-p4',
          type: 'paragraph',
          text:
            'Een voorbeeld van dramatiese ironie in Die kind is wanneer die leser weet dat Mlenzana dood is, maar die ander karakters (behalwe Sipho) dit nie weet nie. Ons wonder dan hoe Amazolo en Zolile gaan reageer as hulle van Mlenzana se dood hoor, en dit skep spanning en afwagting.',
          en:
            'One example of dramatic irony in Die kind is when the reader knows that Mlenzana is dead, but the other characters (except Sipho) do not know it. We then wonder how Amazolo and Zolile will react when they hear of Mlenzana’s death, and this creates tension and anticipation.',
        },
        {
          id: 'tg-h5',
          type: 'heading',
          level: 2,
          text: 'Intrige en storie',
          en: 'Plot and story',
        },
        {
          id: 'tg-p5',
          type: 'paragraph',
          text:
            'Alhoewel die verhaal meestal chronologies vertel word, is daar gevalle waar die intrige en die storie verskil. Byvoorbeeld: die verhaal begin wanneer Amazolo swanger en sonder ’n man in haar lewe is, maar die leser kom eers in hoofstuk 8 agter waarom Mlenzana uit Msinga weg is.',
          en:
            'Although the story is told mostly chronologically, there are cases where the plot and the story differ. For example: the story begins when Amazolo is pregnant and without a man in her life, but the reader only finds out in chapter 8 why Mlenzana left Msinga.',
        },
      ],
    },

    /* ── 6. Exam preparation ────────────────────────────────────────────── */
    {
      id: 'afr-die-kind-eksamen',
      chapterId: 'afr-die-kind',
      subjectId: 'afrikaans',
      title: 'Eksamenvoorbereiding',
      titleEn: 'Exam preparation',
      minutes: 12,
      blocks: [
        {
          id: 'ek-h1',
          type: 'heading',
          level: 2,
          text: 'Hoekom is Die kind vandag nog relevant?',
          en: 'Why is Die kind still relevant today?',
        },
        {
          id: 'ek-p1',
          type: 'paragraph',
          text:
            'Daar is verskeie redes waarom Die kind ’n relevante roman bly ten spyte van die feit dat die gebeure in die vorige eeu in ’n landelike gebied plaasvind. Hierdie vraag word dikwels in die eksamen gevra.',
          en:
            'There are various reasons why Die kind remains a relevant novel despite the fact that the events take place in the previous century in a rural area. This question is often asked in the exam.',
        },
        {
          id: 'ek-l1',
          type: 'list',
          text: [
            'Die kind het gedurende sy eerste ses jaar nie ’n naam gehad nie. Dit laat ons wonder wat ons eie name vir ons beteken en hoe belangrik ons naam ten opsigte van ons identiteit is.',
            'Soos die kind in die roman moes uitwerk wie hy is, moet ons elkeen nadink oor wat tot ons identiteit bydra en wat sin aan ons lewens gee.',
            'Al is die kind van kleins af gespot, het hy nie toegelaat dat dit sy selfbeeld aantas nie. Dit laat ons besef hoe belangrik dit is om in onsself te glo.',
            'Omdat Amazolo geglo het dat Mlenzana haar verlaat het, wou sy nie die kind hê nie. Dit laat ons respek voel vir mense wat doen wat hulle glo reg is — maar ook wonder of dit altyd die beste is om net jou eie kop te volg.',
            'Thandi het geen begrip vir mense wat tradisionele gebruike onderhou nie. Gaan ons, soos Thandi, onverdraagsaam wees, of gaan ons begrip hê dat mense verskillende keuses maak?',
            'Toe Sipho op Amazolo afkom, het hy gedink dit is sy reg om teen haar wil seks met haar te hê. Dit laat ons nadink oor die probleem van verkragting.',
            'Thandi het groot lyding vir Amazolo veroorsaak; tog ontvang Amazolo haar met waardigheid. Dit laat ons besef hoe belangrik dit is om te erken wanneer ons verkeerd was, en om bereid te wees om te vergewe.',
          ],
          en: [
            'The child did not have a name during his first six years. This makes us wonder what our own names mean to us and how important our name is with respect to our identity.',
            'Just as the child in the novel had to work out who he is, each of us must think about what contributes to our identity and what gives meaning to our lives.',
            'Although the child was mocked from a young age, he did not allow it to damage his self-image. This makes us realise how important it is to believe in ourselves.',
            'Because Amazolo believed that Mlenzana had left her, she did not want the child. This makes us feel respect for people who do what they believe is right — but also wonder whether it is always best to follow only your own mind.',
            'Thandi has no understanding for people who maintain traditional customs. Will we, like Thandi, be intolerant, or will we have understanding that people make different choices?',
            'When Sipho came upon Amazolo, he thought it was his right to have sex with her against her will. This makes us think about the problem of rape.',
            'Thandi caused Amazolo great suffering; yet Amazolo receives her with dignity. This makes us realise how important it is to admit when we were wrong, and to be willing to forgive.',
          ],
        },
        {
          id: 'ek-h2',
          type: 'heading',
          level: 2,
          text: 'Wat word dikwels in die eksamen gevra?',
          en: 'What is often asked in the exam?',
        },
        {
          id: 'ek-l2',
          type: 'list',
          text: [
            'Bespreek die tema van identiteit en verduidelik hoe die naam-motief deur die roman loop.',
            'Verduidelik die titel en motiveer of dit ’n doeltreffende titel is.',
            'Bespreek Amazolo as ronde karakter en wys op haar karakterontwikkeling.',
            'Verduidelik die konflik tussen die tradisionele en die moderne aan die hand van voorbeelde.',
            'Wie is die fokalisator in ’n gegewe uittreksel, en watter effek het dit?',
            'Onderskei tussen verteltyd en vertelde tyd in die roman.',
            'Identifiseer die metode van karakterisering wat in ’n uittreksel gebruik word.',
            'Verduidelik ’n voorbeeld van dramatiese ironie en die effek daarvan.',
          ],
          en: [
            'Discuss the theme of identity and explain how the name motif runs through the novel.',
            'Explain the title and motivate whether it is an effective title.',
            'Discuss Amazolo as a round character and point out her character development.',
            'Explain the conflict between the traditional and the modern using examples.',
            'Who is the focaliser in a given extract, and what effect does this have?',
            'Distinguish between narrating time and narrated time in the novel.',
            'Identify the method of characterisation used in an extract.',
            'Explain an example of dramatic irony and its effect.',
          ],
        },
        {
          id: 'ek-callout2',
          type: 'callout',
          text:
            'Wenk: leer die bladsyverwysings saam met die feite. In kontekstuele vrae kry jy punte vir ’n spesifieke voorbeeld uit die teks, nie net vir ’n algemene stelling nie.',
          en:
            'Tip: learn the page references together with the facts. In contextual questions you get marks for a specific example from the text, not just for a general statement.',
        },
        {
          id: 'ek-h3',
          type: 'heading',
          level: 2,
          text: 'Wat moet jy verstaan en voel?',
          en: 'What should you understand and feel?',
        },
        {
          id: 'ek-p2',
          type: 'paragraph',
          text:
            'Die kind is uiteindelik ’n roman oor ’n moeder se liefde wat eers verwerping lyk. Amazolo se besluit om haar kind af te staan is nie koudheid nie, maar die mees onselfsugtige daad in die boek: sy gee hom ’n lewe wat sy hom nie kan gee nie. Wanneer Zolile haar uiteindelik gaan haal, word daardie offer erken en herstel.',
          en:
            'Die kind is ultimately a novel about a mother’s love that at first looks like rejection. Amazolo’s decision to give up her child is not coldness, but the most unselfish act in the book: she gives him a life she cannot give him. When Zolile finally goes to fetch her, that sacrifice is acknowledged and restored.',
        },
        {
          id: 'ek-p3',
          type: 'paragraph',
          text:
            'Die boodskap is dat identiteit nie in ’n naam alleen lê nie, maar in wie ’n mens kies om te wees. “’n Mens kan ’n olifant nie groter maak met ’n nuwe naam nie” — maar ’n naam gee wel erkenning, en erkenning is wat die kind die hele roman lank soek.',
          en:
            'The message is that identity does not lie in a name alone, but in who a person chooses to be. “One cannot make an elephant bigger with a new name” — but a name does give recognition, and recognition is what the child seeks throughout the entire novel.',
        },
      ],
    },
  ],
};
