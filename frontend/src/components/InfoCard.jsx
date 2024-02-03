import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaFolder } from "react-icons/fa";

const openButton = {
  borderRadius: "2px",
  backgroundColor: "black",
  border: "1px solid  black",
  color: "white",
};

const cardStyle = {
  width: "13rem",
  textAlign: "center",
  border: "1px solid #ced4da",
  borderRadius: "1px", // Add border-radius for a rounded corner
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
  paddingBottom: "10px",
  height: "170px",
};

const InfoCard = () => {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title style={{ fontSize: "200%", marginTop: "0px" }}>
          1050
        </Card.Title>
        <Card.Text>CIS</Card.Text>
        <Button style={openButton}>OPEN</Button>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
