// src/components/BinodonFeature.js
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./binodon.css";
import SafeHtml from "@/utility/SafeHtml/SafeHtml";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const BinodonFeature = ({ featured1 }) => {
  return (
    <div>
      {featured1.length > 0 ? (
        featured1.map((item) => (
          <div
            key={item.id}
            className="card rounded-1 border-0 shadow-sm binodon-cards mb-4"
          >
            <Link href={`/news-detail/${item?.id}`}>
              <FallbackImages
                src={`https://ajkal.us/img/news/${item.title_img}`}
                alt={item.news_title}
                title={item.news_title}
                className="rounded-2 img-fluid"
                width={600}
                height={800}
              />
              <div className="card-body">
                <h3 className="text-site">{item.news_title}</h3>
                <SafeHtml content={item.news_short_brief} />
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div>No featured news available.</div>
      )}
    </div>
  );
};

export default BinodonFeature;
