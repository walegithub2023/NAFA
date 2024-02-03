import React from "react";
import axios from "axios";
import { useEffect } from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  //access authStore
  const store = authStore();

  useEffect(() => {
    store.logoutUser();
  }, []);

  return <div>{navigate("/login")}</div>;
};

export default Logout;
