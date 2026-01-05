import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./ReviewCarouselItem.css";
import { useTranslation } from "react-i18next";

const ReviewCarouselItemParent = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div className="carouselWrapper">
      <div className="carouselHeader">
        <h1 className="text-center">{t("carousel_header")}</h1>
      </div>

      <Container className="carouselContainer">
        <div className="carouselBox">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            fade
            controls={false}
            indicators={false}
            interval={null}
          >
            <Carousel.Item>
              <Row className="align-items-center justify-content-center text-center h-100">
                <Col className="carouselContent">
                  <h3>{t("review_1_title")}</h3>
                  <p>{t("review_1_content")}</p>
                  <h1>{t("review_1_author")}</h1>
                  <p>{t("review_1_location")}</p>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="align-items-center justify-content-center text-center h-100">
                <Col className="carouselContent">
                  <h3>{t("review_2_title")}</h3>
                  <p>{t("review_2_content")}</p>
                  <h1>{t("review_2_author")}</h1>
                  <p>{t("review_2_location")}</p>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="align-items-center justify-content-center text-center h-100">
                <Col className="carouselContent">
                  <h3>{t("review_3_title")}</h3>
                  <p>{t("review_3_content")}</p>
                  <h1>{t("review_3_author")}</h1>
                  <p>{t("review_3_location")}</p>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="bottom-buttons">
          <button onClick={handlePrev} className="carousel-btn">
            {t("previous")}
          </button>
          <button onClick={() => handleSlide(0)} className="carousel-btn">
            1
          </button>
          <button onClick={() => handleSlide(1)} className="carousel-btn">
            2
          </button>
          <button onClick={() => handleSlide(2)} className="carousel-btn">
            3
          </button>
          <button onClick={handleNext} className="carousel-btn">
            {t("next")}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ReviewCarouselItemParent;
