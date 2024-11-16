import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const TopBanner = () => {
  return (
    <div className="banner w-100 py-2">
      <div className="container">
        <div className="row d-sm-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="col col-md-4 col-sm-12 text-center mb-md-0">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="banner-icon pe-2"
              size="1x"
            />
            Konya
          </div>
          <div className="col col-md-4 col-sm-12 text-center mb-md-0">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="banner-icon pe-2"
              size="1x"
            />
            av.elifezgi@gmail.com
          </div>
          <div className="col col-md-4 col-sm-12 text-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="banner-icon phone-icon pe-2"
              size="1x"
            />{" "}
            +90 533 414 16 85
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;