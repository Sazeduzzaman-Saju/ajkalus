import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import NewsSidebarOne from "./NewsSidebarOne/NewsSidebarOne";

const AddWithSidebar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <NewsSidebarOne />
          </div>
          <div className="col-xl-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWithSidebar;
