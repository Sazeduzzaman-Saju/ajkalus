import React from "react";
import BreakingNews from "./BreakingNews";
import "./Header.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Categories from "./Categories";

function Header() {
  return (
    <>
      {/* Top Bar Area */}
      <TopBar />
      {/* Breaking News Marque Area */}
      <BreakingNews />
      {/*Full Nabbar with Brand Logo*/}
      <Navbar />
      {/* Categoryies */}
      <Categories />
    </>
  );
}

export default Header;
