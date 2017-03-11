let assert = require("assert");
let cheek = require("./../index.js");

const INPUTS = [42, 42.6, new Object(), null];

describe("Proxy", function() {
	describe("input(input)", function() {
		it("prepares single input for further validation", function() {
			let input = cheek.input(-42.5);

			assert.equal(input.isDefined(), true);
			assert.equal(input.is(Number), true);
			assert.equal(input.isNot(Number), false);
			assert.equal(input.isEither([String, Array]), false);
			assert.equal(input.isNeither([String, Array]), true);

			assert.equal(input.everyMethod(["isNotDefined", "isFalse"]), false);
			assert.equal(input.someMethod(["isUndefined", "isFalsy"]), false);

			assert.throws(() => input.bundle(["isDefined", "isTrue"]), TypeError);
			assert.throws(() => input.everyInput("isPositive"), TypeError);
			assert.throws(() => input.someInput("isPositive"), TypeError);
		});
	});

	describe("inputs(inputs)", function() {
		it("prepares a bunch of inputs for further validation", function() {
			let inputs = cheek.inputs(INPUTS);

			assert.deepEqual(
				inputs.bundle(["isPrimitive", "isNumber"]),
				[ [true, true], [true, true], [false, false], [true, false] ]
			);

			assert.equal(inputs.everyInput("isPrimitive"), false);
			assert.throws(() => inputs.isNotDefined(), TypeError);
		});
	});

	describe("every(inputs)", function() {
		it("checks whether all input values pass verification", function() {
			let every = cheek.every(INPUTS);

			assert.equal(every.isPrimitive(), false);
			assert.equal(every.isNumber(), false);
			assert.equal(cheek.every([1, 2, -3, 4]).isInRange([-4, 4]), true);
		});
	});

	describe("some(inputs)", function() {
		it("checks whether any of the input values passes verification", function() {
			let some = cheek.some(INPUTS);
			
			assert.equal(some.isNotDefined(), true);
			assert.throws(() => some.isNotInRange(), SyntaxError);
			assert.equal(some.isInRange([10, 39], "exclusive"), false);
		});

	});
	describe("none(inputs)", function() {
		it("checks whether none of the input values passes verification", function() {
			let none = cheek.none(INPUTS);

			assert.equal(none.isDefined(), false);
			assert.equal(none.isString([]), true);
			assert.equal(none.isInRange([10, 39], "exclusive"), true);
		});
	});
});