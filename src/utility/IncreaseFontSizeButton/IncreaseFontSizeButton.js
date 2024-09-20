"use client";

import React from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";

const IncreaseFontSizeButton = () => {
  const increaseFontSize = () => {
    const newsContent = document.getElementById("news-content");
    if (newsContent) {
      const currentSize = parseFloat(window.getComputedStyle(newsContent).fontSize);
      newsContent.style.fontSize = `${currentSize + 2}px`;
    }
  };

  return (
    <button onClick={increaseFontSize} aria-label="Increase font size">
      <FaSortAmountUpAlt />
    </button>
  );
};

export default IncreaseFontSizeButton;
