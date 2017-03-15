let assert = require("assert");
let check = require("./../index.js");

describe("Number", function() {
	describe("isNaN(input)", function() {
		it("checks whether the input is exactly `NaN`", function() {
			assert(check.isNaN(NaN));
			assert(!check.isNaN());
			assert(check.isNaN(0 / 0));
		});
	});

	describe("isNotNaN(input)", function() {
		it("returns `true` if the input is not `NaN`", function() {
			assert(!check.isNotNaN(NaN));
			assert(check.isNotNaN(null));
			assert(!check.isNotNaN(0 / 0));
		});
	});

	describe("isFinite(input)", function() {
		it("checks whether the input is a finite number", function() {
			assert(check.isFinite(42));
			assert(!check.isFinite(NaN));
			assert(!check.isFinite(new Object()));
		});
	});

	describe("isNotFinite(input)", function() {
		it("returns `true` if the input is not a finite number", function() {
			assert(!check.isNotFinite(5));
			assert(check.isNotFinite(NaN));
			assert(check.isNotFinite(new Object()));
		});
	});

	describe("isInteger(input)", function() {
		it("checks whether the input is an integer", function() {
			assert(check.isInteger(42));
			assert(!check.isInteger(42.5));
			assert(check.isInteger(0));
		});
	});

	describe("isNotInteger(input)", function() {
		it("returns `true` if the input is not an integer", function() {
			assert(!check.isNotInteger(42));
			assert(check.isNotInteger(42.5));
			assert(!check.isNotInteger(0.0));
		});
	});

	describe("isNatural(input, zero)", function() {
		it("checks whether the input is a natural number", function() {
			assert(check.isNatural(5));
			assert(!check.isNatural(42.5));
			assert(check.isNatural(-0));
			assert(!check.isNatural(0, false));
		});
	});

	describe("isNotNatural(input, zero)", function() {
		it("returns `true` if input not a natural number", function() {
			assert(!check.isNotNatural(5));
			assert(check.isNotNatural(42.5));
			assert(!check.isNotNatural(0));
			assert(check.isNotNatural(0, false));
		});
	});

	describe("isPercent(input)", function() {
		it("checks whether the input is a fraction between 0 and 1 inclusively", function() {
			assert(check.isPercent(0.42));
			assert(!check.isPercent(42));
			assert(check.isPercent(0.0));
		});
	});

	describe("isNotPercent(input)", function() {
		it("returns `true` if the input is not a fraction between 0 and 1 inclusively", function() {
			assert(!check.isNotPercent(0.5));
			assert(check.isNotPercent(5));
			assert(!check.isNotPercent(-0.0));
		});
	});

	describe("isEqualTo(input, operand)", function() {
		it("checks whether the input is equal to the operand", function() {
			assert(check.isEqualTo(42, 42));
			assert(!check.isEqualTo(42, 5));
			assert(!check.isEqualTo(NaN, NaN));
		});
	});

	describe("isEqualToAny(input, operands)", function() {
		it("checks whether the input is equal to any of the operands", function() {
			assert(check.isEqualToAny(5, [1, 2, 3, 4, 5]));
			assert(!check.isEqualToAny(5, [3, 14, 15, 9, 26]));

			let arr = new Array(10).fill(0).map((el, pos) => pos);

			assert(check.isEqualToAny(5, arr));
		});
	});

	describe("isGreaterThan(input, operand)", function() {
		it("checks whether the input is greater than the operand", function() {
			assert(check.isGreaterThan(42, 5));
			assert(!check.isGreaterThan(5, 42));
			assert(!check.isGreaterThan(NaN, NaN));
		});
	});

	describe("isGreaterThanOrEqualTo(input, operand)", function() {
		it("checks whether the input is greater than or equal to the operand", function() {
			assert(check.isGreaterThanOrEqualTo(42, 5));
			assert(check.isGreaterThanOrEqualTo(42, 42));
			assert(!check.isGreaterThanOrEqualTo(NaN, NaN));
		});
	});

	describe("isLessThan(input, operand)", function() {
		it("checks whether the input is less than the operand", function() {
			assert(check.isLessThan(5, 42));
			assert(!check.isLessThan(42, 5));
			assert(!check.isLessThan(NaN, NaN));
		});
	});

	describe("isLessThanOrEqualTo(input, operand)", function() {
		it("checks whether the input is less than or equal to the operand", function() {
			assert(check.isLessThanOrEqualTo(5, 42));
			assert(check.isLessThanOrEqualTo(5, 5));
			assert(!check.isLessThanOrEqualTo(NaN, NaN));
		});
	});

	describe("isPositive(input)", function() {
		it("checks whether the input is greater than zero", function() {
			assert(check.isPositive(5));
			assert(!check.isPositive(0));
			assert(!check.isPositive(-5));
		});
	});

	describe("isNotPositive(input)", function() {
		it("returns `true` if the input is less than or equal to zero", function() {
			assert(!check.isNotPositive(5));
			assert(check.isNotPositive(0));
			assert(check.isNotPositive(-5));
		});
	});

	describe("isNegative(input)", function() {
		it("checks whether the input is less than zero", function() {
			assert(check.isNegative(-5));
			assert(!check.isNegative(0));
			assert(!check.isNegative(5));
		});
	});

	describe("isNotNegative(input)", function() {
		it("checks whether the input is greater than or equal to zero", function() {
			assert(!check.isNotNegative(-5));
			assert(check.isNotNegative(0));
			assert(check.isNotNegative(5));
		});
	});

	describe("isZero(input)", function() {
		it("checks whether the input is equal to zero", function() {
			assert(check.isZero(0));
			assert(check.isZero(new Number()));
			assert(!check.isZero(null));
		});
	});

	describe("isNotZero(input)", function() {
		it("returns `true` if the input is unequal to zero", function() {
			assert(!check.isNotZero(0));
			assert(!check.isNotZero(new Number()));
			assert(check.isNotZero(null));
		});
	});

	describe("isDivisibleBy(numerator, denominator)", function() {
		it("cheks whether `numerator` is divisible by `denominator`", function() {
			assert(!check.isDivisibleBy(42, 5));
			assert(check.isDivisibleBy(40, 5));
			assert(check.isDivisibleBy(0, 0));
		});
	});

	describe("isNotDivisibleBy(numerator, denominator)", function() {
		it("returns `true` if `numerator` is not divisible by `denominator`", function() {
			assert(check.isNotDivisibleBy(42, 5));
			assert(!check.isNotDivisibleBy(40, 5));
			assert(!check.isNotDivisibleBy(0, 0));
		});
	});

	describe("isInRange(input, range, inclusively)", function() {
		it("checks whether the input is in provided range", function() {
			assert(check.isInRange(15, [5, 42]));
			assert(check.isInRange(5, [5, 42]));
			assert(!check.isInRange(5, [5, 42], "exclusively"));
		});
	});

	describe("isNotInRange(input, range, inclusively)", function() {
		it("returns `true` if the input is not in provided range", function() {
			assert(!check.isNotInRange(15, [5, 42]));
			assert(!check.isNotInRange(5, [5, 42], "inclusively"));
			assert(check.isNotInRange(5, [5, 42], "excl"));
		});
	});
});