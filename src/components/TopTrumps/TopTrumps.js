import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import Modal from 'react-bootstrap/Modal';

import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const TopTrumps = () => (
  <div>

    <Container className="cardContainerCenter">
      <Image className="cardImage" src="https://www.camara.leg.br/internet/deputado/bandep/204546.jpg" rounded />
      <Card bg="dark" text="white" style={{ width: '18rem' }}>
        {/*<Card.Img variant="top" className="cardPadding" src="https://images.unsplash.com/photo-1601801814516-59e49e3d7bc9?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzMwNTUzMjA&ixlib=rb-1.2.1" />*/}
        <Card.Body className="cardPadding">
          <Card.Subtitle>Deputada Federal</Card.Subtitle>
          <Card.Title>Joice Hasselmann</Card.Title>
          <Card.Text className="cardTextLeft">
            Partido: <span className="cardTextRight">PSL</span><br />
            UF (estado): <span className="cardTextRight">SP</span>
          </Card.Text>
          {/*<Button variant="primary">Go somewhere</Button>*/}
        </Card.Body>
      </Card>
    </Container>

    <Modal.Dialog>
      <Modal.Header closeButton closeVariant="white" className="bg-dark cwhite">
        <Modal.Title>JOICE CRISTINA HASSELMANN</Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid" className="cardBgImage">
        <Container>

          <Row className="middle">

            <Col xs={6} md={6}>
              <h4 className="cwhite">Estrutura do Partido Filiado</h4>
              <br />
              <Image width="150px" src="http://www.camara.leg.br/internet/Deputado/img/partidos/PSL.gif" />
              <br />
              <br />
              <h6 className="cardTextLeft cwhite">Partido<span className="cardTextRight">Partido Social Liberal</span></h6>
              <br />
              <Image width="150px" src="http://www.camara.gov.br/internet/deputado/bandep/179587.jpg" thumbnail />
              <br />
              <br />
              <h6 className="cardTextLeft cwhite">Líder<span className="cardTextRight">Vitor Hugo</span></h6>
            </Col>
            <Col xs={6} md={6}>
              <h4 className="cwhite">Dados Pessoais</h4>
              <br/>
              <h6 className="cardTextLeft cwhite">Nascimento<span className="cardTextRight">1978-01-29</span></h6>
              <h6 className="cardTextLeft cwhite">Local<span className="cardTextRight">Ponta Grossa - PR</span></h6>
              <h6 className="cardTextLeft cwhite">Escolaridade<span className="cardTextRight">Superior</span></h6>
            </Col>

          </Row>
          <br />
          <Row>
            <Col xs={12} md={12}>
              <h2 className="cwhite">Gráfico</h2>
            </Col>
          </Row>
          <br/>
          <Row>
            <h4 className="cwhite">Dados</h4>
            <Col xs={12} md={12}>
              <ListGroup variant="flush" className="cardTextLeft">
                <ListGroup.Item  className="bgTransparent cwhite">
                  Legislaturas (56)<span className="cardTextRight">1</span>
                </ListGroup.Item>
                <ListGroup.Item  className="bgTransparent cwhite">
                  Despesas (R$2.450.889,91)<span className="cardTextRight">23,3%</span>
                </ListGroup.Item>
                <ListGroup.Item  className="bgTransparent cwhite">
                  Discursos<span className="cardTextRight">345</span>
                </ListGroup.Item>
                <ListGroup.Item  className="bgTransparent cwhite">
                  Votações (609)<span className="cardTextRight">80,7%</span>
                </ListGroup.Item>
                <ListGroup.Item  className="bgTransparent cwhite">
                  Presenças (98/103)<span className="cardTextRight">94%</span>
                </ListGroup.Item>
                <ListGroup.Item  className="bgTransparent cwhite">
                  Leis Aprovadas (0 + 3)<span className="cardTextRight">1,5</span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={12} md={12}>
              <h4 className="cwhite">Informações Adicionais e Detalhadas</h4>
              <br/>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Despesas (R$2.450.889,91)</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Discursos (345)</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Presença (98)</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Proposições Aprovadas (0)</Accordion.Header>
                  <Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Proposições Relatadas (3)</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush" className="cardTextLeft">
                      <ListGroup.Item action>
                        PL-5029/2020<span className="cardTextRight">link</span>
                      </ListGroup.Item>
                      <ListGroup.Item action>
                        PL-3877/2020<span className="cardTextRight">link</span>
                      </ListGroup.Item>
                      <ListGroup.Item action>
                        PL-1282/2020<span className="cardTextRight">link</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>

  </div>
);

TopTrumps.propTypes = {};

TopTrumps.defaultProps = {};

export default TopTrumps;
