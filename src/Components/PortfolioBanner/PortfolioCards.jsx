import React from "react";
import { useTranslation } from "react-i18next";
import "./PortfolioCards.css";

const PortfolioCards = ({
  imageSrc,
  title,
  subtitle,
  description,
  buttonLink,
  portfolioImg
}) => {
  const { t } = useTranslation();

  return (
    <div className="custom-card-container">
      <div className="custom-card-content">
        <img src={imageSrc} alt={title} className="custom-card-image" />
        <p className="custom-card-title">{title}</p>
        <div className="custom-card-subtitle">{subtitle}</div>
        <div className="custom-card-description">{description}</div>
        <a href={buttonLink}>
          <button className="btn viewCaseBtn">{t('view_case_study')}</button>
        </a>
      </div>
      <div className="custom-card-mockup">
        <div className="custom-mockup-background">
          <img src={portfolioImg} alt={title} className="custom-mockup-image" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;
