import React from "react";

import "./card.styles.css";

import Part from "../Part/part.component";

const Card = ({ q }) => {
  return (
    <div>
      <h1>Q. {q.title}</h1>
      {q.question_options.map((op, indx) => {
        console.log(indx);
        return (
          <Part key={Math.random()} id={op.question_id} op={op} i={indx} />
        );
      })}
    </div>
  );
};

export default Card;
