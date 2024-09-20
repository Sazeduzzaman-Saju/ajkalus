import formatDateToBengali from "@/utility/AdorshoLipi/Time/formatDateToBengali";
import stripHtmlTags from "@/utility/SanitizeParagraph/TextSanitize";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                        <p className="text-gray pt-2">
                          {stripHtmlTags(item?.news_short_brief)}
                        </p>
                        <div className="d-flex align-items-center pt-3">
                          <p className="text-site-two fw-bold">
                            {item?.category_name_bangla}
                          </p>
                          <p className="text-site ps-3">
                            {formatDateToBengali(item?.news_time)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <Image
                        className="img-fluid"
                        src={`https://ajkal.us/img/news/${item.title_img}`}
                        layout="responsive"
                        width={300}
                        height={300}
                        alt="Category Feature"
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </Link>
            </div>
          ))
        ) : (
          <p>No non-featured news available</p>
        )}
      </div>
    </>
  );
};

export default NonFeaturesCategory;
