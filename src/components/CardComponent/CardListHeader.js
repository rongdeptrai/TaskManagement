import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CardListHeader as StyledCardListHeader } from "../styles/CardList.styles";
import OutsideClickHandler from "../Action/OutsideClickHandler";
import ContentEditable from "../Action/ContentEditable";
import IconButton from "../Action/IconButton";
import * as UtilsHelper from "../../helpers/utils";
import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import AddForm from "../Action/AddForm";

const CardListHeader = (props) => {
  const ref = useRef(null);
  const [onHover, setOnHover] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [listName, setListName] = useState(props.listName);
  useEffect(() => {
    setListName(props.listName);
  }, [props.listName]);

  const onClickSaveEdit = () => {
    if (editMode) {
      props.onChangeListName(listName);
    }
    setEditMode((isEditing) => !isEditing);
  };

  useEffect(() => {
    if (editMode) {
      UtilsHelper.focusCursorToEnd(ref);
    }
  }, [editMode]);

  const onClickOutside = () => {
    setEditMode(false);
    props.onChangeListName(listName);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.stopPropagation();
      e.preventDefault();
      setEditMode(false);
      ref.current.blur();
      const name = ref.current.innerText;
      props.onChangeListName(name);
    }
  };
  const random_color = () => {
    const random_hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + random_hex.padStart(6, "0");
  };
  return (
    <OutsideClickHandler
      shouldListenClick={editMode}
      onClickOutside={onClickOutside}
    >
      <StyledCardListHeader
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <FontAwesomeIcon
          icon={faSquare}
          color={random_color()}
          style={{
            fontSize: "1.5rem",
            marginRight: "0.2rem",
          }}
        />
        <ContentEditable
          innerRef={ref}
          html={listName}
          onChange={(e) => setListName(e.target.value)}
          onFocus={() => setEditMode(true)}
          onKeyDown={handleKeyDown}
          style={{ paddingRight: 24 }}
        />
        <Chip
          label={props.cardCount}
          style={{
            fontSize: "0.8rem",
            marginLeft: "0.2rem",
            height: "1.2rem",
            padding: "0px 6px",
          }}
        />

        <IconButton.ButtonContainer
          top='11px'
          right={editMode ? "11px" : "3px"}
        >
          <IconButton
            onClick={onClickSaveEdit}
            iconType={editMode ? "confirm" : "edit"}
          />
        </IconButton.ButtonContainer>
      </StyledCardListHeader>
    </OutsideClickHandler>
  );
};

CardListHeader.propTypes = {
  listName: PropTypes.string,
  onChangeListName: PropTypes.func,
  onRemoveList: PropTypes.func,
  onDuplicateList: PropTypes.func,
};

export default CardListHeader;
