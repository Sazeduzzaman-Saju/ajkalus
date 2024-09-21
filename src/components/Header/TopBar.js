import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaUser } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="container-fluid main-menu">
      <div className="container">
        <div className="row top-bar-area align-items-center">
          <div className="col-lg-4">
            <p className="mb-0">
              সেপ্টেম্বর ১৭, ২০২৪, মঙ্গলবার, ২ আশ্বিন, ১৪৩১ বঙ্গাব্দ
            </p>
          </div>
          <div className="col-lg-4">
            <div className="top-bar d-flex justify-content-center">
              <ul className="mb-0">
                <li>
                  <Link href="/dashboard/advertisement">
                    <span className="navlinks-top">বিজ্ঞাপন</span>
                  </Link>
                </li>
                <li>
                  <Link href="/epaper">
                    <span className="navlinks-top">ই-পেপার</span>
                  </Link>
                </li>
                <li>
                  <Link href="/search-page">
                    <span className="navlinks-top">আর্কাইভ</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ad-cost">
                    <span className="navlinks-top">বিজ্ঞাপনের মূল্য</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="top-bar p-2 d-flex justify-content-end align-items-center pt-1">
              <div className="social">
                <Link href="#">
                  <FaFacebookF />
                </Link>
                <Link href="#">
                  <FaYoutube />
                </Link>
                <Link href="#">
                  <FaTwitter />
                </Link>
                <Link href="/login">
                  <FaUser />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
