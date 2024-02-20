import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";
import documentsStore from "../stores/documentsStore";

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

const formStyle = {
  border: "1px solid #ced4da",
  borderRadius: "3px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  padding: "80px",
  paddingBottom: "70px",
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

const messageHeaderStyle = {
  fontFamily: "",
  padding: "12px",
  marginTop: "-30px",
  backgroundColor: "rgb(33, 37, 41)",
  textAlign: "center",
  color: "white",
  borderRadius: "3px",
  border: "0px solid rgb(33, 37, 41)",
  textTransform: "uppercase",
  fontSize: "85%",
};

const formInput = {};

const ArchiveSignalDocument = () => {
  //access documentsStore
  const store = documentsStore();

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
            marginTop: "5px",
          }}
        >
          {/* Main content goes here */}
          <Row className="justify-content-md-center mt-4">
            <Col md={11}>
              <Form onSubmit={store.createDocument} style={formStyle}>
                <h5>
                  {/* Display success message */}
                  {store.successMessage1 && (
                    <div className="success-message" style={messageHeaderStyle}>
                      {store.successMessage1}
                    </div>
                  )}
                </h5>
                <h4 className="text-center mb-4" style={headerStyle}>
                  ARCHIVE SIGNAL DOCUMENT
                </h4>

                <Form.Group controlId="subject">
                  <Form.Label>Subject:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    style={formInput}
                    required
                    name="subject"
                    value={store.createForm1.subject}
                    onChange={store.updateCreateFormField}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="documentType">
                    <Form.Label>Type:</Form.Label>
                    <Form.Select
                      style={formInput}
                      required
                      name="documentType"
                      value={store.createForm1.documentType}
                      onChange={store.updateCreateFormField}
                    >
                      <option>-Select-</option>
                      <option>Signal</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="preref">
                    <Form.Label>Pre-Ref:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter pre-ref"
                      style={formInput}
                      required
                      name="preRef"
                      value={store.createForm1.preRef}
                      onChange={store.updateCreateFormField}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="forRefNo">
                    <Form.Label>Ref No:</Form.Label>
                    <Form.Select
                      style={formInput}
                      required
                      name="refNo"
                      value={store.createForm1.refNo}
                      onChange={store.updateCreateFormField}
                    >
                      <option>-Select-</option>
                      <option>321</option>
                      <option>312</option>
                      <option>530</option>
                      <option>531</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="postRef">
                    <Form.Label>Post-Ref:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter post-Ref"
                      style={formInput}
                      required
                      name="postRef"
                      value={store.createForm1.postRef}
                      onChange={store.updateCreateFormField}
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
                      required
                      name="ref"
                      value={store.createForm1.ref}
                      onChange={store.updateCreateFormField}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="unit">
                    <Form.Label>Unit:</Form.Label>
                    <Form.Select
                      style={formInput}
                      required
                      name="unit"
                      value={store.createForm1.unit}
                      onChange={store.updateCreateFormField}
                    >
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
                  <Form.Group as={Col} controlId="securityClass">
                    <Form.Label>Security Class:</Form.Label>
                    <Form.Select
                      style={formInput}
                      required
                      name="securityClass"
                      value={store.createForm1.securityClass}
                      onChange={store.updateCreateFormField}
                    >
                      <option>-Select-</option>
                      <option>Top Secret</option>
                      <option>Secret</option>
                      <option>Confidential</option>
                      <option>Restricted</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="documentDate">
                    <Form.Label>Document Date:</Form.Label>
                    <Form.Control
                      type="Date"
                      style={formInput}
                      required
                      name="documentDate"
                      value={store.createForm1.documentDate}
                      onChange={store.updateCreateFormField}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="archivedDate">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control
                      type="Date"
                      style={formInput}
                      required
                      name="archivedDate"
                      value={store.createForm1.archivedDate}
                      onChange={store.updateCreateFormField}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="dtg">
                    <Form.Label>DTG:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter DTG"
                      style={formInput}
                      required
                      name="dtg"
                      value={store.createForm1.dtg}
                      onChange={store.updateCreateFormField}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="controlno">
                    <Form.Label>Control No:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter control no:"
                      style={formInput}
                      required
                      name="controlNo"
                      value={store.createForm1.controlNo}
                      onChange={store.updateCreateFormField}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="fileInputField">
                    <Form.Label>Upload Signal:</Form.Label>
                    <Form.Control
                      type="file"
                      accept="application/pdf"
                      style={formInput}
                      required
                      name="fileInputField"
                      value={store.createForm1.fileInputField}
                      onChange={store.updateCreateFormField}
                    />
                  </Form.Group>
                </Row>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  style={buttonStyle}
                >
                  ARCHIVE
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default ArchiveSignalDocument;
