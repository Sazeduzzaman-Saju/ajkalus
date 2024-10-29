import React from "react";
import { Image } from "react-bootstrap";

const EpaperFeature = () => {
  return (
    <div>
      <div className="row justify-content-center mx-auto">
        <div className="col-xl-12 px-0">
          <Image
            src="https://ajkal.us/img/settings/placeholder.jpg"
            alt="Add One"
            className="img-fluid mb-2 pt-1 border"
          ></Image>
          <Image
            src="https://ajkal.us/img/settings/placeholder.jpg"
            alt="Add Two"
            className="img-fluid mb-2 pt-1 border"
          ></Image>
          <Image
            src="https://ajkal.us/img/settings/placeholder.jpg"
            alt="Add Three"
            className="img-fluid mb-2 pt-1 border"
          ></Image>
          <Image
            src="https://ajkal.us/img/settings/placeholder.jpg"
            alt="Add Three"
            className="img-fluid mb-2 pt-1 border"
          ></Image>
        </div>
        <div className="col-xl-12 px-0">
          <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/_U_TCak8ovo?si=5tMu37JIQeVDmfIK`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EpaperFeature;
