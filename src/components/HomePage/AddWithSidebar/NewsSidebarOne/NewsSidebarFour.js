// NewsSidebarFour.js
import React from "react";
import axios from "axios";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Sakkhatkar from "./Sakkhatkar";

const NewsSidebarFour = async () => {
  let newsData = [];
  let error = null;

  try {
    const response = await axios.get(
      "https://backoffice.ajkal.us/category-news/10"
    );
    newsData = response.data.data; // Assuming the data is in `data.data`
  } catch (err) {
    error = "Failed to fetch data";
  }

  if (error) return <p>{error}</p>;

  // Separate the data based on is_featured value
  const featured1 = newsData.filter((item) => item.is_featured === 1);
  const featured2 = newsData
    .filter((item) => item.is_featured === 2)
    .slice(3, 7); // Adjusted slice to show first 3 items

  return (
    <div className="container">
      <SectionHeader title="সাক্ষাৎকার" />
      <div className="row">
        <div className="col-xl-6">
          {featured1.length > 0 ? (
            <Sakkhatkar newsData={featured1} />
          ) : (
            <p>No featured news available</p>
          )}
        </div>
        <div className="col-xl-6">
          {featured2.length > 0 ? (
            <Sakkhatkar newsData={featured2} />
          ) : (
            <p>No featured news available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSidebarFour;
