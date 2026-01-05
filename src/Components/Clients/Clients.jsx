import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './Clients.css';
import client1 from '../../Images/image 8.png';
import client2 from '../../Images/image 9.png';
import client3 from '../../Images/image 10.png';
import client4 from '../../Images/image 11.png';
import client5 from '../../Images/image 13.png';
import client6 from '../../Images/image 14.png';
import client7 from '../../Images/image 15.png';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="clients-container text-center my-5">
      <h2 className="mb-5">{t('our_clients')}</h2>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4 d-flex justify-content-center align-item-center">
          <Card className="client-custom-card">
            <Card.Img variant="top" src={client1} className="client-card-img" />
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="client-custom-card">
            <Card.Img variant="top" src={client2} className="client-card-img" />
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="client-custom-card">
            <Card.Img variant="top" src={client3} className="client-card-img" />
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="client-custom-card">
            <Card.Img variant="top" src={client4} className="client-card-img" />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Card className="client-custom-card">
            <Card.Img variant="top" src={client5} className="client-card-img" />
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="client-custom-card">
            <Card.Img variant="top" src={client6} className="client-card-img" />
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="client-custom-card">
            <Card.Img variant="top" src={client7} className="client-card-img" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
