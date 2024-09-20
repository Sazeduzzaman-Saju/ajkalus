const formatDateToBengali = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
  
    // Custom Bengali month names
    const monthNames = [
      "জানুয়ারী",
      "ফেব্রুয়ারী",
      "মার্চ",
      "এপ্রিল",
      "মে",
      "জুন",
      "জুলাই",
      "অগাস্ট",
      "সেপ্টেম্বর",
      "অক্টোবর",
      "নভেম্বর",
      "ডিসেম্বর",
    ];
  
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  };
  
  export default formatDateToBengali;
  