import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { BiSearch } from "react-icons/bi";
import advertisementApi from "@/utility/advertisementApi/advertisementApi";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import {
  calculateRemainingDays,
  filterValidAdvertisements,
} from "@/utility/advertisementUtils/HeaderTop";

export async function generateStaticParams() {
  let advertisementList = await advertisementApi();
  return advertisementList;
}

export default async function Navbar() {
  let advertisementList = await advertisementApi();

  // Specify the position you want to filter for
  const position = "HeaderTop"; // Change this for different pages or components
  const validAdvertisements = filterValidAdvertisements(
    advertisementList,
    position
  );
  const advertisementData =
    validAdvertisements.length > 0 ? validAdvertisements[0] : null;
  const remainingDays = calculateRemainingDays(advertisementData);

  return (
    <div className="container-fluid bg-light sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className="container px-0">
          <div className="d-flex justify-content-between align-items-center mobile-triger">
            <Link href="/" className="navbar-brand">
              <Image
                src="https://ajkal.us/img/settings/logo_red.png"
                alt="Logo"
                width={150}
                height={50}
                title="Site Logo"
              />
            </Link>
            <div className="navbar-toggler border-0">
              <MobileMenu />
            </div>
          </div>
          <div
            className="collapse navbar-collapse d-flex justify-content-between align-items-center mobile-none"
            id="navbarSupportedContent"
          >
            {advertisementData ? (
              <div className="mx-auto mb-2 mb-lg-0">
                <Link href={advertisementData.ad_link} target="_blank">
                  <Image
                    className="img-fluid"
                    src={`https://ajkal.us/img/ad/${advertisementData.ad_banner}`}
                    alt={advertisementData.ad_link}
                    title={advertisementData.ad_link}
                    width={867}
                    height={80}
                  />
                </Link>
                <p className="text-muted">
                  Expires in {remainingDays} day{remainingDays > 1 ? "s" : ""}
                </p>
              </div>
            ) : (
              <>
                <FallbackImages
                  src={`https://ajkal.us/img/settings/ad-placeholder.jpg`} // Replace with your fallback image URL
                  alt="Fallback Advertisement"
                  width={867}
                  className="img-fluid w-100 mx-auto text-center"
                  height={80}
                  title="Advertisement expired"
                />
              </>
            )}
            <div className="ms-1">
              <Link href="/search-page" className="search-btn rounded-2 mt-1">
                <BiSearch size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
