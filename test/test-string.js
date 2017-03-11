let assert = require("assert");
let cheek = require("./../index.js");

describe("String", function() {
	describe("isEmptyString(input)", function() {
		it("checks whether the input is an empty string", function() {
			assert.equal(cheek.isEmptyString(""), true);
			assert.equal(cheek.isEmptyString("text"), false);
			assert.equal(cheek.isEmptyString([]), false);
		});
	});

	describe("isNotEmptyString(input)", function() {
		it("returns `true` if the input is not an empty string", function() {
			assert.equal(cheek.isNotEmptyString(""), false);
			assert.equal(cheek.isNotEmptyString("text"), true);
			assert.equal(cheek.isNotEmptyString([]), true);
		});
	});

	describe("includes(source, substr)", function() {
		it("checks whether the source string includes substring", function() {
			assert.equal(cheek.includes("Hello", "ell"), true);
			assert.equal(cheek.includes("World", "ell"), false);
			assert.equal(cheek.includes("", ""), true);
		});
	});

	describe("startsWith(source, substr)", function() {
		it("checks whether the source string starts with substring", function() {
			assert.equal(cheek.startsWith("Hello", "Hell"), true);
			assert.equal(cheek.startsWith("Hello", "ell"), false);
			assert.equal(cheek.startsWith("", ""), true);
		});
	});

	describe("endsWith(source, substr)", function() {
		it("checks whether the source string ends with substring", function() {
			assert.equal(cheek.endsWith("World", "rld"), true);
			assert.equal(cheek.endsWith("World", "orl"), false);
			assert.equal(cheek.endsWith("", ""), true);
		});
	});
});