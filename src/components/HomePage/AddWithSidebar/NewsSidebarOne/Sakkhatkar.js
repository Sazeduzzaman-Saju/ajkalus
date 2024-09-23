// NewsList.js
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const Sakkhatkar = ({ newsData }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="row">
      {newsData.map((newsItem) => (
        <div className="col-12" key={newsItem.id}>
          <div className="mb-3">
            <Link href={`/news-detail/${newsItem.id}`}>
              <div className="card p-0 sakkhatkar-card-feature border-0 shadow-sm">
                <div className="card-body p-0">
                  <FallbackImages
                    src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                    alt="Card Image"
                    className="rounded-3"
                    width={600}
                    height={160}
                  />
                  <div className="card-body">
                    <h4
                      className="news-short-brief"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(newsItem.news_title, 5),
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

export default Sakkhatkar;
