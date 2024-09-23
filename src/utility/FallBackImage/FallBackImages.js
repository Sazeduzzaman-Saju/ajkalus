// components/FallbackImage.js
"use client";
import Image from "next/image";
import React, { useState } from "react";

const FallbackImages = ({
  src,
  alt,
  width,
  height,
  title,
  className = "img-fluid",
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const fallbackSrc = "https://ajkal.us/img/settings/placeholder.jpg";

  return (
    <Image
      className={`${className} rounded-2`} // Combine with dynamic class
      src={imageSrc}
      title={title}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImageSrc(fallbackSrc)} // Handle error
      style={{ objectFit: "cover" }} // Adjust styles as needed
    />
  );
};

export default FallbackImages;
