export type Brand = {
  name: string;
  light: string;
  dark: string;
  width: number;
};

export const brands: Brand[] = [
  { name: "Garides Yazılım", light: "/assets/images/brand/garides-official.png", dark: "/assets/images/brand/garides-official.png", width: 122 },
  { name: "Integral Group", light: "/assets/images/brand/integral-group-full.png", dark: "/assets/images/brand/integral-group-full.png", width: 80 },
  { name: "Luxmed", light: "/assets/images/brand/luxmed-official.webp", dark: "/assets/images/brand/luxmed-official.webp", width: 125 },
  { name: "Anadolu Üniversitesi", light: "/assets/images/brand/anadolu-universitesi-official.png", dark: "/assets/images/brand/anadolu-universitesi-official.png", width: 160 },
];
