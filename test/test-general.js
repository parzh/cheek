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

	describe("check.nand(input, operand)", function() {
		it("returns `false` if both agruments are truthy", function() {
			assert(!check.nand(true, true));
			assert(check.nand(42, ""));
			assert(check.nand(0, "text"));
			assert(check.nand("", null));
		});
	});

	describe("check.or(input, operand)", function() {
		it("returns `true` if at least one of agruments is truthy", function() {
			assert(check.or(true, true));
			assert(check.or(42, ""));
			assert(check.or(0, "text"));
			assert(!check.or("", null));
		});
	});

	describe("check.nor(input, operand)", function() {
		it("returns `true` if both agruments are falsy", function() {
			assert(!check.nor(true, true));
			assert(!check.nor(42, ""));
			assert(!check.nor(0, "text"));
			assert(check.nor("", null));
		});
	});

	describe("check.xor(input, operand)", function() {
		it("returns `true` if agruments are not equal", function() {
			assert(!check.xor(true, true));
			assert(check.xor(42, ""));
			assert(check.xor(0, "text"));
			assert(!check.xor("", null));
		});
	});
});