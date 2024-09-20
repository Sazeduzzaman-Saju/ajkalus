import CategoryCards from "@/components/CategoryCards/CategoryCards";
import DetailsSidebar from "@/components/Sidebar/DetailsSidebar";
import React from "react";

export default async function page({ params }) {
  const { dynamicCategory } = params;
  const combinedPathMore = await dynamicCategory.slice(1).join("/");
  const route = `https://backoffice.ajkal.us/category-news/${combinedPathMore}`;
  let data = await fetch(route);
  let categoryData = await data.json();
  // console.log(categoryData.data);
  let CategoryList = [...categoryData?.data] || [];
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
}
