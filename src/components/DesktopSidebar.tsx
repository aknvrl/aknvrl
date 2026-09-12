"use client";

import { useTheme } from "next-themes";
import { navItems } from "@/data/nav";
import { englishNavItems } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

type DesktopSidebarProps = {
  positionClass?: string;
};

export function DesktopSidebar({ positionClass = "pst-v1" }: DesktopSidebarProps = {}) {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();
  const items = language === "en" ? englishNavItems : navItems;

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const goTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`sidebar-tools ${positionClass}`}>
      <div className="nav-top">
        <button
          type="button"
          className={`tf-btn-icon toggle-switch-mode${theme === "dark" ? " active" : ""}`}
          onClick={handleToggle}
          aria-label={language === "en" ? "Toggle light/dark mode" : "Aydınlık/karanlık modu değiştir"}
        >
          <i className="icon icon-light" />
        </button>
        <LanguageSwitcher />
      </div>
      <ul className="nav-list">
        {items.map((item, i) => (
            <li  key={item.href + i} className="nav-item">
              <a href={item.href} className="item-link scroll-link">
                <i className={`icon ${item.icon}`} />
                <p className="tool-tip text-caption">{item.label}</p>
              </a>
            </li>
        ))}
      </ul>
      <div className="nav-bottom">
        <a href="#" className="tf-btn-icon go-top" onClick={goTop}>
          <i className="icon icon-arrow-top" />
        </a>
      </div>
    </div>
  );
}
