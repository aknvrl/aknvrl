"use client";

import { works } from "@/data/works";
import { englishWorks } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export function Work() {
  const { language } = useLanguage();
  const items = language === "en" ? englishWorks : works;
  return (
    <div id="work" className="section-work flat-spacing">
      <div className="sect-tag text-caption fw-medium">
        <i className="icon icon-high-light" />
        {language === "en" ? "Featured Projects" : "Öne Çıkan Projeler"}
      </div>
      <div className="work-list element-sticky">
        {items.map((work, index) => (
          <div className="sticky-item" key={work.title}>
            <div className="wg-work">
              <div className="work-image">
                <Image width={700} height={427} src={work.image} alt={work.title} />
              </div>
              <div className="wrap">
                <div className="work-content">
                  <div className="w-image">
                    <Image width={468} height={856} src={work.image} alt={work.title} />
                  </div>
                  <div className="content">
                    <div className="content-top">
                      <div className="w-logo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img loading="lazy" width={48} height={32} src={work.logo} alt="AV" />
                      </div>
                      <h4 className="w-title letter-space--2 text-white-72">{work.title}</h4>
                      <p className="w-desc text-white-56 text-body-3">{work.description}</p>
                      <div className="w-highlight">
                        <div className="box-high">
                          <p className="text-body-3 text-white-56">{language === "en" ? "Period" : "Dönem"}</p>
                          <p className="text-body-1 text-white-72">{work.year}</p>
                        </div>
                        <div className="box-high">
                          <p className="text-body-3 text-white-56">{language === "en" ? "Role" : "Rol"}</p>
                          <p className="text-body-1 text-white-72">{work.role}</p>
                        </div>
                      </div>
                      <div className="w-tag-list">
                        {work.tags.map((tag) => (
                          <div className="tag" key={tag}>
                            <span className="text-body-3 fw-medium text-white-72">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="content-bottom">
                      <div className="br-line" />
                      <div className="group-action">
                        <a
                          href={work.href}
                          className="tf-btn-action style-white"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="ic-wrap">
                            <i className="icon icon-arrow-right-top" />
                          </span>
                          <span className="text text-body-3 letter-space--05 fw-medium">
                            {language === "en" ? "View project" : "Projeyi incele"}
                          </span>
                          <span className="ic-wrap">
                            <i className="icon icon-arrow-right-top" />
                          </span>
                        </a>
                        <p className="text-white-40">
                          <span className="text-white-72">{String(index + 1).padStart(2, "0")}</span>{" "}
                          / {String(items.length).padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
