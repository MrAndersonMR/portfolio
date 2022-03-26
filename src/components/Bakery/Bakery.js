import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Bakery = () => (
  <div>
    <Row className="row100">
      <Col sm>
        <div className="parallax"></div>
         {/*className="vw-100"*/} 
        {/*<div className="parallax"></div>*/}
      </Col>
    </Row>
    <img className="parallax" src={process.env.PUBLIC_URL + '/cuba.png'}/> {/*https://assets.webiconspng.com/uploads/2017/09/Eyes-PNG-Image-86445.png*/}
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <Row className="row100">
      <Col sm>
        
      </Col>
    </Row>
    <Row className="row100">
      <Col sm>
        
      </Col>
    </Row>
  </div>
);

Bakery.propTypes = {};

Bakery.defaultProps = {};

export default Bakery;
