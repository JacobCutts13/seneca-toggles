import { Dispatch } from "react";
import { Action, Question, QuestionsJson } from "../interfaces";
import shuffleOptions from "./shuffleOptions";

export default function setQuestions(
  dispatch: Dispatch<Action>,
  questionsJson: QuestionsJson
): void {
  let nIncorrect = 0;
  const shuffledQuestions: Question[] = questionsJson.questions.map(
    (question) => {
      //randomise option order
      const shuffledOptions = shuffleOptions(question.options);
      //start on random option
      const selectorIndex = Math.floor(Math.random() * question.options.length);
      //check if it's wrong increment counter
      if (shuffledOptions[selectorIndex].id !== 0) nIncorrect++;
      return { ...question, options: shuffledOptions, selectorIndex };
    }
  );
  const questions = {
    ...questionsJson,
    questions: shuffledQuestions,
    nIncorrect: nIncorrect,
  };
  dispatch({ type: "setQuestionsTile", questions });
  return;
}
