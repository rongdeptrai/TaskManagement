import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import "../styles/RightComponent.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ShowToDo = (props) => {
  const [checkBox, setCheckBox] = useState(props.progress.status);
  const handleChange = () => {
    setCheckBox(!checkBox);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Checkbox
          checked={checkBox}
          onChange={handleChange}
          size='medium'
          icon={
            <CircleOutlinedIcon
              style={{
                color: "white",
                border: "2px solid rgb(231, 231, 231)",
                borderRadius: "50%",
              }}
            />
          }
          checkedIcon={<CheckCircleIcon />}
          style={{
            padding: "0px",
            marginRight: "10px",
            display: "block",
            marginBottom: "10px",
          }}
        />
        {props.progress.seq}
      </div>
    </div>
  );
};
export default ShowToDo;
