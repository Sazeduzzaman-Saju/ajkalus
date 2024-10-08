// NewsSidebarTwo.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import styles if you're using the package
import Link from "next/link";
import truncateText from "@/utility/truncateWord/truncateText";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const KhelarSingleNews = ({ featuredOne, featuredTwo, error }) => {
  const loading = !featuredOne && featuredTwo.length === 0; // Determine loading state based on data

  if (error) return <div>{error}</div>; // Show error if fetching fails
  //(featuredOne,featuredTwo)
  return (
    <div className="">
      <div className="row mb-4">
        {/* Show the first featured item (is_featured == 1) */}
        {loading ? (
          <div className="col-lg-5">
            <Skeleton height={400} width={800} />
            <Skeleton count={3} />
          </div>
        ) : featuredOne ? (
          <div className="col-lg-5">
            <Link href={`/news-detail/${featuredOne.id}`}>
              <div className="card border-0 shadow-sm">
                <FallbackImages
                  src={`https://ajkal.us/img/news/${featuredOne.title_img}`}
                  alt={featuredOne.news_title}
                  title={featuredOne.news_title}
                  width={800}
                  className="feature-khela img-fluid"
                  height={400}
                />
                <div className="card-body">
                  <h4 className="card-title text-site">
                    {featuredOne.news_title}
                  </h4>
                  <div className="card-text">
                    {truncateText(featuredOne.news_short_brief, 30)}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div>No featured news found.</div>
        )}

        {/* Show up to 6 items with is_featured == 2 */}
        <div className="col-lg-7">
          <div className="row gx-4">
            {loading ? (
              Array(6)
                .fill(0)
                .map((_, index) => (
                  <div className="col-lg-6" key={index}>
                    <Skeleton height={400} width={800} />
                    <Skeleton count={2} />
                  </div>
                ))
            ) : featuredTwo.length > 0 ? (
              featuredTwo.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="mb-2">
                    <Link href={`/news-detail/${item.id}`}>
                      <div className="card border-0 shadow-sm kheladhula mt-2">
                        <div className="card-body p-0">
                          <FallbackImages
                            src={`https://ajkal.us/img/news/${item.title_img}`}
                            alt={item.news_title}
                            title={item.news_title}
                            className="img-fluid khela-img"
                            width={800}
                            height={400}
                          />
                          <div className="p-3">
                            <h6 className="mb-0 fw-semibold text-site">
                              {item.news_title}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div>No featured news available.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhelarSingleNews;
