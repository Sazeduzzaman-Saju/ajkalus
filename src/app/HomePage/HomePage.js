import React from "react";
import Banner from "./Banner/Banner";
import FeatureNews from "./FeatureNews/FeatureNews";

const Home = () => {
  return (
    <div className="container-fluid px-0">
      <Banner></Banner>
      <FeatureNews />
    </div>
  );
};

export default Home;
