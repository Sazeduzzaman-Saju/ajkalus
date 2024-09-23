export const filterSidebarAdvertisements = (advertisementList, positions) => {
  const currentDate = new Date();

  return positions.map((position) => {
    const filteredAds = advertisementList.filter((ad) => {
      if (ad.ad_position !== position) return false;

      const startDate = new Date(ad.start_date);
      let expirationDate = new Date(startDate);

      if (ad.duration === "week") {
        expirationDate.setDate(startDate.getDate() + 7);
      } else if (ad.duration === "month") {
        expirationDate.setMonth(startDate.getMonth() + 1);
      }

      return currentDate <= expirationDate; // Only include if not expired
    });

    // If no valid ads, return a placeholder for that position
    return filteredAds.length > 0
      ? filteredAds
      : [
          {
            id: position,
            ad_banner: "https://ajkal.us/img/ad/",
            ad_position: position,
          },
        ];
  });
};
