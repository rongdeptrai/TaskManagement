import React, { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";
import "../styles/RightComponent.css";
import IconButton from "@mui/material/IconButton";
import FormatListNumberedRtlOutlinedIcon from "@mui/icons-material/FormatListNumberedRtlOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircularProgress from "@mui/material/CircularProgress";
import ShowToDo from "./ShowToDo";
const ToDo = (props) => {
  const [onShowTodo, setOnShowTodo] = useState(false);

  const showTodo = () => {
    setOnShowTodo(!onShowTodo);
  };
  const countProges = (listprops) => {
    return listprops.length;
  };

  const doneProges = (listprops) => {
    return listprops.reduce((count, progress) => {
      return progress.status ? count + 1 : count;
    }, 0);
  };

  const donePercent = (listprops) => {
    return (doneProges(listprops) / countProges(listprops)) * 100;
  };
  return (
    <div>
      <div className='todo-list'>
        <FormatListNumberedRtlOutlinedIcon
          style={{ fontSize: "20px", marginLeft: "4px" }}
        />
        <IconButton
          style={{
            padding: "5px",
          }}
          onClick={showTodo}
        >
          {onShowTodo ? <ArrowDropDownIcon /> : <ArrowRightOutlinedIcon />}
        </IconButton>
        <CircularProgress
          variant='determinate'
          value={donePercent(props.todo.listprops)}
          style={{
            border: "1px solid rgb(231, 231, 231)",
            borderRadius: "50%",
          }}
          size={25}
        ></CircularProgress>
        {props.todo.content}
      </div>
      {onShowTodo && (
        <div className='checkBoxTodo'>
          {props.todo.listprops.map((progress, index) => (
            <ShowToDo progress={progress} index={index} key={progress.id} />
          ))}
          <p
            style={{
              marginLeft: "2rem",
              marginTop: "1rem",
              fontSize: "13px",
            }}
          >
            {" "}
            Thêm...
          </p>
        </div>
      )}
    </div>
  );
};
export default ToDo;
