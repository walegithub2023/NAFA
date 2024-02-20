import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";

import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

const tableDataStyle = { textAlign: "left", paddingLeft: "50px" };
const tableDataStyle2 = { textAlign: "right", paddingRight: "50px" };

const ViewArchivedDocument = () => {
  //access documents store
  const store = documentsStore();

  // get id from ViewArchivedDocument page url
  const { id } = useParams();

  useEffect(() => {
    store.fetchDocumentData(id);
  }, [id]);

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
          <div
            style={{
              border: "1px solid white",
              backgroundColor: "white",
              colour: "black",
              padding: "30px",
            }}
          >
            <Link
              to="/newuser"
              style={{
                backgroundColor: "rgb(33, 37, 41)",
                border: "1px solid rgb(33, 37, 41)",
                color: "white",
                borderRadius: "3px",
                textDecoration: "none",
                padding: "15px",
              }}
            >
              <FaUser style={{ marginRight: "10px" }} />
              ARCHIVE
            </Link>
            <h5
              className="text-center"
              style={{
                marginTop: "10px",
                border: "1px solid #DEDEDE",
                backgroundColor: "white",
                colour: "black",
                padding: "5px",
                textTransform: "uppercase",
              }}
            >
              ARCHIVED DOCUMENT DETAILS
            </h5>
            <Table
              striped
              bordered
              hover
              responsive
              className="p-4 text-center"
              style={{ textTransform: "uppercase" }}
            >
              <thead>
                <tr style={{ textAlign: "center" }}></tr>
              </thead>
              <tbody>
                {/*table content */}
                <tr>
                  <td style={tableDataStyle}>REFERENCE:</td>
                  <td style={tableDataStyle2}> {store.documentData.ref}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>SUBJECT:</td>
                  <td style={tableDataStyle2}> {store.documentData.subject}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>SECURITY CLASSIFICATION:</td>
                  <td style={tableDataStyle2}>
                    {store.documentData.securityClass}
                  </td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>DOCUMENT DATE:</td>
                  <td style={tableDataStyle2}>
                    {" "}
                    {store.documentData.documentDate}
                  </td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>DATE ARCHIVED:</td>
                  <td style={tableDataStyle2}>
                    {" "}
                    {store.documentData.archivedDate}
                  </td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>UNIT:</td>
                  <td style={tableDataStyle2}>{store.documentData.unit}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>DTG:</td>
                  <td style={tableDataStyle2}>{store.documentData.dtg}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>CONTROL NO:</td>
                  <td style={tableDataStyle2}>
                    {store.documentData.controlNo}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default ViewArchivedDocument;
