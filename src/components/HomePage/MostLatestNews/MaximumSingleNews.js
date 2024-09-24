import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const MaximumSingleNews = ({ newsItem }) => {
  return (
    <Link href={`/news-detail/${newsItem?.id}`}>
      <div className="card border-0 shadow-sm mb-1">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Image
              src={`https://ajkal.us/img/news/${newsItem.title_img}`}
              alt="Viewed News"
              className="rounded-3" // Ensures the image is responsive
              width={130}
              height={110}
              style={{ objectFit: "cover" }}
              placeholder="blur" // Optional: Use a blur-up placeholder
              blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
            />
          </div>
          <div className="col-md-8 ps-1">
            <div className="card-body pb-0">
              <h6 className="text-site">{newsItem.news_title}</h6>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-site fw-bold">
                  {newsItem.category_name_bangla}
                </small>
                <small className="bg-white shadow-sm p-1 rounded-3">
                  {/* <FaEye className="text-site" /> {newsItem.view_count} জন */}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MaximumSingleNews;
