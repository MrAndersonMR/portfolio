import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Figure from 'react-bootstrap/Figure';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';

const Commerce = () => (
  <div>
    {/*<Navbar fixed="top" bg="dark" variant="dark" className="navTableSpace">
      <Container>
      <Navbar.Brand href="#home" className="uc">Kanz Construction</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about_us">About Us</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#contact_us">Contact Us</Nav.Link>
      </Nav>
      </Container>
    </Navbar>*/}
    
    <Row className="row15 marginlr0">
      <Col sm className="bgColor1 navCenter">

        <Navbar bg="dark" variant="dark" expand="lg" className="navTableSpace">
          <Navbar.Brand href="#" className="uc">Kanz Construction</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </Col>
    </Row>
    <Row className="row100 marginlr0 hidden">
      <Col sm={1} className="bgColor1 positionA">

      </Col>
      <Col sm={12} className="paddinglr0">
        <Figure className="marginb0 bar">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1561234311-a9e16fa60b25?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwNDAzNTY&ixlib=rb-1.2.1"
          />
        </Figure>
        <div className="textCenterImage uc">
          <h1 className="kanzTitle">Kanz<br />Construction</h1>
          <h3 className="kanzSubtitle">quality you can trust</h3>
        </div>
      </Col>
    </Row>
  </div>
);

Commerce.propTypes = {};

Commerce.defaultProps = {};

export default Commerce;
