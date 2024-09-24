import Marquee from "react-fast-marquee";
import Link from "next/link";
import breakingNewsCatNewsApi from "@/utility/categoryApi/breakingNewsApi";

export async function generateStaticParams() {
  let breakingNewsData = await breakingNewsCatNewsApi();
  return breakingNewsData;
}

export default async function BreakingNews() {
  let breakingNews = await breakingNewsCatNewsApi();

  return (
    <div className="container-fluid bg-light">
      <div className="container main-menu-2 rounded-2 mt-1 mb-0">
        <div className="top-bar-area align-items-center">
          <div className="row p-2 px-0">
            <div className="col-lg-12">
              <div className="d-flex align-items-center">
                <div className="breaking-text">
                  <div className="marques-text-title mb-0">ব্রেকিং নিউজঃ </div>
                </div>
                <div className="breaking-news pe-0">
                  <div style={{ borderLeft: "3px solid white" }}>
                    <Marquee pauseOnHover className="marques-text ms-2">
                      {Array.isArray(breakingNews) &&
                      breakingNews.length > 0 ? (
                        breakingNews.map((item, index) => (
                          <span key={index} className="">
                            <Link
                              href={`/news-detail/${item.id}`} // Use href instead of to
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              {item.news_title}
                            </Link>
                            <span className="px-2">|</span>
                          </span>
                        ))
                      ) : (
                        <span>No news available</span>
                      )}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
