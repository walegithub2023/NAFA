import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";

const row1 = {
  paddingRight: "0px",
  marginRight: "-50px",
  backgroundImage: `url(${img6})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
  zIndex: "-1",
};

const errorDiv = {
  backgroundColor: "rgb(33, 37, 41)",
  color: "white",
  textAlign: "center",
  margin: "50px auto",
  padding: "100px",
  width: "82%",
};
const paragraph1 = {
  fontSize: "300%",
  fontFamily: "Garamond",
};

const paragraph2 = {
  fontSize: "130%",
  marginTop: "50px",
};

// Create a functional component for the dashboard
const Page404 = () => {
  return (
    <div style={row1}>
      <Header />

      <Row>
        <Col md={2}>
          <SideNavbar />
        </Col>
        <Col
          md={10}
          className="ml-sm-auto col-lg-9 px-md-4"
          style={{
            marginTop: "40px",
          }}
        >
          {/* Main content goes here */}
          <div style={errorDiv}>
            <p style={paragraph1}>404!</p>
            <p style={paragraph2}>
              REQUESTED PAGE NOT AVAILABLE AT THE MOMENT. PLEASE TRY AGAIN
              LATER!
            </p>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Page404;
