"use client";

import { ImageSwitch } from "./ImageSwitch";
import { profile } from "@/data/profile";
import { englishProfile } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";

type UserSidebarProps = {
  variant?: "v1" | "v2" | "v3";
};

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.8a9.4 9.4 0 0 0-3 18.3c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1.1-2.7c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.6 9.6 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 12h17M12 3c2.2 2.45 3.3 5.45 3.3 9S14.2 18.55 12 21M12 3C9.8 5.45 8.7 8.45 8.7 12S9.8 18.55 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UserSidebar({ variant = "v1" }: UserSidebarProps) {
  const { language } = useLanguage();
  const localizedProfile = language === "en" ? englishProfile : profile;
  const showMetaLeft = variant !== "v2";
  const dotIsInline = variant === "v2";

  return (
    <div className="sidebar-user">
      <div className="wrap">
        <div className="user-image">
          <div className="image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={468}
              height={856}
              src="/assets/images/avatar/aknvrl.png"
              alt="Akın Vural"
            />
          </div>

          {showMetaLeft && (
            <div className="meta-left d-none d-sm-block">
              <div className="bg-item-svg">
                <ImageSwitch
                  light="/assets/images/item/vector-user.svg"
                  dark="/assets/images/item/vector-user_dark.svg"
                  width={32}
                  height={227}
                />
              </div>
              <p className="avaiable-dot vertical text-body-3 text-black-72 fw-medium">
                <span className="text-vertical">{language === "en" ? "Open to new projects" : "Yeni projelere açık"}</span>
                <span className="dot" />
              </p>
            </div>
          )}
        </div>

        <div className="user-logo d-none d-lg-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={48} height={32} src="/assets/images/logo/av-dark.svg" alt="AV" />
        </div>

        <ul className="tf-social-icon-2 user-social d-grid">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label === "Instagram" ? (
                  <InstagramIcon />
                ) : social.label === "GitHub" ? (
                  <GitHubIcon />
                ) : social.label === "Garides Web Sitesi" || social.label === "Büyük Veri Bilimi" ? (
                  <WebsiteIcon />
                ) : (
                  <i className={`icon ${social.icon}`} />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="user-info">
          <p
            className={
              dotIsInline
                ? "avaiable-dot text-body-3 text-white-72 fw-medium"
                : "avaiable-dot text-body-3 fw-medium d-sm-none"
            }
          >
            <span className="dot" />
            <span>{language === "en" ? "Open to new projects" : "Yeni projelere açık"}</span>
          </p>
          <h5 className="greeting letter-space--2 text-white animationtext clip">
            {language === "en" ? "Hello, I’m" : "Merhaba, ben"}{" "}
            <span className="cd-words-wrapper">
              {localizedProfile.rotatingNames.map((name, index) => (
                <span
                  key={name}
                  className={`item-text ${index === 0 ? "is-visible" : "is-hidden"}`}
                >
                  {name}
                </span>
              ))}
            </span>
          </h5>
          <p className="introduce text-white-56 letter-space--05 text-body-3">
            {localizedProfile.introBio}
          </p>
          <div className="br-line" />
          <div className="action-group">
            <a href="#contact" className="tf-btn-action">
              <span className="ic-wrap">
                <i className="icon icon-arrow-right-top" />
              </span>
              <span className="text text-body-3 letter-space--05 fw-medium">
                {language === "en" ? "Get in touch" : "İletişime geç"}
              </span>
              <span className="ic-wrap">
                <i className="icon icon-arrow-right-top" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/aknvrl/"
              className="action-down"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon icon-linkin" />
              <span className="text-body-3">{language === "en" ? "LinkedIn Profile" : "LinkedIn Profili"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
