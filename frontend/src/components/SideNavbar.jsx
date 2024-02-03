import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";
import {
  FaHome,
  FaSignOutAlt,
  FaQuestionCircle,
  FaBuilding,
  FaChartLine,
  FaEnvelope,
  FaTools,
  FaUsers,
  FaInfoCircle,
} from "react-icons/fa";
import { useState } from "react";

const SideNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col md={10} className="bg-light" style={{ marginTop: "1px" }}>
      {/* Your side navigation content goes here */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="flex-column"
        style={{ paddingBottom: "400px" }}
      >
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/">
              <FaHome style={{ marginRight: "10px" }} />
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/Dashboard">
              <FaInfoCircle style={{ marginRight: "10px" }} />
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/archive">
              <FaInfoCircle style={{ marginRight: "10px" }} />
              Archive
            </Nav.Link>

            <Nav.Link as={Link} to="/retrievedocument">
              <FaInfoCircle style={{ marginRight: "10px" }} />
              Retrieve
            </Nav.Link>

            <Nav.Link as={Link} to="/nafapps">
              <FaTools style={{ marginRight: "10px" }} />
              NAF Apps
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              <FaHome style={{ marginRight: "10px" }} />
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/branches">
              <FaHome style={{ marginRight: "10px" }} />
              Branches
            </Nav.Link>
            <Nav.Link as={Link} to="/directorates">
              <FaBuilding style={{ marginRight: "10px" }} />
              Directorates
            </Nav.Link>
            <Nav.Link as={Link} to="/drus">
              <FaHome style={{ marginRight: "10px" }} />
              DRUs
            </Nav.Link>
            <Nav.Link as={Link} to="/units">
              <FaBuilding style={{ marginRight: "10px" }} />
              Units
            </Nav.Link>
            <Nav.Link as={Link} to="/chats">
              <FaChartLine style={{ marginRight: "10px" }} />
              Charts
            </Nav.Link>

            <Nav.Link as={Link} to="/users">
              <FaUsers style={{ marginRight: "10px" }} />
              Users
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              <FaEnvelope style={{ marginRight: "10px" }} />
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
              <FaQuestionCircle style={{ marginRight: "10px" }} />
              Help
            </Nav.Link>
            <Nav.Link as={Link} to="/logout">
              <FaSignOutAlt style={{ marginRight: "10px" }} />
              Logout
            </Nav.Link>
            {/* Add more Nav.Link items as needed */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default SideNavbar;
