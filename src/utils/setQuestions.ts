import { Dispatch } from "react";
import { Action, Question, QuestionsJson } from "../interfaces";
import shuffleOptions from "./shuffleOptions";

//format questions randomise order then set state
export default function setQuestions(
  dispatch: Dispatch<Action>,
  questionsJson: QuestionsJson
): void {
  let nIncorrect = 0;
  //To prevent shuffled questions being complete make at least 1 question incorrect
  const incorrectOptionIndex = Math.floor(
    Math.random() * questionsJson.questions.length
  );
  const questionsShuffledOptions: Question[] = questionsJson.questions.map(
    (question, index) => {
      //randomise option order
      const shuffledOptions = shuffleOptions(question.options);
      //start on random option
      let selectorIndex: number;
      if (index === incorrectOptionIndex) {
        //pick first incorrect index
        selectorIndex = shuffledOptions.findIndex((option) => option.id !== 0);
        nIncorrect++;
      } else {
        selectorIndex = Math.floor(Math.random() * question.options.length);
        //check if it's wrong increment counter
        if (shuffledOptions[selectorIndex].id !== 0) nIncorrect++;
      }
      return { ...question, options: shuffledOptions, selectorIndex };
    }
  );
  const shuffledQuestions = shuffleOptions(questionsShuffledOptions);
  const tile = {
    ...questionsJson,
    questions: shuffledQuestions,
    nIncorrect: nIncorrect,
  };
  dispatch({ type: "setTile", tile });
  return;
}
