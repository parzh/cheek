let assert = require("assert");
let check = require("./../index.js");

describe("Array", function() {
	describe("isEmptyArray(input)", function() {
		it("checks whether the input is an empty array", function() {
			assert(check.isEmptyArray([]));
			assert(!check.isEmptyArray(""));
			assert(check.isEmptyArray([null, null]));
		});
	});

	describe("isNotEmptyArray(input)", function() {
		it("returns `true` if the input is not an empty array", function() {
			assert(check.isNotEmptyArray([1, 2, 3]));
			assert(check.isNotEmptyArray(""));
			assert(check.isNotEmptyArray([new Object()]));
		});
	});

	describe("contains(array, element)", function() {
		it("checks whether the array contains the element", function() {
			let myFive = new Number(5);

			assert(check.contains([3, 4, 5], 5));
			assert(!check.contains([3, 4, 5], new Number(5)));
			assert(!check.contains([3, 4, new Number(5)], new Number(5)));
			assert(check.contains([3, 4, myFive], myFive));

			assert(!check.contains([3, , 5], undefined));
		});
	});

	describe("lacks(array, element)", function() {
		it("returns `true` if the array does not contain the element", function() {
			assert(check.lacks([3, 4, 5], 6));
			assert(!check.lacks([3, 4, 5], 5));
			assert(!check.lacks([3, undefined, 5], undefined));
		});
	});

	describe("isFirstIn(array, input)", function() {
		it("checks whether the input is the first element of the array", function() {
			assert(check.isFirstIn([1, 2, 3], 1));
			assert(!check.isFirstIn([1, 2, 3], 2));
		});
	});

	describe("isNotFirstIn(array, input)", function() {
		it("returns `true` if the input is not the first element of the array", function() {
			assert(!check.isNotFirstIn([1, 2, 3], 1));
			assert(check.isNotFirstIn([1, 2, 3], 2));
		});
	});

	describe("isLastIn(array, input)", function() {
		it("checks whether the input is the last element of the array", function() {
			assert(check.isLastIn([1, 2, 3], 3));
			assert(!check.isLastIn([1, 2, 3], 2));
		});
	});

	describe("isNotLastIn(array, input)", function() {
		it("returns `true` if the input is not the last element of the array", function() {
			assert(!check.isNotLastIn([1, 2, 3], 3));
			assert(check.isNotLastIn([1, 2, 3], 2));
		});
	});
});