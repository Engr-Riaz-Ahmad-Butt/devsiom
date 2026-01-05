import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import portfolioImage from "../../Images/portfoliobackground.png";
import mobileAppIcon from "../../Images/smartphone (1) 1.png";
import webAppIcon from "../../Images/photo-editing 1.png";
import logoDesignIcon from "../../Images/logo-design 1.png";
import "./PortfolioBanner.css";
import Cards from "./Cards";

const PortfolioBanner = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("Mobile Applications");

  return (
    <div className="portfolio-container">
      <div className="image-container">
        <img
          className="portfolio-image"
          alt="Portfolio Background"
          src={portfolioImage}
        />
        <div className="overlay"></div>
        <div className="text-content">
          <div className="title">{t('portfolio_title')}</div>
          <div className="description">
            {t('portfolio_description')}
          </div>
        </div>
        <div className="categories-container-parent">
          <div className="categories-container">
            <div
              className={`category ${
                selectedCategory === "Mobile Applications" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Mobile Applications")}
            >
              <img
                className="category-icon"
                alt="Mobile Applications"
                src={mobileAppIcon}
              />
              <b className="category-title">{t('mobile_applications')}</b>
            </div>
            <div
              className={`category ${
                selectedCategory === "Web Applications" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Web Applications")}
            >
              <img
                className="category-icon"
                alt="Web Applications"
                src={webAppIcon}
              />
              <b className="category-title">{t('web_applications')}</b>
            </div>
            <div
              className={`category ${
                selectedCategory === "Logo Designs" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Logo Designs")}
            >
              <img
                className="category-icon"
                alt="Logo Designs"
                src={logoDesignIcon}
              />
              <b className="category-title">{t('logo_designs')}</b>
            </div>
          </div>
        </div>
      </div>

      <Cards category={selectedCategory} />
    </div>
  );
};

export default PortfolioBanner;
