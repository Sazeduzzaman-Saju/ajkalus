import React from "react";
import axios from "axios";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import NewWorkNews from "./NewWorkNews";
import "react-loading-skeleton/dist/skeleton.css";

export async function NewsSectionFive() {
  let NewWorkNewsData = [];
  let error = null;

  try {
    const response = await axios.get(
      "https://backoffice.ajkal.us/category-news/3"
    );
    NewWorkNewsData = response.data.data || []; // Default to empty array if no data
  } catch (err) {
    error = "Failed to fetch data";
  }
//(NewWorkNewsData)
  return (
    <div className="container">
      <SectionHeader title="নিউইয়র্ক" />
      <NewWorkNews NewWorkNewsData={NewWorkNewsData} />
    </div>
  );
}

export default NewsSectionFive;
