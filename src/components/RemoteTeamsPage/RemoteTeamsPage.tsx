import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./RemoteTeamsPage.css";
/* import "./RemoteTeamsPage.js"; */

interface RemoteTeamsPageProps {}

const RemoteTeamsPage: FC<RemoteTeamsPageProps> = () => (
  <div /* style={{ backgroundColor: "black" }} */>
    <Navbar /* bg="dark" */ variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="#home" style={{ display: "flex", alignItems: "center" }}>
        {/* <div className="borderImage" style={{ border: "30px solid", borderImage: "url('https://a3.vnda.com.br/tucumbrasil/2019/04/25/pk-qd-000005-quadro-parakana-7537.jpg?v=1556228187') 80 80 80 80 / 10px 10px 10px 10px round", /* borderImage: 'repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60', / /* padding: "20px 20px 20px 40px" / }}> */}
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "2rem", letterSpacing: ".25rem", fontWeight: 200, textAlign: "right", color: "#ED047A" /* , lineHeight: "0.9" */ }}>MA{/* <br/> */}<span style={{ letterSpacing: ".125rem", fontWeight: 300 }}>RA</span>{/* <br/> */}<span style={{ letterSpacing: "-.125rem", fontWeight: 800 }}>CU</span>{/* <br/> */}<span style={{ letterSpacing: "-.25rem", fontWeight: 900 }}>YA</span></p>
          <Figure style={{ marginBottom: "0" /* margin: "-2rem 0 0 -10.5rem" */ }}>
            <Figure.Image
              width="35px"
              height="35px"
              alt=""
              style={{ marginBottom: "0", marginLeft: "-50px", marginRight: "140px", marginTop: "20px" }}
              src={process.env.PUBLIC_URL + '/pf.svg'}
            />
          </Figure>
          <p style={{ fontFamily: "'Inconsolata', monospace", fontSize: "1rem", /* letterSpacing: ".35rem", */ textAlign: "right", color: /* "white" */ "#FEAF1E" /* "#002b59" */, marginTop: "3rem", marginLeft: "-8.5rem", /* marginBottom: "0", textDecoration: "overline" */ /* , marginRight: ".75rem" */ }}>consulting</p>
        {/* </div> */}
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <Row style={{ height: "100vh" }}>
      <Col>
        
      </Col>
      <Col style={{ display: "flex", placeContent: "center space-around", alignItems: "flex-start", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
          SCALE YOUR<br />
          ENGINEERING<br />
          POWER.
        </h1>
        <h5 style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
          We enable deep-tech startups to<br />
          achieve their vision,<br />
          from research to product delivery
        </h5>
      </Col>
      
    </Row>
    <Button style={{ borderRadius: "5rem", width: "auto", height: "auto", marginTop: "-10rem" }} variant="outline-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
        </svg>
      </Button>
    <Row style={{ height: "100vh", backgroundColor: "#fee06b" }}>
      <Col>
        
      </Col>
      <Col style={{ display: "flex", placeContent: "center space-around", alignItems: "flex-start", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
          Scale with confidence
        </h3>
        <h6 style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
          Quickly grow your team with vetted, senior engineers.<br/>
          Tweag provides the expertise needed to execute high-risk,<br/>
          high-reward projects.
        </h6>
        <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
          Increase developer productivity
        </h3>
        <h6 style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
          Boost developer efficiency with best practices that reduce your time<br/>
          to market.
        </h6>
        <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
          Solve complex problems
        </h3>
        <h6 style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
          Realize your breakthrough vision. Together,<br/>
          we'll iterate quickly and transform your ideas into products that work
        </h6>
        <br/>
        <Button style={{ borderRadius: "5rem" }} variant="outline-dark">Contact Us</Button>
      </Col>
    </Row>
    <Row style={{ height: "100vh" }}>
      <Col style={{ width:"100vw", display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ fontFamily: "'Inconsolata', monospace" }}>
          KEY INDUSTRIES WE SERVE
        </h1>
      </Col>
      <Row style={{ display: "flex", placeContent: "center space-around", flexDirection: "row", justifyContent: "center" }}>
        <Col>
          <h3 style={{ fontFamily: "'Inconsolata', monospace" }}>
            Fintech
          </h3>
          <h6 style={{ fontFamily: "'Antic', sans-serif" }}>
            Build statistical models, iterate on<br/>them quickly and increase<br/>productivity.
          </h6>
        </Col>
        <Col>
          <h3 style={{ fontFamily: "'Inconsolata', monospace" }}>
            Fintech
          </h3>
          <h6 style={{ fontFamily: "'Antic', sans-serif" }}>
            Build statistical models, iterate on<br/>them quickly and increase<br/>productivity.
          </h6>
        </Col>
        <Col>
          <h3 style={{ fontFamily: "'Inconsolata', monospace" }}>
            Fintech
          </h3>
          <h6 style={{ fontFamily: "'Antic', sans-serif" }}>
            Build statistical models, iterate on<br/>them quickly and increase<br/>productivity.
          </h6>
        </Col>
      </Row>
    </Row>
    <Row style={{ height: "100vh", backgroundColor: "#4d22a8" }}>
      <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontFamily: "'Antic', sans-serif", color: "white" }}>
          At Tweag, we drive purposeful<br/>innovation through lasting<br/>software. We apply mathematics,<br/>computer science and the<br/>methods of open source to<br/>advance software engineering.
        </h2>
      </Col>
      <Col>
        
      </Col>
    </Row>
    <Row style={{ height: "100vh" }}>
      <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ fontFamily: "'Inconsolata', monospace" }}>
          TRUSTED BY LEADERS
          & INNOVATORS
        </h1>
      </Col>
    </Row>
    <Row style={{ height: "100vh" }}>
      <Col style={{ backgroundColor: "#ff3b5a", height: "70vh", display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center" }}>
        <Container style={{ display: "flex", placeContent: "center space-around", alignItems: "flex-start", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontFamily: "'Inconsolata', monospace" }}>
            READY TO ACHIEVE<br/>YOUR BIG VISION?
          </h1>
          <Button style={{ borderRadius: "5rem" }} variant="outline-dark">Contact Us</Button>
        </Container>
      </Col>
      <Row style={{ backgroundColor: "#2e2c2b", height: "30vh" }}>
        <Col style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "left", display: "flex", alignItems: "flex-end" }}>
          <Container>
            <h6>Maracuya → Thames 1320 — 75012 Buenos Aires — Argentina</h6>
            <h6>patrick@maracuyaconsulting.com</h6>
          </Container>
        </Col>
        <Col style={{ display: "flex" }}>
          <Container style={{ display: "flex", placeContent: "center", flexDirection: "column" }}>
            <h1 style={{ fontFamily: "'Inconsolata', monospace", color: "white", textAlign: "left" }}>
              Contact
            </h1>
            <h6 style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "left" }}>
              Twitter<br/>
              GitHub<br/>
              LinkedIn
            </h6>
          </Container>
        </Col>
        <Col style={{ display: "flex" }}>
          <Container style={{ display: "flex", placeContent: "center", flexDirection: "column" }}>
            <h1 style={{ fontFamily: "'Inconsolata', monospace", color: "white", textAlign: "left" }}>
              About us
            </h1>
            <h6 style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "left" }}>
              Services<br/>
              Blog<br/>
              Careers<br/>
              Contact us
            </h6>
          </Container>
        </Col>
      </Row>
    </Row>
  </div>
);

export default RemoteTeamsPage;
