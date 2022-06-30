import { Dispatch } from "react";
import { Action, Question } from "../interfaces";

interface Props {
  question: Question;
  dispatch: Dispatch<Action>;
}

export default function ToggleQuestion(props: Props): JSX.Element {
  return (
    <>
      <button className="question-button">
        {props.question.options.map((option, i) => (
          <div
            className={`answer ${
              i === props.question.selectorIndex ? "active" : "inactive"
            }`}
            key={i}
          >
            <p>{option.text}</p>
          </div>
        ))}
        <div
          className={`answer-slider ${
            props.question.selectorIndex === 0 ? "" : "right"
          }`}
        ></div>
      </button>
    </>
  );
}
