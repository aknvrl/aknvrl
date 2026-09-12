"use client";

import { awards } from "@/data/awards";
import { englishAwards } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Certificates() {
  const { language } = useLanguage();
  const items = language === "en" ? englishAwards : awards;
  return (
    <div id="certificates" className="section-about section-certificates flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-high-light" />
        {language === "en" ? "Certificates" : "Sertifikalar"}
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        {language === "en" ? "Certificates supporting my professional growth" : "Mesleki gelişimimi destekleyen sertifikalar"}
      </h4>
      <ul className="award-list">
        {items.map((award) => (
          <li className="award-item hover-cursor-img" key={award.name + award.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">{award.name}</h6>
              <p className="award_desc text-black-56">{award.publisher}</p>
            </div>
            <h6 className="award_year text-black-72">{award.year}</h6>
            <div className="award_img hover-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" width={158} height={224} src={award.image} alt={award.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
