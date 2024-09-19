"use client"; // Mark this as a Client Component

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS for styling

const NewsCategoryPage = () => {
  const router = useRouter(); // Correct usage of useRouter to get the current route info
  const { dynamicCategory, dynamicId } = router.query;

  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const route = `https://backoffice.ajkal.us/category-news/${dynamicId}`;

  useEffect(() => {
    if (dynamicId) {
      // Fetch data for news items in the category
      const fetchData = async () => {
        try {
          const response = await axios.get(route);
          setNewsItems(response.data.data); // Assuming response.data.data is an array of news items
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Failed to fetch data");
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [dynamicId, route]);

  if (loading) {
    return (
      <div className="container">
        <h1>Loading category...</h1>
        <div className="row">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="col-lg-3" key={index}>
              <div className="card rounded-1 border-0 shadow-sm feature-cards">
                <div className="card-body">
                  <Skeleton height={20} width={150} />
                  <Skeleton height={30} count={2} />
                </div>
                <Skeleton height={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Category: {dynamicCategory}</h1>
      {newsItems.length > 0 ? (
        <div className="row">
          {newsItems.map((newsItem) => (
            <div className="col-lg-3" key={newsItem.id}>
              <div className="card rounded-1 border-0 shadow-sm feature-cards">
                <div className="card-body">
                  <h4>
                    <Link href={`/news/${newsItem.id}`}>
                      {newsItem.news_title}
                    </Link>
                  </h4>
                  <p>{newsItem.news_short_brief}</p>
                </div>
                {newsItem.title_img && (
                  <Image
                    src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                    alt={newsItem.news_title}
                    width={600}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No news items found</p>
      )}
    </div>
  );
};

export default NewsCategoryPage;
