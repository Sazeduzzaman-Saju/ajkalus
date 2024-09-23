import dhormoCatNewsApi from "@/utility/categoryApi/dhormoCatNewsApi";
import DhormoSingleNews from "./DhormoSingleNews";

export async function generateStaticParams() {
  let dhormoData = await dhormoCatNewsApi();
  return dhormoData;
}

export default async function DhormoNews() {
  let dhormoData = await dhormoCatNewsApi();
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <DhormoSingleNews dhormoData={dhormoData} />
          </div>
        </div>
      </div>
    </div>
  );
}
