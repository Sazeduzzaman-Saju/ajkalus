"use client";

import React from "react";
import { FaPrint } from "react-icons/fa";

const PrintPageButton = () => {
  const printPage = () => {
    window.print();
  };

  return (
    <button onClick={printPage} aria-label="Print page">
      <FaPrint />
    </button>
  );
};

export default PrintPageButton;
