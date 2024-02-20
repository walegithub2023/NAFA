import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import InfoCard from "../components/InfoCard";
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

const row2 = {
  width: "105%",
  marginTop: "50px",
  marginLeft: "3px",
};

const rowSpecial = {
  width: "105%",
  marginLeft: "3px",
};

// Create a functional component for the dashboard
const Dashboard = () => {
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
            marginTop: "34px",
          }}
        >
          {/* Main content goes here */}
          <Row style={rowSpecial}>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <InfoCard />
            </Col>
          </Row>

          <Row style={row2}>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <InfoCard />
            </Col>
          </Row>
          <Row style={row2}>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <InfoCard />
            </Col>
          </Row>

          <Row style={row2}>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "48px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <InfoCard />
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Dashboard;
