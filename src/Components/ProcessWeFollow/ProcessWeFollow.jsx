import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProcessWeFollow.css";
import qaImg from "../../Images/stats-1@2x.png";
import deployImg from "../../Images/003delivery@2x.png";
import supportImg from "../../Images/handshake-1-1@2x.png";
import pmImg from "../../Images/frame-11@2x.png";
import uxImg from "../../Images/uxdesign-1@2x.png";
import protoImg from "../../Images/image-7@2x.png";
import devopsImg from "../../Images/icons8nodejs100-1@2x.png";

const ProcessWeFollow = () => {
  const { t } = useTranslation();

  return (
    <div className="parent-container">
      <div className="container slider-with-text-container">
        <div className="slider-container">
          <div className="cards-grid">
            <div className="slider-card">
              <img src={qaImg} alt={t('quality_assurance')} />
              <b>{t('quality_assurance')}</b>
              <p>{t('quality_assurance_description')}</p>
            </div>
            <div className="slider-card">
              <img src={deployImg} alt={t('deployment')} />
              <b>{t('deployment')}</b>
              <p>{t('deployment_description')}</p>
            </div>
            <div className="slider-card">
              <img src={supportImg} alt={t('maintenance')} />
              <b>{t('maintenance')}</b>
              <p>{t('maintenance_description')}</p>
            </div>
            <div className="slider-card">
              <img src={pmImg} alt={t('requirements')} />
              <b>{t('requirements')}</b>
              <p>{t('requirements_description')}</p>
            </div>
            <div className="slider-card">
              <img src={uxImg} alt={t('ui_ux_design')} />
              <b>{t('ui_ux_design')}</b>
              <p>{t('ui_ux_design_description')}</p>
            </div>
            <div className="slider-card">
              <img src={protoImg} alt={t('prototype')} />
              <b>{t('prototype')}</b>
              <p>{t('prototype_description')}</p>
            </div>
            <div className="slider-card">
              <img src={devopsImg} alt={t('development')} />
              <b>{t('development')}</b>
              <p>{t('development_description')}</p>
            </div>
          </div>
        </div>
        <div className="text-container">
          <div className="right-side">
            <h2>{t('process_we_follow_title')}</h2>
            <p>{t('process_we_follow_description')}</p>
            <Button variant="warning">{t('learn_more')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessWeFollow;
