"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import MenuDropdown from "./MenuDropdown";

const Categories = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [extraNav, setExtraNav] = useState([]);

  // Fetch navigation links from the API
  useEffect(() => {
    const fetchNavLinks = async () => {
      try {
        const response = await axios.get(
          "https://backoffice.ajkal.us/news-category"
        );

        if (Array.isArray(response.data)) {
          const navLinksData = response.data.slice(0, 10);
          setNavLinks(navLinksData);
          setExtraNav(response.data.slice(10));
        } else if (Array.isArray(response.data.data)) {
          const navLinksData = response.data.data.slice(0, 10);
          setNavLinks(navLinksData);
          setExtraNav(response.data.data.slice(10));
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNavLinks();
  }, []);

  return (
    <div className="container-fluid main-menu mobile-none">
      <div className="container">
        <div className="d-flex justify-content-center">
          <ul className="navbar-nav mx-auto d-flex">
            {navLinks.map((link) => {
              // const parentCategory = "news"; // You can dynamically set this based on the category if needed
              // const url = link.name.toLowerCase();
              return (
                <li key={link.id} className="nav-item menu-border menu-specing">
                  <Link href={`/${link.name}/${link.id}`} passHref>
                    {/* <p>{`/${link.name}/${link.id}`}</p> */}
                    <div className="nav-link navlinks">{link.name_bangla}</div>
                  </Link>
                </li>
              );
            })}
            <MenuDropdown extraNav={extraNav} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
