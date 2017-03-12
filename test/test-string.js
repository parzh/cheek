let assert = require("assert");
let cheek = require("./../index.js");

describe("String", function() {
	describe("isEmptyString(input)", function() {
		it("checks whether the input is an empty string", function() {
			assert(cheek.isEmptyString(""));
			assert(!cheek.isEmptyString("text"));
			assert(!cheek.isEmptyString([]));
		});
	});

	describe("isNotEmptyString(input)", function() {
		it("returns `true` if the input is not an empty string", function() {
			assert(!cheek.isNotEmptyString(""));
			assert(cheek.isNotEmptyString("text"));
			assert(cheek.isNotEmptyString([]));
		});
	});

	describe("includes(source, substr)", function() {
		it("checks whether the source string includes substring", function() {
			assert(cheek.includes("Hello", "ell"));
			assert(!cheek.includes("World", "ell"));
			assert(cheek.includes("", ""));
		});
	});

	describe("startsWith(source, substr)", function() {
		it("checks whether the source string starts with substring", function() {
			assert(cheek.startsWith("Hello", "Hell"));
			assert(!cheek.startsWith("Hello", "ell"));
			assert(cheek.startsWith("", ""));
		});
	});

	describe("endsWith(source, substr)", function() {
		it("checks whether the source string ends with substring", function() {
			assert(cheek.endsWith("World", "rld"));
			assert(!cheek.endsWith("World", "orl"));
			assert(cheek.endsWith("", ""));
		});
	});
});