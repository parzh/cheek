let assert = require("assert");
let cheek = require("./../index.js");

describe("Bundle", function() {
	describe("bundle(methodNames, inputs)", function() {
		it("returns a two-dimensional array of input-method verifications", function() {
			assert.deepEqual(
				cheek.bundle(["isInteger", "isPositive"], [5, -2]),
				[ [true, true], [true, false] ]
			);

			assert.deepEqual(
				cheek.bundle(["isDefined", "isPrimitive"], [null, undefined, new Object()]),
				[ [false, true], [false, true], [true, false] ]
			);

			assert.throws(() => cheek.bundle(["isNumber", "isInRange", "isNatural"], [5, [3, 4]]), SyntaxError);
		});
	});

	describe("everyMethod(methodNames, input)", function() {
		it("returns `true` if all of the verifications return `true`", function() {
			assert.equal(cheek.everyMethod(["isNumber", "isFinite", "isPositive"], -5), false);
			assert.equal(cheek.everyMethod(["isNumber", "isFinite", "isNegative"], -5), true);
			assert.equal(cheek.everyMethod(["isString", "isPrimitive"], "my text"), true);
		});
	});

	describe("someMethod(methodNames, input)", function() {
		it("returns `true` if any of the verifications returns `true`", function() {
			assert.equal(cheek.someMethod(["isNumber", "isString"], 42), true);
			assert.equal(cheek.someMethod(["isNotNatural", "isFloat"], 42), false);
			assert.equal(cheek.someMethod(["isObject", "isNull"], NaN), false);
		});
	});

	describe("everyInput(methodName, inputs)", function() {
		it("returns `true` if all input values pass verification", function() {
			assert.equal(cheek.everyInput("isNumber", [5, 4, -2]), true);
			assert.equal(cheek.everyInput("isNumber", [5, 4, -2, "my text"]), false);
			assert.equal(cheek.everyInput("isNatural", [1, 2, 3]), true);
		});
	});

	describe("someInput(methodName, inputs)", function() {
		it("returns `true` if any of the input values passes verification", function() {
			assert.equal(cheek.someInput("isNotDefined", [5, 4, null, -2]), true);
			assert.equal(cheek.someInput("isObject", [5, 4, -2, "my text"]), false);
			assert.equal(cheek.someInput("isNaN", [1, 2, 3]), false);
		});
	});
});