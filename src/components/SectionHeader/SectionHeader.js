"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import "./SectionHeader.css";

const SectionHeader = ({ title = "Default Title" }) => {
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
        <div>
          <Image
            className="pe-2"
            src={imgSrc}
            alt="Section Header Icon"
            title={title}
            width={50}
            height={40}
          />
        </div>
        <h4 className="mb-0 section-header">{title}</h4>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
