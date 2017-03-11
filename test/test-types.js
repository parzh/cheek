let assert = require("assert");
let cheek = require("./../index.js");

class MyObject {}

describe("Types", function() {
	describe("is(Type, input)", function() {
		it("checks whether the input is an instance of provided class", function() {
			assert.equal(cheek.is(MyObject, new MyObject()), true);
			assert.equal(cheek.is(Number, {}), false);
			assert.equal(cheek.is(Array, []), true);
		});
	});

	describe("isNot(Type, input)", function() {
		it("returns `true` if the input is not an instance of provided class", function() {
			assert.equal(cheek.isNot(MyObject, new MyObject()), false);
			assert.equal(cheek.isNot(Number, {}), true);
			assert.equal(cheek.isNot(Array, []), false);
		});
	});

	describe("isEither(types, input)", function() {
		it("checks whether the input is an instance of any of provided classes", function() {
			assert.equal(cheek.isEither([Number, String], {}), false);
			assert.equal(cheek.isEither([RegExp, String], /test/), true);
			assert.equal(cheek.isEither([Number, RegExp, Array], 4), true);
		});
	});

	describe("isNeither(types, input)", function() {
		it("returns `true` if the input is not an instance of any of provided classes", function() {
			assert.equal(cheek.isNeither([Number, String], {}), true);
			assert.equal(cheek.isNeither([RegExp, String], /test/), false);
			assert.equal(cheek.isNeither([Number, RegExp, Array], 4), false);
		});
	});

	describe("isPrimitive(input)", function() {
		it("checks whether the input is a primitive value", function() {
			assert.equal(cheek.isPrimitive(42), true);
			assert.equal(cheek.isPrimitive(new Array()), false);
			assert.equal(cheek.isPrimitive(null), true);
		});
	});

	describe("isObject(input)", function() {
		it("returns `true` if the input is not a primitive value", function() {
			assert.equal(cheek.isObject(42), false);
			assert.equal(cheek.isObject(new Array()), true);
			assert.equal(cheek.isObject(null), false);
		});
	});

	describe("isString(input)", function() {
		it("checks whether the input is a string", function() {
			assert.equal(cheek.isString(""), true);
			assert.equal(cheek.isString(new String()), true);
			assert.equal(cheek.isString(new (class extends String {})()), true);
		});
	});

	describe("isNotString(input)", function() {
		it("returns `true` if the input is not a string", function() {
			assert.equal(cheek.isNotString(""), false);
			assert.equal(cheek.isNotString(new String()), false);
			assert.equal(cheek.isNotString(new (class {})()), true);
		});
	});

	describe("isNumber(input)", function() {
		it("checks whether the input is a number", function() {
			assert.equal(cheek.isNumber(5), true);
			assert.equal(cheek.isNumber(new Number()), true);
			assert.equal(cheek.isNumber(NaN), true);
		});
	});

	describe("isNotNumber(input)", function() {
		it("returns `true` if the input is not a number", function() {
			assert.equal(cheek.isNotNumber(undefined), true);
			assert.equal(cheek.isNotNumber(new Number()), false);
			assert.equal(cheek.isNotNumber(NaN), false);
		});
	});

	describe("isArray(input)", function() {
		it("checks whether the input is an array", function() {
			assert.equal(cheek.isArray({}), false);
			assert.equal(cheek.isArray([]), true);
			assert.equal(cheek.isArray(new (class extends Array {})()), true);
		});
	});

	describe("isArraylike(input)", function() {
		it("checks whether the input is array-like object", function() {
			assert.equal(cheek.isArraylike({ 0: 0, 1: 1 }), false);
			assert.equal(cheek.isArraylike({ 0: 0, 1: 1, length: 2 }), true);
			assert.equal(cheek.isArraylike(new (class extends Array {})()), true);
		});
	});

	describe("isNotArray(input)", function() {
		it("returns `true` if the input is not an array", function() {
			assert.equal(cheek.isNotArray({}), true);
			assert.equal(cheek.isNotArray([]), false);
			assert.equal(cheek.isNotArray(new (class {})()), true);
		});
	});

	describe("isBoolean(input)", function() {
		it("checks whether the input is a boolean value", function() {
			assert.equal(cheek.isBoolean(false), true);
			assert.equal(cheek.isBoolean(new Boolean()), true);
			assert.equal(cheek.isBoolean(undefined), false);
		});
	});

	describe("isNotBoolean(input)", function() {
		it("returns `true` if the input is not a boolean value", function() {
			assert.equal(cheek.isNotBoolean(false), false);
			assert.equal(cheek.isNotBoolean(new Boolean()), false);
			assert.equal(cheek.isNotBoolean(null), true);
		});
	});
});