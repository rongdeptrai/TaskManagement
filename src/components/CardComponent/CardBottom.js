import React, { useState, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Grid from "@mui/material/Grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import FormatListNumberedRtlOutlinedIcon from "@mui/icons-material/FormatListNumberedRtlOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const CardBottom = (props) => {
  return (
    <Grid
      container
      style={{
        marginTop: "30px",
        paddingBottom: "15px",
      }}
    >
      <Grid item sm={6} xs={12}>
        <IconButton
          style={{
            border: "1px dashed black",
            marginRight: "5px",
            padding: "5px",
          }}
        >
          <PermIdentityOutlinedIcon style={{ fontSize: "20px" }} />
        </IconButton>
        <IconButton
          style={{
            border: "1px dashed black",
            marginRight: "5px",
            padding: "7px",
          }}
        >
          <CalendarTodayOutlinedIcon style={{ fontSize: "16px" }} />
        </IconButton>
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          fontSize: "16px",
        }}
      >
        <IconButton
          style={{
            padding: "5px",
          }}
        >
          <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
          <span style={{ fontSize: "0.8rem" }}>3</span>
        </IconButton>
        <IconButton
          style={{
            padding: "5px",
            marginRight: "4px",
          }}
        >
          <AttachFileIcon style={{ fontSize: "20px" }} />
          <span style={{ fontSize: "0.8rem" }}>3</span>
        </IconButton>
        <IconButton
          style={{
            padding: "5px",
          }}
          onClick={props.showTodo}
        >
          <span style={{ fontSize: "0.8rem" }}>3</span>
          <FormatListNumberedRtlOutlinedIcon
            style={{ fontSize: "20px", marginLeft: "4px" }}
          />
        </IconButton>
        <IconButton
          style={{
            padding: "5px",
          }}
          onClick={props.showTodo}
        >
          {props.onShowTodo ? (
            <ArrowDropDownIcon />
          ) : (
            <ArrowRightOutlinedIcon />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default CardBottom;
