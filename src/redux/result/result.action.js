import { resultActionTypes } from "./answer.types";

export const fetchResult = (result) => ({
  type: resultActionTypes.FETCH_RESULT,
  payload: result,
});
