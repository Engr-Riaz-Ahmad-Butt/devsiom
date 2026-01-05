import React from 'react';
import { useTranslation } from 'react-i18next';
import './WhoWeWorkWith.css';
import handShak from '../../Images/handshake-1-1@2x (1).png';
import stats from '../../Images/stats-1@2x.png';
import enterprose from '../../Images/enterprise-1@2x (1).png';
import agencies from '../../Images/corporation-1@2x (1).png';
import arrow from '../../Images/arrow-1.svg';

const WhoWeWorkWith = () => {
  const { t } = useTranslation();

  const cards = [
    {
      imgSrc: handShak,
      caption: t('whoWeWorkWith.startUp'),
    },
    {
      imgSrc: stats,
      caption: t('whoWeWorkWith.smallBusiness'),
    },
    {
      imgSrc: enterprose,
      caption: t('whoWeWorkWith.enterprise'),
    },
    {
      imgSrc: agencies,
      caption: t('whoWeWorkWith.agencies'),
    }
  ];

  return (
    <div className="wework-container">
      <div className="text-center my-5">
        <b className="who-we-work-header">{t('whoWeWorkWith.header')}</b>
        <p className="description">
          {t('whoWeWorkWith.description')}
        </p>
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <div className="card-wrapper">
              <div className="card-border">
                <div className="image-wrapper">
                  <div className="image-overlay">
                    <img src={card.imgSrc} alt={card.caption} className="card-image" />
                  </div>
                </div>
                <div className="card-caption">{card.caption}</div>
              </div>
            </div>
            {index < cards.length - 1 && <img className="arrow-icon" alt="Arrow" src={arrow} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WhoWeWorkWith;
