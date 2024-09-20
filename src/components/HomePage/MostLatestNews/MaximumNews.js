import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton"; // Direct import
import Link from "next/link";

const MAX_TITLE_WORDS = 5; // Maximum number of words for the title
const MAX_TEXT_WORDS = 8; // Maximum number of words for the text

const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + ""
    : text;
};

const MaximumNews = ({ news, loading }) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="col-md-12 mb-3" key={index}>
                <div className="row">
                  <div className="col-md-4">
                    <Skeleton height={150} width="100%" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <Skeleton height={20} count={1} />
                      <Skeleton height={30} count={2} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : news.map((item, index) => (
              <div className="col-md-12 mb-3 px-0" key={index}>
                <Link href={`/news-detail/${item?.id}`}>
                  <div className="card border-0 shadow-sm mt-1">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <Image
                          src={`https://ajkal.us/img/news/${item.title_img}`}
                          alt="Viewed News"
                          className="img-fluid sidebar-img" // Ensures the image is responsive
                          width={400}
                          height={100}
                          style={{ objectFit: "cover" }}
                          placeholder="blur" // Optional: Use a blur-up placeholder
                          blurDataURL="https://ajkal.us/img/settings/placeholder.jpg" // Optional: A small placeholder image
                        />
                      </div>
                      <div className="col-md-8 ps-1">
                        <div className="card-body p-0">
                          <div className="sidebar-cont">
                            <h5 className="text-site">
                              {truncateText(item.news_title, MAX_TITLE_WORDS)}
                            </h5>
                            <p
                              className="card-text"
                              dangerouslySetInnerHTML={{
                                __html: truncateText(
                                  item.news_short_brief,
                                  MAX_TEXT_WORDS
                                ),
                              }}
                            />
                          </div>
                          {/* <div className="card-meta mt-2">
                          <span className="text-muted">
                            Published on:{" "}
                            {new Date(item.news_time).toLocaleDateString()}
                          </span>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MaximumNews;
