"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade // Import EffectFade
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; // Import effect-fade CSS
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Optional: to include default skeleton styles

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const url = "https://backoffice.ajkal.us/breaking-news";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (Array.isArray(response.data)) {
          setBannerData(response.data.slice(0, 20));
        } else if (Array.isArray(response.data.data)) {
          setBannerData(response.data.data.slice(0, 20));
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateProgressBar = (progress) => {
    const progressBar = document.querySelector(".swiper-progress-bar");
    if (progressBar) {
      progressBar.style.width = `${progress * 5}%`;
    }
  };

  return (
    <div className="banner-container">
      {loading ? (
        <div className="banner-skeleton-container">
          <Skeleton height={600} width={1920} className="rounded-0" />
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
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
          effect="fade" // Set the effect to fade
          speed={1000} // Adjust the speed of the fade transition
        >
          {bannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="banner-slide">
                <div className="banner-overlay">
                  {imageLoading && (
                    <Skeleton height={600} width={1920} className="rounded-0" />
                  )}
                  <Image
                    src={`https://ajkal.us/img/news/${item.title_img}`}
                    alt={item.news_title}
                    title={item.news_title}
                    className="rounded-0"
                    width={1920}
                    height={600}
                    onLoad={() => setImageLoading(false)}
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/img/settings/placeholder-banner.jpg";
                      setImageLoading(false);
                    }}
                  />
                  <div className="banner-content-container">
                    <div className="banner-content">
                      <h1 className="mb-4">{item.news_title}</h1>
                      <p>{item.news_short_brief}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-progress">
            <div className="swiper-progress-bar"></div>
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Banner;
