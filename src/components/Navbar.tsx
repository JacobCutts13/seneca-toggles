import { Dispatch } from "react";
import { Action, Tile } from "../interfaces";
import numberToWord from "../utils/numberToWord";

interface Props {
  state: Tile[];
  dispatch: Dispatch<Action>;
}

export default function Navbar(props: Props): JSX.Element {
  return (
    <div className="navbar">
      {props.state.map((tile, i) => (
        <a
          href={`#toggle-${tile.id.toString()}`}
          key={tile.id}
          className={`${numberToWord(tile.nIncorrect)}`}
        >
          <h1>{i + 1}</h1>
        </a>
      ))}
    </div>
  );
}
