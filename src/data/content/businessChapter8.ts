import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_8: Chapter = {
  id: 'business-ch8',
  subjectId: 'business',
  title: 'Chapter 8: Contemporary Socio-Economic Issues',
  summary: 'Grade 10 Paper 1 — Socio-economic issues facing South African businesses: inequality & poverty, inclusivity, unemployment, unproductive labour, HIV/AIDS, gambling, piracy, counterfeiting, bootlegging, strikes, political disturbances, and crime.',
  paper: 1,
  category: 'Business Environments',
  lessons: [
    // ── Lesson 1: Meaning & Overview ────────────────────────────────────────
    {
      id: 'bs-ch8-overview',
      chapterId: 'business-ch8',
      subjectId: 'business',
      title: 'The Meaning of Socio-Economic Issues',
      minutes: 8,
      blocks: [
        { id: 'bs8-ov-h1', type: 'heading', level: 2, text: 'Socio-Economic Issues' },
        {
          id: 'bs8-ov-tip',
          type: 'callout',
          text: ' Exam Tip: Scenario questions in this chapter ask you to IDENTIFY the issue described and QUOTE directly from the scenario, then explain its impact on the business. Always quote exact words before explaining.',
        },
        {
          id: 'bs8-ov-meaning',
          type: 'list',
          text: [
            'Socio-economic issues are aspects that have a negative effect on individuals, communities and businesses.',
            'These issues are societal and economic factors in the macro environment.',
            'Socio-economic challenges are issues that affect people and the economy in a negative way.',
            'They are problems that come from social/people and economic/money circumstances.',
            'Some of the socio-economic issues South Africans face include: inequality, poverty, inclusivity, HIV/AIDS, gambling, counterfeiting, bootlegging, strikes, political disturbances and crime.',
          ],
        },
        { id: 'bs8-ov-h2', type: 'heading', level: 3, text: 'Reasons Why Socio-Economic Issues Pose a Challenge to Businesses' },
        {
          id: 'bs8-ov-reasons',
          type: 'list',
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
        { id: 'bs8-ov-h3', type: 'heading', level: 3, text: 'Types of Socio-Economic Issues' },
        {
          id: 'bs8-ov-types',
          type: 'list',
          text: [
            'Inequality and poverty',
            'Inclusivity',
            'Unemployment',
            'HIV/AIDS',
            'Gambling',
            'Piracy',
            'Counterfeiting',
            'Bootlegging',
            'Strikes/political disturbance',
            'Crime',
          ],
        },
        {
          id: 'bs8-ov-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "socio-economic issues."',
              marks: 2,
              a: 'Socio-economic issues are aspects that have a negative effect on individuals, communities and businesses — problems that come from social/people and economic/money circumstances in the macro environment.',
            },
            {
              q: 'Name any FOUR types of socio-economic issues facing South African businesses.',
              marks: 4,
              a: ['Inequality and poverty', 'Inclusivity', 'Unemployment', 'HIV/AIDS (any 4 of: gambling, piracy, counterfeiting, bootlegging, strikes/political disturbance, crime)'],
            },
            {
              q: 'Explain TWO reasons why socio-economic issues pose a challenge to businesses.',
              marks: 4,
              a: [
                'They affect consumer spending due to poverty and unemployment, meaning businesses may not be well supported by customers with limited disposable income.',
                'They place extra burdens and expenditure on businesses, which must develop policies, support systems and informative programmes — or corporate social responsibility projects — to address them, increasing costs and decreasing profitability.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Inequality & Poverty ──────────────────────────────────────
    {
      id: 'bs-ch8-inequality-poverty',
      chapterId: 'business-ch8',
      subjectId: 'business',
      title: 'Inequality & Poverty',
      minutes: 12,
      blocks: [
        { id: 'bs8-ip-h1', type: 'heading', level: 2, text: 'Inequality and Poverty' },
        { id: 'bs8-ip-h2', type: 'heading', level: 3, text: 'The Meaning of Inequality' },
        {
          id: 'bs8-ip-inequality',
          type: 'list',
          text: [
            'Inequality arises when some individuals are more prosperous than others, or are given better opportunities than other individuals in society.',
            'Some people have more money than others and can therefore access education, basic health care and social services.',
            'Inequality contributes to poverty in the country.',
          ],
        },
        { id: 'bs8-ip-h3', type: 'heading', level: 3, text: 'The Meaning of Poverty' },
        {
          id: 'bs8-ip-poverty',
          type: 'list',
          text: [
            'Poverty is defined as the lack of resources to meet basic human needs.',
            'People are not able to meet their basic human needs when they become unemployed or are retrenched. This leads to poverty in families and society.',
            'Some people have a low level of education and limited skills. They therefore only qualify for low-paying jobs. Due to the high cost of living, these people cannot afford to pay their bills and struggle to provide for all their basic needs.',
            'Poverty often gives rise to crime.',
          ],
        },
        { id: 'bs8-ip-h4', type: 'heading', level: 3, text: 'The Negative Impact of Inequality and Poverty on Businesses' },
        {
          id: 'bs8-ip-impact',
          type: 'list',
          text: [
            'People cannot participate fully in the economy.',
            'Businesses spend more money on social responsibility programmes to address inequality and poverty.',
            'Poverty shrinks the market because people cannot afford to buy luxuries.',
            'Poverty leads to crime, such as shoplifting and robberies on businesses.',
            'Increases violence as groups scramble for better status and social positions.',
            'Businesses spend money on improving security due to robberies and shoplifting.',
            'More money is spent on relieving poverty through social responsibility programmes.',
            'Inequality results in a lack of skills and job opportunities.',
            'Individuals and customers have less or no money to spend on basic goods and services, which influences the profitability of businesses.',
            'Poverty results in the continuation of the cycle of unemployment and homelessness, which can lead to an increase in crime affecting business negatively.',
            'Some people do not have the financial means to buy goods, as they have little to no disposable income, leading to limited profitability for the business as a result of limited or no customer spending.',
            'Limited customer spending means that businesses record lower sales figures.',
            'Businesses may not grow because of reduced sales figures.',
            'Businesses are pressurised by media attention on poverty into investing in poor communities.',
          ],
        },
        {
          id: 'bs8-ip-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "inequality."',
              marks: 2,
              a: 'Inequality arises when some individuals are more prosperous than others, or are given better opportunities than other individuals in society.',
            },
            {
              q: 'Define the term "poverty."',
              marks: 2,
              a: 'Poverty is defined as the lack of resources to meet basic human needs.',
            },
            {
              q: 'Discuss THREE negative impacts of inequality and poverty on businesses.',
              marks: 6,
              a: [
                'Poverty shrinks the market because people cannot afford to buy luxuries, leading to lower sales figures.',
                'Poverty leads to crime such as shoplifting and robberies, forcing businesses to spend more money on security.',
                'Businesses spend more money on social responsibility programmes to address inequality and poverty, which increases costs and decreases profitability.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Inclusivity ────────────────────────────────────────────────
    {
      id: 'bs-ch8-inclusivity',
      chapterId: 'business-ch8',
      subjectId: 'business',
      title: 'Inclusivity in the Workplace',
      minutes: 10,
      blocks: [
        { id: 'bs8-inc-h1', type: 'heading', level: 2, text: 'Inclusivity' },
        { id: 'bs8-inc-h2', type: 'heading', level: 3, text: 'The Meaning of Inclusivity' },
        {
          id: 'bs8-inc-meaning',
          type: 'list',
          text: [
            'Inclusivity means giving everyone opportunities without discriminating based on age, race, gender, sexual orientation, disabilities/HIV status, etc.',
            'Inclusivity means valuing the differences between people and consciously encouraging diversity in the workplace.',
            'It aims to address imbalances, such as businesses only employing male staff members in management and top positions — a practice that was prevalent before the onset of democracy.',
          ],
        },
        { id: 'bs8-inc-h3', type: 'heading', level: 3, text: 'The Purpose of Inclusivity in the Workplace' },
        {
          id: 'bs8-inc-purpose',
          type: 'list',
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
        {
          id: 'bs8-inc-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "inclusivity."',
              marks: 2,
              a: 'Inclusivity means giving everyone opportunities without discriminating based on age, race, gender, sexual orientation, disabilities/HIV status, etc. — it means valuing differences and consciously encouraging diversity in the workplace.',
            },
            {
              q: 'Explain the purpose of inclusivity in the workplace.',
              marks: 4,
              a: [
                'It enables businesses to make the best use of all human resources and a variety of talents and skills.',
                'It promotes equal opportunity for career progression, respect, and a healthy working environment, improving job satisfaction and productivity.',
                'It seeks to redress the inequalities of the past and ensure the business implements fair labour practices.',
                'It ensures the workforce is representative of the demographics of the country.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Unemployment & Unproductive Labour ────────────────────────
    {
      id: 'bs-ch8-unemployment',
      chapterId: 'business-ch8',
      subjectId: 'business',
      title: 'Unemployment & Unproductive Labour Force',
      minutes: 10,
      blocks: [
        { id: 'bs8-un-h1', type: 'heading', level: 2, text: 'Unemployment' },
        { id: 'bs8-un-h2', type: 'heading', level: 3, text: 'The Meaning of Unemployment' },
        {
          id: 'bs8-un-meaning',
          type: 'list',
          text: [
            'Unemployment is the condition where people want to work and are able to work, but cannot find a job.',
            'The state of job-seeking people in the economically active population who are not able to find work despite being willing and able to work.',
            'Unemployment often goes with a lack of skills or the wrong skills for the current job market, but if the economy is not growing fast enough to absorb new job-seekers, many skilled people will also struggle to find employment.',
          ],
        },
        { id: 'bs8-un-h3', type: 'heading', level: 3, text: 'Possible Solutions to Unemployment' },
        {
          id: 'bs8-un-solutions',
          type: 'list',
          text: [
            'Improvement of skills, better education and training.',
            'The government should change the labour laws to encourage small businesses to employ workers.',
            'Businesses can provide skills development programmes through learnerships.',
            'Offer bursaries to the community to improve the level of education.',
            'Businesses must create jobs for members of the community.',
            'Provide entrepreneurial programmes that can promote self-employment.',
            'Support existing small businesses to create more employment opportunities.',
          ],
        },
        { id: 'bs8-un-h4', type: 'heading', level: 2, text: 'Unproductive Labour Force' },
        {
          id: 'bs8-un-unproductive',
          type: 'list',
          text: [
            'An unproductive work force refers to workers who do not work at the required level of productivity for a business to be sustainable.',
            'Workers produce less than they should.',
          ],
        },
        { id: 'bs8-un-impact-h', type: 'heading', level: 3, text: 'Impact of an Unproductive Workforce on Businesses' },
        {
          id: 'bs8-un-impact',
          type: 'list',
          text: [
            'There is always tension between employers and employees because employees are not performing to employers\' expectations.',
            'Low profits for business, making it difficult to survive an economic recession.',
            'Stress for both employees and employers.',
            'Unproductive labour is a major stumbling block to economic growth and sustainability.',
            'It pushes up production costs and makes way for cost-efficient foreign competition that employs highly qualified, skilled and motivated people.',
            'Could result in decreased employment opportunities if businesses switch over to advanced technology to replace labourers.',
          ],
        },
        {
          id: 'bs8-un-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "unemployment."',
              marks: 2,
              a: 'Unemployment is the condition where people want to work and are able to work, but cannot find a job — the state of job-seeking people in the economically active population who cannot find work despite being willing and able to do so.',
            },
            {
              q: 'Suggest TWO possible solutions to unemployment.',
              marks: 4,
              a: ['Improvement of skills through better education and training.', 'Businesses can provide skills development programmes through learnerships (or: offer bursaries; support small business growth).'],
            },
            {
              q: 'Explain how an unproductive workforce can be a stumbling block to a business\'s economic growth.',
              marks: 3,
              a: 'An unproductive workforce produces less than it should, pushing up production costs, leading to low profits and making it difficult for the business to survive an economic recession, while also opening the door to more cost-efficient foreign competition.',
            },
          ],
        },
      ],
    },

    // ── Lesson 5: HIV/AIDS & Gambling ───────────────────────────────────────
    {
      id: 'bs-ch8-hiv-gambling',
      chapterId: 'business-ch8',
      subjectId: 'business',
      title: 'HIV/AIDS & Gambling',
      minutes: 14,
      blocks: [
        { id: 'bs8-hg-h1', type: 'heading', level: 2, text: 'HIV/AIDS' },
        { id: 'bs8-hg-h2', type: 'heading', level: 3, text: 'The Meaning of HIV/AIDS' },
        {
          id: 'bs8-hg-hiv-meaning',
          type: 'list',
          text: [
            'AIDS is a disease caused by a virus called Human Immunodeficiency Virus (HIV).',
            'When HIV gets into a person\'s body, it attacks the immune system, lowering the body\'s natural ability to fight infections.',
            'The economic and social impact of HIV/AIDS on businesses is noticeable, as staff members who may be infected are not able to contribute to the success of the business.',
          ],
        },
        { id: 'bs8-hg-hiv-impact-h', type: 'heading', level: 3, text: 'The Negative Impact of HIV/AIDS on Businesses' },
        {
          id: 'bs8-hg-hiv-impact',
          type: 'list',
          text: [
            'Loss of skilled staff due to HIV-related illnesses.',
            'Profits will be lower as production decreases.',
            'High absenteeism because of medical appointments for doctor or clinic visits, resulting in a decrease in productivity.',
            'Conflict can arise among staff if they discover that a worker is HIV positive.',
            'Businesses face high levels of non-attendance of employees who become ill or request to attend funerals.',
            'Businesses find it difficult to keep up production levels and meet deadlines because of poor staff morale.',
            'Businesses face increased costs of finding/recruiting/training replacements.',
            'The pool of available skilled workers is getting smaller due to the high rate of HIV infection.',
            'The costs of finding replacement employees and recruiting are high.',
            'Businesses need to invest money in programmes to educate workers regarding AIDS.',
            'A decrease in the number of consumers causes a drop in the demand for goods and services.',
            'Costs such as insurance/retirement funds/health/safety are higher as a result of HIV for the business.',
            'Businesses face increased costs of paying benefits like housing subsidies, medical care, funeral care and pension funds.',
            'Staff morale might be low, as employees are concerned about their health, lowering productivity.',
            'Trained and experienced employees often die due to complications caused by HIV before they can grow old. This causes an increase in staff turnover, creating additional expenses when businesses need to hire and train new employees.',
          ],
        },
        { id: 'bs8-hg-h3', type: 'heading', level: 2, text: 'Gambling' },
        { id: 'bs8-hg-gambling-meaning-h', type: 'heading', level: 3, text: 'The Meaning of Gambling' },
        {
          id: 'bs8-hg-gambling-meaning',
          type: 'list',
          text: [
            'Gambling means to bet on something of which the outcome is not sure.',
            'It can take the form of playing games in the hope that some money could be won.',
            'Although gambling is legal, it gives false hope.',
            'Gambling is a risk that individuals take by using their money and placing bets, hoping that they will win more money or a prize.',
          ],
        },
        { id: 'bs8-hg-gambling-types-h', type: 'heading', level: 3, text: 'Types of Gambling' },
        {
          id: 'bs8-hg-gambling-types',
          type: 'definitions',
          rows: [
            { term: 'Pyramid schemes', meaning: 'Businesses that may potentially yield high revenues for people who invest their money in them. Individuals invest more and more money, but often only the individuals at the top of the pyramid receive large sums of money.' },
            { term: 'Illegal gambling', meaning: 'When unlicensed businesses offer gambling to the public. Illegal gambling activities can also take place in poor communities, such as when people play with dice on street corners for money, or when individuals frequent unlicensed casinos.' },
            { term: 'Money laundering', meaning: 'The process by which unlawful profits from crimes are invested in valid businesses to cover up the wrongdoing. The source of the money is camouflaged and made to seem as if it was lawfully gained — e.g. proceeds from illicit drug trading invested in a restaurant or laundry business.' },
          ],
        },
        { id: 'bs8-hg-gambling-impact-h', type: 'heading', level: 3, text: 'The Impact of Gambling on Businesses' },
        {
          id: 'bs8-hg-gambling-impact',
          type: 'list',
          text: [
            'Employees may not work overtime at short notice.',
            'High rate of employee absenteeism.',
            'Local businesses forced out of business.',
            'Gambling hides criminal activities and can lead to workplace violence.',
            'Compulsive gamblers cannot focus on work while preoccupied with gambling.',
            'Compulsive gambling puts a strain on relationships in the workplace.',
            'Addicted employees could also steal to get money for gambling.',
            'Reduces productivity, as it encourages crime and corruption.',
            'When gamblers lose their money, they have less to spend on goods and services, which affects business negatively.',
            'Decrease in savings leads to a decrease in future production.',
            'Less buying power, as people may lose their money on pyramid schemes, casino gambling, etc.',
            'Individuals losing cash can display lower morale levels at work, influencing their work relationships and responsibilities.',
            'Employees can suffer from depression and thereby be unable to focus on their work tasks and responsibilities.',
          ],
        },
        {
          id: 'bs8-hg-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define "HIV/AIDS" and explain ONE negative impact it has on businesses.',
              marks: 4,
              a: [
                'AIDS is a disease caused by the Human Immunodeficiency Virus (HIV), which attacks the body\'s immune system, lowering its ability to fight infections.',
                'Impact: businesses lose skilled staff due to HIV-related illnesses, which decreases production and lowers profits (or any valid impact from the list).',
              ],
            },
            {
              q: 'Name and briefly explain the THREE types of gambling discussed.',
              marks: 6,
              a: [
                'Pyramid schemes: individuals invest money, but usually only those at the top receive large returns.',
                'Illegal gambling: unlicensed businesses offer gambling to the public, often in poor communities.',
                'Money laundering: unlawful profits from crime are invested in legitimate businesses to disguise their criminal origin.',
              ],
            },
            {
              q: 'Discuss how gambling addiction among employees can affect a business\'s productivity.',
              marks: 4,
              a: [
                'Compulsive gamblers cannot focus on work while preoccupied with gambling, reducing productivity.',
                'Addicted employees may steal to fund their gambling, and gambling can hide criminal activity, leading to workplace violence.',
                'Losing money can lower morale and cause depression, further affecting employees\' ability to focus on their responsibilities.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Piracy ─────────────────────────────────────────────────────
    {
      id: 'bs-ch8-piracy',
      chapterId: 'business-ch8',
      subjectId: 'business',
      title: 'Piracy & Legal Solutions',
      minutes: 12,
      blocks: [
        { id: 'bs8-pir-h1', type: 'heading', level: 2, text: 'Piracy' },
        {
          id: 'bs8-pir-tip',
          type: 'callout',
          text: ' Exam Tip: Learn the THREE legal solutions to piracy by name and keyword — Copyright (creative works), Patent (inventions), Trademark (brand identity) — exam questions love to ask you to match a scenario to the correct one.',
        },
        { id: 'bs8-pir-h2', type: 'heading', level: 3, text: 'The Meaning of Piracy' },
        {
          id: 'bs8-pir-meaning',
          type: 'list',
          text: [
            'Piracy refers to the illegal copying of original music/films/books/patent rights/trademarks without the rightful owner\'s permission.',
            'It can involve physical copies/electronic copies that are downloaded illegally from the internet.',
            'Pirated goods are unauthorised copies of copyright material, such as DVDs or CDs.',
          ],
        },
        { id: 'bs8-pir-impact-h', type: 'heading', level: 3, text: 'The Impact of Piracy on Businesses' },
        {
          id: 'bs8-pir-impact',
          type: 'list',
          text: [
            'Consumers no longer value the worth and quality of genuine products sold by businesses.',
            'The business\'s image and reputation can be damaged by inferior counterfeit goods.',
            'Businesses producing the original goods have their profits reduced if piracy occurs.',
            'Piracy also deprives the original artist of his/her income.',
            'People who buy pirated copies contribute to the problem for businesses.',
            'Businesses may experience a decline in sales due to copied or imitation products being distributed.',
            'Businesses may be forced to implement price adjustment strategies to reduce the impact that this has on sales figures.',
            'Businesses will spend money if they need to take legal action against people who copy their products or music.',
            'The copying of trademarks confuses consumers.',
            'The market is flooded with copies of the article, so the price is pushed down.',
          ],
        },
        { id: 'bs8-pir-solutions-h', type: 'heading', level: 3, text: 'Solutions to / Methods of Dealing with Piracy' },
        {
          id: 'bs8-pir-solutions',
          type: 'definitions',
          rows: [
            {
              term: 'Copyright',
              meaning: 'The owner of intellectual property has the right to produce and copy the intellectual property. Includes literary/musical/artistic works, etc. Businesses can sue someone who infringes the copyright, or who sells/distributes work they knew were infringements of copyright. Businesses can take legal action against people who copy their products.',
            },
            {
              term: 'Patent',
              meaning: 'The exclusive right to make use of or sell an invention, or a product made by an invented process, for a limited period of time. The holder of a patent has the sole right to produce and sell the invention — a discovery/scientific method/a literary work, etc. Businesses can take out a patent for new inventions and include a sample of their invention with the application. Businesses must register a patent with the Patents Office in South Africa; the invention must comply with the Patents Act No. 57 of 1978. A patent prevents other businesses/people from producing or selling the same product/specific service, and allows legal proceedings against anyone who uses the invention without permission.',
            },
            {
              term: 'Trademark',
              meaning: 'Registration of the use of a brand name/slogan/symbol, or a combination, to make a product or service recognisable and known. A unique mark that represents a business enterprise and belongs to it; includes words/slogans/signs, etc. Businesses can use trademarks to identify themselves and their products. They must register their trademarks with the register of trademarks at the Companies and Intellectual Property Commission. A registered trademark is protected forever, provided it is renewed every ten years and a renewal fee is paid, and may not be used by another person or business. Damages may be claimed from someone who infringes the trademark.',
            },
          ],
        },
        {
          id: 'bs8-pir-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "piracy."',
              marks: 2,
              a: 'Piracy refers to the illegal copying of original music/films/books/patent rights/trademarks without the rightful owner\'s permission, whether physical or downloaded electronic copies.',
            },
            {
              q: 'Distinguish between a copyright and a patent.',
              marks: 4,
              a: [
                'Copyright gives the owner of intellectual property (literary, musical or artistic works) the right to produce and copy that work, and to sue anyone who infringes it.',
                'A patent gives the exclusive right to make, use or sell an invention or invented process for a limited period, and must be registered with the Patents Office under the Patents Act No. 57 of 1978.',
              ],
            },
            {
              context: 'Scenario: "A clothing retailer discovered that street vendors were selling jackets with a logo almost identical to its registered brand name, confusing its customers."',
              q: 'Identify, quoting from the scenario, which legal solution would best protect the retailer, and explain why.',
              marks: 3,
              a: [
                'The legal solution is a trademark.',
                'Quote: "selling jackets with a logo almost identical to its registered brand name."',
                'A trademark protects a brand name/logo as a unique mark belonging to the business, and the retailer can claim damages from anyone who infringes it.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 7: Counterfeiting, Bootlegging, Strikes, Political Disturbance, Crime ──
    {
      id: 'bs-ch8-counterfeiting-crime',
      chapterId: 'business-ch8',
      subjectId: 'business',
      title: 'Counterfeiting, Bootlegging, Strikes, Political Disturbance & Crime',
      minutes: 16,
      blocks: [
        { id: 'bs8-cc-h1', type: 'heading', level: 2, text: 'Counterfeiting' },
        {
          id: 'bs8-cc-counterfeiting',
          type: 'list',
          text: [
            'Counterfeit goods are copies/imitations of genuine goods, such as clothing/shoes, that are marked with a fake logo/trademark.',
            'They are products that are imitated and packaged to resemble the original, high-priced goods.',
            'Counterfeiting is the process of fraudulently manufacturing, altering or distributing a product that is of lesser value than the original product.',
            'Losses are incurred by businesses of the original product, leading to an increase in prices.',
            'Example of counterfeited goods: branded clothing, shoes and soccer jerseys from the English league.',
          ],
        },
        { id: 'bs8-cc-counterfeiting-impact-h', type: 'heading', level: 3, text: 'The Impact of Counterfeiting on Businesses' },
        {
          id: 'bs8-cc-counterfeiting-impact',
          type: 'list',
          text: [
            'Counterfeits often result in price increases of original goods.',
            'Consumers are often tempted to buy counterfeits because of the considerable price differences.',
            'Counterfeits reduce the sales and profits of businesses.',
            'Businesses lose money that could have been used for expansion and the creation of job opportunities.',
            'Legal costs will increase businesses\' expenses if legal action is taken against those involved in illegal activities.',
          ],
        },
        { id: 'bs8-cc-h2', type: 'heading', level: 2, text: 'Bootlegging' },
        {
          id: 'bs8-cc-bootlegging',
          type: 'list',
          text: [
            'Bootlegging is the recording of a live/broadcast performance without the permission of the performers/songwriters/record company, which is copied and sold.',
            'An example of bootlegging is the selling of illegally copied DVDs of the latest movies on street corners.',
            'Criminals go to great extremes to record movies with handheld devices during a live cinema screening.',
            'Bootlegging refers to unlawfully manufacturing fake goods for sale.',
          ],
        },
        { id: 'bs8-cc-bootlegging-impact-h', type: 'heading', level: 3, text: 'Impact of Bootlegging on Businesses' },
        {
          id: 'bs8-cc-bootlegging-impact',
          type: 'list',
          text: [
            'Businesses lose out on profit.',
            'Businesses may experience a decline in sales due to fake/imitated distribution of products.',
            'Businesses may be forced to implement price adjustment strategies to minimise the impact.',
            'Businesses\' expenses will increase if legal action is taken.',
          ],
        },
        { id: 'bs8-cc-h3', type: 'heading', level: 2, text: 'Strikes' },
        {
          id: 'bs8-cc-strikes',
          type: 'list',
          text: [
            'A strike/labour dispute is a collective refusal of employees to work because of an issue in the workplace, aimed at forcing the employer to give in to demands.',
            'It is a collective action taken by a group of unhappy employees to have their demands accepted.',
            'Strikes may take the form of a go-slow, lockout, and sympathy strike.',
            'It is a dispute between the employer and employees when they cannot agree on wage increases/changes in working conditions, even after negotiations.',
            'The trade union must give notice to the employer when planning a strike.',
          ],
        },
        { id: 'bs8-cc-strikes-impact-h', type: 'heading', level: 3, text: 'The Impact of Strikes on Businesses' },
        {
          id: 'bs8-cc-strikes-impact',
          type: 'list',
          text: [
            'This could make the business unable to meet its contractual obligations, and the business could lose contracts.',
            'The cost of making up all the lost working hours is too high.',
            'Strikes can be violent, as strikers intimidate those employees who do not want to go on strike.',
            'Scares off potential investors.',
            'May result in losses of production, as employees stay absent from work during strikes.',
            'Strike actions may lead to production losses and a decline in sales.',
            'Businesses may be forced to close down operations after strike actions.',
            'May lead to unhealthy working relationships between management and workers.',
            'May force businesses to retrench some of their skilled workers to recover from losses.',
            'Businesses may incur damage to their premises due to protests or protest actions.',
          ],
        },
        { id: 'bs8-cc-h4', type: 'heading', level: 2, text: 'Political Disturbance' },
        {
          id: 'bs8-cc-political',
          type: 'list',
          text: [
            'It is a form of protest by a group of people showing their displeasure at a lack of service delivery/proper housing/poor pay/poor working conditions, etc.',
            'Political disturbance reflects frustration on the part of communities who may not feel that they have an effective voice in formal political processes.',
            'It occurs when a group of people protest against a socio-economic problem and feel that the government is not doing enough to solve the issue.',
            'Protests at universities about the slow rate of transformation and the exclusion of poor, deserving students are an example of political disturbances that can occur.',
          ],
        },
        { id: 'bs8-cc-political-impact-h', type: 'heading', level: 3, text: 'Impact of Political Disturbance on Businesses' },
        {
          id: 'bs8-cc-political-impact',
          type: 'list',
          text: [
            'People in township/informal settlement areas may block roads, preventing employed people from going to work due to service delivery protests.',
            'Scares off potential investors.',
            'Businesses may be forced to close, especially those located in townships.',
            'May result in losses of production as employees stay absent from work during political disturbances; businesses cannot operate at full capacity.',
            'Many businesses suffer losses as a result of damage to property.',
            'Riots can result in increased unemployment if shopkeepers are forced to shut down.',
          ],
        },
        { id: 'bs8-cc-h5', type: 'heading', level: 2, text: 'Crime' },
        {
          id: 'bs8-cc-crime-meaning',
          type: 'list',
          text: [
            'Any unlawful and harmful act related to loss of goods in a business due to burglaries/robberies/theft/corruption/hijackings, etc.',
            'Theft is the unlawful taking of someone else\'s property to make it your own.',
            'Crime is any prohibited activity that is punishable by law; it refers to the loss of goods due to theft, corruption, abuse, hijackings and burglaries.',
            'High poverty levels lead to an increase in the crime rate.',
          ],
        },
        { id: 'bs8-cc-crime-impact-h', type: 'heading', level: 3, text: 'Impact of Crime on Businesses' },
        {
          id: 'bs8-cc-crime-impact',
          type: 'list',
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
          id: 'bs8-cc-definitions',
          type: 'definitions',
          rows: [
            { term: 'Strikes', meaning: 'A form of industrial action where workers refuse to work.' },
            { term: 'Political disturbances', meaning: 'Occurs when a group of people protest to show their disapproval of the handling of a situation in the country.' },
            { term: 'Labour disputes', meaning: 'When the employer and employee disagree on important issues, for example yearly salary or wage increases.' },
            { term: 'Go-slows', meaning: 'A form of industrial action where workers go to work but perform their daily tasks very slowly, restricting the rate of production.' },
            { term: 'Lockouts', meaning: 'When business owners do not allow the workers to work and prevent them from entering the workplace, in order to prevent damage.' },
            { term: 'Crime', meaning: 'Any illegal act or activity that is punishable by law.' },
          ],
        },
        {
          id: 'bs8-cc-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "counterfeiting."',
              marks: 2,
              a: 'Counterfeiting is the process of fraudulently manufacturing, altering or distributing a product that is of lesser value than the original product — counterfeit goods are copies/imitations marked with a fake logo/trademark.',
            },
            {
              q: 'Define the term "bootlegging."',
              marks: 2,
              a: 'Bootlegging is the recording of a live/broadcast performance without the permission of the performers/songwriters/record company, which is then copied and sold, or the unlawful manufacturing of fake goods for sale.',
            },
            {
              q: 'Distinguish between a "strike" and a "go-slow."',
              marks: 4,
              a: [
                'A strike is a collective refusal of employees to work because of an issue in the workplace, aimed at forcing the employer to give in to demands.',
                'A go-slow is a form of industrial action where workers go to work but perform their tasks very slowly, restricting the rate of production, rather than refusing to work entirely.',
              ],
            },
            {
              q: 'Explain how political disturbances can negatively affect businesses, especially those located in townships.',
              marks: 4,
              a: [
                'People may block roads during service delivery protests, preventing employees from getting to work.',
                'Businesses, especially those in townships, may be forced to close, and can suffer losses due to damage to property.',
                'Riots can lead to increased unemployment if shopkeepers are forced to shut down.',
              ],
            },
            {
              context: 'Scenario: "After a series of break-ins, Thandi\'s Hardware Store had to install new alarm systems and burglar bars, and several employees took unpaid leave for trauma counselling after a violent robbery."',
              q: 'Identify the socio-economic issue described, quoting from the scenario, and explain TWO of its impacts on the business.',
              marks: 5,
              a: [
                'The issue is crime.',
                'Quote: "a series of break-ins" and "a violent robbery."',
                'Impact 1: The business had to spend money on security measures such as alarm systems and burglar bars, increasing costs.',
                'Impact 2: The high rate of absenteeism, as affected employees go for trauma counselling, reduces productivity.',
              ],
            },
            {
              q: 'ESSAY: Discuss the impact of crime on businesses. (150–200 words)',
              marks: 10,
              a: 'Crime refers to any unlawful and harmful act related to the loss of goods in a business due to burglaries, robberies, theft, corruption and hijackings. Crime has a wide-ranging negative impact on businesses. Firstly, it leads directly to a loss of profits, as stolen goods and damaged property must be replaced, and insurance and security costs become more expensive as businesses install alarms and burglar-proofing. Smaller businesses often cannot afford insurance and must absorb these losses themselves, which can affect their decision to expand, employ more people, or pay higher wages. Crime also causes a loss of skilled staff and increases absenteeism, as affected employees require trauma counselling or medical treatment for injuries, resulting in a decline in productivity. Employees can also become involved in internal crime such as fraud, bribery, corruption and kickbacks, which can create negative publicity if the matter goes to court. On a broader scale, high crime rates discourage foreign investment and reduce tourism, while businesses located in crime hotspot areas are poorly supported by customers, resulting in decreased profits and disrupted business activities overall.',
            },
          ],
        },
      ],
    },
  ],
};
