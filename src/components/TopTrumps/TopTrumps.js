//import React, { useState, useRef, useEffect } from 'react';
import { useState, useEffect } from 'react';
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

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ProgressBar from 'react-bootstrap/ProgressBar';

import './TopTrumps.css';

import * as d3 from 'd3';

import { geoMercator, geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"
//import { queue } from 'd3';

import ReactDOM from "react-dom";
import { Canvas } from 'react-three-fiber';
import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

import { StlViewer } from "./stl-viewer";

Animation.propTypes = {};

Animation.defaultProps = {};

//import "node_modules\svg.js\dist\svg.js";

var partidos = ["PT", "PSDB", "PDT", "MDB", "DEM", "PSL"];
var f = [[],[],[],[],[]];

for (var i = 0; i < 5; i++) {
  var x = 0;
  while (true) {
    var y = Math.floor(Math.random() * Math.floor(Math.random() * 100) + 1) + 1;
    if (x + y < 100) {
      x += y;
      f[i].push(y)
    } else {
      y = 100 - x;
      f[i].push(y)
      break;
    }
  }
}

/*const ref = useRef()
useEffect(() => {
  const svgElement = d3.select(ref.current)
  svgElement.append("circle")
    .attr("cx", 150)
    .attr("cy", 70)
    .attr("r",  50)
}, [])*/

// The svg
/*var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(400)
  .center([-50,-15])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
  .range(d3.schemeBlues[7]);

// Load external data and boot
d3.queue()
  .defer(d3.json, "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=minima&intrarregiao=regiao")
  .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function(d) { data.set(d.code, +d.pop); })
  .await(ready);

Promise.all([
  d3.json('https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=minima&intrarregiao=regiao'),
  d3.csv('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv', function(d) { data.set(d.code, +d.pop); })
]).then(() => { ready() })



  function ready(error, topo) {

    var polygons = [];

    for (var i=0; i < topo.features.length; ++i) {

      if(topo.features[i].geometry.type === "Polygon") {

        topo.features[i].geometry.coordinates[0] = topo.features[i].geometry.coordinates[0].reverse();
        polygons.push(topo.features[i]);

      } else if(topo.features[i].geometry.type === "MultiPolygon") {

        for(var j=0; j<topo.features[i].geometry.coordinates.length;++j) {

          topo.features[i].geometry.coordinates[j][0] = topo.features[i].geometry.coordinates[j][0].reverse();

        }

        polygons.push(topo.features[i]);

      }

    }

    let label = function(name, codarea) {

      document.getElementById("demo").innerHTML = name;
      document.getElementById("demo1").innerHTML = "";

      for (i = 0; i < f[codarea].length; i++) {

        if (i < partidos.length)
          document.getElementById("demo1").innerHTML += partidos[i] + " ";

        document.getElementById("demo1").innerHTML += f[codarea][i];
        document.getElementById("demo1").innerHTML += "%, ";

      }

    }

    let mouseOver = function(d) {

      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)

      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        //.style("stroke", "black")

      console.log(d);

      switch (d.properties.codarea) {

        case "1":
          label("Norte", 0);
          break;
        case "2":
          label("Nordeste", 1);
          break;
        case "3":
          label("Sudeste", 2);
          break;
        case "4":
          label("Sul", 3);
          break;
        case "5":
          label("Centro-Oeste", 4);
          break;
        default:
          document.getElementById("demo").innerHTML = "-";
          document.getElementById("demo1").innerHTML = "-";

      }

    }

    let mouseLeave = function(d) {

      d3.selectAll(".Country")
        .transition()
        //.duration(200)
        .style("opacity", 1)

      d3.select(this)
        .transition()
        .duration(200)
        //.style("stroke", "transparent")
      document.getElementById("demo").innerHTML = "";
      document.getElementById("demo1").innerHTML = "";
      
    }

    // Draw the map
    svg.append("g")
      .selectAll("path")
      .data(topo.features)
      .enter()
      .append("path")

      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )

      // set the color of each country
      .attr("fill", function (d) {
        d.total = data.get(d.properties.codarea) || 0;
        return "blue";
      })
      .style("stroke", "white")
      .attr("stroke-width", .5)
      .attr("class", function(d){ return "Country" } )
      .style("opacity", 1)
      .on("mouseover", mouseOver )
      .on("mouseleave", mouseLeave )

  }*/

  const cities = [
    { name: "Tokyo",          coordinates: [139.6917,35.6895],  population: 37843000 },
    { name: "Jakarta",        coordinates: [106.8650,-6.1751],  population: 30539000 },
    { name: "Delhi",          coordinates: [77.1025,28.7041],   population: 24998000 },
    { name: "Manila",         coordinates: [120.9842,14.5995],  population: 24123000 },
    { name: "Seoul",          coordinates: [126.9780,37.5665],  population: 23480000 },
    { name: "Shanghai",       coordinates: [121.4737,31.2304],  population: 23416000 },
    { name: "Karachi",        coordinates: [67.0099,24.8615],   population: 22123000 },
    { name: "Beijing",        coordinates: [116.4074,39.9042],  population: 21009000 },
    { name: "New York",       coordinates: [-74.0059,40.7128],  population: 20630000 },
    { name: "Guangzhou",      coordinates: [113.2644,23.1291],  population: 20597000 },
    { name: "Sao Paulo",      coordinates: [-46.6333,-23.5505], population: 20365000 },
    { name: "Mexico City",    coordinates: [-99.1332,19.4326],  population: 20063000 },
    { name: "Mumbai",         coordinates: [72.8777,19.0760],   population: 17712000 },
    { name: "Osaka",          coordinates: [135.5022,34.6937],  population: 17444000 },
    { name: "Moscow",         coordinates: [37.6173,55.7558],   population: 16170000 },
    { name: "Dhaka",          coordinates: [90.4125,23.8103],   population: 15669000 },
    { name: "Greater Cairo",  coordinates: [31.2357,30.0444],   population: 15600000 },
    { name: "Los Angeles",    coordinates: [-118.2437,34.0522], population: 15058000 },
    { name: "Bangkok",        coordinates: [100.5018,13.7563],  population: 14998000 },
    { name: "Kolkata",        coordinates: [88.3639,22.5726],   population: 14667000 },
    { name: "Buenos Aires",   coordinates: [-58.3816,-34.6037], population: 14122000 },
    { name: "Tehran",         coordinates: [51.3890,35.6892],   population: 13532000 },
    { name: "Istanbul",       coordinates: [28.9784,41.0082],   population: 13287000 },
    { name: "Lagos",          coordinates: [3.3792,6.5244],     population: 13123000 },
    { name: "Shenzhen",       coordinates: [114.0579,22.5431],  population: 12084000 },
    { name: "Rio de Janeiro", coordinates: [-43.1729,-22.9068], population: 11727000 },
    { name: "Kinshasa",       coordinates: [15.2663,-4.4419],   population: 11587000 },
    { name: "Tianjin",        coordinates: [117.3616,39.3434],  population: 10920000 },
    { name: "Paris",          coordinates: [2.3522,48.8566],    population: 10858000 },
    { name: "Lima",           coordinates: [-77.0428,-12.0464], population: 10750000 },
  ]

  const projection = geoMercator()
  .scale(400)
  .center([-50,-15])
  .translate([800 / 2, 500 / 2])
  /*geoEqualEarth()
  .scale(160)
  .translate([ 800 / 2, 450 / 2 ])*/

const TopTrumps = () => {

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  
  var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
  renderer.setClearColor( 0x000000, 0 );

  renderer.setSize(window.innerWidth*0.3, window.innerHeight*0.3); //(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 3;
    camera.position.y = 1.5;
    camera.position.z = 5;

    var light = new THREE.DirectionalLight(0xefefff, 3);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    var light = new THREE.DirectionalLight(0xffefef, 3);
    light.position.set(-1, -1, -1).normalize();
    scene.add(light);

    window.addEventListener("resize", function() {
      let width = window.innerWidth;
      let height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    var loader = new GLTFLoader();
    var mixer;
    var model;
    loader.load(
      "https://poliedros.github.io/catalog-app/Samba.glb", function( gltf ) {

        //shadows and materials
        gltf.scene.traverse( function( node ) {
            if ( node instanceof THREE.Mesh ) { 
              node.castShadow = true; 
              node.material.side = THREE.DoubleSide;
            }
          }
        );

        model = gltf.scene;
        model.scale.set(0.025,0.025,0.025);
        scene.add(model);

        console.log(gltf.animations); //shows all animations imported into the dopesheet in blender

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        document.body.addEventListener("click", kill);
        function kill() {
        }
      }
    );

    console.log("Loader");
    console.log(loader);

    var clock = new THREE.Clock();
    function render() {
      requestAnimationFrame(render);
      var delta = clock.getDelta();
      if (mixer != null) mixer.update(delta);
      if (model) model.rotation.y += 0.025;

      renderer.render(scene, camera);
    }

    render();

  const [geographies, setGeographies] = useState([])

  var polygons = [];

  /*var topo
  debugger
  useEffect(() => {
    
    fetch("https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=minima&intrarregiao=regiao")
      .then(response => {
        topo = response.json();
        
        console.log("Response");
        console.log(response);
        /*if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          setGeographies(feature(worlddata, worlddata).features)
        })*
      })
  }, [])

  for (var i=0; i < topo.features.length; ++i)
  {
      if(topo.features[i].geometry.type === "Polygon") {
          topo.features[i].geometry.coordinates[0] = topo.features[i].geometry.coordinates[0].reverse();
          //console.log(topo.features[i].geometry.coordinates);
          polygons.push(topo.features[i]);
      }
      else if(topo.features[i].geometry.type === "MultiPolygon")
      {
          for(var j=0; j<topo.features[i].geometry.coordinates.length;++j)
          {
              topo.features[i].geometry.coordinates[j][0] = topo.features[i].geometry.coordinates[j][0].reverse();
          }
          //console.log(topo.features[i].geometry.coordinates)
          polygons.push(topo.features[i]);
      }
  }

  console.log(topo)

  debugger*/
  /*useEffect(() => {
    fetch("https://unpkg.com/world-atlas@1.1.4/world/110m.json")
      .then(response => {
        debugger
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        debugger
        response.json().then(worlddata => {
          setGeographies(feature(worlddata, worlddata.objects.countries).features)
        })
      })
  }, [])*/
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=maxima&intrarregiao=UF")
      .then(response => {
        //debugger
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        
        response.json().then(worlddata => {

          for (var i=0; i < worlddata.features.length; ++i)
          {
              if(worlddata.features[i].geometry.type === "Polygon") {
                worlddata.features[i].geometry.coordinates[0] = worlddata.features[i].geometry.coordinates[0].reverse();
                  //console.log(topo.features[i].geometry.coordinates);
                  polygons.push(worlddata.features[i]);
              }
              else if(worlddata.features[i].geometry.type === "MultiPolygon")
              {
                  for(var j=0; j<worlddata.features[i].geometry.coordinates.length;++j)
                  {
                    worlddata.features[i].geometry.coordinates[j][0] = worlddata.features[i].geometry.coordinates[j][0].reverse();
                  }
                  //console.log(topo.features[i].geometry.coordinates)
                  polygons.push(worlddata.features[i]);
              }
          }

          console.log("FEATURE")
          console.log(worlddata)
          setGeographies(worlddata.features)
        })
        //debugger
      })
  }, [])
  debugger
  const handleCountryClick = countryIndex => {
    console.log("Clicked on country: ", geographies[countryIndex])
    
  }

  const handleMarkerClick = i => {
    console.log("Marker: ", cities[i])
  }

  return (<div>

    {/*<StlViewer />*/}
    
    <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
      <g className="codarea">
        {
          geographies.map((d,i) => (
            <path
              key={ `path-${ i }` }
              d={ geoPath().projection(projection)(d) }
              className="country"
              fill={ `rgba(38,50,56,${ 1 / geographies.length * i})` }
              stroke="#FFFFFF"
              strokeWidth={ 0.5 }
              onClick={ () => handleCountryClick(i) }
            />
          ))
        }
      </g>
      <g className="markers">
        {
        cities.map((city, i) => (
        <circle
          cx={ projection(city.coordinates)[0] }
          cy={ projection(city.coordinates)[1] }
          r={ city.population / 3000000 }
          fill="#E91E63"
          stroke="#FFFFFF"
          className="marker"
          onClick={ () => handleMarkerClick(i) }
        />
        ))
        }
      </g>
    </svg>

    {/*<svg
      ref={ref}
    />*/}

    <svg>
      <circle
        cx="150"
        cy="77"
        r="40"
      />
    </svg>

    <Modal.Dialog className="swing-in-bottom-bck">

      <Modal.Body className="show-grid">
        <Container>

          <Row className="middle">

            <Col xs={12} md={12}>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingInputCustom"
                      type=""
                      placeholder="Nome do parlamentar"
                    />
                    <label htmlFor="floatingInputCustom">Nome</label>
                  </Form.Floating>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <FloatingLabel controlId="floatingSelectGrid" label="Partido">
                    <Form.Select aria-label="Floating label select example">
                      <option>todos</option>
                      <option value="DEM">DEM</option>
                      <option value="PT">PT</option>
                      <option value="PV">PV</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Todos"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Maculino"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="Feminino"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Governismo</Form.Label>
                  <Form.Range />
                  <Form.Range />
                </Form.Group>
              </Row>

            </Col>
          </Row>
          
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">Procurar</Button>
      </Modal.Footer>
    </Modal.Dialog>

    <Container className="cardContainerCenter swing-in-bottom-bck">
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

    <Modal.Dialog className="swing-in-bottom-bck">
      <Modal.Header closeButton closeVariant="white" className="bg-dark cwhite">
        <Modal.Title>JOICE CRISTINA HASSELMANN</Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid cardBgImage">
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

    <Container>
      <ProgressBar animated variant="dark" now={45} />
    </Container>
    <br/>
    <div id="canvas" />
    <br/>

    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "right" }}>
      <div>
      <div>
        <p className="superTrunfo half-color" style={{ color: "white", fontSize: "64px" }} > SUPER </p>
        {' '}
        <span className="superTrunfo" style={{ color: "white", fontSize: "64px" }}>TR</span>
        <span className="superTrunfo half-color" attribute="U">U</span>
        <span className="superTrunfo half-color3" attribute="N">N</span>
        <span className="superTrunfo half-color4" attribute="F" style={{ color: "#d9d9d9", fontSize: "64px" }}>F</span>
        <span className="superTrunfo half-color2" attribute="O">O</span>
      </div>
      <h3 style={{ color: "white", display: "flex", justifyContent: "center" }} className="osPoliticos" >os Políticos</h3>
      </div>
    </div>
    

  </div>);
}

TopTrumps.propTypes = {};

TopTrumps.defaultProps = {};

export default TopTrumps;
