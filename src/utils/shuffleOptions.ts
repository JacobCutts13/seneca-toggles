import { OptionJson, Question } from "../interfaces";

//Fisher–Yates shuffle
function shuffleOptions(array: Question[]): Question[];
function shuffleOptions(array: OptionJson[]): OptionJson[];
function shuffleOptions(array: OptionJson[] | Question[]) {
  const shuffledArray = array
    .map((element) => ({ element, sortVal: Math.random() }))
    .sort((a, b) => a.sortVal - b.sortVal)
    .map((element) => element.element);
  return shuffledArray;
}

export default shuffleOptions;
