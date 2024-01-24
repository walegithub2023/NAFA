import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const cardStyle = {
  width: "16rem",
  textAlign: "center",
  border: "1px solid #ced4da",
  borderRadius: "3px", // Add border-radius for a rounded corner
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
  paddingBottom: "25px",
  height: "210px",
  backgroundColor: "",
};

const iconStyle = {
  margin: "20px auto",
  fontSize: "150px",
  paddingTop: "12px",
};

const linkStyle = {
  textDecoration: "none",
};

const Archive = () => {
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
            marginTop: "50px",
          }}
        >
          {/* Main content goes here */}
          <Row>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivesignaldocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>SIGNAL</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>LOOSE MINUTE</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>LETTER</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>MEMO</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>MINUTES OF MEETING</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>ELECTRONIC SHORT MSG</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>ADMIN ORDERS</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>INSTR FOR TAC EX</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>CONFIRMATORY NOTES</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text>EXTIMATE PROCESS</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "125px" }}>
              <Link to="/archivedocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "200%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text> ANNEXES & APPENDICES</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <Link to="/archivefloatdocument" style={linkStyle}>
                <Card style={cardStyle}>
                  <FaFolderOpen style={iconStyle} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "100%", marginTop: "-13px" }}
                    ></Card.Title>
                    <Card.Text> FLOAT</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Archive;
