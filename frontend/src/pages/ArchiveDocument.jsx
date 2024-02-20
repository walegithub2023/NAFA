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

// Create a functional component for the dashboard
const ArchiveDocument = () => {
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
              <Form
                onSubmit={store.createDocumentForArchiveDocument}
                style={formStyle}
              >
                <h5>
                  {/* Display success message */}
                  {store.successMessageForArchiveDocument && (
                    <div className="success-message" style={messageHeaderStyle}>
                      {store.successMessageForArchiveDocument}
                    </div>
                  )}
                </h5>
                <h4 className="text-center mb-4" style={headerStyle}>
                  ARCHIVE DOCUMENT
                </h4>

                <Form.Group controlId="subject">
                  <Form.Label>Subject:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    style={formInput}
                    required
                    name="subject"
                    value={store.createDocumentForArchiveDocument.subject}
                    onChange={store.updateCreateFormFieldForArchiveDocument}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="documentType">
                    <Form.Label>Type:</Form.Label>
                    <Form.Select
                      style={formInput}
                      required
                      name="documentType"
                      value={
                        store.createDocumentForArchiveDocument.documentType
                      }
                      onChange={store.updateCreateFormFieldForArchiveDocument}
                    >
                      <option>-Select-</option>
                      <option>Loose Minute</option>
                      <option>Letter</option>
                      <option>Memo</option>
                      <option>Minutes of Meeting</option>
                      <option>Electronic Short Msg</option>
                      <option>Admin Orders</option>
                      <option>Instr for Tac Ex</option>
                      <option>Confirmatory Notes</option>
                      <option>Extimate Process</option>
                      <option>Annexs & Appendices</option>
                      <option>Float</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="preref">
                    <Form.Label>Pre-Ref:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter pre-ref"
                      style={formInput}
                      name="preRef"
                      value={store.createDocumentForArchiveDocument.preRef}
                      onChange={store.updateCreateFormFieldForArchiveDocument}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="forRefNo">
                    <Form.Label>Ref No:</Form.Label>
                    <Form.Select
                      required
                      style={formInput}
                      name="refNo"
                      value={store.createDocumentForArchiveDocument.refNo}
                      onChange={store.updateCreateFormFieldForArchiveDocument}
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
                      required
                      type="text"
                      placeholder="Enter ref"
                      style={formInput}
                      name="postRef"
                      value={store.createDocumentForArchiveDocument.postRef}
                      onChange={store.updateCreateFormFieldForArchiveDocument}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="ref">
                    <Form.Label>Ref:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter ref"
                      style={formInput}
                      name="ref"
                      value={store.createDocumentForArchiveDocument.ref}
                      onChange={store.updateCreateFormFieldForArchiveDocument}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="unit">
                    <Form.Label>Unit:</Form.Label>
                    <Form.Select
                      required
                      style={formInput}
                      name="unit"
                      value={store.createDocumentForArchiveDocument.unit}
                      onChange={store.updateCreateFormFieldForArchiveDocument}
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
                  <Form.Group as={Col} controlId="documentDate">
                    <Form.Label> Document Date:</Form.Label>
                    <Form.Control
                      required
                      type="Date"
                      style={formInput}
                      name="documentDate"
                      value={
                        store.createDocumentForArchiveDocument.documentDate
                      }
                      onChange={store.updateCreateFormFieldForArchiveDocument}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="securityClass">
                    <Form.Label>Security Class:</Form.Label>
                    <Form.Select
                      required
                      style={formInput}
                      name="securityClass"
                      value={
                        store.createDocumentForArchiveDocument.securityClass
                      }
                      onChange={store.updateCreateFormFieldForArchiveDocument}
                    >
                      <option>-Select-</option>
                      <option>Top Secret</option>
                      <option>Secret</option>
                      <option>Confidential</option>
                      <option>Restricted</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="archivedDate">
                    <Form.Label> Date:</Form.Label>
                    <Form.Control
                      required
                      type="Date"
                      style={formInput}
                      name="archivedDate"
                      value={
                        store.createDocumentForArchiveDocument.archivedDate
                      }
                      onChange={store.updateCreateFormFieldForArchiveDocument}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="fileInputField">
                    <Form.Label>Upload Document:</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Upload Document"
                      style={formInput}
                      name="fileInputField"
                      required
                      value={
                        store.createDocumentForArchiveDocument.fileInputField
                      }
                      onChange={store.updateCreateFormFieldForArchiveDocument}
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

export default ArchiveDocument;
