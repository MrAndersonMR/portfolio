import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';

const Publicity = () => (
  <div className="mainDiv">
    <Row className="vh-100">
      <Navbar className="bgColor2" fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <img
          alt=""
          src="https://cdn.iconscoutmails.com/icon/free/png-128/reading-book-2130818-1794963.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '}
        <Navbar.Brand href="#home">&nbsp;· English <i>with</i> Patrick</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Facebook</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Personal Email</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Col sm={6} className="mainImage">
        {/**/}
        {/*<div className="orange bgColor2"></div>*/}
        <div className="textCenterImage inlineTable">
          <h1 className="textSize2 ">{/*<span className="textSize3">“”</span>*/}The Love for Learning starts at the Beginning.</h1>
          <h3><br />English <i>with</i> Patrick</h3>
        </div>
      </Col>
      <Col sm={6} className="mainImage">
        <Figure className="marginb0">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1452001603782-7d4e7d931173?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI4NTE3ODA&ixlib=rb-1.2.1"
          />
          {/*<Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>*/}
        </Figure>
        {/*<Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Add your item here..." />
          <Button variant="secondary">Submit</Button>
          <div className="vr" />
          <Button variant="outline-danger">Reset</Button>
        </Stack>*/}
      </Col>
    </Row>
    <Row className="row100">
      <Col sm={6} className="mainImage">
        <div className="textCenterImage inlineTable">
          <h1 className="textSize2">About Me</h1>
          <h3 className="lateral">
            <br />
            Hello there! My name's Patrick and I am a native English teacher from the UK.
            <br />
            <br />
            I specialise in children's classes.
            <br />
            <br />
            I have been teaching English for over 3 years now and I absolutely love it. I like to make sure my classes are lots of fun, but with a focus on learning. I love seeing my students improve each week.
            <br />
            <br />
            I studied History at the University of Liverpool, where I graduated with a 2:1 in 2011.
            <br />
            <br />
            I am also an advanced Spanish language learner, this is very important because I know how to learn a language, and this has really helped my teaching.
          </h3>
        </div>
      </Col>
      <Col sm={6} className="mainImage">
        <Figure className="marginb0">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1599743319655-1cfad1a4e023?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI4NjI5NTg&ixlib=rb-1.2.1"
          />
        </Figure>
      </Col>
    </Row>
    <Row className="row100">
      <Col sm={6} className="mainImage">
        <div className="textCenterImage inlineTable">
          <h1 className="textSize2">Kids Classes</h1>
          <h3 className="lateral">
            <br />
            for children 4 - 16
            <br />
            <br />
            I like to ensure my lessons are both fun and educational. Therefore the classes consist of a mixture of exercises and lovely stories, along with fun games to reinforce what we have learnt.
          </h3>
        </div>
      </Col>
      <Col sm={6} className="mainImage">
        <div className="orange"></div>
        <div className="textCenterImage inlineTable">
          <h1 className="textSize2">Adults Classes</h1>
          <h3 className="lateral">
            <br />
            over 16 years
            <br />
            <br />
            I like to make the classes as fun and topical as possible. We will be discussing current affairs, opinions, history, society, philosophy, and more. At the same time adding grammar practice when needed.
          </h3>
        </div>
      </Col>
    </Row>
    <Row className="row25">
      <Col sm={12} className="mainImage bgColor1">
        {/*<div className="orange"></div>*/}
        <div className="mainImage">
          <h1 className="textSize2">My Videos</h1>
        </div>
      </Col>
    </Row>
    <Row className="row25">
      <Col sm={12} className="mainImage bgColor2">
        {/*<div className="orange"></div>*/}
        <div className="mainImage">
          <h1 className="textSize2 cwhite">My Vision</h1>
          <h3 className="lateral cwhite">
            <br />
            I see my students as lifelong learners who seek knowledge at whatever stage of life they're in.
          </h3>
        </div>
      </Col>
    </Row>
    <Row className="row100">
      <Col sm={6} className="mainImage">
        <Figure className="marginb0">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1602542165259-9a21c6ead80e?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI5NzE3MTk&ixlib=rb-1.2.1"
          />
        </Figure>
      </Col>
      <Col sm={6} className="mainImage">
        <div className="textCenterImage inlineTable">
          <h1 className="textSize2">My Philosophy</h1>
          <h3 className="lateral">
            <br />
            I believe children can learn English and have fun at the same time.
          </h3>
        </div>
      </Col>
    </Row>
    <Row className="row25">
      <Col sm={4} className="mainImage bgColor2">
        <div className="textCenterImage">
          <h3 className="lateral cwhite">
            I believe children can learn English and have fun at the same time.
          </h3>
        </div>
      </Col>
      <Col sm={4} className="mainImage bgColor1">
        <div className="textCenterImage">
          <h3 className="lateral">
            I believe children can learn English and have fun at the same time.
          </h3>
        </div>
      </Col>
      <Col sm={4} className="mainImage bgColor2">
        <div className="textCenterImage">
          <h3 className="lateral cwhite">
            I believe children can learn English and have fun at the same time.
          </h3>
        </div>
      </Col>
    </Row>
    <Row className="row100">
      <Col sm={6} className="mainImage">
        <Figure className="marginb0">
          <Figure.Image className="marginb0"
            alt="---"
            src="https://images.unsplash.com/photo-1615961766467-198457a6c72f?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI5NzQ0Mzc&ixlib=rb-1.2.1"
          />
        </Figure>
      </Col>
      <Col sm={6} className="mainImage">
        <div className="orange bgColor2"></div>
        <div className="textCenterImage inlineTable">
          <h1 className="textSize2 cwhite">Get In Touch With Me.</h1>
          <h3 className="lateral cwhite">
            <br />
            Instagram
            <br />
            englishwithpatrick
            <br />
            <br />
            Email Address
            <br />
            englishwithpatrick@outlook.com
          </h3>
        </div>
      </Col>
    </Row>

  </div>
);

Publicity.propTypes = {};

Publicity.defaultProps = {};

export default Publicity;