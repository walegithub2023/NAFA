import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo3 from "../images/logo3.png";
import {
  FaHome,
  FaTools,
  FaCogs,
  FaSignInAlt,
  FaEnvelope,
  FaInfoCircle,
  FaQuestionCircle,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaFilePdf,
} from "react-icons/fa";

const Header = () => {
  const linkStyle = {
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "16px",
  };

  const logoStyle = {};

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{
        paddingLeft: "70px",
        paddingRight: "20px",
        paddingBottom: "20px",
      }}
    >
      <Navbar.Brand as={Link} to="/home">
        <img
          src={logo3}
          alt="NAF page"
          width={67}
          height={60}
          style={logoStyle}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home" style={linkStyle}>
            <FaHome style={{ marginRight: "10px" }} />
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" style={linkStyle}>
            <FaInfoCircle style={{ marginRight: "10px" }} />
            Dashboard
          </Nav.Link>

          <Nav.Link as={Link} to="/archive" style={linkStyle}>
            <FaInfoCircle style={{ marginRight: "10px" }} />
            Archive
          </Nav.Link>

          <Nav.Link as={Link} to="/retrievedocument" style={linkStyle}>
            <FaFilePdf style={{ marginRight: "10px" }} />
            Retrieve
          </Nav.Link>

          <Nav.Link as={Link} to="/archived" style={linkStyle}>
            <FaFilePdf style={{ marginRight: "10px" }} />
            Archived
          </Nav.Link>

          <Nav.Link as={Link} to="/units" style={linkStyle}>
            <FaBuilding style={{ marginRight: "10px" }} />
            Units
          </Nav.Link>
          <Nav.Link as={Link} to="/chats" style={linkStyle}>
            <FaChartLine style={{ marginRight: "10px" }} />
            Charts
          </Nav.Link>

          <Nav.Link as={Link} to="/users" style={linkStyle}>
            <FaUsers style={{ marginRight: "10px" }} />
            Users
          </Nav.Link>

          <Nav.Link as={Link} to="/services" style={linkStyle}>
            <FaCogs style={{ marginRight: "10px" }} />
            Services
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/contact" style={linkStyle}>
            <FaEnvelope style={{ marginRight: "10px" }} />
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/help" style={linkStyle}>
            <FaQuestionCircle style={{ marginRight: "10px" }} />
            Help
          </Nav.Link>
          <Nav.Link as={Link} to="/settings" style={linkStyle}>
            <FaTools style={{ marginRight: "10px" }} />
            Settings
          </Nav.Link>
          <Nav.Link as={Link} to="/logout" style={linkStyle}>
            <FaSignInAlt style={{ marginRight: "10px" }} />
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
