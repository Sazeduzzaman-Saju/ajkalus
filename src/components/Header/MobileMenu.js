import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuDropdown from "./MenuDropdown";
import axios from "axios";

const NavMenu = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [extraNav, setExtraNav] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch navigation links from the API
  useEffect(() => {
    const fetchNavLinks = async () => {
      setLoading(true); // Set loading to true when fetching starts
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
          console.error("Invalid data structure in API response:", response.data);
          setError("Invalid data structure in API response");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false); // Set loading to false when fetching completes
      }
    };

    fetchNavLinks();
  }, []);

  return (
    <ul className="navbar-nav mx-auto d-flex">
      {/* Render dynamic navigation links */}
      {loading ? (
        <li className="nav-item">Loading...</li>
      ) : error ? (
        <li className="nav-item">Error: {error}</li>
      ) : Array.isArray(navLinks) && navLinks.length > 0 ? (
        navLinks.map((link) => (
          <li key={link.id} className="nav-item menu-border menu-specing">
            <Link href={`/${link.name}/${link.id}`} passHref>
              <div className="nav-link navlinks">{link.name_bangla}</div>
            </Link>
          </li>
        ))
      ) : (
        <li className="nav-item">No navigation links available</li>
      )}

      {/* Under dropdown show The Extra Menu */}
      {extraNav.length > 0 && (
        <li className="nav-item menu-specing dropdown">
          <MenuDropdown extraNav={extraNav} />
        </li>
      )}
    </ul>
  );
};

export default NavMenu;
