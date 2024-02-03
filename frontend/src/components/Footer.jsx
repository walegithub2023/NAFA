import React from "react";

import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "rgb(33, 37, 41)",
        color: "white",
        width: "100%",
        textAlign: "center",
        marginTop: "50px",
        padding: "2px",
      }}
    >
      <Row style={{ padding: "50px" }}>
        <Col xl={3} className="text-center">
          <h5>ABOUT ARCHIVE</h5>
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
            USEFUL LINKS
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
            CONTACT INFORMATION
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
            SERVICES
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
        <p>&copy; NAF Alpha Dev Team @ 2023</p>
      </Row>
    </Container>
  );
};

export default Footer;
