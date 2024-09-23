// NewsList.js
"use client";
import React from "react";
import Link from "next/link";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const SakkhatkarNoFeature = ({ newsData }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="row">
      {newsData.map((newsItem) => (
        <div className="col-4" key={newsItem.id}>
          <div className="col-12 mb-3">
            <Link href={`/news-detail/${newsItem.id}`}>
              <div className="card p-0 border-0 shadow-sm">
                <div className="card-body p-0 sakkatkar-non-feature">
                  <FallbackImages
                    src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                    alt="Card Image"
                    className="rounded-3 img-fluid"
                    width={300}
                    height={100}
                  />
                  <div className="card-body">
                    <h6
                      className="news-short-brief text-site"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(newsItem.news_title, 6),
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SakkhatkarNoFeature;
