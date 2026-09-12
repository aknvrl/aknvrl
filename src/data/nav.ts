export type NavItem = {
  href: string;
  label: string;
  icon: string;
  separator?: "before" | "after";
};

export const navItems: NavItem[] = [
  { href: "#home", label: "Ana Sayfa", icon: "icon-home", separator: "after" },
  { href: "#about", label: "Hakkımda", icon: "icon-user-circle" },
  { href: "#education", label: "Deneyim", icon: "icon-edu" },
  { href: "#work", label: "Projeler", icon: "icon-high-light" },
  { href: "#service", label: "Uzmanlıklar", icon: "icon-service" },
  { href: "#tech", label: "Yetenekler", icon: "icon-tech-stack" },
  { href: "#testimonial", label: "Referanslar", icon: "icon-tes" },
  { href: "#certificates", label: "Sertifikalar", icon: "icon-high-light", separator: "after" },
  { href: "#contact", label: "İletişim", icon: "icon-send" },
];
