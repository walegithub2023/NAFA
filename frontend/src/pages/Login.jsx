import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo3 from "../images/logo3.png";
import img1 from "../images/img1.jpg";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const loginContainerStyle = {
  border: "1px solid #ddd",
  borderRadius: "3px",
  padding: "50px",
  backgroundColor: "#f8f9fa",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  width: "85%",
  height: "520px",
};

const logoStyle = {
  marginBottom: "20px",
  margin: "10px auto",
};

const backgroundStyle = {
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  position: "fixed",
  width: "100%",
  zIndex: "-1",
};

const inputField = {
  borderRadius: "3px",
  paddingTop: "12px",
  paddingBottom: "12px",
};

const formGroup = {
  marginTop: "-20px",
};

const messageHeaderStyle = {
  fontFamily: "",
  padding: "12px",
  marginTop: "-30px",
  marginBottom: "15px",
  backgroundColor: "red",
  textAlign: "center",
  color: "white",
  borderRadius: "2px",
  border: "0px solid red",
  textTransform: "uppercase",
  fontSize: "85%",
};

const buttonStyle = {
  marginTop: "25px",
  width: "100px",
  height: "50px",
  borderRadius: "0px",
  backgroundColor: "white",
  border: "1px solid #D3D3D3",
  color: "black",
};

const Login = () => {
  //access authStore
  const store = authStore();
  const navigate = useNavigate();

  //handle login function
  const handleLogin = async (e) => {
    //prevent page refresh
    e.preventDefault();
    await store.loginUser();
    //Navigate to home
    navigate("/home");
  };

  return (
    <Container fluid>
      <Row
        className="justify-content-center align-items-center min-vh-100"
        style={backgroundStyle}
      >
        <Col md={4} xs={9} xl={3}>
          <div style={loginContainerStyle}>
            <h5>
              {/* Display error message if any */}
              {store.message1 && (
                <div className="success-message" style={messageHeaderStyle}>
                  {store.message1}
                </div>
              )}
            </h5>
            <div
              style={{
                textAlign: "center",
                border: "1px solid 	#D3D3D3",
                margin: "-7px auto",
              }}
            >
              <img
                src={logo3}
                alt="NAF page"
                width={150}
                height={130}
                style={logoStyle}
              />
            </div>
            <Form onSubmit={handleLogin}>
              <h2 className="text-center mb-2 mt-3">Login</h2>

              <Form.Group controlId="formBasicSvcNo" style={formGroup}>
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter svc no"
                  style={inputField}
                  name="svcNo"
                  value={store.loginForm.svcNo}
                  onChange={store.updateLoginFormField}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  style={inputField}
                  name="password"
                  value={store.loginForm.password}
                  onChange={store.updateLoginFormField}
                  required
                />
              </Form.Group>

              <Button type="submit" style={buttonStyle}>
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
