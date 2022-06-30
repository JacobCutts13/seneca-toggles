import { useEffect, useReducer } from "react";
import "./App.css";
import TogglesTile from "./components/TogglesTile";
import officeConditions from "./data/officeConditions.json";
import myQuestions from "./data/myQuestions.json";
import { Action, Tile } from "./interfaces";
import setQuestions from "./utils/setQuestions";

function App() {
  const reducer = (state: Tile[], action: Action) => {
    switch (action.type) {
      case "setTile":
        //dont add question tile if its already there!
        if (state.some((tile) => tile.id === action.tile.id)) return state;
        return [...state, action.tile];

      case "setSelector": {
        const tileQuestions = state.find((tile) => tile.id === action.tileId);
        if (!tileQuestions) return state;
        if (tileQuestions.nIncorrect === 0) return state;
        let nIncorrect = tileQuestions.nIncorrect;
        const newQuestions = tileQuestions.questions.map((question) => {
          if (question.id !== action.questionId) return question;
          const wasCorrect = question.options[question.selectorIndex].id === 0;
          if (wasCorrect) nIncorrect++;
          const newIndex =
            (question.selectorIndex + 1) % question.options.length;
          const nowCorrect = question.options[newIndex].id === 0;
          if (nowCorrect) nIncorrect--;
          return { ...question, selectorIndex: newIndex };
        });
        const newTileQuestions = {
          ...tileQuestions,
          nIncorrect: nIncorrect,
          questions: newQuestions,
        };
        const newState = state.map((questions) =>
          questions.id === action.tileId ? newTileQuestions : questions
        );
        return newState;
      }
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    setQuestions(dispatch, officeConditions);
    setQuestions(dispatch, myQuestions);
  }, []);

  return (
    <div className="App">
      {state.length > 0 &&
        state.map((tile) => (
          <div key={tile.id} className="tile-container">
            <TogglesTile tile={tile} dispatch={dispatch} />
          </div>
        ))}
    </div>
  );
}

export default App;
