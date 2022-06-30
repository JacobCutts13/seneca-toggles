import { Dispatch } from "react";
import { Action, Question } from "../interfaces";
import sliderIndexToClass from "../utils/sliderIndexToClass";

interface Props {
  question: Question;
  dispatch: Dispatch<Action>;
  tileId: number;
}

export default function ToggleQuestion(props: Props): JSX.Element {
  return (
    <>
      <button
        className="question-button"
        onClick={() =>
          props.dispatch({
            type: "setSelector",
            questionId: props.question.id,
            tileId: props.tileId,
          })
        }
      >
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
          className={`answer-slider ${sliderIndexToClass(
            props.question.selectorIndex,
            props.question.options.length
          )}`}
        ></div>
      </button>
    </>
  );
}
