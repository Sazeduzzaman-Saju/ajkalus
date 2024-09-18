// src/components/BinodonNonFeature.js
import React from "react";
import Image from "next/image";

const BinodonNonFeature = ({ title, data, imageDimensions }) => {
  return (
    <div className="col-xl-8">
      <h2 className="section-title">{title}</h2>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="card rounded-1 border-0 shadow-sm feature-cards mb-4"
          >
            <Image
              src={`https://ajkal.us/img/news/${item.title_img}`}
              alt={item.news_title}
              width={imageDimensions.width}
              height={imageDimensions.height}
              style={{ objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.src = "https://ajkal.us/img/settings/placeholder.jpg";
              }}
            />
            <div className="card-body">
              <h5>{item.news_title}</h5>
              <p>{item.news_short_brief}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No non-featured news available.</p>
      )}
    </div>
  );
};

export default BinodonNonFeature;
