import { sort } from "../src/sort";

const dataSet = [
  [
    [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],
];

test.each(dataSet)("on data: %j should return: %j", (data, expected) => {
  expect(sort(data)).toEqual(expected);
});
