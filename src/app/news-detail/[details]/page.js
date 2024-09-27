import NewsDetails from "@/components/NewsDetails/NewsDetails";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const categoryId = params.details;
  console.log(categoryId, "Category ID");

  let singleNews;

  try {
    // Fetch the product data
    const response = await fetch(
      `https://backoffice.ajkal.us/news-detail/${categoryId}`
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const product = await response.json();
    singleNews = product.data;

    console.log(singleNews, "Fetched Single News Data"); // Log the fetched single news data

    // Generate and return metadata dynamically
    return {
      title: `${singleNews?.news_title} - ক্যাটাগরি || আজকাল পত্রিকা`,
      description:
        singleNews?.news_short_brief.replace(/<\/?[^>]+(>|$)/g, "") ||
        "Default description for Weekly Ajkal.",
      keywords: `${
        singleNews?.meta_tags || "আজকাল, খবর, আপডেট, বাংলাদেশ, বিশ্বসংবাদ"
      }`,
      openGraph: {
        type: "article",
        title: `${singleNews?.news_title} - ক্যাটাগরি || আজকাল পত্রিকা`,
        description:
          singleNews?.news_short_brief.replace(/<\/?[^>]+(>|$)/g, "") ||
          "Default description for Weekly Ajkal.",
        url: `https://www.ajkal.us/news-detail/${categoryId}`,
        images: [
          {
            url:
              `https://ajkal.us/img/news/${singleNews.title_img}` ||
              "https://ajkal.us/img/settings/placeholder.jpg",
            width: 1200,
            height: 630,
            alt: singleNews?.news_title || "Default Image Alt Text",
          },
        ],
        site_name: "আজকাল",
      },
      twitter: {
        card: "summary_large_image",
        title: `${singleNews?.news_title} - ক্যাটাগরি || আজকাল পত্রিকা`,
        description:
          singleNews?.news_short_brief.replace(/<\/?[^>]+(>|$)/g, "") ||
          "Default description for Weekly Ajkal.",
        images: [
          {
            url:
              `https://ajkal.us/img/news/${singleNews.title_img}` ||
              "https://ajkal.us/img/settings/placeholder.jpg",
            alt: singleNews?.news_title || "Default Image Alt Text",
          },
        ],
        site: "@weeklyajkal", // Replace with your Twitter handle
      },
      robots: "index, follow",
      htmlLang: "bn",
      canonicalUrl: `https://www.ajkal.us/news-detail/${categoryId}`,
      author: singleNews?.news_author || "Weekly Ajkal",
      viewport: "width=device-width, initial-scale=1",
      themeColor: "#ffffff",
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    // Handle fetch error (if API call fails)
    return {
      title: "Default Title || Weekly Ajkal",
      description: "Default description for Weekly Ajkal.",
      keywords: "আজকাল, খবর, আপডেট, বাংলাদেশ, বিশ্বসংবাদ",
    };
  }
}

export default async function page({ params }) {
  let { details } = params;
  const route = `https://backoffice.ajkal.us/news-detail/${details}`;
  let data = await fetch(route, {
    next: { revalidate: 10 },
  });
  let newsDetails = await data.json();
  let singleNewsDetails = newsDetails.data;
  //   let NewsList = [...newsDetails?.data] || [];
  return (
    <div>
      <NewsDetails singleNewsDetails={singleNewsDetails} />
    </div>
  );
}
