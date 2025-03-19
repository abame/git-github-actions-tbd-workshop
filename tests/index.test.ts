import { greet } from "../src/index";

test("greet function returns correct greeting", () => {
  expect(greet("GitHub Actions"))
    .toBe("Hello, GitHub Actions!");
});
