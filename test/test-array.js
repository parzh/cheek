let assert = require("assert");
let cheek = require("./../index.js");

describe("Array", function() {
	describe("isEmptyArray(input)", function() {
		it("checks whether the input is an empty array", function() {
			assert(cheek.isEmptyArray([]));
			assert(!cheek.isEmptyArray(""));
			assert(cheek.isEmptyArray([null, null]));
		});
	});

	describe("isNotEmptyArray(input)", function() {
		it("returns `true` if the input is not an empty array", function() {
			assert(cheek.isNotEmptyArray([1, 2, 3]));
			assert(cheek.isNotEmptyArray(""));
			assert(cheek.isNotEmptyArray([new Object()]));
		});
	});

	describe("contains(array, element)", function() {
		it("checks whether the array contains the element", function() {
			let myFive = new Number(5);

			assert(cheek.contains([3, 4, 5], 5));
			assert(!cheek.contains([3, 4, 5], new Number(5)));
			assert(!cheek.contains([3, 4, new Number(5)], new Number(5)));
			assert(cheek.contains([3, 4, myFive], myFive));

			assert(!cheek.contains([3, , 5], undefined));
		});
	});

	describe("lacks(array, element)", function() {
		it("returns `true` if the array does not contain the element", function() {
			assert(cheek.lacks([3, 4, 5], 6));
			assert(!cheek.lacks([3, 4, 5], 5));
			assert(!cheek.lacks([3, undefined, 5], undefined));
		});
	});

	describe("isFirstIn(array, input)", function() {
		it("checks whether the input is the first element of the array", function() {
			assert(cheek.isFirstIn([1, 2, 3], 1));
			assert(!cheek.isFirstIn([1, 2, 3], 2));
		});
	});

	describe("isNotFirstIn(array, input)", function() {
		it("returns `true` if the input is not the first element of the array", function() {
			assert(!cheek.isNotFirstIn([1, 2, 3], 1));
			assert(cheek.isNotFirstIn([1, 2, 3], 2));
		});
	});

	describe("isLastIn(array, input)", function() {
		it("checks whether the input is the last element of the array", function() {
			assert(cheek.isLastIn([1, 2, 3], 3));
			assert(!cheek.isLastIn([1, 2, 3], 2));
		});
	});

	describe("isNotLastIn(array, input)", function() {
		it("returns `true` if the input is not the last element of the array", function() {
			assert(!cheek.isNotLastIn([1, 2, 3], 3));
			assert(cheek.isNotLastIn([1, 2, 3], 2));
		});
	});
});