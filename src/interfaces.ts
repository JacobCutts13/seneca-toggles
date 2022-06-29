export interface QuestionsJson {
  title: string;
  questions: QuestionJson[];
}

export interface QuestionJson {
  id: number;
  options: OptionJson[];
}

export interface OptionJson {
  text: string;
  isCorrect: boolean;
}

export interface Questions extends QuestionsJson {
  nIncorrect: number;
}
