import type { Chapter } from '@/lib/types';

/* ═══════════════════════════════════════════════════════════════════════════
 HISTORY — Grade 11 Term 3
 ═══════════════════════════════════════════════════════════════════════════ */

// ─── Chapter 1: Britain Takes Control of the Cape ────────────────────────

export const HISTORY_BRITAIN_CAPE: Chapter = {
 id: 'hist-britain-cape',
 subjectId: 'history',
 title: 'Britain Takes Control of the Cape',
 summary: 'From Khoisan origins and Dutch settlement to British rule, slavery, and the Great Trek.',

 lessons: [
 // ── Lesson 1: The Indigenous Population ──
 {
 id: 'hist-brit-cape-khoisan',
 chapterId: 'hist-britain-cape',
 subjectId: 'history',
 title: 'Unit 1: The Indigenous Population at the Cape',
 minutes: 20,
 blocks: [
 { id: 'bc-k-h1', type: 'heading', level: 2, text: 'The Khoikhoi and San' },
 {
 id: 'bc-k-p1', type: 'paragraph',
 text: 'When the Dutch arrived from Holland at the Cape in 1652, the indigenous population had already been living in that area for thousands of years. Archaeologists have found evidence that humans occupied the Cape tens of thousands of years ago. San rock art is part of the evidence that the San lived in southern Africa tens of thousands of years ago.',
 },
 {
 id: 'bc-k-p2', type: 'paragraph',
 text: 'The word Khoisan is used to describe two groups: the Khoikhoi and the San. The San — named Bushmen by the settlers — were nomadic small groups of hunter-gatherers. They had no cattle and lived off the veld. The Khoikhoi herded cattle and sheep and lived in villages under the authority of a chief or headman. The Dutch gave them the insulting name \'Hottentot.\'',
 },
 {
 id: 'bc-k-p3', type: 'paragraph',
 text: 'The San found many aspects of the Khoikhoi way of life strange and difficult to understand. The Khoikhoi came into conflict with the San over game hunting, because although they were herders, they also depended on hunting for meat, and the Khoikhoi slaughtered their cattle only for special occasions. Also, the Khoikhoi came to see the San as the enemy as the San raided Khoikhoi livestock, leading to ongoing conflict, and raids and counter-raids between the two groups.',
 },
 {
 id: 'bc-k-p4', type: 'paragraph',
 text: 'However, there is evidence of trade between the two groups as well as intermarriage. Many San were absorbed into the Khoikhoi communities. Some joined the Khoikhoi as servants, hunters and soldiers. Others, wanting to avoid conflict, fled far away to mountain and desert areas in Namibia and western Botswana.',
 },
 { id: 'bc-k-h2', type: 'heading', level: 2, text: '1.2 The Arrival of the Dutch' },
 {
 id: 'bc-k-p5', type: 'paragraph',
 text: 'In 1652, Jan van Riebeeck arrived at the Cape to establish a refreshment station for the Dutch East India Company (VOC), and settled on land used by the Khoisan. This marked the beginning of the dispossession of indigenous South African communities by white settlers — a process that was to continue, in various forms, and involving various groups, for more than 300 years.',
 },
 {
 id: 'bc-k-p6', type: 'paragraph',
 text: 'In the early years of the Dutch settlement, the Dutch relied heavily on the Khoisan for their produce and their knowledge of the area. But as more and more settlers arrived, the Dutch started to take over more Khoisan-occupied land. The Dutch set up a hospital for sick sailors, built a fort for their troops, and also gave Dutch farmers land to grow wheat and other crops.',
 },
 {
 id: 'bc-k-src-a', type: 'callout',
 text: 'Primary Source A — Jan van Riebeeck\'s diary, 1652: "[We] observed that on the ascent of Table Mountain the pasture was everywhere crowded with cattle and sheep like grass on the fields ... and the Saldaniers [a Khoi people] ... lay in thousands about Salt River with their cattle in countless numbers, having indeed grazed 2000 sheep and cattle within half a cannon-shot of our fort." (Quoted in Francis Wilson, Dinosaurs, Diamonds and Democracy)',
 },
 {
 id: 'bc-k-src-b', type: 'callout',
 text: 'Primary Source B — A Khoisan leader, 1799: "We are fighting to restore the country which the Dutch have taken from our fathers, and we have nothing more to ask ... Has not the Great Spirit ... given plenty of grassroots and berries and grasshoppers for our use; and until the Dutch destroyed them, an abundance of wild animals to hunt? And will they not return and multiply when these destroyers are gone?" (Quoted in Bam J., My New World, Gariep, 2002)',
 },
 { id: 'bc-k-h3', type: 'heading', level: 2, text: '1.3 Increase in Settler Communities' },
 {
 id: 'bc-k-p7', type: 'paragraph',
 text: 'In 1688, a large group of French Huguenots arrived at the Cape. The Huguenots were French Protestants and were persecuted in France for their religious beliefs. Thousands of Huguenots fled to settle in countries where they could enjoy religious freedom. At the Cape, they were welcomed by the Dutch, as they were experienced craftsmen and farmers. By the mid-18th century, the Dutch and French settlers in the Cape had become successful wine and wheat farmers.',
 },
 {
 id: 'bc-k-p8', type: 'paragraph',
 text: 'The settler community grew quickly. Many settler families started moving into the interior in search of more land. They became known as trekboers. The Dutch East India Company granted trekboers who wanted to move eastwards a big farm in exchange for a small yearly payment. The trekboers regarded these farms as their own property. Farms were bought, sold and inherited. In trekboer society, it was very important that every adult male should own a farm. All the sons in a family inherited a portion of their father\'s land.',
 },
 {
 id: 'bc-k-p9', type: 'paragraph',
 text: 'Large areas were turned into settler farms. African farmers were not settled in the Western Cape as their crops needed summer rainfall in order to grow. So, as the trekboers moved further east and further northeast, the land they moved into was not empty. Many different communities were already settled in, or were moving around the southern African interior.',
 },
 { id: 'bc-k-h4', type: 'heading', level: 2, text: '1.4 Attitudes to Land Ownership' },
 {
 id: 'bc-k-p10', type: 'paragraph',
 text: 'Before Europeans arrived in southern Africa, indigenous people had no concept of private land ownership. In African communities, land was there for the use of all the people. You could not buy land, or sell a part of your land to your neighbour. Chiefs would allocate land to the heads of families for planting crops, who would then divide that land between their family members. Although they did not own the land, it was accepted that once land was granted to a family, they had the right to live there forever, and pass it on to their children. In those societies, once granted, land rights were not easily taken away.',
 },
 {
 id: 'bc-k-p11', type: 'paragraph',
 text: 'In addition to the land allocated for planting, each community also had communal land for grazing. All members of the community could use this land for their livestock. When land became overgrazed, the livestock would be moved to a new area. This system of land use is known as communal tenure; the whole community has access to the land.',
 },
 {
 id: 'bc-k-p12', type: 'paragraph',
 text: 'When European settlers arrived in southern Africa, they introduced the idea that land could be privately owned. This led to bitter conflict because it was so different from the concept of communal tenure.',
 },
 {
 id: 'bc-k-defs', type: 'definitions',
 rows: [
 { term: 'Khoisan', meaning: 'Collective term for the Khoikhoi (herders) and San (hunter-gatherers), the original inhabitants of the Cape.' },
 { term: 'Raid', meaning: 'Attack suddenly to steal something.' },
 { term: 'Dispossession', meaning: 'Having something taken away from you.' },
 { term: 'Persecuted', meaning: 'Being treated cruelly and unfairly.' },
 { term: 'Allocate', meaning: 'To give a particular amount of something to someone.' },
 { term: 'Communal tenure', meaning: 'The right to stay in/use a piece of land shared by a group of people who live together.' },
 { term: 'Trekboers', meaning: 'Semi-nomadic Boer pastoralists who migrated into the interior from the Cape Colony in search of more land.' },
 ],
 },
 ],
 },
 // ── Lesson 2: Changing Labour Patterns ──
 {
 id: 'hist-brit-cape-labour',
 chapterId: 'hist-britain-cape',
 subjectId: 'history',
 title: 'Unit 2: Changing Labour Patterns at the Cape',
 minutes: 20,
 blocks: [
 { id: 'bc-l-h1', type: 'heading', level: 2, text: '2.1 Settler Need for Labour' },
 {
 id: 'bc-l-p1', type: 'paragraph',
 text: 'The San and the Khoikhoi tried to resist the settlers. But by the middle of the 18th century they had lost almost all their land, their water sources, most of their livestock and their independence. Their communities were scattered: some groups ended up in the northern Cape, others as far east as the Fish River. Those who stayed in the Cape had no choice but to work for the white settlers in exchange for the right to stay on the land and keep some livestock. During raids on hunter-gatherer communities, the trekboers also captured children to work as domestic servants and farm labourers.',
 },
 {
 id: 'bc-l-p2', type: 'paragraph',
 text: 'As more and more settlers started farming, their need for labour hugely increased. The Dutch East India Company began to import slaves into the Cape. Although a few of the first slaves came from West Africa, most slaves came from societies around the Indian Ocean Basin. Slaves came from Madagascar, Mozambique and the East African coast, from India and the islands of the East Indies. Most slaves were used as farm labourers, but they also worked as domestic servants and craftsmen. By the mid-18th century, there were more slaves than settlers in the Cape.',
 },
 { id: 'bc-l-h2', type: 'heading', level: 2, text: '2.2 People as Private Property' },
 {
 id: 'bc-l-p3', type: 'paragraph',
 text: 'The form of slavery used in the Cape Colony was chattel slavery, the same as that of the transatlantic slave trade from West Africa to America. Chattel slaves were taken against their will from their birth country to different places, where they were sold. Slaves could be resold, as if they were property.',
 },
 {
 id: 'bc-l-p4', type: 'paragraph',
 text: 'The Dutch and French settlers at the Cape did not question whether slavery was right or wrong, just or unjust. For them, having slaves was a necessity, and a right. They knew that it would cost them a lot of money if slaves were to be freed. The feelings and interests of the slaves did not matter at all. It was only with the rise of the abolitionist movement (people who campaigned for the end of slavery) in Western Europe in the 19th century that people at the Cape started to think about a world without slavery.',
 },
 {
 id: 'bc-l-src-e', type: 'callout',
 text: 'Primary Source E — W.S. van Ryneveld, a senior Dutch government official: "However [likely to cause damage] slavery of itself may be to the morals and industry of the inhabitants, still keeping of slaves is now become... a necessary evil."',
 },
 {
 id: 'bc-l-src-g', type: 'callout',
 text: 'Primary Source G — Mrs Katie Jacobs, interviewed by Banier newspaper in 1910 about her experience as a slave in the 1800s: "I was born on Mr M\'s farm, near Kalabaskraal ... my father was a Malagasy and my mother a Cape woman. I began to work when still very young. When my baas, through old age, was unable to farm any more, he shared most of his land and goods among his sons ... I and some cattle went to another son at Nortje; my mother and some more cattle went to another son at French Hoek. From that day I never saw my mother again. I often longed to see her, but my baas always refused my request to visit her. I think he was afraid I would not return."',
 },
 {
 id: 'bc-l-defs', type: 'definitions',
 rows: [
 { term: 'Chattel slavery', meaning: 'A form of slavery where people are treated as personal possessions that can be bought, sold, or passed on like property.' },
 { term: 'Abolitionist', meaning: 'A person who campaigns for the end of slavery.' },
 ],
 },
 ],
 },
 // ── Lesson 3: British Occupation & Abolition ──
 {
 id: 'hist-brit-cape-british',
 chapterId: 'hist-britain-cape',
 subjectId: 'history',
 title: 'Units 2.3–2.7: British Occupation and Abolition of Slavery',
 minutes: 25,
 blocks: [
 { id: 'bc-b-h1', type: 'heading', level: 2, text: '2.3 Events in Europe' },
 {
 id: 'bc-b-p1', type: 'paragraph',
 text: 'After the French Revolution in 1789 and the execution of Louis XVI in 1793, France declared itself a republic and stated: "All governments are our enemies, all people our friends." The French encouraged other European nations to rise up against their leaders and declared war on various countries, including Britain and the Netherlands. This period, from 1793 to 1799, was known as the Revolutionary Wars. France conquered the Netherlands (Holland) in 1795. The British were aware of the strategic importance of the Cape on the profitable trade route to the East, and did not want to lose it to the French. They invaded and seized the Cape from the Dutch in 1795.',
 },
 { id: 'bc-b-h2', type: 'heading', level: 2, text: '2.4 British Occupation of the Cape' },
 {
 id: 'bc-b-p2', type: 'paragraph',
 text: 'Although the Cape was briefly returned to the Dutch in 1803 after the Treaty of Amiens, three years later Britain and France were again at war and the British once more occupied the Cape, fearing it would fall into the hands of the French. After the Treaty of Vienna in 1814 (marking peace between the nations of Europe), the Cape became a British Crown Colony.',
 },
 {
 id: 'bc-b-p3', type: 'paragraph',
 text: 'The British occupation was very different from that of the Dutch. The Dutch were traders and farmers and wanted land for personal use. The British, however, saw colonisation as part of a greater plan. Although their main interests were financial, British expansion was also about political dominance and control. The British were expanding their empire throughout the world.',
 },
 {
 id: 'bc-b-src-h', type: 'callout',
 text: 'Primary Source H — Reader\'s Digest Illustrated History, p. 94: "Motivated by imperialism, deceit, greed, prejudice and humanitarianism, the colony\'s new rulers would play a leading role in constructing one of the world\'s most troubled societies."',
 },
 { id: 'bc-b-h3', type: 'heading', level: 2, text: '2.5 Britain as a Slave-Trading Society' },
 {
 id: 'bc-b-p4', type: 'paragraph',
 text: 'By the end of the 18th century, Britain was the largest trader of slaves from Africa. The transatlantic slave trade played a major role in stimulating the Industrial Revolution and in particular Britain\'s cotton industry. Britain exported cloth, iron goods and guns to West Africa in exchange for slaves, who were then sent to work on cotton plantations in the Caribbean and America. The slave trade generated money that Britain was then able to invest in new industries and use to develop industrial towns and harbours like Liverpool.',
 },
 {
 id: 'bc-b-src-i', type: 'callout',
 text: 'Primary Source I — Eric Williams, Capitalism and Slavery: "Black slavery was the engine that propelled Europe\'s rise to global economic dominance. The European conquest and settlement of the New World depended on the enslavement of millions of black slaves, who helped build up the capital that financed the Industrial Revolution ... By 1750, there was hardly a trading or a manufacturing town which was not in some way connected with the triangular [slave] trade or direct colonial trade."',
 },
 { id: 'bc-b-h4', type: 'heading', level: 2, text: '2.6 Abolition of Slavery' },
 {
 id: 'bc-b-p5', type: 'paragraph',
 text: 'However, by now, the British were starting to question the practice of slavery and their own involvement in slave trading. Historians differ on why Britain abolished slavery in 1807: whether they were motivated by humanitarian or economic reasons. Many people in Britain believed that slavery was cruel and inhumane. The ideals of the French Revolution — liberty, equality, fraternity — were still fresh, and there was a growing awareness of human rights issues. Many people campaigned for an end to slavery on religious grounds. By the end of the 18th century, the Abolitionist Movement in Britain had massive popular support.',
 },
 {
 id: 'bc-b-p6', type: 'paragraph',
 text: 'However, economic factors also played an important part in the decision to end slavery. By the end of the 18th century, Britain was becoming industrialised, and the industrialisation process was accompanied by the development of a market economy. A market economy needed people who earned wages so that they would buy the goods that were produced. Slaves did not earn wages, so it made economic sense to free slaves to become wage earners. Many people also believed that people would work harder if they worked for themselves. Also, it was more efficient and cheaper to pay free people to do work than to buy slaves, give them accommodation and feed them.',
 },
 {
 id: 'bc-b-abolutionist-sources', type: 'definitions',
 rows: [
 { term: 'Source K — Adam Smith (Scottish economist)', meaning: '"From the experience of all ages and nations, I believe, that the work done by free men comes cheaper in the end than the work performed by slaves. Whatever work he does, beyond what is sufficient to purchase his own maintenance, can be squeezed out of him by violence only, and not by any interest of his own."' },
 { term: 'Source L — William Wilberforce (British politician who led the abolition movement)', meaning: '"So enormous, so dreadful, so [impossible to remedy] did the [Slave] Trade\'s wickedness appear that my own mind was completely made up for Abolition. Let the consequences be what they would, I from this time determined that I would never rest until I had effected its abolition."' },
 { term: 'Source M — Thomas Clarkson (British anti-slavery campaigner)', meaning: '"Neither can men, by the same principles, be considered as lands, goods, or houses, among possessions. It is necessary that all property should be inferior to its possessor. But how does the slave differ from his master, but by chance?"' },
 ],
 },
 { id: 'bc-b-h5', type: 'heading', level: 2, text: '2.7 The Ending of Slavery' },
 {
 id: 'bc-b-p7', type: 'paragraph',
 text: 'The abolition of the slave trade in 1807 in Britain meant that there was a ban on importing new slaves to the colonies. However, people who were already enslaved and their newborn children still remained slaves and could still be sold. These new laws meant that slaves became more expensive, because there were fewer slaves available. In the Cape Colony, all slaves now had to be registered and the sale of slaves was more carefully controlled. During the next few years, laws were passed to improve the life of slaves — allowing them to marry, allowing families to live together, requiring slave owners to give their slaves a reasonable amount of food, shelter and clothing, limiting their working hours, and controlling their punishment.',
 },
 {
 id: 'bc-b-p8', type: 'paragraph',
 text: 'All slaves in the British colonies were eventually freed in December 1834, but they had to work for their former owners for another four years, until December 1838, before they were truly free to leave. The freed slaves at the Cape were given nothing to help them start a new life. They did not receive money, land, or training. Some continued to do the same kind of work, either with their former owners, or at different farms. Many slaves moved to the city to find work. Others moved to mission stations, where Christian slaves were given plots of land. Some slaves tried to reunite with their families.',
 },
 {
 id: 'bc-b-defs', type: 'definitions',
 rows: [
 { term: 'Strategic', meaning: 'Part of a plan, in business, politics or war.' },
 { term: 'Crown Colony', meaning: 'A separate country ruled by Britain.' },
 { term: 'Imperialism', meaning: 'A political system in which one powerful country rules or influences a group of other countries.' },
 { term: 'Prejudice', meaning: 'An unfair belief that someone of a different race, sex or religion is not as good as you.' },
 { term: 'Humanitarianism', meaning: 'A concern with making people\'s suffering less.' },
 { term: 'Market economy', meaning: 'An economic system in which businesses are not controlled by the government.' },
 ],
 },
 ],
 },
 // ── Lesson 4: Expanding Frontiers & Great Trek ──
 {
 id: 'hist-brit-cape-frontiers',
 chapterId: 'hist-britain-cape',
 subjectId: 'history',
 title: 'Units 3–4: Expanding Frontiers and the Great Trek',
 minutes: 25,
 blocks: [
 { id: 'bc-f-h1', type: 'heading', level: 2, text: '3.1 Open and Closed Frontiers' },
 {
 id: 'bc-f-p1', type: 'paragraph',
 text: 'In the mid-18th century, the southern part of Africa, except the Cape, was untouched by European colonialism. The next 200 years would see major economic and political shifts, largely brought about by changing patterns of land occupation and the dispossession of indigenous people by white settlers and colonists.',
 },
 {
 id: 'bc-f-p2', type: 'paragraph',
 text: 'Historians write about open and closed frontiers. A closed frontier (like the modern South Africa-Mozambique border) marks a division of territory and political authority — people need passports to cross it. In the 18th century, frontiers in southern Africa were not like that. There were no formal borders. Between one centre of authority and another there was often an area of land not controlled by any group. The area between the Cape Colony and the Xhosa chiefdoms was one such area.',
 },
 { id: 'bc-f-h2', type: 'heading', level: 2, text: '3.2 Moving Frontiers in the Eastern Cape' },
 {
 id: 'bc-f-p3', type: 'paragraph',
 text: 'As the trekboers moved further away from the Cape, some moved eastwards to what is today known as the Eastern Cape. In 1780, the Dutch Governor Joachim Van Plettenberg proclaimed the entire length of the Great Fish River the boundary between the trekboers and the southern Nguni people, known as the Xhosa. The Xhosa people had been living north of the Great Fish River for centuries. In the late 18th and early 19th centuries, they moved into the same area the trekboers were entering from the south. The two groups soon came into conflict over water, grazing and living space. The first frontier war broke out in 1780 and marked the beginning of the Xhosa struggle to preserve their land, customs and way of life.',
 },
 { id: 'bc-f-h3', type: 'heading', level: 2, text: '3.3 British Settlers (1820)' },
 {
 id: 'bc-f-p4', type: 'paragraph',
 text: 'In 1820, a third group of people arrived in the Eastern Cape — the 1820 Settlers. After the wars between Britain and France ended, thousands of British soldiers and sailors were looking for employment. New inventions in agriculture meant many farmworkers had lost their jobs. The rapid industrialisation of Britain meant towns were becoming overcrowded. When the British government put out a call for people to settle in the colonies and promised them farms, thousands of people responded. About 4,000 settlers arrived in the Cape between April and June 1820.',
 },
 {
 id: 'bc-f-p5', type: 'paragraph',
 text: 'Lord Somerset, the British governor at the Cape, sent the 1820 Settlers to the frontier area of the Eastern Cape (later called British Kaffraria). As there had already been two frontier wars between the Xhosa and white settlers, his plan was that they should boost the numbers of white settlers in the area, and defend the eastern frontier against the Xhosa. Not all the British settlers adapted well to farming life — life on the border was harsh and isolated. Many settlers left the eastern border and moved to nearby towns. Some of the settlers who had been traders in Britain set up shops and businesses in towns such as Grahamstown, East London and Port Elizabeth. They also traded with the Xhosa across the border, trading shop-bought goods for ivory and animal skins.',
 },
 {
 id: 'bc-f-note', type: 'callout',
 text: 'Did you know? In 1829, the Cape government gave land in the fertile Kat River Valley, that had been occupied by the Xhosa, to Khoikhoi and freed slaves, to form a buffer between white settlers and the Xhosa.',
 },
 { id: 'bc-f-h4', type: 'heading', level: 2, text: '4.1 Retief\'s Manifesto — Why the Boers Left the Cape' },
 {
 id: 'bc-f-p6', type: 'paragraph',
 text: 'The Dutch trekboers who had settled in the Eastern Cape area were becoming more and more unhappy about the British administration at the Cape, which in their view was too liberal. The British also favoured the English language over Dutch. The Dutch were very reliant on slave labour and were outraged when the British abolished slavery in 1834. To make matters worse, they were in ongoing conflict with the Xhosa over land, and the arrival of British settlers had put a lot more pressure on limited resources. They saw only one solution — to move out of the Cape Colony and establish new economic, cultural and political systems away from the British.',
 },
 {
 id: 'bc-f-retief', type: 'callout',
 text: 'Piet Retief\'s Manifesto (published in the Grahamstown Journal, 2 February 1837) — Key reasons the Voortrekkers were leaving:\n• "There are too many criminals and too much conflict in the colony. We do not see how our children will ever live in peace and happiness here."\n• "We lost a lot of money when we were forced to free our slaves."\n• "The black and coloured people continue to steal from us."\n• "We are moving to find somewhere peaceful to live. We will not hurt other people or take anything from them, but we will defend ourselves against enemy attack."\n• "When we arrive in the country where we shall settle, we will make ourselves known to the local people, and let them know that we wish to live in peace with them."\n• "We believe that the English government will not require anything more from us and will leave us to govern ourselves without interference."',
 },
 {
 id: 'bc-f-defs', type: 'definitions',
 rows: [
 { term: 'Proclaimed', meaning: 'Made what something is, via an important official announcement.' },
 { term: 'Liberal', meaning: 'Thinking that something is better than it is.' },
 { term: 'Romantic', meaning: 'Thinking that something is better than it actually is.' },
 { term: 'Isolated', meaning: 'Far away from other places.' },
 { term: 'Manifesto', meaning: 'A public declaration of aims.' },
 ],
 },
 {
 id: 'bc-f-questions', type: 'questions',
 qa: [
 { q: 'Why did Britain seize the Cape from the Dutch in 1795?', marks: 2, a: 'Britain was aware of the strategic importance of the Cape on the profitable trade route to the East, and did not want it to fall into the hands of France (which had conquered the Netherlands in 1795). Britain invaded and seized the Cape to keep control of the sea route to India and Asia.' },
 { q: 'Explain the difference between the Dutch and British approaches to colonialism at the Cape.', marks: 3, a: 'The Dutch (VOC) were primarily traders and farmers who wanted land for personal use and profit. The British, however, saw colonisation as part of a greater imperial plan — not just financial gain, but political dominance and control as part of building a worldwide empire. The British introduced a more systematic, government-directed form of colonialism.' },
 { q: 'Give TWO reasons why Britain abolished the slave trade in 1807.', marks: 2, a: 'Humanitarian reasons: Many British people believed slavery was cruel and inhumane, and there was growing awareness of human rights. The abolitionist movement, led by figures like William Wilberforce, had massive public support. Economic reasons: Britain was industrialising and developing a market economy that needed wage-earning consumers, not slaves. It was also becoming cheaper to use free labour than to buy, house and feed slaves.' },
 { q: 'What was the effect of the abolition of the slave trade in 1807 on slaves in the Cape Colony?', marks: 3, a: 'The 1807 law banned importing new slaves, but existing slaves and their children remained enslaved. Slaves became more expensive because there were fewer available. The Cape government required that all slaves be registered. Some new laws improved conditions for slaves — they could now marry, live with their families, had limited working hours, and punishments were controlled. However, freedom only came in December 1834, and even then they had to work for their former masters for another four years until 1838.' },
 { q: 'List THREE reasons from Retief\'s Manifesto why the Voortrekkers decided to leave the Cape Colony.', marks: 3, a: '(1) They lost money when forced to free their slaves and compensation was inadequate. (2) There was too much conflict and crime in the colony — they did not feel their families were safe. (3) They wanted to govern themselves without British interference and establish their own economic, cultural and political systems away from British control.' },
 { q: 'What was the purpose of sending the 1820 Settlers to the Eastern Cape frontier?', marks: 2, a: 'Lord Somerset\'s plan was that the 1820 Settlers would boost the number of white settlers in the Eastern Cape, and serve as a buffer to defend the eastern frontier against the Xhosa people. He hoped British settlers would strengthen British control of the region.' },
 ],
 },
 ],
 },
 // ── Lesson 5: Overview (British Rule & Great Trek) ──
 {
 id: 'hist-brit-cape-overview',
 chapterId: 'hist-britain-cape',
 subjectId: 'history',
 title: 'Britain Takes Control: Overview',
 minutes: 20,
 blocks: [
 {
 id: 'bc-scope', type: 'callout',
 text: ' SOURCE-BASED QUESTION TOPIC (Section A). Britain Takes Control is examined through primary sources — diary extracts, letters, speeches, and images. You must analyse sources using context, reliability, bias, and own knowledge. Key areas: Khoisan dispossession, slavery and abolition, British imperialism, the Great Trek, and Xhosa frontier resistance.',
 },
 { id: 'bc-h1', type: 'heading', level: 2, text: 'Early Settlement and the VOC' },
 {
 id: 'bc-p1', type: 'paragraph',
 text: 'The Khoisan (Khoikhoi and San) were the original inhabitants of the Cape. In 1652, Jan van Riebeeck arrived on behalf of the Dutch East India Company (VOC) to establish a refreshment station at the Cape of Good Hope, supplying ships travelling between Europe and Asia.',
 },
 {
 id: 'bc-p2', type: 'paragraph',
 text: 'The VOC controlled trade strictly. Settlers (free burghers) were allowed to farm, but could only sell produce to the VOC at fixed prices. Slaves were imported from East Africa, Madagascar, and Southeast Asia to work on farms. The Khoikhoi were gradually dispossessed of their land and cattle through trade, theft, and warfare.',
 },
 { id: 'bc-h2', type: 'heading', level: 2, text: 'Trekboers and Frontier Expansion' },
 {
 id: 'bc-p3', type: 'paragraph',
 text: 'From the early 1700s, trekboers (migrating farmers) moved inland, away from VOC control. They lived as semi-nomadic cattle farmers and clashed with the Khoisan and Xhosa peoples on the eastern frontier. A series of frontier wars broke out as the trekboers pushed into Xhosa territory.',
 },
 { id: 'bc-h3', type: 'heading', level: 2, text: 'British Occupation (1795 & 1806)' },
 {
 id: 'bc-p4', type: 'paragraph',
 text: 'Britain first occupied the Cape in 1795 during the French Revolutionary Wars, to prevent it falling into French hands. The Cape was returned briefly to the Batavian Republic (Dutch) in 1803, but Britain reoccupied it permanently in 1806. The Cape Colony was formally ceded to Britain in 1814.',
 },
 {
 id: 'bc-list1', type: 'list',
 text: [
 'British settlers arrived from 1820, settling mainly in the Eastern Cape (Albany district).',
 'English was imposed as the official language of government and courts.',
 'Ordinance 50 of 1828 granted Khoikhoi and other free people of colour equal legal rights with whites.',
 'Slavery was abolished throughout the British Empire in 1834, with emancipation taking effect on 1 December 1838.',
 ],
 },
 { id: 'bc-h4', type: 'heading', level: 2, text: 'The Great Trek (1835–1840s)' },
 {
 id: 'bc-p5', type: 'paragraph',
 text: 'Many Boer (Afrikaner) farmers were dissatisfied with British rule. Their grievances included: the anglicisation policy, the abolition of slavery (and inadequate compensation), Ordinance 50 which they saw as placing servants on an equal footing with masters, and a perceived lack of protection on the frontier. From 1835, groups of Voortrekkers left the Cape Colony and moved into the interior.',
 },
 {
 id: 'bc-p6', type: 'paragraph',
 text: 'The Voortrekkers established republics: the South African Republic (Transvaal) and the Orange Free State. Key events included the Battle of Blood River (16 December 1838) where Boers defeated the Zulu army, and the establishment of the short-lived Republic of Natalia before Britain annexed Natal in 1843.',
 },
 { id: 'bc-h5', type: 'heading', level: 2, text: 'Key Definitions' },
 {
 id: 'bc-defs', type: 'definitions',
 rows: [
 { term: 'VOC', meaning: 'Vereenigde Oost-Indische Compagnie (Dutch East India Company) — a powerful trading company that controlled Dutch colonial interests.' },
 { term: 'Trekboers', meaning: 'Semi-nomadic Boer pastoralists who migrated into the interior from the Cape Colony.' },
 { term: 'Voortrekkers', meaning: 'Boer pioneers who left the Cape Colony during the Great Trek (1835–1840s) to escape British rule.' },
 { term: 'Free burghers', meaning: 'Former VOC employees granted permission to farm independently at the Cape.' },
 { term: 'Khoisan', meaning: 'Collective term for the Khoikhoi (herders) and San (hunter-gatherers), the original inhabitants of southern Africa.' },
 { term: 'Ordinance 50', meaning: 'An 1828 law granting Khoikhoi and other free people of colour equal legal rights with white settlers.' },
 ],
 },
 { id: 'bc-h6', type: 'heading', level: 2, text: 'Source-Based Questions Practice' },
 {
 id: 'bc-sbq', type: 'questions',
 qa: [
 { q: 'Make a list of things that the indigenous inhabitants of the Cape needed to stay alive.', marks: 3, a: 'The Khoisan needed: land (to graze livestock and gather food), water sources (for drinking, livestock and farming), wild animals to hunt (for food), grassroots, berries and grasshoppers (gathered foods), and grazing land for their cattle and sheep.' },
 { q: 'Make a list of what the Dutch took from the Khoisan.', marks: 3, a: 'The Dutch took: land (for farms and forts), grazing land (taken over by Dutch livestock), water sources, the availability of wild animals to hunt (destroyed as settlers expanded), and the ability of the Khoisan to live independently on their traditional lands.' },
 { q: 'What happened to most of the Khoisan at the Cape?', marks: 3, a: 'Most Khoisan were dispossessed of their land and cattle. Some were absorbed into Khoikhoi communities or became servants to Dutch settlers. Others fled to mountain and desert areas far from the Cape. Many were forced to work for white settlers in exchange for the right to remain on the land. Their communities were scattered and their independence was destroyed.' },
 { q: 'Explain the meaning of the following words: (a) Trekboers (b) Persecuted (c) Communal tenure.', marks: 3, a: '(a) Trekboers: Migrating/wandering Boer farmers who moved into the interior of southern Africa looking for more land. (b) Persecuted: Being treated cruelly and unfairly because of one\'s religion, race, or beliefs. (c) Communal tenure: A system where land is not privately owned but shared by the whole community, with the chief allocating portions for use.' },
 { q: 'Explain the difference between African attitudes to land ownership and European settlers\' attitudes to land ownership.', marks: 4, a: 'African communities had no concept of private land ownership. Land belonged to everyone and was allocated by chiefs to families for use — not for permanent personal ownership. It could not be bought or sold. European settlers believed in private ownership: once they settled land, it was theirs permanently, to buy, sell, or inherit. This fundamental clash made conflict inevitable — Africans saw settlers as temporary users of communally-held land, while settlers saw themselves as legitimate permanent owners.' },
 ],
 },
 ],
 },
 // ── Lesson 6: Unit 5 — Xhosa Responses to Colonial Expansion ──
 {
 id: 'hist-brit-cape-xhosa',
 chapterId: 'hist-britain-cape',
 subjectId: 'history',
 title: 'Unit 5: Xhosa Responses to Colonial Expansion',
 minutes: 30,
 blocks: [
 {
 id: 'bcx-callout', type: 'callout',
 text: ' This section covers the Frontier Wars and the Xhosa\'s co-operation and conflict with colonial settlers. Know the nine frontier wars, the cattle killing, and the role of missionaries.',
 },
 { id: 'bcx-h1', type: 'heading', level: 2, text: '5.1 The Xhosa People' },
 {
 id: 'bcx-p1', type: 'paragraph',
 text: 'The Xhosa were a Nguni-speaking people who occupied the eastern part of what is now the Eastern Cape. They were cattle-herders and mixed farmers who lived in scattered homesteads under the authority of chiefs. By the late 18th century, the Great Fish River had been established as the boundary between Xhosa territory and the Cape Colony — but the Xhosa had lived there for generations before any European arrived to draw that line.',
 },
 {
 id: 'bcx-p2', type: 'paragraph',
 text: 'Xhosa society was divided into chiefdoms, each headed by a chief (inkosi) and his counsellors. Cattle were the basis of wealth and social status. The Xhosa had a sophisticated system of government, law, and religion. They did not see themselves as a single unified "nation" — each chiefdom was largely independent, which sometimes made it difficult to resist colonial expansion with a unified response.',
 },
 { id: 'bcx-h2', type: 'heading', level: 2, text: '5.2 The Nine Frontier Wars (1779–1879)' },
 {
 id: 'bcx-p3', type: 'paragraph',
 text: 'Over a hundred years, nine frontier wars (also called the Cape Frontier Wars or Kaffir Wars — a term now regarded as offensive) were fought between the Xhosa and colonial forces. These were not simply battles: they were part of a long, desperate struggle by the Xhosa to defend their land, cattle, and way of life against an expanding colonial frontier.',
 },
 {
 id: 'bcx-wars', type: 'list',
 text: [
 'First Frontier War (1779): Trekboers and Xhosa clash over the Fish River boundary. Xhosa driven back east of the Fish River.',
 'Second Frontier War (1793): Trekboers raided Xhosa cattle; Xhosa counter-attacked. British not yet involved.',
 'Third Frontier War (1799–1803): Khoikhoi labourers joined the Xhosa in resistance. First multi-racial uprising against colonial rule. British troops called in for the first time.',
 'Fourth Frontier War (1811–12): British Governor Cradock ordered the violent expulsion of all Xhosa from the Zuurveld west of the Fish River. Thousands of Xhosa driven out by British forces.',
 'Fifth Frontier War (1818–19): Chief Ngqika asked the British for help against rival chief Ndlambe; the British helped Ngqika but then took a huge slice of his land as "payment." Led to the Battle of Grahamstown (1819) where Ndlambe\'s forces attacked the British garrison.',
 'Sixth Frontier War (1834–35): Major Xhosa offensive — 15,000 warriors crossed the Fish River, burned farms, and took cattle. The Cape Colony Governor d\'Urban proclaimed all Xhosa-occupied land east of the Keiskamma River as the "Province of Queen Adelaide." The British government in London overturned this — a rare reversal.',
 'War of the Axe / Seventh Frontier War (1846–47): Began when a Xhosa man was arrested. Most destructive war yet. Governor Smith reoccupied and expanded British territory despite London\'s earlier reversal.',
 'Eighth Frontier War / War of Mlanjeni (1850–53): The longest and most devastating. A prophet named Mlanjeni promised that bullets would turn to water. Despite initial successes, the Xhosa were eventually defeated. Thousands of Khoikhoi and Mfengu fought on both sides.',
 'Ninth Frontier War (1877–78): The last — part of a broader British drive to conquer all independent African chiefdoms.',
 ],
 },
 { id: 'bcx-h3', type: 'heading', level: 2, text: '5.3 Forms of Xhosa Resistance' },
 {
 id: 'bcx-p4', type: 'paragraph',
 text: 'The Xhosa used multiple strategies to resist colonial expansion, not just military force:',
 },
 {
 id: 'bcx-resistance', type: 'list',
 text: [
 'MILITARY RESISTANCE: Large-scale offensives like the Sixth Frontier War (1834–35) showed the Xhosa\'s military capacity. They used knowledge of the terrain, guerrilla tactics, and cattle raids to wear down colonial forces.',
 'DIPLOMATIC RESISTANCE: Some chiefs, like Ngqika, tried to work with the British to maintain their position. However, this often backfired — the British used African divisions to their advantage.',
 'SPIRITUAL RESISTANCE: Prophets like Mlanjeni (1850) and Nongqawuse (1856) offered spiritual solutions. Nongqawuse\'s cattle killing was the most dramatic and tragic example.',
 'CO-OPERATION: Some Xhosa groups, like the Mfengu (Fingo), chose to work with the British, receiving land and weapons in exchange. This gave them some protection but also made them allies in wars against other Xhosa groups.',
 'MISSION STATIONS: Some Xhosa converted to Christianity and adopted Western education, hoping it would give them tools to navigate the colonial world without losing their identity.',
 ],
 },
 { id: 'bcx-h4', type: 'heading', level: 2, text: '5.4 The Cattle Killing (1856–57)' },
 {
 id: 'bcx-p5', type: 'paragraph',
 text: 'In 1856, a teenage Xhosa girl named Nongqawuse reported a vision: the ancestors had told her that if the Xhosa killed all their cattle and destroyed all their crops, the dead ancestors would rise again on a certain day, the Europeans would be swept into the sea, and cattle in greater numbers would return. Thousands of Xhosa believed her. Chief Sarili (Sarhili), the paramount chief, accepted the prophecy.',
 },
 {
 id: 'bcx-p6', type: 'paragraph',
 text: 'Between May 1856 and April 1857, over 400,000 cattle were killed and crops were destroyed. When the promised day arrived and the dead did not rise, the results were catastrophic. An estimated 40,000 Xhosa starved to death. Another 40,000 flooded into the Cape Colony desperate for food, becoming farm labourers under terrible conditions. The Xhosa population was devastated and their ability to resist British expansion was permanently broken. The British governor, Sir George Grey, had been secretly encouraging the movement, understanding that it would destroy Xhosa power.',
 },
 {
 id: 'bcx-src-a', type: 'callout',
 text: 'Primary Source — W.W. Gqoba (Xhosa writer), 1888, explaining the prophecy: "Nongqawuse said that the people would rise up again, and that their cattle would come back in greater numbers, and that the Europeans would be driven into the sea. The people believed this and began to kill their cattle and to destroy their corn."',
 },
 {
 id: 'bcx-p7', type: 'paragraph',
 text: 'Historians debate why so many Xhosa believed Nongqawuse. The most likely explanation is psychological: the Xhosa had suffered devastating losses in eight frontier wars, their land was shrinking, they had lost thousands of cattle to lungsickness (a cattle disease), and they were desperate. The prophecy offered hope when all rational options seemed closed. The cattle killing is one of the most tragic events in South African history — a people destroying themselves in a last act of desperation.',
 },
 { id: 'bcx-h5', type: 'heading', level: 2, text: '5.5 Missionaries — Co-operation and Tension' },
 {
 id: 'bcx-p8', type: 'paragraph',
 text: 'Christian missionaries played a complex and contradictory role in Xhosa society. On one hand, they introduced literacy and education which some Xhosa used to navigate colonial society. They also sometimes advocated for Xhosa rights. On the other hand, missionaries undermined traditional authority structures, encouraged conversion away from Xhosa cultural practices, and often served as agents of colonial values. Many chiefs were suspicious of missionaries for this reason.',
 },
 {
 id: 'bcx-p9', type: 'paragraph',
 text: 'A distinction emerged between "School Xhosa" (amakholwa — believers, who adopted literacy and Christianity) and "Red Xhosa" (who maintained traditional ways, named for the red ochre they rubbed on their bodies). This division had long-term consequences, creating deep divisions within Xhosa communities that persisted into the 20th century.',
 },
 { id: 'bcx-h6', type: 'heading', level: 2, text: '5.6 Consequences for the Xhosa' },
 {
 id: 'bcx-consequences', type: 'list',
 text: [
 'By 1879, all Xhosa chiefdoms had been conquered and their territories incorporated into the Cape Colony.',
 'The cattle killing (1856–57) devastated the Xhosa population and permanently broke their military power.',
 'Thousands became migrant labourers in the Cape Colony and later the mines.',
 'Traditional authority structures were weakened but not destroyed — chiefs were recognised by the colonial government as local administrators, but with much reduced power.',
 'The mission-educated Xhosa elite (amakholwa) produced some of the most important early African political leaders, journalists, and intellectuals of the 20th century — including figures who would later found the ANC.',
 ],
 },
 { id: 'bcx-h7', type: 'heading', level: 2, text: 'Key Definitions' },
 {
 id: 'bcx-defs', type: 'definitions',
 rows: [
 { term: 'Frontier Wars', meaning: 'Nine wars (1779–1879) fought between the Xhosa and colonial forces over land in the Eastern Cape.' },
 { term: 'Nongqawuse', meaning: 'A teenage Xhosa girl whose 1856 prophecy led the Xhosa to kill their cattle and crops, resulting in mass starvation and the end of organised Xhosa resistance.' },
 { term: 'Cattle killing (1856–57)', meaning: 'The destruction of over 400,000 Xhosa cattle based on a prophecy; resulted in 40,000 deaths by starvation and the permanent weakening of Xhosa resistance.' },
 { term: 'Amakholwa', meaning: '"Believers" — Xhosa who converted to Christianity, adopted literacy and Western education, and adapted to colonial society.' },
 { term: 'Mfengu (Fingo)', meaning: 'A Xhosa group that chose to work with the British, receiving land and arms in return for military support against other Xhosa chiefdoms.' },
 { term: 'Mlanjeni', meaning: 'A Xhosa prophet who inspired the Eighth Frontier War (1850–53) by promising that bullets would turn to water.' },
 { term: 'Sarili (Sarhili)', meaning: 'The Xhosa paramount chief who accepted Nongqawuse\'s prophecy and led his people through the cattle killing.' },
 ],
 },
 { id: 'bcx-h8', type: 'heading', level: 2, text: 'Source-Based Questions' },
 {
 id: 'bcx-sbq', type: 'questions',
 qa: [
 { q: 'Why do you think the Xhosa were unable to stop British colonial expansion despite fighting nine frontier wars?', marks: 4, a: 'The Xhosa faced several structural disadvantages: (1) They were politically divided into independent chiefdoms that could not always unite against a common threat. (2) The British had superior weapons, access to much larger supplies of ammunition, and could call on the resources of the entire British Empire. (3) Some Xhosa groups (like the Mfengu) allied with the British, giving colonial forces local knowledge and fighters. (4) Each war resulted in the loss of more land and cattle, weakening the economic base for future resistance. (5) The cattle killing (1856–57) permanently destroyed the Xhosa\'s military capacity at a crucial moment.' },
 { q: 'Explain why many historians believe the cattle killing of 1856–57 was partly the result of the terrible suffering caused by the frontier wars.', marks: 4, a: 'By 1856, the Xhosa had fought eight devastating wars over 77 years. They had lost vast amounts of land, thousands of cattle, and tens of thousands of lives. A lungsickness epidemic had further decimated their cattle herds. Their military resistance had repeatedly failed. In this context of desperate hopelessness, Nongqawuse\'s prophecy offered the only hope that remained — a supernatural intervention that would undo all the suffering. People who have lost everything and see no rational way out are especially vulnerable to prophetic movements that promise complete reversal of their situation. The cattle killing should be understood not as "superstition" but as a rational response to unbearable suffering.' },
 { q: 'What were the consequences of the cattle killing for the Xhosa people?', marks: 3, a: '(1) An estimated 40,000 Xhosa died of starvation. (2) Another 40,000 flooded into the Cape Colony to find food, becoming cheap farm labourers under exploitative conditions. (3) The Xhosa\'s military capacity was permanently broken — the cattle killing achieved what nine frontier wars had failed to do. (4) The Xhosa population was reduced so drastically that their land was left "empty," making it easy for the colonial government to take it over and give it to white settlers.' },
 { q: 'How did missionaries both help and harm the Xhosa people?', marks: 4, a: 'HELP: Missionaries provided literacy and education that some Xhosa used to navigate colonial society. They sometimes advocated for Xhosa rights and acted as interpreters and diplomats. Mission-educated Xhosa produced important political and intellectual leaders. HARM: Missionaries undermined traditional authority structures and cultural practices. They encouraged conversion to Christianity, which divided Xhosa communities into "School Xhosa" and "Red Xhosa." They often served as agents of colonial values and helped make Xhosa communities more vulnerable to colonial control. The division between amakholwa and traditionalists weakened Xhosa political unity.' },
 ],
 },
 { id: 'bcx-h9', type: 'heading', level: 2, text: 'PEEL Essay Facts — Xhosa Resistance' },
 {
 id: 'bcx-peel1', type: 'paragraph',
 text: 'POINT: Xhosa resistance to colonial expansion was ultimately unsuccessful because of political division.\n\nEVIDENCE: The Xhosa were never politically unified — each chiefdom fought independently. Some groups like the Mfengu actively allied with the British. Chief Ngqika allied with the British against rival chief Ndlambe, but the British then took Ngqika\'s land as "payment."\n\nEXPLAIN: Without unified political command, the Xhosa could never bring their full military strength to bear. The British exploited these divisions — supporting one Xhosa faction against another, then taking land from both. This "divide and rule" strategy was used across the British Empire.\n\nLINK: The same pattern of political division weakening African resistance appeared in Natal (Zulu), on the Highveld (Basotho), and elsewhere — showing this was a structural feature of colonial conquest, not just a Xhosa problem.',
 },
 {
 id: 'bcx-peel2', type: 'paragraph',
 text: 'POINT: The cattle killing of 1856–57 was the most destructive event in Xhosa history and permanently ended organised resistance.\n\nEVIDENCE: Over 400,000 cattle killed; 40,000 deaths by starvation; 40,000 Xhosa flooded into the Cape as labourers. By 1879, all Xhosa chiefdoms had been conquered.\n\nEXPLAIN: The cattle killing was not simply "superstition" — it was the response of a people driven to desperation by eight wars in 77 years. However, its consequences were catastrophic: it reduced the Xhosa population, destroyed their economic base, and forced survivors into colonial labour. Governor Grey had quietly encouraged the movement, understanding it would break Xhosa resistance.\n\nLINK: The cattle killing shows how colonial power worked not only through direct military force but also by creating conditions of such suffering that people destroyed themselves.',
 },
 ],
 },
 ],
};

