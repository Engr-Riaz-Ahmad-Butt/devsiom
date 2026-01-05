import React from "react";
import { useTranslation } from 'react-i18next';
import logo from "../../Images/devsiomlogo.png";
import "./PortfolioCards.css";
import PortfolioCards from "./PortfolioCards";
import goldDetector from "../../Images/GoldDetector-DIxe-A45.jpg";
import crativeGarage from '../../Images/CG1-DVx8CVAg.jpeg';
import instaRep from '../../Images/instarep.co_-C9cVXoCD.png';
import fastId from '../../Images/Fastids-Cqnj8Tfn.jpg';
import pranzo from '../../Images/Pranzo-QduyY0NH.jpeg';

const Cards = ({ category }) => {
  const { t } = useTranslation();

  const renderCards = () => {
    switch (category) {
      case t('mobile_applications'):
        return (
          <>
            <PortfolioCards
              imageSrc={logo}
              title={t('gold_metal_detector_title')}
              subtitle={t('gold_metal_detector_subtitle')}
              description={t('gold_metal_detector_description')}
              buttonLink="https://play.google.com/store/apps/details?id=golddetector.detectgold.detectgold&pli=1"
              portfolioImg={goldDetector}
            />
            <div className="middle-cards-container">
              <PortfolioCards
                imageSrc={logo}
                title={t('smart_tv_remote_title')}
                subtitle={t('smart_tv_remote_subtitle')}
                description={t('smart_tv_remote_description')}
                buttonLink="https://play.google.com/store/apps/details?id=com.remotecontrol.universalremote.tvremote"
                portfolioImg={goldDetector}
              />
              <PortfolioCards
                imageSrc={logo}
                title={t('charging_animation_title')}
                subtitle={t('charging_animation_subtitle')}
                description={t('charging_animation_description')}
                buttonLink="https://play.google.com/store/apps/details?id=com.remotecontrol.universalremote.tvremote"
                portfolioImg={goldDetector}
              />
            </div>
            <PortfolioCards
              imageSrc={logo}
              title={t('personal_diary_app_title')}
              subtitle={t('personal_diary_app_subtitle')}
              description={t('personal_diary_app_description')}
              buttonLink="https://play.google.com/store/apps/details?id=com.remotecontrol.universalremote.tvremote"
              portfolioImg={goldDetector}
            />
          </>
        );
      case t('web_applications'):
        return (
          <>
            <PortfolioCards
              imageSrc={logo}
              title={t('creative_garage_title')}
              subtitle={t('creative_garage_subtitle')}
              description={t('creative_garage_description')}
              buttonLink="https://play.google.com/store/apps/details?id=golddetector.detectgold.detectgold&pli=1"
              portfolioImg={crativeGarage}
            />
            <div className="middle-cards-container">
              <PortfolioCards
                imageSrc={logo}
                title={t('instarep_title')}
                subtitle={t('instarep_subtitle')}
                description={t('instarep_description')}
                buttonLink="https://play.google.com/store/apps/details?id=com.remotecontrol.universalremote.tvremote"
                portfolioImg={instaRep}
              />
              <PortfolioCards
                imageSrc={logo}
                title={t('fast_ids_title')}
                subtitle={t('fast_ids_subtitle')}
                description={t('fast_ids_description')}
                buttonLink="https://play.google.com/store/apps/details?id=com.remotecontrol.universalremote.tvremote"
                portfolioImg={fastId}
              />
            </div>
            <PortfolioCards
              imageSrc={logo}
              title={t('pranzo_title')}
              subtitle={t('pranzo_subtitle')}
              description={t('pranzo_description')}
              buttonLink="https://play.google.com/store/apps/details?id=com.remotecontrol.universalremote.tvremote"
              portfolioImg={pranzo}
            />
          </>
        );
      case t('logo_designs'):
        return (
          <>
            <PortfolioCards
              imageSrc={logo}
              title={t('startup_logo_title')}
              subtitle={t('startup_logo_subtitle')}
              description={t('startup_logo_description')}
              buttonLink="#"
              portfolioImg={goldDetector}
            />
            <PortfolioCards
              imageSrc={logo}
              title={t('ecommerce_logo_title')}
              subtitle={t('ecommerce_logo_subtitle')}
              description={t('ecommerce_logo_description')}
              buttonLink="#"
              portfolioImg={goldDetector}
            />
            <PortfolioCards
              imageSrc={logo}
              title={t('corporate_logo_title')}
              subtitle={t('corporate_logo_subtitle')}
              description={t('corporate_logo_description')}
              buttonLink="#"
              portfolioImg={goldDetector}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="topHeading">{t(category)}</h1>
      </div>
      {renderCards()}
    </div>
  );
};

export default Cards;
