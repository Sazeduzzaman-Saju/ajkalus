import probashCatNewsApi from "@/utility/categoryApi/probashCatNewsApi";
import ProbashSingleNews from "./ProbashSingleNews";

export async function generateStaticParams() {
  let probashData = await probashCatNewsApi();
  return probashData;
}

export default async function ProbashNews() {
  let probashData = await probashCatNewsApi();
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ProbashSingleNews probashData={probashData} />
          </div>
        </div>
      </div>
    </div>
  );
}
