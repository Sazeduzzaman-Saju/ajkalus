import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import NewsSidebarOne from "./NewsSidebarOne/NewsSidebarOne";
import NewsSidebarTwo from "./NewsSidebarOne/NewsSidebarTwo";
import { Image } from "react-bootstrap";
import NewsSidebarThree from "./NewsSidebarOne/NewsSidebarThree";
import NewsSidebarFour from "./NewsSidebarOne/SakkhatkarNews";
import NewsSectionFive from "./NewsSidebarOne/NewYorkSection";

const AddWithSidebar = () => {
  return (
    <div>
      <div className="container">
        <div className="row gx-2">
          <div className="col-xl-9">
            <NewsSidebarOne />
            <NewsSidebarTwo />
          </div>
          <div className="col-xl-3">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex justify-content-center mb-4">
              <Image
                src="https://tpc.googlesyndication.com/simgad/18173373242370806951"
                alt="Add One"
                className="img-fluid"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWithSidebar;
