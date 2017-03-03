"use strict";

const CHAPTERS = ["existance", "types", "array", "number", "multiple"];

let check = {};

// GENERAL

/** Checks whether the input is truthy
	@param input Test value
	*/
check.isTrue = function(input) {
	return !!input;
};

/** Checks whether the input is falsy
	@param input Test value
	*/
check.isFalse = function(input) {
	return !input;
};

// ***

let modules = CHAPTERS.map(chapter => `./check-${chapter}`).map(require);

for (let _module of modules)
	for (let key in _module)
		if (typeof check[key] === "undefined")
			check[key] = _module[key];

		else throw new Error(`Method 'check.${key}' is already defined`);

module.exports = check;