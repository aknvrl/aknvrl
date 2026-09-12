export type TimelineItem = {
  period: string;
  role: string;
  description?: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "2019 - Halen",
    role: "Yazılım & Yapay Zeka Mimarı — Garides Yazılım",
    description:
      "Yapay zeka, LLM, RAG, otonom ajanlar ve özel yazılım projelerinin mimari ve geliştirme süreçlerini yürütüyorum.",
    icon: {
      light: "/assets/images/brand/garides-official.png",
      dark: "/assets/images/brand/garides-official.png",
      width: 122,
      height: 40,
    },
  },
  {
    period: "2026 - Halen",
    role: "Luxmed Prosthesis Center",
    description:
      "Çok dilli web altyapısı, teknik SEO ve GEO, içerik sistemleri, ölçümleme ve otomasyon çalışmalarını yürütüyorum. İstanbul, Türkiye.",
    icon: {
      light: "/assets/images/brand/luxmed-official.webp",
      dark: "/assets/images/brand/luxmed-official.webp",
      width: 125,
      height: 40,
    },
  },
  {
    period: "2023 - 2026",
    role: "Integral Group",
    description:
      "Kurumsal web içerikleri, dijital kanallar ve teknik operasyon süreçlerinde görev aldım. Başakşehir, İstanbul.",
    icon: {
      light: "/assets/images/brand/integral-group-full.png",
      dark: "/assets/images/brand/integral-group-full.png",
      width: 80,
      height: 80,
    },
  },
  {
    period: "2021 - 2023",
    role: "Softkrea",
    description:
      "Kurumsal web ve e-ticaret projelerinde geliştirme, SEO, içerik ve dijital pazarlama süreçlerinde görev aldım. İstanbul, Türkiye.",
    icon: {
      light: "/assets/images/brand/softkrea-official.webp",
      dark: "/assets/images/brand/softkrea-official.webp",
      width: 149,
      height: 30,
    },
  },
  {
    period: "2023 - 2027",
    role: "Yönetim Bilişim Sistemleri — Anadolu Üniversitesi",
    description:
      "Lisans eğitimime devam ediyorum. İşletme süreçleri, veri yönetimi ve bilgi teknolojilerini yazılım odağımla birleştiriyorum.",
    icon: {
      light: "/assets/images/brand/anadolu-universitesi-official.png",
      dark: "/assets/images/brand/anadolu-universitesi-official.png",
      width: 160,
      height: 60,
    },
  },
  {
    period: "2019 - 2021",
    role: "Bilgisayar Programcılığı — Kırklareli Üniversitesi",
    description:
      "Programı 3,18 / 4,00 not ortalamasıyla tamamladım. Programlama, veritabanı ve web teknolojileri alanlarında güçlü bir temel edindim.",
    icon: {
      light: "/assets/images/brand/kirklareli-universitesi-hq.png",
      dark: "/assets/images/brand/kirklareli-universitesi-hq.png",
      width: 72,
      height: 52,
    },
  },
];
