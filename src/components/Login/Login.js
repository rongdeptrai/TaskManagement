import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../../_helpers";
import { userActions } from "../../actions";
/* import { useNavigate } from "react-router-dom"; */
const authUser = localStorage.getItem("user");

function Login({ loggingIn, login, logout, loadCard, card }) {
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
      <h2>Đăng nhập</h2>
      <form name='form' onSubmit={handleSubmit}>
        <div className={"form-group"}>
          <label htmlFor='username'>Tên đăng nhập</label>
          <input
            type='text'
            className='form-control'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className={"form-group"}>
          <label htmlFor='password'>Mật khẩu</label>
          <input
            type='password'
            className='form-control'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary'>Đăng nhập</button>
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
