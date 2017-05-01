let assert = require("assert");
let check = require("./../index.js");

let arr = [];
let obj = {
	prop1: { foo: { bar: 5 } },
	prop2: { foo: { bar: undefined } },
	prop3: 42
};
let object = { prop: "value" };

describe("Object", function() {
	describe("check.isCircular(object)", function() {
		it("checks whether the object is a circular structure", function() {
			arr = [];

			assert(!check.isCircular(arr));

			arr.push(arr);

			assert(check.isCircular(arr));
		});
	});

	describe("check.isNotCircular(object)", function() {
		it("returns `true` if the object is not a circular structure", function() {
			arr = [];

			assert(check.isNotCircular(arr));

			arr.push(arr);

			assert(!check.isNotCircular(arr));
		});
	});

	describe("check.hasProperty(object, key)", function() {
		it("check whether a property or path `key` is present in `object`", function() {
			assert(check.hasProperty(obj, "prop1"));
			assert(!check.hasProperty(obj, "prop4"));
			assert(!check.hasProperty(obj, "bar"));

			assert(!check.hasProperty(obj, ["prop1", "bar"]));
			assert(check.hasProperty(obj, ["prop1", "foo", "bar"]));
			assert(check.hasProperty(obj, ["prop2", "foo", "bar"]));
			assert(!check.hasProperty(obj, ["prop3", "foo", "bar"]));
		});
	});

	describe("check.hasNoProperty(object, key)", function() {
		it("returns `true` if a property or path `key` is not present in `object`", function() {
			assert(!check.hasNoProperty(obj, "prop1"));
			assert(check.hasNoProperty(obj, "prop4"));
			assert(check.hasNoProperty(obj, "bar"));

			assert(check.hasNoProperty(obj, ["prop1", "bar"]));
			assert(!check.hasNoProperty(obj, ["prop1", "foo", "bar"]));
			assert(!check.hasNoProperty(obj, ["prop2", "foo", "bar"]));
			assert(check.hasNoProperty(obj, ["prop3", "foo", "bar"]));
		});
	});

	describe("check.equals(object, operand)", function() {
		it("checks whether two compared objects are effectively the same", function() {
			assert(check.equals(object, object));
			assert(check.equals(object, { prop: "value" }));
			assert(check.equals({}, {}));
			assert(!check.equals(object, {}));
			assert(!check.equals(object, NaN));

			assert(check.equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }));
			assert(check.equals(5, new Number(5)));
			assert(check.equals(NaN, 0 / 0));
			assert(check.equals(0, -0));
			assert(check.equals([], {}));
			assert(check.equals([], { length: 0 }));
		});
	});
});
