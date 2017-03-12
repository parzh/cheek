let assert = require("assert");
let cheek = require("./../index.js");

describe("Existance", function() {
	describe("isUndefined(input)", function() {
		it("checks whether the input is exactly `undefined`", function() {
			assert(cheek.isUndefined(undefined));
			assert(cheek.isUndefined());
			assert(!cheek.isUndefined(null));
			assert.throws(() => cheek.isUndefined(foo), ReferenceError);
		});
	});

	describe("isNull(input)", function() {
		it("checks whether the input is exactly `null`", function() {
			assert(cheek.isNull(null));
			assert(!cheek.isNull());
			assert(cheek.isNull("abc".match(/d/)));
		});
	});

	describe("isNotNull(input)", function() {
		it("returns `true` if the input is anything but `null`", function() {
			assert(!cheek.isNotNull(null));
			assert(cheek.isNotNull(undefined));
			assert(cheek.isNotNull("aaa".match(/a+/)));
		});
	});

	describe("isDefined(input)", function() {
		it("checks whether the input is neither `undefined` nor `null`", function() {
			assert(!cheek.isDefined(null));
			assert(!cheek.isDefined(undefined));
			assert(cheek.isDefined(""));
		});
	});

	describe("isNotDefined(input)", function() {
		it("returns `true` if the input is either `undefined` or `null`", function() {
			assert(cheek.isNotDefined(null));
			assert(cheek.isNotDefined(undefined));
			assert.throws(() => cheek.isNotDefined(bar), ReferenceError);
		});
	});
});