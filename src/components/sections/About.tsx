"use client";

import { ui } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { language } = useLanguage();
  const content = ui[language];
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        {content.aboutTag}
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        {content.aboutTitle}
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        {content.aboutParagraphs[0]}
        <br />
        <br />
        {content.aboutParagraphs[1]}
      </p>
    </div>
  );
}
