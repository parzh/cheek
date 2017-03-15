let assert = require("assert");
let check = require("./../index.js");

describe("Bundle", function() {
	describe("bundle(methodNames, inputs)", function() {
		it("returns a two-dimensional array of input-method verifications", function() {
			assert.deepEqual(
				check.bundle(["isInteger", "isPositive"], [5, -2]),
				[ [true, true], [true, false] ]
			);

			assert.deepEqual(
				check.bundle(["isDefined", "isPrimitive"], [null, undefined, new Object()]),
				[ [false, true], [false, true], [true, false] ]
			);

			assert.throws(() => check.bundle(["isNumber", "isInRange", "isNatural"], [5, [3, 4]]), SyntaxError);
		});
	});

	describe("everyMethod(methodNames, input)", function() {
		it("returns `true` if all of the verifications return `true`", function() {
			assert(!check.everyMethod(["isNumber", "isFinite", "isPositive"], -5));
			assert(check.everyMethod(["isNumber", "isFinite", "isNegative"], -5));
			assert(check.everyMethod(["isString", "isPrimitive"], "my text"));
		});
	});

	describe("someMethod(methodNames, input)", function() {
		it("returns `true` if any of the verifications returns `true`", function() {
			assert(check.someMethod(["isNumber", "isString"], 42));
			assert(!check.someMethod(["isNotNatural", "isFloat"], 42));
			assert(!check.someMethod(["isObject", "isNull"], NaN));
		});
	});

	describe("everyInput(methodName, inputs)", function() {
		it("returns `true` if all input values pass verification", function() {
			assert(check.everyInput("isNumber", [5, 4, -2]));
			assert(!check.everyInput("isNumber", [5, 4, -2, "my text"]));
			assert(check.everyInput("isNatural", [1, 2, 3]));
		});
	});

	describe("someInput(methodName, inputs)", function() {
		it("returns `true` if any of the input values passes verification", function() {
			assert(check.someInput("isNotDefined", [5, 4, null, -2]));
			assert(!check.someInput("isObject", [5, 4, -2, "my text"]));
			assert(!check.someInput("isNaN", [1, 2, 3]));
		});
	});
});