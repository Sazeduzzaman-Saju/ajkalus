import Link from "next/link";
import "./NewsDetails.css";
import { IoMdArrowDropright } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";
import NewsDetailsContent from "./NewsDetailsContent";

const NewsDetails = ({ singleNewsDetails }) => {
  console.log(singleNewsDetails);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 ps-0">
          <div
            className="d-flex justify-content-between align-items-center py-3 breadcrumb-box"
            style={{ borderBottom: "1px solid var(--main)" }}
          >
            <h5 className="text-muted">
              <span>প্রচ্ছদ</span> <IoMdArrowDropright />
              <Link href={"/"}>{singleNewsDetails?.category_name_bangla}</Link>
              <IoMdArrowDropright /> {singleNewsDetails?.news_title}
            </h5>
            {/* <BanglaDateTime dateTime={singleNewsDetails?.news_time} /> */}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-9 px-0">
          <NewsDetailsContent singleNewsDetails={singleNewsDetails} />
        </div>
        <div class="col-xl-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
