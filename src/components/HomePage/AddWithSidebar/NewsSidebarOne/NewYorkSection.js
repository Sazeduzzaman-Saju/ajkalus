import React from "react";
import axios from "axios";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import NewWorkNews from "./NewWorkNews";
import "react-loading-skeleton/dist/skeleton.css";

export async function NewWorkSection() {
  let NewWorkNewsData = [];
  let error = null;

  try {
    const response = await axios.get(
      "https://backoffice.ajkal.us/category-news/3"
    );
    NewWorkNewsData = response.data.data.slice(0, 8) || []; // Limit to 8 items
  } catch (err) {
    error = "Failed to fetch data";
  }

  return (
    <div className="container">
      <SectionHeader title="নিউইয়র্ক" />
      <NewWorkNews NewWorkNewsData={NewWorkNewsData} />
    </div>
  );
}

export default NewWorkSection;
