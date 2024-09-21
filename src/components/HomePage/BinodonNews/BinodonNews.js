import SectionHeader from "@/components/SectionHeader/SectionHeader";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS for styling
import BinodonFeature from "./BinodonFeature";
import BinodonNonFeature from "./BinodonNonFeature";

export default async function BinodonNews() {
  const route = `https://backoffice.ajkal.us/category-news/7`;

  // Fetch data with error handling
  let binodonList = [];
  try {
    const response = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const binodonData = await response.json();
    binodonList = binodonData?.data || []; // Safely extract the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Filter featured content
  const featured1 = binodonList.filter((item) => item.is_featured === 1);
  const featured2 = binodonList
    .filter((item) => item.is_featured === 2)
    .slice(0, 6);
  console.log(featured1, featured2);
  return (
    <>
      <div className="container">
        <SectionHeader title="বিনোদন" />
        <div className="row">
          <div className="col-xl-5">
            <BinodonFeature featured1={featured1} />
          </div>
          <div className="col-xl-7">
            <div className="row">
              <BinodonNonFeature featured2={featured2} />
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container">
    //   <SectionHeader title="বিনোদন" />
    //   <div className="row">
    //     <div className="col-xl-5">
    //       <BinodonFeature featured1={featured1} />
    //     </div>
    //     <div className="col-xl-7">
    //       <div className="row">
    //         <BinodonNonFeature featured2={featured2} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
