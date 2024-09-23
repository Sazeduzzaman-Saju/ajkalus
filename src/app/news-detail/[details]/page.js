import NewsDetails from "@/components/NewsDetails/NewsDetails";
import React from "react";

export default async function page({ params }) {
  let { details } = params;
  // const combinedPathMore = await dynamicCategory.slice(1).join("/");
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
