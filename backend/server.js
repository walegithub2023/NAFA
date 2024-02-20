//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDb");
const usersController = require("./controllers/usersController");
const documentsController = require("./controllers/documentsController");
const requireAuth = require("./middleware/requireAuth");

//create express app
const app = express();

//configure express app for json, cors and cookie-parser
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//connect to database
connectToDb();

//Routing
//Routing for users
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);
app.get("/users", usersController.fetchUsers);
app.get("/users/:id", usersController.fetchUser);
app.post("/users", usersController.createUser);
app.put("/users/:id", usersController.updateUser);
app.delete("/users/:id", usersController.deleteUser);

//Routing for documents
app.get("/documents", documentsController.fetchDocuments);
app.get("/documents/:id", documentsController.fetchDocument);
app.post("/documents", documentsController.createDocument);
app.put("/documents/:id", documentsController.updateDocument);
app.delete("/documents/:id", documentsController.deleteDocument);
app.get("/documents", documentsController.searchForDocuments);

//start server
app.listen(process.env.PORT, () => {
  console.log("Server running at port:", process.env.PORT);
});
