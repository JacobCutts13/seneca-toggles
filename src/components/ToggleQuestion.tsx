import { Dispatch } from "react";
import { Action, Question } from "../interfaces";
import numberToWord from "../utils/numberToWord";
import sliderIndexToClass from "../utils/sliderIndexToClass";
import useWindowWidth from "../hooks/useWindowWidth";

interface Props {
  question: Question;
  dispatch: Dispatch<Action>;
  tileId: number;
  nIncorrect: number;
}

export default function ToggleQuestion(props: Props): JSX.Element {
  const width = useWindowWidth();
  //get classNames
  //arbitrary >width/50 charcters then use vertical slider
  const verticalClass = props.question.options.some(
    (option) => option.text.length > width / 50
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
