export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  expanded: boolean;
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Yapay Zeka Mühendisliği & Otomasyon",
    description:
      "İş süreçlerini ölçülebilir biçimde hızlandıran yapay zeka çözümleri geliştiriyorum. LLM ve RAG mimarileri, otonom ajanlar, NLP, makine öğrenmesi, veri işleme ve kurum içi otomasyonları güvenli API ve yazılım altyapılarıyla bir araya getiriyorum.",
    tags: ["LLM & RAG", "AI Agents", "NLP", "Python", "Makine Öğrenmesi"],
    images: [
      "/assets/images/portfolio/expertise-ai.png",
      "/assets/images/portfolio/project-crm.png",
    ],
    expanded: false,
  },
  {
    id: "service-2",
    title: "Özel Yazılım, Web Tasarım & E-Ticaret",
    description:
      "İhtiyaca özel web uygulamaları, yönetim panelleri, CRM sistemleri, kurumsal web siteleri ve e-ticaret altyapıları tasarlayıp geliştiriyorum. Kullanıcı deneyimi, mobil uyumluluk, performans, API entegrasyonları ve sürdürülebilir teknik mimariyi birlikte ele alıyorum.",
    tags: ["Next.js", ".NET Core", "PHP", "UI/UX", "E-Ticaret", "API & SQL"],
    images: [
      "/assets/images/portfolio/expertise-web.png",
      "/assets/images/portfolio/project-real-estate.png",
    ],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Dijital Pazarlama, SEO & GEO",
    description:
      "Markaların dijital görünürlüğünü güçlendirmek için teknik SEO, GEO, anahtar kelime ve rakip analizi, içerik mimarisi, ölçümleme ve dönüşüm optimizasyonu çalışmaları yürütüyorum. Web altyapısını ve içerik stratejisini aynı büyüme planı içinde değerlendiriyorum.",
    tags: ["SEO", "GEO", "Analytics", "İçerik Stratejisi", "Dönüşüm Optimizasyonu"],
    images: [
      "/assets/images/portfolio/expertise-marketing.png",
      "/assets/images/portfolio/project-ai-seo.png",
    ],
    expanded: false,
  },
  {
    id: "service-4",
    title: "Reklam Yönetimi & İçerik Yönetimi",
    description:
      "Google Ads ve Meta Ads kampanyalarını hedef kitle, bütçe, dönüşüm takibi ve performans optimizasyonuyla birlikte yönetiyorum. İçerik planı, metin yazarlığı, kreatif süreç, yayın yönetimi ve raporlamayı markanın iletişim diliyle uyumlu tek bir çalışma akışında birleştiriyorum.",
    tags: ["Google Ads", "Meta Ads", "İçerik Yönetimi", "Kampanya Optimizasyonu"],
    images: [
      "/assets/images/portfolio/expertise-content.png",
      "/assets/images/portfolio/expertise-marketing.png",
    ],
    expanded: false,
  },
  {
    id: "service-6",
    title: "IT & Teknik Sistem Yönetimi",
    description:
      "İşletmelerin günlük teknoloji operasyonları için donanım, ağ, kullanıcı ve yazılım sistemlerinin kurulum, yapılandırma ve teknik destek süreçlerini yönetiyorum. Güvenlik, yedekleme, erişim ve süreklilik ihtiyaçlarını iş akışına uygun çözümlerle ele alıyorum.",
    tags: ["IT Destek", "Sistem Yönetimi", "Ağ", "Güvenlik", "Teknik Operasyon"],
    images: [
      "/assets/images/portfolio/expertise-it.png",
      "/assets/images/portfolio/expertise-web.png",
    ],
    expanded: false,
  },
];
