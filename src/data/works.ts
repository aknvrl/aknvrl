export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  logo: string;
  href: string;
};

export const works: Work[] = [
  {
    title: "AI Destekli Emlak Değerleme ve Yönetim Paneli",
    description:
      "AI destekli emlak değerleme sistemi geliştirdim. Python ile makine öğrenmesi modeli oluşturup PHP tabanlı web sistemi ile entegre ettim. Admin panel üzerinden veri yönetimi ve raporlama altyapısı kurdum.",
    year: "LinkedIn Projesi",
    role: "Kişisel Proje",
    tags: ["Python", "Machine Learning", "PHP", "Admin Panel"],
    image: "/assets/images/portfolio/project-real-estate.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
  {
    title: "AI Destekli İçerik ve SEO Analiz Platformu",
    description:
      "Web siteleri için içerik analizi, SEO puanlama ve yapay zeka destekli içerik önerileri sunan platform.",
    year: "LinkedIn Projesi",
    role: "Kişisel Proje",
    tags: ["Yapay Zeka", "SEO", "İçerik Analizi"],
    image: "/assets/images/portfolio/project-ai-seo.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
  {
    title: "Akıllı CRM ve Otomatik Mesajlaşma Sistemi",
    description:
      ".NET Core kullanarak rol bazlı yetkilendirmeye sahip CRM sistemi geliştirdim. Python ile NLP modeli entegre ederek müşteri mesajlarını analiz eden ve otomatik cevap öneren yapı kurdum.",
    year: "LinkedIn Projesi",
    role: "Kişisel Proje",
    tags: [".NET Core", "C#", "Python", "NLP", "RBAC"],
    image: "/assets/images/portfolio/project-crm.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
  {
    title: "C# Araç Asansörü Projesi",
    description:
      "C# programlama dili ile araçların iniş ve çıkış sisteminin otomasyonunu sağlayan araç asansörü projesi. 2020 yılında final ödevi olarak tasarlandı.",
    year: "2020",
    role: "Final Projesi",
    tags: ["C#", "Otomasyon", "Sistem Tasarımı"],
    image: "/assets/images/portfolio/project-vehicle-lift.png",
    logo: "/assets/images/logo/av-dark.svg",
    href: "https://www.linkedin.com/in/aknvrl/",
  },
];
