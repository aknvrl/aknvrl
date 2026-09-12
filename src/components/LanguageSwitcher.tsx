"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const isTurkish = language === "tr";
  const label = isTurkish ? "Switch to English" : "Türkçeye geç";

  return (
    <button
      type="button"
      className="tf-btn-icon language-switcher"
      onClick={toggleLanguage}
      aria-label={label}
      title={label}
    >
      <span className="language-code" aria-hidden="true">
        {isTurkish ? "EN" : "TR"}
      </span>
      <span className="visually-hidden">{label}</span>
    </button>
  );
}
