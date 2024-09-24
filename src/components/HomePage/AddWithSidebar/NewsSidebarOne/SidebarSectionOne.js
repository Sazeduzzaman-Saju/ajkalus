import SectionHeader from "@/components/SectionHeader/SectionHeader";
import RajnitiNews from "./RajnitiNews";
import OnannoNews from "./OnannoNews";
import ComunityNews from "./ComunityNews";

const fetchCategoryNews = async (categoryId) => {
  const route = `https://backoffice.ajkal.us/category-news/${categoryId}`;
  try {
    const response = await fetch(route);

    // Check if the fetch was successful (HTTP status code 200)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
};

const SidebarSectionOne = async () => {
  const data12 = await fetchCategoryNews(12);
  const data17 = await fetchCategoryNews(17);
  const data13 = await fetchCategoryNews(13);

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* First column (data12) */}
          <div className="col-xl-4">
            <SectionHeader title="রাজনীতি" className="mb-0" />
            <RajnitiNews data12={data12} />
          </div>

          {/* Second column (data17) */}
          <div className="col-xl-4">
            <SectionHeader title="অন্যান্য" className="mb-0" />
            <OnannoNews data17={data17} />
          </div>

          {/* Third column (data13) */}
          <div className="col-xl-4">
            <SectionHeader title="কমিউনিটি" className="mb-0" />
            <ComunityNews data13={data13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSectionOne;
