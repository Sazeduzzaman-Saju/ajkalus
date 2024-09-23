import React from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import EpaperFeature from "./EpaperFeature";
import SingleEpaper from "@/components/EpaperSlider/SingleEpaper";
import DetailsSidebar from "@/components/Sidebar/DetailsSidebar";

export default async function page() {
  const route = `https://backoffice.ajkal.us/all-epapers`;

  // Add error handling for fetch
  let epaperList = [];
  try {
    let data = await fetch(route);

    // Check if the fetch was successful (HTTP status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }

    let epaperData = await data.json();
    epaperList = epaperData?.data || []; // Safely extract the data
  } catch (error) {
    console.error("Error fetching epaper data:", error);
  }

  //(epaperList.length);

  return (
    <div className="container">
      <div className="row gx-0">
        <div className="col-md-2">
          <SectionHeader title="ফিচার" />
          <EpaperFeature />
        </div>
        <div className="col-md-8">
          {/* Pass the epaperList as a prop */}
          <SingleEpaper epaperList={epaperList}/>
        </div>
        <div className="col-md-2">
          <DetailsSidebar/>
        </div>
      </div>
    </div>
  );
}
