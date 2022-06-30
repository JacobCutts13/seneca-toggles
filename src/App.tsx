import { useEffect, useReducer } from "react";
import "./App.css";
import TogglesTile from "./components/TogglesTile";
import officeConditions from "./data/officeConditions.json";
import { Action, Questions } from "./interfaces";
import { EmptyQuestion } from "./data/emptyQuestions";
import setQuestions from "./utils/setQuestions";

function App() {
  const reducer = (state: Questions, action: Action) => {
    switch (action.type) {
      case "setQuestions":
        return action.questions;
      case "setOption":
        return state;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, EmptyQuestion);

  useEffect(() => {
    setQuestions(dispatch, officeConditions);
  }, []);

  return (
    <div className="App">
      <TogglesTile questions={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
