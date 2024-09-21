// src/components/BinodonFeature.js
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BinodonFeature = ({ featured1 }) => {
  return (
    <div>
      {featured1.length > 0 ? (
        featured1.map((item) => (
          <div
            key={item.id}
            className="card rounded-1 border-0 shadow-sm feature-cards mb-4"
          >
            <Link href={`/news-detail/${item?.id}`}>
              <Image
                src={`https://ajkal.us/img/news/${item.title_img}`}
                alt={item.news_title}
                className="img-fluid"
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ajkal.us/img/settings/placeholder.jpg";
                }}
              />
              <div className="card-body">
                <h3>{item.news_title}</h3>
                <p>{item.news_short_brief}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No featured news available.</p>
      )}
    </div>
  );
};

export default BinodonFeature;
