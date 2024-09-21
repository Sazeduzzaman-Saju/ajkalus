"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Default to an empty array if NewWorkNewsData is undefined
const NewWorkNews = ({ NewWorkNewsData = [] }) => {
  return (
    <div className="row">
      {NewWorkNewsData.length > 0 ? (
        NewWorkNewsData.map((newsItem) => (
          <div className="news-card col-xl-3 mb-4" key={newsItem.id}>
            <Link href={`/news-detail/${newsItem?.id}`}>
              <div className="card border-0 shadow-sm">
                <Image
                  src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                  alt="Card Image"
                  title="Card Image"
                  className="rounded-0 img-fluid card-img-top"
                  width={700}
                  height={358}
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ajkal.us/img/settings/placeholder.jpg";
                  }}
                />
                <div className="p-3">
                  <h5 className="pt-3">{newsItem.news_title}</h5>
                  <div className="news-short-brief">
                  {newsItem.news_short_brief}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default NewWorkNews;
