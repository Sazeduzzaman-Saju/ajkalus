"use client";

import React from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";

const IncreaseFontSizeButton = () => {
  const increaseFontSize = () => {
    const newsContent = document.getElementById("news-content");
    if (newsContent) {
      const currentSize = parseFloat(
        window.getComputedStyle(newsContent).fontSize
      );
      if (currentSize < 40) {
        // Optional: Set a max font size limit
        newsContent.style.fontSize = `${currentSize + 2}px`;
      }
    } else {
      console.warn("Element with ID 'news-content' not found.");
    }
  };

  return (
    <button
      className="btn btn-sm me-2 text-site border"
      onClick={increaseFontSize}
      title="Increase Font Size"
      aria-label="Increase font size"
    >
      <FaSortAmountUpAlt />
    </button>
  );
};

export default IncreaseFontSizeButton;
