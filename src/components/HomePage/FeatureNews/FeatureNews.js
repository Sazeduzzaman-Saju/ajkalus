import spotlightNewsApi from "@/utility/featureDataFetch/spotLightNews";
import "./FeatureNews.css";
import FeatureSlide from "./FeatureSlide";

export async function generateStaticParams() {
  let spotListData = await spotlightNewsApi();
  return spotListData;
}

export default async function page() {
  let spotListData = await spotlightNewsApi();
  return (
    <div className="feature-top-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <FeatureSlide spotListData={spotListData} />
          </div>
        </div>
      </div>
    </div>
  );
}
