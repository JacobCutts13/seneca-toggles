import { useEffect, useReducer } from "react";
import "./App.css";
import TogglesTile from "./components/TogglesTile";
import officeConditions from "./data/officeConditions.json";
import { Action, Questions } from "./interfaces";
import setQuestions from "./utils/setQuestions";

function App() {
  const reducer = (state: Questions[], action: Action) => {
    switch (action.type) {
      case "setQuestionsTile":
        //dont add question tile if its already there!
        if (state.some((questions) => questions.id === action.questions.id))
          return state;
        return [...state, action.questions];
      case "setSelector": {
        const tileQuestions = state[action.tileId];
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
        const newState = state.map((questions, i) =>
          i === action.tileId ? newTileQuestions : questions
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
  }, []);

  return (
    <div className="App">
      {state.length > 0 &&
        state.map((question, i) => (
          <div key={i}>
            <TogglesTile questions={question} dispatch={dispatch} />
          </div>
        ))}
    </div>
  );
}

export default App;
