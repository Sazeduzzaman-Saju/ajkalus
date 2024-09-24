import CategoryCards from "@/components/CategoryCards/CategoryCards";
import DetailsSidebar from "@/components/Sidebar/DetailsSidebar";
import { notFound } from "next/navigation";
import React from "react";



export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const dynamicCategoryName = params.dynamicCategory.slice(0,1).join("/")
 
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  

  // console.log(searchParams, previousImages, "dynamic page")


  return {
    title: `${dynamicCategoryName}`,
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    keywords:
      "আজকাল, খবর, আপডেট, বাংলাদেশ, বিশ্বসংবাদ, খেলাধুলা, রাজনীতি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল",
    openGraph: {
      type: "website",
      url: "https://www.ajkal.us/contact",
      title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
      description:
        "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
      images: [
        {
          url: "https://ajkal.us/img/settings/placeholder.jpg",
          width: 1200,
          height: 630,
          alt: "সাপ্তাহিক আজকাল এর চিত্র",
        },
        ...previousImages
      ],
      site_name: "আজকাল",
    },
    twitter: {
      card: "summary_large_image",
      title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
      description:
        "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
      images: ["https://ajkal.us/img/settings/placeholder.jpg"],
    },
    canonicalUrl: "https://www.ajkal.us/contact", // Ensure this is the correct URL
  }
}


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
