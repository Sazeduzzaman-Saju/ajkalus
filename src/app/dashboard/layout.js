import Link from "next/link";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BiLogOut, BiUpload } from "react-icons/bi";
import { FaLine, FaRegUser } from "react-icons/fa";
import "./layout.css";





export default async function Layout ({ children }) {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 px-0 shadow-sm "
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-vector/paper-style-smooth-background_52683-64676.jpg')",
              height: "auto",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="user-accounts-sidebar">
              <ul className="user-nav navbar-nav flex-column pt-3 ps-4">
                <li className="nav-item">
                  <Link href={"/user/"} className="user-dashboard-nav nav-link">
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <AiFillDashboard className="pe-2 fs-2" />
                      </span>
                      <span className="pt-1">Dashboard</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href={"/user/profile"}
                    activeclassname="active"
                    className="user-dashboard-nav nav-link"
                  >
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <FaRegUser className="pe-2 ps-1 fs-3" />
                      </span>
                      <span className="pt-1 ps-1">My Profile</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href={"/user/news-post"}
                    activeclassname="active"
                    className="user-dashboard-nav nav-link"
                  >
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <BiUpload className="pe-2 fs-2" />
                      </span>
                      <span className="pt-1">Post News</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href={"/user/advertisement"}
                    activeclassname="active"
                    className="user-dashboard-nav nav-link"
                  >
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <FaLine className="pe-2 fs-2" />
                      </span>
                      <span className="pt-1">Advertisement</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center ">
                    <span style={{ color: "var(--main)" }}>
                      <BiLogOut className="pe-2 fs-2" />
                    </span>
                    <span className="pt-1">Logout</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 px-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

// export default Layout;
