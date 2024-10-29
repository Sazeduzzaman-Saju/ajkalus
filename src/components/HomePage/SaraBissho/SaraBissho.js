import SectionHeader from "@/components/SectionHeader/SectionHeader";
import React from "react";
import SaraBisshoSingleNews from "./SaraBissohoSingleNews";
import saraBissoCatNewsApi from "@/utility/categoryApi/sarabisshoCatNewsApi";

export async function generateStaticParams() {
  let saraBisshoNewsData = await saraBissoCatNewsApi();
  return saraBisshoNewsData;
}

export default async function SaraBissho() {
  let saraBisshoNewsData = await saraBissoCatNewsApi();
  return (
    <div className="px-2">
      <SectionHeader title="সারা বিশ্ব।" />
      <SaraBisshoSingleNews saraBisshoNewsData={saraBisshoNewsData} />
    </div>
  );
}
