import { answerActionTypes } from "./answer.types";

const INITIAL_STATE = {};

export const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case answerActionTypes.FETCH_ANSWER:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
