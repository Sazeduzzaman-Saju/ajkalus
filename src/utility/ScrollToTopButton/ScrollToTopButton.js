"use client";
// components/ScrollToTopButton.js
import { useEffect, useState } from "react";
import "./scrollTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="scrollTop"
      style={{
        display: isVisible ? "inline" : "none",
      }}
    >
      ↑↑
    </button>
  );
};

export default ScrollToTopButton;
