// utils/advertisementUtils.js

export const filterValidAdvertisements = (advertisementList, position) => {
  const currentDate = new Date();

  return advertisementList.filter((ad) => {
    if (ad.ad_position.trim() !== position.trim()) return false;

    const startDate = new Date(ad.start_date);
    const duration = ad.duration; // Duration is in weeks

    // Calculate the expiration date by adding the number of weeks (duration) to the start date
    let expirationDate = new Date(startDate);
    expirationDate.setDate(startDate.getDate() + duration * 7);

    return currentDate <= expirationDate;
  });
};

export const calculateRemainingDays = (ad) => {
  if (!ad) return null;

  const currentDate = new Date();
  const startDate = new Date(ad.start_date);

  // Add the duration (weeks) to the start date
  let expirationDate = new Date(startDate);
  expirationDate.setDate(startDate.getDate() + ad.duration * 7);

  // Calculate remaining days until expiration
  const remainingDays = Math.ceil(
    (expirationDate - currentDate) / (1000 * 60 * 60 * 24)
  );

  return remainingDays;
};
