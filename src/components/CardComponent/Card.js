import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import OutsideClickHandler from "../Action/OutsideClickHandler";
import { CardContainer, ButtonFlag, TodoCheck } from "../styles/Card.styles";
import * as UtilsHelper from "../../helpers/utils";
import ContentEditable from "../Action/ContentEditable";
import Grid from "@mui/material/Grid";
import IconButtons from "../Action/IconButton";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import IconButton from "@mui/material/IconButton";
import RDrawer from "../Drawer/Drawer";
import CardToDo from "./CardToDo";
import CardBottom from "./CardBottom";
const Card = ({
  card,
  index,
  onChangeCardContent,
  onRemoveCard,
  onDuplicateCard,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [openDrawerId, setOpenDrawerId] = useState(false);
  const [onShowTodo, setOnShowTodo] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if (editMode) {
      UtilsHelper.focusCursorToEnd(ref);
    }
  }, [editMode]);
  const [cardContent, setCardContent] = useState(card.content);
  const [cardId, setCardCId] = useState(card.id);
  const [cardPriority, setCardPriority] = useState(card.priority);
  const [cardTag, setCardTag] = useState(card.tag);
  const [cardExecutor, setCardExecutor] = useState(card.executor);
  /*   console.log(card); */
  useEffect(() => {
    setCardContent(card.content);
  }, [card.content]);

  const onClickOutside = () => {
    setEditMode(false);
    onChangeCardContent(cardContent);
  };

  const onClickSaveEdit = () => {
    if (editMode) {
      onChangeCardContent(cardContent);
    }
    setEditMode((iseditMode) => !iseditMode);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.stopPropagation();
      e.preventDefault();
      setEditMode(false);
      ref.current.blur();
      const name = ref.current.innerText;
      onChangeCardContent(name);
      if (e.key === "Escape") {
        setOpenDrawerId(false);
      }
    }
  };
  const random_color = () => {
    const random_hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + random_hex.padStart(6, "0");
  };
  const tagStyle = {
    color: random_color(),
    fontSize: "20px",
  };
  const handleItemClick = () => {
    setOpenDrawerId(!openDrawerId);
  };

  const showTodo = () => {
    setOnShowTodo(!onShowTodo);
  };

  return (
    <OutsideClickHandler
      shouldListenClick={editMode}
      onClickOutside={onClickOutside}
    >
      {openDrawerId && (
        <>
          <RDrawer
            data={card}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpenDrawerId(false);
              }
            }}
            isOpen={openDrawerId}
            isColse={() => {
              setOpenDrawerId(false);
            }}
          ></RDrawer>
        </>
      )}

      <Draggable key={card.id} draggableId={card.id} index={index}>
        {(provided) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            onClick={() => handleItemClick()}
          >
            <Grid>
              <Grid item xs={12}>
                <span>cardiD. {cardContent}</span>
              </Grid>
              <Grid container style={{ marginTop: "15px" }}>
                <Grid item sm={6} xs={12}>
                  <ButtonFlag>
                    <FlagRoundedIcon /> <span>{cardPriority}</span>
                  </ButtonFlag>
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <LocalOfferRoundedIcon style={tagStyle} />
                  <LocalOfferRoundedIcon style={tagStyle} />
                  <LocalOfferRoundedIcon style={tagStyle} />
                </Grid>
              </Grid>
              <CardBottom
                showTodo={showTodo}
                onShowTodo={onShowTodo}
              ></CardBottom>
              {onShowTodo && (
                <div style={{ borderTop: "1px solid rgb(231, 231, 231)" }}>
                  {card.todoLists.map((todo, index) => (
                    <CardToDo
                      todo={todo}
                      index={index}
                      key={todo.id}
                    ></CardToDo>
                  ))}
                </div>
              )}
            </Grid>
          </CardContainer>
        )}
      </Draggable>
    </OutsideClickHandler>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onChangeCardContent: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onDuplicateCard: PropTypes.func,
};
export default Card;
