// NewsCarousel.js
"use client";
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
import SafeHtml from "@/utility/SafeHtml/SafeHtml";
import truncateText from "@/utility/truncateWord/truncateText";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const LifeStyleNews = ({ newsData }) => {
  const newsDataSliced = newsData.slice(0, 6);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation={false}
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
      {newsDataSliced.map((newsItem) => (
        <SwiperSlide key={newsItem.id}>
          <div className="card border-0 shadow-sm">
            <Link href={`/news-detail/${newsItem.id}`}>
              <div className="news-sidebar-card">
                <FallbackImages
                  src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                  alt={newsItem.news_title}
                  title={newsItem.news_title}
                  className="rounded-3 img-fluid"
                  width={1920}
                  height={180}
                />
                <div className="news-content p-3">
                  <h5
                    dangerouslySetInnerHTML={{
                      __html: newsItem.news_title,
                    }}
                  />
                  <div className="news-short-brief pt-2">
                    <SafeHtml
                      content={truncateText(newsItem.news_short_brief, 15)}
                    />
                  </div>
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
