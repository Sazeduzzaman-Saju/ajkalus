"use client";

import React from "react";
import { FaNotEqual } from "react-icons/fa";

const DecreaseFontSizeButton = () => {
  const decreaseFontSize = () => {
    const newsContent = document.getElementById("news-content");
    if (newsContent) {
      const currentSize = parseFloat(window.getComputedStyle(newsContent).fontSize);
      newsContent.style.fontSize = `${currentSize - 2}px`;
    }
  };

  return (
    <button onClick={decreaseFontSize} aria-label="Decrease font size">
      <FaNotEqual />
    </button>
  );
};

export default DecreaseFontSizeButton;
