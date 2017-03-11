let assert = require("assert");
let cheek = require("./../index.js");

describe("Number", function() {
	describe("isNaN(input)", function() {
		it("checks whether the input is exactly `nan", function() {
			assert.equal(cheek.isNaN(NaN), true);
			assert.equal(cheek.isNaN(), false);
			assert.equal(cheek.isNaN(0 / 0), true);
		});
	});

	describe("isNotNaN(input)", function() {
		it("returns `true` if the input is not `nan", function() {
			assert.equal(cheek.isNotNaN(NaN), false);
			assert.equal(cheek.isNotNaN(null), true);
			assert.equal(cheek.isNotNaN(0 / 0), false);
		});
	});

	describe("isFinite(input)", function() {
		it("checks whether the input is a finite number", function() {
			assert.equal(cheek.isFinite(42), true);
			assert.equal(cheek.isFinite(NaN), false);
			assert.equal(cheek.isFinite(new Object()), false);
		});
	});

	describe("isNotFinite(input)", function() {
		it("returns `true` if the input is not a finite number", function() {
			assert.equal(cheek.isNotFinite(5), false);
			assert.equal(cheek.isNotFinite(NaN), true);
			assert.equal(cheek.isNotFinite(new Object()), true);
		});
	});

	describe("isInteger(input)", function() {
		it("checks whether the input is an integer", function() {
			assert.equal(cheek.isInteger(42), true);
			assert.equal(cheek.isInteger(42.5), false);
			assert.equal(cheek.isInteger(0), true);
		});
	});

	describe("isNotInteger(input)", function() {
		it("returns `true` if the input is not an integer", function() {
			assert.equal(cheek.isNotInteger(42), false);
			assert.equal(cheek.isNotInteger(42.5), true);
			assert.equal(cheek.isNotInteger(0.0), false);
		});
	});

	describe("isNatural(input, zero: boolean = true)", function() {
		it("checks whether the input is a natural number", function() {
			assert.equal(cheek.isNatural(5), true);
			assert.equal(cheek.isNatural(42.5), false);
			assert.equal(cheek.isNatural(-0), true);
			assert.equal(cheek.isNatural(0, false), false);
		});
	});

	describe("isNotNatural(input, zero: boolean = true)", function() {
		it("returns `true` if input not a natural number", function() {
			assert.equal(cheek.isNotNatural(5), false);
			assert.equal(cheek.isNotNatural(42.5), true);
			assert.equal(cheek.isNotNatural(0), false);
			assert.equal(cheek.isNotNatural(0, false), true);
		});
	});

	describe("isPercent(input)", function() {
		it("checks whether the input is a fraction between 0 and 1 inclusively", function() {
			assert.equal(cheek.isPercent(0.42), true);
			assert.equal(cheek.isPercent(42), false);
			assert.equal(cheek.isPercent(0.0), true);
		});
	});

	describe("isNotPercent(input)", function() {
		it("returns `true` if the input is not a fraction between 0 and 1 inclusively", function() {
			assert.equal(cheek.isNotPercent(0.5), false);
			assert.equal(cheek.isNotPercent(5), true);
			assert.equal(cheek.isNotPercent(-0.0), false);
		});
	});

	describe("isEqualTo(input, operand)", function() {
		it("checks whether the input is equal to the operand", function() {
			assert.equal(cheek.isEqualTo(42, 42), true);
			assert.equal(cheek.isEqualTo(42, 5), false);
			assert.equal(cheek.isEqualTo(NaN, NaN), false);
		});
	});

	describe("isEqualToAny(input, operands)", function() {
		it("checks whether the input is equal to any of the operands", function() {
			assert.equal(cheek.isEqualToAny(5, [1, 2, 3, 4, 5]), true);
			assert.equal(cheek.isEqualToAny(5, [3, 14, 15, 9, 26]), false);

			let arr = new Array(10).fill(0).map((el, pos) => pos);

			assert.equal(cheek.isEqualToAny(5, arr), true);
		});
	});

	describe("isGreaterThan(input, operand)", function() {
		it("checks whether the input is greater than the operand", function() {
			assert.equal(cheek.isGreaterThan(42, 5), true);
			assert.equal(cheek.isGreaterThan(5, 42), false);
			assert.equal(cheek.isGreaterThan(NaN, NaN), false);
		});
	});

	describe("isGreaterThanOrEqualTo(input, operand)", function() {
		it("checks whether the input is greater than or equal to the operand", function() {
			assert.equal(cheek.isGreaterThanOrEqualTo(42, 5), true);
			assert.equal(cheek.isGreaterThanOrEqualTo(42, 42), true);
			assert.equal(cheek.isGreaterThanOrEqualTo(NaN, NaN), false);
		});
	});

	describe("isLessThan(input, operand)", function() {
		it("checks whether the input is less than the operand", function() {
			assert.equal(cheek.isLessThan(5, 42), true);
			assert.equal(cheek.isLessThan(42, 5), false);
			assert.equal(cheek.isLessThan(NaN, NaN), false);
		});
	});

	describe("isLessThanOrEqualTo(input, operand)", function() {
		it("checks whether the input is less than or equal to the operand", function() {
			assert.equal(cheek.isLessThanOrEqualTo(5, 42), true);
			assert.equal(cheek.isLessThanOrEqualTo(5, 5), true);
			assert.equal(cheek.isLessThanOrEqualTo(NaN, NaN), false);
		});
	});

	describe("isPositive(input)", function() {
		it("checks whether the input is greater than zero", function() {
			assert.equal(cheek.isPositive(5), true);
			assert.equal(cheek.isPositive(0), false);
			assert.equal(cheek.isPositive(-5), false);
		});
	});

	describe("isNotPositive(input)", function() {
		it("returns `true` if the input is less than or equal to zero", function() {
			assert.equal(cheek.isNotPositive(5), false);
			assert.equal(cheek.isNotPositive(0), true);
			assert.equal(cheek.isNotPositive(-5), true);
		});
	});

	describe("isNegative(input)", function() {
		it("checks whether the input is less than zero", function() {
			assert.equal(cheek.isNegative(-5), true);
			assert.equal(cheek.isNegative(0), false);
			assert.equal(cheek.isNegative(5), false);
		});
	});

	describe("isNotNegative(input)", function() {
		it("checks whether the input is greater than or equal to zero", function() {
			assert.equal(cheek.isNotNegative(-5), false);
			assert.equal(cheek.isNotNegative(0), true);
			assert.equal(cheek.isNotNegative(5), true);
		});
	});

	describe("isZero(input)", function() {
		it("checks whether the input is equal to zero", function() {
			assert.equal(cheek.isZero(0), true);
			assert.equal(cheek.isZero(new Number()), true);
			assert.equal(cheek.isZero(null), false);
		});
	});

	describe("isNotZero(input)", function() {
		it("returns `true` if the input is unequal to zero", function() {
			assert.equal(cheek.isNotZero(0), false);
			assert.equal(cheek.isNotZero(new Number()), false);
			assert.equal(cheek.isNotZero(null), true);
		});
	});

	describe("isNotDivisibleBy(numerator, denominator)", function() {
		it("returns `true` if `numerator` is not divisible by `denominator", function() {
			assert.equal(cheek.isNotDivisibleBy(42, 5), true);
			assert.equal(cheek.isNotDivisibleBy(40, 5), false);
			assert.equal(cheek.isNotDivisibleBy(0, 0), false);
		});
	});

	describe("isInRange(input, range, inclusively)", function() {
		it("checks whether the input is in provided range", function() {
			assert.equal(cheek.isInRange(15, [5, 42]), true);
			assert.equal(cheek.isInRange(5, [5, 42]), true);
			assert.equal(cheek.isInRange(5, [5, 42], "exclusively"), false);
		});
	});

	describe("isNotInRange(input, range, inclusively)", function() {
		it("returns `true` if the input is not in provided range", function() {
			assert.equal(cheek.isNotInRange(15, [5, 42]), false);
			assert.equal(cheek.isNotInRange(5, [5, 42], "inclusively"), false);
			assert.equal(cheek.isNotInRange(5, [5, 42], "excl"), true);
		});
	});
});