import advertisementApi from "@/utility/advertisementApi/advertisementApi";
import {
  calculateRemainingDays,
  filterValidAdvertisements,
} from "@/utility/advertisementUtils/HeaderTop";
import CopyUrlButton from "@/utility/CopyUrlButton/CopyUrlButton";
import DecreaseFontSizeButton from "@/utility/DecreaseFontSizeButton/DecreaseFontSizeButton";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import IncreaseFontSizeButton from "@/utility/IncreaseFontSizeButton/IncreaseFontSizeButton";
import ResetFontSizeButton from "@/utility/ResetFontSize/ResetFontSize";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

// Fetching static parameters for the advertisement list
export async function generateStaticParams() {
  let advertisementList = await advertisementApi();
  return advertisementList;
}

export default async function NewsDetailsContent({ singleNewsDetails }) {
  // Fetch the advertisement data
  let advertisementList = await advertisementApi();


  // Specify the position you want to filter for
  const position = "NewsDetailsInside"; // This can be changed based on where you're displaying ads

  // Filter the valid advertisements for the specified position
  const validAdvertisements = filterValidAdvertisements(
    advertisementList,
    position
  );


  // Extract the first valid advertisement (if any)
  const advertisementData =
    validAdvertisements.length > 0 ? validAdvertisements[0] : null;


  // Calculate the remaining days for the ad expiry
  const remainingDays = advertisementData
    ? calculateRemainingDays(advertisementData)
    : null;

  return (
    <div className="py-3">
      <div id="news-content">
        <div className="pb-3">
          <h5 className="text-site-two fw-bold py-4 mb-0">
            {singleNewsDetails.category_name_bangla}
          </h5>
        </div>
        <h1 className="pb-4 text-site">{singleNewsDetails.news_title}</h1>
        <div
          className="pb-4"
          dangerouslySetInnerHTML={{
            __html: singleNewsDetails.news_short_brief,
          }}
        />
        <div>
          <Image
            src={`https://ajkal.us/img/news/${singleNewsDetails.title_img}`}
            className="img-fluid rounded"
            alt="Category Feature"
          />
        </div>
        <div className="pt-2">{singleNewsDetails?.news_title} | ফাইল ছবি</div>
        <div className="d-flex justify-content-between align-items-center py-5 deatails-share">
          <div className="news-author-box">
            <h4 className="main-color">{singleNewsDetails?.news_author}</h4>
            <div className="text-danger mb-0">
              <span>
                {new Date(
                  singleNewsDetails.news_time.slice(0, 10)
                ).toLocaleDateString("bn-BD", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div>
            <div className="social-author d-flex">
              <CopyUrlButton />
              <IncreaseFontSizeButton />
              <DecreaseFontSizeButton />
              <ResetFontSizeButton />
            </div>
          </div>
        </div>
        <div className="pb-5">
          {advertisementData ? (
            <div className="mx-auto mb-2 mb-lg-0">
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
              <p className="text-muted">
                Expires in {remainingDays} day{remainingDays > 1 ? "s" : ""}
              </p>
            </div>
          ) : (
            <div className="mx-auto mb-2 mb-lg-0">
              <Link href={"https://ajkal.us/"} target="_blank">
                <FallbackImages
                  src={`https://ajkal.us/img/settings/ad-placeholder.jpg`} // Replace with your fallback image URL
                  alt="Fallback Advertisement"
                  width={867}
                  className="img-fluid w-100 mx-auto text-center"
                  height={80}
                  title="Advertisement expired"
                />
                {/* <p className="text-muted">Ad position not available</p> */}
              </Link>
            </div>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: singleNewsDetails.news_detail }}
        />
      </div>
      <div className="pt-5 d-flex justify-content-between align-items-center pe-3">
        <h6 className="text-site-two fw-bold">শেয়ার</h6>
        <div>
          <button className="p-0 ms-2 btn btn-sm text-site border">
            <FaFacebookSquare size={30} title="নিউজ টি ফেসবুক এ শেয়ার করুন" />
          </button>
          <button className="p-0 ms-2 btn btn-sm text-site border">
            <FaTwitterSquare size={30} title="নিউজ টি টুঁইটার এ শেয়ার করুন" />
          </button>
          <button className="p-0 ms-2 btn btn-sm text-site border">
            <FaWhatsappSquare
              size={30}
              title="নিউজ টি হোয়াটসঅ্যাপ এ শেয়ার করুন"
            />
          </button>
          <span className="ms-2">
            <CopyUrlButton />
          </span>
        </div>
      </div>
      <div>
        <div className="my-3">
          <textarea
            className="form-control"
            placeholder="Enter Your Comment"
            rows="6"
          ></textarea>
          <button className="submit-btn-one mx-0">Post</button>
        </div>
      </div>
    </div>
  );
}
