import { Dispatch } from "react";
import { Action, Question } from "../interfaces";
import numberToWord from "../utils/numberToWord";
import sliderIndexToClass from "../utils/sliderIndexToClass";

interface Props {
  question: Question;
  dispatch: Dispatch<Action>;
  tileId: number;
  nIncorrect: number;
}

export default function ToggleQuestion(props: Props): JSX.Element {
  //get classNames
  //arbitrary >30 charcters then use vertical slider
  const verticalClass = props.question.options.some(
    (option) => option.text.length > 30
  )
    ? "vertical"
    : "";

  return (
    <>
      <button
        className={`question-button ${verticalClass}`}
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
            } ${numberToWord(props.nIncorrect)} ${verticalClass}`}
            key={i}
          >
            <p>{option.text}</p>
          </div>
        ))}
        <div
          className={`answer-slider ${sliderIndexToClass(
            props.question.selectorIndex,
            props.question.options.length
          )} ${numberToWord(props.nIncorrect)} ${verticalClass}`}
        ></div>
      </button>
    </>
  );
}
