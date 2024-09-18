"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "./SectionHeader.css"; // or './sectionHeader.css' if not using CSS Modules

const SectionHeader = ({ title }) => {
  const [imgSrc, setImgSrc] = useState(
    "https://ajkal.us/img/settings/Asset-2.png"
  );

  // Fallback image URL
  const fallbackImg = "https://ajkal.us/img/settings/placeholder.jpg";

  const handleImageError = () => {
    setImgSrc(fallbackImg);
  };

  return (
    <div className="post-header-box mt-4">
      <div className="post-header-title text-white">
        <div className="">
          <Image
            className="pe-2"
            src={imgSrc}
            alt="Section Header Icon"
            title={title}
            width={50}
            height={40}
            onLoadingComplete={() => {}}
            onError={handleImageError}
          />
        </div>
        <h4 className="mb-0">{title}</h4>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

SectionHeader.defaultProps = {
  title: "Default Title",
};

export default SectionHeader;
