import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
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
import RequireAuth from "./components/RequireAuth";
import Archived from "./pages/Archived";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequireAuth>
              <Archive />
            </RequireAuth>
          }
        />
        <Route
          path="/retrievedocument"
          element={
            <RequireAuth>
              <RetrieveDocument />
            </RequireAuth>
          }
        />
        <Route
          path="/archived"
          element={
            <RequireAuth>
              <Archived />
            </RequireAuth>
          }
        />
        <Route
          path="/*"
          element={
            <RequireAuth>
              <Page404 />
            </RequireAuth>
          }
        />

        <Route
          path="/users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />
        <Route
          path="/test"
          element={
            <RequireAuth>
              <Test />
            </RequireAuth>
          }
        />
        <Route
          path="/newuser"
          element={
            <RequireAuth>
              <NewUser />
            </RequireAuth>
          }
        />
        <Route
          path="/archivedocument"
          element={
            <RequireAuth>
              <ArchiveDocument />
            </RequireAuth>
          }
        />
        <Route
          path="/archivefloatdocument"
          element={
            <RequireAuth>
              <ArchiveFloatDocument />
            </RequireAuth>
          }
        />
        <Route
          path="/archivesignaldocument"
          element={
            <RequireAuth>
              <ArchiveSignalDocument />
            </RequireAuth>
          }
        />
        <Route
          path="/edituser/:id2"
          element={
            <RequireAuth>
              <EditUser />
            </RequireAuth>
          }
        />
        <Route
          path="/viewuser/:id"
          element={
            <RequireAuth>
              <ViewUser />
            </RequireAuth>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
