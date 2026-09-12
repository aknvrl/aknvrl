"use client";

import { BrandSlider } from "@/components/BrandSlider";
import { flipImages } from "@/data/flips";
import { useLanguage } from "@/i18n/LanguageProvider";

export function IntroV2() {
  const { language } = useLanguage();
  return (
    <div id="home" className="section-intro type-2 flat-spacing">
      <h1 className="s-title text-black-72 letter-space--2 split-text effect-blur-fade">
        {language === "en" ? "I build the future with" : "Geleceği yazılım ve"} <br className="d-none d-sm-block" />
        {language === "en" ? "software and artificial" : "yapay zeka ile"} <br className="d-none d-sm-block" />
        {language === "en" ? "intelligence" : "inşa ediyorum"}
      </h1>

      <div className="box-counter">
        <div className="wg-counter">
          <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
            <span className="number" data-speed="1000" data-to="4">
              0
            </span>
            +
          </p>
          <p className="text text-black-56 text-body-3">{language === "en" ? "Featured projects" : "Öne çıkan proje"}</p>
        </div>
        <div className="wg-counter">
          <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
            <span className="number" data-speed="1000" data-to="3">
              0
            </span>
            x
          </p>
          <p className="text text-black-56 text-body-3">{language === "en" ? "Foreign languages" : "Yabancı dil"}</p>
        </div>
      </div>

      <div className="flip-image-list gsap-anime-2">
        {flipImages.map((src, i) => (
          <div className="flip-image" key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" width={300} height={300} src={src} alt={`flip ${i + 1}`} />
          </div>
        ))}
      </div>

      <p className="intro-client letter-space--05 text-body-3">{language === "en" ? "Career, entrepreneurship and partnerships" : "Kariyer, girişim ve iş ortaklıkları"}</p>

      <BrandSlider />
    </div>
  );
}
