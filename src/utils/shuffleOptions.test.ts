import shuffleOptions from "./shuffleOptions";

const option1 = { text: "", id: 1 };

test("shuffleOptions will randomise the order of the options array", () => {
  expect(shuffleOptions([])).toStrictEqual([]);
  expect(shuffleOptions([option1])).toStrictEqual([option1]);
});
