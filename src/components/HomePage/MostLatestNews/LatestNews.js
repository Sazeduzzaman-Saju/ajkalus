import React from "react";
import LatestSingleNews from "./LatestSingleNews";
import latestNewsApi from "@/utility/latestNewsApi/latestNewsApi";

export async function generateStaticParams() {
  let latestList = await latestNewsApi();

  return latestList;
}

export default async function LatestNews() {
  let latestList = await latestNewsApi();

  return (
    <div className="container px-0">
      <div className="row gx-3">
        {latestList.map((item) => (
          <div className="col-lg-4 mb-3" key={item.id}>
            <LatestSingleNews newsItem={item} /> {/* Pass each news item */}
          </div>
        ))}
      </div>
    </div>
  );
}
