import formatDateToBengali from "@/utility/AdorshoLipi/Time/formatDateToBengali";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import Link from "next/link";
import React from "react";
import "./CategoryCards.css";

const NonFeaturesCategory = ({ nonFeaturedItemsSlicednews }) => {
  return (
    <>
      <div className="">
        {nonFeaturedItemsSlicednews?.length > 0 ? (
          nonFeaturedItemsSlicednews.map((item, index) => (
            <div className="col-sm-12" key={index}>
              <Link href={`/news-detail/${item?.id}`}>
                <div className="card border-0 rounded-0 single-category-non">
                  <div className="row justify-content-center align-items-center g-2">
                    <div className="col-md-7">
                      <div className="card-body">
                        <h3 className="text-site">{item?.news_title}</h3>
                        <div className="text-gray pt-2">
                          {item?.news_short_brief}
                        </div>
                        <div className="d-flex align-items-center pt-3">
                          <div className="text-site-two fw-bold">
                            {item?.category_name_bangla}
                          </div>
                          <div className="text-site ps-3">
                            {formatDateToBengali(item?.news_time)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <FallbackImages
                        src={`https://ajkal.us/img/news/${item.title_img}`}
                        width={300}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </Link>
            </div>
          ))
        ) : (
          <div>No non-featured news available</div>
        )}
      </div>
    </>
  );
};

export default NonFeaturesCategory;