// ─── Chapter 2: Co-operation and Conflict on the Highveld ────────────────

export const HISTORY_HIGHVELD: Chapter = {
 id: 'hist-highveld',
 subjectId: 'history',
 title: 'Co-operation and Conflict on the Highveld',
 summary: 'Moshoeshoe\'s kingdom, Boer-Basotho relations, and the struggle for the Highveld.',

 lessons: [
 // ── Lesson 1: Overview ──
 {
 id: 'hist-hv-overview',
 chapterId: 'hist-highveld',
 subjectId: 'history',
 title: 'Overview — Events, Timeline & Key Factors',
 minutes: 30,
 blocks: [
 {
 id: 'hv-audio', type: 'audio',
 caption: '� Listen — Podcast Overview',
 text: 'Two hosts walk you through the entire Highveld topic in a conversational podcast. Great for revision on the go.',
 src: 'audio/hist-highveld-overview.mp3',
 },
 { id: 'hv-h1', type: 'heading', level: 2, text: 'The Rise of Moshoeshoe and the Basotho Kingdom' },
 {
 id: 'hv-p1', type: 'callout',
 text: ' SOURCE-BASED QUESTION TOPIC (Section A). You will be given primary sources about Moshoeshoe, the Basotho, the Boer republics, or the boundary disputes and must answer questions using the source AND your own knowledge. Know: Moshoeshoe\'s diplomacy, Thaba Bosiu, missionaries, the Napier/Warden lines, the Basotho Wars, and the inboekelinge system.',
 },
 {
 id: 'hv-p2', type: 'paragraph',
 text: 'Moshoeshoe (c.1786–1870) was the founder of the Basotho nation. During the upheaval of the Difaqane/Mfecane in the 1820s, he gathered displaced clans and refugees at his mountain fortress of Thaba Bosiu ("Mountain of the Night"). This flat-topped mountain was virtually impregnable — attackers had to climb steep, narrow passes that could be defended by a handful of warriors rolling boulders down.',
 },
 {
 id: 'hv-p3', type: 'paragraph',
 text: 'Moshoeshoe was a brilliant diplomat. Rather than simply fighting enemies, he used a strategy of giving gifts of cattle to defeated attackers, turning potential enemies into allies. He built his kingdom by absorbing refugee groups, giving them land and protection in exchange for loyalty. By the 1830s, he had united around 40,000 people under his rule.',
 },
 { id: 'hv-h2', type: 'heading', level: 2, text: 'Missionaries and the Paris Evangelical Missionary Society' },
 {
 id: 'hv-p4', type: 'paragraph',
 text: 'In 1833, Moshoeshoe invited French missionaries from the Paris Evangelical Missionary Society (PEMS) to settle in his kingdom. Eugène Casalis and Thomas Arbousset arrived at Thaba Bosiu. Moshoeshoe saw the missionaries as valuable allies who could provide literacy, diplomatic advice, and a connection to the wider world. Casalis became Moshoeshoe\'s trusted advisor and interpreter, helping him communicate with colonial authorities. The missionaries set up schools and churches, introducing Western education.',
 },
 { id: 'hv-h3', type: 'heading', level: 2, text: 'The Griqua, Kora, and Early Threats' },
 {
 id: 'hv-p5', type: 'paragraph',
 text: 'The Griqua and Kora were groups of mixed Khoikhoi-European descent who lived on the Highveld. They had horses and guns obtained through trade with the Cape Colony. Throughout the 1820s and 1830s, Griqua and Kora groups raided Basotho cattle and attacked settlements. Moshoeshoe had to constantly defend his people from these raids while also dealing with the approaching Boer settlers.',
 },
 { id: 'hv-h4', type: 'heading', level: 2, text: 'Arrival of the Voortrekkers' },
 {
 id: 'hv-p6', type: 'paragraph',
 text: 'From 1836, Voortrekkers began arriving on the Highveld after leaving the Cape Colony during the Great Trek. They settled in areas that Moshoeshoe considered part of his kingdom. Initially there was some co-operation — Moshoeshoe allowed Boers to settle in certain areas in exchange for recognition of his authority. However, conflict was inevitable as both groups claimed the same fertile land.',
 },
 { id: 'hv-h5', type: 'heading', level: 2, text: 'British Involvement and Boundary Lines' },
 {
 id: 'hv-p7', type: 'paragraph',
 text: 'In 1843, Governor Napier signed a treaty with Moshoeshoe and drew the Napier Line, establishing a boundary between Basotho and Boer-occupied territory. However, this line was drawn without properly consulting Moshoeshoe, and it gave away some of his best agricultural land to the Boers.',
 },
 {
 id: 'hv-p8', type: 'paragraph',
 text: 'In 1848, Sir Harry Smith annexed the territory between the Orange and Vaal rivers as the Orange River Sovereignty, placing it under British control. He appointed Major Henry Warden as British Resident. Warden drew a new boundary — the Warden Line (1849) — which was even more unfavourable to Moshoeshoe, cutting deep into Basotho territory. This angered Moshoeshoe greatly.',
 },
 { id: 'hv-h6', type: 'heading', level: 2, text: 'Battle of Viervoet (1851) and Battle of Berea (1852)' },
 {
 id: 'hv-p9', type: 'paragraph',
 text: 'In June 1851, Moshoeshoe\'s warriors defeated a combined British-Boer force at the Battle of Viervoet. The British then sent a larger force under Sir George Cathcart. In December 1852, Cathcart attacked Moshoeshoe at Berea Mountain. The battle was indecisive — the Basotho held their ground, but Moshoeshoe, showing diplomatic genius, sent Cathcart a message saying: "As the object for which you have come is to have a portion of my people\'s cattle, I beg you will be satisfied with what you have taken... and let me be friend of the Queen." This allowed Cathcart to withdraw claiming victory, while Moshoeshoe maintained his independence.',
 },
 { id: 'hv-h7', type: 'heading', level: 2, text: 'The Bloemfontein Convention (1854) and the OFS' },
 {
 id: 'hv-p10', type: 'paragraph',
 text: 'In 1854, Britain decided to withdraw from the interior. The Bloemfontein Convention created the independent Orange Free State (OFS). This left Moshoeshoe without British protection and facing the OFS alone. The OFS settlers continued to encroach on Basotho land and steal cattle.',
 },
 { id: 'hv-h8', type: 'heading', level: 2, text: 'The Basotho Wars' },
 {
 id: 'hv-p11', type: 'paragraph',
 text: 'The First Basotho War (Senekal\'s War, 1858): The OFS attacked Moshoeshoe over land disputes. The Basotho defended themselves effectively, but both sides were exhausted. The Treaty of Aliwal North (1858) set yet another boundary, still unfavourable to the Basotho.',
 },
 {
 id: 'hv-p12', type: 'paragraph',
 text: 'The Second Basotho War (1865–1868): The OFS launched a devastating attack. They used scorched-earth tactics — burning crops, capturing cattle, and destroying villages. The Basotho were pushed back to Thaba Bosiu. Moshoeshoe was now elderly and his kingdom was weakened. In desperation, he appealed to the British for protection.',
 },
 {
 id: 'hv-p13', type: 'paragraph',
 text: 'In March 1868, the British declared Basutoland a British protectorate, saving it from being absorbed by the OFS. Moshoeshoe died in 1870, but his diplomacy had ensured that his people kept their land. Basutoland later became the independent nation of Lesotho in 1966.',
 },
 { id: 'hv-h9', type: 'heading', level: 2, text: 'The Boer Republics and the Inboekelinge System' },
 {
 id: 'hv-p14', type: 'paragraph',
 text: 'The Boer republics (Transvaal/South African Republic and Orange Free State) relied on African labour. The inboekelinge system was a form of forced child labour. Black children captured in raids or "apprenticed" by their parents (often under duress) were registered (ingeboek) in a farmer\'s name and forced to work without pay until age 21 (for girls) or 25 (for boys). The system was effectively a disguised form of slavery.',
 },
 { id: 'hv-h10', type: 'heading', level: 2, text: 'Timeline of Key Events' },
 {
 id: 'hv-timeline', type: 'list',
 text: [
 '1820s — Difaqane/Mfecane; Moshoeshoe gathers refugees at Thaba Bosiu',
 '1833 — French missionaries (Casalis & Arbousset) arrive',
 '1836+ — Voortrekkers arrive on the Highveld',
 '1843 — Napier Treaty and Napier Line drawn',
 '1848 — Sir Harry Smith annexes Orange River Sovereignty',
 '1849 — Warden Line drawn (unfavourable to Basotho)',
 '1851 — Battle of Viervoet (Basotho victory)',
 '1852 — Battle of Berea Mountain (indecisive; Moshoeshoe\'s diplomatic letter)',
 '1854 — Bloemfontein Convention creates independent Orange Free State',
 '1858 — First Basotho War; Treaty of Aliwal North',
 '1865–1868 — Second Basotho War; OFS scorched-earth tactics',
 '1868 — Basutoland becomes British protectorate',
 '1870 — Death of Moshoeshoe',
 ],
 },
 ],
 },
 // ── Lesson 2: PEEL Facts ──
 {
 id: 'hist-hv-peel',
 chapterId: 'hist-highveld',
 subjectId: 'history',
 title: 'PEEL Essay Facts — Co-operation & Conflict',
 minutes: 25,
 blocks: [
 {
 id: 'hvp-intro', type: 'callout',
 text: '� PEEL Format: Point → Evidence → Explain → Link. Each fact below is structured this way so you can drop it directly into an essay paragraph.',
 },
 { id: 'hvp-h1', type: 'heading', level: 2, text: 'PEEL 1: Moshoeshoe\'s Diplomacy Built the Basotho Nation' },
 {
 id: 'hvp-p1', type: 'paragraph',
 text: 'POINT: Moshoeshoe used diplomacy rather than military force to build the Basotho kingdom.\n\nEVIDENCE: He sent gifts of cattle to defeated enemies (such as the Tlokwa under MaNthatisi) to turn them into allies. He invited French missionaries (Casalis, 1833) to gain Western knowledge and diplomatic connections. After the Battle of Berea (1852), he sent a diplomatic letter to Cathcart allowing the British to save face while maintaining Basotho independence.\n\nEXPLAIN: This shows that Moshoeshoe understood that survival on the Highveld required more than military strength — it required alliances, information, and the ability to negotiate with colonial powers. His diplomacy allowed the Basotho to survive where other African kingdoms were destroyed.\n\nLINK: This diplomatic skill was crucial throughout the period and ultimately led to Basutoland being saved from OFS absorption in 1868.',
 },
 { id: 'hvp-h2', type: 'heading', level: 2, text: 'PEEL 2: Thaba Bosiu — Geography as Defence' },
 {
 id: 'hvp-p2', type: 'paragraph',
 text: 'POINT: Moshoeshoe\'s choice of Thaba Bosiu as his capital was a key factor in the Basotho\'s survival.\n\nEVIDENCE: Thaba Bosiu was a flat-topped mountain with steep, narrow passes that could be defended by small numbers of warriors. It was never captured in battle. Both the Boer forces and the British under Cathcart failed to take it.\n\nEXPLAIN: The natural fortress gave Moshoeshoe a permanent base of security. Even when the Basotho lost territory in the wars, they could retreat to Thaba Bosiu and regroup. This made it impossible for enemies to completely defeat them.\n\nLINK: This geographic advantage complemented Moshoeshoe\'s diplomatic strategy, giving him a position of strength from which to negotiate.',
 },
 { id: 'hvp-h3', type: 'heading', level: 2, text: 'PEEL 3: Unfair Boundary Lines Caused Conflict' },
 {
 id: 'hvp-p3', type: 'paragraph',
 text: 'POINT: The boundary lines drawn by colonial authorities were a major cause of conflict between the Basotho and Boer settlers.\n\nEVIDENCE: The Napier Line (1843) gave away Basotho agricultural land. The Warden Line (1849) was even more unfavourable, cutting deep into Basotho territory. Neither line was drawn with proper consultation with Moshoeshoe.\n\nEXPLAIN: These arbitrarily drawn boundaries ignored African land claims and existing settlement patterns. They rewarded Boer settlers who had only recently arrived on the Highveld while dispossessing the Basotho who had lived there for generations. This made war inevitable, as the Basotho had to fight to protect their remaining land.\n\nLINK: The boundary disputes led directly to the Battle of Viervoet (1851), the Battle of Berea (1852), and ultimately the two Basotho Wars.',
 },
 { id: 'hvp-h4', type: 'heading', level: 2, text: 'PEEL 4: British Withdrawal Left Africans Vulnerable' },
 {
 id: 'hvp-p4', type: 'paragraph',
 text: 'POINT: Britain\'s withdrawal from the interior in 1854 left African groups like the Basotho vulnerable to Boer aggression.\n\nEVIDENCE: The Bloemfontein Convention (1854) created the independent Orange Free State, removing any British restraint on Boer expansion. The OFS immediately began encroaching on Basotho land and launched two devastating wars (1858 and 1865–1868) using scorched-earth tactics.\n\nEXPLAIN: Britain withdrew because it was expensive to administer the interior, but this decision had devastating consequences for African groups who had relied on British treaties for protection. The Basotho were only saved when Moshoeshoe convinced the British to re-intervene in 1868.\n\nLINK: This pattern of British intervention and withdrawal was a recurring theme in South African history, driven by economic calculations rather than justice.',
 },
 { id: 'hvp-h5', type: 'heading', level: 2, text: 'PEEL 5: The Inboekelinge System Was Disguised Slavery' },
 {
 id: 'hvp-p5', type: 'paragraph',
 text: 'POINT: The Boer republics continued to exploit African labour through the inboekelinge system despite the abolition of slavery.\n\nEVIDENCE: Black children captured in raids or taken from their families were registered (ingeboek) in a Boer farmer\'s name. Girls were forced to work without pay until age 21, boys until age 25. The system bore all the hallmarks of slavery — forced labour, no freedom of movement, no wages.\n\nEXPLAIN: This shows that the abolition of slavery in 1834 did not end unfree labour in South Africa. The Boers simply created a new system that achieved the same purpose while technically avoiding the label of "slavery." It reflects the deep racial attitudes that would later develop into apartheid.\n\nLINK: The exploitation of African labour was a central theme that continued through the mining era and into the 20th century.',
 },
 { id: 'hvp-h6', type: 'heading', level: 2, text: 'PEEL 6: Co-operation Was Always Temporary' },
 {
 id: 'hvp-p6', type: 'paragraph',
 text: 'POINT: Periods of co-operation between the Basotho and Boer settlers were always temporary, giving way to conflict over land.\n\nEVIDENCE: Moshoeshoe initially allowed Voortrekkers to settle in parts of his territory. Treaties were signed (Napier, 1843). However, every agreement eventually broke down as Boer settlers demanded more land and the boundaries were redrawn to favour settlers.\n\nEXPLAIN: Co-operation failed because the two groups had fundamentally different views of land ownership. The Basotho saw land as communally held by the chief on behalf of the people, while the Boers saw land as individual private property. Once Boers settled, they considered the land permanently theirs and pushed for more.\n\nLINK: This pattern of broken agreements and land dispossession would continue into the 20th century, culminating in the Natives\' Land Act of 1913.',
 },
 ],
 },
 // ── Lesson 3: Model Essays ──
 {
 id: 'hist-hv-essays',
 chapterId: 'hist-highveld',
 subjectId: 'history',
 title: 'Model Essays — Co-operation & Conflict',
 minutes: 35,
 blocks: [
 {
 id: 'hve-intro', type: 'callout',
 text: '✍ These are model essays for likely exam questions. Study the structure (intro → PEEL body paragraphs → conclusion) and adapt them to the specific wording of the question you get.',
 },
 { id: 'hve-h1', type: 'heading', level: 2, text: 'Essay 1: "Moshoeshoe was a skilled diplomat who used both co-operation and resistance to protect his kingdom." Do you agree? (50 marks)' },
 {
 id: 'hve-essay1', type: 'paragraph',
 text: 'INTRODUCTION:\nMoshoeshoe (c.1786–1870), founder of the Basotho nation, is widely regarded as one of southern Africa\'s greatest leaders. He faced enormous challenges — the Difaqane, Griqua raids, Boer encroachment, and British imperialism — yet managed to preserve his people and their land. This essay will argue that Moshoeshoe was indeed a master diplomat who skilfully combined co-operation and resistance to protect his kingdom.\n\nBODY PARAGRAPH 1 (Co-operation through absorption):\nMoshoeshoe built his kingdom through co-operation rather than conquest. During the Difaqane of the 1820s, he gathered displaced clans and refugees at Thaba Bosiu, offering them protection and land in exchange for loyalty. He famously sent gifts of cattle to defeated enemies, turning potential threats into allies. For example, after defeating raiding groups, he would send them cattle as a gesture of goodwill. This strategy allowed him to unite approximately 40,000 people under his rule by the 1830s, creating a strong and diverse kingdom.\n\nBODY PARAGRAPH 2 (Co-operation with missionaries):\nMoshoeshoe\'s invitation to French missionaries in 1833 demonstrates his diplomatic vision. Eugène Casalis became his trusted advisor, providing literacy, translation services, and a connection to European powers. Moshoeshoe did not simply accept Christianity — he used the missionary relationship strategically to gain access to Western education, to understand colonial diplomacy, and to have his correspondence with the British government composed effectively. This co-operation gave the Basotho advantages that many other African kingdoms lacked.\n\nBODY PARAGRAPH 3 (Resistance at Viervoet and Berea):\nWhen co-operation failed, Moshoeshoe proved willing to resist militarily. At the Battle of Viervoet (1851), Basotho warriors defeated a combined British-Boer force, demonstrating significant military capability. At the Battle of Berea Mountain (1852), the Basotho held their ground against a much larger British force under Sir George Cathcart. However, even in victory, Moshoeshoe chose diplomacy — he sent Cathcart a conciliatory letter asking for peace, allowing the British to withdraw without humiliation. This combination of military strength and diplomatic restraint was his genius.\n\nBODY PARAGRAPH 4 (Navigating boundary disputes):\nMoshoeshoe also resisted the unjust boundary lines imposed on his kingdom. The Napier Line (1843) and the Warden Line (1849) both cut into Basotho territory, yet Moshoeshoe protested through diplomatic channels rather than immediately resorting to war. When the OFS launched devastating attacks in the Second Basotho War (1865–1868), Moshoeshoe made the crucial decision to appeal to Britain for protection. In 1868, Basutoland became a British protectorate, saving it from OFS conquest.\n\nBODY PARAGRAPH 5 (Legacy):\nMoshoeshoe\'s greatest achievement was ensuring the survival of his people as a distinct nation. While many other African kingdoms were destroyed or absorbed during this period, the Basotho maintained their identity and their land. Basutoland eventually became the independent nation of Lesotho in 1966 — a direct result of Moshoeshoe\'s diplomacy.\n\nCONCLUSION:\nIn conclusion, the evidence strongly supports the statement. Moshoeshoe was a uniquely skilled diplomat who understood when to co-operate and when to resist. His ability to build alliances, use missionaries strategically, fight when necessary, and negotiate from strength made him one of the most effective African leaders of the 19th century. His legacy — the nation of Lesotho — stands as proof of his success.',
 },
 { id: 'hve-h2', type: 'heading', level: 2, text: 'Essay 2: "The conflict on the Highveld was caused mainly by disputes over land." To what extent do you agree? (50 marks)' },
 {
 id: 'hve-essay2', type: 'paragraph',
 text: 'INTRODUCTION:\nThe Highveld in the mid-19th century was a place of both co-operation and conflict between the Basotho, Boer settlers, Griqua, and British colonial authorities. While many factors contributed to the tensions — including racial attitudes, different political systems, and imperial ambitions — this essay will argue that disputes over land were the primary cause of conflict, though other factors played important supporting roles.\n\nBODY PARAGRAPH 1 (Land as the central issue):\nLand was the fundamental cause of conflict on the Highveld. The fertile lowlands west of the Caledon River were claimed by both the Basotho and the arriving Voortrekkers. Moshoeshoe considered this land part of the Basotho kingdom, settled by his people for generations. The Boers, arriving from the 1836 Great Trek, saw it as empty land available for farming. This clash of claims was the root of virtually every subsequent conflict.\n\nBODY PARAGRAPH 2 (Boundary lines deepened the land conflict):\nColonial boundary lines made the land disputes worse rather than resolving them. The Napier Line (1843) gave Basotho agricultural land to Boer settlers. The Warden Line (1849) cut even deeper into Basotho territory, dividing it almost in half. Neither line reflected the actual distribution of settlements or respected Basotho claims. These unjust boundaries directly provoked the battles of Viervoet (1851) and Berea (1852), and the two Basotho Wars (1858, 1865–1868).\n\nBODY PARAGRAPH 3 (Different concepts of land ownership):\nThe conflict was deepened by fundamentally different views of land. The Basotho practised communal land ownership — the chief allocated land to families, but it remained the property of the nation. The Boers believed in individual private ownership — once they settled, they considered the land permanently theirs. This made compromise almost impossible, because each side operated on different assumptions about what "owning" land meant.\n\nBODY PARAGRAPH 4 (Other factors — labour and racial attitudes):\nWhile land was the primary cause, other factors contributed. The Boer republics needed African labour for their farms, leading to systems like the inboekelinge (forced apprenticeship of black children). Racial attitudes meant the Boers did not consider Africans as equal partners in negotiations. These factors intensified the conflict but were secondary to the fundamental land dispute.\n\nBODY PARAGRAPH 5 (British imperial interests):\nBritish imperial policy also shaped the conflict. Britain intervened and withdrew based on its own interests, not on justice. The creation of the OFS through the Bloemfontein Convention (1854) removed restraints on Boer expansion. Britain only re-intervened in 1868 when it suited its strategic interests, establishing Basutoland as a protectorate.\n\nCONCLUSION:\nIn conclusion, while multiple factors contributed to conflict on the Highveld — including labour exploitation, racial attitudes, imperial politics, and different political systems — land was overwhelmingly the primary cause. Every major battle and war in the region can be traced back to disputes over who had the right to occupy and use the fertile lands of the Highveld. The boundary lines drawn by colonial authorities, rather than resolving these disputes, made them worse by legitimising Boer land claims at the expense of the Basotho.',
 },
 { id: 'hve-h3', type: 'heading', level: 2, text: 'Essay 3: "The role of colonial powers on the Highveld brought more harm than good to African communities." Discuss. (50 marks)' },
 {
 id: 'hve-essay3', type: 'paragraph',
 text: 'INTRODUCTION:\nBritish colonial involvement on the Highveld during the mid-19th century had profound consequences for African communities, particularly the Basotho. While colonial involvement did provide some protection — most notably the declaration of Basutoland as a protectorate in 1868 — this essay will argue that overall, colonial powers brought far more harm than good to African communities on the Highveld.\n\nBODY PARAGRAPH 1 (Harmful boundary lines):\nThe boundary lines drawn by colonial authorities directly harmed the Basotho. The Napier Line (1843) and the Warden Line (1849) stripped the Basotho of their best agricultural land without meaningful consultation. Major Warden\'s line was particularly devastating, cutting deep into Basotho territory. These boundaries were drawn to favour Boer settlers and showed that colonial authorities did not regard African land rights as legitimate.\n\nBODY PARAGRAPH 2 (British withdrawal left Africans unprotected):\nBritain\'s decision to withdraw from the interior through the Bloemfontein Convention (1854) was harmful because it abandoned the Basotho to face the Orange Free State alone. This led directly to two devastating wars (1858 and 1865–1868) in which the OFS used scorched-earth tactics — burning crops, seizing cattle, and destroying Basotho villages. Thousands of Basotho were impoverished and left homeless.\n\nBODY PARAGRAPH 3 (The inboekelinge system):\nThe Boer republics, which were created as a result of colonial policy, exploited African labour through the inboekelinge system. Black children were forcibly apprenticed to Boer farmers, working without pay until adulthood. Colonial authorities did little to prevent this disguised form of slavery, showing that colonial power was used to benefit white settlers at the expense of Africans.\n\nBODY PARAGRAPH 4 (Limited benefits — the protectorate):\nIt must be acknowledged that colonial involvement did bring some benefits. The declaration of Basutoland as a British protectorate in 1868 saved the Basotho from being absorbed by the OFS. Missionaries introduced literacy and education. However, British protection came only when it served Britain\'s strategic interests, not out of concern for African welfare. The protectorate also came with colonial control — the Basotho lost significant autonomy.\n\nCONCLUSION:\nIn conclusion, while British colonial involvement on the Highveld did provide the Basotho with some protection, the overall impact was overwhelmingly negative. Unfair boundaries, withdrawal of protection, tolerance of forced labour systems, and the prioritisation of settler interests over African rights all demonstrate that colonial powers brought more harm than good to African communities on the Highveld.',
 },
 ],
 },
 ],
};

