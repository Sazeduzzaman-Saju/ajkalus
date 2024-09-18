"use client"; // Mark this as a Client Component

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const NewsCategoryPage = () => {
  const { query } = useRouter();
  const { dynamicCategory, dynamicId } = query;
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
  }, [dynamicId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Category: {dynamicCategory}</h1>
      {newsItems.length > 0 ? (
        newsItems.map((newsItem) => (
          <div key={newsItem.id}>
            <h3>
              <Link href={`/news/${newsItem.id}`}>{newsItem.news_title}</Link>
            </h3>
            <p>{newsItem.news_short_brief}</p>
            {newsItem.title_img && (
              <Image
                src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                alt={newsItem.news_title}
                width={800}
                height={400}
              />
            )}
          </div>
        ))
      ) : (
        <p>No news items found</p>
      )}
    </div>
  );
};

export default NewsCategoryPage;
