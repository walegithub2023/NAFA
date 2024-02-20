import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img6 from "../images/img6.png";
import { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import axios from "axios";

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

const divStyle = {
  border: "1px solid #DEDEDE",
  padding: "20px",
  paddingLeft: "50px",
  marginBottom: "20px",
  background: "linear-gradient(45deg, #f3f3f3, #ffffff)",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
  color: "#333",
  transition: "background 0.3s ease",
  fontSize: "100%",
};

const paragraphStyle = {
  textAlign: "justify",
  color: "grey",
};

const spanStyle = {
  fontWeight: "bold",
  color: "black",
};

const bigIconStyle = {
  marginTop: "4px",
  fontSize: "100px",
  color: "grey",
};

const iconStyle = {
  cursor: "pointer",
  marginRight: "10px",
};

const formInput = {
  borderRadius: "3px",
  height: "45px",
  fontSize: "100%",
};

const RowDiv = {
  border: "1px solid #DEDEDE",
  padding: "30px",
  paddingLeft: "50px",
  marginBottom: "20px",
  marginTop: "-10px",
  background: "linear-gradient(45deg, #f3f3f3, #ffffff)",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  fontFamily: "Arial, sans-serif",
  color: "#333",
  transition: "background 0.3s ease",
  fontSize: "100%",
};

const iconParagraph = {};

const RetrieveDocument = () => {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    documentType: "",
    subject: "",
    preRef: "",
    refNo: "",
    postRef: "",
    ref: "",
    unit: "",
    securityClass: "",
    documentDate: "",
    archivedDate: "",
    dtg: "",
    controlNo: "",
    fileInputField: "",
  });
  //state for searchResults
  const [searchResults, setSearchResults] = useState([]);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const filteredFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );

      const queryString = Object.entries(filteredFormData)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");

      const response = await axios.get(
        `http://localhost:3001/documents?${queryString}`
      );

      console.log(response);

      if (response.data && Array.isArray(response.data.documents)) {
        setSearchResults(response.data.documents); // Update search results state with documents array
      } else {
        console.error("Invalid response format:", response.data);
        // Handle invalid response format
      }
    } catch (error) {
      console.error("Error retrieving documents:", error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <div style={row1}>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col
            lg={12}
            className="ml-sm-auto col-lg-9 px-md-4"
            style={{
              marginTop: "35px",
            }}
          >
            {/* Main content goes here */}
            <div
              style={{
                backgroundColor: "white",
                colour: "black",
                padding: "80px",
                paddingTop: "40px",
                marginTop: "-45px",
                backgroundImage: `url(${img6})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                width: "100%",
                zIndex: "-1",
              }}
            >
              <div style={RowDiv}>
                <Row>
                  <Col md={2}>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "rgb(33, 37, 41)",
                        border: "1px solid rgb(33, 37, 41)",
                        color: "white",
                        borderRadius: "3px",
                        textDecoration: "none",
                        padding: "15px",
                        marginTop: "5px",
                      }}
                    >
                      <FaFilePdf style={{ marginRight: "10px" }} />
                      RETRIEVE
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="subject">
                      <Form.Label>SUBJECT:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter subject"
                        style={formInput}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="preref">
                      <Form.Label>PRE-REF:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter pre-ref"
                        style={formInput}
                        name="preRef"
                        value={formData.preRef}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="forRefNo">
                      <Form.Label>REF NO:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter ref no"
                        style={formInput}
                        name="refNo"
                        value={formData.refNo}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="postRef">
                      <Form.Label>POST-REF:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter post ref"
                        style={formInput}
                        name="postRef"
                        value={formData.postRef}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="security">
                      <Form.Label>SECURITY CLASS:</Form.Label>
                      <Form.Select
                        style={formInput}
                        name="securityClass"
                        value={formData.securityClass}
                        onChange={handleChange}
                      >
                        <option>-Select-</option>
                        <option>Top Secret</option>
                        <option>Secret</option>
                        <option>Confidential</option>
                        <option>Restricted</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ marginTop: "3px" }}>
                  <Col md={2}>
                    <Form.Group controlId="documentType">
                      <Form.Label>TYPE:</Form.Label>
                      <Form.Select
                        style={formInput}
                        name="documentType"
                        value={formData.documentType}
                        onChange={handleChange}
                      >
                        <option>-Select-</option>
                        <option>Signal</option>
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
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="ref">
                      <Form.Label>REF:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter ref"
                        style={formInput}
                        name="ref"
                        value={formData.ref}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group as={Col} controlId="unit">
                      <Form.Label>UNIT:</Form.Label>
                      <Form.Select
                        style={formInput}
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
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
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="dtg">
                      <Form.Label>DTG:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter DTG"
                        style={formInput}
                        name="dtg"
                        value={formData.dtg}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    <Form.Group as={Col} controlId="date">
                      <Form.Label>DATE:</Form.Label>
                      <Form.Control
                        type="Date"
                        style={formInput}
                        name="archivedDate"
                        value={formData.archivedDate}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group as={Col} controlId="documentDate">
                      <Form.Label>DOCUMENT DATE:</Form.Label>
                      <Form.Control
                        type="Date"
                        style={formInput}
                        name="documentDate"
                        value={formData.documentDate}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <h4
                className="text-center"
                style={{
                  marginTop: "20px",
                  border: "1px solid #DEDEDE",
                  backgroundColor: "rgb(33, 37, 41)",
                  color: "white",
                  padding: "5px",
                }}
              >
                RETRIEVED DOCUMENTS
              </h4>

              {searchResults &&
                searchResults.map((results) => {
                  return (
                    <div key={results._id} style={divStyle}>
                      <Row>
                        <Col md={1} style={{ marginRight: "50px" }}>
                          <FaFilePdf className="" style={bigIconStyle} />
                        </Col>
                        <Col md={7} style={{ marginRight: "10px" }}>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>SUBJECT: </span>
                            {results.subject}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DOCUMENT DATE: </span>
                            {results.documentDate}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DATE ARCHIVED: </span>
                            {results.archivedDate}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DOCUMENT TYPE: </span>
                            {results.documentType}
                          </p>

                          <p style={iconParagraph}>
                            <Link to={`/viewRetrievedDocument/${results._id}`}>
                              <FaEye className="text-black" style={iconStyle} />
                            </Link>
                            <Link to={`/editRetrievedDocument/${results._id}`}>
                              <FaEdit
                                className="text-black"
                                style={iconStyle}
                              />
                            </Link>
                            <FaTrash
                              className="text-black"
                              onClick={() =>
                                handleDeleteForRetrieve(results._id)
                              }
                              style={iconStyle}
                            />
                          </p>
                        </Col>
                        <Col md={3} style={{ marginRight: "" }}>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>
                              SECURITY CLASSIFICATION:
                            </span>
                            {results.securityClass}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>CONTROL NO: </span>
                            {results.controlNo}
                          </p>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>REF: </span>
                            {results.ref}
                          </p>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>UNIT: </span>
                            {results.unit}
                          </p>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DTG: </span>
                            {results.dtg}
                          </p>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
            </div>
            {/* Main content ends */}
          </Col>
        </Row>
      </Form>
      <Footer />
    </div>
  );
};

export default RetrieveDocument;
