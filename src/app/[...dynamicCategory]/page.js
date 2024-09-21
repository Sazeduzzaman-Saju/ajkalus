import CategoryCards from "@/components/CategoryCards/CategoryCards";
import DetailsSidebar from "@/components/Sidebar/DetailsSidebar";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({ params }) {
  const { dynamicCategory } = params;
  const combinedPathMore = await dynamicCategory.slice(1).join("/");
  const route = `https://backoffice.ajkal.us/category-news/${combinedPathMore}`;

  try {
    const data = await fetch(route);
    if (!data.ok) {
      notFound(); // This will show the custom 404 page
    }

    const categoryData = await data.json();
    const CategoryList = [...categoryData?.data] || [];
    if (CategoryList.length === 0) {
      notFound(); //do not use this 404 page ... use the no data found msg : todo
    }

    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-xl-9">
            <CategoryCards CategoryList={CategoryList}></CategoryCards>
          </div>
          <div className="col-xl-3">
            <DetailsSidebar />
          </div>
        </div>
      </div>
    );

  } catch (error) {
    // If there's an error during fetch, trigger the 404 page
    notFound();
  }
}




// export default async function page({ params }) {
//   const { dynamicCategory } = params;
//   const combinedPathMore = await dynamicCategory.slice(1).join("/");
//   const route = `https://backoffice.ajkal.us/category-news/${combinedPathMore}`;
//   let data = await fetch(route);
//   let categoryData = await data.json();
//   // console.log(categoryData.data);
//   let CategoryList = [...categoryData?.data] || [];
//   return (
//     <div className="container my-4">
//       <div className="row">
//         <div className="col-xl-9">
//           <CategoryCards CategoryList={CategoryList}></CategoryCards>
//         </div>
//         <div className="col-xl-3">
//           <DetailsSidebar />
//         </div>
//       </div>
//     </div>
//   );
// }
