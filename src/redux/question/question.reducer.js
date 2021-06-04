import { questionActionTypes } from "./question.types";

const DUMMY_QUESTION = [
  {
    id: 1,
    title:
      "Which of the following is NOT a sign of a lack of mental capacity? The individual",
    question_level_id: 1,
    slug: "which-of-the-following-is-not-a-sign-of-a-lack-of-mental-capacity-the-individual",
    created_at: null,
    updated_at: null,
    pivot: {
      question_tag_id: 1,
      question_id: 1,
    },
    question_options: [
      {
        id: 1,
        question_id: 1,
        answer: "Can't understand the pertinent information",
        correct_answer: 0,
        created_at: null,
        updated_at: null,
      },
      {
        id: 2,
        question_id: 1,
        answer: "Can't remember information while deciding",
        correct_answer: 0,
        created_at: null,
        updated_at: null,
      },
      {
        id: 3,
        question_id: 1,
        answer: "Has strong opinions that you think are unwise",
        correct_answer: 1,
        created_at: null,
        updated_at: null,
      },
      {
        id: 4,
        question_id: 1,
        answer: "Can't assess information to be able to make a decision",
        correct_answer: 0,
        created_at: null,
        updated_at: null,
      },
    ],
  },
  {
    id: 2,
    title:
      "Pick the best answer. Assessments of capacity should begin with the assumption that",
    question_level_id: 1,
    slug: "pick-the-best-answer-assessments-of-capacity-should-begin-with-the-assumption-that-the-individual",
    created_at: null,
    updated_at: null,
    pivot: {
      question_tag_id: 1,
      question_id: 2,
    },
    question_options: [
      {
        id: 5,
        question_id: 2,
        answer: "Has a brain impairment or damage",
        correct_answer: 0,
        created_at: null,
        updated_at: null,
      },
      {
        id: 6,
        question_id: 2,
        answer: "Can't remember information while making decisions",
        correct_answer: 0,
        created_at: null,
        updated_at: null,
      },
      {
        id: 7,
        question_id: 2,
        answer: "Has the capacity to make the specific decision",
        correct_answer: 1,
        created_at: null,
        updated_at: null,
      },
      {
        id: 8,
        question_id: 2,
        answer: "Can't assess information to be able to make a decision",
        correct_answer: 0,
        created_at: null,
        updated_at: null,
      },
    ],
  },
];

const INITIAL_STATE = {
  isFetching: false,
  data: DUMMY_QUESTION,
  error: null,
};

export const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case questionActionTypes.FETCH_QUESTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case questionActionTypes.FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case questionActionTypes.FETCH_QUESTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
