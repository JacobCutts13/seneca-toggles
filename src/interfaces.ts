export interface QuestionsJson {
  id: number;
  title: string;
  questions: QuestionJson[];
}

export interface QuestionJson {
  id: number;
  options: OptionJson[];
}

//id=0=correct id!=0=incorrect
export interface OptionJson {
  text: string;
  id: number;
}

export interface Question extends QuestionJson {
  selectorIndex: number;
}

export interface Tile extends Omit<QuestionsJson, "questions"> {
  questions: Question[];
  nIncorrect: number;
}

export type Action =
  | { type: "setTile"; tile: Tile }
  | { type: "setSelector"; questionId: number; tileId: number };
