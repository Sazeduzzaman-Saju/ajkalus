import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const NavMenu = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [extraNav, setExtraNav] = useState([]);

  // Fetch navigation links from the API
  useEffect(() => {
    const fetchNavLinks = async () => {
      try {
        const response = await axios.get(
          "https://backoffice.ajkal.us/news-category"
        );

        // Check if the response data is in the expected format
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
    <ul className="navbar-nav mx-auto d-flex">
      {/* Render dynamic navigation links */}
      {navLinks.map((link) => (
        <li key={link.id} className="nav-item menu-border menu-specing">
          <Link href={`${link.name}/${link.id}`} passHref>
            <div className="nav-link navlinks">{link.name_bangla}</div>
          </Link>
        </li>
      ))}

      {/* Optionally render extra navigation items if needed */}
      {/* Under dropdown show The Extra Menu  */}
      {extraNav.length > 0 && (
        <li className="nav-item menu-specing dropdown">
          <div
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            অন্যান্য +
          </div>
          <ul className="dropdown-menu">
            {extraNav.map((link) => (
              <li key={link.id}>
                <Link href={`${link.name}/${link.id}`} passHref>
                  <div className="dropdown-item">{link.name_bangla}</div>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
};

export default NavMenu;
