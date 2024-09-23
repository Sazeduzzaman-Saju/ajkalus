import CopyUrlButton from "@/utility/CopyUrlButton/CopyUrlButton";
import DecreaseFontSizeButton from "@/utility/DecreaseFontSizeButton/DecreaseFontSizeButton";
import IncreaseFontSizeButton from "@/utility/IncreaseFontSizeButton/IncreaseFontSizeButton";
import ResetFontSizeButton from "@/utility/ResetFontSize/ResetFontSize";
import React from "react";
import { Image } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const NewsDetailsContent = ({ singleNewsDetails }) => {
  return (
    <div className="py-3">
      <div id="news-content">
        <div className="pb-3">
          <h5 className="text-site-two fw-bold py-4 mb-0">
            {singleNewsDetails.category_name_bangla}
          </h5>
        </div>
        <h1 className="pb-4 text-site">{singleNewsDetails.news_title}</h1>
        <div // Add ID here
          className="pb-4"
          dangerouslySetInnerHTML={{
            __html: singleNewsDetails.news_short_brief,
          }}
        />
        <div>
          <Image
            src={`https://ajkal.us/img/news/${singleNewsDetails.title_img}`}
            className="img-fluid rounded"
            alt="Category Feature"
          />
        </div>
        <div className="pt-2">{singleNewsDetails?.news_title} | ফাইল ছবি</div>
        <div className="d-flex justify-content-between align-items-center py-5 deatails-share">
          <div className="news-author-box">
            <h4 className="main-color">{singleNewsDetails?.news_author}</h4>
            <div className="text-danger mb-0">
              <span>
                {new Date(
                  singleNewsDetails.news_time.slice(0, 10)
                ).toLocaleDateString("bn-BD", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div>
            <div className="social-author d-flex">
              <CopyUrlButton />
              <IncreaseFontSizeButton />
              <DecreaseFontSizeButton />
              {/* <divrintPageButton /> */}
              <ResetFontSizeButton />
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: singleNewsDetails.news_detail }}
        />
      </div>
      <div className="pt-5 d-flex justify-content-between align-items-center pe-3">
        <h6 className="text-site-two fw-bold">শেয়ার</h6>
        <div>
          <button className="p-0 ms-2 btn btn-sm text-site border">
            <FaFacebookSquare
              size={30}
              title="নিউজ টি ফেসবুক এ শেয়ার করুন"
              className=""
            />
          </button>
          <button className="p-0 ms-2 btn btn-sm text-site border">
            <FaTwitterSquare
              size={30}
              title="নিউজ টি টুঁইটার এ শেয়ার করুন"
              className=""
            />
          </button>
          <button className="p-0 ms-2 btn btn-sm text-site border">
            <FaWhatsappSquare
              size={30}
              title="নিউজ টি হোয়াটসঅ্যাপ এ শেয়ার করুন"
              className=""
            />
          </button>
            <span className="ms-2"><CopyUrlButton className="me" /></span>
        </div>
      </div>
      <div>
        {/* <Comments /> */}
      </div>
    </div>
  );
};

export default NewsDetailsContent;
