import React from "react";
import SingleEpaper from "@/components/EpaperSlider/SingleEpaper";
import DetailsSidebar from "@/components/Sidebar/DetailsSidebar";

export const metadata = {
  title: "ই-পেপার || Weekly Ajkal",
  description:
    "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
  keywords:
    "আজকাল, খবর, আপডেট, বাংলাদেশ, বিশ্বসংবাদ, খেলাধুলা, রাজনীতি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল",
  openGraph: {
    type: "website",
    url: "https://www.ajkal.us/epaper",
    title: "সাপ্তাহিক আজকাল || Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: [
      {
        url: "https://ajkal.us/img/settings/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "সাপ্তাহিক আজকাল এর চিত্র",
      },
    ],
    site_name: "আজকাল",
  },
  twitter: {
    card: "summary_large_image",
    site: "@weeklyajkal", // Replace with your Twitter handle
    title: "সাপ্তাহিক আজকাল || Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: [
      {
        url: "https://ajkal.us/img/settings/placeholder.jpg",
        alt: "সাপ্তাহিক আজকাল এর চিত্র",
      },
    ],
  },
  robots: "index, follow",
  htmlLang: "bn",
  canonicalUrl: "https://www.ajkal.us/epaper",
  author: "Weekly Ajkal",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

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
        {/* <div className="col-md-1">
          <SectionHeader title="ফিচার" />
          <EpaperFeature />
        </div> */}
        <div className="col-md-9">
          {/* Pass the epaperList as a prop */}
          <SingleEpaper epaperList={epaperList} />
        </div>
        <div className="col-md-3">
          <DetailsSidebar />
        </div>
      </div>
    </div>
  );
}
