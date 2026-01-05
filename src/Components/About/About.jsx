import React from "react";
import { useTranslation } from "react-i18next";
import aboutImg from "../../Images/csm-ebaweprogressbetonsuedtirol98-c9469f4675-1@2x.png";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="aboutus" className="container about-us-container">
      <div className="row align-item-center">
        <div className="col-md-6">
          <b className="about-us-header">{t('about_us')}</b>
          <b className="about-us-tagline">
            <p>{t('about_us_tagline')}</p>
          </b>
          <div className="about-us-description">
            <p>{t('about_us_description')}</p>
          </div>
        </div>
        <div className="col-md-6 position-relative">
          <div className="about-us-image-parent">
            <img className="about-us-image" alt="About Us" src={aboutImg} />
            <div className="about-us-child"></div>
            <div className="about-us-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
