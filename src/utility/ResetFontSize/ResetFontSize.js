"use client";

import React, { useState, useEffect } from "react";
import { FaSortAmountUpAlt, FaUndo } from "react-icons/fa";

const FontSizeControls = () => {
  const [originalFontSize, setOriginalFontSize] = useState(null);

  useEffect(() => {
    const newsContent = document.getElementById("news-content");
    if (newsContent) {
      // Store the original font size when the component first loads
      const currentSize = window.getComputedStyle(newsContent).fontSize;
      setOriginalFontSize(parseFloat(currentSize)); // Store it as a number
    }
  }, []);

  const resetFontSize = () => {
    const newsContent = document.getElementById("news-content");
    if (newsContent && originalFontSize) {
      // Reset to the original font size
      newsContent.style.fontSize = `${originalFontSize}px`;
    }
  };

  return (
    <div>
      {/* Button to reset to original font size */}
      <button
        className="btn btn-sm me-2 text-site border"
        onClick={resetFontSize}
        title="Reset Font Size"
        aria-label="Reset font size"
      >
        <FaUndo />
      </button>
    </div>
  );
};

export default FontSizeControls;
