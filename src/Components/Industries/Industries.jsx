import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Industries.css';
import { useTranslation } from 'react-i18next';
import ecommerceIcon from "../../Images/001ecommerce-1@2x.png";
import networkingIcon from "../../Images/004network@2x.png";
import educationIcon from "../../Images/008mortarboard@2x.png";
import realEstateIcon from "../../Images/005realestate@2x.png";
import healthcareIcon from "../../Images/002stethoscope@2x.png";
import foodIcon from "../../Images/007fork@2x.png";
import logisticsIcon from "../../Images/003delivery@2x.png";
import travelIcon from "../../Images/006travelinsurance@2x.png";

const Industries = () => {
  const { t } = useTranslation();

  const industriesData = [
    { img: ecommerceIcon, text: t('retail_ecommerce') },
    { img: networkingIcon, text: t('social_networking') },
    { img: educationIcon, text: t('education_elearning') },
    { img: realEstateIcon, text: t('real_estate') },
    { img: healthcareIcon, text: t('healthcare_fitness') },
    { img: foodIcon, text: t('food_restaurant') },
    { img: logisticsIcon, text: t('logistics_distribution') },
    { img: travelIcon, text: t('travel_hospitality') }
  ];

  return (
    <div id="industries" className="industries">
      <b className="industries-we-serve text-center d-block mb-4">{t('industries_we_serve')}</b>
      <div className="industries-container container">
        <div className="row">
          {industriesData.map((industry, index) => (
            <div key={index} className="col-md-3 mb-4 d-flex flex-column align-items-center">
              <div className="semi-circle mb-2">
                <img src={industry.img} alt={industry.text} className="industry-image" />
              </div>
              <div className="industry-text text-center">{industry.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
