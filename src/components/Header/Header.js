import React, { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Image from "next/image"; // Import Image from next/image
import { FaFacebookF, FaTwitter, FaYoutube, FaUser } from "react-icons/fa";
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link"; // Import Link from next/link
import "./Header.css";
import NavMenu from "./NavMenu";
import BreakingNews from "./BreakingNews";

function Header() {
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Top Bar Area */}
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
                    <Link href="/login">
                      <span className="navlinks-top">বিজ্ঞাপন</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/epaper">
                      <span className="navlinks-top">ই-পেপার</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search">
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

      {/* Navbar Area */}
      <div className="container-fluid bg-light">
        <div className="container main-menu-2">
          <div className="top-bar-area align-items-center">
            <div className="row p-2 px-0">
              <div className="col-lg-12">
                <div className="d-flex align-items-center">
                  <div className="breaking-text">
                    <p className="marques-text-title mb-0">ব্রেকিং নিউজঃ </p>
                  </div>
                  <div className="breaking-news pe-0">
                    <div style={{ borderLeft: "3px solid white" }}>
                      <BreakingNews />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                src="https://ajkal.us/img/settings/logo_red.png"
                alt="logored"
                width={150}
                height={50}
                title="logored"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="mx-auto mb-2 mb-lg-0">
                <Image
                  src="https://ajkal.us/img/ad/17181621311071775.jpg"
                  alt="banner"
                  width={867}
                  height={80}
                  title="banner"
                />
              </div>

              <Link href="/" className="search-btn" type="submit">
                <BiSearch size={20} />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Category Menu Items (Optional) */}
      <div className="container-fluid main-menu">
        <div className="container">
          <div className="d-flex justify-content-center">
            <NavMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
