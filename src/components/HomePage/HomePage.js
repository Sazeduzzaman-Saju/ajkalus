import React from "react";
import Banner from "./Banner/Banner";
import FeatureNews from "./FeatureNews/FeatureNews";
import MostLatestNews from "./MostLatestNews/MostLatestNews";
import BinodonNews from "./BinodonNews/BinodonNews";
import AddWithSidebar from "./AddWithSidebar/AddWithSidebar";
import DhormoNews from "./DhormoNews/DhormoNews";
import NewsSidebarThree from "./AddWithSidebar/NewsSidebarOne/NewsSidebarThree";
import NewWorkSection from "./AddWithSidebar/NewsSidebarOne/NewYorkSection";
import ProbashNews from "./ProbashNews/ProbashNews";
import SakkhatkarNews from "./AddWithSidebar/NewsSidebarOne/SakkhatkarNews";

const Home = () => {
  return (
    <div className="container-fluid px-0">
      <Banner></Banner>
      <FeatureNews />
      <MostLatestNews />
      <NewWorkSection />
      <AddWithSidebar />
      <BinodonNews />
      <DhormoNews />
      <NewsSidebarThree />
      <ProbashNews />
      <SakkhatkarNews/>
    </div>
  );
};

export default Home;
