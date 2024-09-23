import advertisementApi from "@/utility/advertisementApi/advertisementApi";
import { calculateRemainingDays, filterValidAdvertisements } from "@/utility/advertisementUtils/HeaderTop";
import FallbackImages from "@/utility/FallBackImage/FallBackImages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  let advertisementList = await advertisementApi();
  return advertisementList;
}

export default async function CategoryAdd() {
  let advertisementList = await advertisementApi();

  // Specify the position you want to filter for
  const position = "BelowNewsCategoryFull"; // Change this for different pages or components
  const validAdvertisements = filterValidAdvertisements(
    advertisementList,
    position
  );
  const advertisementData =
    validAdvertisements.length > 0 ? validAdvertisements[0] : null;
  const remainingDays = calculateRemainingDays(advertisementData);

  return (
    <div>
      {advertisementData ? (
        <div className="mx-auto mb-2 mt-4 mb-lg-0">
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
        <div className="mt-4">
          <FallbackImages
            src={`https://ajkal.us/img/settings/ad-placeholder.jpg`} // Replace with your fallback image URL
            alt="Fallback Advertisement"
            width={867}
            className="img-fluid w-100 mx-auto text-center"
            height={80}
            title="Advertisement expired"
          />
        </div>
      )}
    </div>
  );
}
