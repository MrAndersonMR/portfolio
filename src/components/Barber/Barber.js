import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Figure from 'react-bootstrap/Figure';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Table from 'react-bootstrap/Table';

const Barber = () => (
  <div>
    <Navbar fixed="bottom" bg="dark" variant="dark" className="navTable">
      <Container className="flex-column">
      <Navbar.Brand href="#home" style={{ fontFamily: "'Kristi', cursive", fontSize: "4em" }}>Dorothy's<br/><span style={{ fontFamily: "'Yeseva One', cursive", fontSize: "0.35em", margin: "7vh" }}>barbershop</span></Navbar.Brand>
      <Nav className="me-auto" className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <Row className="row25" style={{ justifyContent: "center", alignItems: "center" }} >
      <Col sm={2} className="mainImage">
        <Figure className="" style={{ margin: "auto" }}>
          <Figure.Image className="marginb0"
            alt="---"
            src="https://cdn.iconscoutmails.com/icon/free/png-128/scissor-699-1107606.png"
          />
        </Figure>
      </Col>
      <Col sm={10} className="mainImage">
        <div className="" style={{ margin: "auto" }}>
          <h1 className="fontDorothy outline" style={{ fontSize: 'calc(6em + 6vw)' }}>Dorothy's</h1>
          <h3 className="fontDorothy2 size2 lessMargin outline" style={{ color: 'darkorange', letterSpacing: '3vh' }}>barbershop</h3>
        </div>
      </Col>
    </Row>
    <Row className="" style={{ maxHeight: '75vh!important', marginLeft: '5vw', marginRight: '5vw' }}>
      <Col sm={2}></Col>
      <Col sm={10} className="mainImage" style={{ zIndex: '-1' }}>
        <Figure className="marginb0" style={{ marginTop: '2em', transform: 'rotate(4deg)' }}>
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1602982903808-29f783644d21?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwMTk0MDQ&ixlib=rb-1.2.1&q=85"
          />
        </Figure>
      </Col>
    </Row>
    <Row className="row25">
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
    </Row>
    <Row className="row25">
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
    </Row>
    <Row className="" style={{ width: '100vw' }}>
      <Col sm className="lateral">
        <Table responsive="sm" className="">
          <thead>
            <tr>
              <th><i>my hours</i></th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody style={{ fontFamily: "'Kristi', cursive", fontSize: "3em" }}>
            <tr>
              <td>11:00am - 1:00pm</td>
              <td>X</td>
              <td>X</td>
              <td></td>
              <td>X</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2:00pm - 5:00pm</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td></td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>5:40pm - 9:30pm</td>
              <td></td>
              <td></td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <Row className="row25">
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm style={{ backgroundColor: 'blue', webkitTransform: 'skewX(-25deg)' }}>sm=true</Col>
    </Row>
  </div>
);

Barber.propTypes = {};

Barber.defaultProps = {};

export default Barber;
