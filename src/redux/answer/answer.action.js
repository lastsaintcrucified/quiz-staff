import { answerActionTypes } from "./answer.types";

export const fetchAnswer = (answer) => ({
  type: answerActionTypes.FETCH_ANSWER,
  payload: answer,
});
