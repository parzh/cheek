let assert = require("assert");
let check = require("./../index.js");

describe("Existance", function() {
	describe("isUndefined(input)", function() {
		it("checks whether the input is exactly `undefined`", function() {
			assert(check.isUndefined(undefined));
			assert(check.isUndefined());
			assert(!check.isUndefined(null));
			assert.throws(() => check.isUndefined(foo), ReferenceError);
		});
	});

	describe("isNull(input)", function() {
		it("checks whether the input is exactly `null`", function() {
			assert(check.isNull(null));
			assert(!check.isNull());
			assert(check.isNull("abc".match(/d/)));
		});
	});

	describe("isNotNull(input)", function() {
		it("returns `true` if the input is anything but `null`", function() {
			assert(!check.isNotNull(null));
			assert(check.isNotNull(undefined));
			assert(check.isNotNull("aaa".match(/a+/)));
		});
	});

	describe("isDefined(input)", function() {
		it("checks whether the input is neither `undefined` nor `null`", function() {
			assert(!check.isDefined(null));
			assert(!check.isDefined(undefined));
			assert(check.isDefined(""));
		});
	});

	describe("isNotDefined(input)", function() {
		it("returns `true` if the input is either `undefined` or `null`", function() {
			assert(check.isNotDefined(null));
			assert(check.isNotDefined(undefined));
			assert.throws(() => check.isNotDefined(bar), ReferenceError);
		});
	});
});