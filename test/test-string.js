let assert = require("assert");
let check = require("./../index.js");

describe("String", function() {
	describe("isEmptyString(input)", function() {
		it("checks whether the input is an empty string", function() {
			assert(check.isEmptyString(""));
			assert(!check.isEmptyString("text"));
			assert(!check.isEmptyString([]));
		});
	});

	describe("isNotEmptyString(input)", function() {
		it("returns `true` if the input is not an empty string", function() {
			assert(!check.isNotEmptyString(""));
			assert(check.isNotEmptyString("text"));
			assert(check.isNotEmptyString([]));
		});
	});

	describe("includes(source, substr)", function() {
		it("checks whether the source string includes substring", function() {
			assert(check.includes("Hello", "ell"));
			assert(!check.includes("World", "ell"));
			assert(check.includes("", ""));
		});
	});

	describe("startsWith(source, substr)", function() {
		it("checks whether the source string starts with substring", function() {
			assert(check.startsWith("Hello", "Hell"));
			assert(!check.startsWith("Hello", "ell"));
			assert(check.startsWith("", ""));
		});
	});

	describe("endsWith(source, substr)", function() {
		it("checks whether the source string ends with substring", function() {
			assert(check.endsWith("World", "rld"));
			assert(!check.endsWith("World", "orl"));
			assert(check.endsWith("", ""));
		});
	});
});