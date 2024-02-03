import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";

import { useEffect } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import usersStore from "../stores/usersStore";

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

const Users = () => {
  //access users store
  const store = usersStore();

  useEffect(() => {
    store.fetchUsers();
  }, []);

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
              }}
            >
              USERS
            </h5>
            <Table
              striped
              bordered
              hover
              responsive
              className="p-4 text-center"
            >
              <thead>
                <tr>
                  <th>Svc No</th>
                  <th>Initials</th>
                  <th>Surname</th>
                  <th>Appt</th>
                  <th>Rank</th>
                  <th>Category</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {store.users &&
                  store.users.map((users) => {
                    return (
                      <tr key={users._id}>
                        <td>{users.svcNo}</td>
                        <td>{users.initials}</td>
                        <td>{users.surname}</td>
                        <td>{users.appt}</td>
                        <td>{users.rank}</td>
                        <td>{users.category}</td>
                        <td>
                          <Link to={`/viewuser/${users._id}`}>
                            <FaEye
                              className="text-black"
                              style={{ cursor: "pointer" }}
                            />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/edituser/${users._id}`}>
                            <FaEdit
                              className="text-black"
                              style={{ cursor: "pointer" }}
                            />
                          </Link>
                        </td>
                        <td>
                          <FaTrash
                            className="text-black"
                            onClick={() => store.handleDelete(users._id)}
                            style={{ cursor: "pointer" }}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </Table>
          </div>
          {/* Main content ends */}
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Users;
