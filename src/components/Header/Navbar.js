import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="container-fluid bg-light sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mobile-triger">
            <Link href="/" className="navbar-brand">
              <Image
                src="https://ajkal.us/img/settings/logo_red.png"
                alt="logored"
                width={150}
                height={50}
                title="Site Logo"
              />
            </Link>
            <div className="navbar-toggler border-0">
              <MobileMenu />
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mx-auto mb-2 mb-lg-0">
              <Image
                className="img-fluid"
                src="https://ajkal.us/img/ad/17181621311071775.jpg"
                alt="banner"
                width={867}
                height={80}
                title="banner"
              />
            </div>
            <Link href="/search-page" className="search-btn">
              <BiSearch size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
