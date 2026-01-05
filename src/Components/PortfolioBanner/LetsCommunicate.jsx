import React from 'react';
import { useTranslation } from 'react-i18next';
import './LetsCommunicate.css';

const LetsCommunicate = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-section">
      <div className="background-frame">
        <div className="devsiom-title">{t('devsiom_title')}</div>
        <div className="contact-message">
          {t('contact_message')}
        </div>
        <button className="contact-button" type="button">
          {t('contact_button')}
        </button>
      </div>
    </div>
  );
}

export default LetsCommunicate;
