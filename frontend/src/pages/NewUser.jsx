import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";
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

// Create a functional component for the dashboard
const NewUser = () => {
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

  //state for success message after successful creation of user
  const [successMessage, setSuccessMessage] = useState("");

  //State for the form
  const [createForm, setCreateForm] = useState({
    svcNo: "",
    initials: "",
    surname: "",
    appt: "",
    rank: "",
    password: "",
    category: "",
  });

  // Function to handle the changes in svcNo, initials, appt, etc form inputs
  const upadateCreateFormField = (e) => {
    const { name, value } = e.target;
    //set form input fields
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  //create user
  const createUser = async (e) => {
    e.preventDefault();
    //create the user
    const res = await axios.post("http://localhost:3001/users", createForm);

    // success message to display
    setSuccessMessage("Congratulations! user created successfully!");
    //  reset message after a certain duration if needed
    setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 seconds

    //clear form state
    setCreateForm({
      svcNo: "",
      initials: "",
      surname: "",
      appt: "",
      rank: "",
      password: "",
      category: "",
    });
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
              <Form onSubmit={createUser} style={formStyle}>
                <h5>
                  {/* Display success message */}
                  {successMessage && (
                    <div className="success-message" style={messageHeaderStyle}>
                      {successMessage}
                    </div>
                  )}
                </h5>
                <h3 className="text-center mb-4" style={headerStyle}>
                  NEW USER
                </h3>

                <Form.Group controlId="SvcNo">
                  <Form.Label>Service No:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your svc no"
                    name="svcNo"
                    value={createForm.svcNo}
                    onChange={upadateCreateFormField}
                    required
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="initials">
                    <Form.Label>Initials:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your initials"
                      name="initials"
                      value={createForm.initials}
                      onChange={upadateCreateFormField}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="surname">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your surname"
                      name="surname"
                      value={createForm.surname}
                      onChange={upadateCreateFormField}
                      required
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
                      value={createForm.appt}
                      onChange={upadateCreateFormField}
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="forrank">
                    <Form.Label>Rank:</Form.Label>
                    <Form.Select
                      name="rank"
                      value={createForm.rank}
                      onChange={upadateCreateFormField}
                      required
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
                    value={createForm.password}
                    onChange={upadateCreateFormField}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="userCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={createForm.category}
                    onChange={upadateCreateFormField}
                    required
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
                  CREATE
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

export default NewUser;
