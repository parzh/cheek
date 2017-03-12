let assert = require("assert");
let cheek = require("./../index.js");

describe("General", function() {
	describe("isTruthy(input)", function() {
		it("checks whether the input evaluates to `true`", function() {
			assert(cheek.isTruthy(true));
			assert(cheek.isTruthy("text"));
			assert(cheek.isTruthy(new Object()));
		});
	});

	describe("isFalsy(input)", function() {
		it("checks whether the input evaluates to `false`", function() {
			assert(!cheek.isFalsy(true));
			assert(cheek.isFalsy(""));
			assert(!cheek.isFalsy([]));
		});
	});

	describe("isTrue(input)", function() {
		it("checks whether the input is exactly `true`", function() {
			assert(cheek.isTrue(true));
			assert(!cheek.isTrue(new Boolean()));
			assert(!cheek.isTrue(42));
			assert(!cheek.isTrue(undefined));
		});
	});

	describe("isFalse(input)", function() {
		it("checks whether the input is exactly `false`", function() {
			assert(!cheek.isFalse(true));
			assert(cheek.isFalse(new Boolean()));
			assert(!cheek.isFalse(42));
			assert(!cheek.isFalse(null));
		});
	});
});