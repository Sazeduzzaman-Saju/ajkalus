"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text?.split(" ");
  return words?.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const NewsSectionFive = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backoffice.ajkal.us/category-news/10"
        );
        setNewsData(response.data.data.slice(0, 8)); // Assuming the data is in `data.data`
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
        <SectionHeader title="নিউইয়র্ক" />
        <div className="row">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="news-card col-xl-3 mb-4">
              <div className="card border-0 shadow-sm">
                <Skeleton height={358} width="100%" style={{ objectFit: "cover" }} />
                <div className="p-3">
                  <Skeleton height={24} width="80%" />
                  <Skeleton height={16} width="60%" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <SectionHeader title="নিউইয়র্ক" />
      <div className="row">
        {newsData.map((newsItem) => (
          <div className="news-card col-xl-3 mb-4" key={newsItem.id}>
            <div className="card border-0 shadow-sm">
              <Image
                src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                alt="Card Image"
                title="Card Image"
                className="rounded-0 img-fluid card-img-top"
                width={700}
                height={358}
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ajkal.us/img/settings/placeholder.jpg";
                }}
              />
              <div className="p-3">
                <h5 className="pt-3">{newsItem.news_title}</h5>
                <div
                  className="news-short-brief"
                  dangerouslySetInnerHTML={{
                    __html: truncateText(newsItem.news_short_brief, 20), // Limit to 20 words
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSectionFive;
