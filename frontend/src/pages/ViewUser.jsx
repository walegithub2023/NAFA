import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";

import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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

const tableDataStyle = { textAlign: "left", paddingLeft: "30px" };

const ViewUser = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState({
    svcNo: "",
    initials: "",
    surname: "",
    appt: "",
    rank: "",
    password: "",
    category: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Fetch user data
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      console.log(res);

      // Access nested user object
      const user = res.data.user;

      // Set default values to userData
      setUserData({
        svcNo: user.svcNo,
        initials: user.initials,
        surname: user.surname,
        appt: user.appt,
        rank: user.rank,
        password: user.password,
        category: user.category,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
              CREATE USER
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
              USER DETAILS
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
                  <td style={tableDataStyle}>SVC NO:</td>
                  <td> {userData.svcNo}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>RANK:</td>
                  <td> {userData.rank}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>INITIALS:</td>
                  <td> {userData.initials}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>SURNAME:</td>
                  <td> {userData.surname}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>APPT:</td>
                  <td> {userData.appt}</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>CATEGORY:</td>
                  <td> {userData.category}</td>
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

export default ViewUser;
