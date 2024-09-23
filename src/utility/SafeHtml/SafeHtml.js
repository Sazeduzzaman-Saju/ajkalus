import React from "react";
const SafeHtml = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default SafeHtml;
