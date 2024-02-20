import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img6 from "../images/img6.png";

import { useEffect } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
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

const inputStyle = {
  marginLeft: "20px",
  width: "20%",
  border: "1px solid DEDEDE",
  height: "50px",
  paddingLeft: "20px",
  borderRadius: "1px",
  fontSize: "120%",
  fontFamily: "",
};

const iconParagraph = {};

const Archived = () => {
  //access documents store
  const store = documentsStore();

  useEffect(() => {
    store.fetchDocuments();
  }, []);

  return (
    <div style={row1}>
      <Header />
      <Form>
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
              <Link
                to="/archive"
                style={{
                  backgroundColor: "rgb(33, 37, 41)",
                  border: "1px solid rgb(33, 37, 41)",
                  color: "white",
                  borderRadius: "3px",
                  textDecoration: "none",
                  padding: "15px",
                }}
              >
                <FaFilePdf style={{ marginRight: "10px" }} />
                ARCHIVE
              </Link>

              <input type="text" placeholder="Search" style={inputStyle} />

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
                ARCHIVED DOCUMENTS
              </h4>

              {store.documents &&
                store.documents.map((documents) => {
                  return (
                    <div key={documents._id} style={divStyle}>
                      <Row>
                        <Col md={1} style={{ marginRight: "50px" }}>
                          <FaFilePdf className="" style={bigIconStyle} />
                        </Col>
                        <Col md={7} style={{ marginRight: "10px" }}>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>SUBJECT: </span>
                            {documents.subject}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DOCUMENT DATE: </span>
                            {documents.documentDate}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DATE ARCHIVED: </span>
                            {documents.archivedDate}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DOCUMENT TYPE: </span>
                            {documents.documentType}
                          </p>

                          <p style={iconParagraph}>
                            <Link to={`/viewArchivedDocument/${documents._id}`}>
                              <FaEye className="text-black" style={iconStyle} />
                            </Link>
                            <Link to={`/editArchivedDocument/${documents._id}`}>
                              <FaEdit
                                className="text-black"
                                style={iconStyle}
                              />
                            </Link>
                            <FaTrash
                              className="text-black"
                              onClick={() => store.handleDelete(documents._id)}
                              style={iconStyle}
                            />
                          </p>
                        </Col>
                        <Col md={3} style={{ marginRight: "" }}>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>
                              SECURITY CLASSIFICATION:
                            </span>
                            {documents.securityClass}
                          </p>

                          <p style={paragraphStyle}>
                            <span style={spanStyle}>CONTROL NO: </span>
                            {documents.controlNo}
                          </p>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>REF: </span>
                            {documents.ref}
                          </p>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>UNIT: </span>
                            {documents.unit}
                          </p>
                          <p style={paragraphStyle}>
                            <span style={spanStyle}>DTG: </span>
                            {documents.dtg}
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

export default Archived;
