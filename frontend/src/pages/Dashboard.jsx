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
            marginTop: "40px",
          }}
        >
          {/* Main content goes here */}
          <Row>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }}>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
              <InfoCard />
            </Col>
            <Col md={2} style={{ marginRight: "41px" }}>
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
