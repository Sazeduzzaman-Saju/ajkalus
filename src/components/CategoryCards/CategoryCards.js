import Image from "next/image";
import React from "react";
import "./CategoryCards.css";
import NonFeaturesCategory from "./NonFeaturesCategory";
import FeatureCategory from "./FeatureCategory";

const CategoryCards = ({ CategoryList }) => {
  // Filter the items based on `is_featured`
  const featuredItems =
    CategoryList?.filter((item) => item.is_featured === 1) || [];
  const nonFeaturedItems =
    CategoryList?.filter((item) => item.is_featured === 2) || [];

  const nonFeaturedItemsNews =
    CategoryList?.filter((item) => item.is_featured === 2) || [];

  const nonFeaturedItemsSlicednews = nonFeaturedItemsNews.slice(0, 15);

  const nonFeaturedItemsSliced = nonFeaturedItems.slice(0, 4);

  // Get the latest featured item
  const latestFeaturedItem = featuredItems.length > 0 ? featuredItems[0] : null;

  return (
    <div>
      <div className="container">
        <FeatureCategory
          nonFeaturedItemsSliced={nonFeaturedItemsSliced}
          latestFeaturedItem={latestFeaturedItem}
        />
        <div className="row">
          <div className="col-xl-12">
            <div className="my-3">
              <Image
                src="https://ajkal.us/img/ad/17157531697629499.webp"
                width={300}
                height={300}
                className="img-fluid"
                alt="Category Feature"
              />
            </div>
            <hr />
            <div>
              <h4 className="text-site-two">এই ক্যাটেগরি এর সকল নিউজ</h4>
            </div>
            <hr />
          </div>
        </div>
      </div>

      {/* Section for Non-Featured News */}
      <div className="card-body row">
        <NonFeaturesCategory
          nonFeaturedItemsSlicednews={nonFeaturedItemsSlicednews}
        />
      </div>
      <hr />
    </div>
  );
};

export default CategoryCards;
