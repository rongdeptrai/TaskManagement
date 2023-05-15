import { cardContant } from "../_constants";
import { cardService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const cardActions = {
  getAllCard,
};

function getAllCard() {
  return (dispatch) => {
    dispatch(request());
    cardService.getAllCard().then(
      (cards) => dispatch(success(cards)),
      (error) => dispatch(failure(error.toString())),
    );
  };
  function request() {
    return { type: cardContant.TASK_GETALL_REQUEST };
  }
  function success(cards) {
    return { type: cardContant.GETALL_SUCCESS, cards };
  }
  function failure(error) {
    return { type: cardContant.GETALL_FAILURE, error };
  }
}
