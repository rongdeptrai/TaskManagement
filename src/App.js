import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Board from "./containers/Board";
import { history } from "./_helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./containers/PrivateRoute";
import { Login } from "./components/Login";

function App({ alert, clearAlerts }) {
  useEffect(() => {
    const unlisten = history.listen(() => clearAlerts());
    return () => unlisten();
  }, [clearAlerts]);

  return (
    <Router history={history}>
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Header />
              <Board />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
