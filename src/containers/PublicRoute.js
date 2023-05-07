import React from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { history } from "../_helpers";
import { Login } from "../components/Login/Login";
import Header from "../components/Header/Header";
import { PrivateRoute } from "./PrivateRoute";
import Board from "./Board";

const PublicRoute = () => {
  history.location = useLocation();
  return (
    /*     <Router>
      <Header />
      <Board />
    </Router> */
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Header />
              <Board />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default PublicRoute;
