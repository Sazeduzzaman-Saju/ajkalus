import React from "react";
import MaximumSingleNews from "./MaximumSingleNews";
import viewdNewsApi from "@/utility/viewdNews/viewdNewsApi";

export async function generateStaticParams() {
  let viewdNewsData = await viewdNewsApi();
  return viewdNewsData;
}

export default async function MaximumNews() {
  let viewdNewsData = await viewdNewsApi();

  // Slice the data to get the first 8 items
  const slicedNewsData = viewdNewsData.slice(0, 6);

  return (
    <div className="container">
      <div className="row align-items-center">
        {slicedNewsData.map((item) => (
          <div className="col-md-12" key={item.id}>
            <MaximumSingleNews newsItem={item} /> {/* Pass each news item */}
          </div>
        ))}
      </div>
    </div>
  );
}