// ─── Chapter 3: The South African War (1899–1902) ────────────────────────

export const HISTORY_SA_WAR: Chapter = {
 id: 'hist-sa-war',
 subjectId: 'history',
 title: 'The South African War (1899–1902)',
 summary: 'The causes, course, and consequences of the war between Britain and the Boer republics.',

 lessons: [
 // ── Lesson 1: Overview ──
 {
 id: 'hist-saw-overview',
 chapterId: 'hist-sa-war',
 subjectId: 'history',
 title: 'Overview — Events, Timeline & Key Factors',
 minutes: 40,
 blocks: [
 {
 id: 'saw-audio', type: 'audio',
 caption: '� Listen — Podcast Overview',
 text: 'Two hosts break down the entire South African War — causes, phases, concentration camps, and consequences. Perfect for revision.',
 src: 'audio/hist-sa-war-overview.mp3',
 },
 {
 id: 'saw-intro', type: 'callout',
 text: '✍ ESSAY TOPIC ONLY — NO SOURCE-BASED QUESTIONS. The South African War (also called the Anglo-Boer War or Second Boer War) appears in Section B or C as an essay question. You must know: causes (gold, Uitlanders, Milner, Jameson Raid), two phases of the war, scorched-earth and concentration camps, role of women and black South Africans, Treaty of Vereeniging, and consequences.',
 },
 { id: 'saw-h1', type: 'heading', level: 2, text: 'Background: Gold, Capitalism & Imperialism' },
 {
 id: 'saw-p1', type: 'paragraph',
 text: 'In 1886, the world\'s largest gold deposits were discovered on the Witwatersrand in the South African Republic (Transvaal). Unlike alluvial gold (found in rivers), Witwatersrand gold was deep underground, embedded in hard rock. Deep-level mining required huge capital investment in machinery, labour, and expertise. Individual prospectors could not mine it — only large mining companies with access to significant finance.',
 },
 {
 id: 'saw-p2', type: 'paragraph',
 text: 'The gold price was fixed internationally, meaning mining companies could not increase their income by raising prices. The only way to increase profits was to reduce costs — especially labour costs. This created enormous pressure to find cheap labour, leading to the migrant labour system and the compound system where African workers were housed in enclosed compounds, controlled, and paid very low wages.',
 },
 {
 id: 'saw-p3', type: 'paragraph',
 text: 'The Randlords (powerful mine owners like Cecil Rhodes, Alfred Beit, and Barney Barnato) had close ties to British finance. Britain was the main source of investment capital for the mines. The Johannesburg Stock Exchange (JSE) was established to trade mining shares. This created a powerful financial link between the Transvaal gold mines and Britain.',
 },
 { id: 'saw-h2', type: 'heading', level: 2, text: 'The Uitlanders and Political Tensions' },
 {
 id: 'saw-p4', type: 'paragraph',
 text: 'The gold rush attracted thousands of foreigners (Uitlanders) to Johannesburg — mainly British. By the 1890s, Uitlanders may have outnumbered Boers on the Witwatersrand. President Paul Kruger of the Transvaal feared that granting Uitlanders voting rights would lead to them controlling the republic. He imposed strict conditions: Uitlanders had to wait 14 years for citizenship and voting rights. They also faced high taxes and could not use English in official business.',
 },
 {
 id: 'saw-p5', type: 'paragraph',
 text: 'The Uitlanders complained of "taxation without representation." The mining companies resented Kruger\'s government for granting monopolies (e.g., on dynamite, essential for mining), high railway tariffs, and what they saw as corruption and inefficiency.',
 },
 { id: 'saw-h3', type: 'heading', level: 2, text: 'The Jameson Raid (1895–1896)' },
 {
 id: 'saw-p6', type: 'paragraph',
 text: 'Cecil Rhodes, Prime Minister of the Cape Colony and head of De Beers, secretly planned to overthrow Kruger\'s government. Dr Leander Starr Jameson led a small force of about 500 men from Bechuanaland into the Transvaal in December 1895, expecting the Uitlanders in Johannesburg to rise up. The raid was a total failure — the Uitlander uprising never happened, and Jameson\'s force was quickly captured by the Boers.',
 },
 {
 id: 'saw-p7', type: 'paragraph',
 text: 'Consequences of the Jameson Raid: Rhodes was forced to resign as Cape Prime Minister. Kruger was strengthened politically and began arming the Transvaal with modern weapons from Germany and France. Relations between Britain and the Transvaal reached a new low. The Boer republics (Transvaal and Orange Free State) formed a military alliance.',
 },
 { id: 'saw-h4', type: 'heading', level: 2, text: 'The Road to War: Milner & the Bloemfontein Conference' },
 {
 id: 'saw-p8', type: 'paragraph',
 text: 'Sir Alfred Milner was appointed British High Commissioner in 1897. Milner was an imperialist who believed war was necessary to bring the Transvaal under British control. He inflated the Uitlander grievances and pushed for confrontation. In June 1899, Milner and Kruger met at the Bloemfontein Conference to discuss Uitlander rights. The negotiations failed — Kruger offered a 7-year residency requirement (reduced from 14), but Milner demanded 5 years with immediate implementation. Neither side was willing to compromise.',
 },
 {
 id: 'saw-p9', type: 'paragraph',
 text: 'After the conference failed, both sides prepared for war. Kruger issued an ultimatum on 9 October 1899, demanding that Britain withdraw troops from the Transvaal border and submit all disputes to arbitration. Britain rejected the ultimatum, and war began on 11 October 1899.',
 },
 { id: 'saw-h5', type: 'heading', level: 2, text: 'Reasons for the War' },
 {
 id: 'saw-reasons', type: 'list',
 text: [
 'ECONOMIC: Britain wanted control of Transvaal gold — the world\'s richest goldfield. Mining capitalists wanted a more business-friendly government.',
 'POLITICAL: The Uitlander franchise dispute. Kruger refused to grant equal voting rights to British settlers.',
 'IMPERIAL: Britain wanted to create a unified, British-dominated South Africa. Milner actively pushed for war.',
 'STRATEGIC: The Transvaal\'s alliance with Germany (Kaiser Wilhelm\'s congratulatory telegram after the Jameson Raid) threatened British dominance.',
 'THE JAMESON RAID: Deepened mistrust. Kruger armed heavily; the republics formed a military alliance.',
 'MILNER\'S ROLE: Many historians argue Milner deliberately engineered the crisis to justify war.',
 ],
 },
 { id: 'saw-h6', type: 'heading', level: 2, text: 'Phase 1: Conventional War (Oct 1899 – Feb 1900)' },
 {
 id: 'saw-p10', type: 'paragraph',
 text: 'The Boers struck first, invading Natal and the Cape Colony. They besieged three British-held towns: Ladysmith (Natal), Mafeking, and Kimberley (both in the Cape). The Boers won several early victories, and in December 1899 the British suffered "Black Week" — three devastating defeats at Stormberg, Magersfontein, and Colenso within one week.',
 },
 {
 id: 'saw-p11', type: 'paragraph',
 text: 'Britain was humiliated and sent massive reinforcements under Lord Roberts (with Kitchener as his chief of staff). By February 1900, the British had relieved Kimberley and defeated the Boer general Piet Cronjé at Paardeberg. Roberts marched into the Orange Free State, captured Bloemfontein (March 1900), then advanced into the Transvaal and took Pretoria (June 1900). Roberts declared the war over and returned to England — but he was wrong.',
 },
 { id: 'saw-h7', type: 'heading', level: 2, text: 'Phase 2: Guerrilla War (Sep 1900 – May 1902)' },
 {
 id: 'saw-p12', type: 'paragraph',
 text: 'Under leaders like Louis Botha, Jan Smuts, Christiaan de Wet, and Koos de la Rey, the Boers switched to guerrilla warfare. Small, mobile commandos (units) attacked British supply lines, railway tracks, and isolated garrisons, then melted back into the countryside. Boer women on farms supplied the commandos with food, clothing, information about British troop movements, and shelter.',
 },
 { id: 'saw-h8', type: 'heading', level: 2, text: 'Scorched-Earth Policy & Concentration Camps' },
 {
 id: 'saw-p13', type: 'paragraph',
 text: 'Lord Kitchener (who replaced Roberts) responded with a brutal scorched-earth policy. British troops systematically burned Boer farms, destroyed crops, killed livestock, poisoned wells, and salted fields to deny the guerrillas supplies. This devastated the Boer countryside.',
 },
 {
 id: 'saw-p14', type: 'paragraph',
 text: 'Boer women and children (and their African servants) who were left homeless were rounded up and placed in concentration camps. Conditions were horrific: overcrowding, inadequate shelter (bell tents housing 8–12 people), no clean water, no soap, starvation rations, and no medical care. Diseases like measles, typhoid, and dysentery spread rapidly. About 28,000 Boer women and children died in the camps — more than the number of Boer soldiers killed in battle.',
 },
 {
 id: 'saw-p15', type: 'paragraph',
 text: 'Emily Hobhouse, a British woman, visited the camps in 1901 and was horrified. She campaigned tirelessly in Britain to expose the conditions, but was branded a rebel, a liar, and "hysterical" by the press and politicians. Her work eventually led to the Fawcett Commission, which recommended improvements. Hobhouse\'s exposure of the camps caused a massive scandal in Britain.',
 },
 { id: 'saw-h9', type: 'heading', level: 2, text: 'Black South Africans in the War' },
 {
 id: 'saw-p16', type: 'paragraph',
 text: 'The war was NOT simply a "white man\'s war." Black South Africans played significant roles on both sides, though both the British and Boers initially claimed they did not want to involve black people directly.',
 },
 {
 id: 'saw-black', type: 'list',
 text: [
 'UNDER THE BOERS: Black people served as agterryers (after-riders) — performing gun maintenance, carrying ammunition, tending horses, scouting, cooking, and carrying the wounded. There was roughly one agterryer for every 4–5 Boer soldiers (over 10,000 at the start). Boers brutally punished black people suspected of helping the British — executions and flogging.',
 'UNDER THE BRITISH: Black people supported the British as scouts, spies, guards, labourers, and suppliers. About 500 armed black troops defended Mafeking. 4,000 enlisted black troops secured the Transkei. Black people generally supported the British, hoping that a British victory would lead to improved rights.',
 'BLACK CONCENTRATION CAMPS: About 70 separate camps held black people displaced by scorched-earth. Conditions were as bad or worse than white camps. Inmates were forced to do hard labour, build their own shelters, and pay for food. An estimated 20,000 black people died. Unlike white camps, reformers like Emily Hobhouse never visited them, and no public outcry followed.',
 'BROKEN PROMISES: After the war, black people\'s hopes for improved rights were betrayed. The Treaty of Vereeniging deferred the question of black voting rights until "after self-government" — effectively ensuring they would never get the vote, since the Boer republics had never allowed blacks to vote.',
 ],
 },
 { id: 'saw-h10', type: 'heading', level: 2, text: 'Women in the War' },
 {
 id: 'saw-women', type: 'list',
 text: [
 'BOER WOMEN: Provided food, clothing, and intelligence to commandos. Many were "more bitter than the men" (bittereinders). Some wandered the veld after being denied entry to camps. The Women\'s Monument (Vrouemonument) was built in Bloemfontein in 1913.',
 'BRITISH WOMEN: Served as nurses. Emily Hobhouse exposed concentration camp conditions. She faced enormous hostility — called a liar, rebel, and traitor — but her work helped improve camp conditions and remains her lasting legacy.',
 ],
 },
 { id: 'saw-h11', type: 'heading', level: 2, text: 'The End of the War' },
 {
 id: 'saw-p17', type: 'paragraph',
 text: 'By early 1902, the scorched-earth and concentration camp policies had worn down Boer resistance. Only about 7,000 determined bittereinders remained in the field. Thousands more had been captured and sent as prisoners-of-war to Bermuda, Ceylon, India, and St Helena. Many Boers had already surrendered (hensoppers — "hands-uppers") and some had become joiners, actively helping the British.',
 },
 {
 id: 'saw-p18', type: 'paragraph',
 text: 'In April 1902, Boer leaders gathered at Klerksdorp to decide whether to negotiate. They met the British at Melrose House, Pretoria. On 15 May, 60 Boer representatives met at Vereeniging. They were bitterly divided: General de la Rey and Louis Botha argued for surrender, while Christiaan de Wet and President Steyn of the Free State wanted to fight on. Smuts argued that the Afrikaner nation must not be sacrificed "on the altar of independence." Finally, by a vote of 54 to 6, they accepted British terms.',
 },
 { id: 'saw-h12', type: 'heading', level: 2, text: 'The Treaty of Vereeniging (31 May 1902)' },
 {
 id: 'saw-treaty', type: 'list',
 text: [
 'Boers accepted British authority in the Transvaal and Orange River Colony.',
 'The Transvaal and ORC would eventually receive self-government within the British Empire.',
 'Black voting rights would NOT be discussed until AFTER self-government was granted — effectively denying blacks the vote.',
 'Britain would pay £3 million towards Boer war debts.',
 'Dutch (later Afrikaans) could be used in schools and courts.',
 ],
 },
 { id: 'saw-h13', type: 'heading', level: 2, text: 'The Cost of the War' },
 {
 id: 'saw-cost', type: 'list',
 text: [
 'Britain deployed nearly 450,000 men; 22,000 died (two-thirds from disease, not battle). Cost: over £200 million.',
 'Boers fielded about 70,000 men; 7,000+ died in battle; about 29,000 women and children died in concentration camps — nearly 20% of the Boer population.',
 'An estimated 20,000+ black people died in separate concentration camps.',
 'Farmland across the Transvaal and OFS was devastated by the scorched-earth policy.',
 ],
 },
 { id: 'saw-h14', type: 'heading', level: 2, text: 'After the War: Union of South Africa' },
 {
 id: 'saw-p19', type: 'paragraph',
 text: 'Lord Milner governed the Transvaal and ORC as colonies, pursuing a policy of anglicisation. By 1906–1907, both received responsible (self-)government dominated by Boer politicians. The National Convention (1908–1909) negotiated the Union of South Africa, which came into being on 31 May 1910. The franchise compromise meant only whites could vote in the Transvaal and OFS; the Cape kept its qualified non-racial franchise. People of colour could not sit in Parliament. Louis Botha became the first Prime Minister.',
 },
 { id: 'saw-h15', type: 'heading', level: 2, text: 'Heritage and Memory' },
 {
 id: 'saw-p20', type: 'paragraph',
 text: 'For much of the 20th century, Afrikaners remembered the war as a time of suffering and humiliation. The concentration camps became the central symbol. The Vrouemonument (1913) and the War Museum in Bloemfontein memorialised this suffering. Afrikaner nationalists used these memories to unite Afrikaners politically — contributing to their election victory in 1948 and the establishment of apartheid. Since 1994, there have been attempts to remember the war more inclusively, acknowledging the role and suffering of black South Africans.',
 },
 { id: 'saw-h16', type: 'heading', level: 2, text: 'Complete Timeline' },
 {
 id: 'saw-timeline', type: 'list',
 text: [
 '1886 — Gold discovered on the Witwatersrand',
 '1895–96 — Jameson Raid fails; Rhodes resigns',
 '1897 — Milner appointed British High Commissioner',
 'June 1899 — Bloemfontein Conference fails',
 '9 Oct 1899 — Kruger\'s ultimatum',
 '11 Oct 1899 — War begins; Boers invade Natal and Cape',
 'Dec 1899 — "Black Week": British defeats at Stormberg, Magersfontein, Colenso',
 'Feb 1900 — Relief of Kimberley; Boers defeated at Paardeberg',
 'Mar 1900 — Roberts captures Bloemfontein',
 'Jun 1900 — Roberts captures Pretoria',
 'Sep 1900 — Boers switch to guerrilla warfare',
 '1901 — Kitchener implements scorched-earth policy and concentration camps',
 '1901 — Emily Hobhouse visits camps and campaigns in Britain',
 'Apr 1902 — Boer leaders meet at Klerksdorp; negotiations begin',
 '15 May 1902 — Boer representatives meet at Vereeniging; vote 54–6 to accept terms',
 '31 May 1902 — Treaty of Vereeniging signed at Melrose House, Pretoria',
 '1906–07 — Transvaal and ORC receive self-government',
 '1908–09 — National Convention negotiates Union',
 '31 May 1910 — Union of South Africa established',
 ],
 },
 ],
 },
 // ── Lesson 2: PEEL Facts ──
 {
 id: 'hist-saw-peel',
 chapterId: 'hist-sa-war',
 subjectId: 'history',
 title: 'PEEL Essay Facts — The South African War',
 minutes: 30,
 blocks: [
 {
 id: 'sawp-intro', type: 'callout',
 text: '� PEEL Format: Point → Evidence → Explain → Link. Use these structured facts as ready-made essay paragraphs.',
 },
 { id: 'sawp-h1', type: 'heading', level: 2, text: 'PEEL 1: Gold Was the Primary Economic Cause' },
 {
 id: 'sawp-p1', type: 'paragraph',
 text: 'POINT: The discovery of gold on the Witwatersrand in 1886 was the underlying economic cause of the South African War.\n\nEVIDENCE: The Witwatersrand contained the world\'s largest gold deposits, but deep-level mining required huge capital investment. British financiers provided this capital, creating a powerful economic link between Britain and the Transvaal. The Randlords (Rhodes, Beit, Barnato) wanted a government that would reduce costs, provide cheap labour, and remove monopolies like the dynamite concession. The gold price was fixed internationally, so the only way to increase profits was to cut costs.\n\nEXPLAIN: This economic interest meant that powerful British capitalists had a direct financial stake in regime change in the Transvaal. Kruger\'s government, with its monopolies, high tariffs, and restrictions on mining companies, was seen as an obstacle to profit. This gave the British government a strong economic motive for war beyond the stated Uitlander grievances.\n\nLINK: The economic dimension shows that the war was not simply about political rights for Uitlanders — it was about British control of the world\'s most valuable gold mines.',
 },
 { id: 'sawp-h2', type: 'heading', level: 2, text: 'PEEL 2: Milner Deliberately Engineered the Crisis' },
 {
 id: 'sawp-p2', type: 'paragraph',
 text: 'POINT: Sir Alfred Milner, the British High Commissioner, deliberately provoked the crisis that led to war.\n\nEVIDENCE: Milner inflated Uitlander grievances in his dispatches to London (the "Helot\'s despatch" of 1899). At the Bloemfontein Conference (June 1899), he rejected Kruger\'s compromise offer of 7 years\' residency, insisting on 5 years with immediate effect. Milner privately wrote that he wanted war and believed it was the only way to bring the Transvaal under British control.\n\nEXPLAIN: Milner was an arch-imperialist who saw a unified, British-dominated South Africa as essential to British imperial interests. He used the Uitlander question as a justification for war, but his real goal was political control. His refusal to compromise at Bloemfontein shows he was not interested in a peaceful solution.\n\nLINK: Milner\'s role demonstrates that the war was driven by imperial ambition as much as by local grievances.',
 },
 { id: 'sawp-h3', type: 'heading', level: 2, text: 'PEEL 3: The Jameson Raid Deepened Mistrust' },
 {
 id: 'sawp-p3', type: 'paragraph',
 text: 'POINT: The failed Jameson Raid (1895–96) deepened mistrust between Britain and the Boer republics, making war more likely.\n\nEVIDENCE: Cecil Rhodes secretly planned the raid to overthrow Kruger\'s government. Though it failed spectacularly (Jameson\'s force was captured), it had major consequences: Rhodes resigned as Cape Prime Minister, Kruger armed the Transvaal with modern German and French weapons, and the Transvaal and Orange Free State formed a military alliance.\n\nEXPLAIN: The raid confirmed Boer fears that Britain intended to destroy their independence by force. It gave Kruger justification for heavy military spending and a defensive alliance. It also showed that prominent British politicians (Rhodes was also a member of the British government) were willing to use illegal means to achieve their goals.\n\nLINK: The raid was a direct stepping stone to war — it hardened positions on both sides and started the arms build-up that would make the conflict so destructive.',
 },
 { id: 'sawp-h4', type: 'heading', level: 2, text: 'PEEL 4: Scorched-Earth Was a War Crime Against Civilians' },
 {
 id: 'sawp-p4', type: 'paragraph',
 text: 'POINT: Britain\'s scorched-earth policy and concentration camps constituted a deliberate war against Boer civilians.\n\nEVIDENCE: Kitchener ordered the systematic burning of over 30,000 Boer farmsteads, the destruction of crops, the killing of livestock, and the poisoning of wells. About 116,000 Boer women and children were placed in concentration camps where approximately 28,000 died — mostly children under 16 — from measles, typhoid, and starvation. Emily Hobhouse described conditions as having "no room to move, no clean water, no soap, starvation rations."\n\nEXPLAIN: The scorched-earth policy was designed to break the will of the Boer guerrillas by targeting their families and support base. Kitchener described Boer farms as "intelligence agencies and supply depots." By destroying the countryside and imprisoning civilians, Britain removed the guerrillas\' ability to survive. However, the massive death toll — nearly 20% of the Boer population — was a humanitarian catastrophe.\n\nLINK: The camps became the defining memory of the war for Afrikaners and fuelled Afrikaner nationalism for decades, contributing to the rise of the National Party and apartheid.',
 },
 { id: 'sawp-h5', type: 'heading', level: 2, text: 'PEEL 5: Black South Africans Were the War\'s Forgotten Victims' },
 {
 id: 'sawp-p5', type: 'paragraph',
 text: 'POINT: Black South Africans suffered enormously during the war but their experiences were largely ignored.\n\nEVIDENCE: An estimated 20,000 black people died in approximately 70 separate concentration camps, where conditions were as bad or worse than in white camps. Inmates had to build their own shelters, provide their own food, and do hard labour. Unlike white camps, no reformer like Emily Hobhouse visited them, and there was no public outcry. After the war, the Treaty of Vereeniging deferred black voting rights indefinitely.\n\nEXPLAIN: The neglect of black suffering reveals the deeply racist assumptions that underpinned the war. Both British and Boers saw it as a "white man\'s war" even though black people were heavily involved as labourers, scouts, and soldiers. The betrayal of black political hopes after the war — particularly the franchise clause in the Treaty of Vereeniging — set the stage for decades of racial oppression.\n\nLINK: This betrayal directly foreshadowed the Natives\' Land Act of 1913, the colour bar, and ultimately apartheid.',
 },
 { id: 'sawp-h6', type: 'heading', level: 2, text: 'PEEL 6: The Treaty of Vereeniging Sacrificed Black Rights for White Reconciliation' },
 {
 id: 'sawp-p6', type: 'paragraph',
 text: 'POINT: The Treaty of Vereeniging achieved peace between British and Boers at the direct expense of black South Africans\' political rights.\n\nEVIDENCE: The original British proposal included a clause that blacks would be given "some form of representation after the introduction of self-government." Smuts rewrote this to read: "The question of granting the franchise to natives will not be decided until after the introduction of self-government." Since the Boer republics had never allowed blacks to vote, this effectively guaranteed that black people would be permanently excluded.\n\nEXPLAIN: Britain sacrificed the black vote in exchange for Boer acceptance of British authority. This was a cynical political deal — Britain prioritised reconciliation with the Boers over justice for black South Africans. The decision had consequences lasting nearly a century, as black political rights were not fully recognised until 1994.\n\nLINK: The franchise clause in the treaty set the template for racial exclusion that would define South African politics through Union (1910), the Land Act (1913), and apartheid (1948–1994).',
 },
 ],
 },
 // ── Lesson 3: Model Essays ──
 {
 id: 'hist-saw-essays',
 chapterId: 'hist-sa-war',
 subjectId: 'history',
 title: 'Model Essays — The South African War',
 minutes: 40,
 blocks: [
 {
 id: 'sawe-intro', type: 'callout',
 text: '✍ Model essays for likely exam questions on the South African War. Note how each follows: Introduction → PEEL body paragraphs → Conclusion.',
 },
 { id: 'sawe-h1', type: 'heading', level: 2, text: 'Essay 1: "The South African War was caused mainly by British greed for gold." To what extent do you agree? (50 marks)' },
 {
 id: 'sawe-e1', type: 'paragraph',
 text: 'INTRODUCTION:\nThe South African War (1899–1902) was the largest and most costly conflict in South Africa\'s history. Historians have debated its causes for over a century. While gold was undoubtedly a major factor, this essay will argue that the war had multiple causes — economic, political, and imperial — and that British greed for gold alone does not fully explain why the war happened.\n\nBODY PARAGRAPH 1 (Gold as a cause):\nThe discovery of gold on the Witwatersrand in 1886 transformed the Transvaal from a poor farming republic into the world\'s richest gold producer. Deep-level mining required massive British capital investment. The Randlords wanted a government that would reduce mining costs, provide cheap labour, and remove Kruger\'s monopolies (especially the dynamite concession). Britain, as the main source of mining investment, had a direct financial interest in controlling the Transvaal. The fixed gold price meant profits depended entirely on reducing costs, creating powerful economic pressure for political change.\n\nBODY PARAGRAPH 2 (Uitlander grievances as a political cause):\nThe Uitlander franchise dispute was a significant political cause. British settlers in Johannesburg, who may have outnumbered Boers, were denied voting rights (14-year residency requirement). They complained of high taxes, restrictions on English, and monopolies. While some historians argue these grievances were genuine, others point out that Milner deliberately inflated them to justify intervention. The Bloemfontein Conference (June 1899) failed because neither side would compromise on the franchise.\n\nBODY PARAGRAPH 3 (Imperial ambition):\nBritish imperial ambition was arguably as important as gold. Milner wanted a unified, British-controlled South Africa. The Jameson Raid (1895–96) showed that senior British figures like Rhodes were willing to use force to overthrow the Transvaal government. The strategic threat of Transvaal\'s alliance with Germany (the Kaiser\'s telegram) added urgency. Britain wanted to consolidate its control over the entire southern African region.\n\nBODY PARAGRAPH 4 (Kruger\'s policies and Boer nationalism):\nKruger\'s refusal to reform also contributed. His government was increasingly seen as corrupt and autocratic — not only by the British, but also by some Boers. His heavy arms purchases after the Jameson Raid, his alliance with the Orange Free State, and his ultimatum in October 1899 all escalated tensions. However, Kruger was reacting to a genuine threat to his republic\'s independence.\n\nBODY PARAGRAPH 5 (The role of Milner):\nMany historians argue that Milner was the key individual who made war happen. He rejected compromise at Bloemfontein, exaggerated Uitlander suffering, and actively pushed London towards military confrontation. Without Milner\'s determination to force a crisis, it is possible that a diplomatic solution could have been found.\n\nCONCLUSION:\nIn conclusion, while British greed for gold was a fundamental cause of the South African War, it was not the only cause. The war resulted from a combination of economic interests (gold and mining profits), political disputes (the Uitlander franchise), imperial ambition (Milner and British expansionism), and Boer resistance to British control. Gold created the conditions for conflict, but it took the actions of individuals like Milner, Rhodes, and Kruger to turn economic tensions into a devastating war.',
 },
 { id: 'sawe-h2', type: 'heading', level: 2, text: 'Essay 2: "The concentration camps during the South African War were a deliberate British strategy to break Boer resistance." Discuss. (50 marks)' },
 {
 id: 'sawe-e2', type: 'paragraph',
 text: 'INTRODUCTION:\nDuring the South African War, Britain established a system of concentration camps that led to the deaths of approximately 28,000 Boer women and children and 20,000 black South Africans. This essay will examine whether these camps were a deliberate strategy or an unintended consequence of the scorched-earth policy, arguing that while the massive death toll may not have been intentionally planned, the camps were absolutely a deliberate military strategy designed to break Boer resistance.\n\nBODY PARAGRAPH 1 (The camps as deliberate strategy):\nThe concentration camps were directly linked to Kitchener\'s scorched-earth policy, which was itself a deliberate strategy. Kitchener understood that Boer guerrillas depended on their farms and families for food, shelter, clothing, and intelligence about British troop movements. By destroying farms and confining civilians, he aimed to remove the guerrillas\' support base. As Kitchener himself stated, "Every farm is an intelligence agency and supply depot." The camps were therefore a calculated military measure, not an act of charity.\n\nBODY PARAGRAPH 2 (Conditions as evidence of deliberate neglect):\nThe appalling conditions in the camps suggest, at minimum, deliberate neglect. Bell tents designed for 4 people housed 8–12. There was no clean water, no soap, and food rations were at starvation levels. Emily Hobhouse reported that "the water supplied would not go round, no bedsteads or mattresses were to be had, fuel was scarce, and the food ration was small." If the British genuinely intended to protect civilians, they would have provided adequate resources. The death rate — nearly 20% of the Boer population — speaks for itself.\n\nBODY PARAGRAPH 3 (The purpose of hostage-taking):\nHistorian Bill Nasson argues that the camps served as hostage sites. By holding women and children, the British pressured Boer men to surrender. Kitchener believed that "the influence of the most bittereinder women who were keeping up the war could be removed." The camps were designed to separate the bittereinders from their support network and break their will to fight.\n\nBODY PARAGRAPH 4 (Black camps were even worse):\nThe approximately 70 camps for black South Africans received even less attention and resources. Conditions were as bad or worse — inmates had to build their own shelters, provide their own food, and perform hard labour. About 20,000 died. The fact that no reformer like Hobhouse visited these camps and no public outcry followed reveals that the suffering of black people was simply not considered important by either side.\n\nBODY PARAGRAPH 5 (Emily Hobhouse and reform):\nEmily Hobhouse\'s campaign demonstrates that the conditions were not inevitable. After her visit in 1901 and her public campaign in Britain, the Fawcett Commission investigated and recommended improvements. The death rate eventually declined. This proves that the conditions could have been better from the start if the British had chosen to provide adequate resources.\n\nCONCLUSION:\nIn conclusion, the concentration camps were undeniably a deliberate British strategy to break Boer resistance. The scorched-earth policy was calculated, the camps were designed as hostage sites, and the inadequate conditions reflected deliberate neglect rather than inability. While the massive death toll may not have been the intended outcome, the strategy itself was intentional. The camps represent one of the darkest chapters in British imperial history and had lasting consequences for South African politics and society.',
 },
 { id: 'sawe-h3', type: 'heading', level: 2, text: "Essay 3: \"The South African War was not simply a 'white man\\'s war.'\" To what extent do you agree? (50 marks)" },
 {
 id: 'sawe-e3', type: 'paragraph',
 text: 'INTRODUCTION:\nThe South African War (1899–1902) has traditionally been presented as a conflict between the British Empire and the Boer republics — a "white man\'s war." However, this characterisation is misleading. This essay will argue that black South Africans were deeply involved in the war as participants, victims, and stakeholders, and that the war\'s outcomes profoundly shaped their future.\n\nBODY PARAGRAPH 1 (Black participation under the Boers):\nBlack South Africans served the Boer forces in significant numbers as agterryers (after-riders). These men performed essential services: gun-loading, ammunition carrying, horse care, scouting, cooking, dispatch-riding, and tending the wounded. There was approximately one agterryer for every four to five Boer soldiers, meaning over 10,000 served at the start of the war. Under pressure, some Boers even allowed black men into direct combat, breaking their own rules. This participation demonstrates that the war could not have been fought without black involvement.\n\nBODY PARAGRAPH 2 (Black participation under the British):\nBlack people were even more actively involved on the British side. They served as scouts, spies, guards, labourers, and suppliers of crops, livestock, and horses. About 500 armed black troops defended the black quarter of Mafeking during its siege. Four thousand enlisted black troops secured the Transkei. In April 1902, a Zulu night-raid at Holkrantz killed 56 Boer soldiers. Black people supported the British because they hoped that a British victory would lead to improved political rights.\n\nBODY PARAGRAPH 3 (Black victims — concentration camps):\nBlack South Africans were among the war\'s greatest victims. Approximately 20,000 died in about 70 separate concentration camps. These camps received less resources than white camps — inmates had to build shelters, pay for food, and perform hard labour. Unlike white camps, no reformers visited them and no public outcry followed. This invisible suffering shows that the war was fought on the backs of black people whose experiences were deliberately erased from the historical record.\n\nBODY PARAGRAPH 4 (The franchise betrayal):\nThe most damaging consequence for black South Africans was the franchise clause in the Treaty of Vereeniging (1902). Smuts rewrote the original British proposal so that "the question of granting the franchise to natives will not be decided until after the introduction of self-government." Since the Boer republics had never allowed blacks to vote, this guaranteed permanent exclusion. Britain sacrificed black political rights for peace and reconciliation with the Boers.\n\nBODY PARAGRAPH 5 (Long-term consequences for black South Africans):\nThe war\'s outcome shaped black South Africans\' future for nearly a century. The Union of South Africa (1910) was a white-ruled state. The Natives\' Land Act (1913) confined black people to 7–8% of the land. The colour bar reserved skilled jobs for whites. These policies were direct consequences of the political settlement reached at Vereeniging, which prioritised white reconciliation over black rights.\n\nCONCLUSION:\nIn conclusion, the South African War was far more than a "white man\'s war." Black South Africans participated actively, suffered enormously, and were profoundly affected by its outcome. The traditional narrative that ignores their role is both historically inaccurate and deeply unjust. The war should be remembered as a conflict that shaped the lives of all South Africans, and one in which black people were participants, victims, and — tragically — the greatest losers.',
 },
 ],
 },
 // ── Lesson 4: Source-Based Questions & Concept Explainers ──
 {
 id: 'hist-saw-sources',
 chapterId: 'hist-sa-war',
 subjectId: 'history',
 title: 'Source-Based Questions & Concept Explainers',
 minutes: 35,
 blocks: [
 {
 id: 'saws-callout', type: 'callout',
 text: '✍ THIS TOPIC IS ESSAY ONLY — no source-based questions in the exam. This lesson uses sources as reading material to deepen your essay knowledge. The questions below are source-style practice to build your analytical skills, NOT exam format for this topic.',
 },
 { id: 'saws-h1', type: 'heading', level: 2, text: 'How to Answer Source-Based Questions' },
 {
 id: 'saws-method', type: 'list',
 text: [
 'IDENTIFY: Who is the author? When was it written? What type of source is it (letter, speech, photograph, cartoon)?',
 'CONTEXT: What was happening at the time this was written? What does the author\'s position tell you about their perspective?',
 'EXTRACT: Quote or paraphrase what the source says that answers the question.',
 'EVALUATE: Is the source reliable? Does the author have a bias? What does the source NOT tell you?',
 'OWN KNOWLEDGE: Add factual information you know that supports or contradicts the source.',
 ],
 },
 { id: 'saws-h2', type: 'heading', level: 2, text: 'Practice Source A — Emily Hobhouse (1901)' },
 {
 id: 'saws-src-a', type: 'callout',
 text: 'Source A: Emily Hobhouse, Report to the Committee of the South African Women and Children Distress Fund, 1901.\n\n"I call this camp system a wholesale cruelty. It can never be wiped out of the memories of the people. It presses hardest on the children. Entire villages and districts were swept clear of everything. The people were too few for the tents; they were only single-fly tents, and as a rule, tents were shared by eight or ten people. When the four [daily] rations were served out at noon, the people were left to their devices, with no [cook-fires], nothing. There was no soap provided. The water supply was inadequate. I saw great numbers of children suffering from measles, bronchitis and pneumonia. The mortality rate was terrible."',
 },
 {
 id: 'saws-sbq-a', type: 'questions',
 qa: [
 { q: 'According to Source A, what were the conditions in the concentration camps? (3)', marks: 3, a: 'According to Source A, conditions in the concentration camps were terrible. The tents were overcrowded (8–10 people in a single tent). There was no soap and the water supply was inadequate. Food was limited to four daily rations with no cooking facilities. Many children suffered from measles, bronchitis and pneumonia, and the death rate was very high.' },
 { q: 'Why does Hobhouse call the camp system "a wholesale cruelty"? Use Source A and your own knowledge. (4)', marks: 4, a: 'Hobhouse calls it "wholesale cruelty" because the suffering was deliberate, organised, and on a mass scale rather than incidental. From the source, she describes overcrowded tents, no soap, inadequate water, and rampant disease — conditions she observed firsthand. From her own knowledge: Hobhouse knew that Boer civilians had been forcibly removed from their farms (which were then burned under the scorched-earth policy) and placed in these camps without adequate preparation or supplies. About 28,000 Boer women and children ultimately died. Hobhouse argued that the government was responsible for these deaths by design — not accident.' },
 { q: 'How useful is Source A as evidence about conditions in the concentration camps? (4)', marks: 4, a: 'Source A is very useful for several reasons: (1) Hobhouse was an eyewitness who personally visited the camps in early 1901 and saw conditions firsthand. (2) She was writing an official report to a relief fund, so she had a reason to be accurate about conditions in order to persuade donors and politicians. (3) Her account is supported by the Fawcett Commission (sent by the British government to investigate) which confirmed high death rates. LIMITATIONS: (1) Hobhouse was an advocate, not a neutral observer — she was already committed to exposing the camps and may have emphasised the worst conditions. (2) She could only visit a limited number of camps. (3) The source does not mention the separate black concentration camps, where conditions were equally or more severe.' },
 { q: 'Do you think the British government was justified in setting up concentration camps? Explain your answer using Source A and your own knowledge. (5)', marks: 5, a: 'The British government was NOT justified in setting up concentration camps in the conditions described. ARGUMENT: The stated purpose was to house civilians displaced by the scorched-earth policy. However, the conditions Hobhouse describes — overcrowding, no soap, insufficient water, inadequate food, rampant disease — show that the government did not provide for the welfare of the people it forcibly interned. This goes beyond military necessity into deliberate cruelty. The death of 28,000+ Boer civilians (more than died in battle) and an estimated 20,000 black people in separate camps shows the catastrophic human cost. From a legal and ethical standpoint, deliberately placing civilians in life-threatening conditions is a war crime by modern standards. COUNTER-ARGUMENT: Some historians argue the British were overwhelmed by the scale of the operation and did not intend the deaths — conditions were gradually improved after Hobhouse\'s campaign. CONCLUSION: Regardless of intent, the outcome was mass civilian death, which cannot be justified.' },
 ],
 },
 { id: 'saws-h3', type: 'heading', level: 2, text: 'Practice Source B — Treaty of Vereeniging, Clause 8 (1902)' },
 {
 id: 'saws-src-b', type: 'callout',
 text: 'Source B: Clause 8, Treaty of Vereeniging, 31 May 1902.\n\n"The question of granting the franchise to natives will not be decided until after the introduction of self-government."',
 },
 {
 id: 'saws-sbq-b', type: 'questions',
 qa: [
 { q: 'What does Source B tell us about the position of black South Africans after the South African War? (2)', marks: 2, a: 'Source B shows that black South Africans\' right to vote was deliberately excluded from the peace settlement. The clause deferred the question of black voting rights until "after self-government" — which, since the former Boer republics had never allowed blacks to vote, effectively guaranteed permanent exclusion from the franchise.' },
 { q: 'Jan Smuts rewrote the original British proposal for this clause. What does this tell us about British priorities in negotiating the peace? (4)', marks: 4, a: 'The fact that Britain allowed Smuts to rewrite the clause — removing any guarantee of black voting rights — shows that Britain prioritised reconciliation with the Boers over justice for black South Africans. Britain had the power to insist on a franchise clause that protected black rights (since the Boers were the defeated party), but chose not to. This tells us that British imperialism was not primarily motivated by humanitarian concern for non-white people. Bringing the Boers into a united, loyal British South Africa was more important to Britain than fulfilling the hopes of black South Africans who had supported the British side. It also reveals that racial attitudes — the assumption that "natives" were not ready for political rights — were shared by both British and Boer leaders.' },
 { q: 'Using Source B and your own knowledge, explain how the Treaty of Vereeniging contributed to the later system of apartheid. (5)', marks: 5, a: 'Source B shows that the treaty guaranteed black South Africans would have no political voice in the new state. Without any black representation, subsequent parliaments were free to pass laws that served only white interests. The direct consequences were: (1) Union of South Africa (1910) — established with white-only parliament in three of four provinces. (2) Mines and Works Act (1911) — colour bar in industry. (3) Natives\' Land Act (1913) — confined 70% of the population to 7–8% of the land. (4) Urban Areas Act (1923) — enforced urban segregation. (5) 1936 Hertzog Acts — removed qualified black voters from the Cape roll. (6) 1948 apartheid — the National Party formalised these policies into a complete system of racial separation. The treaty was the legal and political foundation for all of this: by ensuring black people had no vote, it guaranteed that every subsequent law would be made by and for white people.' },
 ],
 },
 { id: 'saws-h4', type: 'heading', level: 2, text: 'Concept Explainer: Migrant Labour and the Compound System' },
 {
 id: 'saws-p1', type: 'paragraph',
 text: 'The migrant labour system was central to the South African War\'s economic background. Understanding it deeply is essential for essay writing.',
 },
 {
 id: 'saws-migrant', type: 'list',
 text: [
 'WHY IT EXISTED: Deep-level Witwatersrand gold mining required enormous numbers of unskilled workers. The gold price was fixed internationally — mining companies could only increase profit by reducing costs. The cheapest possible labour was essential.',
 'HOW IT WORKED: African men from reserves and rural areas came to the mines on short-term contracts (usually 6–12 months), then returned home. They were paid very low wages because the assumption was that their families in the reserves would feed themselves from subsistence farming. The migrant worker just needed to cover his own food and accommodation on the mines.',
 'THE COMPOUND SYSTEM: Workers lived in enclosed compounds — large barrack-like buildings within the mine property. They could not leave without permission. This controlled labour supply, prevented desertion, made collective action difficult, and kept workers away from the urban "temptations" that might make them demand higher wages.',
 'ECONOMIC IMPACT ON AFRICAN SOCIETY: The migrant labour system created a "cycle of poverty." The reserves were too small and poor to support families — men HAD to migrate to earn money. When men were away, agricultural production fell. The little money they earned was spent on taxes and basic goods. Families became permanently dependent on male migrant wages. This dependency was intentional — it ensured a constant supply of labour.',
 'RACIAL DIVISION OF LABOUR: The 1911 Mines and Works Act created a "colour bar" — skilled, well-paid jobs were reserved for whites by law. Black workers could only do unskilled or semi-skilled work regardless of their ability. This racial division of the labour force was the basis of apartheid-era job reservation.',
 ],
 },
 { id: 'saws-h5', type: 'heading', level: 2, text: 'Concept Explainer: Why Britain Really Wanted the Transvaal' },
 {
 id: 'saws-p2', type: 'paragraph',
 text: 'Exam questions often ask whether the war was really about Uitlander rights or about gold and empire. Here is the evidence for each position:',
 },
 {
 id: 'saws-reasons', type: 'list',
 text: [
 'EVIDENCE IT WAS ABOUT GOLD AND EMPIRE: (1) The Witwatersrand had the world\'s largest gold deposit — controlling it meant enormous wealth for Britain. (2) Milner admitted privately he wanted war to bring the Transvaal under British control. (3) The mining companies (Randlords) — Cecil Rhodes, Alfred Beit — financed and lobbied for war. (4) The Jameson Raid showed that overthrowing Kruger by force was the real plan long before the Uitlander issue escalated. (5) After the war, Milner immediately imported Chinese labourers and continued the migrant labour system — showing the real priority was cheap labour for the mines, not political rights for Uitlanders.',
 'EVIDENCE IT WAS ABOUT UITLANDER RIGHTS: (1) Uitlanders genuinely were denied voting rights and taxed without representation. (2) They filed formal petitions to the British government. (3) Kruger\'s 14-year residency requirement was unreasonably long. (4) The Bloemfontein Conference failure showed Kruger was unwilling to compromise even on modest reforms.',
 'HISTORIANS\' CONSENSUS: Most historians today agree that Uitlander rights were a PRETEXT for a war whose real causes were economic (gold, mining profits) and imperial (British dominance of South Africa). Milner deliberately engineered a crisis that would justify war. The Uitlanders themselves were not enthusiastic about dying for a war fought in their name — the Uitlander uprising during the Jameson Raid famously never happened.',
 ],
 },
 { id: 'saws-h6', type: 'heading', level: 2, text: 'Quick-Reference: Key People' },
 {
 id: 'saws-people', type: 'definitions',
 rows: [
 { term: 'Paul Kruger', meaning: 'President of the South African Republic (Transvaal). Refused to grant Uitlanders the vote. Issued the ultimatum that started the war. Fled to Europe after Pretoria fell; died in exile 1904.' },
 { term: 'Alfred Milner', meaning: 'British High Commissioner from 1897. Deliberately engineered the crisis to justify war. Governed the Transvaal and ORC as colonies after the war. Implemented anglicisation policy.' },
 { term: 'Cecil Rhodes', meaning: 'Cape Prime Minister, head of De Beers. Secretly planned the Jameson Raid. Resigned after its failure. Died 1902, just before the war ended.' },
 { term: 'Lord Roberts', meaning: 'British commander who replaced Buller. Relieved Kimberley, defeated Boers at Paardeberg, captured Bloemfontein and Pretoria. Declared war over prematurely; returned to England.' },
 { term: 'Lord Kitchener', meaning: 'Roberts\'s chief of staff; took over command. Implemented scorched-earth policy and concentration camps. Negotiated Treaty of Vereeniging.' },
 { term: 'Christiaan de Wet', meaning: 'Orange Free State general. The most successful guerrilla leader — the British never captured him. Insisted on fighting to the end but was outvoted at Vereeniging.' },
 { term: 'Louis Botha', meaning: 'Transvaal general and guerrilla leader. Argued for peace at Vereeniging. Became first Prime Minister of the Union of South Africa in 1910.' },
 { term: 'Jan Smuts', meaning: 'Transvaal politician and lawyer. Led guerrilla campaign into the Cape Colony. Rewrote the franchise clause at Vereeniging. Later became a major Allied figure in both World Wars.' },
 { term: 'Emily Hobhouse', meaning: 'British reformer who visited concentration camps in 1901. Her report exposed horrific conditions. Faced enormous hostility from the press and government but forced improvements to be made.' },
 ],
 },
 ],
 },
 ],
};

