import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import img1 from "../images/img1.jpg";

const backgroundStyle = {
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
  zIndex: "-1",
};

const Home = () => {
  return (
    <Container fluid>
      <Row id="row1">
        <Header />
      </Row>
      <Row>
        <Col xs={12} className="text-center" style={backgroundStyle}>
          <h1 className="title1" style={{ marginTop: "50px" }}>
            NIGERIAN AIR FORCE DOCUMENT ARCHIVE
          </h1>
          <p
            className="lead"
            style={{
              width: "80%",
              textAlign: "justify",
              margin: "20px auto",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborumLorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborumLorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et
          </p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          color: "white",
          padding: "30px",
          paddingBottom: "150px",
        }}
      >
        <div>
          <h5
            className="title1"
            style={{
              marginTop: "10px",
              backgroundColor: "rgb(33, 37, 41)",
              color: "white",
              padding: "30px",
              textAlign: "center",
            }}
          >
            ARCHIVE's USER INTERFACES
          </h5>
        </div>
        <Col xl={3} className="text-center">
          <div
            style={{
              marginTop: "-10px",
              backgroundColor: "rgb(33, 37, 41)",
              color: "white",
              padding: "30px",
            }}
          >
            <img src={logo5} alt="Home page" width={300} height={300} />
          </div>
        </Col>
        <Col xl={3} className="text-center">
          <div
            style={{
              marginTop: "-10px",
              backgroundColor: "rgb(33, 37, 41)",
              color: "white",
              padding: "30px",
            }}
          >
            <img src={logo5} alt="Home page" width={300} height={300} />
          </div>
        </Col>
        <Col xl={3} className="text-center">
          <div
            style={{
              marginTop: "-10px",
              backgroundColor: "rgb(33, 37, 41)",
              color: "white",
              padding: "30px",
            }}
          >
            <img src={logo5} alt="Home page" width={300} height={300} />
          </div>
        </Col>
        <Col xl={3} className="text-center">
          <div
            style={{
              marginTop: "-10px",
              backgroundColor: "rgb(33, 37, 41)",
              color: "white",
              padding: "30px",
            }}
          >
            <img src={logo5} alt="Home page" width={300} height={300} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <h3 className="title1" style={{ marginTop: "100px" }}>
            ACHIEVE WITH NAF DOCUMENT ARCHIVE
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <div>
            <img src={logo4} alt="Describe" width="100%" />
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "50px" }}>
        <Col xl={3} className="text-center">
          <h5>INCREASE EFFICIENCY</h5>
          <p className="lead" style={{ textAlign: "justify", margin: "auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Col>
        <Col xl={3} className="text-center">
          <h5 className="" style={{ marginTop: "" }}>
            SECURITY COMPLIANCE
          </h5>
          <p className="lead" style={{ textAlign: "justify", margin: "auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Col>
        <Col xl={3} className="text-center">
          <h5 className="" style={{ marginTop: "" }}>
            REDUCE COSTS
          </h5>
          <p className="lead" style={{ textAlign: "justify", margin: "auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Col>
        <Col xl={3} className="text-center">
          <h5 className="" style={{ marginTop: "" }}>
            BOOST THROUGHPUT
          </h5>
          <p className="lead" style={{ textAlign: "justify", margin: "auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Home;
