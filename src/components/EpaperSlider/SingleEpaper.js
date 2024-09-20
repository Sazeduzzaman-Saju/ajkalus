import EpaperSingleSlide from "./EpaperSingleSlide";

const SingleEpaper = ({ epaperList }) => {
  return (
    <div className="feature-top-section">
      {/* Map through epaperList to generate SwiperSlides */}
      <EpaperSingleSlide epaperList={epaperList} />
    </div>
  );
};

export default SingleEpaper;
