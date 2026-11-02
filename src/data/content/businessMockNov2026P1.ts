/**
 * Standalone memo for "Grade 10 Business Studies P1 November Mock Exam 2" (hlayiso.com).
 * This is a ONE-OFF answer memo for an externally-sourced past paper — it is NOT part of
 * the PracticeExam system, NOT linked to the Library/Chapter data, and deliberately kept
 * separate from everything else in the app. Answers are written from the student's own
 * notes (the Paper 1 scope-only chapters) wherever the topic is covered there.
 */

export interface MockAnswer {
  num: string;
  marks: number;
  question: string;
  answer: string[];
}

export interface MockSection {
  title: string;
  note?: string;
  marks: number;
  items: MockAnswer[];
}

export const BUSINESS_MOCK_NOV2026_P1 = {
  title: 'Business Studies P1 — November Mock Exam 2',
  source: 'hlayiso.com mock paper, answered from your own notes',
  totalMarks: 150,
  sections: [
    {
      title: 'Section A — Question 1 (Compulsory, 30 marks)',
      marks: 30,
      items: [
        {
          num: '1.1.1',
          marks: 2,
          question:
            'All the employees of Dlamini Motors share the belief that the customer always comes first. This forms part of the … of the business.',
          answer: ['C — organisational culture'],
        },
        {
          num: '1.1.2',
          marks: 2,
          question:
            "Lerato's Hair Salon had to change the way it works when most customers started to book appointments on a new cellphone app. This is a challenge of the … environment.",
          answer: ['A — technological'],
        },
        {
          num: '1.1.3',
          marks: 2,
          question:
            'The board of directors of Mzansi Airways decided to open new routes to East Africa over the next five years. This is an example of a/an … decision.',
          answer: ['C — strategic'],
        },
        {
          num: '1.1.4',
          marks: 2,
          question: 'The … protects consumers against unfair practices of credit providers, e.g. reckless lending.',
          answer: ['B — National Credit Act'],
        },
        {
          num: '1.1.5',
          marks: 2,
          question: 'Denel and the SABC are examples of businesses in the … sector.',
          answer: ['D — public'],
        },
        {
          num: '1.2.1',
          marks: 2,
          question: 'The daily sales figures written on individual cash register slips are examples of …',
          answer: ['data'],
        },
        {
          num: '1.2.2',
          marks: 2,
          question:
            'In a/an … organisational structure, specialists advise managers, but they have no authority over the workers of other departments.',
          answer: ['line-and-staff'],
        },
        {
          num: '1.2.3',
          marks: 2,
          question:
            'The management task of comparing actual performance with the plans and taking corrective action is called …',
          answer: ['controlling'],
        },
        {
          num: '1.2.4',
          marks: 2,
          question:
            'A/An … allows a business to use an asset, such as a photocopier, in return for monthly payments without becoming the owner of the asset.',
          answer: ['lease'],
        },
        {
          num: '1.2.5',
          marks: 2,
          question:
            'A system that checks quality at every stage of the production process to prevent mistakes from happening is called …',
          answer: ['quality assurance'],
        },
        {
          num: '1.3.1',
          marks: 2,
          question: 'Regulators',
          answer: ['G — organisations that monitor businesses to make sure that they obey the laws of their industry, e.g. the National Credit Regulator'],
        },
        {
          num: '1.3.2',
          marks: 2,
          question: 'Line organisational structure',
          answer: ['C — each employee receives instructions from, and reports to, only one manager'],
        },
        {
          num: '1.3.3',
          marks: 2,
          question: 'Poverty',
          answer: ['E — a situation where people cannot afford basic needs such as food, clothing and shelter'],
        },
        {
          num: '1.3.4',
          marks: 2,
          question: 'Inequality',
          answer: ['F — the gap in income and wealth between the rich and the poor'],
        },
        {
          num: '1.3.5',
          marks: 2,
          question: 'Stock control',
          answer: ['B — making sure that the right quantity of stock is available at all times to prevent shortages and over-stocking'],
        },
      ],
    },
    {
      title: 'Section B — Question 2: Business Environments (40 marks)',
      note: 'Choose this question as one of your two Section B answers.',
      marks: 40,
      items: [
        {
          num: '2.1',
          marks: 4,
          question: 'State any FOUR components of the micro environment.',
          answer: [
            'Vision, mission statement, goals and objectives (VMGO)',
            'Organisational resources',
            'Leadership and management',
            'Organisational structure',
          ],
        },
        {
          num: '2.2',
          marks: 4,
          question: 'Explain the purpose of organisational culture.',
          answer: [
            'Organisational culture reflects the shared beliefs, values and ways of doing things that all employees in the business follow (e.g. "the customer always comes first").',
            'It shapes how employees behave and make decisions, guiding them in the absence of direct instructions.',
            'It helps build a consistent identity/image for the business, both internally and to the outside world.',
            'It increases employee commitment and unity by giving everyone a shared sense of purpose.',
          ],
        },
        {
          num: '2.3.1',
          marks: 6,
          question:
            'GAMEDZE TRANSPORT (GT): Identify TWO components of the macro environment that pose challenges to GT. Motivate your answer by quoting from the scenario.',
          answer: [
            'Economic environment — quote: "The increase in fuel prices this year has reduced the profits of GT." Rising fuel costs are an economic factor that directly reduces profitability.',
            'Legal environment — quote: "New regulations require all minibus taxis to be fitted with tracking devices by the end of 2027." This is new legislation GT must comply with, which involves extra cost.',
            '(Physical/natural environment is also acceptable — quote: "Heavy floods washed away a bridge on one of its routes in February," since floods are a physical/natural-environment challenge.)',
          ],
        },
        {
          num: '2.3.2',
          marks: 4,
          question: 'Recommend ways in which GT can deal with the challenges identified in QUESTION 2.3.1.',
          answer: [
            'GT can negotiate fuel contracts or adjust fares/routes to absorb higher fuel costs, and explore more fuel-efficient vehicles.',
            'GT can budget in advance for the cost of fitting tracking devices and start the process early so it is compliant well before the 2027 deadline.',
            '(If floods were identified: GT can plan alternative routes and build relationships with local authorities to get early warning of road/bridge damage.)',
          ],
        },
        {
          num: '2.4',
          marks: 6,
          question: 'Discuss the relationship between the micro, market and macro environments.',
          answer: [
            'A change in the macro environment may cause a change in the micro environment which may in turn create a change in the market environment, e.g. an increase in the interest rate may lead to an increase in production costs, which may reduce consumer spending.',
            'Businesses (the micro environment) are in constant interaction with components of the market and macro environment.',
            'Businesses are challenged by changes in the market and macro environment which cannot be controlled by the business.',
            'The business has full control over all elements/features of the micro environment.',
            'The business has less/little control over the market environment, but it can influence it.',
            'The business has no control over the macro environment, but it must develop strategies to adapt to the challenges posed by this environment.',
          ],
        },
        {
          num: '2.5',
          marks: 4,
          question: 'Distinguish between the public sector and the private sector.',
          answer: [
            'The public sector consists of businesses/organisations owned and controlled by the government (e.g. Denel, the SABC), funded mainly through taxpayers’ money, and aimed at providing services to the public rather than making a profit.',
            'The private sector consists of businesses owned and controlled by private individuals or groups of individuals, operated mainly to make a profit for the owners/shareholders.',
          ],
        },
        {
          num: '2.6',
          marks: 6,
          question: 'Explain the importance of the formal sector for the South African economy.',
          answer: [
            'The formal sector is registered with the government and pays tax, so it contributes directly to government revenue through income tax, VAT and company tax.',
            'It creates formal, regulated employment opportunities, reducing unemployment.',
            'It complies with labour laws (e.g. minimum wage, UIF, safe working conditions), giving employees legal protection and benefits.',
            'It contributes to the Gross Domestic Product (GDP) and overall economic growth.',
            'It attracts both local and foreign investment because formal businesses are regulated, accountable and more trustworthy to investors.',
            'It provides reliable, good quality goods and services, and consumers have legal recourse if something goes wrong (unlike in the informal sector).',
          ],
        },
        {
          num: '2.7',
          marks: 6,
          question: 'Explain the importance of having an organisational structure for a business.',
          answer: [
            "The organisational structure shows each person's tasks and level of authority and responsibility.",
            'The structure also shows the flow of instruction and feedback in the business.',
            'It determines the position of management, the departments and the employees.',
            'It determines who reports to whom, and which departments fall under which manager.',
            'The structure also indicates the way decisions are taken and carried out.',
            'Duties (jobs) with the same function are grouped together and coordinated.',
          ],
        },
      ],
    },
    {
      title: 'Section B — Question 3: Business Operations (40 marks)',
      note: 'Choose this question as your other Section B answer.',
      marks: 40,
      items: [
        {
          num: '3.1',
          marks: 4,
          question: 'Name any FOUR methods that a business can use to carry out its public relations.',
          answer: ['Media', 'Direct contact', 'Brochures', 'Exhibitions'],
        },
        {
          num: '3.2',
          marks: 4,
          question: 'Differentiate between internal public relations and external public relations.',
          answer: [
            'Internal public relations creates a good company image and awareness to employees in the company.',
            'External public relations creates a good company image and awareness to those outside of the company.',
          ],
        },
        {
          num: '3.3.1',
          marks: 6,
          question:
            'KHUMALO HOTEL GROUP (KHG): Identify the level of management of EACH of the following people in KHG: (a) Mr Khumalo (b) Ms Peters (c) Sipho',
          answer: [
            '(a) Mr Khumalo — Top level management (the managing director decides to open three new hotels over five years, a long-term strategic decision).',
            '(b) Ms Peters — Middle level management (head of the human resources department, drawing up a plan/implementing a tactical decision for her department).',
            '(c) Sipho — Lower-level management (kitchen supervisor checking day-to-day, routine operational tasks each morning).',
          ],
        },
        {
          num: '3.3.2',
          marks: 4,
          question:
            'Explain the responsibilities of the level of management identified for Ms Peters in QUESTION 3.3.1(b).',
          answer: [
            'Controls the people and processes in the business.',
            'Is the link between top and lower-level management.',
            'Passes information from top management to lower management.',
            'Focuses on how the business will carry out strategic decisions and acquires the resources needed in their department.',
          ],
        },
        {
          num: '3.4',
          marks: 6,
          question: 'Discuss the correlation between management and the success of a business.',
          answer: [
            'Management plays an important role in making the correct decisions and motivating employees to be productive.',
            'Poor management can result in ineffective employees and loss in productivity.',
            'Businesses require ongoing decision-making and problem solving.',
            'Problems that cannot be solved and decisions that are not made appropriately can lead to a decrease in productivity.',
            'Good, consistent management leads to higher productivity, a better reputation, and a greater likelihood of achieving the business’s vision, mission, goals and objectives.',
          ],
        },
        {
          num: '3.5',
          marks: 4,
          question: 'Outline the qualities of a good leader.',
          answer: [
            'Guides, motivates and inspires others to achieve goals.',
            'Establishes a productive working climate and guides employees in the right direction.',
            'Lets staff know what needs to be done and by when.',
            'Acts as a role model for employees, providing supervision and performance feedback.',
          ],
        },
        {
          num: '3.6.1',
          marks: 2,
          question:
            'Mabaso Traders bought a delivery van and pays for it in monthly instalments. The business will only become the owner after the last instalment is paid.',
          answer: ['Instalment sale agreement (hire purchase).'],
        },
        {
          num: '3.6.2',
          marks: 2,
          question: "A wholesaler allows Nomsa's Tuck Shop to take stock now and pay for it in 60 days.",
          answer: ['Trade credit (credit provided by a supplier).'],
        },
        {
          num: '3.7',
          marks: 8,
          question: 'Evaluate the impact of the Consumer Protection Act (CPA) on businesses.',
          answer: [
            'Positives: Businesses may be safeguarded from dishonest competitors.',
            'Positives: Businesses may build a good image if they ensure that they do not violate consumer rights.',
            'Positives: Prevents larger businesses from undermining smaller ones.',
            'Positives: May gain consumer loyalty if they comply with the CPA.',
            'Positives: Faulty items may be replaced/repaired/refunded if the fault occurs within six months after purchase.',
            'Negatives: Confidential business information may become available to competitors.',
            'Negatives: Penalties for non-compliance may be very high.',
            'Negatives: Staff need to be trained/legal experts consulted, which can increase costs.',
            'Negatives: Consumers can take advantage of businesses and return goods when it is not necessary to do so.',
            'Negatives: Administration costs increase as legal contracts need to be worded in plain language.',
          ],
        },
      ],
    },
    {
      title: 'Section B — Question 4: Miscellaneous Topics (40 marks, alternative choice)',
      note: 'This is the third Section B option — only needed if you choose it instead of Question 2 or 3.',
      marks: 40,
      items: [
        {
          num: '4.1.1',
          marks: 2,
          question:
            'Members of Quick Riches Club are promised huge returns, but they are paid only from the money of new members who join the club.',
          answer: ['A pyramid scheme.'],
        },
        {
          num: '4.1.2',
          marks: 2,
          question: 'Tumelo makes and sells his own beer in a back room without a liquor licence.',
          answer: ['Bootlegging (illegal/unlicensed trading).'],
        },
        {
          num: '4.1.3',
          marks: 2,
          question: 'A gang that sells stolen cars deposits the money through a car wash so that it looks as if the money was earned legally.',
          answer: ['Money laundering.'],
        },
        {
          num: '4.2.1',
          marks: 2,
          question: 'MAKHADO FRESH PRODUCE (MFP): Quote TWO threats that MFP faces from the scenario.',
          answer: [
            '"A large supermarket chain has started to grow its own vegetables."',
            '"Thieves stole the irrigation pipes on the farm of MFP twice this year."',
          ],
        },
        {
          num: '4.2.2',
          marks: 4,
          question: 'Recommend ONE way in which MFP can deal with EACH threat quoted in QUESTION 4.2.1.',
          answer: [
            'Against the supermarket growing its own vegetables: MFP can differentiate itself by offering organic/specialised produce, better quality, or more reliable delivery than the supermarket can produce itself.',
            'Against the stolen irrigation pipes: MFP can install security measures such as fencing, security patrols, alarms or marking equipment to deter theft and recover losses.',
          ],
        },
        {
          num: '4.3',
          marks: 4,
          question: 'Explain the impact of piracy on businesses.',
          answer: [
            'Businesses lose sales and profit as consumers buy cheaper pirated/counterfeit versions instead of the genuine product.',
            'Damages the brand image and reputation of the legitimate business, as poor-quality pirated goods are associated with the brand.',
            'Reduces the incentive for businesses to invest in innovation and new products, since pirated copies erode their competitive advantage.',
            'Leads to job losses in the legitimate industry as sales and revenue decline.',
          ],
        },
        {
          num: '4.4(a)',
          marks: 2,
          question: 'Describe: Intermediaries',
          answer: [
            'Intermediaries are all those businesses that play a role in distributing/promoting the goods and services to customers, bridging the gap between the manufacturer and the consumer.',
          ],
        },
        {
          num: '4.4(b)',
          marks: 2,
          question: 'Describe: Non-governmental organisations (NGOs)/Civil society',
          answer: [
            'NGOs are non-profit organisations that operate separately from the government, established to fulfil important needs in the community by addressing socio-economic issues; they are part of the market environment because they supply consumer goods/services and are concerned about the welfare of others.',
          ],
        },
        {
          num: '4.5',
          marks: 4,
          question: 'Outline any FOUR rights of consumers in terms of the National Credit Act (NCA).',
          answer: [
            'The right to apply for credit.',
            'The right to receive information in one’s official language.',
            'The right to be protected from unfair discrimination in granting credit.',
            'The right to be given reasons why an application for credit is refused.',
          ],
        },
        {
          num: '4.6',
          marks: 6,
          question: 'Discuss the importance of stock control for businesses.',
          answer: [
            'Enables businesses to determine the amount/value of stock.',
            'Businesses can check the cost and selling price of products.',
            'Ensures that there is enough stock to meet the normal demand of customers.',
            'Keeps the correct levels of stock on hand.',
            'Records the cost prices and selling prices of stock.',
            'Identifies theft in the business when the physical stock count is compared with the electronic stock control system.',
          ],
        },
        {
          num: '4.7',
          marks: 6,
          question:
            "PILLAY'S PRINTING (PP): Identify TWO business functions that apply to PP. Motivate your answer by quoting from the scenario.",
          answer: [
            'Human Resources function — quote: "Mrs Pillay interviewed five candidates before she appointed two new graphic designers." This is recruitment and selection, a core HR activity.',
            'Public Relations function — quote: "PP sponsored printed banners for the local school’s sports day and sent a press release to the community newspaper." Sponsorship and press releases are classic PR activities.',
            '(General Management is also acceptable — quote: "Mrs Pillay set a goal to increase sales by 15% next year and divided the work among her three supervisors," which shows planning and organising.)',
          ],
        },
        {
          num: '4.8',
          marks: 4,
          question: 'Distinguish between data and information.',
          answer: [
            'Data refers to raw, unprocessed facts and figures (e.g. daily sales figures written on individual cash register slips) that have not yet been organised or given meaning.',
            'Information is data that has been processed, organised and interpreted so that it is meaningful and useful for decision-making.',
          ],
        },
      ],
    },
    {
      title: 'Section C — Question 5: Essay — Contemporary Socio-Economic Issues (40 marks)',
      note: 'Answer only ONE Section C question. This is the alternative to Question 6.',
      marks: 40,
      items: [
        {
          num: '5',
          marks: 40,
          question:
            'Write an essay on contemporary socio-economic issues: why they challenge businesses; the impact of strikes and political disturbances; the impact of poverty and inequality; ways businesses can promote inclusivity in the workplace.',
          answer: [
            'Reasons socio-economic issues pose a challenge to businesses:',
            'Socio-economic issues affect consumer spending due to poverty and unemployment.',
            'These issues place extra burdens and expenditure on businesses, as they have to develop policies/support systems/informative programmes to address them.',
            'Businesses are expected to create as many job opportunities as possible to assist government in addressing these issues, which places a financial burden on them.',
            'They must also educate employees on social issues and how to become involved in the community to address them.',
            'Businesses may not be well supported by customers because of their limited disposable income.',
            'Counterfeiting, bootlegging and crime may lead to loss of profit for businesses.',
            'Businesses may feel pressurised to offer corporate social responsibility projects in disadvantaged communities, increasing costs and decreasing profitability.',
            '',
            'Impact of strikes and political disturbances:',
            'Political instability — strikes/protests impact on investment, consumption, and economic growth.',
            'Strikes/protests cause political instability and delays in productivity.',
            'An unstable government and poor relationship between government and business creates a negative political environment.',
            'Reports of corruption in businesses can cause shareholders and investors to lose trust and confidence in a business.',
            'Increased taxation (often linked to political decisions) has the same effect on a business as an increase in costs.',
            '',
            'Impact of poverty and inequality:',
            'Poverty is a situation where people cannot afford basic needs such as food, clothing and shelter.',
            'Inequality is the gap in income and wealth between the rich and the poor.',
            'Poverty and inequality reduce the number of customers who can afford to buy goods and services, lowering business sales and profit.',
            'High poverty levels lead to an increase in the crime rate, which further raises business costs (security, insurance, losses).',
            'Businesses may face pressure to pay higher wages or contribute to community upliftment, increasing costs.',
            'Low levels of literacy linked to poverty mean large numbers of people are unskilled, limiting the pool of skilled labour available to businesses.',
            '',
            'Ways businesses can promote inclusivity in the workplace:',
            'Give everyone opportunities without discriminating based on age, race, gender, sexual orientation, disability/HIV status, etc.',
            'Promote equal opportunity for every employee to obtain skills that lead to promotion and career progression.',
            'Promote respect for each person and their contributions in the workplace.',
            'Promote a healthy/happy working environment, increasing job satisfaction and productivity.',
            'Increase tolerance of each other’s ideas and beliefs, and increase communication in the workplace.',
            'Ensure the workforce is representative of the demographics of the country.',
            'Make provision in the physical business setting for individuals with disabilities.',
            'Implement fair labour practices and seek to redress the inequalities of the past.',
          ],
        },
      ],
    },
    {
      title: 'Section C — Question 6: Essay — The Concept of Quality (40 marks)',
      note: 'The scope sheet highlights this essay — know it cold. Marketing-function indicators are general CAPS knowledge (not in your saved notes, which cover HR/Admin/Financial/General Management).',
      marks: 40,
      items: [
        {
          num: '6',
          marks: 40,
          question:
            'Write an essay on the concept of quality: meaning of quality; quality control vs quality assurance; quality indicators of Purchasing, Marketing and Public Relations functions; importance of quality in promoting business image.',
          answer: [
            'Meaning of quality:',
            'Quality is the ability to satisfy customer/consumer needs.',
            'It refers to the features/characteristics of a product/service that meet customer’s requirements.',
            'It refers to products and services that satisfy needs and exceed customer expectations on a continuous basis.',
            'Includes learning from mistakes and continuously improving all aspects of the business.',
            'It is a degree of excellence to which a product/service satisfies the required needs of customers.',
            '',
            'Quality control vs quality assurance:',
            'Quality control is the inspection of the final product to ensure that it meets the required standards; it includes setting targets, measuring performance and taking corrective measures. Raw materials/employees/machinery/workmanship/production are checked to ensure high quality standards are maintained.',
            'Quality assurance is the continuous maintaining of the required level of quality in a service/product. Inspection is carried out DURING and AFTER the production process, ensuring required standards have been met at every stage, aiming to get the product/service right the first time and preventing mistakes from happening again.',
            '',
            'Quality indicators — Purchasing function:',
            'Buys quality raw materials and services, continuously looking for suitable, new and better suppliers.',
            'Places orders with suppliers and follows up to ensure products are delivered on time.',
            'Ensures ordered goods are delivered at the agreed price, in the right quantities and the right quality.',
            'Follows a clear purchasing procedure (determine need, determine price, select supplier, place order, receive order, pay supplier, distribute stock, complete order).',
            '',
            'Quality indicators — Marketing function (general CAPS knowledge, not in your saved notes):',
            'Products meet customer needs/expectations and are continuously improved based on customer feedback.',
            'Accurate, honest advertising and promotion — no misleading claims about the product.',
            'Market research is conducted regularly to keep up with changing customer needs and tastes.',
            'Competitive, fair pricing that reflects the quality offered.',
            'Effective distribution so products reach customers at the right place and time.',
            '',
            'Quality indicators — Public Relations function:',
            'Businesses get publicity for promotional events and information through the media.',
            'News conferences may be called to release information which will ensure the survival of the business.',
            'Employees may volunteer to spend time with people in need at orphanages/hospitals/schools, etc.',
            'Businesses sponsor community events and produce annual reports that review business activities and achievements.',
            'Networking (direct contact with employees or telephonic communication) is a popular PR method.',
            'Corporate social responsibility is used as a PR activity involving communities to gain positive exposure.',
            '',
            'Importance of quality in promoting business image:',
            'Effective customer service results in increased customer satisfaction, and products/services are constantly improved.',
            'The business gains a competitive advantage over its competitors and a good reputation that promotes brand awareness.',
            'Consumers associate the image of the business with the quality of the product.',
            'Quality products increase sales, profits, business growth and attract prospective investors.',
            'The business gains goodwill and support from the community.',
            'Improves business image as there are fewer defects/returns.',
          ],
        },
      ],
    },
  ] satisfies MockSection[],
};
