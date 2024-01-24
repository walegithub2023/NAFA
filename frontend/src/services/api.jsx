/* import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export default api;
 */

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/users", // Replace with your actual API URL
  withCredentials: true,
});

export default api;
