import { questionActionTypes } from "./question.types";
import axios from "axios";
const slug = "quiz-mock-exam-mental-health-care-mca-dols";
// const token = "11|VC0Whq6wDb0FKgu1Xfh9mZ78ofxvknwwuCv2wzF9";

const myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
// myHeaders.append("Content-type", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer 11|VC0Whq6wDb0FKgu1Xfh9mZ78ofxvknwwuCv2wzF9"
);

export const fetchQuestionStart = () => ({
  type: questionActionTypes.FETCH_QUESTION_START,
});

export const fetchQuestionSuccess = (question) => ({
  type: questionActionTypes.FETCH_QUESTION_SUCCESS,
  payload: question,
});

export const fetchQuestionFailure = (error) => ({
  type: questionActionTypes.FETCH_QUESTION_FAILURE,
  payload: error,
});

export const fetchQuestionStartAsync = () => {
  return (dispatch) => {
    axios.defaults.withCredentials = true;
    axios.get(
      `https://backend.imentalhealth.net/api/quiz/${encodeURIComponent(slug)}`,
      {
        header: {
          Authorization: "Mutual 11|VC0Whq6wDb0FKgu1Xfh9mZ78ofxvknwwuCv2wzF9",
        },
      }
    );
    // axios
    //   .get("https://backend.imentalhealth.net/sanctum/csrf-cookie", {
    //     withCredentials: true,
    //   })
    //   .then((res) => {

    //   });

    // dispatch(fetchQuestionStart());
    // raw
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(fetchQuestionSuccess(data));
    //     console.log(data);
    //   })
    //   .catch((error) => dispatch(fetchQuestionFailure(error)));
  };
};
