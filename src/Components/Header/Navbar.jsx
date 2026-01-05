import React from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Logo from '../../Images/devsiomlogo.png';
import './Navbar.css';

const NavbarTop = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="190"
              height="66"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">{t('home')}</Nav.Link>
              <Nav.Link href="#about">{t('about_us')}</Nav.Link>
              <Nav.Link href="#services">{t('services')}</Nav.Link>
              <Nav.Link href="/portfolio">{t('portfolio')}</Nav.Link>
              <Nav.Link href="#industries">{t('industries')}</Nav.Link>
              <Button className="ms-3 contact-us-btn" href="/contact-us">
                {t('contact_us')}
              </Button>
              <Dropdown className="ms-3">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  {t('select_language')}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('de')}>German</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarTop;
