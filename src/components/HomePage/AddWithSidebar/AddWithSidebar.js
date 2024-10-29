import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import NewsSidebarOne from "./NewsSidebarOne/NewsSidebarOne";
import NewsSidebarTwo from "./NewsSidebarOne/NewsSidebarTwo";
import { Image } from "react-bootstrap";
import SaraBangla from "../SaraBangla/SaraBangla";
import SaraBissho from "../SaraBissho/SaraBissho";

const AddWithSidebar = () => {
  return (
    <div>
      <div className="container">
        <div className="row gx-2">
          <div className="col-xl-9">
            <NewsSidebarOne />
            <NewsSidebarTwo />
            <SaraBangla />
            <SaraBissho/>
          </div>
          <div className="col-xl-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWithSidebar;
