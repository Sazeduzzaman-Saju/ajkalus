import CopyUrlButton from "@/utility/CopyUrlButton/CopyUrlButton";
import DecreaseFontSizeButton from "@/utility/DecreaseFontSizeButton/DecreaseFontSizeButton";
import IncreaseFontSizeButton from "@/utility/IncreaseFontSizeButton/IncreaseFontSizeButton";
import PrintPageButton from "@/utility/PrintPageButton/PrintPageButton";
import Image from "next/image";
import React from "react";

const NewsDetailsContent = ({ singleNewsDetails }) => {
  return (
    <div className="py-3">
      <div className="pb-3">
        <h5 className="text-site-two fw-bold py-4 mb-0">
          {singleNewsDetails.category_name_bangla}
        </h5>
      </div>
      <h1 className="pb-4 text-site">{singleNewsDetails.news_title}</h1>
      <div
        className="pb-4"
        dangerouslySetInnerHTML={{ __html: singleNewsDetails.news_short_brief }}
      />
      <div className="">
        <Image
          src={`https://ajkal.us/img/news/${singleNewsDetails.title_img}`}
          layout="responsive"
          width={300}
          height={300}
          className="img-fluid rounded"
          alt="Category Feature"
        />
      </div>
      <p className="pt-2">{singleNewsDetails?.news_title} | ফাইল ছবি</p>
      <div className="d-flex justify-content-between align-items-center py-5 deatails-share">
        <div className="news-author-box">
          <h4 className="main-color">{singleNewsDetails?.news_author}</h4>
          <p className="text-danger mb-0">
            <span>
              {new Date(
                singleNewsDetails.news_time.slice(0, 10)
              ).toLocaleDateString("bn-BD", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </p>
        </div>
        <div>
          <div className="social-author">
            <CopyUrlButton />
            <IncreaseFontSizeButton />
            <DecreaseFontSizeButton />
            <PrintPageButton />
          </div>
        </div>
      </div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: singleNewsDetails.news_detail }}
      />
    </div>
  );
};

export default NewsDetailsContent;
