"use strict";

let check = {};

// EXISTANCE

/** Checks whether the input is exactly 'undefined'.
	Not to be confused with 'check.isNotDefined'.
	@param input Test value
	*/
check.isUndefined = function(input) {
	return typeof input === "undefined";
};

/** Checks whether the input is exactly 'null'
	@param input Test value
	*/
check.isNull = function(input) {
	return input === null;
};

/** Returns 'true' if the input is anything but 'null'
	@param input Test value
	*/
check.isNotNull = function(input) {
	return !check.isNull(input);
};

/** Returns 'true' if the input is either 'undefined' or 'null'.
	Not to be confused with 'check.isUndefined'.
	@param input Test value
	*/
check.isNotDefined = function(input) {
	return check.isUndefined(input) || check.isNull(input);
};

/** Checks whether the input is neither 'undefined' nor 'null'
	@param input Test value
	*/
check.isDefined = function(input) {
	return !check.isNotDefined(input);
};

module.exports = check;