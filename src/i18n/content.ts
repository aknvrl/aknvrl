import type { Award } from "@/data/awards";
import type { TimelineItem } from "@/data/education";
import type { NavItem } from "@/data/nav";
import type { Service } from "@/data/services";
import type { TechItem } from "@/data/tech";
import type { Testimonial } from "@/data/testimonials";
import type { Work } from "@/data/works";

export const englishProfile = {
  fullName: "Akın Vural",
  shortName: "Akın",
  duty: "Software & AI Engineer",
  introBio:
    "I build software, artificial intelligence and digital growth systems. My goal is to connect the world through automation.",
  email: "info@aknvrl.com.tr",
  rotatingNames: ["Akın", "Aknvrl", "Akın Vural"],
} as const;

export const englishNavItems: NavItem[] = [
  { href: "#home", label: "Home", icon: "icon-home", separator: "after" },
  { href: "#about", label: "About", icon: "icon-user-circle" },
  { href: "#education", label: "Experience", icon: "icon-edu" },
  { href: "#work", label: "Projects", icon: "icon-high-light" },
  { href: "#service", label: "Expertise", icon: "icon-service" },
  { href: "#tech", label: "Skills", icon: "icon-tech-stack" },
  { href: "#testimonial", label: "References", icon: "icon-tes" },
  { href: "#certificates", label: "Certificates", icon: "icon-high-light", separator: "after" },
  { href: "#contact", label: "Contact", icon: "icon-send" },
];

export const englishEducationItems: TimelineItem[] = [
  {
    period: "2019 - Present",
    role: "Software & AI Architect — Garides Software",
    description:
      "I lead the architecture and development of AI, LLM, RAG, autonomous agent and custom software projects.",
    icon: { light: "/assets/images/brand/garides-official.png", dark: "/assets/images/brand/garides-official.png", width: 122, height: 40 },
  },
  {
    period: "2026 - Present",
    role: "Luxmed Prosthesis Center",
    description:
      "I manage multilingual web infrastructure, technical SEO and GEO, content systems, measurement and automation initiatives in Istanbul, Türkiye.",
    icon: { light: "/assets/images/brand/luxmed-official.webp", dark: "/assets/images/brand/luxmed-official.webp", width: 125, height: 40 },
  },
  {
    period: "2023 - 2026",
    role: "Integral Group",
    description:
      "I worked on corporate web content, digital channels and technical operations in Başakşehir, Istanbul.",
    icon: { light: "/assets/images/brand/integral-group-full.png", dark: "/assets/images/brand/integral-group-full.png", width: 80, height: 80 },
  },
  {
    period: "2021 - 2023",
    role: "Softkrea",
    description:
      "I contributed to development, SEO, content and digital marketing processes for corporate web and e-commerce projects in Istanbul, Türkiye.",
    icon: { light: "/assets/images/brand/softkrea-official.webp", dark: "/assets/images/brand/softkrea-official.webp", width: 149, height: 30 },
  },
  {
    period: "2023 - 2027",
    role: "Management Information Systems — Anadolu University",
    description:
      "I am continuing my bachelor’s degree, combining business processes, data management and information technologies with my software focus.",
    icon: { light: "/assets/images/brand/anadolu-universitesi-official.png", dark: "/assets/images/brand/anadolu-universitesi-official.png", width: 160, height: 60 },
  },
  {
    period: "2019 - 2021",
    role: "Computer Programming — Kırklareli University",
    description:
      "I completed the program with a 3.18 / 4.00 GPA and built a strong foundation in programming, databases and web technologies.",
    icon: { light: "/assets/images/brand/kirklareli-universitesi-hq.png", dark: "/assets/images/brand/kirklareli-universitesi-hq.png", width: 72, height: 52 },
  },
];

