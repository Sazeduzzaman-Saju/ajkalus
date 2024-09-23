import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";
import "./DhormoNews.css";
import SafeHtml from "@/utility/SafeHtml/SafeHtml";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

const DhormoSingleNews = ({ dhormoData }) => {
  // Filter non-feature and feature data
  const dhormoMainFeature = dhormoData.filter((news) => news.is_featured === 1);
  const dhormoFeature = dhormoData
    .filter((news) => news.is_featured === 2)
    .slice(0, 2);
  const dhormoFeatureTwo = dhormoData
    .filter((news) => news.is_featured === 2)
    .slice(2, 4);

  return (
    <div>
      <SectionHeader title="ধর্ম || Religion News" />
      <div className="row">
        {/* Non-feature news */}
        <div className="col-xl-3">
          {dhormoFeature.map((items, index) => (
            <div key={index}>
              <div class="card border-0 shadow-sm p-0 mb-2 dhormo-non-feature">
                <div class="card-body p-0">
                  <FallbackImages
                    src={`https://ajkal.us/img/news/${items.title_img}`}
                    alt="Card Image"
                    width={600}
                    height={160}
                  />
                  <div className="p-3">
                    <h6 className="text-site">{items.news_title}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature news */}
        <div className="col-xl-6">
          {dhormoMainFeature.map((items, index) => (
            <div key={index}>
              <div class="card border-0 shadow-sm p-0 dhormo-feature">
                <div class="card-body p-0">
                  <FallbackImages
                    src={`https://ajkal.us/img/news/${items.title_img}`}
                    alt="Card Image"
                    title="Card Image"
                    className="rounded-2"
                    width={900}
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="p-3">
                    <h4 className="text-site">{items.news_title}</h4>
                    <div className="news-description-box">
                      <SafeHtml content={items.news_short_brief} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional content in the third column */}
        <div className="col-xl-3">
          {dhormoFeatureTwo.map((items, index) => (
            <div key={index}>
              <div class="card border-0 shadow-sm p-0 mb-2  dhormo-non-feature">
                <div class="card-body p-0">
                  <FallbackImages
                    src={`https://ajkal.us/img/news/${items.title_img}`}
                    alt="Card Image"
                    width={600}
                    height={160}
                  />
                  <div className="p-3">
                    <h6 className="text-site">{items.news_title}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DhormoSingleNews;
