"use client";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import "./NesSideBarOne.css";

const SidebarSectionOne = () => {
  const [data12, setData12] = useState([]);
  const [data17, setData17] = useState([]);
  const [data13, setData13] = useState([]);

  useEffect(() => {
    // Fetch data for the different sections
    const fetchData = async (url, setData) => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data || []); // Store the fetched data
    };

    // Fetch data from the provided URLs
    fetchData("https://backoffice.ajkal.us/category-news/12", setData12);
    fetchData("https://backoffice.ajkal.us/category-news/17", setData17);
    fetchData("https://backoffice.ajkal.us/category-news/13", setData13);
  }, []);

  // Format the date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Filter and sort the data to get featured items and handle cases with multiple featured items
  const getFeaturedItems = (data, is_featured, limit = null) => {
    const filtered = data.filter((item) => item.is_featured === is_featured);
    if (is_featured === 1) {
      // If is_featured is 1, return only the latest item
      const sorted = filtered.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      );
      return sorted.length > 0 ? [sorted[0]] : [];
    }
    // For is_featured 2, return up to the specified limit
    return limit ? filtered.slice(0, limit) : filtered;
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <SectionHeader title="" className="mb-0" />
            <div>
              {getFeaturedItems(data12, 1).map((item) => (
                <div
                  key={item.id}
                  className="card mb-4 shadow-sm border-0 sidebar-card-image"
                >
                  <div className="card-body p-0">
                    <Image
                      className="img-fluid w-100"
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      layout="responsive"
                      width={700} // Set a base width, it will scale with the container
                      height={600} // Set a base height, it will scale with the container
                      placeholder="blur"
                      blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                    />
                    <div className="content p-3">
                      <h5>{item.news_title}</h5>
                      <div className="pt-3 d-flex justify-content-between align-items-center">
                        <p className="text-site-two">{item.category_name}</p>
                        <p className="text-site-two">
                          {formatDate(item.published_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {getFeaturedItems(data12, 2, 4).map((item) => (
                <div key={item.id}>
                  <div className="card mb-3">
                    <p className="">
                      <BiRightArrowCircle />
                      {item.news_title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-4">
            <SectionHeader title="" className="mb-0" />
            <div>
              {getFeaturedItems(data17, 1).map((item) => (
                <div
                  key={item.id}
                  className="card mb-4 shadow-sm border-0 sidebar-card-image"
                >
                  <div className="card-body p-0">
                    <Image
                      className="img-fluid w-100"
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      layout="responsive"
                      width={700} // Set a base width, it will scale with the container
                      height={700} // Set a base height, it will scale with the container
                      placeholder="blur"
                      blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                    />
                    <div className="content p-3">
                      <h5>{item.news_title}</h5>
                      <div className="pt-3 d-flex justify-content-between align-items-center">
                        <p className="text-site-two">{item.category_name}</p>
                        <p className="text-site-two">
                          {formatDate(item.published_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {getFeaturedItems(data17, 2, 4).map((item) => (
                <div key={item.id}>
                  <div className="card mb-3">
                    <p className="">
                      <BiRightArrowCircle />
                      {item.news_title}
                    </p>
                  </div>
                  {/*<div className="d-flex justify-content-between align-items-center">
                   <p>{item.category_name}</p>
                     <p className="text-site-two">
                      {item.news_time.slice(0, 10)}
                    </p> 
                  </div>*/}
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-4">
            <SectionHeader title="" className="mb-0" />
            <div>
              {getFeaturedItems(data13, 1).map((item) => (
                <div
                  key={item.id}
                  className="card mb-4 shadow-sm border-0 sidebar-card-image"
                >
                  <div className="card-body p-0">
                    <Image
                      className="img-fluid w-100"
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      layout="responsive"
                      width={700} // Set a base width, it will scale with the container
                      height={600} // Set a base height, it will scale with the container
                      placeholder="blur"
                      blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                    />
                    <div className="content p-3">
                      <h5>{item.news_title}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-site-two">{item.category_name}</p>
                        <p className="text-site-two">
                          {item.news_time.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {getFeaturedItems(data13, 2, 4).map((item) => (
                <div key={item.id}>
                  <div className="card mb-3">
                    <p className="">
                      <BiRightArrowCircle /> {item.news_title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSectionOne;
