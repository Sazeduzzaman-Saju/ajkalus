"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import Link from "next/link";

const ReletedSingle = ({ slidesData }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        loop={true}
        dots={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slidesData.length > 0 ? (
          slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className="my-4">
              <div
                className="card shadow-sm border-0 mb-3"
                style={{ width: "100%", height: "350px" }}
              >
                <FallbackImages
                  src={`https://ajkal.us/img/news/${slide.title_img}`}
                  alt={slide.news_title}
                  className="rounded-3 img-fluid"
                  width={600}
                  height={400}
                  style={{ height: "200px !important", ObjectFit: "Cover" }}
                />
                <div className="card-body py-4">
                  <h5
                    className="card-title"
                    style={{ width: "100%", height: "50px" }}
                  >
                    {slide.news_title}
                  </h5>
                  <p className="card-text">{slide.description}</p>
                  <Link
                    href={`/news-detail/${slide?.id}`}
                    className="btn btn-outline-dark mt-4 bt-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div>No featured items for this category.</div>
        )}

        {/* Custom navigation buttons */}
        {/* <div className="swiper-button-next" aria-label="Next slide"></div>
        <div className="swiper-button-prev" aria-label="Previous slide"></div> */}
      </Swiper>
    </>
  );
};

export default ReletedSingle;
