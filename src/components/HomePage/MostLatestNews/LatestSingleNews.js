import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./MostLatesNews.css";

const LatestSingleNews = ({ newsItem }) => {
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("bn-BD", options);
  };

  return (
    <div className="card border-0 shadow-sm ltst-news-card">
      <Link href={`/news-detail/${newsItem?.id}`}>
        <Image
          src={`https://ajkal.us/img/news/${newsItem.title_img}`}
          alt={newsItem.title_img}
          className="card-img-top"
          width={600}
          height={300}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
          
        />
        <div className="card-body">
          <h5 className="text-site mb-0 ltst-news-card-tlt fw-bold">
            {newsItem.news_title}
          </h5>
        </div>
      </Link>
      <div className="d-flex fw-bold justify-content-between align-items-center px-3">
        <small>{newsItem.category_name_bangla}</small>
        <small className="text-site-two">
          {formatDate(newsItem.news_time.slice(0, 10))}
        </small>
      </div>
    </div>
  );
};

export default LatestSingleNews;
