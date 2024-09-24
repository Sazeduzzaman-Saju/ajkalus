// ParentComponent.js
import React from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import KhelarSingleNews from "./KhelarSingleNews";

const NewsSidebarTwo = async () => {
  const route = "https://backoffice.ajkal.us/category-news/6";

  let featuredOne = null;
  let featuredTwo = [];
  let error = null;

  try {
    const response = await fetch(route);
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    const binodonList = data?.data || [];

    featuredOne = binodonList.find((item) => item.is_featured === 1);
    featuredTwo = binodonList
      .filter((item) => item.is_featured === 2)
      .slice(0, 6);
  } catch (err) {
    error = err.message;
  }

  return (
    <div className="px-2">
      <SectionHeader title="খেলার সংবাদ" />
      <KhelarSingleNews
        featuredOne={featuredOne}
        featuredTwo={featuredTwo}
        error={error}
      />
    </div>
  );
};

export default NewsSidebarTwo;
