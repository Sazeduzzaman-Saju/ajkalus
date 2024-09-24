import React from "react";

export async function generateMetaData({ params, searchParams }, parent) {
  const url = await params?.dynamicCategory?.join("/");
  console.log(url, "for meta");
  return {title: url}
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
