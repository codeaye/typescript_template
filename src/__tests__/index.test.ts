import add from "../index";

test("Add 2 and 2 and expect it to be 4", () => {
	expect(add(2, 2)).toBe(4);
});

test("Add 4 and 4 and expect it not to be 4", () => {
	expect(add(4, 4)).not.toBe(4);
});
