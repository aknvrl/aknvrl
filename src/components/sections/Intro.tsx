"use client";

import { profile } from "@/data/profile";
import { englishProfile } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Intro() {
  const { language } = useLanguage();
  const localizedProfile = language === "en" ? englishProfile : profile;
  return (
    <div id="home" className="section-intro intro-minimal flat-spacing">
      <div className="intro-author effectFade fadeUp no-div">
        <div className="author-info letter-space--05">
          <p className="info_name text-black">{localizedProfile.fullName}</p>
          <p className="info_duty text-black-50 text-body-3">{localizedProfile.duty}</p>
        </div>
      </div>
    </div>
  );
}
