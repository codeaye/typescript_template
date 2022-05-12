import add from "./index";

test("Add 2 and 2 and expect it to be 4", () => {
	expect(add(2, 2)).toBe(4);
});
