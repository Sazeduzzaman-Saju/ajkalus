"use client"; // Mark this as a Client Component

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const DynamicPage = () => {
  const { dynamicCategory, dynamicId } = useParams();
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Construct the API endpoint based on the dynamic ID
  const route = `https://backoffice.ajkal.us/category-news/${dynamicId}`;

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(route);
        // Assuming response.data is an object with a 'data' array
        const fetchedData = response.data.data; // Get the entire array of news items
        setNewsItems(fetchedData); // Set all news items
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [dynamicId, route]); // Re-run the effect if dynamicId or route changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
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
            <div dangerouslySetInnerHTML={{ __html: newsItem.news_detail }} />
          </div>
        ))
      ) : (
        <p>No news items found</p>
      )}
      <div className="row">
        <div className="col-lg-8">
          {/* Render additional content or components here */}
        </div>
        <div className="col-lg-4">Sidebar content</div>
      </div>
    </div>
  );
};

export default DynamicPage;