import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import Link from "next/link";

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const url = "https://backoffice.ajkal.us/breaking-news";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (Array.isArray(response.data)) {
          setBreakingNews(response.data.slice(0, 10)); // Limit to 10 items
        } else if (Array.isArray(response.data.data)) {
          setBreakingNews(response.data.data.slice(0, 12)); // Limit to 12 items if nested
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid bg-light">
      <div className="container main-menu-2">
        <div className="top-bar-area align-items-center">
          <div className="row p-2 px-0">
            <div className="col-lg-12">
              <div className="d-flex align-items-center">
                <div className="breaking-text">
                  <p className="marques-text-title mb-0">ব্রেকিং নিউজঃ </p>
                </div>
                <div className="breaking-news pe-0">
                  <div style={{ borderLeft: "3px solid white" }}>
                    <Marquee pauseOnHover className="marques-text ms-2">
                      {Array.isArray(breakingNews) &&
                      breakingNews.length > 0 ? (
                        breakingNews.map((item, index) => (
                          <span key={index} className="">
                            <Link
                              href={`/${item.category_name}/${item.id}`} // Use href instead of to
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
};

export default BreakingNews;
