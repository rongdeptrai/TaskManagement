import React, { useState, useEffect, useRef } from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import IconButton from "@mui/material/IconButton";
const RightHeader = (props) => {
  return (
    <div className='right-header'>
      <IconButton
        style={{
          marginRight: "5px",
          padding: "7px",
        }}
      >
        <CalendarTodayOutlinedIcon style={{ fontSize: "16px" }} />
      </IconButton>

      <IconButton
        style={{
          padding: "5px",
          marginRight: "4px",
        }}
      >
        <AttachFileIcon style={{ fontSize: "20px" }} />
      </IconButton>
      <IconButton
        style={{
          marginRight: "5px",
          padding: "7px",
        }}
      >
        <MoreHorizIcon style={{ fontSize: "16px" }} />
      </IconButton>
      <IconButton
        style={{
          marginRight: "5px",
          padding: "7px",
        }}
        onClick={props.isColse}
      >
        <ExitToAppIcon style={{ fontSize: "16px" }} />
      </IconButton>
    </div>
  );
};
export default RightHeader;
