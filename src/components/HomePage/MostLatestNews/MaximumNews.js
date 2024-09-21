import React from "react";
import MaximumSingleNews from "./MaximumSingleNews";

export default async function MaximumNews() {
  const route = `https://backoffice.ajkal.us/viewed-news`;

  // Fetch data with error handling
  let mostLatestList = [];
  try {
    const response = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const mostLatestData = await response.json();
    mostLatestList = mostLatestData?.data || []; // Safely extract the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        {mostLatestList.map((item) => (
          <div className="col-md-12 mb-3" key={item.id}>
            <MaximumSingleNews newsItem={item} /> {/* Pass each news item */}
          </div>
        ))}
      </div>
    </div>
  );
}
