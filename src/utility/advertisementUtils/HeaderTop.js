// utils/advertisementUtils.js

export const filterValidAdvertisements = (advertisementList, position) => {
  const currentDate = new Date();

  return advertisementList.filter((ad) => {
    if (ad.ad_position !== position) return false;

    const startDate = new Date(ad.start_date);
    const duration = ad.duration; // Assuming duration is "week"

    let expirationDate = new Date(startDate);
    if (duration === "week") {
      expirationDate.setDate(startDate.getDate() + 7);
    }

    return currentDate <= expirationDate;
  });
};

export const calculateRemainingDays = (ad) => {
  if (!ad) return null;

  const currentDate = new Date();
  const expirationDate = new Date(ad.start_date);
  expirationDate.setDate(expirationDate.getDate() + 7);

  return Math.ceil((expirationDate - currentDate) / (1000 * 60 * 60 * 24));
};
