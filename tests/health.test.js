import { getHealthStatus } from "../health";

const dataSet = [
  [{ health: 90, name: "Batman" }, "healthy"],
  [{ health: 50, name: "Spider-man" }, "wounded"],
  [{ health: 14, name: "Jocker" }, "critical"],
];

describe("getHealthStatus", () => {
  test.each(dataSet)("on data: %j should return %s", (data, expected) => {
    expect(getHealthStatus(data)).toBe(expected);
  });
});