// ─── Chapter 4: The Natives' Land Act, 1913 ──────────────────────────────

export const HISTORY_LAND_ACT: Chapter = {
 id: 'hist-land-act',
 subjectId: 'history',
 title: 'The Natives\' Land Act, 1913',
 summary: 'The law that dispossessed black South Africans and foreshadowed apartheid.',

 lessons: [
 // ── Lesson 1: Overview ──
 {
 id: 'hist-land-act-overview',
 chapterId: 'hist-land-act',
 subjectId: 'history',
 title: 'The Natives\' Land Act',
 minutes: 25,
 blocks: [
 {
 id: 'la-callout', type: 'callout',
 text: '✍ EXAM SCOPE: The Natives\' Land Act 1913 is an ESSAY QUESTION topic (Section B/C). You will NOT get source-based questions on this topic — you must write structured essays using PEEL paragraphs. Know: causes of the Act, its main terms, its effects on black South Africans, Sol Plaatje\'s response, and the Act as a forerunner of apartheid.',
 },
 { id: 'la-h1', type: 'heading', level: 2, text: 'Why the Act Was Passed (1913)' },
 {
 id: 'la-p1', type: 'paragraph',
 text: 'In 1913, the new all-white South African parliament passed the Natives\' Land Act. Its main purpose was to divide South Africa legally into white and black territories. Other purposes were to give white people more land to farm on, and to make more black labour readily available to white farmers and the white-run mines and industries in the towns. Black people were no longer allowed to farm for themselves on white-owned farms.',
 },
 {
 id: 'la-context', type: 'paragraph',
 text: 'The Act was passed just three years after the Union of South Africa (1910). The Union government was dominated by former Boer leaders like Louis Botha and Jan Smuts. Although the Cape Colony had a qualified non-racial franchise, the new Union constitution restricted voting rights in the Transvaal and Orange Free State to whites only. The Land Act reflected the racial attitudes of those in power and was designed to ensure a cheap, controlled supply of African labour for white farms and mines.',
 },
 { id: 'la-h2', type: 'heading', level: 2, text: 'Main Terms of the Act' },
 {
 id: 'la-terms', type: 'list',
 text: [
 'Black people (about 70% of the population) were confined to only 7–8% of the land.',
 'The remaining 92–93% was reserved for white ownership and occupation, although white people were only about 20% of the population.',
 'The black "reserves" were widely scattered pieces of land, mainly in the east of the country.',
 'Black people could only remain in "white South Africa" if they were legally employed (or already owned land) there.',
 'Most rural black people on white farms were labour tenants, rent tenants, or share-croppers. The law now required they could only stay if they were legally employed labour tenants.',
 'Providing a landless black person with a place to live was forbidden under penalty of £100 or six months\' imprisonment.',
 ],
 },
 { id: 'la-h3', type: 'heading', level: 2, text: 'Effects of the Act' },
 {
 id: 'la-p2', type: 'paragraph',
 text: 'Thousands of black people who could not obtain employment were thrown off farms, often with their livestock. Men, women, and children wandered in all weather conditions trying to find a place to stay. The reserves became overcrowded, with soil erosion, malnutrition, and disease increasing. Former sharecroppers and rent tenants lost their livelihoods. Families were separated as men had to migrate to cities and mines to find work, leaving women and children in overcrowded reserves.',
 },
 { id: 'la-h4', type: 'heading', level: 2, text: 'Sol Plaatje and Native Life in South Africa' },
 {
 id: 'la-p3', type: 'paragraph',
 text: 'Solomon (Sol) Plaatje was a Tswana-speaker born in the Orange Free State in 1876. He was a writer, journalist, and politician who was a founder-member of the South African Native National Congress (later the ANC) in 1912. In 1913, he travelled across South Africa to document the suffering caused by the Land Act. His book Native Life in South Africa (1916) opens: "Awaking on Friday morning, June 20, 1913 [the day after the Act was passed], the South African Native found himself, not actually a slave, but a pariah [outcast] in the land of his birth."',
 },
 {
 id: 'la-plaatje-src', type: 'callout',
 text: 'Primary Source — Sol Plaatje, Native Life in South Africa, 1916: "Awaking on Friday morning, June 20, 1913, the South African Native found himself, not actually a slave, but a pariah in the land of his birth." Plaatje documented families wandering in winter with their livestock, refused shelter, unable to stop anywhere because the law made it a crime to allow them to stay. He described a mother giving birth on the roadside in freezing conditions because no farm would take them in.',
 },
 { id: 'la-h5', type: 'heading', level: 2, text: 'The Act as a Forerunner of Apartheid' },
 {
 id: 'la-p4', type: 'paragraph',
 text: 'The Natives\' Land Act showed the direction of government policy towards black people. The Mines and Works Act (1911) had already established a colour bar in industry. The Urban Areas Act (1923) enforced segregation in towns — black people were confined to "locations" (townships), subject to curfews, and required to carry passes. In 1936, another Land Act set aside a maximum of 14% of the land for black reserves and removed qualified black voters from the Cape common roll.',
 },
 {
 id: 'la-p5', type: 'paragraph',
 text: 'After the National Party under D.F. Malan won the 1948 election, apartheid was ruthlessly implemented. The basic idea was to separate white people from black people in every possible way and to give white people the best of everything — jobs, land, schools, universities, and places of recreation — as well as the right to rule over people of colour forever.',
 },
 { id: 'la-h6', type: 'heading', level: 2, text: 'Key Definitions' },
 {
 id: 'la-defs', type: 'definitions',
 rows: [
 { term: 'Natives\' Land Act (1913)', meaning: 'Law that divided South Africa into white and black territories, confining 70% of the population to 7–8% of the land.' },
 { term: 'Reserves', meaning: 'Scattered areas of land set aside for black occupation — overcrowded and underdeveloped.' },
 { term: 'Colour bar', meaning: 'Laws reserving skilled and semi-skilled jobs for white people only.' },
 { term: 'Pass system', meaning: 'Laws requiring black men (and later women) to carry passes indicating their employer and right to be in "white" areas.' },
 { term: 'Territorial segregation', meaning: 'The principle of dividing the country into separate white and black territories.' },
 { term: 'Sol Plaatje', meaning: 'Writer, journalist, founding member of the ANC, and author of Native Life in South Africa (1916), which documented the suffering caused by the Land Act.' },
 { term: 'Pariah', meaning: 'An outcast — a person rejected by society.' },
 { term: 'Sharecropper', meaning: 'A farmer who paid for the right to farm on someone else\'s land by giving the landowner a share of the crop.' },
 { term: 'Labour tenant', meaning: 'A person who was allowed to live on a white farm in exchange for working for the farmer for a set number of days per year.' },
 ],
 },
 { id: 'la-h7', type: 'heading', level: 2, text: 'Source-Based Questions Practice' },
 {
 id: 'la-sbq', type: 'questions',
 qa: [
 { q: 'In your own words, explain what Sol Plaatje meant when he said that black South Africans were "not actually a slave, but a pariah in the land of his birth."', marks: 3, a: 'Plaatje meant that although black South Africans were technically legally free (not slaves in the legal sense), the Land Act made them outcasts in their own country. They could not legally live anywhere without working for white people. They had no right to land, could not settle independently, and were expelled from farms where they had lived for generations. Like slaves, their freedom was severely restricted — but without the security of even having a master who was legally responsible for their welfare.' },
 { q: 'Explain how the Natives\' Land Act was linked to the Treaty of Vereeniging (1902) and the Union of South Africa (1910).', marks: 4, a: 'The Treaty of Vereeniging (1902) deferred the question of black voting rights until "after self-government," effectively guaranteeing that black South Africans would be excluded from political power. The Union of South Africa (1910) was a white-dominated state where, outside the Cape, only whites could vote. With no black political voice, parliament was free to pass laws that served only white interests. The Natives\' Land Act (1913) was a direct consequence — a white parliament with no obligation to black voters could legally dispossess the majority of the population.' },
 { q: 'Give THREE effects of the Natives\' Land Act on ordinary black South Africans.', marks: 3, a: '(1) Thousands were expelled from farms where they had lived as sharecroppers or rent tenants, and forced to wander the countryside with their families and livestock seeking somewhere to live. (2) The reserves became severely overcrowded, leading to soil exhaustion, malnutrition, and disease. (3) Men were forced to migrate to cities and mines to find paid work, breaking up families, as women and children remained in the underdeveloped reserves.' },
 { q: 'Why is the Natives\' Land Act described as a "forerunner of apartheid"?', marks: 3, a: 'The Act established the same basic principle that apartheid would later use: dividing South Africa into separate racial territories, with black people confined to a small percentage of the least productive land. It laid the foundation for the system of racial reserves (later called "homelands" or "Bantustans") that apartheid formalised. The Act also established the practice of controlling where black people could live and work — the same principle behind the apartheid pass laws and Group Areas Act.' },
 ],
 },
 ],
 },
 // ── Lesson 2: PEEL Facts ──
 {
 id: 'hist-land-act-peel',
 chapterId: 'hist-land-act',
 subjectId: 'history',
 title: 'PEEL Essay Facts — The Natives\' Land Act',
 minutes: 25,
 blocks: [
 {
 id: 'lap-intro', type: 'callout',
 text: '� PEEL Format: Point → Evidence → Explain → Link. Use these for essay questions about the Land Act.',
 },
 { id: 'lap-h1', type: 'heading', level: 2, text: 'PEEL 1: The Act Was Designed to Control African Labour' },
 {
 id: 'lap-p1', type: 'paragraph',
 text: 'POINT: The primary purpose of the Natives\' Land Act was to create a cheap, controlled supply of African labour for white-owned farms and mines.\n\nEVIDENCE: The Act ended sharecropping (where African farmers worked for themselves on white land, sharing profits). By making it illegal for black people to live anywhere without working for a white employer, it forced millions into the wage labour market. The reserves were deliberately too small to support the population, ensuring men had to seek work in white areas.\n\nEXPLAIN: This was not an accidental consequence — it was the design. White farm owners complained that under sharecropping, black farmers were too independent. They wanted labourers, not competitors. Mines and industries also needed a large supply of cheap migrant workers who could be housed in compounds and paid very low wages.\n\nLINK: This connection between land dispossession and labour supply was a defining characteristic of South African capitalism that persisted through apartheid.',
 },
 { id: 'lap-h2', type: 'heading', level: 2, text: 'PEEL 2: The Act Was the Culmination of Dispossession' },
 {
 id: 'lap-p2', type: 'paragraph',
 text: 'POINT: The Natives\' Land Act was not a sudden event but the culmination of 250 years of land dispossession beginning with Jan van Riebeeck\'s arrival in 1652.\n\nEVIDENCE: The Khoikhoi lost their land to Dutch settlers from 1652. The Xhosa lost land through nine frontier wars. The Zulu, Sotho, and Tswana peoples lost land through the Great Trek, the Mfecane, and British annexations. The Treaty of Vereeniging (1902) sacrificed black political rights. By 1910, a white parliament with no black representation could formalise dispossession through law.\n\nEXPLAIN: Each step built on the previous one. Without the Khoisan\'s dispossession, there would have been no trekboers. Without the frontier wars, there would have been no Boer republics. Without the South African War, there would have been no Union. Each dispossession made the next one easier.\n\nLINK: Understanding the Act as a historical process — not an isolated event — is essential for any essay on land dispossession or the roots of apartheid.',
 },
 { id: 'lap-h3', type: 'heading', level: 2, text: 'PEEL 3: The ANC Was Founded in Response to the Act' },
 {
 id: 'lap-p3', type: 'paragraph',
 text: 'POINT: African political resistance to the Land Act led directly to the founding of the South African Native National Congress (SANNC), later the ANC.\n\nEVIDENCE: The SANNC was founded in January 1912, partly in anticipation of the Act. Sol Plaatje, one of its founding members, was a key figure in documenting and publicising the Act\'s devastation. In 1913, the SANNC sent a delegation to Britain to protest the Act. Plaatje\'s book Native Life in South Africa (1916) was written partly to convince British public opinion to overturn the Act.\n\nEXPLAIN: The Act galvanised black political organisation. It showed that a white parliament would not protect black interests and that black South Africans needed their own political voice. The SANNC\'s ineffective early campaigns (its petition to Britain was ignored) would eventually lead, decades later, to more radical resistance.\n\nLINK: The ANC, which led the anti-apartheid struggle and came to power in 1994, traces its origins directly to resistance against the Natives\' Land Act.',
 },
 ],
 },
 ],
};
