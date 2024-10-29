// components/DecreaseFontSizeButton.js
"use client";

import React from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";

const DecreaseFontSizeButton = () => {
  const decreaseFontSize = () => {
    const newsContent = document.getElementById("news-content");
    if (newsContent) {
      const currentSize = parseFloat(
        window.getComputedStyle(newsContent).fontSize
      );
      if (currentSize > 10) {
        // Prevent font size from becoming too small
        newsContent.style.fontSize = `${currentSize - 2}px`;
      }
    }
  };

  return (
    <button
      className="btn btn-sm me-2 text-site border"
      onClick={decreaseFontSize}
      title="Decrease Font Size"
      aria-label="Decrease font size"
    >
      <FaSortAmountDownAlt />
    </button>
  );
};

export default DecreaseFontSizeButton;
