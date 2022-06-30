import { OptionJson } from "../interfaces";

export default function shuffleOptions(options: OptionJson[]): OptionJson[] {
  const shuffledOptions = options
    .map((option) => ({ option, sortVal: Math.random() }))
    .sort((a, b) => a.sortVal - b.sortVal)
    .map((option) => option.option);
  return shuffledOptions;
}
