import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
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

// Create a functional component for the dashboard
const RetrieveDocument = () => {
  const formStyle = {
    border: "1px solid #ced4da",
    borderRadius: "3px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "80px",
    paddingBottom: "60px",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    backgroundColor: "rgb(33, 37, 41)",
    color: "white",
    height: "50px",
    border: "0px solid rgb(33, 37, 41)",
  };

  const headerStyle = {
    border: "1px solid #D3D3D3",
    fontFamily: "Roboto",
    padding: "10px",
  };

  const formInput = {};

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
            marginTop: "0px",
          }}
        >
          {/* Main content goes here */}
          <Row className="justify-content-md-center mt-4">
            <Col md={11}>
              <Form style={formStyle}>
                <h4 className="text-center mb-4" style={headerStyle}>
                  RETRIEVE DOCUMENT
                </h4>

                <Form.Group controlId="subject">
                  <Form.Label>Subject:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    style={formInput}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="preref">
                    <Form.Label>Pre-Ref:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter pre-ref"
                      style={formInput}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="forRefNo">
                    <Form.Label>Ref No:</Form.Label>
                    <Form.Select style={formInput}>
                      <option>-Select-</option>
                      <option>321</option>
                      <option>312</option>
                      <option>530</option>
                      <option>531</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="ref">
                    <Form.Label>Post-Ref:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter ref"
                      style={formInput}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="ref">
                    <Form.Label>Ref:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter ref"
                      style={formInput}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="unit">
                    <Form.Label>Unit:</Form.Label>
                    <Form.Select style={formInput}>
                      <option>-Select-</option>
                      <option>HQ NAF</option>
                      <option>HQ TAC</option>
                      <option>HQ SOC</option>
                      <option>HQ MC</option>
                      <option>HQ ATC</option>
                      <option>HQ GTC</option>
                      <option>HQ LC</option>
                      <option>HQ MC</option>
                      <option>HQ MC</option>
                      <option>HQ MC</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="security">
                    <Form.Label>Security Class:</Form.Label>
                    <Form.Select style={formInput}>
                      <option>-Select-</option>
                      <option>Top Secret</option>
                      <option>Secret</option>
                      <option>Confidential</option>
                      <option>Restricted</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="date">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="Date" style={formInput} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="dtg">
                    <Form.Label>DTG:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter DTG"
                      style={formInput}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="controlno">
                    <Form.Label>Control No:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter control no:"
                      style={formInput}
                    />
                  </Form.Group>
                </Row>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  style={buttonStyle}
                >
                  RETRIEVE
                </Button>
              </Form>
            </Col>
          </Row>

          {/*DOCUMENT RETRIEVAL SECTION*/}
          <Row className="justify-content-md-center mt-5">
            <Col md={11}>
              <Form style={formStyle}>
                <h4 className="text-center mb-4" style={headerStyle}>
                  RESULT
                </h4>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>

      {/*End of Document Retrieval Section*/}

      <Footer />
    </div>
  );
};

export default RetrieveDocument;
