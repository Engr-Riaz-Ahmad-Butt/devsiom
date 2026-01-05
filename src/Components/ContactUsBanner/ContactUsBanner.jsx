import React from 'react';
import { useTranslation } from "react-i18next";
import './ContactUsBanner.css';
import headphone from '../../Images/image 24 (1).png';
import email from '../../Images/image 17.png';
import location from '../../Images/image 18.png';
import phone from '../../Images/image 16.png';
import next from '../../Images/next 2.png'; 

const ContactUsBanner = () => {
    const { t } = useTranslation();

    return (
        <div className="banner">
            <div className="content"></div>
            <div className="main-heading">
                <h1>{t('contact_us')}</h1>
                <img src={headphone} alt="" />
            </div>
            <div className="heading-text">
                <h1>{t('get_in_touch')}</h1>
            </div>
            <div className='subheading text-center'>{t('help_questions')}</div>
            <div className="cards-container">
                <div className="contact-card card-1">
                    <div className="icon">
                        <img src={email} alt="Email" />
                    </div>
                    <div className="heading">{t('email_us')}</div>
                    <div className="subheading-text" >{t('here_to_help')}</div>
                    <div>
                        <a href="mailto:info@devsiomtechnologies.com" className='text-black'>Info@devsiomtechnologies.com</a>
                    </div>
                </div>
                <div className="contact-card card-2">
                    <div className="icon">
                        <img src={phone} alt="Phone" />
                    </div>
                    <div className="heading text-white">{t('call_us')}</div>
                    <div className="subheading-text text-white">{t('reach_us_at')}</div>
                    <div>
                        <a href="tel:+923455118496" className='text-white'>(+92) 34551 18496</a>
                    </div>
                </div>
                <div className="contact-card card-3">
                    <div className="icon">
                        <img src={location} alt="Location" />
                    </div>
                    <div className="heading">{t('visit_us')}</div>
                    <div className="subheading-text">{t('office_address')}</div>
                    <div>
                        <a href="#" className='text-black'>Office #1319, Street #46, Sector F-18 Islamabad, 4700 PK</a>
                    </div>
                </div>
            </div>
            <div className="bottom-icon">
                <img src={next} alt="Additional Icon" />
            </div>
        </div>
    );
};

export default ContactUsBanner;
