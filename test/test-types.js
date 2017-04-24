let assert = require("assert");
let check = require("./../index.js");

class MyObject{}

describe("Types", function() {
	describe("is(Type, input)", function() {
		it("checks whether the input is an instance of provided class", function() {
			assert(check.is(MyObject, new MyObject()));
			assert(!check.is(Number, {}));
			assert(check.is(Array, []));
		});
	});

	describe("isNot(Type, input)", function() {
		it("returns `true` if the input is not an instance of provided class", function() {
			assert(!check.isNot(MyObject, new MyObject()));
			assert(check.isNot(Number, {}));
			assert(!check.isNot(Array, []));
		});
	});

	describe("isEither(types, input)", function() {
		it("checks whether the input is an instance of any of provided classes", function() {
			assert(!check.isEither([Number, String], {}));
			assert(check.isEither([RegExp, String], /test/));
			assert(check.isEither([Number, RegExp, Array], 4));
		});
	});

	describe("isNeither(types, input)", function() {
		it("returns `true` if the input is not an instance of any of provided classes", function() {
			assert(check.isNeither([Number, String], {}));
			assert(!check.isNeither([RegExp, String], /test/));
			assert(!check.isNeither([Number, RegExp, Array], 4));
		});
	});

	describe("isPrimitive(input)", function() {
		it("checks whether the input is a primitive value", function() {
			assert(check.isPrimitive(42));
			assert(!check.isPrimitive(new Array()));
			assert(check.isPrimitive(null));
		});
	});

	describe("isObject(input)", function() {
		it("returns `true` if the input is not a primitive value", function() {
			assert(!check.isObject(42));
			assert(check.isObject(new Array()));
			assert(!check.isObject(null));
		});
	});

	describe("isString(input)", function() {
		it("checks whether the input is a string", function() {
			assert(check.isString(""));
			assert(check.isString(new String()));
			assert(check.isString(new class extends String{}));
		});
	});

	describe("isNotString(input)", function() {
		it("returns `true` if the input is not a string", function() {
			assert(!check.isNotString(""));
			assert(!check.isNotString(new String()));
			assert(check.isNotString(new class{}));
		});
	});

	describe("isNumber(input)", function() {
		it("checks whether the input is a number", function() {
			assert(check.isNumber(5));
			assert(check.isNumber(new Number()));
			assert(check.isNumber(NaN));
		});
	});

	describe("isNotNumber(input)", function() {
		it("returns `true` if the input is not a number", function() {
			assert(check.isNotNumber(undefined));
			assert(!check.isNotNumber(new Number()));
			assert(!check.isNotNumber(NaN));
		});
	});

	describe("isArray(input)", function() {
		it("checks whether the input is an array", function() {
			assert(!check.isArray({}));
			assert(check.isArray([]));
			assert(check.isArray(new class extends Array{}));
		});
	});

	describe("isArraylike(input)", function() {
		it("checks whether the input is array-like object", function() {
			assert(!check.isArraylike({ 0: 0, 1: 1 }));
			assert(check.isArraylike({ 0: 0, 1: 1, length: 2 }));
			assert(check.isArraylike(new class extends Array{}));
		});
	});

	describe("isIterable(input)", function() {
		it("checks whether the input can be iterated over", function() {
			assert(!check.isIterable({ 0: "0", 1: "1" }));
			assert(!check.isIterable({ 0: "0", 1: "1", length: 2 }));
			assert(check.isIterable(new class extends Array{}));
		});
	});

	describe("isNotIterable(input)", function() {
		it("returns `true` if the input cannot be iterated over", function() {
			assert(check.isNotIterable({ 0: "0", 1: "1" }));
			assert(check.isNotIterable({ 0: "0", 1: "1", length: 2 }));
			assert(!check.isNotIterable(new class extends Array{}));
		});
	});

	describe("isNotArray(input)", function() {
		it("returns `true` if the input is not an array", function() {
			assert(check.isNotArray({}));
			assert(!check.isNotArray([]));
			assert(check.isNotArray(new class{}));
		});
	});

	describe("isBoolean(input)", function() {
		it("checks whether the input is a boolean value", function() {
			assert(check.isBoolean(false));
			assert(check.isBoolean(new Boolean()));
			assert(!check.isBoolean(undefined));
		});
	});

	describe("isNotBoolean(input)", function() {
		it("returns `true` if the input is not a boolean value", function() {
			assert(!check.isNotBoolean(false));
			assert(!check.isNotBoolean(new Boolean()));
			assert(check.isNotBoolean(null));
		});
	});
});