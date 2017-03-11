let assert = require("assert");
let cheek = require("./../index.js");

describe("Array", function() {
	describe("isEmptyArray(input)", function() {
		it("checks whether the input is an empty array", function() {
			assert.equal(cheek.isEmptyArray([]), true);
			assert.equal(cheek.isEmptyArray(""), false);
			assert.equal(cheek.isEmptyArray([null, null]), true);
		});
	});

	describe("isNotEmptyArray(input)", function() {
		it("returns `true` if the input is not an empty array", function() {
			assert.equal(cheek.isNotEmptyArray([1, 2, 3]), true);
			assert.equal(cheek.isNotEmptyArray(""), true);
			assert.equal(cheek.isNotEmptyArray([new Object()]), true);
		});
	});

	describe("contains(array, element)", function() {
		it("checks whether the array contains the element", function() {
			let myFive = new Number(5);

			assert.equal(cheek.contains([3, 4, 5], 5), true);
			assert.equal(cheek.contains([3, 4, 5], new Number(5)), false);
			assert.equal(cheek.contains([3, 4, new Number(5)], new Number(5)), false);
			assert.equal(cheek.contains([3, 4, myFive], myFive), true);

			assert.equal(cheek.contains([3, , 5], undefined), false);
		});
	});

	describe("lacks(array, element)", function() {
		it("returns `true` if the array does not contain the element", function() {
			assert.equal(cheek.lacks([3, 4, 5], 6), true);
			assert.equal(cheek.lacks([3, 4, 5], 5), false);
			assert.equal(cheek.lacks([3, undefined, 5], undefined), false);
		});
	});

	describe("isFirstIn(array, input)", function() {
		it("checks whether the input is the first element of the array", function() {
			assert.equal(cheek.isFirstIn([1, 2, 3], 1), true);
			assert.equal(cheek.isFirstIn([1, 2, 3], 2), false);
		});
	});

	describe("isNotFirstIn(array, input)", function() {
		it("returns `true` if the input is not the first element of the array", function() {
			assert.equal(cheek.isNotFirstIn([1, 2, 3], 1), false);
			assert.equal(cheek.isNotFirstIn([1, 2, 3], 2), true);
		});
	});

	describe("isLastIn(array, input)", function() {
		it("checks whether the input is the last element of the array", function() {
			assert.equal(cheek.isLastIn([1, 2, 3], 3), true);
			assert.equal(cheek.isLastIn([1, 2, 3], 2), false);
		});
	});

	describe("isNotLastIn(array, input)", function() {
		it("returns `true` if the input is not the last element of the array", function() {
			assert.equal(cheek.isNotLastIn([1, 2, 3], 3), false);
			assert.equal(cheek.isNotLastIn([1, 2, 3], 2), true);
		});
	});
});