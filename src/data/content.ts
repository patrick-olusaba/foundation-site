export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
  date: string;
  cat: string;
  author: string;
  authorImg: string;
  readTime: string;
  body: string[];
  gallery: string[];
}

export interface Program {
  slug: string;
  title: string;
  cat: string;
  icon: string;
  desc: string;
  img: string;
  raised: number;
  goal: number;
  pct: number;
  beneficiaries: string;
  countries: number;
  story: string[];
  gallery: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '500-classrooms-east-africa',
    title: '500 New Classrooms Built Across East Africa',
    excerpt: 'Our education initiative reached a new milestone, constructing 500 classrooms benefiting over 25,000 students.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    date: 'Apr 12, 2026',
    cat: 'Education',
    author: 'Dr. Sarah Kimani',
    authorImg: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
    readTime: '5 min read',
    body: [
      'In a landmark achievement for Jfam Foundation, we have completed construction of 500 new classrooms across Kenya, Tanzania, Uganda, and Ethiopia — bringing quality learning spaces to over 25,000 children who previously studied under trees or in crumbling structures.',
      'Each classroom is built to international standards, equipped with desks, blackboards, clean water access, and solar-powered lighting. Local contractors and community members were employed throughout the construction process, injecting over $3 million into local economies.',
      'The project, funded through a coalition of individual donors and corporate partners including the Gates Foundation and USAID, took 18 months to complete. It represents the largest single infrastructure investment in Jfam Foundation\'s 15-year history.',
      '"Before, we had 80 children sharing one room with no roof," said headteacher Grace Mwangi of Kibera Primary School in Nairobi. "Now every class has its own space, and our students can finally focus on learning."',
      'Beyond the buildings, the initiative trained 1,200 new teachers and distributed 50,000 textbooks. Enrollment rates in target communities have already risen by 34% since the first classrooms opened in January 2026.',
      'We are now planning Phase 2: 300 additional classrooms in West Africa, with construction set to begin in September 2026. Your continued support makes this possible.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?w=800&q=80',
    ],
  },
  {
    slug: 'clean-water-100k-beneficiaries',
    title: 'Clean Water Project Reaches 100,000 Beneficiaries',
    excerpt: 'Thanks to generous donors, our water access program now serves over 100,000 people across 12 countries.',
    img: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80',
    date: 'Mar 28, 2026',
    cat: 'Health',
    author: 'Michael Osei',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    readTime: '4 min read',
    body: [
      'Jfam Foundation\'s Clean Water Access program has crossed a historic milestone: 100,000 people across 12 countries now have reliable access to safe drinking water, up from just 8,000 when the program launched in 2013.',
      'The program has drilled 340 boreholes, installed 120 solar-powered pumping systems, and built 85 community water kiosks. In each location, a local water committee is trained to maintain the infrastructure — ensuring sustainability long after our teams leave.',
      'The impact on child health has been dramatic. In communities with new water access, rates of waterborne illness among children under five have dropped by 67%. School attendance has also improved, as children — mostly girls — no longer spend hours each day fetching water.',
      '"My daughter used to miss school three days a week to carry water from the river," said Fatima Al-Hassan, a community leader in rural Mali. "Now she attends every day and is top of her class."',
      'The program operates in Kenya, Ethiopia, Mali, Niger, Bangladesh, Cambodia, Bolivia, and five other countries. Each borehole costs approximately $8,000 to drill and serves an average of 300 people.',
      'We are targeting 250,000 beneficiaries by 2028. A donation of $25 today contributes directly to the next borehole.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    ],
  },
  {
    slug: 'annual-gala-2m-raised',
    title: 'Annual Gala Raises $2M for Child Welfare',
    excerpt: 'Our annual fundraising gala set a record this year, raising $2 million for programs supporting children in need.',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
    date: 'Mar 10, 2026',
    cat: 'Events',
    author: 'James Mwangi',
    authorImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    readTime: '3 min read',
    body: [
      'Jfam Foundation\'s 10th Annual Gala, held at the Radisson Blu Nairobi on March 8, 2026, shattered all previous fundraising records — raising $2 million in a single evening to support our child welfare programs worldwide.',
      'Over 400 guests attended, including corporate leaders, philanthropists, government officials, and celebrity supporters. The evening featured live performances, a silent auction, and moving testimonials from program beneficiaries who traveled from Kenya and Bangladesh to share their stories.',
      'The headline donation of $500,000 came from TechCare Foundation, a new corporate partner committing to a three-year sponsorship of our Child Education Initiative. Dozens of individual donors pledged monthly gifts ranging from $100 to $10,000.',
      '"Tonight proves that when people come together with a shared purpose, extraordinary things happen," said Executive Director Dr. Sarah Kimani in her keynote address. "Every dollar raised tonight will be in the field within 60 days."',
      'Funds raised will be split across our six core programs, with 40% directed to education, 30% to clean water, and the remainder split between nutrition, medical care, women\'s empowerment, and emergency relief.',
      'Planning for the 2027 Gala is already underway. If you are interested in sponsoring or attending, contact our events team at events@Jfam Foundation.org.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    ],
  },
  {
    slug: 'sports-changing-lives',
    title: 'How Sports Is Changing Lives: Stories from the Field',
    excerpt: 'From Kibera to the national stage — meet the young athletes whose lives were transformed through football, athletics, and mentorship.',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
    date: 'Apr 20, 2026',
    cat: 'Sports',
    author: 'Amina Hassan',
    authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    readTime: '6 min read',
    body: [
      'When 13-year-old Aisha Wanjiru first walked onto the athletics track in Mathare, Nairobi, she had never owned a pair of running shoes. Today, she holds the under-16 800m record for Nairobi County and has been offered a full scholarship to a national sports academy.',
      '"I used to skip school because I felt like there was no point," Aisha says. "The program gave me a reason to come every day. My coach believed in me before I believed in myself."',
      'Aisha\'s story is one of hundreds emerging from Jfam Foundation\'s Youth Sports & Talent Development program, which launched in 2023 across 9 countries. The program combines structured coaching in football, basketball, and athletics with mentorship, nutrition support, and academic scholarships.',
      'In Kampala, Uganda, 15-year-old Moses Ssekandi was identified as a football talent during a community tournament. Within six months of joining the academy, he was selected for the Uganda U-17 regional trials. His mother, a market vendor, says the program also changed his grades: "He used to fail. Now he studies hard because he knows education is part of the deal."',
      'The holistic model is intentional. Every athlete in the program receives two meals a day — addressing the malnutrition that stunts both physical and cognitive development. Coaches are trained not just in sport, but in child safeguarding, mental health first aid, and academic mentoring.',
      '"We don\'t just develop athletes. We develop human beings," says program coordinator David Kamau, a former Kenyan Premier League player who now leads the Nairobi academies. "Sport is the hook. Education, nutrition, and character are the goal."',
      'To date, 14 youth have earned full sports scholarships, 3 have represented national youth teams, and over 200 have shown measurable improvement in school attendance and academic performance since joining the program.',
      'The next phase of the program will expand to Tanzania, Rwanda, and Senegal in late 2026. Sponsoring one child\'s full season — coaching, kit, meals, and competition fees — costs just $75.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
    ],
  },
];

export const PROGRAMS: Program[] = [
  {
    slug: 'child-education',
    title: 'Child Education Initiative',
    cat: 'Education',
    icon: '📚',
    desc: 'We build and equip classrooms, train teachers, and provide scholarships so every child can access quality education regardless of their background or financial situation.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    raised: 84000,
    goal: 100000,
    pct: 84,
    beneficiaries: '18,000+ children',
    countries: 12,
    story: [
      'Education is the most powerful tool we can give a child. Yet for millions of children in Sub-Saharan Africa and South Asia, quality schooling remains out of reach — not because of lack of desire, but lack of infrastructure, trained teachers, and resources.',
      'Jfam Foundation\'s Child Education Initiative addresses this gap end-to-end. We build classrooms, train and pay teachers, provide textbooks and supplies, and offer scholarships to children whose families cannot afford school fees.',
      'Since 2012, we have built 500+ classrooms, trained 1,200 teachers, and awarded 8,000 scholarships. Our schools consistently outperform national averages on literacy and numeracy assessments.',
      'We work closely with local governments and parent communities to ensure every school is sustainable. Parent committees manage day-to-day operations, and local teachers are hired and trained — creating jobs while building community ownership.',
      'Your donation to this program directly funds a child\'s education. $100 sponsors one month of schooling. $1,200 sponsors a full year, including meals, supplies, and a uniform.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?w=800&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    ],
  },
  {
    slug: 'clean-water',
    title: 'Clean Water Access',
    cat: 'Health',
    icon: '💧',
    desc: 'We construct wells, water purification systems, and hygiene facilities in villages lacking safe water.',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    raised: 71000,
    goal: 100000,
    pct: 71,
    beneficiaries: '100,000+ people',
    countries: 8,
    story: [
      'Every five seconds, a child dies from a water-related illness. In many of the communities we serve, the nearest clean water source is a 3-hour walk away — a journey made daily, mostly by women and girls, at the cost of education and economic opportunity.',
      'Our Clean Water Access program drills boreholes, installs solar-powered pumps, and builds community water kiosks in villages across Africa and Asia. Each installation serves an average of 300 people and is designed to last 20+ years.',
      'We train local water committees to maintain and repair the infrastructure, ensuring communities remain self-sufficient. We also run hygiene education programs in schools and health centers.',
      'The results speak for themselves: in communities with our water systems, child mortality from waterborne disease has dropped by 67%, school attendance has risen by 28%, and women report saving an average of 4 hours per day previously spent fetching water.',
      'A single borehole costs $8,000 and serves 300 people for 20 years. That\'s just $1.33 per person per year for clean, safe water.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?w=800&q=80',
    ],
  },
  {
    slug: 'nutrition-meals',
    title: 'Nutrition & Meals Program',
    cat: 'Food',
    icon: '🥗',
    desc: 'We provide daily nutritious meals at schools and community centers, addressing malnutrition that stunts physical and cognitive development.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    raised: 39000,
    goal: 100000,
    pct: 39,
    beneficiaries: '12,000+ children',
    countries: 7,
    story: [
      'Malnutrition is the silent crisis behind many of the world\'s development challenges. A child who is hungry cannot learn. A child who is malnourished in their first 1,000 days faces lifelong cognitive and physical consequences.',
      'Our Nutrition & Meals Program provides daily hot meals to 12,000+ children at schools and community feeding centers across 7 countries. Meals are designed by nutritionists to meet children\'s daily requirements for protein, vitamins, and minerals.',
      'We source food locally wherever possible, supporting smallholder farmers and keeping money in local economies. Our community kitchens employ local women, providing income and skills training alongside the feeding program.',
      'The impact on school attendance is immediate and dramatic. In every community where we launch a school feeding program, enrollment rises within weeks — because parents know their children will eat. Attendance rates in our schools average 94%, compared to a regional average of 71%.',
      'For just $0.50 a day — $15 a month — you can ensure one child receives a nutritious meal every school day. That\'s the cost of a cup of coffee.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
    ],
  },
  {
    slug: 'medical-care',
    title: 'Medical Care & Clinics',
    cat: 'Health',
    icon: '🏥',
    desc: 'Mobile health clinics, vaccination drives, and maternal health services bring essential medical care to remote communities.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    raised: 56000,
    goal: 100000,
    pct: 56,
    beneficiaries: '25,000+ patients',
    countries: 10,
    story: [
      'In many of the communities we serve, the nearest hospital is a day\'s journey away. Preventable diseases — malaria, pneumonia, diarrhea — kill thousands of children each year simply because treatment is inaccessible.',
      'Our Medical Care & Clinics program deploys mobile health units staffed by doctors and nurses to remote villages on a regular schedule. We also run vaccination campaigns, maternal health clinics, and community health worker training programs.',
      'Since 2015, our teams have conducted 180,000+ consultations, administered 95,000 vaccines, and supported 12,000 safe deliveries. We have trained 800 community health workers who serve as the first line of care in their villages year-round.',
      'Our maternal health focus has been particularly impactful. In communities with our program, maternal mortality has dropped by 52% and infant mortality by 44% over five years.',
      'Every $50 donated funds a full medical consultation, including diagnosis, treatment, and medication. $500 funds a full day of mobile clinic operations serving up to 60 patients.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?w=800&q=80',
    ],
  },
  {
    slug: 'women-empowerment',
    title: 'Women Empowerment',
    cat: 'Community',
    icon: '👩‍💼',
    desc: 'Vocational training, microfinance, and leadership programs empower mothers and young women to build better futures.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    raised: 28000,
    goal: 100000,
    pct: 28,
    beneficiaries: '5,000+ women',
    countries: 6,
    story: [
      'When you empower a woman, you empower a family. Research consistently shows that women reinvest up to 90% of their income into their children\'s health, education, and nutrition — making women\'s economic empowerment one of the highest-impact investments in child welfare.',
      'Our Women Empowerment program provides vocational training in tailoring, food processing, digital skills, and small business management. Graduates receive startup kits and access to microfinance loans averaging $300 to launch their businesses.',
      'We also run leadership and civic engagement programs, helping women take active roles in community decision-making. In communities where our program operates, women\'s representation on village councils has risen from 8% to 41%.',
      'Over 5,000 women have graduated from our programs since 2018. Average household income among graduates has increased by 180% within two years of completing training.',
      '"I used to depend entirely on my husband," said graduate Amina Koné from Burkina Faso. "Now I run my own tailoring business, employ three other women, and pay my children\'s school fees myself."',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?w=800&q=80',
    ],
  },
  {
    slug: 'emergency-relief',
    title: 'Emergency Relief',
    cat: 'Emergency',
    icon: '🆘',
    desc: 'When disaster strikes, our rapid response teams deploy within 48 hours with food, shelter, medicine, and support.',
    img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80',
    raised: 92000,
    goal: 100000,
    pct: 92,
    beneficiaries: '30,000+ people',
    countries: 15,
    story: [
      'Crises don\'t wait. When conflict erupts, floods strike, or drought devastates a harvest, families need help within hours — not weeks. Jfam Foundation\'s Emergency Relief division was built to respond at the speed that crises demand.',
      'Our rapid response teams are pre-positioned in five regional hubs and can deploy within 48 hours of a crisis declaration. We carry pre-packed emergency kits containing food rations, water purification tablets, shelter materials, and basic medicines for 500 families.',
      'In 2025 alone, we responded to 14 emergencies across 10 countries — including floods in Bangladesh, drought in the Horn of Africa, and conflict displacement in Sudan. We reached 30,000 people with life-saving assistance.',
      'Beyond immediate relief, we stay to support recovery. Our teams help communities rebuild livelihoods, restore access to education, and address the psychological trauma that crises leave behind.',
      'Emergency response is our most urgent funding need. Donations to this program are deployed within 72 hours of receipt. Every $100 provides emergency food and water for one family for two weeks.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
    ],
  },
  {
    slug: 'youth-sports-talent',
    title: 'Youth Sports & Talent Development',
    cat: 'Sports',
    icon: '⚽',
    desc: 'Unlocking potential through football, basketball, athletics, and mentorship — giving children pathways to scholarships, competitions, and lifelong confidence.',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    raised: 47000,
    goal: 100000,
    pct: 47,
    beneficiaries: '8,000+ youth',
    countries: 9,
    story: [
      'Sport is one of the most powerful tools for child development. It builds discipline, teamwork, resilience, and self-belief — qualities that transform not just athletes, but students, community leaders, and future professionals.',
      'Jfam Foundation\'s Youth Sports & Talent Development program runs structured football, basketball, and athletics academies in 9 countries. Every child who joins receives coaching, proper nutrition, kit, and access to inter-school and regional competitions.',
      'But we go beyond the pitch. Each academy is paired with a mentorship program where coaches and community role models guide children on education, health, and life skills. Academically strong athletes are fast-tracked for our education scholarships.',
      'Our talent identification pipeline has already produced results: 14 youth have earned full sports scholarships to secondary schools and universities in Kenya, Uganda, and South Africa. Three alumni have represented their national youth teams.',
      '"Football saved my life," said Brian Otieno, 17, from Kibera, Nairobi. "Before the academy I was dropping out of school. Now I have a scholarship, I train every day, and I want to play for Harambee Stars."',
      'We partner with local football federations, Athletics Kenya, and corporate sponsors to fund competitions and exposure trips. A donation of $75 funds one child\'s full season — kit, coaching, meals, and competition entry fees.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    ],
  },
];
