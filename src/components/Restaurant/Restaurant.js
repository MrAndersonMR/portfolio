import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Figure from 'react-bootstrap/Figure';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Tab from 'react-bootstrap/Tab';
//import Sonnet from 'react-bootstrap/Sonnet';

import Table from 'react-bootstrap/Table';

const Restaurant = () => (
  <div>
    <div className="mainImage">
      <Navbar fixed="bottom" bg="light" variant="light" className="navTable centerNavbar">
        <Container className="flex-column">
        <Navbar.Brand href="#home" className="uc margin15">Buffet<br />Holy<br />Guacamole</Navbar.Brand>
        <Nav className="me-auto" className="flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
    <Row className="row100">
      <Col sm></Col>
      <Col sm className="mainImage">
        <Figure className="marginb0 bar">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwMzA5NTc&ixlib=rb-1.2.1" bottom
          />
        </Figure>
        <h1 className="textCenterImage cwhite fontGuacamole size1">Buffet<br />Holy Guacamole</h1>
      </Col>
      <Col sm></Col>
    </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="row25">
        <h2>Ours Specialities</h2>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              Don’t forget the flavors - sweet, salty, tart, pleasantly bitter.
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              Seasonings and spices - mention herbs used like sage, or rosemary and spices like freshly cracked peppercorn, dry rubs or marinades.
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              Soft textures - smooth, silky, unctuous, coating, tender, and juicy.
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    <Row className="row75 middle">
      <Col sm>
        <Figure className="marginb0 bar">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwMzMwMjU&ixlib=rb-1.2.1"
          />
        </Figure>
      </Col>
      <Col sm>
        <Figure className="marginb0 bar">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1604328471151-b52226907017?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwMzM0NzI&ixlib=rb-1.2.1"
          />
        </Figure>
      </Col>
      <Col sm>
        <Figure className="marginb0 bar">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1560963689-02e82017fb3c?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwMzMxMDE&ixlib=rb-1.2.1"
          />
        </Figure>
      </Col>
    </Row>
    <Row className="row50">
      <Col sm>
        <h2>Ours Menu</h2>
        <Table responsive="sm" variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </div>
);

Restaurant.propTypes = {};

Restaurant.defaultProps = {};

export default Restaurant;