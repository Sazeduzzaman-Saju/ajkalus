import Link from "next/link";
import React from "react";
import "./NesSideBarOne.css";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";

// Default to an empty array if NewWorkNewsData is undefined
const NewWorkNews = ({ NewWorkNewsData = [] }) => {
  return (
    <div className="row">
      {NewWorkNewsData.length > 0 ? (
        NewWorkNewsData.map((newsItem) => (
          <div className="news-card col-xl-3 mb-4" key={newsItem.id}>
            <Link href={`/news-detail/${newsItem?.id}`}>
              <div className="card border-0 shadow-sm news-short-brief-newwork">
                <FallbackImages
                  src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                  alt="Card Image"
                  className="rounded-3"
                  width={700}
                  height={358}
                />
                <div className="p-3">
                  <h5 className="pt-3">{newsItem.news_title}</h5>
                  {/* <div className="">
                    <SafeHtml
                      content={truncateText(newsItem.news_short_brief, 10)}
                    />
                  </div> */}
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div>No news available</div>
      )}
    </div>
  );
};

export default NewWorkNews;
