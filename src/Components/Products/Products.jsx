import React from "react";
import "./Products.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import product1 from "../../Images/MyDiary-DijWu8YW.jpg";
import product2 from "../../Images/Remote3-DHt7jkpY.png";
import product3 from "../../Images/GoldDetector-DIxe-A45.jpg";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="products-container">
        <b className="products-heading">
          <p>{t('our_latest_products')}</p>
        </b>
        <div className="products-subheading">
          {t('products_subheading')}
        </div>
      </div>
      <Row className="justify-content-center">
        <Col md={4} className="d-flex justify-content-center">
          <div className="product-card">
            <img src={product1} alt={t('gold_metal_detector')} />
            <b className="product-card-title">{t('gold_metal_detector')}</b>
            <div className="product-card-description">
              {t('gold_metal_detector_description')}
            </div>

            <div className="product-card-details">
              {t('gold_metal_detector_details')}
            </div>
            <Button className="product-card-button" variant="warning">
              {t('learn_more')} ➔
            </Button>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="product-card">
            <img src={product2} alt={t('my_diary')} />
            <b className="product-card-title">{t('my_diary')}</b>
            <div className="product-card-description">
              {t('my_diary_description')}
            </div>

            <div className="product-card-details">
              {t('my_diary_details')}
            </div>
            <Button className="product-card-button" variant="warning">
              {t('learn_more')} ➔
            </Button>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="product-card">
            <img src={product3} alt={t('smart_tv_remote')} />
            <b className="product-card-title">{t('smart_tv_remote')}</b>
            <div className="product-card-description">
              {t('smart_tv_remote_description')}
            </div>

            <div className="product-card-details">
              {t('smart_tv_remote_details')}
            </div>
            <Button className="product-card-button" variant="warning">
              {t('learn_more')} ➔
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
