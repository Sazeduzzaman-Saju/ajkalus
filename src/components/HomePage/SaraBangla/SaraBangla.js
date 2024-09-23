import SectionHeader from "@/components/SectionHeader/SectionHeader";
import React from "react";
import SaraBanglaSingleNews from "./SaraBanglaSingleNews";
import saraBanglaCatNewsApi from "@/utility/categoryApi/sarabanglaCatNewsApi";

export async function generateStaticParams() {
  let sarabanglaNewsData = await saraBanglaCatNewsApi();
  return sarabanglaNewsData;
}

export default async function SaraBangla() {
  let sarabanglaNewsData = await saraBanglaCatNewsApi();
  return (
    <div className="px-2">
      <SectionHeader title="সারা বাংলা।" />
      <SaraBanglaSingleNews sarabanglaNewsData={sarabanglaNewsData} />
    </div>
  );
}
