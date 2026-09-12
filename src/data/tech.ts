export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Python & Yapay Zeka",
    duty: "Makine öğrenmesi, NLP, RAG, AI agents ve otomasyon",
    image: { light: "/assets/images/tech/python.svg", width: 28, height: 28 },
    progress: 92,
  },
  {
    name: "PHP",
    duty: "Web uygulamaları, e-ticaret ve yönetim panelleri",
    image: { light: "/assets/images/tech/php.svg", width: 28, height: 28 },
    progress: 88,
  },
  {
    name: "Web Tasarım & UI/UX",
    duty: "Responsive arayüz, kullanıcı deneyimi ve dönüşüm odaklı tasarım",
    image: { light: "/assets/images/tech/web-design.svg", width: 28, height: 28 },
    progress: 90,
  },
  {
    name: "Veri & SQL",
    duty: "Veri modelleme, raporlama, API ve sistem entegrasyonu",
    image: { light: "/assets/images/tech/database.svg", width: 28, height: 28 },
    progress: 84,
  },
  {
    name: "Dijital Pazarlama",
    duty: "Dijital strateji, ölçümleme ve performans optimizasyonu",
    image: { light: "/assets/images/tech/marketing.svg", width: 28, height: 28 },
    progress: 90,
  },
  {
    name: "SEO, GEO & İçerik Yazarlığı",
    duty: "Teknik SEO, AI görünürlüğü, içerik planlama ve metin üretimi",
    image: { light: "/assets/images/tech/content.svg", width: 28, height: 28 },
    progress: 92,
  },
  {
    name: "Reklam & İçerik Yönetimi",
    duty: "Google Ads, Meta Ads, içerik planı ve performans raporları",
    image: { light: "/assets/images/tech/social.svg", width: 28, height: 28 },
    progress: 88,
  },
  {
    name: "IT & Sistem Yönetimi",
    duty: "Donanım, ağ, güvenlik, kurulum ve teknik destek",
    image: { light: "/assets/images/tech/it.svg", width: 28, height: 28 },
    progress: 88,
  },
  {
    name: "İngilizce",
    duty: "Sınırlı çalışma yetkinliği",
    image: { light: "/assets/images/tech/en.svg", width: 28, height: 28 },
    progress: 55,
  },
];
