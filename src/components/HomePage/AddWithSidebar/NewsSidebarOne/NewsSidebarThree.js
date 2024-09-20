"use client";
import { useEffect, useState } from "react";
import axios from "axios";
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
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./NesSideBarOne.css";
import Link from "next/link";

const NewsSidebarThree = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backoffice.ajkal.us/category-news/10"
        );
        setNewsData(response.data.data.slice(0, 10)); // Assuming the data is in `data.data`
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <SectionHeader title="লাইফস্টাইল" />
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
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0 shadow-sm">
                <Skeleton height={160} />
                <div className="news-content p-3">
                  <Skeleton height={24} width="80%" />
                  <Skeleton height={16} width="60%" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div>
      <SectionHeader title="লাইফস্টাইল" />
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
              <Link href={`/news-detail/${newsItem?.id}`}>
                <div className="news-sidebar-card">
                  <Image
                    src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                    alt="Card Image"
                    title="Card Image"
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
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: truncateText(newsItem.news_title, 8),
                      }}
                    />
                    <div
                      className="news-short-brief pt-2"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(newsItem.news_short_brief, 8),
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSidebarThree;
