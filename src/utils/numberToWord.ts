export default function numberToWord(n: number): string {
  if (n === 0 || n === 1 || n === 2) {
    const words = ["zero", "one", "two"];
    return words[n];
  }
  return "";
}
