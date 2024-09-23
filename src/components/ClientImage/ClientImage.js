// components/ClientImage.js
"use client"; // Mark this component as a client component

import React from "react";
import Image from "next/image";

const ClientImage = ({ src, alt, width, height, placeholder }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ objectFit: "cover" }}
    />
  );
};

export default ClientImage;
