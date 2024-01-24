import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import RetrieveDocument from "./pages/RetrieveDocument";
import Users from "./pages/Users";
import Test from "./pages/Test";
import NewUser from "./pages/NewUser";
import ArchiveDocument from "./pages/ArchiveDocument";
import ArchiveSignalDocument from "./pages/ArchiveSignalDocument";
import ArchiveFloatDocument from "./pages/ArchiveFloatDocument";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/retrievedocument" element={<RetrieveDocument />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/test" element={<Test />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/archivedocument" element={<ArchiveDocument />} />
        <Route path="/logout" element={<Login />} />
        <Route
          path="/archivefloatdocument"
          element={<ArchiveFloatDocument />}
        />
        <Route
          path="/archivesignaldocument"
          element={<ArchiveSignalDocument />}
        />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/viewuser/:id" element={<ViewUser />} />
      </Routes>
    </>
  );
};

export default App;
