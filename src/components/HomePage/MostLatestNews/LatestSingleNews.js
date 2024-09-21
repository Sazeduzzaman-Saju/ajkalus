import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestSingleNews = ({ newsItem }) => {
  return (
    <div className="card border-0 shadow-sm">
      <Link href={`/news-detail/${newsItem?.id}`}>
        <Image
          src={`https://ajkal.us/img/news/${newsItem.title_img}`}
          alt="News"
          className="card-img-top"
          width={600}
          height={300}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
        />
        <div className="card-body">
          <h5 className="text-site mb-0">{newsItem.news_title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default LatestSingleNews;
