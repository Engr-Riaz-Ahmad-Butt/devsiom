import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './BannerCarousel.css'; 

const BannerCarousel = () => {
    const { t } = useTranslation();
    const titles = [t('carousel_1_title'), t('carousel_2_title'), t('carousel_3_title')];
    const descriptions = [t('carousel_1_description'), t('carousel_2_description'), t('carousel_3_description')];
    const videos = [
      '/assets/DedicatedTeam-CU6a4VSs.mp4',
      '/assets/MobileApps-CBvyUoR4.mp4',
      '/assets/WebApps-C6NtfZBy.mp4'
    ];
    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
      const id = setInterval(() => {
        setCarouselIndex(i => (i + 1) % titles.length);
      }, 4000);
      return () => clearInterval(id);
    }, [titles.length]);

    const handleSelect = (selectedIndex) => {
      setCarouselIndex(selectedIndex);
    };

    return (
      <div className="hero-section">
        <Carousel 
          activeIndex={carouselIndex} 
          onSelect={handleSelect} 
          interval={null}
          fade
          controls={false}
          indicators={true}
          className="hero-carousel"
        >
          {titles.map((title, index) => (
            <Carousel.Item key={index}>
              <div className="hero-item">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  className="hero-video"
                >
                  <source src={videos[index]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                  <div className="content-wrapper">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-description">{descriptions[index]}</p>
                    <div className="hero-dots">
                      {titles.map((_, i) => (
                        <button
                          key={i}
                          className={`hero-dot ${i === carouselIndex ? 'active' : ''}`}
                          onClick={() => handleSelect(i)}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
};

export default BannerCarousel;
