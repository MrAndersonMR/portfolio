import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

const CoffeeShop = () => (
  <Container>
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <br />
    <h1>Andeson</h1>
    <br />
    <Row>
      <Col sm>
        <Image src="https://images.unsplash.com/photo-1546864558-fb3778ab5521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwNTIyMjI&ixlib=rb-1.2.1&q=80&w=200" roundedCircle />
      </Col>
    </Row>
    <Container>
    <Row>
      <Col sm className="vh-100">
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    </Container>
    <Container>
    <Row>
      <Col sm>
        <Card className="bg-dark text-white">
          <Card.Img src="https://images.unsplash.com/photo-1601801814516-59e49e3d7bc9?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwNTUzMjA&ixlib=rb-1.2.1" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title><h1>Card title</h1></Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
    </Container>
  </Container>
);

CoffeeShop.propTypes = {};

CoffeeShop.defaultProps = {};

export default CoffeeShop;
