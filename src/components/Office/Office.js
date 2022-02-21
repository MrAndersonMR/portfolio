import React from 'react';
import PropTypes from 'prop-types';
import './Office.css';
import './Office2.css';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const Office = () => (
  <div className="mainDiv">
  {/*<Container>*/}
    <Row className="row100">
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container className="centerContent">
        <img
          alt=""
          src="https://cdn.iconscoutmails.com/icon/free/png-256/column-1828024-1551569.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <Navbar.Brand href="#home" className="uc breakLine" style={{ fontFamily: "'DM Serif Text', serif", fontSize: "30px" }}>&nbsp;· Estudio Jurídico Pasargada</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar..."
                className="mr-2"
                aria-label="Search"
              />
              &nbsp;
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Col sm={8} className="mainImage">
        <Figure>
          <Figure.Image
            alt="---"
            src="https://images.unsplash.com/photo-1606881400491-b5884a57bbc9?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI2OTk5OTk&ixlib=rb-1.2.1"
          />
          {/*<Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>*/}
        </Figure>
        <h1 className="textCenterImage1 pasargadaTitle uc cwhite slide-right">Estudio<br /><span className="transparentText">J</span><br /><span className="transparentText">P</span></h1>
        <h1 className="textCenterImage1 pasargadaTitle uc cwhite slide-right2"><span className="transparentText">E</span><br />Jurídico<br /><span className="transparentText">P</span></h1>
        <h1 className="textCenterImage1 pasargadaTitle uc cwhite slide-right3"><span className="transparentText">E</span><br /><span className="transparentText">J</span><br />Pasargada</h1>
      </Col>
      <Col sm={4}>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Add your item here..." />
          <Button variant="secondary">Submit</Button>
          <div className="vr" />
          <Button variant="outline-danger">Reset</Button>
        </Stack>
      </Col>
    </Row>

    <Row className="" style={{ width: '100%' }}>

      <Col sm className="middle centerRow" style={{ marginLeft: '15vw', marginRight: '15vw', marginBottom: '10em', marginTop: '10em' }}>
        
        <h1 className="pasargadaTitle2 uc" style={{ margin: '2vw' }}>Pasagarda Jurídicos</h1>
        <h5 style={{ fontFamily: "'Montserrat', sans-serif"  }}> es un Estudio Jurídico de reconocida trayectoria en el ámbito del derecho laboral y civil. Maximizamos la instancia conciliatoria con negociadores de primer nivel altamente capacitados. Gestionamos de manera integral los juicios cuyo objeto son las indemnizaciones por despido y las indemnizaciones por accidente o enfermedades laborales. También logramos una destacable expertice en juicios cuyo objeto son los divorcios express, accidentes de tránsito y sucesiones.</h5>

      </Col>

    </Row>

    <Row className="" style={{ width: '100%', marginBottom: '10em' }}>

      <Col sm className="middle centerRow">
        <Card style={{ width: '25rem' }}>
          <Image style={{ margin: '30px', marginBottom: '20px' }} variant="top" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzM5NzYyODc&ixlib=rb-1.2.1" />
          <Card.Body>
            <Card.Title className="pasargadaTitle2 uc">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <br />
      <Col sm className="middle centerRow">
        <Card style={{ width: '20rem', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Title className="pasargadaTitle2 uc">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Image style={{ margin: '30px', marginBottom: '20px' }} width="400rem" height="400rem" variant="top" src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzM3NDYwOTU&ixlib=rb-1.2.1" roundedCircle />
        </Card>
      </Col>
      <br />
      <Col sm className="middle centerRow">
        <Card style={{ width: '25rem', marginBottom: '20px' }}>
          <Image style={{ margin: '30px' }}  variant="top" src="https://images.unsplash.com/photo-1568678833714-caf4b1247dc1?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzM5NzU3NzY&ixlib=rb-1.2.1"/>
          <Card.Body>
            <Card.Title className="pasargadaTitle2 uc">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>

    </Row>
    <Row className="centerRow" style={{ width: '100%' }}>
      <div className="smaller">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1593014109521-48ea09f22592?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI4NDUyMDk&ixlib=rb-1.2.1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="pasargadaTitle2" style={{ textShadow: '2px 2px 4px #000000' }}>DESPIDOS DIRECTOS</h1>
            <p>El despido directo es la ruptura del vinculo laboral decidido y comunicado directamente por el empleador...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1607128067461-bea9659240c9?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI4NDUzMzE&ixlib=rb-1.2.1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="pasargadaTitle2" style={{ textShadow: '2px 2px 4px #000000' }}>DESPIDOS INDIRECTOS</h1>
            <p>Se llama así al despido decidido por el trabajador como consecuencia del incumplimiento del empleador...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1569363301992-9e84da2e35d4?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzI4NDU0MTI&ixlib=rb-1.2.1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="pasargadaTitle2" style={{ textShadow: '2px 2px 4px #000000' }}>ACCIDENTES Y ENFERMEDADES PROFESIONALES</h1>
            <p>Si los trabajadores sufren un accidente o una enfermedad laboral (profesional) en nuestro...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </Row>
    
    <Row className="row25">

      <Col sm style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <h1 className="pasargadaTitle2 uc" style={{ paddingBottom: '1em' }}>Nuestra Equipo</h1>
      </Col>

    </Row>
    
    <Row className="" style={{ width: '100%', marginBottom: '10em' }}>

      {/*<Col sm className="textCenterImage1 pasargadaTitle uc cwhite" style={{ color: 'gray', fontSize: '10vh', writingMode: 'vertical-rl' }}>
        Nuestra Equipo
      </Col>*/}
      <br />
      <Col sm className="middle centerRow">
        <Card style={{ width: '20rem', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Director</ListGroupItem>
            <ListGroupItem>Experto en Derecho Fiscal</ListGroupItem>
            <ListGroupItem>Consultor de ventas</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">facebook</Card.Link>
            <Card.Link href="#">twitter</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Title className="pasargadaTitle2 uc">Link Bekka</Card.Title>
            <Card.Text>
              68 años, consultor senior, graduado en Irlanda con 30 años de Argentina
            </Card.Text>
          </Card.Body>
          <Image style={{ margin: '30px' }} width="400rem" height="400rem" variant="top" src="https://images.unsplash.com/photo-1633252696144-dcdee8f7ac14?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzM5NzkzMzM&ixlib=rb-1.2.1" roundedCircle />
        </Card>
      </Col>
      <br />
      <Col sm className="middle centerRow">
        <Card style={{ width: '20rem', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Abogado asociado</ListGroupItem>
            <ListGroupItem>Derecho Laboral</ListGroupItem>
            <ListGroupItem>Derecho Virtual</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">blog</Card.Link>
            <Card.Link href="#">discord</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Title className="pasargadaTitle2 uc">Daniel Lobachev</Card.Title>
            <Card.Text>
              29 años, graduado por la UBA, para Buenos Aires y región
            </Card.Text>
          </Card.Body>
          <Image style={{ margin: '30px' }} width="400rem" height="400rem" variant="top" src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzM5Nzk0OTI&ixlib=rb-1.2.1" roundedCircle />
        </Card>
      </Col>

    </Row>
    <Row className="row25">
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm style={{ backgroundColor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          alt=""
          src="https://cdn.pixabay.com/photo/2021/05/24/17/37/divider-6279951_960_720.png"
          
          className="d-inline-block align-top"
          style={{ filter: 'invert(1)', width: '80%', position: 'relative' }}
        />
      </Col>
    </Row>
    <Row className="row25">
      <Col sm style={{ backgroundColor: 'gray' }}>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm style={{ backgroundColor: '#ffc107' }} className="pasargadaTitle2 uc cwhite middle"><h1>Pasargada</h1></Col>
    </Row>
    <Row className="row25">
      <Col sm>sm=true</Col>
      <Col sm style={{ backgroundColor: 'gray' }}>sm=true</Col>
      <Col sm>sm=true</Col>
    </Row>
    <Row className="row15 " style={{ backgroundColor: 'black' }}>
      <Col sm style={{ backgroundColor: 'gray' }} className="middle">
        <img
          alt=""
          src="https://cdn.iconscoutmails.com/icon/free/png-256/column-1828024-1551569.png"
          width="70"
          height="70"
          className="d-inline-block align-top"
          style={{ filter: 'invert(1)' }}
        />
        &nbsp;&nbsp;&nbsp;
        <h3 className="pasargadaTitle2 uc cwhite middle" style={{ textAlign: 'left'}}>Estudio<br/>Juríduco<br/>Pasargada</h3>
      </Col>
      <Col sm><h2>Estudio<br/>Juríduco<br/>Pasargada</h2></Col>
      <Col sm>sm=true</Col>
    </Row>
  {/*</Container>*/}
  </div>
);

Office.propTypes = {};

Office.defaultProps = {};

export default Office;
