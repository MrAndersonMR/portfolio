/*  */

import React, { Component } from "react";
import { render } from "react-dom";
import { Scroller, Section } from "react-fully-scrolled";

/* import { useNavigation } from "@react-navigation/native"; */

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

import $ from 'jquery';

import "./RemoteTeamsPage.css";

//let navigate = useNavigate();


import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

function sendImage(file) {

  console.log(file.target.files[0]);

  const creds = {accessKeyId: "AKIARVN2XQEDLNX53XWC", secretAccessKey: "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"};

  const target = { Bucket: "storage-files-general-use", Key: file.target.files[0].name, Body: file.target.files[0] };
  try {
    const parallelUploads3 = new Upload({
      client: new S3Client({region: "sa-east-1", credentials: creds}),
      leavePartsOnError: false, // optional manually handle dropped parts
      params: target,
    });

    parallelUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });

    parallelUploads3.done();
  } catch (e) {
    console.log(e);
  }

}

/* function RootFunction () {
  const navigation = useNavigation();
  return <RemoteTeamsPage navigation={navigation} />
} */

class RemoteTeamsPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { navigate } = this.props;

    return (
      <div /* style={{ backgroundColor: "black" }} */>
        
        <Navbar  /* bg="dark" */ variant="light" fixed="top">
          <Container className="contNav">
          <Navbar.Brand className="mainBrand" href="#home" style={{ display: "flex", alignItems: "center" }}>
            {/* <div className="borderImage" style={{ border: "30px solid", borderImage: "url('https://a3.vnda.com.br/tucumbrasil/2019/04/25/pk-qd-000005-quadro-parakana-7537.jpg?v=1556228187') 80 80 80 80 / 10px 10px 10px 10px round", /* borderImage: 'repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60', / /* padding: "20px 20px 20px 40px" / }}> */}
            <p className="title title-border" style={{ fontFamily: "'Jost', sans-serif", fontSize: "2rem", letterSpacing: ".25rem", fontWeight: 200, textAlign: "right", color: "#ED047A" /* , lineHeight: "0.9" */ }}><mark className="markT markColorT" style={{ backgroundColor: "transparent", color: "#ED047A" }}>MA{/* <br/> */}<span style={{ letterSpacing: ".125rem", fontWeight: 300 }}>RA</span>{/* <br/> */}<span style={{ letterSpacing: "-.125rem", fontWeight: 800 }}>CU</span>{/* <br/> */}<span style={{ letterSpacing: "-.25rem", fontWeight: 900 }}>YA</span></mark></p>
              <Figure style={{ marginBottom: "0" /* margin: "-2rem 0 0 -10.5rem" */ }}>
                <Figure.Image
                  width="35px"
                  height="35px"
                  alt=""
                  style={{ marginBottom: "0", marginLeft: "-50px", marginRight: "140px", marginTop: "20px", /* filter: "drop-shadow(0px 0px 6px red)" */ }}
                  src={process.env.PUBLIC_URL + '/pf.svg'}
                  className="logo"
                />
              </Figure>
              <p className="subtitle" style={{ fontFamily: "'Inconsolata', monospace", fontSize: "1rem", /* letterSpacing: ".35rem", */ textAlign: "right", color: /* "white" */ "#FEAF1E" /* "#002b59" */, marginTop: "3rem", marginLeft: "-8.5rem", /* marginBottom: "0", textDecoration: "overline" */ /* , marginRight: ".75rem" */ }}><mark className="mark markColor" style={{ backgroundColor: "transparent", color: "#FEAF1E" }}>consulting</mark></p>
            {/* </div> */}
          </Navbar.Brand>
          <Navbar collapseOnSelect>
          <Nav className="navBar justify-content-end">
            <mark className="mark markColor" style={{ backgroundColor: "transparent", color: "#FEAF1E" }}><Nav.Link className="navBar" href="#home">Home</Nav.Link></mark>
            <mark className="mark markColor" style={{ backgroundColor: "transparent", color: "#FEAF1E" }}><Nav.Link className="navBar" /* onPress={() => {
            this.props.navigation.navigate('/about')
                    // now prop will be available here
            }} */ /* onClick={() => this.props.navigate('/about')} */>About</Nav.Link></mark>
            <mark className="mark markColor" style={{ backgroundColor: "transparent", color: "#FEAF1E" }}><Nav.Link className="navBar" href="#pricing">Contact</Nav.Link></mark>
          </Nav>
          </Navbar>
          </Container>
        </Navbar>

        <Scroller
          curPage={1}
          onBeforeScroll={(from, to) => { $(".mainBrand").addClass("fade-out") && $(".navBar").addClass("fade-out") }}
          onAfterScroll={ page => { $(".mainBrand").removeClass("fade-out") && $(".navBar").removeClass("fade-out") &&
            (page == 1) ? /* $(".logo").addClass("logoWhite") && */ $(".second").addClass("slide-in-bottom") && $(".mark").removeClass("subtitleBlack") && $(".title").addClass("title-border") && $(".mark").addClass("markColor") && $(".markT").addClass("markColorT") && $(".logo").removeClass("logoWhite") && $(".navBar").removeClass("navBarWhite") /* && $(".subtitle").addClass("subtitle-border") */ :
            (page == 2) ? ($(".second").addClass("slide-in-bottom") && $(".logo").addClass("logoWhite") /* && $(".mark").addClass("subtitleBlack") */ && $(".title").removeClass("title-border") && $(".mark").removeClass("markColor") && $(".markT").removeClass("markColorT") && $(".navBar").addClass("navBarWhite") /* && $(".subtitle").removeClass("subtitle-border") */) :
            (page == 3) ? ($(".third").addClass("slide-in-bottom") && $(".mark").removeClass("subtitleBlack") && $(".navBar").removeClass("navBarWhite") && $(".logo").removeClass("logoWhite") && $(".mark").removeClass("subtitleBlack") && $(".title").removeClass("title-border") /* && $(".subtitle").removeClass("subtitle-border") */) :
            (page == 4) ? ($(".fifth").addClass("slide-in-bottom") && $(".mark").addClass("subtitleBlack") && $(".logo").removeClass("logoWhite") && $(".markT").removeClass("titleWhite") && $(".logo").addClass("filterGreen") && $(".navBar").addClass("navBarWhite") /* && $(".logo").addClass("logoWhite") */ && $(".title").removeClass("title-border") && $(".navBar").removeClass("navBarWhite") /* && $(".subtitle").removeClass("subtitle-border") */) :
            (page == 5) ? ($(".fifth").addClass("slide-in-bottom") && $(".navBar").removeClass("navBarWhite") &&  $(".markT").removeClass("titleWhite") && $(".logo").removeClass("logoWhite") && $(".mark").removeClass("subtitleBlack") && $(".title").removeClass("title-border") && $(".rightBAnimation").addClass("slide-in-right") && $(".leftBAnimation").addClass("slide-in-left") /* && $(".subtitle").removeClass("subtitle-border") */) :
            (page == 6) ? ($(".sixth").addClass("slide-in-bottom") && $(".navBar").addClass("navBarWhite") &&  $(".markT").addClass("titleWhite") && $(".mark").addClass("subtitleBlack") && $(".title").removeClass("title-border") /* && $(".subtitle").removeClass("subtitle-border") */) :
            console.log('No page') }
          }
          isEnabled={true}
        >
          <Section>
            <Row xs={1} sm={2} style={{ height: "100vh", backgroundImage: "url(https://cdn.pixabay.com/photo/2015/07/10/15/13/architecture-839362_960_720.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} /* id="section1" */>
              <Col className="emptyMain" style={{ display: "flex", alignItems: "center" }}>
                {/* <input type="file" onChange={ e => sendImage(e) }/> */}
              </Col>
              <Col style={{ display: "flex", placeContent: "center space-around", alignItems: "flex-start", flexDirection: "column", justifyContent: "center", padding: "0 3rem 0 3rem" /* , marginLeft: "10rem" */ }} className="slide-in-right">
                <h1 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
                  BUILD YOUR <b>IT</b><br />TEAM WITH US!
                </h1>
                <h5 style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
                  Maracuya Consulting is a Recruiting Agency with the ambition to<br />
                  connecting advanced technology businesses with highly qualified<br />
                  IT Talent from Latin America.
                </h5>
                
                  {/* <Button variant="outline-dark" style={{ borderRadius: "1.5rem 0 0 0", margin: "20px 0 5px 0" }}>SEARCHING FOR A TALENT?</Button> */}
                  <Button variant="outline-dark" style={{ borderRadius: "0 0 1.5rem 0" }}>Contact Us &nbsp;</Button>
                
              </Col>
              
            </Row>
            <div className="shake-vertical" style={{ borderRadius: "5rem", width: "auto", height: "auto", marginTop: "-7rem", display: "flex", justifyContent: "center" }} /* variant="outline-dark" */ /* href="#section2" */>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
              </svg>
            </div>
          </Section>
          <Section>
            <Row xs={1} sm={2} className="message" style={{ height: "100vh", backgroundColor: "#4d22a8" }}>
              <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center", padding: "0 3rem 0 3rem"  }} className="second">
                <div className="divSecond">
                  <h1 style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "center" }}>Who is Maracuya Consulting?</h1>
                  <h2 style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "center" }}>
                    Maracuya Consulting is a diverse<br/>team of talented individuals with expertise in<br/>the global recruiting market.
                  </h2>
                </div>
              </Col>
              <Col className="passionFruitFlower" style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                <Figure style={{ marginBottom: "-4.5rem" /* margin: "-2rem 0 0 -10.5rem" */ }}>
                  <Figure.Image
                    width="400px"
                    height="400px"
                    alt=""
                    style={{ marginBottom: "5rem" }}
                    src={process.env.PUBLIC_URL + '/passionFlower.svg'}
                    className=""
                  />
                </Figure>
              </Col>
            </Row>
          </Section>
          <Section>
            { console.log(document.documentElement.scrollTop) }
            <Row xs={1} sm={2} style={{ height: "100vh"/* , backgroundColor: "#fee06b" */ }}>
              <Col style={{ display: "flex", alignItems: "center", opacity: "40%", justifyContent: "flex-end" }}>
                {/* <Figure style={{ }}>
                  <Figure.Image
                    width="350px"
                    height="350px"
                    alt=""
                    style={{  }}
                    src={process.env.PUBLIC_URL + '/panel.svg'}
                    className=""
                  />
                </Figure> */}
              </Col>
              <Col style={{ display: "flex", placeContent: "center space-around", alignItems: "flex-start", flexDirection: "column", justifyContent: "center", padding: "0 3rem 0 3rem" }} className="third">
                <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
                  Tailerod Approach
                </h3>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
                  At Maracuya we pride ourselves on taking a tailored approach to each<br/>
                  one of our clients positions. We take great lenghs to understand your<br/>
                  compamy, team, and business goals, in order to find you the perfect candidate.
                </h6>
                <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
                  Access to an outstanding Talent Pool
                </h3>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
                  We are dedicated to bring professional attention to the highly skilled talent across Latin America.<br/>
                  Their talent, dedication and soft skills are a great contribution to your business. 
                </h6>
                <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
                  Action in real time
                </h3>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
                  Working with us means getting results in real-time (incl agile in the text).
                </h6>
                <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
                  We value integrity
                </h3>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
                  Whether working with clients, candidates or our own employees we see<br/>
                  ourselves as a team and act with principle, we treat everyone with respect.
                </h6>
                <h3 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left" }}>
                  Dedication
                </h3>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", textAlign: "left" }}>
                  We work tirelessly to shape and match needs that result in positive<br/>
                  long-term relationships.
                </h6>
                {/* <br/>
                <Button className="contactUs" style={{ borderRadius: "5rem" }} variant="outline-dark">Contact Us</Button> */}
              </Col>
            </Row>
          </Section>
          <Section>
            <Container className="contTeam">
            <Row className="line" style={{ height: "50vh" }}>
              <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center", backgroundColor: "#fee06b", alignItems: "center", justifyContent: "flex-end", paddingBottom: "1.5rem" }} className="fifth">
                <div className="avCard" style={{ textAlign: "center", alignItems: "center" }}>
                  <h2 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "right", textDecorationLine: "overline" }}>
                    Elisa
                  </h2>
                  <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", color: "gray" }}>
                    Business Leader
                  </h6>
                  <Figure>
                    <Figure.Image
                      className="avatar"
                      width={171}
                      height={180}
                      src="https://media-exp1.licdn.com/dms/image/C4D03AQEHXsw8RRmMlw/profile-displayphoto-shrink_800_800/0/1569443812062?e=1656547200&v=beta&t=sGXNRSY0ITbpNtpxM_xxMvpPEXm1WgW3oQwlviy7GF8"
                    />
                  </Figure>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                      <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
                      <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
                    </svg>{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" onClick={()=> window.open("https://www.linkedin.com/in/elisa-fischer/", "_blank")}>
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                </div>
              </Col>
              <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center", alignItems: "center", justifyContent: "flex-end", paddingBottom: "1.5rem" }} className="fifth">
                <div className="avCard" style={{ textAlign: "center", alignItems: "center" }}>
                <h2 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left", textDecorationLine: "overline" }}>
                  Caroline
                </h2>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", color: "gray" }}>
                  Operational Leader
                </h6>
                <Figure>
                  <Figure.Image
                    className="avatar"
                    width={171}
                    maxHeight={180}
                    src="https://lmhofmeyr.co.za/wp-content/uploads/2016/09/Mona_Lisa_face_800x800px-300x300.jpg"
                  />
                </Figure>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                    <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
                    <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
                  </svg>{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" onClick={()=> window.open("https://www.linkedin.com/in/elisa-fischer/", "_blank")}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </div>
                </div>
              </Col>
            </Row>
            <Row className="line" style={{ height: "50vh" }}>
              <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center", alignItems: "center", justifyContent: "flex-start", paddingTop: "1.5rem" }} className="fifth">
              <div className="avCard" style={{ textAlign: "center", alignItems: "center" }}>
                <h2 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "right", textDecorationLine: "overline" }}>
                  David
                </h2>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", color: "gray" }}>
                  Talent Expert
                </h6>
                <Figure>
                  <Figure.Image
                    className="avatar"
                    width={171}
                    height={180}
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGJ1GUKpTZ8Ow/profile-displayphoto-shrink_800_800/0/1642703988023?e=1656547200&v=beta&t=nTPzF5e70AlIfn0c_Y7Mhf7cMwz08PPnFNge09Q66WY"
                  />
                </Figure>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                    <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
                    <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
                  </svg>{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" onClick={()=> window.open("https://www.linkedin.com/in/david-antonio-902902144/", "_blank")}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </div>
                </div>
              </Col>
              <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center", backgroundColor: "#fee06b", alignItems: "center", justifyContent: "flex-start", paddingTop: "1.5rem" }} className="fifth">
              <div className="avCard" style={{ textAlign: "center", alignItems: "center" }}>
                <h2 style={{ fontFamily: "'Inconsolata', monospace", textAlign: "left", textDecorationLine: "overline" }}>
                  Patrick
                </h2>
                <h6 className="sMessage" style={{ fontFamily: "'Antic', sans-serif", color: "gray" }}>
                  Talent Expert
                </h6>
                <Figure>
                  <Figure.Image
                    className="avatar"
                    width={171}
                    height={180}
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGn0HPLfQqF9Q/profile-displayphoto-shrink_800_800/0/1645458324389?e=1656547200&v=beta&t=mThHI_JWJpP-nx7Y12jH2M7NCw5tZlKKzBdVxwIe6eI"
                  />
                </Figure>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                    <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
                    <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
                  </svg>{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" onClick={()=> window.open("https://www.linkedin.com/in/patrick-denison-51761748/", "_blank")}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </div>
                </div>
              </Col>
            </Row>
            </Container>
          </Section>
          <Section>
            <Row style={{ height: "100vh" }}>
              {/* <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center" }} className="fourth">
                
                <h1 style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "center" }}>Who is Maracuya Consulting?</h1>
                <h2 style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "center" }}>
                  Maracuya Consulting is a diverse<br/>team of talented individuals with expertise in<br/>the global recruiting market.
                </h2>
              </Col> */}
              <Col style={{ display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h3>for you, Candidate</h3>
                <Button className="rightBAnimation" variant="outline-dark" style={{ borderRadius: "0 0 0 1.5rem", marginRight: "3rem" }}>&nbsp; Contact Us</Button>
                <br/>
                <Button className="leftBAnimation" variant="outline-dark" style={{ borderRadius: "0 1.5rem 0 0", marginLeft: "3rem" }}>Contact Us &nbsp;</Button>
                <h3>or for your Company</h3>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row style={{ height: "100vh" }}>
              <Col style={{ backgroundColor: "#ff3b5a", height: "50vh", display: "flex", placeContent: "center space-around", flexDirection: "column", justifyContent: "center" }}>
                <Container style={{ display: "flex", placeContent: "center space-around", alignItems: "flex-start", flexDirection: "column", justifyContent: "center" }} className="sixth">
                  <h1 style={{ fontFamily: "'Inconsolata', monospace" }}>
                    DISCOVER<br/>
                    YOUR<br/>
                    POTENTIAL
                  </h1>
                  <div>
                    <Button className="" style={{ borderRadius: "15rem", paddingBottom: "12px", paddingTop: "12px" }} variant="outline-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                        <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
                        <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
                      </svg>
                    </Button>{" "}
                    <Button className="" style={{ borderRadius: "15rem", paddingBottom: "12px", paddingTop: "12px" }} variant="outline-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                    </Button>{" "}
                    <Button className="" style={{ borderRadius: "15rem", paddingBottom: "12px", paddingTop: "12px" }} variant="outline-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </Button>
                  </div>
                </Container>
              </Col>
              <Row style={{ backgroundColor: "#2e2c2b", height: "50vh" }}>
                <Row style={{ textAlign: "center" }}>
                  {/* <Figure style={{ marginBottom: "0" /* margin: "-2rem 0 0 -10.5rem" / }}>
                    <Figure.Image
                      width="200px"
                      height="200px"
                      alt=""
                      style={{ float: "right", /* marginBottom: "-150px", /
                        marginTop: "-140px" /* "-170px" /,
                         }}
                      src={process.env.PUBLIC_URL + '/passionFlower2.svg'}
                      className="pf" /* rotate-center / 
                    />
                  </Figure> */}
                </Row>
                <Col style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "left", display: "flex", alignItems: "flex-end" }}>
                  
                  <Container style={{ display: "flex", margin: "1.5rem" }}>
                    <div className="borderImage" style={{ width: "200px", backgroundImage: "url(" + process.env.PUBLIC_URL + '/pf.svg' + ")", backgroundRepeat: "no-repeat", backgroundSize: "75px 100%", backgroundPosition: "center center", border: "10px solid", borderImage: "url('https://site.groupe-psa.com/content/uploads/sites/3/2016/12/white-background-2.jpg') 0 80 0 80 / 0 10px 0 0px round", /* borderImage: 'repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60', */ padding: "0px 20px 0px 40px" }}> {/* https://a3.vnda.com.br/tucumbrasil/2019/04/25/pk-qd-000005-quadro-parakana-7537.jpg?v=1556228187 */}
                  
                      <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", letterSpacing: ".25rem", fontWeight: 200, textAlign: "right", color: "#ED047A" /* , lineHeight: "0.9" */ }}>MA<br/><span style={{ letterSpacing: ".125rem", fontWeight: 300 }}>RA</span><br/><span style={{ letterSpacing: "-.125rem", fontWeight: 800 }}>CU</span><br/><span style={{ letterSpacing: "-.25rem", fontWeight: 900 }}>YA</span></h1>
                      <h2 style={{ fontFamily: "'Inconsolata', monospace", fontSize: "1rem", textAlign: "right", color: "#FEAF1E", marginTop: "-.5rem" }}>consulting</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px", justifyContent: "flex-end"}}>
                      <h4>Business Locations</h4>
                      <h6>Berlin — Germany</h6>
                      <h6>Buenos Aires — Argentina</h6>
                    </div>
                  </Container>
                </Col>
                {/* <Col style={{ display: "flex" }}>
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
                </Col> */}
                <Col style={{ display: "flex" }}>
                  <Container style={{ display: "flex", placeContent: "center", flexDirection: "column" }}>
                    <h1 style={{ fontFamily: "'Inconsolata', monospace", color: "white", textAlign: "left" }}>
                      About us
                    </h1>
                    <h6 style={{ fontFamily: "'Antic', sans-serif", color: "white", textAlign: "left" }}>
                      Impressium<br/>data safety statement<br/>terms and conditions
                    </h6>
                  </Container>
                </Col>
              </Row>
            </Row>
          </Section>
        </Scroller>
      </div>
    );
  }
}

render(<RemoteTeamsPage />, document.getElementById("root"));

export default RemoteTeamsPage;