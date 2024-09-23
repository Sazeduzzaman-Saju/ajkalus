import SectionHeader from "@/components/SectionHeader/SectionHeader";
import LatestNews from "./LatestNews";
import MaximumNews from "./MaximumNews";
import React from "react";

const MostLatestNews = () => {
  return (
    <div>
      <div className="container">
        <div className="row gx-4">
          <div className="col-lg-8">
            <SectionHeader title={"সর্বশেষ আজকাল || Latest News"} />
            <LatestNews />
          </div>
          <div className="col-lg-4">
            <SectionHeader title={"সর্বাধিক পঠিত || Most Viewed"} />
            <MaximumNews />
          </div>
        </div>
        {/* Additional Content */}
      </div>
    </div>
  );
};

export default MostLatestNews;
