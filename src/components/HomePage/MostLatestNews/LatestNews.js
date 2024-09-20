// components/LatestNews/LatestNews.js
import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton"; // Direct import
import Link from "next/link";

const LatestNews = ({ news, loading }) => {
  return (
    <div className="container px-0">
      <div className="row gx-3">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div className="col-lg-6" key={index}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <Skeleton height={20} count={1} />
                    <Skeleton height={30} count={2} />
                  </div>
                  <Skeleton height={200} width="100%" />
                </div>
              </div>
            ))
          : news.map((item, index) => (
              <div className="col-lg-6 mb-3" key={index}>
                <div className="card border-0 shadow-sm mt-1">
                  <Link href={`/news-detail/${item?.id}`}>
                    <Image
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt="News"
                      className="card-img-top"
                      width={600}
                      height={300}
                      style={{ objectFit: "cover" }}
                      placeholder="blur" // Optional: Use a blur-up placeholder
                      blurDataURL="https://ajkal.us/img/settings/placeholder.jpg" // Optional: A small placeholder image
                    />
                    <div className="card-body">
                      <h5 className="text-site mb-0">{item.news_title}</h5>
                      {/* <p
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: item.news_short_brief }}
                    /> */}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default LatestNews;
