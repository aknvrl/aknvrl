"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { testimonials } from "@/data/testimonials";
import { englishTestimonials } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import Image from "next/image";

export function Testimonials() {
  const { language } = useLanguage();
  const items = language === "en" ? englishTestimonials : testimonials;
  const [thumbSwiper, setThumbSwiper] = useState<SwiperClass | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);

  return (
    <div id="testimonial" className="section-testimonial flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-tes" />
        {language === "en" ? "Selected References" : "Seçili Referanslar"}
      </div>
      <div className="heading overflow-hidden">
        <div className="head-left">
          <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
            {language === "en" ? "Selected web projects" : "Farklı sektörlerden"} <br className="d-none d-lg-block" />
            {language === "en" ? "across different industries" : "seçili web projeleri"}
          </h4>
          <div className="box-counter effectFade fadeUp no-div">
            <div className="wg-counter">
              <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
                <span className="number" data-speed="1000" data-to={items.length}>0</span>
              </p>
              <p className="text text-black-56">{language === "en" ? "Selected projects" : "Seçili proje"}</p>
            </div>
            <div className="wg-counter">
              <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
                <span className="number" data-speed="1000" data-to="5">0</span>
              </p>
              <p className="text text-black-56">{language === "en" ? "Different industries" : "Farklı sektör"}</p>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Controller]}
          className="swiper sw-main-image effectFade fadeRight no-div"
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides
          watchSlidesProgress
          onSwiper={setThumbSwiper}
          controller={{ control: mainSwiper ?? undefined }}
          dir="ltr"
        >
          {items.map((item) => (
            <SwiperSlide key={item.authorName}>
              <div className="head-image">
                <div className="wrap-image">
                  <Image
                    loading="lazy"
                    width={320}
                    height={180}
                    src={item.image}
                    alt={item.authorName}
                    style={{ objectFit: "contain", padding: 28, background: "#fff" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-testimonial_wrap effectFade fadeUp no-div">
        <Swiper
          modules={[Controller, Navigation, Pagination]}
          className="swiper tf-swiper swiper-testimonial"
          slidesPerView={1}
          onSwiper={setMainSwiper}
          controller={{ control: thumbSwiper ?? undefined }}
          navigation={{ nextEl: ".sw-nav-next", prevEl: ".sw-nav-prev" }}
          pagination={{ el: ".number-pagination", type: "fraction" }}
          dir="ltr"
        >
          {items.map((item) => (
            <SwiperSlide key={item.authorName}>
              <div className="testimonial-v01">
                <h5 className="tes-text letter-space--2 text-black-72">{item.text}</h5>
                <div className="tes-author">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="author_name fw-medium text-black-72 link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.authorName}
                    </a>
                  ) : (
                    <p className="author_name fw-medium text-black-72">{item.authorName}</p>
                  )}
                  <p className="text-body-3 text-black-56">{item.authorRole}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="number-pagination" />
        <div className="group-btn">
          <div className="sw-nav sw-nav-prev link"><i className="icon icon-arrow-caret-left" /></div>
          <div className="sw-nav sw-nav-next link"><i className="icon icon-arrow-caret-right" /></div>
        </div>
      </div>
    </div>
  );
}
