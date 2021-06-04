import React from "react";
import { connect } from "react-redux";
import Card from "../card/card.component";
import { processResult } from "../../utils/utils";

import "./question.styles.css";

const Question = ({ question, answer, result }) => {
  const handleClick = () => {
    processResult(answer, result);
  };
  return (
    <div>
      {question.data.map((q) => {
        return <Card key={Math.random()} id={q.id} q={q} />;
      })}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

const mapStateToProps = ({ question, answer, result }) => ({
  question,
  answer,
  result,
});

export default connect(mapStateToProps)(Question);
