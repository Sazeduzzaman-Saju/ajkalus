// utils/stripHtmlTags.js

const stripHtmlTags = (htmlString) => {
  if (typeof window === 'undefined') {
    // Return the original string if in a server-side context
    return htmlString;
  }

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  // Use textContent to extract text, ensuring we only get plain text
  return tempDiv.textContent || tempDiv.innerText || "";
};

export default stripHtmlTags;
