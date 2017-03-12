let assert = require("assert");
let cheek = require("./../index.js");

describe("Number", function() {
	describe("isNaN(input)", function() {
		it("checks whether the input is exactly `NaN`", function() {
			assert(cheek.isNaN(NaN));
			assert(!cheek.isNaN());
			assert(cheek.isNaN(0 / 0));
		});
	});

	describe("isNotNaN(input)", function() {
		it("returns `true` if the input is not `NaN`", function() {
			assert(!cheek.isNotNaN(NaN));
			assert(cheek.isNotNaN(null));
			assert(!cheek.isNotNaN(0 / 0));
		});
	});

	describe("isFinite(input)", function() {
		it("checks whether the input is a finite number", function() {
			assert(cheek.isFinite(42));
			assert(!cheek.isFinite(NaN));
			assert(!cheek.isFinite(new Object()));
		});
	});

	describe("isNotFinite(input)", function() {
		it("returns `true` if the input is not a finite number", function() {
			assert(!cheek.isNotFinite(5));
			assert(cheek.isNotFinite(NaN));
			assert(cheek.isNotFinite(new Object()));
		});
	});

	describe("isInteger(input)", function() {
		it("checks whether the input is an integer", function() {
			assert(cheek.isInteger(42));
			assert(!cheek.isInteger(42.5));
			assert(cheek.isInteger(0));
		});
	});

	describe("isNotInteger(input)", function() {
		it("returns `true` if the input is not an integer", function() {
			assert(!cheek.isNotInteger(42));
			assert(cheek.isNotInteger(42.5));
			assert(!cheek.isNotInteger(0.0));
		});
	});

	describe("isNatural(input, zero)", function() {
		it("checks whether the input is a natural number", function() {
			assert(cheek.isNatural(5));
			assert(!cheek.isNatural(42.5));
			assert(cheek.isNatural(-0));
			assert(!cheek.isNatural(0, false));
		});
	});

	describe("isNotNatural(input, zero)", function() {
		it("returns `true` if input not a natural number", function() {
			assert(!cheek.isNotNatural(5));
			assert(cheek.isNotNatural(42.5));
			assert(!cheek.isNotNatural(0));
			assert(cheek.isNotNatural(0, false));
		});
	});

	describe("isPercent(input)", function() {
		it("checks whether the input is a fraction between 0 and 1 inclusively", function() {
			assert(cheek.isPercent(0.42));
			assert(!cheek.isPercent(42));
			assert(cheek.isPercent(0.0));
		});
	});

	describe("isNotPercent(input)", function() {
		it("returns `true` if the input is not a fraction between 0 and 1 inclusively", function() {
			assert(!cheek.isNotPercent(0.5));
			assert(cheek.isNotPercent(5));
			assert(!cheek.isNotPercent(-0.0));
		});
	});

	describe("isEqualTo(input, operand)", function() {
		it("checks whether the input is equal to the operand", function() {
			assert(cheek.isEqualTo(42, 42));
			assert(!cheek.isEqualTo(42, 5));
			assert(!cheek.isEqualTo(NaN, NaN));
		});
	});

	describe("isEqualToAny(input, operands)", function() {
		it("checks whether the input is equal to any of the operands", function() {
			assert(cheek.isEqualToAny(5, [1, 2, 3, 4, 5]));
			assert(!cheek.isEqualToAny(5, [3, 14, 15, 9, 26]));

			let arr = new Array(10).fill(0).map((el, pos) => pos);

			assert(cheek.isEqualToAny(5, arr));
		});
	});

	describe("isGreaterThan(input, operand)", function() {
		it("checks whether the input is greater than the operand", function() {
			assert(cheek.isGreaterThan(42, 5));
			assert(!cheek.isGreaterThan(5, 42));
			assert(!cheek.isGreaterThan(NaN, NaN));
		});
	});

	describe("isGreaterThanOrEqualTo(input, operand)", function() {
		it("checks whether the input is greater than or equal to the operand", function() {
			assert(cheek.isGreaterThanOrEqualTo(42, 5));
			assert(cheek.isGreaterThanOrEqualTo(42, 42));
			assert(!cheek.isGreaterThanOrEqualTo(NaN, NaN));
		});
	});

	describe("isLessThan(input, operand)", function() {
		it("checks whether the input is less than the operand", function() {
			assert(cheek.isLessThan(5, 42));
			assert(!cheek.isLessThan(42, 5));
			assert(!cheek.isLessThan(NaN, NaN));
		});
	});

	describe("isLessThanOrEqualTo(input, operand)", function() {
		it("checks whether the input is less than or equal to the operand", function() {
			assert(cheek.isLessThanOrEqualTo(5, 42));
			assert(cheek.isLessThanOrEqualTo(5, 5));
			assert(!cheek.isLessThanOrEqualTo(NaN, NaN));
		});
	});

	describe("isPositive(input)", function() {
		it("checks whether the input is greater than zero", function() {
			assert(cheek.isPositive(5));
			assert(!cheek.isPositive(0));
			assert(!cheek.isPositive(-5));
		});
	});

	describe("isNotPositive(input)", function() {
		it("returns `true` if the input is less than or equal to zero", function() {
			assert(!cheek.isNotPositive(5));
			assert(cheek.isNotPositive(0));
			assert(cheek.isNotPositive(-5));
		});
	});

	describe("isNegative(input)", function() {
		it("checks whether the input is less than zero", function() {
			assert(cheek.isNegative(-5));
			assert(!cheek.isNegative(0));
			assert(!cheek.isNegative(5));
		});
	});

	describe("isNotNegative(input)", function() {
		it("checks whether the input is greater than or equal to zero", function() {
			assert(!cheek.isNotNegative(-5));
			assert(cheek.isNotNegative(0));
			assert(cheek.isNotNegative(5));
		});
	});

	describe("isZero(input)", function() {
		it("checks whether the input is equal to zero", function() {
			assert(cheek.isZero(0));
			assert(cheek.isZero(new Number()));
			assert(!cheek.isZero(null));
		});
	});

	describe("isNotZero(input)", function() {
		it("returns `true` if the input is unequal to zero", function() {
			assert(!cheek.isNotZero(0));
			assert(!cheek.isNotZero(new Number()));
			assert(cheek.isNotZero(null));
		});
	});

	describe("isDivisibleBy(numerator, denominator)", function() {
		it("cheks whether `numerator` is divisible by `denominator`", function() {
			assert(!cheek.isDivisibleBy(42, 5));
			assert(cheek.isDivisibleBy(40, 5));
			assert(cheek.isDivisibleBy(0, 0));
		});
	});

	describe("isNotDivisibleBy(numerator, denominator)", function() {
		it("returns `true` if `numerator` is not divisible by `denominator`", function() {
			assert(cheek.isNotDivisibleBy(42, 5));
			assert(!cheek.isNotDivisibleBy(40, 5));
			assert(!cheek.isNotDivisibleBy(0, 0));
		});
	});

	describe("isInRange(input, range, inclusively)", function() {
		it("checks whether the input is in provided range", function() {
			assert(cheek.isInRange(15, [5, 42]));
			assert(cheek.isInRange(5, [5, 42]));
			assert(!cheek.isInRange(5, [5, 42], "exclusively"));
		});
	});

	describe("isNotInRange(input, range, inclusively)", function() {
		it("returns `true` if the input is not in provided range", function() {
			assert(!cheek.isNotInRange(15, [5, 42]));
			assert(!cheek.isNotInRange(5, [5, 42], "inclusively"));
			assert(cheek.isNotInRange(5, [5, 42], "excl"));
		});
	});
});