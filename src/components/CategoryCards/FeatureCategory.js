import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton"; // Import the Skeleton component

const FeatureCategory = ({ nonFeaturedItemsSliced, latestFeaturedItem, loading }) => {
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
              <Image
                src={`https://ajkal.us/img/news/${latestFeaturedItem.title_img}`}
                width={300}
                height={310}
                alt="Category Feature"
              />
              <div className="card-body feature-info">
                <h4 className="card-title">{latestFeaturedItem?.news_title}</h4>
              </div>
            </Link>
          </div>
        ) : (
          <p>No featured news available</p>
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
                      layout="responsive"
                      width={300}
                      height={300}
                      alt="Category Feature"
                    />
                    <div className="card-body">
                      <h6 className="text-site">{item?.news_title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No non-featured news available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;
