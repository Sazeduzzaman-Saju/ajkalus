import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div>
      <SectionHeader title="বিজ্ঞাপন কর্নার।" />
      <div className="row justify-content-center mx-auto">
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
        <div className="col-xl-12 px-0">
          <Image
            src="https://tpc.googlesyndication.com/simgad/17948013078181412381"
            alt="Add One"
            className="img-fluid mt-2 pt-1"
          ></Image>
          <Image
            src="https://tpc.googlesyndication.com/simgad/10140310770584896494"
            alt="Add Two"
            className="img-fluid mt-2 pt-1"
          ></Image>
          <Image
            src="https://tpc.googlesyndication.com/simgad/6267832297710722939"
            alt="Add Three"
            className="img-fluid mt-2 pt-1"
          ></Image>
          <Image
            src="https://tpc.googlesyndication.com/simgad/12053529903251625672"
            alt="Add Three"
            className="img-fluid mt-2 pt-1"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
