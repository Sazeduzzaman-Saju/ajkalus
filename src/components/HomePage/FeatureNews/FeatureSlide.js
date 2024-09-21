"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeatureSlide = ({featureList}) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Enables infinite loop
        navigation
        pagination={true}
        scrollbar={false}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
        }}
      >
        {featureList.map((data, index) => (
          <SwiperSlide key={index}>
            {/* <Link href={`/${data.category_name}/${data.id}`}> */}
            <Link href={`/news-detail/${data?.id}`}>
              <div className="card rounded-1 border-0 shadow-sm feature-cards">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Additional info could be included here if needed */}
                  </div>
                  <div className="text-site feature-titels pt-2 fs-5 mb-3">
                    {data.news_title.split(" ").slice(0, 8).join(" ")}
                  </div>
                  <div
                    className="card-text cts-text text-muted pt-0 pt-md-3"
                    dangerouslySetInnerHTML={{
                      __html: data.news_short_brief
                        ? data.news_short_brief
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")
                        : "",
                    }}
                  />
                </div>
                <Image
                  src={`https://ajkal.us/img/news/${data.title_img}`}
                  alt="Card Image"
                  title="Card Image"
                  className="card-img-top rounded-0 custom-class"
                  width={1920}
                  height={160}
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ajkal.us/img/settings/placeholder.jpg";
                  }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlide;
