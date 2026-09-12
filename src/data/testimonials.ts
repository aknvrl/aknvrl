export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
  href?: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "Padel kortları, kulüp çözümleri ve uluslararası projeleri güçlü bir ürün mimarisiyle sunan çok dilli web deneyimi.",
    authorName: "WePadel",
    authorRole: "Uluslararası Spor Sistemleri Web Projesi",
    image: "/assets/images/brand/references/wepadel.png",
    href: "https://www.wepadel.com/",
  },
  {
    text: "Stadyum, spor kompleksi ve anahtar teslim tesis çözümlerini farklı pazarlara anlaşılır biçimde aktaran kurumsal web platformu.",
    authorName: "İntegralSpor",
    authorRole: "Spor Tesisleri & Kurumsal Web Projesi",
    image: "/assets/images/brand/references/integralspor.svg",
    href: "https://www.integralspor.com/",
  },
  {
    text: "SRC eğitimlerini, belge türlerini, şubeleri ve başvuru kanallarını tek bir erişilebilir yapı içinde birleştiren eğitim sitesi.",
    authorName: "Alan SRC Kursu",
    authorRole: "Eğitim & Başvuru Web Projesi",
    image: "/assets/images/brand/references/alan-src-kursu.png",
    href: "https://www.alansrckursu.com/",
  },
  {
    text: "Kurumsal yapı, haberler, duyurular ve organizasyon içeriklerini merkezi bir dijital iletişim platformunda sunan web projesi.",
    authorName: "Zafer Partisi",
    authorRole: "Kurumsal İletişim Web Projesi",
    image: "/assets/images/brand/references/zafer-partisi.png",
    href: "https://www.zaferpartisi.org.tr/",
  },
  {
    text: "Sürücü eğitimlerini, kurs programlarını ve başvuru sürecini erişilebilir bir yapıda birleştiren web deneyimi.",
    authorName: "Özdamla Sürücü Kursları",
    authorRole: "Eğitim & Başvuru Projesi",
    image: "/assets/images/brand/references/reference-05.jpg",
  },
  {
    text: "İnşaat ve gayrimenkul projelerini güven veren bir kurumsal kimlik ve düzenli proje sunumuyla bir araya getiren çalışma.",
    authorName: "Afra İnşaat & GYO",
    authorRole: "İnşaat & Gayrimenkul Projesi",
    image: "/assets/images/brand/references/reference-07.jpg",
  },
];
