"use client";

import { ImageSwitch } from "@/components/ImageSwitch";
import { educationItems } from "@/data/education";
import { englishEducationItems } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Education() {
  const { language } = useLanguage();
  const items = language === "en" ? englishEducationItems : educationItems;
  return (
    <div id="education" className="section-education-experience flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-edu" />
        {language === "en" ? "Education & Experience" : "Eğitim & Deneyim"}
      </div>
      <div className="timeline scroll-down">
        <div className="timeline-line">
          <div className="prg-line" />
        </div>
        {items.map((item, i) => (
          <div className="timeline-item effectFade fadeUp no-div" key={i}>
            <p className="timeline-date text-black-56">{item.period}</p>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="icon timeline-brand-frame">
                <ImageSwitch
                  light={item.icon.light}
                  dark={item.icon.dark}
                  width={item.icon.width}
                  height={item.icon.height}
                  className="timeline-brand-logo"
                />
              </div>
              <p className="timeline-role fw-medium text-black-72">{item.role}</p>
              {item.description && (
                <p className="timeline-desc text-body-3 text-black-56">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
