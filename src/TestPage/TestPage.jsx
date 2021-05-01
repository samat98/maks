import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { questionActions } from "../_actions";
import Radio from "./Radio";

function TestPage(props) {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [ind, setInd] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    dispatch(questionActions.getAllQuestions(props.match.params.test));
  }, []);

  const increment = (e) => {
    e.preventDefault();
    if (answer.choice) {
      answers.push(answer);
      setInd(ind + 1);
      setAnswer({});
    }
    if (questions.items.length - ind <= 1) {
      dispatch(questionActions.setAllAnswers(props.match.params.test, answers));
    } else {
    }
  };

  const handleChange = (event) => {
    setAnswer({
      question: questions.items[ind].id,
      choice: event.target.value,
      choice_text: "1",
    });
  };

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Test: </h1>
      {questions.loading && <em>Loading questions...</em>}
      {questions.testResult && (
        <div>
          <em>score: {questions.testResult.percentage}%</em>
          <p>incorrect: {questions.testResult.incorrect}</p>
        </div>
      )}
      {questions.error && (
        <span className="text-danger">ERROR: {questions.error}</span>
      )}
      {questions.items && questions.items[ind] && (
        <form onSubmit={increment}>
          <div key={ind} onChange={handleChange}>
            <label>{questions.items[ind].text}</label>
            {questions.items[ind].options.map((op, i) => {
              return <Radio key={i} op={op} />;
            })}
            <button action="submit" className="btn btn-primary">
              next
            </button>
          </div>
        </form>
      )}
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
}

export { TestPage };
