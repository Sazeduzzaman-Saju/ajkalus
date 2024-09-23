// Sakkhatkar.js
import React from "react";
import axios from "axios";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Sakkhatkar from "./Sakkhatkar";
import SakkhatkarNoFeature from "./SakkhatkarNoFeature";

const SakkhatkarNews = async () => {
  let newsData = [];
  let error = null;

  try {
    const response = await axios.get(
      "https://backoffice.ajkal.us/category-news/14"
    );
    newsData = response.data.data; // Assuming the data is in `data.data`
  } catch (err) {
    error = "Failed to fetch data";
  }

  if (error) return <div>{error}</div>;

  // Separate the data based on is_featured value
  const featured1 = newsData.filter((item) => item.is_featured === 1);
  const featured2 = newsData
    .filter((item) => item.is_featured === 2)
    .slice(2, 8); // Adjusted slice to show first 3 items

  return (
    <div className="container">
      <SectionHeader title="সাক্ষাৎকার || Interview" />
      <div className="row">
        <div className="col-xl-6">
          {featured1.length > 0 ? (
            <Sakkhatkar newsData={featured1} />
          ) : (
            <div>No featured news available</div>
          )}
        </div>
        <div className="col-xl-6">
          {featured2.length > 0 ? (
            <SakkhatkarNoFeature newsData={featured2} />
          ) : (
            <div>No featured news available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SakkhatkarNews;
