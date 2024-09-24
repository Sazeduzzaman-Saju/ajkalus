"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./NesSideBarOne.css";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import formatDate from "@/utility/AdorshoLipi/Time/fornatDate";

const OnannoNews = ({ data17 }) => {
  const getFeaturedItems = (data, isFeatured, limit = null) => {
    const filtered = data.filter((item) => item.is_featured === isFeatured);
    if (isFeatured === 1) {
      const sorted = filtered.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      );
      return sorted.length > 0 ? [sorted[0]] : [];
    }
    return limit ? filtered.slice(0, limit) : filtered;
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <>
      <div className="card mb-4 shadow-sm border-0">
        {getFeaturedItems(data17, 1).map((item) => (
          <div key={item.id} className="side-bar-cards title-cards">
            <Link href={`/news-detail/${item?.id}`}>
              <div className="card-body p-0">
                <FallbackImages
                  src={`https://ajkal.us/img/news/${item.title_img}`}
                  alt={item.news_title}
                  title={item.news_title}
                  className="rounded-3 img-fluid"
                  width={700}
                  height={700}
                />
                <div className="content p-3">
                  <h5>{truncateText(item.news_title, 10)}</h5>
                  <div className="d-flex justify-content-between align-items-center pt-3">
                    <div
                      className="text-gray fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {item.category_name_bangla}
                    </div>
                    <div
                      className="text-gray fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {formatDate(item.news_time)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div>
          {getFeaturedItems(data17, 2, 6).map((item) => (
            <div key={item.id} className="title-card-hover p-3 py-2">
              <ul>
                <li className="card-list-items">
                  <Link
                    href={`/news-detail/${item?.id}`}
                    className="d-block position-relative"
                  >
                    <div className="pb-0">
                      {/* <FaLongArrowAltRight className="pe-1" /> */}
                      <span className="ps-1 text-site">
                        {truncateText(item.news_title, 7)}
                      </span>
                    </div>
                    <FallbackImages
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      title={item.news_title}
                      className="rounded-3 hover-image"
                      width={900}
                      height={700}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        {getFeaturedItems(data17, 2, 6).map((item) => (
          <div key={item.id} className="card p-3 mb-2 title-cards">
            <Link href={`/news-detail/${item?.id}`}>
              <div className="pb-0">
                <FaLongArrowAltRight className="pe-1" />
                <span className="ps-1 text-site">
                  {truncateText(item.news_title, 7)}
                </span>
              </div>
              <div className="hover-image-container" style={{ display: 'none' }}>
                <Image
                  className="hover-image"
                  src={`https://ajkal.us/img/news/${item.title_img}`}
                  alt={item.news_title}
                  width={200}
                  height={150}
                   
                />
              </div>
            </Link>
          </div>
        ))}
      </div> */}

      <style jsx>{`
        .title-cards:hover .hover-image-container {
          display: block;
        }
      `}</style>
    </>
  );
};

export default OnannoNews;
