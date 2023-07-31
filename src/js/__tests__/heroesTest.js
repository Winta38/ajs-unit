import heroes from "../heroes";

test("health level sorting test", () => {
  const result = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  expect(result).toEqual(heroes);
});
