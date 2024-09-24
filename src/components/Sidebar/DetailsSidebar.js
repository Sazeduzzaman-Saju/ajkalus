import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Link from "next/link";
import advertisementApi from "@/utility/advertisementApi/advertisementApi";
import "./sidebar.css";
import { Image } from "react-bootstrap";
import {
  calculateRemainingDaysSidebar,
  filterValidAdvertisementsSidebar,
} from "@/utility/advertisementUtils/sidebarAdvertisementUtils";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import FacebookEmbedCode from "./FacebookEmbedCode";

export async function generateStaticParams() {
  let sidebarAdvertisementData = await advertisementApi();
  return sidebarAdvertisementData;
}

export default async function DetailsSidebar() {
  let sidebarAdvertisementData = await advertisementApi();

  // Specify the positions you want to filter for
  const positions = [
    "SideBar1",
    "Sidebar2",
    "Sidebar3",
    "Sidebar4",
    "Sidebar5",
    "Sidebar6",
  ];
  const validAdvertisements = [];

  // Collect valid advertisements for each position
  for (const position of positions) {
    const adsForPosition = filterValidAdvertisementsSidebar(
      sidebarAdvertisementData,
      position
    );
    validAdvertisements.push(...adsForPosition);
  }


  return (
    <div>
      <SectionHeader title="বিজ্ঞাপন কর্নার।" />
      <div className="row justify-content-center mx-auto mb-3">
        <div className="col-xl-12 px-0">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/_U_TCak8ovo?si=5tMu37JIQeVDmfIK" // Wrap the URL in quotes
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-xl-12 ps-0">
          <div className="my-4">
            <FacebookEmbedCode />
          </div>
        </div>
        <div className="col-xl-12 px-0">
          <div className="">
            <div className="card border-0">
              <div
                className="rounded-2"
                style={{ backgroundColor: "rgb(220, 35, 41)" }}
              >
                <div className="py-2 mb-0 text-center text-white">
                  গুরুত্বপূর্ণ
                </div>
              </div>
              <div className="card-body p-3 sidebar_bigapon_area">
                <div className="p-3 px-3">
                  <div className="mx-4 mb-2">
                    <Link href="/ad-rate-print">
                      <div className="d-flex align-items-center">
                        <div className="sidebar_menu_icons py-3 px-3 text-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 640 512"
                            height={25}
                            width={25}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z" />
                          </svg>
                        </div>
                        <div className="sidebar_menu_links p-2">
                          <span className="ps-3">প্রিন্ট সংস্করণ</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mx-4 mb-2">
                    <Link href="/epaper">
                      <div className="d-flex align-items-center">
                        <div className="sidebar_menu_icons py-3 px-3 text-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height={25}
                            width={25}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06A8.481 8.481 0 0 1 20.5 12c0 2.34-.95 4.47-2.49 6.01l1.06 1.06A9.969 9.969 0 0 0 22 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06A8.481 8.481 0 0 1 3.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06A6.976 6.976 0 0 0 19 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05A6.976 6.976 0 0 0 5 12c0 1.93.78 3.68 2.05 4.95z" />
                          </svg>
                        </div>
                        <div className="sidebar_menu_links p-2">
                          <span className="ps-3">অনলাইন সংস্করণ</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mx-4 mb-2">
                    <Link href="/contact">
                      <div className="d-flex align-items-center">
                        <div className="sidebar_menu_icons py-3 px-3 text-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height={25}
                            width={25}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99A7.474 7.474 0 0 0 16.28 10c-.18.64-.28 1.31-.28 2s.1 1.36.28 2a7.512 7.512 0 0 0 2.73 3.99zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z" />
                          </svg>
                        </div>
                        <div className="sidebar_menu_links p-2">
                          <span className="ps-3">যোগাযোগের ঠিকানা</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 px-0 mt-4">
          <div className="card" style={{ height: "550", overflow: "hidden" }}>
            <h3 className="text-center pt-3">
              আজকাল <span className="epaper_text">ই</span> পেপার
            </h3>
            <Link href={"/epaper"}>
              <Image
                className="img-fluid"
                src="https://ajkal.us/img/epaper/17139742637427437.jpg"
                alt="E-paper Link"
                title="Prayer Time Shedule"
              />
            </Link>
          </div>
        </div>
        <div className="col-xl-12 px-0">
          {/* Sidebar advertisement start */}
          <div className="mt-4">
            {validAdvertisements.length > 0 ? (
              validAdvertisements.map((advertisementData) => {
                const remainingDays =
                  calculateRemainingDaysSidebar(advertisementData);
                return (
                  <div className="mx-auto mb-4" key={advertisementData.id}>
                    <Link href={advertisementData.ad_link} target="_blank">
                      <Image
                        className="img-fluid"
                        src={`https://ajkal.us/img/ad/${advertisementData.ad_banner}`}
                        alt={advertisementData.ad_link}
                        title={advertisementData.ad_link}
                        width={867}
                        height={80}
                      />
                    </Link>
                    {/* Uncomment if you want to show remaining days */}
                    {/* <p className="text-muted">
                      Expires in {remainingDays} day
                      {remainingDays > 1 ? "s" : ""}
                      {advertisementData.ad_position}
                    </p> */}
                  </div>
                );
              })
            ) : (
              <FallbackImages
                src={`https://ajkal.us/img/settings/ad-placeholder.jpg`} // Replace with your fallback image URL
                alt="Fallback Advertisement"
                width={867}
                className="img-fluid w-100 mx-auto text-center"
                height={80}
                title="Advertisement expired"
              />
            )}
          </div>
          {/* Sidebar advertisement end */}
        </div>
      </div>
    </div>
  );
}
