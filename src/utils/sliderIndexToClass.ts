export default function sliderIndexToClass(
  index: number,
  nOptions: number
): string {
  if (nOptions === 2) {
    if (index === 0) return "";
    return "right";
  }
  if (index === 0) return "three";
  if (index === 1) return "three-middle";
  return "three-far-right";
}
