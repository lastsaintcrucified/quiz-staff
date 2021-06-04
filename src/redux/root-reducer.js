import { combineReducers } from "redux";
import { questionReducer } from "./question/question.reducer";
import { answerReducer } from "./answer/answer.reducer";
const rootReducer = combineReducers({
  question: questionReducer,
  answer: answerReducer,
});

export default rootReducer;
