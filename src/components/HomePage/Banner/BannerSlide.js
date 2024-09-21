"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

const BannerSlide = ({ bannerList }) => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 4500, // 4.5 seconds
          disableOnInteraction: false,
          onAutoplayTimeLeft: (swiper, time, progress) => {
            updateProgressBar(progress); // Update the progress bar
          },
        }}
        effect="fade"
        speed={1000}
      >
        {bannerList.length > 0 ? (
          bannerList.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/news-detail/${item?.id}`}>
                <div className="banner-slide">
                  <div className="banner-overlay">
                    <Image
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      title={item.news_title}
                      className="rounded-0"
                      width={1920}
                      height={600}
                    />
                    <div className="banner-content-container">
                      <div className="banner-content">
                        <h1 className="mb-4">{item.news_title}</h1>
                        <p>{item.news_short_brief}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <p>No epapers available</p>
        )}
        <div className="swiper-progress">
          <div className="swiper-progress-bar"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSlide;
