import { Dispatch } from "react";
import { Action, Tile } from "../interfaces";
import numberToWord from "../utils/numberToWord";
import ToggleQuestion from "./ToggleQuestion";

interface Props {
  tile: Tile;
  dispatch: Dispatch<Action>;
}

export default function TogglesTile(props: Props): JSX.Element {
  //get classNames
  const markText =
    props.tile.nIncorrect === 0
      ? "This answer is Correct!"
      : "The answer is incorrect";

  return (
    <div
      id={`toggle-${props.tile.id.toString()}`}
      className={`tile ${numberToWord(props.tile.nIncorrect)}`}
    >
      <h1 className="questions-title">{props.tile.title}</h1>
      <div className="questions-container">
        {props.tile.questions.map((question, i) => (
          <div className="single-question-container" key={i}>
            <ToggleQuestion
              question={question}
              dispatch={props.dispatch}
              tileId={props.tile.id}
              nIncorrect={props.tile.nIncorrect}
            />
          </div>
        ))}
      </div>
      <p className="questions-mark">{markText}</p>
    </div>
  );
}
