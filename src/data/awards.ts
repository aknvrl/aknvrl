export type Award = {
  name: string;
  publisher: string;
  year: number;
  image: string;
};

export const awards: Award[] = [
  { name: "Arama Motoru Optimizasyonu (SEO)", publisher: "BTK Akademi • BTK - ICT", year: 2023, image: "/assets/images/certificates/seo.svg" },
  { name: "Javascript Yazılımları Geliştirme", publisher: "Udemy • UC-7d258b2f-1548-4b5e-a2eb-285116488a2f", year: 2020, image: "/assets/images/certificates/javascript.svg" },
  { name: "PHP Yazılım Geliştirme", publisher: "Udemy • UC-8650a8c6-aa37-45bf-89df-135cdbad0be8", year: 2019, image: "/assets/images/certificates/php.svg" },
];
