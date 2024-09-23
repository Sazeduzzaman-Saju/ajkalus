"use client";
import { useEffect, useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
import { Image } from "react-bootstrap";

const Footer = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const url = "https://backoffice.ajkal.us/news-category";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (
          response.data.status === "200" &&
          response.data.message === "success"
        ) {
          const data = response.data.data;
          const formattedData = data.map((category) => ({
            ...category,
            id: parseInt(category.id),
          }));
          setCategoriesData(formattedData);
        } else {
          console.error("API request failed with status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "var(--main)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ps-0">
              <div
                className="footer-logo-box"
                style={{ width: "18%", background: "#fff", padding: "10px" }}
              >
                <Link href="/">
                  <Image
                  className="img-fluid"
                    src="https://ajkal.us/img/settings/logo_red.png"
                    alt="logored"
                    title="logored"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 ps-0">
              <ul
                className="text-white text-center mb-0"
                style={{ listStyle: "none", paddingLeft: "0" }}
              >
                <div className="row">
                  {categoriesData.length > 0 ? (
                    categoriesData.map((category) => (
                      <div
                        key={category.id}
                        className="col-lg-3 text-center text-lg-start col-6"
                      >
                        <li className="nav-item pe-lg-4 pe-2 pt-1">
                          <Link href={`/category/${category.id}`}>
                            <div className="nav-link footer-links">
                              {category.name_bangla}
                            </div>
                          </Link>
                        </li>
                      </div>
                    ))
                  ) : (
                    <div className="text-white">No categories available</div>
                  )}
                </div>
              </ul>
              <ul
                className="text-white text-center mt-1"
                style={{ listStyle: "none", paddingLeft: "0" }}
              >
                <div className="row">
                  <div className="col-lg-3 col-6 text-center d-flex">
                    <li className="nav-item pe-lg-4 pe-2">
                      <Link href="/contact">
                        <div className="nav-link footer-links">
                          যোগাযোগ করুন
                        </div>
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-3 text-center text-lg-start col-6">
                    <li className="nav-item pe-lg-4 pe-2">
                      <Link href="/about">
                        <div className="nav-link footer-links">
                          আমাদের সম্পর্কে
                        </div>
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-3 text-center text-lg-start col-6">
                    <li className="nav-item pe-lg-4 pe-2">
                      <Link href="/terms">
                        <div className="nav-link footer-links">শর্তাবলী</div>
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-3 text-center text-lg-start col-6">
                    <li className="nav-item pe-lg-4 pe-2">
                      <Link href="/policy">
                        <div className="nav-link footer-links">
                          গোপনীয়তা নীতি
                        </div>
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="pt-3">
                <h4 className="ps-0 text-white pt-1 text-lg-start text-center">
                  ডাউনলোড করুন।
                </h4>
                <span className="border-devider"></span>
              </div>
              <div className="">
                <div className="pb-3 play-app-icons">
                  <Link href="/">
                    <Image
                      className="mb-1"
                      width={180}
                      height={60}
                      src="https://ajkal.us/img/settings/play.png"
                      alt="Play Store"
                      title="Play Store"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      className="mb-1"
                      width={180}
                      height={60}
                      src="https://ajkal.us/img/settings/applestore.png"
                      alt="Apple Store"
                      title="Apple Store"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-5">
            <div className="col-lg-10 ps-0 col-12 text-lg-start text-center">
              <div>
                <div>
                  <div className="fs-3 text-white mb-0 sompadok">
                    <span>সম্পাদক ও প্রকাশক : </span>
                    <span className="pe-3">শাহ্‌ নেওয়াজ</span> <br />
                    <span>প্রধান সম্পাদক : </span>
                    <span>মনজুর আহমেদ</span>
                  </div>
                </div>
                <div className="text-lg-start text-center">
                  <div className="text-white mb-0 pt-3">
                    ফোন: <span>+1646 267-7751</span> ফ্যাক্স:{" "}
                    <span>718-865-9130</span>
                    <span>
                      <br />
                      ঠিকানাঃ 71-16 35th Ave, Jackson Heights, NY 11372, USA.
                    </span>
                  </div>
                  <div className="text-white mb-0">
                    ইমেইল: <span>ajkalnews@gmail.com {","} </span>
                    <span>editor@ajkalusa.com</span>
                  </div>
                  <div className="text-white text-lg-start text-center mb-0 pt-0">
                    কপিরাইট © ২০২৪ সাপ্তাহিক আজকাল কর্তৃক সর্বসত্ব ® সংরক্ষিত
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="text-white text-lg-start text-center">
                অনুসরণ করুন
              </h5>
              <div className="footer-social text-lg-start text-center pt-4">
                <a
                  href="https://www.facebook.com/weeklyajkal"
                  className="ms-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-0"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ps-0">
                <div className="d-flex justify-content-between align-items-center p-2 ps-0">
                  <div className="text-start mb-0" style={{ color: "#fff" }}>
                    এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া
                    ব্যবহার বেআইনি।
                  </div>
                  <div className="text-white text-end mb-0 d-lg-block d-none">
                    Developed With Love By
                    <a
                      className="ps-2"
                      style={{ color: "orange" }}
                      href="https://galaxymediaus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Galaxy Media
                    </a>
                  </div>
                  <div className="text-white text-end mb-0 d-lg-none d-block">
                    Developed With Love By
                    <a
                      className="ps-2"
                      style={{ color: "orange" }}
                      href="https://galaxymediaus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Galaxy Media
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
