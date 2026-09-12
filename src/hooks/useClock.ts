"use client";

import { useEffect } from "react";
import type { Language } from "@/i18n/LanguageProvider";

export function useClock(language: Language = "tr") {
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const dateString = now.toLocaleDateString(language === "tr" ? "tr-TR" : "en-GB", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      document.querySelectorAll<HTMLElement>(".time-local").forEach((el) => {
        const date = el.querySelector(".date");
        const clock = el.querySelector(".clock");
        if (date) date.textContent = dateString;
        if (clock) clock.textContent = timeString;
      });
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [language]);
}
