"use client"; // Necessary for client-side interactivity

import React from "react";
import { FaCopy } from "react-icons/fa";

const CopyUrlButton = () => {
  const copyUrlToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  return (
    <button onClick={copyUrlToClipboard} aria-label="Copy URL">
      <FaCopy />
    </button>
  );
};

export default CopyUrlButton;
