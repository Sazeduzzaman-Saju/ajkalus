"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import "react-loading-skeleton/dist/skeleton.css"; // Import default styles if needed
import LatestNews from "./LatestNews";
import MaximumNews from "./MaximumNews";

const apiEndpoints = {
  latestNews: "https://backoffice.ajkal.us/latest-news",
  viewedNews: "https://backoffice.ajkal.us/viewed-news",
  advertisements: "https://backoffice.ajkal.us/ad/all",
};

const MostLatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [viewedNews, setViewedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [latestNewsRes, viewedNewsRes] = await Promise.all([
        axios.get(apiEndpoints.latestNews),
        axios.get(apiEndpoints.viewedNews),
      ]);

      // Process latest news
      const sortedLatestNews = (latestNewsRes.data?.data || latestNewsRes.data)
        .sort((a, b) => new Date(b.news_time) - new Date(a.news_time))
        .slice(0, 8);
      setLatestNews(sortedLatestNews);

      // Process viewed news
      const topViewedNews = (
        viewedNewsRes.data?.data || viewedNewsRes.data
      ).slice(0, 8);
      setViewedNews(topViewedNews);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <SectionHeader title={"সর্বশেষ আজকাল"} />
          <LatestNews news={latestNews} loading={loading} />
        </div>
        <div className="col-lg-4">
          <SectionHeader title={"সর্বাধিক পঠিত"} />
          <MaximumNews news={viewedNews} loading={loading} />
        </div>
      </div>
      {/* Additional Content */}
    </div>
  );
};

export default MostLatestNews;
