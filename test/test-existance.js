let assert = require("assert");
let cheek = require("./../index.js");

describe("Existance", function() {
	describe("isUndefined(input)", function() {
		it("checks whether the input is exactly `undefined`", function() {
			assert.equal(cheek.isUndefined(undefined), true);
			assert.equal(cheek.isUndefined(), true);
			assert.equal(cheek.isUndefined(null), false);
			assert.throws(() => cheek.isUndefined(foo), ReferenceError);
		});
	});

	describe("isNull(input)", function() {
		it("checks whether the input is exactly `null`", function() {
			assert.equal(cheek.isNull(null), true);
			assert.equal(cheek.isNull(), false);
			assert.equal(cheek.isNull("abc".match(/d/)), true);
		});
	});

	describe("isNotNull(input)", function() {
		it("returns `true` if the input is anything but `null`", function() {
			assert.equal(cheek.isNotNull(null), false);
			assert.equal(cheek.isNotNull(undefined), true);
			assert.equal(cheek.isNotNull("aaa".match(/a+/)), true);
		});
	});

	describe("isDefined(input)", function() {
		it("checks whether the input is neither `undefined` nor `null`", function() {
			assert.equal(cheek.isDefined(null), false);
			assert.equal(cheek.isDefined(undefined), false);
			assert.equal(cheek.isDefined(""), true);
		});
	});

	describe("isNotDefined(input)", function() {
		it("returns `true` if the input is either `undefined` or `null`", function() {
			assert.equal(cheek.isNotDefined(null), true);
			assert.equal(cheek.isNotDefined(undefined), true);
			assert.throws(() => cheek.isNotDefined(bar), ReferenceError);
		});
	});
});