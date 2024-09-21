import React from "react";
import LatestSingleNews from "./LatestSingleNews";

export default async function LatestNews() {
  const route = `https://backoffice.ajkal.us/latest-news`;

  // Fetch data with error handling
  let latestList = [];
  try {
    const response = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const latestData = await response.json();
    latestList = latestData?.data || []; // Safely extract the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="container px-0">
      <div className="row gx-3">
        {latestList.map((item) => (
          <div className="col-lg-6 mb-3" key={item.id}>
            <LatestSingleNews newsItem={item} /> {/* Pass each news item */}
          </div>
        ))}
      </div>
    </div>
  );
}
