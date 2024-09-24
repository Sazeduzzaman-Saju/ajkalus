import formatDate from "@/utility/AdorshoLipi/Time/fornatDate";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import React from "react";

const SaraBisshoSingleNews = ({ saraBisshoNewsData }) => {
  // Filter the news data based on the is_featured property
  const saraBisshoNewsFeature = saraBisshoNewsData.filter(
    (news) => news.is_featured === 1
  );
  const saraBisshoNewsNonFeature = saraBisshoNewsData.filter(
    (news) => news.is_featured === 2
  );

  return (
    <div>
      <div className="container px-0">
        <div className="row">
          {/* Column for featured news (is_featured === 1) */}
          <div className="col-lg-5">
            {saraBisshoNewsFeature.length > 0 ? (
              saraBisshoNewsFeature.slice(0, 1).map((news) => (
                <div key={news.id} className="featured-news-item">
                  <div class="card border-0 shadow-sm">
                    <div class="card-body p-0">
                      <FallbackImages
                        src={`https://ajkal.us/img/news/${news.title_img}`}
                        alt="Card Image"
                        className="rounded-3 img-fluid probash-news"
                        width={700}
                        height={700}
                      />
                      <div className="p-3">
                        <h5 style={{ height: "75px", maxHeight: "100%" }}>
                          {news.news_title}
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Add other news details here */}
                </div>
              ))
            ) : (
              <p>No featured news available</p>
            )}
          </div>
          {/* Column for non-featured news (is_featured === 2) */}
          <div className="col-lg-7">
            <div class="row">
              {saraBisshoNewsNonFeature.length > 0 ? (
                saraBisshoNewsNonFeature.slice(0, 5).map((news) => (
                  <div className="col-md-12" key={news.id}>
                    <div className="non-featured-news-item">
                      <div className="card mb-2 border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center p-0">
                          <FallbackImages
                            src={`https://ajkal.us/img/news/${news.title_img}`}
                            alt="Card Image"
                            className="rounded-3 img-fluid"
                            width={200}
                            height={200}
                          />
                          <div className=" px-3">
                            <h5>{news.news_title}</h5>
                            <p>{news.description}</p>
                            <div className="d-flex justify-content-between align-items-center pt-3">
                              <small>
                                <small className="text-site-two fw-bold">
                                  {news.category_name_bangla}
                                </small>
                              </small>
                              <small>
                                <small className="text-site">
                                  {formatDate(news.news_time.slice(0, 10))}
                                </small>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No non-featured news available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaraBisshoSingleNews;
