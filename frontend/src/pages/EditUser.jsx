import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";
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

const EditUser = () => {
  const formStyle = {
    border: "1px solid #ced4da",
    borderRadius: "3px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "60px",
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
    fontFamily: "Arial",
    padding: "12px",
    marginTop: "-30px",
    backgroundColor: "rgb(33, 37, 41)",
    textAlign: "center",
    color: "white",
    borderRadius: "3px",
    border: "0px solid rgb(33, 37, 41)",
  };

  //state for success message after successful update
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/users/${id}`,
        userData
      );
      console.log(res);
      // success message to display after successful update
      setSuccessMessage("Congratulations! user updated successfully!");
      //  reset message after a certain duration if needed
      setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 seconds
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
            marginTop: "5px",
          }}
        >
          {/* Main content goes here */}
          <Row className="justify-content-md-center mt-5">
            <Col md={11}>
              <Form onSubmit={handleFormSubmit} style={formStyle}>
                <h5>
                  {/* Display success message */}
                  {successMessage && (
                    <div className="success-message" style={messageHeaderStyle}>
                      {successMessage}
                    </div>
                  )}
                </h5>
                <h3 className="text-center mb-4" style={headerStyle}>
                  EDIT USER
                </h3>

                <Form.Group controlId="Svc No">
                  <Form.Label>Service No:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your svc no"
                    name="svcNo"
                    required
                    defaultValue={userData.svcNo}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="initials">
                    <Form.Label>Initials:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your initials"
                      name="initials"
                      required
                      defaultValue={userData.initials}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="surname">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your surname"
                      name="surname"
                      required
                      defaultValue={userData.surname}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="forAppt">
                    <Form.Label>Appt:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your appt"
                      name="appt"
                      required
                      defaultValue={userData.appt}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="forrank">
                    <Form.Label>Rank:</Form.Label>
                    <Form.Select
                      name="rank"
                      required
                      defaultValue={userData.rank}
                      onChange={handleInputChange}
                    >
                      <option>-Select-</option>
                      <option>AVM</option>
                      <option>Air Cdre</option>
                      <option>Gp Capt</option>
                      <option>Wg Cdr</option>
                      <option>Sqn Ldr</option>
                      <option>Flt Lt</option>
                      <option>Fg Offr</option>
                      <option>Plt Offr</option>
                      <option>AWO</option>
                      <option>MWO</option>
                      <option>WO</option>
                      <option>FS</option>
                      <option>Sgt</option>
                      <option>Cpl</option>
                      <option>LCpl</option>
                      <option>ACM</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    defaultValue=""
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="userCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    required
                    name="category"
                    defaultValue={userData.category}
                    onChange={handleInputChange}
                  >
                    <option>-Select-</option>
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Reader</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  style={buttonStyle}
                >
                  UPDATE
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

export default EditUser;
