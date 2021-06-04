import { resultActionTypes } from "./result.types";

const DUMMY_RESULT = [
  {
    id: 1,
    title:
      "Which of the following is NOT a sign of a lack of mentalcapacity? The individual",
    question_level_id: 1,
    slug: "which-of-the-following-is-not-a-sign-of-a-lack-of-mental-capacity-the-individual",
    created_at: null,
    updated_at: null,
    answer: {
      correct: {
        id: 3,
        question_id: 1,
        answer: "Has strong opinions that you think are unwise",
        correct_answer: 1,
        created_at: null,
        updated_at: null,
      },
      wrong: null,
    },
  },
  {
    id: 2,
    title:
      "Pick the best answer. Assessments of capacity should begin withthe assumption that the\r\nindividual:",
    question_level_id: 1,
    slug: "pick-the-best-answer-assessments-of-capacity-should-begin-with-the-assumption-that-the-individual",
    created_at: null,
    updated_at: null,
    answer: {
      correct: {
        id: 7,
        question_id: 2,
        answer: "Has the capacity to make the specific decision",
        correct_answer: 1,
        created_at: null,
        updated_at: null,
      },
      wrong: {
        id: 3,
        question_id: 1,
        answer: "Has strong opinions that you think are unwise",
        correct_answer: 1,
        created_at: null,
        updated_at: null,
      },
    },
  },
];

const INITIAL_STATE = {
  data: DUMMY_RESULT,
  result: {
    message: "",
    data: {
      correct: 0,
      wrong: 0,
    },
  },
};

export const resultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case resultActionTypes.FETCH_RESULT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
