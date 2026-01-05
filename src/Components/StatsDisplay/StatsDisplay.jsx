import React from 'react';
import './StatsDisplay.css';
import { useTranslation } from 'react-i18next';

const StatsDisplay = () => {
  const { t } = useTranslation();

  return (
    <div className="stats-display">
      <div className="overlay"></div>
      <div className="content">
        <div className="stat-item">
          <div className="stat-number">1500</div>
          <div className="stat-description">{t('stats.apps_developed')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1000</div>
          <div className="stat-description">{t('stats.websites_designed')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2700</div>
          <div className="stat-description">{t('stats.happy_clients')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">300</div>
          <div className="stat-description">{t('stats.ai_iot_solutions')}</div>
        </div>
      </div>
      <div className="vertical-line line-1"></div>
      <div className="vertical-line line-2"></div>
      <div className="vertical-line line-3"></div>
      <div className="vertical-line line-4"></div>
    </div>
  );
};

export default StatsDisplay;
