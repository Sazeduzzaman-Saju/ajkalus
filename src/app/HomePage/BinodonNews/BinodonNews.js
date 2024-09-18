"use client"; // Add this directive at the top

import React, { useState, useEffect } from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";

// Utility function to limit the number of words in a string
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const BinodonNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://backoffice.ajkal.us/category-news/7");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const featured1 = data.filter((item) => item.is_featured === 1);
  const featured2 = data.filter((item) => item.is_featured === 2).slice(0, 6);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <SectionHeader title="বিনোদন" />
      <div className="row">
        <div className="col-xl-5">
          {featured1.length > 0 ? (
            featured1.map((item) => (
              <div key={item.id} className="featured-item">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-0">
                    <Image
                      className="img-fluid w-100"
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      layout="responsive"
                      width={700}
                      height={600}
                      placeholder="blur"
                      blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                    />
                    <div className="p-3 pt-4 feature-binodon">
                      <h5 dangerouslySetInnerHTML={{ __html: item.news_title }}></h5>
                      <p className="pt-3" dangerouslySetInnerHTML={{ __html: item.news_short_brief }}></p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No featured items for this category.</p>
          )}
        </div>
        <div className="col-xl-7">
          <div className="row">
            {featured2.length > 0 ? (
              featured2.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                      <Image
                        className="img-fluid"
                        src={`https://ajkal.us/img/news/${item.title_img}`}
                        alt={item.news_title}
                        layout="responsive"
                        width={600}
                        height={400}
                        placeholder="blur"
                        blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                      />
                      <div className="p-3">
                        <h5 dangerouslySetInnerHTML={{ __html: truncateText(item.news_title, 4) }}></h5>
                        <p dangerouslySetInnerHTML={{ __html: truncateText(item.news_short_brief, 6) }}></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No featured items for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinodonNews;
