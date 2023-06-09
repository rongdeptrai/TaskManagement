import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import { CardListContainer, CardListWrapper } from "../styles/CardList.styles";
import CardListHeader from "./CardListHeader";
import AddForm from "../Action/AddForm";

const getFilteredCards = (cards, searchText) => {
  if (searchText) {
    return cards.filter((card) =>
      card.content.toLowerCase().includes(searchText.toLowerCase()),
    );
  }
  return cards;
};

const CardList = (props) => {
  console.log(props.isFirstList);
  return (
    <CardListWrapper>
      <CardListHeader
        listName={props.list.name}
        cardCount={props.list.cards.length}
        onChangeListName={props.onChangeListName}
        onRemoveList={props.onRemoveList}
        onDuplicateList={props.onDuplicateList}
        isFirstList={props.isFirstList}
      />
      {props.isFirstList && (
        <AddForm
          onConfirm={props.onAddCard}
          placeholder='+ Thêm công việc'
          focusPlaceholder='Enter card content'
          darkFont
          width='auto'
          gray
        />
      )}
      <Droppable droppableId={props.droppableId}>
        {(provided, snapshot) => (
          <CardListContainer
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {getFilteredCards(props.list.cards, props.searchText).map(
              (card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  onChangeCardContent={(content) =>
                    props.onChangeCardContent(index, content)
                  }
                  onRemoveCard={() => props.onRemoveCard(index)}
                  onDuplicateCard={() => props.onDuplicateCard(index)}
                />
              ),
            )}
            {provided.placeholder}
          </CardListContainer>
        )}
      </Droppable>
    </CardListWrapper>
  );
};

CardList.propTypes = {
  list: PropTypes.object,
  searchText: PropTypes.string,
  onChangeCardContent: PropTypes.func,
  onChangeListName: PropTypes.func,
  onRemoveList: PropTypes.func,
  droppableId: PropTypes.string,
  onAddCard: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onDuplicateCard: PropTypes.func,
  onDuplicateList: PropTypes.func,
};
export default CardList;
