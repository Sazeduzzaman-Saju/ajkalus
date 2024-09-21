import "./FeatureNews.css";
import FeatureSlide from "./FeatureSlide";

export default async function FeatureNewsComponent() {
  const route = `https://backoffice.ajkal.us/spotlight-news`;

  // Fetch data with error handling
  let featureList = [];
  try {
    const response = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const featureData = await response.json();
    featureList = featureData?.data || []; // Safely extract the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <div className="feature-top-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <FeatureSlide featureList={featureList} />
          </div>
        </div>
      </div>
    </div>
  );
}
