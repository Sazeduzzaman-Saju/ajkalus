const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("bn-BD", options);
};

export default formatDate;
