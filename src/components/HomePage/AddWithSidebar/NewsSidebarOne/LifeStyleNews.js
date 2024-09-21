// NewsCarousel.js
"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const LifeStyleNews = ({ newsData }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={false}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      }}
    >
      {newsData.map((newsItem) => (
        <SwiperSlide key={newsItem.id}>
          <div className="card border-0 shadow-sm">
            <Link href={`/news-detail/${newsItem.id}`}>
              <div className="news-sidebar-card">
                <Image
                  src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                  alt={newsItem.news_title}
                  title={newsItem.news_title}
                  className="card-img-top rounded-0"
                  width={1920}
                  height={160}
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ajkal.us/img/settings/placeholder.jpg";
                  }}
                />
                <div className="news-content p-3">
                  <h5
                    dangerouslySetInnerHTML={{
                      __html: newsItem.news_title,
                    }}
                  />
                  <div
                    className="news-short-brief pt-2"
                    dangerouslySetInnerHTML={{
                      __html: newsItem.news_short_brief,
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LifeStyleNews;
