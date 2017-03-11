let assert = require("assert");
let cheek = require("./../index.js");

describe("General", function() {
	describe("isTruthy(input)", function() {
		it("checks whether the input evaluates to `true`", function() {
			assert.equal(cheek.isTruthy(true), true);
			assert.equal(cheek.isTruthy("text"), true);
			assert.equal(cheek.isTruthy(new Object()), true);
		});
	});

	describe("isFalsy(input)", function() {
		it("checks whether the input evaluates to `false`", function() {
			assert.equal(cheek.isFalsy(true), false);
			assert.equal(cheek.isFalsy(""), true);
			assert.equal(cheek.isFalsy([]), false);
		});
	});

	describe("isTrue(input)", function() {
		it("checks whether the input is exactly `true`", function() {
			assert.equal(cheek.isTrue(true), true);
			assert.equal(cheek.isTrue(new Boolean()), false);
			assert.equal(cheek.isTrue(42), false);
			assert.equal(cheek.isTrue(undefined), false);
		});
	});

	describe("isFalse(input)", function() {
		it("checks whether the input is exactly `false`", function() {
			assert.equal(cheek.isFalse(true), false);
			assert.equal(cheek.isFalse(new Boolean()), true);
			assert.equal(cheek.isFalse(42), false);
			assert.equal(cheek.isFalse(null), false);
		});
	});
});