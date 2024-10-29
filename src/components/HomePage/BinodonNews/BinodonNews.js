import SectionHeader from "@/components/SectionHeader/SectionHeader";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS for styling
import BinodonFeature from "./BinodonFeature";
import BinodonNonFeature from "./BinodonNonFeature";
import binodonCatNewsApi from "@/utility/categoryApi/binodonCatNewsApi";

export async function generateStaticParams() {
  let binodonList = await binodonCatNewsApi();

  return binodonList;
}

export default async function BinodonNews() {
  let binodonList = await binodonCatNewsApi();

  // Filter featured content
  const featured1 = binodonList
    .filter((item) => item.is_featured === 1)
    .slice(0, 1);
  const featured2 = binodonList
    .filter((item) => item.is_featured === 2)
    .slice(0, 6);
  //(featured1, featured2);
  return (
    <>
      <div className="container">
        <SectionHeader title="বিনোদন" />
        <div className="row">
          <div className="col-xl-7">
            <div className="row">
              <BinodonNonFeature featured2={featured2} />
            </div>
          </div>
          <div className="col-xl-5">
            <BinodonFeature featured1={featured1} />
          </div>
        </div>
      </div>
    </>
  );
}
