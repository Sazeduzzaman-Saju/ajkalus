"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './FeatureNews.css'

const FeatureSlide = ({ spotListData }) => {
  return (
    <div className="mb-4">
      {spotListData && spotListData.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true} // Enables infinite loop
          navigation={false} // Enable navigation only when there's data
          pagination={{ clickable: true }}
          scrollbar={false}
          autoplay={{
            delay: 4500, // 4.5 seconds
            disableOnInteraction: false,
            onAutoplayTimeLeft: (swiper, time, progress) => {
              updateProgressBar(progress); // Update the progress bar
            },
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 4 },
          }}
        >
          {spotListData.map((data, index) => (
            <SwiperSlide key={index}>
              <Link href={`/news-detail/${data?.id}`}>
                <div className="card rounded-1 border-0 shadow-sm feature-cards">
                  <div className="card-body">
                    <div className="text-site feature-titels pt-2 fs-5 mb-3">
                      {data.news_title.split(" ").slice(0, 8).join(" ")}
                    </div>
                    <div
                      className="card-text cts-text text-muted pt-0 pt-md-4"
                      dangerouslySetInnerHTML={{
                        __html: data.news_short_brief
                          ? data.news_short_brief
                              .split(" ")
                              .slice(0, 10)
                              .join(" ")
                          : "",
                      }}
                    />
                    <small>
                      <small className="text-site-two fw-bold">
                        {data.category_name_bangla}
                      </small>
                    </small>
                  </div>
                  <Image
                    src={`https://ajkal.us/img/news/${data.title_img}`}
                    alt={data.title_img}
                    title="Card Image"
                    className="card-img-top rounded-0 custom-class rounded-2"
                    width={1920}
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>No epapers available</div>
      )}
    </div>
  );
};

export default FeatureSlide;
