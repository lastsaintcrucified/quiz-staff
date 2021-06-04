import React from "react";
import { connect } from "react-redux";
import { fetchAnswer } from "../../redux/answer/answer.action";
import "./part.styles.css";

const Part = ({ op, fetchAnswer }) => {
  const handleChange = (e) => {
    fetchAnswer({
      name: e.currentTarget.name,
      value: e.currentTarget.value,
    });
  };

  return (
    <div>
      <input
        type="radio"
        id={op.question_id}
        name={op.question_id}
        value={op.correct_answer}
        onChange={handleChange}
      />
      <label htmlFor={op.answer}>{op.answer}</label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchAnswer: (answer) => dispatch(fetchAnswer(answer)),
});

export default connect(null, mapDispatchToProps)(Part);
