import React from "react";
import nodejsIcon from "../../Images/nodejs-1@2x.png";
import webIcon from "../../Images/web-1@2x.png";
import reactIcon from "../../Images/icons8react80-1@2x.png";
import imageIcon from "../../Images/image-4@2x.png";
import javaIcon from "../../Images/java-1@2x.png";
import mysqlIcon from "../../Images/mysql-1@2x.png";
import phpIcon from "../../Images/php-1@2x.png";
import nodejsAltIcon from "../../Images/icons8nodejs100-1@2x.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechAndBusiness.css";
import { useTranslation } from "react-i18next";

const TechAndBusiness = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container text-center techAndBusinessContainer">
        <h2 className="mb-3 heading-text">{t('tech_and_business.heading')}</h2>
        <p className="mb-4 paragraph">
          {t('tech_and_business.paragraph')}
        </p>
      </div>
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-6 col-md-3 d-flex flex-end-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(104, 160, 99)" }}
            >
              <img src={nodejsIcon} alt="Node.js" className="icon-img" />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-end-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(87, 200, 144)" }}
            >
              <img src={webIcon} alt="Web" className="icon-img" />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-end-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(212, 164, 93)" }}
            >
              <img src={reactIcon} alt="React" className="icon-img" />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-end-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(229, 53, 171)" }}
            >
              <img src={imageIcon} alt="Image" className="icon-img" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3 d-flex flex-start-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(97, 219, 251)" }}
            >
              <img src={javaIcon} alt="Java" className="icon-img" />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-start-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(242, 145, 17)" }}
            >
              <img src={mysqlIcon} alt="MySQL" className="icon-img" />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-start-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(68, 187, 51)" }}
            >
              <img src={phpIcon} alt="PHP" className="icon-img" />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-start-class">
            <div
              className="icon-ball"
              style={{ backgroundColor: "rgb(241, 104, 16)" }}
            >
              <img src={nodejsAltIcon} alt="Node.js Alt" className="icon-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechAndBusiness;
