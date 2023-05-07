import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Grid from "@mui/material/Grid";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const iconStyle = {
  fontSize: "2rem", // Set font size
  marginRight: "8px", // Add some margin to the right
};
const iconStyleUser = {
  fontSize: "1.7rem", // Set font size
  marginRight: "8px", // Add some margin to the right
};
const Header = () => {
  return (
    <div className='header'>
      <div className='HeaderContainer'>
        <Grid>
          <div className='project_name' xs={12}>
            <FactCheckIcon style={iconStyle} className='icon-list-check' />
            <span> Quy trình - T</span>
          </div>
          <div className='user_name' xs={12}>
            <AccountCircleRoundedIcon
              style={iconStyleUser}
              className='icon-user'
            />
            <span>Lê Hoàng Long</span>
          </div>
        </Grid>
      </div>
    </div>
  );
};
export default Header;
