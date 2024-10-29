"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ bannerList }) => {
  return (
    <>
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
                    className="rounded-3"
                    width={1920}
                    height={600}
                  />
                  <div className="banner-content-container">
                    <div className="banner-content">
                      <h1 className="mb-4">{item.news_title}</h1>
                      <div>{item.news_short_brief}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))
      ) : (
        <div>No epapers available</div>
      )}
    </>
  );
};

export default SingleSlide;
