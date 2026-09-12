"use client";

import { ImageSwitch } from "@/components/ImageSwitch";
import { techStack } from "@/data/tech";
import { englishTechStack } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Tech() {
    const { language } = useLanguage();
    const items = language === "en" ? englishTechStack : techStack;
    return (
        <div id="tech" className="section-tech-stack flat-spacing">
            <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
                <i className="icon icon-tech-stack" />
                {language === "en" ? "Skills & Languages" : "Yetenekler & Diller"}
            </div>
            <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
                {language === "en" ? "My technical and digital skills" : "Teknik ve dijital yeteneklerim"}
            </h4>
            <ul className="tech-list">
                {items.map((t, i) => (
                    <li key={i} className="wg-tech">
                        <div className="tech-infor effectFade fadeUp no-div">
                            <div className="tech_image">
                                <ImageSwitch
                                    light={t.image.light}
                                    dark={t.image.dark}
                                    width={t.image.width}
                                    height={t.image.height}
                                />
                            </div>
                            <div className="tech_info">
                                <p className="info__name fw-medium text-black-72">
                                    {t.name}
                                </p>
                                <p className="info__duty text-black-56 text-body-3">
                                    {t.duty}
                                </p>
                            </div>
                        </div>
                        <div className="tech-progress">
                            <div
                                className="progress-line"
                                data-progress={t.progress}
                            >
                                <p className="progress-num text-caption">
                                    <span className="counter">
                                        <span
                                            className="number"
                                            data-speed="1500"
                                            data-to={t.progress}
                                        >
                                            10
                                        </span>
                                        %
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
