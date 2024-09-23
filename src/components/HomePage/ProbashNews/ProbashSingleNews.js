import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import React from "react";
import "./ProbashNews.css";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const ProbashSingleNews = ({ probashData }) => {

  const probashDataFeature = probashData.filter(
    (news) => news.is_featured === 1
  );
  const probashDataNonFeature = probashData.filter(
    (news) => news.is_featured === 2
  );

  return (
    <div className="mb-4">
        <SectionHeader title="প্রবাস নিউজ"/>
      <div className="row">
        <div className="col-xl-4">
          {probashDataFeature.map((item, index) => (
            <div
              className="card text-start probash-news p-0 border-0 shadow-sm"
              key={index}
            >
              <FallbackImages
                src={`https://ajkal.us/img/news/${item.title_img}`}
                alt="Card Image"
                className="rounded-3 img-fluid probash-news"
                width={700}
                height={700}
              />
              <div className="card-body p-3">
                <h5 className="card-title">{item.news_title}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="col-xl-8">
          <div class="row">
            <div class="col">
              {probashDataNonFeature.slice(0, 2).map((item, index) => (
                <div
                  className="card text-start mb-3 p-0 shadow-sm border-0 probash-nonfeature"
                  key={index}
                >
                  <div className="card-body p-3">
                    <FallbackImages
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt="Card Image"
                      className="rounded-3 img-fluid"
                      width={700}
                      height={300}
                    />
                    <h6 className="card-title pt-3">{item.news_title}</h6>
                  </div>
                </div>
              ))}
            </div>
            <div class="col">
              {probashDataNonFeature.slice(2, 4).map((item, index) => (
                <div
                  className="card text-start p-0 shadow-sm border-0 mb-3 probash-nonfeature"
                  key={index}
                >
                  <div className="card-body p-3">
                    <FallbackImages
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt="Card Image"
                      className="rounded-3 img-fluid"
                      width={700}
                      height={300}
                    />
                    <h6 className="card-title pt-3">{item.news_title}</h6>
                  </div>
                </div>
              ))}
            </div>
            <div class="col">
              {probashDataNonFeature.slice(4, 6).map((item, index) => (
                <div
                  className="card text-start p-0 shadow-sm border-0 mb-3 probash-nonfeature"
                  key={index}
                >
                  <div className="card-body p-3">
                    <FallbackImages
                      src={`https://ajkal.us/img/news/${item.title_img}`}
                      alt="Card Image"
                      className="rounded-3 img-fluid"
                      width={700}
                      height={300}
                    />
                    <h6 className="card-title pt-3">{item.news_title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbashSingleNews;
