import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const openButton = {
  borderRadius: "2px",
  backgroundColor: "rgb(33, 37, 41)",
  border: "1px solid  black",
  color: "light",
};

const cardStyle = {
  textAlign: "center",
  border: "1px solid #ced4da",
  borderRadius: "1px", // Add border-radius for a rounded corner
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
  paddingBottom: "10px",
};

const InfoCard = () => {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title style={{ fontSize: "200%", marginTop: "0px" }}>
          100
        </Card.Title>
        <Card.Text>CIS</Card.Text>
        <Button style={openButton}>OPEN</Button>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
