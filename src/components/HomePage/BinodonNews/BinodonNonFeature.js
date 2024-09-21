// src/components/BinodonNonFeature.js
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BinodonNonFeature = ({ featured2 }) => {
  return (
    <>
      {featured2.length > 0 ? (
        featured2.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <Link href={`/news-detail/${item?.id}`}>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <Image
                    className="img-fluid"
                    src={`https://ajkal.us/img/news/${item.title_img}`}
                    alt={item.news_title}
                    layout="responsive"
                    width={600}
                    height={400}
                    placeholder="blur"
                    blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                  />
                  <div className="p-3">
                    <h5>{item.news_title}</h5>
                    <p>{item.news_short_brief}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No featured items for this category.</p>
      )}
    </>
  );
};

export default BinodonNonFeature;
