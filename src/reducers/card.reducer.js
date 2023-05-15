import mockData from "../helpers/mockData";
import { cardContant } from "../_constants";
import * as BoardHelper from "../helpers/boardHelper";
import * as types from "../_constants/ActionTypes";
import { randomId } from "../helpers/utils";

const initialState = {
  listTask: [],
};

export function listCard(state = initialState, action) {
  let newState;
  let newList;
  switch (action.type) {
    case cardContant.TASK_GETALL_REQUEST:
      return {
        loading: true,
      };
    case cardContant.GETALL_SUCCESS:
      return {
        listTask: action.cards,
      };
    case cardContant.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case types.ADD_LIST:
      newState = [
        ...state.listTask,
        {
          id: randomId(),
          name: action.data,
          listTask: [],
        },
      ];
      console.log(newState);
      return {
        ...state,
        listTask: newState,
        offset: state.offset + 1,
      };

    case types.REMOVE_LIST:
      newList = [...state.listTask];
      newList.splice(action.data, 1);
      return {
        ...state,
        listTask: newList,
      };
    case types.DUPLICATE_LIST:
      const listToDuplicate = state.listTask[action.data];
      return {
        ...state,
        listTask: [
          ...state.listTask.slice(0, action.data),
          {
            ...listToDuplicate,
            id: randomId(),
            listTask: listToDuplicate.listTask.map((card) => ({
              ...card,
              id: randomId(),
            })),
          },
          ...state.listTask.slice(action.data),
        ],
      };

    case types.ADD_CARD:
      return {
        ...state,
        listTask: state.listTask.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list;
          }
          return {
            ...list,
            listTask: [
              ...list.listTask,
              {
                id: randomId(),
                content: action.data.cardContent,
              },
            ],
          };
        }),
      };

    case types.REMOVE_CARD:
      return {
        ...state,
        listTask: state.listTask.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list;
          }
          const newlistTask = [...list.listTask];
          newlistTask.splice(action.data.cardIndex, 1);
          return {
            ...list,
            listTask: newlistTask,
          };
        }),
      };
    case types.DUPLICATE_CARD:
      return {
        ...state,
        listTask: state.listTask.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list;
          }
          const cardToDuplicate = list.listTask[action.data.cardIndex];
          return {
            ...list,
            listTask: [
              ...list.listTask.slice(0, action.data.cardIndex),
              {
                ...cardToDuplicate,
                id: randomId(),
              },
              ...list.listTask.slice(action.data.cardIndex),
            ],
          };
        }),
      };

    case types.SET_CARD_CONTENT:
      return {
        ...state,
        listTask: state.listTask.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list;
          }
          return {
            ...list,
            listTask: list.listTask.map((card, cardIndex) => {
              if (cardIndex !== action.data.cardIndex) {
                return card;
              }
              return {
                ...card,
                content: action.data.content,
              };
            }),
          };
        }),
      };

    case types.SET_LIST_NAME:
      return {
        ...state,
        listTask: state.listTask.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list;
          }
          return {
            ...list,
            name: action.data.listName,
          };
        }),
      };

    case types.RE_ORDER_LIST:
      const listIndex = state.listTask.findIndex(
        (list) => list.id === action.data.listId,
      );
      const list = state.listTask[listIndex];
      const orderedListlistTask = BoardHelper.reOrderList(
        list.listTask,
        action.data.listTaskourceIndex,
        action.data.cardDestinationIndex,
      );
      newState = [...state.listTask];
      newState[listIndex] = {
        ...newState[listIndex],
        listTask: orderedListlistTask,
      };
      return {
        ...state,
        listTask: newState,
      };

    case types.MOVE_CARD_TO_LIST:
      const sourceListIndex = state.listCard.findIndex(
        (cardList) => cardList.id === action.data.sourceListId,
      );
      const sourceList = state.listCard[sourceListIndex];
      const destinationListIndex = state.listCard.findIndex(
        (cardList) => cardList.id === action.data.destinationListId,
      );
      const destinationList = state.listCard[destinationListIndex];
      const listTaskourceIndex = sourceList.listCard.findIndex(
        (item) => item.id === action.data.cardId,
      );
      const { newSourceList, newDestinationList } = BoardHelper.moveCardToList(
        sourceList.listCard,
        destinationList.listCard,
        listTaskourceIndex,
        action.data.cardDestinationIndex,
      );

      newState = [...state.listCard];
      newState[sourceListIndex] = {
        ...newState[sourceListIndex],
        listTask: newSourceList,
      };
      newState[destinationListIndex] = {
        ...newState[destinationListIndex],
        listTask: newDestinationList,
      };
      return {
        ...state,
        listTask: newState,
      };
    default:
      return state;
  }
}
