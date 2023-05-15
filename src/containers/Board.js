import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddForm from "../components/Action/AddForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BoardContainer } from "../components/styles/BoardContainer.js";
import CardList from "../components/CardComponent/CardList";
import { cardActions } from "../actions";

import {
  addCard,
  removeCard,
  addList,
  removeList,
  reOrderList,
  moveCardToList,
  setCardContent,
  setListName,
  duplicateCard,
  duplicateList,
  clickCard,
} from "../actions/boardActions";

const Board = (props) => {
  const [listTask, setListTask] = useState(
    props.listCard.currentState.listTask
      ? props.listCard.currentState.listTask
      : [],
  );

  useEffect(() => {
    if (props.listCard?.currentState?.listTask) {
      setListTask(props.listCard.currentState.listTask);
    }
  }, [props.listCard.currentState.listTask]);
  console.log(props.listCard);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      // Dropped in the same list
      props.reOrderList(source.droppableId, source.index, destination.index);
    } else {
      // Drop in other list
      props.moveCardToList(
        source.droppableId,
        draggableId,
        destination.droppableId,
        destination.index,
      );
    }
  };
  return (
    <div className='board'>
      {/*  <BoardContainer countColumns={props.lists ? props.lists.length + 1 : 1}> */}
      <BoardContainer countColumns={listTask ? listTask.length + 1 : 1}>
        <DragDropContext onDragEnd={onDragEnd}>
          {listTask.map((list, listIndex) => (
            <CardList
              key={list.id}
              droppableId={list.id}
              list={list}
              isFirstList={listIndex === 0}
              onChangeListName={(listName) =>
                props.onChangeListName(listIndex, listName)
              }
              onRemoveList={() => props.onRemoveList(listIndex)}
              onDuplicateList={() => props.onDuplicateList(listIndex)}
              onChangeCardContent={(cardIndex, content) =>
                props.onChangeCardContent(listIndex, cardIndex, content)
              }
              onAddCard={(cardContent) =>
                props.onAddCard(listIndex, cardContent)
              }
              onRemoveCard={(cardIndex) =>
                props.onRemoveCard(listIndex, cardIndex)
              }
              onDuplicateCard={(cardIndex) =>
                props.onDuplicateCard(listIndex, cardIndex)
              }
              searchText={props.search}
            />
          ))}
        </DragDropContext>
        <AddForm
          onConfirm={props.onAddList}
          placeholder='+ Thêm danh sách task'
          focusPlaceholder='Nhập tên danh sách'
          maxWidth='220px'
        />
      </BoardContainer>
    </div>
  );
};
Board.propTypes = {
  reOrderList: PropTypes.func,
  moveCardToList: PropTypes.func,
  lists: PropTypes.array,
  onChangeListName: PropTypes.func,
  onRemoveList: PropTypes.func,
  onDuplicateList: PropTypes.func,
  onChangeCardContent: PropTypes.func,
  search: PropTypes.string,
  onAddList: PropTypes.func,
  onAddCard: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onDuplicateCard: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => ({
  addCard: bindActionCreators(addCard, dispatch),
  removeCard: bindActionCreators(removeCard, dispatch),
  addList: bindActionCreators(addList, dispatch),
  removeList: bindActionCreators(removeList, dispatch),
  reOrderList: bindActionCreators(reOrderList, dispatch),
  moveCardToList: bindActionCreators(moveCardToList, dispatch),
  onChangeCardContent: bindActionCreators(setCardContent, dispatch),
  onChangeListName: bindActionCreators(setListName, dispatch),
  onRemoveList: bindActionCreators(removeList, dispatch),
  onDuplicateList: bindActionCreators(duplicateList, dispatch),
  onAddList: bindActionCreators(addList, dispatch),
  onAddCard: bindActionCreators(addCard, dispatch),
  onRemoveCard: bindActionCreators(removeCard, dispatch),
  onDuplicateCard: bindActionCreators(duplicateCard, dispatch),
});
const mapStateToProps = (state) => ({
  /* lists: state.board.currentState.lists, */
  search: state.search,
  listCard: state.listCard,
  ListCard: state.listCard.currentState.listTask,
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
