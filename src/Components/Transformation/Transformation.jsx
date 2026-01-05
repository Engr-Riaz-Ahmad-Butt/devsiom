import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Transformation.css";

import transformationImage from "../../Images/frame-11@2x.png";
import agileTeamsImage from "../../Images/group-1@2x.png";
import digitalizationImage from "../../Images/digitaltransformation-1@2x.png";
import innovationImage from "../../Images/innovation-1@2x.png";

const Transformation = () => {
  const { t } = useTranslation();

  return (
    <Container className="transformation-container">
      <div className="transformation-heading mb-4">
        <h3>{t('transformation.heading')}</h3>
      </div>
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            className="img-fluid transformation-image"
            alt="Transformation"
            src={transformationImage}
          />
        </Col>
        <Col md={6}>
          <Row>
            <Col md={12} className="mb-4">
              <div className="custom-card d-flex flex-row">
                <div className="card-image-background">
                  <div className="card-image-wrapper">
                    <img
                      className="card-image"
                      alt={t('transformation.agile_teams.title')}
                      src={agileTeamsImage}
                    />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="card-heading">{t('transformation.agile_teams.title')}</Card.Title>
                  <Card.Text className="card-description">
                    {t('transformation.agile_teams.description')}
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col md={12} className="mb-4">
              <div className="custom-card d-flex flex-row">
                <div className="card-image-background">
                  <div className="card-image-wrapper">
                    <img
                      className="card-image"
                      alt={t('transformation.digitalization.title')}
                      src={digitalizationImage}
                    />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="card-heading">
                    {t('transformation.digitalization.title')}
                  </Card.Title>
                  <Card.Text className="card-description">
                    {t('transformation.digitalization.description')}
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col md={12}>
              <Card className="custom-card d-flex flex-row">
                <div className="card-image-background">
                  <div className="card-image-wrapper">
                    <img
                      className="card-image"
                      alt={t('transformation.innovation.title')}
                      src={innovationImage}
                    />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="card-heading">{t('transformation.innovation.title')}</Card.Title>
                  <Card.Text className="card-description">
                    {t('transformation.innovation.description')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Transformation;
