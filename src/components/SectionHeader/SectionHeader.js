import PropTypes from "prop-types";
import Image from "next/image";
import "./SectionHeader.css";

const SectionHeader = ({ title = "Default Title" }) => {
  return (
    <div className="post-header-box mt-4">
      <div className="post-header-title text-white">
        <div>
          <Image
            className="pe-2"
            src="https://ajkal.us/img/settings/Asset-2.png"
            alt="https://ajkal.us/img/settings/Asset-2.png"
            title="https://ajkal.us/img/settings/Asset-2.png"
            width={50}
            height={40}
          />
        </div>
        <h4 className="mb-0 section-header">{title}</h4>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
