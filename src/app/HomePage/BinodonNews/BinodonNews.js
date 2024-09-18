import React from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";

// Utility function to limit the number of words in a string
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + ""
    : text;
};

const BinodonNews = async () => {
  // Server-side data fetching
  const response = await fetch("https://backoffice.ajkal.us/category-news/7");
  const result = await response.json();

  // Access the `data` array from the result
  const data = result.data || [];

  // Filter data based on 'is_featured' value
  const featured1 = Array.isArray(data)
    ? data.filter((item) => item.is_featured === 1)
    : [];
  const featured2 = Array.isArray(data)
    ? data.filter((item) => item.is_featured === 2).slice(0, 6) // Limit to 6 items
    : [];
  return (
    <div className="container">
      <SectionHeader title="বিনোদন" />
      <div className="row">
        <div className="col-xl-5">
          {featured1.length > 0 ? (
            featured1.map((item) => (
              <div key={item.id} className="featured-item">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-0">
                    <div className="">
                      <Image
                        className="img-fluid w-100"
                        src={`https://ajkal.us/img/news/${item.title_img}`}
                        alt={item.news_title}
                        layout="responsive"
                        width={700} // Set a base width, it will scale with the container
                        height={600} // Set a base height, it will scale with the container
                        placeholder="blur"
                        blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                      />
                    </div>
                    <div className="p-3 pt-4 feature-binodon">
                      <h5
                        dangerouslySetInnerHTML={{
                          __html: item.news_title,
                        }}
                      ></h5>
                      <p
                        className="pt-3`"
                        dangerouslySetInnerHTML={{
                          __html: item.news_short_brief,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No featured items for this category.</p>
          )}
        </div>
        <div className="col-xl-7">
          <div className="row">
            {featured2.length > 0 ? (
              featured2.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                      <div className="featured-item">
                        <Image
                          className="img-fluid"
                          src={`https://ajkal.us/img/news/${item.title_img}`}
                          alt={item.news_title}
                          layout="responsive"
                          width={600} // Set a base width, it will scale with the container
                          height={400} // Set a base height, it will scale with the container
                          placeholder="blur"
                          blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                        />
                        <div className="p-3">
                          <h6
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: truncateText(item.news_title, 4),
                            }}
                          ></h6>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: truncateText(item.news_short_brief, 6),
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No featured items for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinodonNews;
