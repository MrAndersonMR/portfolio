import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';

const Opening = () => (
  <Container style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "space-evenly", alignItems: "stretch", justifyContent: "space-evenly", flexDirection: "column", backgroundColor: "black" }}>
    <h1 style={{ color: "white" }} >Portfolio</h1>
    <Row>
    <Col xs={6} md={4} style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/education-4301999-3572973.png" />
          EnglishwithPatrick
        </Button>{' '}
      </Col>
      <Col xs={6} md={4} style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/salon-furniture-barber-hair-cutting-hairdresser-chair-3-636.png" />
          Dorothy's Barber
        </Button>{' '}
      </Col>
      <Col xs={6} md={4} style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/restaurant-7-93738.png" />
          Buffet Holy Guacamole
        </Button>{' '}
      </Col>
    </Row>
    <Row>
      <Col xs={6} md={4} style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="light" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/restaurant-7-93738.png" />
          Buffet Holy Guacamole
        </Button>{' '}
      </Col>
      <Col xs={6} md={4}>
        <Button variant="light">
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/star-673-459856.png" />
        </Button>{' '}
      </Col>
      <Col xs={6} md={4}>
        <Button variant="light">
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/star-673-459856.png" />
        </Button>{' '}
      </Col>
    </Row>
    <Row>
      <Col xs={6} md={4}>
        Opening Component
      </Col>
      <Col xs={6} md={4}>
        <Button variant="primary">
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/star-673-459856.png" />
        </Button>{' '}
      </Col>
      <Col xs={6} md={4}>
        <Button variant="primary">
          <Image src="https://cdn.iconscoutmails.com/icon/free/png-128/star-673-459856.png" />
        </Button>{' '}
      </Col>
    </Row>
  </Container>
);

Opening.propTypes = {};

Opening.defaultProps = {};

export default Opening;
