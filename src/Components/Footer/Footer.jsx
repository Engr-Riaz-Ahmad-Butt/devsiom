import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../../Images/devsiomlogo.png";
import phone from "../../Images/image 16.png";
import location from "../../Images/image 18.png";
import instagram from "../../Images/image 17.png";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="footer bg-black text-light">
      <div className="shape-container">
        <div className="shape-content">
          <h1 className="shape-text">{t('footer_heading')}</h1>
          <button className="shape-button">Your Button</button>
        </div>
      </div>
      <Row className="py-5 d-flex justify-content-end">
        <Col md={6} className="text-md-end mb-4 mb-md-0">
          <div className="d-flex justify-content-center justify-content-md-end gap-3">
            <h4 className="follow-us">{t('follow_us')}</h4>
            <a href="https://www.facebook.com/DevsiomTechnologies/">
              <FaFacebookF size={24} color="#fff" />
            </a>
            <a href="https://www.linkedin.com/company/devsiom-technologies/">
              <FaLinkedinIn size={24} color="#fff" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={24} color="#fff" />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="footer-content d-flex justify-content-between py-5 mx-0">
        <Col md={3} className="text-center text-md-start mb-4 mb-md-0">
          <ListGroup variant="flush">
            <ListGroup.Item className="fw-bold">{t('services')}</ListGroup.Item>
            <ListGroup.Item>{t('android_app_development')}</ListGroup.Item>
            <ListGroup.Item>{t('ios_app_development')}</ListGroup.Item>
            <ListGroup.Item>{t('cross_platform_development')}</ListGroup.Item>
            <ListGroup.Item>{t('website_development')}</ListGroup.Item>
            <ListGroup.Item>{t('ui_ux_designing')}</ListGroup.Item>
            <ListGroup.Item>{t('code_build_reviews')}</ListGroup.Item>
            <ListGroup.Item>{t('interactive_prototype')}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3} className="text-center justify-content-center text-md-start mb-4 mb-md-0">
          <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
            <div className="d-flex flex-column align-items-center w-100">
              <Image src={Logo} alt="Devsiom Logo" fluid className="footer-logo" />
            </div>
            <div className="d-flex flex-column align-items-center w-100">
              <Image src={phone} alt="Phone Icon" className="footer-icon" />
              <p className="footer-text">{t('contact_phone')}</p>
            </div>
            <div className="d-flex flex-column align-items-center w-100">
              <Image src={location} alt="Location Icon" className="footer-icon" />
              <p className="footer-text">{t('contact_address')}</p>
            </div>
            <div className="d-flex flex-column align-items-center w-100">
              <Image src={instagram} alt="Website Icon" className="footer-icon" />
              <p className="footer-text">{t('contact_website')}</p>
            </div>
          </div>
        </Col>

        <Col md={3} className="text-center text-md-start mb-4 mb-md-0">
          <ListGroup variant="flush">
            <ListGroup.Item className="fw-bold">{t('quick_links')}</ListGroup.Item>
            <ListGroup.Item>{t('home')}</ListGroup.Item>
            <ListGroup.Item>{t('about_us')}</ListGroup.Item>
            <ListGroup.Item>{t('services_link')}</ListGroup.Item>
            <ListGroup.Item>{t('portfolio')}</ListGroup.Item>
            <ListGroup.Item>{t('industries')}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <hr className="text-light" />
      <Row className="text-center py-3">
        <Col>
          <p>{t('copyright_text')}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