export const englishWorks: Work[] = [
  {
    title: "AI-Powered Real Estate Valuation & Admin Panel",
    description:
      "I built an AI-powered real estate valuation system, developed its machine-learning model in Python and integrated it with a PHP web application. I also created an admin panel for data management and reporting.",
    year: "LinkedIn Project",
    role: "Personal Project",
    tags: ["Python", "Machine Learning", "PHP", "Admin Panel"],
    image: "/assets/images/portfolio/project-real-estate.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
  {
    title: "AI-Powered Content & SEO Analysis Platform",
    description:
      "A platform that provides content analysis, SEO scoring and AI-powered content recommendations for websites.",
    year: "LinkedIn Project",
    role: "Personal Project",
    tags: ["Artificial Intelligence", "SEO", "Content Analysis"],
    image: "/assets/images/portfolio/project-ai-seo.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
  {
    title: "Smart CRM & Automated Messaging System",
    description:
      "I developed a role-based CRM with .NET Core and integrated a Python NLP model that analyzes customer messages and recommends automated responses.",
    year: "LinkedIn Project",
    role: "Personal Project",
    tags: [".NET Core", "C#", "Python", "NLP", "RBAC"],
    image: "/assets/images/portfolio/project-crm.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
  {
    title: "C# Vehicle Lift Automation",
    description:
      "A C# automation project controlling the lifting and lowering sequence of vehicles, designed as a final project in 2020.",
    year: "2020",
    role: "Final Project",
    tags: ["C#", "Automation", "System Design"],
    image: "/assets/images/portfolio/project-vehicle-lift.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
];

export const englishServices: Service[] = [
  {
    id: "service-1",
    title: "AI Engineering & Automation",
    description:
      "I develop AI solutions that measurably accelerate business processes. I bring together LLM and RAG architectures, autonomous agents, NLP, machine learning, data processing and internal automation through secure APIs and software infrastructure.",
    tags: ["LLM & RAG", "AI Agents", "NLP", "Python", "Machine Learning"],
    images: ["/assets/images/portfolio/expertise-ai.png", "/assets/images/portfolio/project-crm.png"],
    expanded: false,
  },
  {
    id: "service-2",
    title: "Custom Software, Web Design & E-Commerce",
    description:
      "I design and develop custom web applications, admin panels, CRM systems, corporate websites and e-commerce platforms. I address user experience, responsive design, performance, API integrations and sustainable technical architecture as one system.",
    tags: ["Next.js", ".NET Core", "PHP", "UI/UX", "E-Commerce", "API & SQL"],
    images: ["/assets/images/portfolio/expertise-web.png", "/assets/images/portfolio/project-real-estate.png"],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Digital Marketing, SEO & GEO",
    description:
      "I improve digital visibility through technical SEO, GEO, keyword and competitor research, content architecture, measurement and conversion optimization. I evaluate web infrastructure and content strategy within one growth plan.",
    tags: ["SEO", "GEO", "Analytics", "Content Strategy", "Conversion Optimization"],
    images: ["/assets/images/portfolio/expertise-marketing.png", "/assets/images/portfolio/project-ai-seo.png"],
    expanded: false,
  },
  {
    id: "service-4",
    title: "Advertising & Content Management",
    description:
      "I manage Google Ads and Meta Ads campaigns through audience strategy, budgeting, conversion tracking and performance optimization. I combine content planning, copywriting, creative production, publishing and reporting into a consistent workflow.",
    tags: ["Google Ads", "Meta Ads", "Content Management", "Campaign Optimization"],
    images: ["/assets/images/portfolio/expertise-content.png", "/assets/images/portfolio/expertise-marketing.png"],
    expanded: false,
  },
  {
    id: "service-6",
    title: "IT & Technical Systems Management",
    description:
      "I manage hardware, network, user and software setup, configuration and technical support for day-to-day business operations, with practical solutions for security, backups, access and continuity.",
    tags: ["IT Support", "Systems Management", "Networks", "Security", "Technical Operations"],
    images: ["/assets/images/portfolio/expertise-it.png", "/assets/images/portfolio/expertise-web.png"],
    expanded: false,
  },
];

export const englishTechStack: TechItem[] = [
  { name: "Python & Artificial Intelligence", duty: "Machine learning, NLP, RAG, AI agents and automation", image: { light: "/assets/images/tech/python.svg", width: 28, height: 28 }, progress: 92 },
  { name: "PHP", duty: "Web applications, e-commerce and admin panels", image: { light: "/assets/images/tech/php.svg", width: 28, height: 28 }, progress: 88 },
  { name: "Web Design & UI/UX", duty: "Responsive interfaces, user experience and conversion-focused design", image: { light: "/assets/images/tech/web-design.svg", width: 28, height: 28 }, progress: 90 },
  { name: "Data & SQL", duty: "Data modeling, reporting, APIs and system integration", image: { light: "/assets/images/tech/database.svg", width: 28, height: 28 }, progress: 84 },
  { name: "Digital Marketing", duty: "Digital strategy, measurement and performance optimization", image: { light: "/assets/images/tech/marketing.svg", width: 28, height: 28 }, progress: 90 },
  { name: "SEO, GEO & Content Writing", duty: "Technical SEO, AI visibility, content planning and copywriting", image: { light: "/assets/images/tech/content.svg", width: 28, height: 28 }, progress: 92 },
  { name: "Advertising & Content Management", duty: "Google Ads, Meta Ads, content planning and performance reporting", image: { light: "/assets/images/tech/social.svg", width: 28, height: 28 }, progress: 88 },
  { name: "IT & Systems Management", duty: "Hardware, networks, security, setup and technical support", image: { light: "/assets/images/tech/it.svg", width: 28, height: 28 }, progress: 88 },
  { name: "English", duty: "Limited working proficiency", image: { light: "/assets/images/tech/en.svg", width: 28, height: 28 }, progress: 55 },
];

export const englishTestimonials: Testimonial[] = [
  { text: "A multilingual web experience presenting padel courts, club solutions and international projects through a strong product architecture.", authorName: "WePadel", authorRole: "International Sports Systems Website", image: "/assets/images/brand/references/wepadel.png", href: "https://www.wepadel.com/" },
  { text: "A corporate platform clearly presenting stadium, sports complex and turnkey facility solutions to multiple markets.", authorName: "İntegralSpor", authorRole: "Sports Facilities & Corporate Website", image: "/assets/images/brand/references/integralspor.svg", href: "https://www.integralspor.com/" },
  { text: "An educational website combining SRC training, certificate categories, branches and application channels in one accessible structure.", authorName: "Alan SRC Kursu", authorRole: "Education & Application Website", image: "/assets/images/brand/references/alan-src-kursu.png", href: "https://www.alansrckursu.com/" },
  { text: "A web project presenting organizational information, news, announcements and events through a central digital communication platform.", authorName: "Zafer Partisi", authorRole: "Corporate Communications Website", image: "/assets/images/brand/references/zafer-partisi.png", href: "https://www.zaferpartisi.org.tr/" },
  { text: "A web experience combining driver training, course schedules and applications in an accessible flow.", authorName: "Özdamla Sürücü Kursları", authorRole: "Education & Application Project", image: "/assets/images/brand/references/reference-05.jpg" },
  { text: "A project combining construction and real estate developments with a trustworthy identity and organized project presentation.", authorName: "Afra İnşaat & GYO", authorRole: "Construction & Real Estate Project", image: "/assets/images/brand/references/reference-07.jpg" },
];

export const englishAwards: Award[] = [
  { name: "Search Engine Optimization (SEO)", publisher: "BTK Academy • BTK - ICT", year: 2023, image: "/assets/images/certificates/seo.svg" },
  { name: "JavaScript Software Development", publisher: "Udemy • UC-7d258b2f-1548-4b5e-a2eb-285116488a2f", year: 2020, image: "/assets/images/certificates/javascript.svg" },
  { name: "PHP Software Development", publisher: "Udemy • UC-8650a8c6-aa37-45bf-89df-135cdbad0be8", year: 2019, image: "/assets/images/certificates/php.svg" },
];

export const ui = {
  tr: {
    aboutTag: "Hakkımda",
    aboutTitle: "Fikirleri çalışan ve öğrenen sistemlere dönüştürüyorum",
    aboutParagraphs: [
      "Ben Akın. Yazılım yolculuğum boyunca web geliştirme, dijital pazarlama, SEO, içerik yönetimi ve IT operasyonlarında farklı ekiplerle çalıştım. Bu deneyimler bana yalnızca kod yazmayı değil; bir ihtiyacı doğru anlamayı ve çözümü baştan sona sahiplenmeyi de öğretti.",
      "Anadolu Üniversitesi Yönetim Bilişim Sistemleri bölümünde eğitimime devam ediyorum. Bugün odağımı yazılım mühendisliği, veri bilimi ve yapay zeka kesişiminde topluyorum. Bundan sonraki projelerimi veriyi anlamlandıran, süreçleri otomatikleştiren ve gerçek problemlere sade çözümler üreten yapay zeka sistemleri üzerine kuruyorum.",
    ],
  },
  en: {
    aboutTag: "About",
    aboutTitle: "I turn ideas into systems that work and learn",
    aboutParagraphs: [
      "I’m Akın. Throughout my software journey, I have worked with different teams across web development, digital marketing, SEO, content management and IT operations. These experiences taught me not only how to write code, but also how to understand a real need and own a solution from end to end.",
      "I am continuing my Management Information Systems degree at Anadolu University. Today, my focus is where software engineering, data science and artificial intelligence meet. I am shaping my future projects around AI systems that make sense of data, automate processes and solve real problems simply.",
    ],
  },
} as const;
