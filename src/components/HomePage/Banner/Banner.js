import React from "react";
import Banner from "./BannerSlide";
import breackingNewsApi from "@/utility/bannerUtilityFunction/breackingNewsApi";

export async function generateStaticParams() {

  let bannerList = await breackingNewsApi()

  return bannerList
}


export default async function page() {
  
  let bannerList = await breackingNewsApi()

  return (
    <div>
      <Banner bannerList={bannerList}></Banner>
    </div>
  );
}
