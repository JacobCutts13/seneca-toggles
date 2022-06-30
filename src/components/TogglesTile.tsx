import { Dispatch } from "react";
import { Action, Questions } from "../interfaces";
import numberToWord from "../utils/numberToWord";
import ToggleQuestion from "./ToggleQuestion";

interface Props {
  questions: Questions;
  dispatch: Dispatch<Action>;
}

export default function TogglesTile(props: Props): JSX.Element {
  const markText =
    props.questions.nIncorrect === 0
      ? "This answer is Correct!"
      : "The answer is incorrect";
  return (
    <div id="toggles" className={numberToWord(props.questions.nIncorrect)}>
      <h1 className="questions-title">{props.questions.title}</h1>
      <div className="questions-container">
        {props.questions.questions.map((question, i) => (
          <div className="single-question-container" key={i}>
            <ToggleQuestion
              question={question}
              dispatch={props.dispatch}
              tileId={props.questions.id}
            />
          </div>
        ))}
      </div>
      <p className="questions-mark">{markText}</p>
    </div>
  );
}
