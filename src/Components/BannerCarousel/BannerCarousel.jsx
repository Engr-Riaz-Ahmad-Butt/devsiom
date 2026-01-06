import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useTranslation } from "react-i18next";
import './BannerCarousel.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCarousel = () => {
    const { t } = useTranslation();
    const sliderRef = useRef(null);
    
    const titles = [t('carousel_1_title'), t('carousel_2_title'), t('carousel_3_title')];
    const descriptions = [t('carousel_1_description'), t('carousel_2_description'), t('carousel_3_description')];
    const videos = [
      '/assets/DedicatedTeam-CU6a4VSs.mp4',
      '/assets/MobileApps-CBvyUoR4.mp4',
      '/assets/WebApps-C6NtfZBy.mp4'
    ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      arrows: false,
      lazyLoad: 'ondemand',
    };

    return (
      <div className="hero-section">
        <Slider ref={sliderRef} {...settings} className="hero-carousel">
          {titles.map((title, index) => (
            <div key={index} className="hero-item">
              <video 
                autoPlay 
                loop 
                muted 
                className="hero-video"
                playsInline
              >
                <source src={videos[index]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <div className="content-wrapper">
                  <h1 className="hero-title">{title}</h1>
                  <p className="hero-description">{descriptions[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Custom dots */}
        <div className="hero-dots">
          {titles.map((_, i) => (
            <button
              key={i}
              className="hero-dot"
              onClick={() => sliderRef.current?.slickGoTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
};

export default BannerCarousel;
