import SectionHeader from "@/components/SectionHeader/SectionHeader";
import LatestNews from "./LatestNews";
import MaximumNews from "./MaximumNews";
import React from "react";

const MostLatestNews = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <SectionHeader title={"সর্বশেষ আজকাল"} />
            <LatestNews />
          </div>
          <div className="col-lg-4">
            <SectionHeader title={"সর্বাধিক পঠিত"} />
            <MaximumNews />
          </div>
        </div>
        {/* Additional Content */}
      </div>
    </div>
  );
};

export default MostLatestNews;
