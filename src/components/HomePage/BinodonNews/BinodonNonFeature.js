// src/components/BinodonNonFeature.js
"use client";
import React from "react";
import Link from "next/link";
import truncateText from "@/utility/truncateWord/truncateText";
import SafeHtml from "@/utility/SafeHtml/SafeHtml";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const BinodonNonFeature = ({ featured2 }) => {
  return (
    <>
      {featured2.length > 0 ? (
        featured2.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <Link href={`/news-detail/${item?.id}`}>
              <div className="card border-0 shadow-sm binodon-cards-img">
                <div className="card-body p-0">
                  <FallbackImages
                    src={`https://ajkal.us/img/news/${item.title_img}`}
                    alt={item.news_title}
                    className="rounded-3 img-fluid"
                    width={600}
                    height={400}
                  />
                  <div className="p-3">
                    <h5>{item.news_title}</h5>
                    {/* <div>{truncateText(item.news_short_brief, 5)}</div> */}
                    <SafeHtml
                      content={truncateText(item.news_short_brief, 8)}
                      // content={item.news_short_brief}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div>No featured items for this category.</div>
      )}
    </>
  );
};

export default BinodonNonFeature;
