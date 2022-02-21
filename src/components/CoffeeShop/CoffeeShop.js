import React from 'react';
import PropTypes from 'prop-types';

import './CoffeeShop.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

const CoffeeShop = () => (
  <div style={{ backgroundColor: "black" }} >
    <Container>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Image src="https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/3030930.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTU1MjAwMCwicSI6bnVsbCwiaWF0IjoxNjM1MzU1OTQ2fQ__.e5c8e3e54ae5ba98cf2a3fea170dd8afcc470b51267fe4a03458b3ada93d0896" style={{ width: "48px", fill: "white" }}/>{' '}
        <Navbar.Brand href="#home" className="anyTimeCoffee" style={{ fontSize: "48px" }}> any - time - coffee</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div style={{ height: "10vh" }} />
      <Row>
        <Col sm>
          <Image className="bounce-in-top" src="https://images.unsplash.com/photo-1546864558-fb3778ab5521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwNTIyMjI&ixlib=rb-1.2.1&q=80&w=200" roundedCircle />
        </Col>
      </Row>
      <h1 className="anyTimeCoffee" style={{ color: "white", fontSize: "64px" }}>any - time - coffee</h1>
      <br />
      <Container>
      <Row>
        <Col sm style={{ height: "100vh" }}>
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
          <Card className="swing-in-top-fwd" style={{ color: "white", backgroundColor: "black" }}>
            <Card.Img src="https://images.unsplash.com/photo-1601801814516-59e49e3d7bc9?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwNTUzMjA&ixlib=rb-1.2.1" alt="Card image" />
            <Card.ImgOverlay style={{ top: "50%" }}>
              <Card.Title>
                <h1 className="text-pop-up-top">Card title</h1>
              </Card.Title>
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
  </div>
);

CoffeeShop.propTypes = {};

CoffeeShop.defaultProps = {};

export default CoffeeShop;
