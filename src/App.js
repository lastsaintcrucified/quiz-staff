import "./App.css";
// import { useEffect } from "react";
// import { fetchQuestionStartAsync } from "./redux/question/question.action";
// import { connect } from "react-redux";
import Question from "./component/question/question.component";

const App = () => {
  // useEffect(() => {
  //   fetchQuestionStartAsync();
  // }, [fetchQuestionStartAsync]);
  // console.log("question-->", question);
  return (
    <div className="App">
      <h1>Quiz on mental health</h1>
      <Question />
    </div>
  );
};
// const mapStateToProps = ({ question }) => ({
//   question,
// });
// const mapDispatchToProps = (dispatch) => ({
//   fetchQuestionStartAsync: () => dispatch(fetchQuestionStartAsync()),
// });
export default App;
