"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import './Epaper.css'

const EpaperSingleSlide = ({ epaperList }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Enables infinite loop
        navigation
        pagination={{ clickable: true }}
        scrollbar={false}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          992: { slidesPerView: 1 },
        }}
      >
        {epaperList.length > 0 ? (
          epaperList.map((epaper, index) => (
            <SwiperSlide key={index}>
              <div className="card rounded-1 border-0 shadow-sm feature-cards">
                <Image
                  src={`https://ajkal.us/img/epaper/${epaper.epaper_image}`}
                  alt={epaper.name}
                  title={epaper.news_title}
                  className="img-fluid"
                  width={1325}
                  height={2048}
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ajkal.us/img/settings/placeholder.jpg";
                  }}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No epapers available</p>
        )}
      </Swiper>
    </div>
  );
};

export default EpaperSingleSlide;
