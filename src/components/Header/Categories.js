import axios from "axios";
import Link from "next/link";
import MenuDropdown from "./MenuDropdown";
import categoryAllNewsApi from "@/utility/categoryApi/allCategoryNewsApi";

export async function generateStaticParams() {
  let allCategoryData = await categoryAllNewsApi();
  return allCategoryData;
}

export default async function Categories() {
  let allCategoryData = await categoryAllNewsApi();

  // Extract navLinks and extraNav from allCategoryData
  const navLinks = allCategoryData.slice(0, 10); // First 10 items
  const extraNav = allCategoryData.slice(10); // Remaining items

  return (
    <div className="container-fluid main-menu mobile-none sticky-top">
      <div className="container">
        <div className="d-flex justify-content-center">
          <ul className="navbar-nav mx-auto d-flex">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item menu-border menu-specing">
                <Link href={`/${link.name}/${link.id}`} passHref>
                  <div className="nav-link navlinks">{link.name_bangla}</div>
                </Link>
              </li>
            ))}
            <MenuDropdown extraNav={extraNav} />
          </ul>
        </div>
      </div>
    </div>
  );
}
