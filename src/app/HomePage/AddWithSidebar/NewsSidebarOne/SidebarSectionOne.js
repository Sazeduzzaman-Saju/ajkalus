"use client";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./NesSideBarOne.css";

const SidebarSectionOne = () => {
  const [data12, setData12] = useState([]);
  const [data17, setData17] = useState([]);
  const [data13, setData13] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null); // State for hovered item

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.get(url);
        setData(response.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData("https://backoffice.ajkal.us/category-news/12", setData12);
    fetchData("https://backoffice.ajkal.us/category-news/17", setData17);
    fetchData("https://backoffice.ajkal.us/category-news/13", setData13);
  }, []);

  const getFeaturedItems = (data, is_featured, limit = null) => {
    const filtered = data.filter((item) => item.is_featured === is_featured);
    if (is_featured === 1) {
      const sorted = filtered.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      );
      return sorted.length > 0 ? [sorted[0]] : [];
    }
    return limit ? filtered.slice(0, limit) : filtered;
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* First column (data12) */}
          <div className="col-xl-4">
            <SectionHeader title="রাজনীতি" className="mb-0" />
            <div>
              {getFeaturedItems(data12, 1).map((item) => (
                <div
                  key={item.id}
                  className="card mb-4 shadow-sm border-0 side-bar-cards"
                >
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
                    <div className="content p-3">
                      <h5>{truncateText(item.news_title, 10)}</h5>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p
                          className="text-gray fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          {item.category_name}
                        </p>
                        <p
                          className="text-gray fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          {formatDate(item.news_time)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {getFeaturedItems(data12, 2, 6).map((item) => (
                <div
                  key={item.id}
                  className="card p-3 mb-2 title-cards"
                  onMouseEnter={() => setHoveredItem(item)} // Set hovered item on enter
                  onMouseLeave={() => setHoveredItem(null)} // Reset on leave
                >
                  <p className="pb-0">
                    <FaLongArrowAltRight className="pe-1" />
                    <span className="ps-1 text-site">
                      {truncateText(item.news_title, 7)}
                    </span>
                  </p>
                  {/* Display dynamic image when hovering */}
                  {hoveredItem && hoveredItem.id === item.id && (
                    <div className="hover-image-container">
                      <Image
                        className="hover-image"
                        src={`https://ajkal.us/img/news/${item.title_img}`}
                        alt={item.news_title}
                        width={200}
                        height={150}
                        layout="responsive"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Second column (data17) */}
          <div className="col-xl-4">
            <SectionHeader title="অন্যান্য" className="mb-0" />
            <div>
              {getFeaturedItems(data17, 1).map((item) => (
                <div
                  key={item.id}
                  className="card mb-4 shadow-sm border-0 side-bar-cards"
                >
                  <div className="card-body p-0">
                    <Image
                      className="img-fluid w-100"
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt={item.news_title}
                      layout="responsive"
                      width={700}
                      height={700}
                      placeholder="blur"
                      blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                    />
                    <div className="content p-3">
                      <h5>{truncateText(item.news_title, 10)}</h5>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p
                          className="text-gray fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          {item.category_name}
                        </p>
                        <p
                          className="text-gray fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          {formatDate(item.news_time)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {getFeaturedItems(data17, 2, 6).map((item) => (
                <div
                  key={item.id}
                  className="card p-3 mb-2 title-cards"
                  onMouseEnter={() => setHoveredItem(item)} // Set hovered item on enter
                  onMouseLeave={() => setHoveredItem(null)} // Reset on leave
                >
                  <p className="pb-0">
                    <FaLongArrowAltRight className="pe-1" />
                    <span className="ps-1 text-site">
                      {truncateText(item.news_title, 7)}
                    </span>
                  </p>
                  {/* Display dynamic image when hovering */}
                  {hoveredItem && hoveredItem.id === item.id && (
                    <div className="hover-image-container">
                      <Image
                        className="hover-image"
                        src={`https://ajkal.us/img/news/${item.title_img}`}
                        alt={item.news_title}
                        width={200}
                        height={150}
                        layout="responsive"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Third column (data13) */}
          <div className="col-xl-4">
            <SectionHeader title="কমিউনিটি সংবাদ" className="mb-0" />
            <div>
              {getFeaturedItems(data13, 1).map((item) => (
                <div
                  key={item.id}
                  className="card mb-4 shadow-sm border-0 side-bar-cards"
                >
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
                    <div className="content p-3">
                      <h5>{truncateText(item.news_title, 10)}</h5>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p
                          className="text-gray fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          {item.category_name}
                        </p>
                        <p
                          className="text-gray fw-bold"
                          style={{ fontSize: "12px" }}
                        >
                          {formatDate(item.news_time)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {getFeaturedItems(data13, 2, 6).map((item) => (
                <div
                  key={item.id}
                  className="card p-3 mb-2 title-cards"
                  onMouseEnter={() => setHoveredItem(item)} // Set hovered item on enter
                  onMouseLeave={() => setHoveredItem(null)} // Reset on leave
                >
                  <p className="pb-0">
                    <FaLongArrowAltRight className="pe-1" />
                    <span className="ps-1 text-site">
                      {truncateText(item.news_title, 7)}
                    </span>
                  </p>
                  {/* Display dynamic image when hovering */}
                  {hoveredItem && hoveredItem.id === item.id && (
                    <div className="hover-image-container">
                      <Image
                        className="hover-image"
                        src={`https://ajkal.us/img/news/${item.title_img}`}
                        alt={item.news_title}
                        width={200}
                        height={150}
                        layout="responsive"
                      />
                    </div>
                  )}
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
