import { combineReducers } from "redux";
import { questionReducer } from "./question/question.reducer";
import { answerReducer } from "./answer/answer.reducer";
import { resultReducer } from "./result/result.reducer";
const rootReducer = combineReducers({
  question: questionReducer,
  answer: answerReducer,
  result: resultReducer,
});

export default rootReducer;
