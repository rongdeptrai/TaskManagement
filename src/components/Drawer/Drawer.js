import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/RightComponent.css";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RightHeader from "./RightHeader";
import ToDo from "./Todo";
const RDrawer = (props) => {
  console.log(props.data);
  return (
    <div className='right-component' onKeyDown={props.onKeyDown} tabIndex='0'>
      <div className='right-component-content'>
        <RightHeader isColse={props.isColse}></RightHeader>
        <div className='content'>
          <span className='content-header'>{props.data.content}</span>
          <div className='task-info'>
            <div className='grid-item'>Người phụ trách</div>
            <div className='grid-item'>
              <IconButton
                style={{
                  border: "1px dashed black",
                  marginRight: "5px",
                  padding: "5px",
                }}
              >
                <PermIdentityOutlinedIcon style={{ fontSize: "20px" }} />
              </IconButton>
              {props.data.executor}
            </div>
          </div>
          <div className='task-info'>
            <div className='grid-item'>Thời hạn</div>
            <div className='grid-item'>
              <IconButton
                style={{
                  border: "1px dashed black",
                  marginRight: "5px",
                  padding: "7px",
                }}
              >
                <CalendarTodayOutlinedIcon style={{ fontSize: "16px" }} />
              </IconButton>
              {props.data.deadline}
            </div>
          </div>
          <div className='task-info'>
            <div className='grid-item'>Ưu tiên</div>
            <div className='grid-item'>
              <button
                type='button'
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#007bff",
                  border: "none",
                  color: "white",
                  fontSize: "13px",
                  cursor: "pointer",
                  paddingRight: "0.5rem",
                  alignItems: "center",
                  borderRadius: "4px",
                }}
              >
                <FlagRoundedIcon /> {props.data.priority}
              </button>
            </div>
          </div>
          <div className='task-info'>
            <div className='grid-item'>Thẻ</div>
            <div className='grid-item'>
              <IconButton
                style={{
                  border: "1px dashed black",
                  marginRight: "5px",
                  padding: "7px",
                }}
              >
                <LocalOfferRoundedIcon style={{ fontSize: "16px" }} />
              </IconButton>
              {props.data.tag}
            </div>
          </div>
          <div className='task-info'>
            <div className='grid-item'>Mô tả</div>
            <div className='grid-item'>{props.data.comment}</div>
          </div>
          <div className='todo-info'>
            <p>To-Do</p>
            {props.data.todoLists.map((todo, index) => (
              <ToDo todo={todo} index={index} key={todo.id}></ToDo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

RDrawer.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default RDrawer;
