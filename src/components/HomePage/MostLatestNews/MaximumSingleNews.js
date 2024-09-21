import React from "react";
import Image from "next/image";
import Link from "next/link";

const MaximumSingleNews = ({ newsItem }) => {
  return (
    <Link href={`/news-detail/${newsItem?.id}`}>
      <div className="card border-0 shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Image
              src={`https://ajkal.us/img/news/${newsItem.title_img}`}
              alt="Viewed News"
              className="img-fluid" // Ensures the image is responsive
              width={400}
              height={100}
              style={{ objectFit: "cover" }}
              placeholder="blur" // Optional: Use a blur-up placeholder
              blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
            />
          </div>
          <div className="col-md-8 ps-1">
            <div className="card-body">
              <h5 className="text-site">{newsItem.news_title}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MaximumSingleNews;
