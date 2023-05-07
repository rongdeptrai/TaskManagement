import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../../_helpers";
import { userActions } from "../../actions";
import { useNavigate } from "react-router-dom";
function Login({ loggingIn, login, logout }) {
  const authUser = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to home if already logged in
    if (authUser) navigate("/board");
    console.log(authUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='col-md-6 col-md-offset-3'>
      <h2>Login</h2>
      <form name='form' onSubmit={handleSubmit}>
        <div className={"form-group"}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className={"form-group"}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary'>Login</button>
          {loggingIn && <span>Vui lòng đợi</span>}
        </div>
      </form>
    </div>
  );
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };
