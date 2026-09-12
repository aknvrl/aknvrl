"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(isEnglish ? `Portfolio contact — ${name}` : `Portfolio iletişimi — ${name}`);
    const body = encodeURIComponent(
      isEnglish
        ? `Full name: ${name}\nEmail: ${email}\n\nProject / Message:\n${message}`
        : `Ad Soyad: ${name}\nE-posta: ${email}\n\nProje / Mesaj:\n${message}`
    );

    setSubmitted(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="section-contact flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-send" />
        {isEnglish ? "Contact" : "İletişim"}
      </div>
      <h4 className="s-title letter-space--2 split-text effect-blur-fade">
        {isEnglish ? "Share your idea and let’s build" : "Bir yazılım ya da yapay zeka"} <br className="d-none d-lg-block" />
        {isEnglish ? "your next software or AI project" : "projesini birlikte hayata geçirmek"} <br className="d-none d-lg-block" />
        {isEnglish ? "together" : "için mesajını paylaş"}
      </h4>
      <form className="form-contact portfolio-contact-form" id="contactform" onSubmit={handleSubmit}>
        {submitted && (
          <div className="flat-alert msg-success" style={{ marginBottom: 16 }}>
            {isEnglish ? "Your email app is opening. Review your message and send it when ready." : "E-posta uygulaman açılıyor. Mesajını kontrol edip gönderebilirsin."}
          </div>
        )}
        <div className="form-content">
          <fieldset className="field-ip">
            <label htmlFor="name">{isEnglish ? "Full Name" : "Ad Soyad"}</label>
            <input type="text" name="name" id="name" placeholder={isEnglish ? "Full Name *" : "Ad Soyad *"} required />
          </fieldset>
          <fieldset className="field-ip">
            <label htmlFor="email">{isEnglish ? "Email Address" : "E-posta Adresi"}</label>
            <input type="email" name="email" id="email" placeholder={isEnglish ? "Email Address *" : "E-posta Adresi *"} required />
          </fieldset>
          <fieldset className="field-ip">
            <label htmlFor="message">{isEnglish ? "Project or Message" : "Proje veya Mesaj"}</label>
            <textarea name="message" id="message" placeholder={isEnglish ? "Briefly tell me how I can help *" : "Kısaca nasıl yardımcı olabileceğimi anlat *"} required />
          </fieldset>
        </div>
        <div className="form-action">
          <div className="send-wrap">
            <button type="submit" className="tf-btn animate-btn animate-dark">
              <span className="text-body-3">{isEnglish ? "Send Message" : "Mesaj Gönder"}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
