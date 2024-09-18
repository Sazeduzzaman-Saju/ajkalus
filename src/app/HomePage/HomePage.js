import React from "react";
import Banner from "./Banner/Banner";
import FeatureNews from "./FeatureNews/FeatureNews";
import MostLatestNews from "./MostLatestNews/MostLatestNews";
import BinodonNews from "./BinodonNews/BinodonNews";
import AddWithSidebar from "./AddWithSidebar/AddWithSidebar";

const Home = () => {
  return (
    <div className="container-fluid px-0">
      <Banner></Banner>
      <FeatureNews />
      <MostLatestNews />
      <BinodonNews />
      <AddWithSidebar/>
    </div>
  );
};

export default Home;
