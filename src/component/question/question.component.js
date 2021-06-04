import React from "react";
import { connect } from "react-redux";
import Card from "../card/card.component";

import "./question.styles.css";

const Question = ({ question }) => {
  return (
    <div>
      {question.data.map((q) => {
        return <Card key={Math.random()} id={q.id} q={q} />;
      })}

      <button>Submit</button>
    </div>
  );
};

const mapStateToProps = ({ question }) => ({
  question,
});

export default connect(mapStateToProps)(Question);
