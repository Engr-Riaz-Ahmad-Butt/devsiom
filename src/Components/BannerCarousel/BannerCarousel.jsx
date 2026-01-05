import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './BannerCarousel.css'; 

const BannerCarousel = () => {
    const { t } = useTranslation();
    const titles = [t('carousel_1_title'), t('carousel_2_title'), t('carousel_3_title')];
    const descriptions = [t('carousel_1_description'), t('carousel_2_description'), t('carousel_3_description')];
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
      const id = setInterval(() => {
        setCarouselIndex(i => (i + 1) % titles.length);
        setTextIndex(i => (i + 1) % titles.length);
      }, 4000);
      return () => clearInterval(id);
    }, [titles.length]);

    const handleSelect = (selectedIndex) => {
      setCarouselIndex(selectedIndex);
      setTextIndex(selectedIndex);
    };

    return (
        <Container fluid className="revolutionize-container">
          <Carousel fade controls={true} activeIndex={carouselIndex} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
              <Row className="align-items-center justify-content-center text-center">
                <Col md={6} className="carousel-caption">
                  <h3>{titles[textIndex]}</h3>
                  <p>{descriptions[textIndex]}</p>
                </Col>
                <Col md={6} className="video-container">
                  <video autoPlay loop muted width="100%" height="auto">
                    <source src="/assets/DedicatedTeam-CU6a4VSs.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Carousel.Item>
    
            <Carousel.Item>
              <Row className="align-items-center justify-content-center text-center">
                <Col md={6} className="carousel-caption">
                  <h3>{titles[textIndex]}</h3>
                  <p>{descriptions[textIndex]}</p>
                </Col>
                <Col md={6} className="video-container">
                  <video autoPlay loop muted width="100%" height="auto">
                    <source src="/assets/MobileApps-CBvyUoR4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Carousel.Item>
    
            <Carousel.Item>
              <Row className="align-items-center justify-content-center text-center">
                <Col md={6} className="carousel-caption">
                  <h3>{titles[textIndex]}</h3>
                  <p>{descriptions[textIndex]}</p>
                </Col>
                <Col md={6} className="video-container">
                  <video autoPlay loop muted width="100%" height="auto">
                    <source src="/assets/WebApps-C6NtfZBy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
          {/* bottom button removed — captions now rotate automatically */}
        </Container>
      );
};

export default BannerCarousel;
