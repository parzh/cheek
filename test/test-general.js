let assert = require("assert");
let check = require("./../index.js");

describe("General", function() {
	describe("isTruthy(input)", function() {
		it("checks whether the input evaluates to `true`", function() {
			assert(check.isTruthy(true));
			assert(check.isTruthy("text"));
			assert(check.isTruthy(new Object()));
		});
	});

	describe("isFalsy(input)", function() {
		it("checks whether the input evaluates to `false`", function() {
			assert(!check.isFalsy(true));
			assert(check.isFalsy(""));
			assert(!check.isFalsy([]));
		});
	});

	describe("isTrue(input)", function() {
		it("checks whether the input is exactly `true`", function() {
			assert(check.isTrue(true));
			assert(!check.isTrue(new Boolean()));
			assert(!check.isTrue(42));
			assert(!check.isTrue(undefined));
		});
	});

	describe("isFalse(input)", function() {
		it("checks whether the input is exactly `false`", function() {
			assert(!check.isFalse(true));
			assert(check.isFalse(new Boolean()));
			assert(!check.isFalse(42));
			assert(!check.isFalse(null));
		});
	});

	describe("check.and(input, operand)", function() {
		it("returns `true` if both agruments are truthy", function() {
			assert(check.and(true, true));
			assert(!check.and(42, ""));
			assert(!check.and(0, "text"));
			assert(!check.and("", null));
		});
	});
});