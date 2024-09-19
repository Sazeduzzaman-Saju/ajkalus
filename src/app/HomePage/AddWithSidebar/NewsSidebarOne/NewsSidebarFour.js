"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./NesSideBarOne.css"

const NewsSidebarFour = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backoffice.ajkal.us/category-news/10"
        );
        setNewsData(response.data.data); // Assuming the data is in `data.data`
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <SectionHeader title="সাক্ষাৎকার" />
        <div className="row">
          <div className="col-xl-6">
            {[...Array(1)].map((_, index) => (
              <div key={index} className="news-card">
                <div className="card border-0 shadow-sm">
                  <Skeleton height={358} width={700} style={{ objectFit: "cover" }} />
                  <div className="p-3">
                    <Skeleton height={24} width="80%" />
                    <Skeleton height={16} width="60%" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-xl-6">
            <div className="row">
              {[...Array(4)].map((_, index) => (
                <div className="col-6" key={index}>
                  <div className="col-12 mb-3">
                    <div className="card p-0 sakkhatkar-card border-0 shadow-sm">
                      <div className="card-body p-0">
                        <Skeleton height={100} width={300} style={{ objectFit: "cover" }} />
                        <div className="card-body">
                          <Skeleton height={24} width="80%" />
                          <Skeleton height={16} width="60%" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  // Separate the data based on is_featured value
  const featured1 = newsData.filter((item) => item.is_featured === 1);
  const featured2 = newsData
    .filter((item) => item.is_featured === 2)
    .slice(3, 7); // Adjusted slice to show first 3 items

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="container">
      <SectionHeader title="সাক্ষাৎকার" />
      <div className="row">
        <div className="col-xl-6">
          {featured1.length > 0 ? (
            featured1.map((newsItem) => (
              <div key={newsItem.id} className="news-card">
                <div className="card border-0 shadow-sm">
                  <Image
                    src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                    alt="Card Image"
                    title="Card Image"
                    className="rounded-0 img-fluid"
                    width={700}
                    height={358}
                    style={{ objectFit: "cover" }}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://ajkal.us/img/settings/placeholder.jpg";
                    }}
                  />
                  <div className="p-3">
                    <h4 className="pt-3">{newsItem.news_title}</h4>
                    <div
                      className="news-short-brief"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(newsItem.news_short_brief),
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No featured news available</p>
          )}
        </div>
        <div className="col-xl-6">
          <div className="row">
            {featured2.length > 0 ? (
              featured2.map((newsItem) => (
                <div className="col-6" key={newsItem.id}>
                  <div className="col-12 mb-3">
                    <div className="card p-0 sakkhatkar-card border-0 shadow-sm">
                      <div className="card-body p-0">
                        <Image
                          src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                          alt="Card Image"
                          title="Card Image"
                          className="rounded-0 img-fluid "
                          width={300}
                          height={100}
                          style={{ objectFit: "cover" }}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://ajkal.us/img/settings/placeholder.jpg";
                          }}
                        />
                        <div className="card-body">
                          <h4
                            className="news-short-brief"
                            dangerouslySetInnerHTML={{
                              __html: truncateText(newsItem.news_title, 5),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No featured news available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSidebarFour;
