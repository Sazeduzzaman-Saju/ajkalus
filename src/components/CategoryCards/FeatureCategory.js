import Link from "next/link";
import React from "react";
import "./CategoryCards.css";
import Skeleton from "react-loading-skeleton"; // Import the Skeleton component
import { Image } from "react-bootstrap";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const FeatureCategory = ({
  nonFeaturedItemsSliced,
  latestFeaturedItem,
  loading,
}) => {
  return (
    <div className="row">
      <div className="col-xl-6">
        {/* Display Latest Featured Item */}
        {loading ? (
          <div className="card border-0 shadow-sm single-category-feature">
            <Skeleton height={310} width={300} />
            <div className="card-body feature-info">
              <Skeleton count={2} />
            </div>
          </div>
        ) : latestFeaturedItem ? (
          <div className="card border-0 shadow-sm single-category-feature">
            <Link href={`/news-detail/${latestFeaturedItem?.id}`}>
              <FallbackImages
                src={`https://ajkal.us/img/news/${latestFeaturedItem.title_img}`} // Replace with your fallback image URL
                alt={latestFeaturedItem.title_img}
                width={867}
                className="img-fluid w-100 mx-auto text-center"
                height={340}
                title="Advertisement expired"
              />
              <div className="card-body feature-info">
                <h4 className="card-title">{latestFeaturedItem?.news_title}</h4>
              </div>
            </Link>
          </div>
        ) : (
          <div>No featured news available</div>
        )}
      </div>
      <div className="col-lg-6">
        <div className="row g-2">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div className="col-sm-6" key={index}>
                <div className="card border-0 shadow-sm rounded-0 single-category">
                  <Skeleton height={150} />
                  <div className="card-body">
                    <Skeleton count={1} />
                  </div>
                </div>
              </div>
            ))
          ) : nonFeaturedItemsSliced?.length > 0 ? (
            nonFeaturedItemsSliced.map((item, index) => (
              <div className="col-sm-6" key={index}>
                <Link href={`/news-detail/${item?.id}`}>
                  <div className="card border-0 shadow-sm rounded-0 single-category">
                    <Image
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      width={300}
                      height={300}
                      className="img-fluid single-category-non-img"
                      alt={item.title_img}
                    />
                    <div className="card-body">
                      <h6 className="text-site">{item?.news_title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>No non-featured news available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;
