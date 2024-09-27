import CategoryCards from "@/components/CategoryCards/CategoryCards";
import DetailsSidebar from "@/components/Sidebar/DetailsSidebar";
import { notFound } from "next/navigation";
import React from "react";

// The generateMetadata function
export async function generateMetadata({ params, searchParams }, parent) {
  const dynamicCategory = params.dynamicCategory.join("/");
  // Extract the last part of the URL as categoryId
  const categoryId = dynamicCategory.split("/").pop();

  // Fetch the category news based on categoryId
  // console.log(`http://localhost:3000/${dynamicCategory}`, "URL");
  const product = await fetch(
    `https://backoffice.ajkal.us/category-news/${categoryId}`
  ).then((res) => res.json());

  // console.log(product.data[0]?.category_name_bangla, "URL");
  const categorName = product.data[0]?.category_name_bangla;

  try {
    // Generate and return metadata dynamically
    return {
      title: `${categorName} - ক্যাটাগরি || আজকাল পত্রিকা`,
      description:
        "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
      keywords:
        "আজকাল, খবর, আপডেট, বাংলাদেশ, বিশ্বসংবাদ, খেলাধুলা, রাজনীতি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল",
      openGraph: {
        type: "website",
        url: `https://www.ajkal.us/${dynamicCategory}`,
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
      canonicalUrl: `https://www.ajkal.us/${dynamicCategory}`,
      author: "Weekly Ajkal",
      viewport: "width=device-width, initial-scale=1",
      themeColor: "#ffffff",
    };
  } catch (error) {
    // Handle fetch error (if API call fails)
    return {
      title: "Default Title || Weekly Ajkal",
      description: "Default description for Weekly Ajkal.",
    };
  }
}

// The page component
export default async function Page({ params }) {
  const { dynamicCategory } = params;
  const combinedPathMore = await dynamicCategory.slice(1).join("/");
  const route = `https://backoffice.ajkal.us/category-news/${combinedPathMore}`;

  try {
    const data = await fetch(route);
    if (!data.ok) {
      notFound(); // This will show the custom 404 page
    }

    const categoryData = await data.json();
    const CategoryList = [...categoryData?.data] || [];
    if (CategoryList.length === 0) {
      notFound(); //do not use this 404 page ... use the no data found msg : todo
    }
    // console.log(params.dynamicCategory.join("/"))s
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-xl-9">
            <CategoryCards CategoryList={CategoryList}></CategoryCards>
          </div>
          <div className="col-xl-3">
            <DetailsSidebar />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
