let assert = require("assert");
let cheek = require("./../index.js");

class MyObject {}

describe("Types", function() {
	describe("is(Type, input)", function() {
		it("checks whether the input is an instance of provided class", function() {
			assert(cheek.is(MyObject, new MyObject()));
			assert(!cheek.is(Number, {}));
			assert(cheek.is(Array, []));
		});
	});

	describe("isNot(Type, input)", function() {
		it("returns `true` if the input is not an instance of provided class", function() {
			assert(!cheek.isNot(MyObject, new MyObject()));
			assert(cheek.isNot(Number, {}));
			assert(!cheek.isNot(Array, []));
		});
	});

	describe("isEither(types, input)", function() {
		it("checks whether the input is an instance of any of provided classes", function() {
			assert(!cheek.isEither([Number, String], {}));
			assert(cheek.isEither([RegExp, String], /test/));
			assert(cheek.isEither([Number, RegExp, Array], 4));
		});
	});

	describe("isNeither(types, input)", function() {
		it("returns `true` if the input is not an instance of any of provided classes", function() {
			assert(cheek.isNeither([Number, String], {}));
			assert(!cheek.isNeither([RegExp, String], /test/));
			assert(!cheek.isNeither([Number, RegExp, Array], 4));
		});
	});

	describe("isPrimitive(input)", function() {
		it("checks whether the input is a primitive value", function() {
			assert(cheek.isPrimitive(42));
			assert(!cheek.isPrimitive(new Array()));
			assert(cheek.isPrimitive(null));
		});
	});

	describe("isObject(input)", function() {
		it("returns `true` if the input is not a primitive value", function() {
			assert(!cheek.isObject(42));
			assert(cheek.isObject(new Array()));
			assert(!cheek.isObject(null));
		});
	});

	describe("isString(input)", function() {
		it("checks whether the input is a string", function() {
			assert(cheek.isString(""));
			assert(cheek.isString(new String()));
			assert(cheek.isString(new (class extends String {})()));
		});
	});

	describe("isNotString(input)", function() {
		it("returns `true` if the input is not a string", function() {
			assert(!cheek.isNotString(""));
			assert(!cheek.isNotString(new String()));
			assert(cheek.isNotString(new (class {})()));
		});
	});

	describe("isNumber(input)", function() {
		it("checks whether the input is a number", function() {
			assert(cheek.isNumber(5));
			assert(cheek.isNumber(new Number()));
			assert(cheek.isNumber(NaN));
		});
	});

	describe("isNotNumber(input)", function() {
		it("returns `true` if the input is not a number", function() {
			assert(cheek.isNotNumber(undefined));
			assert(!cheek.isNotNumber(new Number()));
			assert(!cheek.isNotNumber(NaN));
		});
	});

	describe("isArray(input)", function() {
		it("checks whether the input is an array", function() {
			assert(!cheek.isArray({}));
			assert(cheek.isArray([]));
			assert(cheek.isArray(new (class extends Array {})()));
		});
	});

	describe("isArraylike(input)", function() {
		it("checks whether the input is array-like object", function() {
			assert(!cheek.isArraylike({ 0: 0, 1: 1 }));
			assert(cheek.isArraylike({ 0: 0, 1: 1, length: 2 }));
			assert(cheek.isArraylike(new (class extends Array {})()));
		});
	});

	describe("isNotArray(input)", function() {
		it("returns `true` if the input is not an array", function() {
			assert(cheek.isNotArray({}));
			assert(!cheek.isNotArray([]));
			assert(cheek.isNotArray(new (class {})()));
		});
	});

	describe("isBoolean(input)", function() {
		it("checks whether the input is a boolean value", function() {
			assert(cheek.isBoolean(false));
			assert(cheek.isBoolean(new Boolean()));
			assert(!cheek.isBoolean(undefined));
		});
	});

	describe("isNotBoolean(input)", function() {
		it("returns `true` if the input is not a boolean value", function() {
			assert(!cheek.isNotBoolean(false));
			assert(!cheek.isNotBoolean(new Boolean()));
			assert(cheek.isNotBoolean(null));
		});
	});
});