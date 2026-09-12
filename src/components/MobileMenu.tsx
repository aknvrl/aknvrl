"use client";

import { useState } from "react";
import { navItems } from "@/data/nav";
import { englishNavItems } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const items = language === "en" ? englishNavItems : navItems;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.classList.toggle("overflow-hidden", next);
  };

  return (
    <>
      <div className="action-open-mobile d-lg-none">
        <div className="tf-btn-icon style-2" onClick={toggle}>
          <div className={`btn-mobile-menu${open ? " close" : ""}`}>
            <span />
          </div>
        </div>
        <div className={`nav-mobile-list${open ? " open" : ""}`}>
          <ul className="nav-mobile-item">
            {items.map((item, i) => (
              <div key={item.href + i}>
                <li className="nav-item">
                  <a href={item.href} className="item-link scroll-link" onClick={() => setOpen(false)}>
                    <i className={`icon ${item.icon}`} />
                    <p className="tool-tip text-caption">{item.label}</p>
                  </a>
                </li>
                {item.separator === "after" && <li className="br-line" />}
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className={`overlay-pop${open ? " open" : ""}`} onClick={toggle} />
    </>
  );
}
