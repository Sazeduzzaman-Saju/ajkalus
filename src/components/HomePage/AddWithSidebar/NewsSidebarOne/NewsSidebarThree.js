// NewsSidebarThree.js
import axios from "axios";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import LifeStyleNews from "./LifeStyleNews";

const NewsSidebarThree = async () => {
  let newsData = [];
  let error = null;

  try {
    const response = await axios.get(
      "https://backoffice.ajkal.us/category-news/10"
    );
    newsData = response.data.data.slice(0, 10); // Adjust the data as needed
  } catch (err) {
    error = "Failed to fetch data";
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
      <SectionHeader title="লাইফস্টাইল" />
      <LifeStyleNews newsData={newsData} />
    </div>
  );
};

export default NewsSidebarThree;
