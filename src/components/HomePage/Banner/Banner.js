import React from "react";
import Banner from "./BannerSlide";

export default async function page() {
  const route = `https://backoffice.ajkal.us/breaking-news`;

  // Add error handling for fetch
  let bannerList = [];
  try {
    let data = await fetch(route, { cache: 'no-store' });

    // Check if the fetch was successful (HTTP status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }

    let bannerData = await data.json();
    bannerList = bannerData?.data || []; // Safely extract the data
  } catch (error) {
    console.error("Error fetching epaper data:", error);
  }

  return (
    <div>
      <Banner bannerList={bannerList}></Banner>
    </div>
  );
}
