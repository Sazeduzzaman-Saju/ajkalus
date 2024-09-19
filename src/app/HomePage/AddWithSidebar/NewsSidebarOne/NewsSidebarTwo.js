"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import styles if you're using the package

const NewsSidebarTwo = () => {
  const [featuredOne, setFeaturedOne] = useState(null); // For is_featured == 1
  const [featuredTwo, setFeaturedTwo] = useState([]); // For is_featured == 2
  const [error, setError] = useState(null); // To handle errors
  const [loading, setLoading] = useState(true); // To show loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backoffice.ajkal.us/category-news/6"
        );
        const data = response.data.data; // Extracting data array from response
        // Filter the data based on `is_featured` values
        setFeaturedOne(data.find((item) => item.is_featured === 1));
        setFeaturedTwo(
          data.filter((item) => item.is_featured === 2).slice(4, 10)
        ); // Limit to 6
        setLoading(false); // Stop loading after data is fetched
      } catch (error) {
        setError("Error fetching data"); // Handle errors
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>; // Show error if fetching fails

  return (
    <div>
      <SectionHeader title="খেলার সংবাদ" />
      <div>
        <div className="row mb-4">
          {/* Show the first featured item (is_featured == 1) */}
          {loading ? (
            <div className="col-lg-5">
              <Skeleton height={400} width={800} />
              <Skeleton count={3} />
            </div>
          ) : featuredOne ? (
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm">
                <Image
                  className="img-fluid feature-khela"
                  src={`https://ajkal.us/img/news/${featuredOne.title_img}`}
                  alt={featuredOne.news_title}
                  width={800}
                  height={400}
                  title={featuredOne.news_title}
                />
                <div className="card-body">
                  <h4 className="card-title text-site">
                    {featuredOne.news_title}
                  </h4>
                  <p className="card-text">{featuredOne.news_short_brief}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>No featured news found.</p>
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
                      <div className="card border-0 shadow-sm kheladhula mt-2">
                        <div className="card-body p-0">
                          <Image
                            className="img-fluid khela-img"
                            src={`https://ajkal.us/img/news/${item.title_img}`}
                            alt={item.news_title}
                            width={800}
                            style={{ objectFit: "cover" }}
                            height={400}
                            title={item.news_title}
                          />
                          <div className="p-3">
                            <h6 className="mb-0 fw-semibold text-site">
                              {item.news_title}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No featured news available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSidebarTwo;
