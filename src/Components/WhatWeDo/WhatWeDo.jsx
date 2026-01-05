import React from "react";
import "./WhatWeDo.css";
import { useTranslation } from "react-i18next";
import androidIcon from "../../Images/android-1@2x.png";
import iosIcon from "../../Images/icons8iphone14100-1@2x.png";
import crossPlatformIcon from "../../Images/icons8deviceinformation100-1@2x.png";
import wordpressIcon from "../../Images/wordpress-1@2x.png";
import uiuxIcon from "../../Images/uxdesign-1@2x.png";

const WhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container what-we-do-container">
        <h2 className="what-we-do-header text-center">{t('whatWeDo.header')}</h2>
        <p className="what-we-do-description text-center">
          {t('whatWeDo.description')}
        </p>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-2 service-item">
            <div className="service-card">
              <div className="what-we-do-img-border">
                <img
                  className="service-icon"
                  src={androidIcon}
                  alt={t('whatWeDo.androidDevelopment.title')}
                />
              </div>
              <b className="service-heading text-center">
                {t('whatWeDo.androidDevelopment.title')}
              </b>
              <div className="service-description text-center">
                {t('whatWeDo.androidDevelopment.description')}
              </div>
            </div>
          </div>
          <div className="col-md-2 service-item">
            <div className="service-card">
              <div className="what-we-do-img-border">
                <img
                  className="service-icon"
                  src={iosIcon}
                  alt={t('whatWeDo.iosDevelopment.title')}
                />
              </div>
              <b className="service-heading text-center">
                {t('whatWeDo.iosDevelopment.title')}
              </b>
              <div className="service-description text-center">
                {t('whatWeDo.iosDevelopment.description')}
              </div>
            </div>
          </div>
          <div className="col-md-2 service-item">
            <div className="service-card">
              <div className="what-we-do-img-border">
                <img
                  className="service-icon"
                  src={crossPlatformIcon}
                  alt={t('whatWeDo.crossPlatform.title')}
                />
              </div>
              <b className="service-heading text-center">
                {t('whatWeDo.crossPlatform.title')}
              </b>
              <div className="service-description text-center">
                {t('whatWeDo.crossPlatform.description')}
              </div>
            </div>
          </div>
          <div className="col-md-2 service-item">
            <div className="service-card">
              <div className="what-we-do-img-border">
                <img
                  className="service-icon"
                  src={wordpressIcon}
                  alt={t('whatWeDo.wordpressDevelopment.title')}
                />
              </div>
              <b className="service-heading text-center">
                {t('whatWeDo.wordpressDevelopment.title')}
              </b>
              <div className="service-description text-center">
                {t('whatWeDo.wordpressDevelopment.description')}
              </div>
            </div>
          </div>
          <div className="col-md-2 service-item">
            <div className="service-card">
              <div className="what-we-do-img-border">
                <img
                  className="service-icon"
                  src={uiuxIcon}
                  alt={t('whatWeDo.uiuxDesign.title')}
                />
              </div>
              <b className="service-heading text-center">
                {t('whatWeDo.uiuxDesign.title')}
              </b>
              <div className="service-description text-center">
                {t('whatWeDo.uiuxDesign.description')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
