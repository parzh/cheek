let assert = require("assert");
let check = require("./../index.js");

const INPUTS = [42, 42.6, new Object(), null];

describe("Proxy", function() {
	describe("input(input)", function() {
		it("prepares single input for further validation", function() {
			let input = check.input(-42.5);

			assert(input.isDefined());
			assert(input.is(Number));
			assert(input.isNeither([String, Array]));
			assert(!input.isNot(Number));
			assert(!input.isEither([String, Array]));

			assert(!input.everyMethod(["isNotDefined", "isFalse"]));
			assert(!input.someMethod(["isUndefined", "isFalsy"]));

			assert.throws(() => input.bundle(["isDefined", "isTrue"]), TypeError);
			assert.throws(() => input.everyInput("isPositive"), TypeError);
			assert.throws(() => input.someInput("isPositive"), TypeError);
		});
	});

	describe("inputs(inputs)", function() {
		it("prepares a bunch of inputs for further validation", function() {
			let inputs = check.inputs(INPUTS);

			assert.deepEqual(inputs.bundle(["isPrimitive", "isNumber"]), [[true, true], [true, true], [false, false], [true, false]]);

			assert.throws(() => inputs.isNotDefined(), TypeError);

			assert(!inputs.everyInput("isPrimitive"));
		});
	});

	describe("every(inputs)", function() {
		it("checks whether all input values pass verification", function() {
			let every = check.every(INPUTS);

			assert(!every.isPrimitive());
			assert(!every.isNumber());

			assert(check.every([1, 2, -3, 4]).isInRange([-4, 4]));
		});
	});

	describe("some(inputs)", function() {
		it("checks whether any of the input values passes verification", function() {
			let some = check.some(INPUTS);
			
			assert(some.isNotDefined());
			assert(!some.isInRange([10, 39], "exclusive"));

			assert.throws(() => some.isNotInRange(), SyntaxError);
		});

	});
	describe("none(inputs)", function() {
		it("checks whether none of the input values passes verification", function() {
			let none = check.none(INPUTS);

			assert(none.isString());
			assert(none.isInRange([10, 39], "exclusive"));

			assert(!none.isDefined());
		});
	});
});