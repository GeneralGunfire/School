import type { Chapter } from '@/lib/types';

/**
 * Scope: Inclusivity, Crime & Socio-Economic Issues — scope-only chapter for the Business Studies Paper 1 exam topic.
 * Contains ONLY the content from the student's Paper 1 scope sheet that maps to
 * this source chapter. See src/data/content/businessExamPaper1.ts for the full
 * scope Overview checklist.
 */

const L5_SOCIOECONOMIC = {
  id: 'bs-p1x-l5-socioeconomic',
  chapterId: 'business-exam-p1-ch8',
  subjectId: 'business' as const,
  title: 'Inclusivity, Crime, Socio-Economic Issues & HIV/AIDS',
  minutes: 18,
  blocks: [
    { id: 'bs-p1x-l5-h1', type: 'heading' as const, level: 2 as const, text: 'Socio-Economic Issues (General)' },
    {
      id: 'bs-p1x-l5-tip',
      type: 'callout' as const,
      text: ' Exam Tip: Scenario questions in this topic ask you to IDENTIFY the issue described and QUOTE directly from the scenario, then explain its impact on the business. Always quote exact words before explaining.',
    },
    {
      id: 'bs-p1x-l5-meaning',
      type: 'list' as const,
      text: [
        'Socio-economic issues are aspects that have a negative effect on individuals, communities and businesses.',
        'These issues are societal and economic factors in the macro environment.',
        'Socio-economic challenges are issues that affect people and the economy in a negative way.',
        'They are problems that come from social/people and economic/money circumstances.',
        'Some of the socio-economic issues South Africans face include: inequality, poverty, inclusivity, HIV/AIDS, gambling, counterfeiting, bootlegging, strikes, political disturbances and crime.',
      ],
    },
    { id: 'bs-p1x-l5-h2', type: 'heading' as const, level: 3 as const, text: 'Reasons Why Socio-Economic Issues Pose a Challenge to Businesses' },
    {
      id: 'bs-p1x-l5-reasons',
      type: 'list' as const,
      text: [
        'Socio-economic issues affect consumer spending due to poverty and unemployment.',
        'These issues place extra burdens and expenditure on businesses, as they have to develop policies/support systems/informative programmes to address them.',
        'Businesses are expected to create as many job opportunities as possible to assist government in addressing these issues, which places a financial burden on them.',
        'They must also educate employees on social issues and how to become involved in the community to address them.',
        'Businesses may not be well supported by customers because of their limited disposable income.',
        'Absenteeism of employees affected by HIV/AIDS will result in a decrease in productivity of a business.',
        'Counterfeiting, bootlegging and crime may lead to loss of profit for businesses.',
        'Businesses may feel pressurised to offer corporate social responsibility projects in disadvantaged communities. This, in turn, could lead to increased business costs and decreased profitability.',
      ],
    },
    { id: 'bs-p1x-l5-h3', type: 'heading' as const, level: 2 as const, text: 'Inclusivity' },
    { id: 'bs-p1x-l5-h4', type: 'heading' as const, level: 3 as const, text: 'The Meaning of Inclusivity' },
    {
      id: 'bs-p1x-l5-inc-meaning',
      type: 'list' as const,
      text: [
        'Inclusivity means giving everyone opportunities without discriminating based on age, race, gender, sexual orientation, disabilities/HIV status, etc.',
        'Inclusivity means valuing the differences between people and consciously encouraging diversity in the workplace.',
        'It aims to address imbalances, such as businesses only employing male staff members in management and top positions — a practice that was prevalent before the onset of democracy.',
      ],
    },
    { id: 'bs-p1x-l5-h5', type: 'heading' as const, level: 3 as const, text: 'The Purpose of Inclusivity in the Workplace' },
    {
      id: 'bs-p1x-l5-inc-purpose',
      type: 'list' as const,
      text: [
        'Inclusivity enables businesses to make the best use of all human resources.',
        'Promotes equal opportunity for every employee to obtain skills that will lead to promotion and career progression.',
        'Promotes respect for each person and their contributions in the workplace.',
        'Promotes healthy/happy working environments, which in turn increases job satisfaction and productivity.',
        'Increases tolerance of each other\'s ideas and beliefs.',
        'Increases communication in the workplace so that business goals/objectives are achieved.',
        'Businesses are able to use a variety of talents and skills.',
        'Inclusivity increases education and training, resulting in a decrease in poverty.',
        'Increases the number of middle-class people participating in the economy.',
        'The goal of inclusivity is to ensure that the business implements fair labour practices.',
        'It seeks to redress the inequalities of the past.',
        'Ensures that workplaces are created where people of different races, genders and religions can work together for the benefit of the business.',
        'Ensures that the workforce is representative of the demographics of the country.',
        'Tries to ensure that the physical business setting makes provision for individuals with disabilities.',
      ],
    },
    { id: 'bs-p1x-l5-h6', type: 'heading' as const, level: 2 as const, text: 'HIV/AIDS' },
    { id: 'bs-p1x-l5-h7', type: 'heading' as const, level: 3 as const, text: 'The Meaning of HIV/AIDS' },
    {
      id: 'bs-p1x-l5-hiv-meaning',
      type: 'list' as const,
      text: [
        'AIDS is a disease caused by a virus called Human Immunodeficiency Virus (HIV).',
        'When HIV gets into a person\'s body, it attacks the immune system, lowering the body\'s natural ability to fight infections.',
        'The economic and social impact of HIV/AIDS on businesses is noticeable, as staff members who may be infected are not able to contribute to the success of the business.',
      ],
    },
    { id: 'bs-p1x-l5-h8', type: 'heading' as const, level: 3 as const, text: 'The Negative Impact of HIV/AIDS on Businesses' },
    {
      id: 'bs-p1x-l5-hiv-impact',
      type: 'list' as const,
      text: [
        'Loss of skilled staff due to HIV-related illnesses.',
        'Profits will be lower as production decreases.',
        'High absenteeism because of medical appointments for doctor or clinic visits, resulting in a decrease in productivity.',
        'Conflict can arise among staff if they discover that a worker is HIV positive.',
        'Businesses face high levels of non-attendance of employees who become ill or request to attend funerals.',
        'Businesses find it difficult to keep up production levels and meet deadlines because of poor staff morale.',
        'Businesses face increased costs of finding/recruiting/training replacements.',
        'The pool of available skilled workers is getting smaller due to the high rate of HIV infection.',
        'Businesses need to invest money in programmes to educate workers regarding AIDS.',
        'A decrease in the number of consumers causes a drop in the demand for goods and services.',
        'Costs such as insurance/retirement funds/health/safety are higher as a result of HIV for the business.',
        'Businesses face increased costs of paying benefits like housing subsidies, medical care, funeral care and pension funds.',
        'Staff morale might be low, as employees are concerned about their health, lowering productivity.',
        'Trained and experienced employees often die due to complications caused by HIV before they can grow old. This causes an increase in staff turnover, creating additional expenses when businesses need to hire and train new employees.',
      ],
    },
    { id: 'bs-p1x-l5-h9', type: 'heading' as const, level: 2 as const, text: 'Crime' },
    {
      id: 'bs-p1x-l5-crime-meaning',
      type: 'list' as const,
      text: [
        'Any unlawful and harmful act related to loss of goods in a business due to burglaries/robberies/theft/corruption/hijackings, etc.',
        'Theft is the unlawful taking of someone else\'s property to make it your own.',
        'Crime is any prohibited activity that is punishable by law; it refers to the loss of goods due to theft, corruption, abuse, hijackings and burglaries.',
        'High poverty levels lead to an increase in the crime rate.',
      ],
    },
    { id: 'bs-p1x-l5-h10', type: 'heading' as const, level: 3 as const, text: 'Impact of Crime on Businesses' },
    {
      id: 'bs-p1x-l5-crime-impact',
      type: 'list' as const,
      text: [
        'Loss of staff and customers.',
        'Insurance/security costs become expensive.',
        'Loss of profits due to stolen goods from businesses.',
        'Businesses lose skilled people, resulting in a decline in productivity.',
        'Increased medical expenses as workers are injured during break-ins.',
        'Businesses spend money on installing effective security measures, e.g. alarms, burglar-proofing.',
        'Loss of goods in a business can happen as a result of burglaries, shoplifting, customer theft and employee theft.',
        'The cost of damage to property increases as businesses pay higher insurance premiums to protect themselves.',
        'High rate of absenteeism due to affected employees having to go for trauma counselling.',
        'Loss of essential equipment, causing temporary closure of the business.',
        'Employees can become involved in fraud, bribery, corruption and kickbacks.',
        'An ensuing court case can create negative publicity for the business.',
        'Smaller businesses often cannot afford insurance and have to replace the stolen goods themselves at greater loss.',
        'Lower profits affect the decision to expand and employ more people/pay higher wages.',
        'Crime causes an increase in health costs of employees due to injuries or stress.',
        'Discourages foreign investment and reduces tourism, which impacts negatively on business.',
        'Crime brings about unfair competition from stolen goods resold at a lower price.',
        'Businesses located in crime hotspot areas will be poorly supported by customers, resulting in decreased profits for the business.',
        'Crime disrupts business activities and productivity.',
      ],
    },
    {
      id: 'bs-p1x-l5-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Define the term "socio-economic issues."', marks: 2, a: 'Socio-economic issues are aspects that have a negative effect on individuals, communities and businesses — problems that come from social/people and economic/money circumstances in the macro environment.' },
        { q: 'Define the term "inclusivity."', marks: 2, a: 'Inclusivity means giving everyone opportunities without discriminating based on age, race, gender, sexual orientation, disabilities/HIV status, etc. — it means valuing differences and consciously encouraging diversity in the workplace.' },
        { q: 'Explain the purpose of inclusivity in the workplace.', marks: 4, a: ['It enables businesses to make the best use of all human resources and a variety of talents and skills.', 'It promotes equal opportunity for career progression, respect, and a healthy working environment, improving job satisfaction and productivity.', 'It seeks to redress the inequalities of the past and ensure the business implements fair labour practices.', 'It ensures the workforce is representative of the demographics of the country.'] },
        { q: 'Define "HIV/AIDS" and explain ONE negative impact it has on businesses.', marks: 4, a: ['AIDS is a disease caused by the Human Immunodeficiency Virus (HIV), which attacks the body\'s immune system, lowering its ability to fight infections.', 'Impact: businesses lose skilled staff due to HIV-related illnesses, which decreases production and lowers profits (or any valid impact from the list).'] },
        {
          context: 'Scenario: "After a series of break-ins, Thandi\'s Hardware Store had to install new alarm systems and burglar bars, and several employees took unpaid leave for trauma counselling after a violent robbery."',
          q: 'Identify the socio-economic issue described, quoting from the scenario, and explain TWO of its impacts on the business.',
          marks: 5,
          a: ['The issue is crime.', 'Quote: "a series of break-ins" and "a violent robbery."', 'Impact 1: The business had to spend money on security measures such as alarm systems and burglar bars, increasing costs.', 'Impact 2: The high rate of absenteeism, as affected employees go for trauma counselling, reduces productivity.'],
        },
        {
          q: 'ESSAY-style: Discuss the impact of crime on businesses. (150–200 words)',
          marks: 10,
          a: 'Crime refers to any unlawful and harmful act related to the loss of goods in a business due to burglaries, robberies, theft, corruption and hijackings. Crime has a wide-ranging negative impact on businesses. Firstly, it leads directly to a loss of profits, as stolen goods and damaged property must be replaced, and insurance and security costs become more expensive as businesses install alarms and burglar-proofing. Smaller businesses often cannot afford insurance and must absorb these losses themselves, which can affect their decision to expand, employ more people, or pay higher wages. Crime also causes a loss of skilled staff and increases absenteeism, as affected employees require trauma counselling or medical treatment for injuries, resulting in a decline in productivity. Employees can also become involved in internal crime such as fraud, bribery, corruption and kickbacks, which can create negative publicity if the matter goes to court. On a broader scale, high crime rates discourage foreign investment and reduce tourism, while businesses located in crime hotspot areas are poorly supported by customers, resulting in decreased profits and disrupted business activities overall.',
        },
      ],
    },
  ],
};

export const BUSINESS_EXAM_P1_CH8: Chapter = {
  id: 'business-exam-p1-ch8',
  subjectId: 'business',
  title: 'Scope: Inclusivity, Crime & Socio-Economic Issues',
  summary: 'Only the content on your Paper 1 exam scope — nothing outside it.',
  paper: 1,
  hidden: true,
  lessons: [L5_SOCIOECONOMIC],
};
