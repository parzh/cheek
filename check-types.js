"use strict";

let check = {};

// TYPES

/** Checks whether the input is an instance of provided class
	@param Type Test class
	@param input Test value
	*/
check.is = function(Type, input) {
	return input instanceof Type || (typeof Symbol !== "undefined") && Type[Symbol.hasInstance](input) || typeof input === Type.name.toLowerCase();
};

/** Returns 'true' if the input is not an instance of provided class
	@param Type Test class
	@param input Test value
	*/
check.isNot = function(Type, input) {
	return !check.is(Type, input);
};

/** Checks whether the input is an instance of any of provided classes
	@param types Array of test classes
	@param input Test value
	*/
check.isEither = function(types, input) {
	return types.some(Type => check.is(Type, input));
};

/** Returns 'true' if the input is not an instance of any of provided classes
	@param types Array of test classes
	@param input Test value
	*/
check.isNeither = function(types, input) {
	return !check.isEither(types, input);
};

// ***

/** Checks whether the input is a primitive value
	@param input Test value
	*/
check.isPrimitive = function(input) {
	return check.isNotDefined(input) || check.isNot(Object, input);
};

/** Returns 'true' if the input is not a primitive value
	@param input Test value
	*/
check.isObject = function(input) {
	return !check.isPrimitive(input);
};

// ***

/** Checks whether the input is a string
	@param input Test value
	*/
check.isString = function(input) {
	return check.is(String, input);
};

/** Returns 'true' if the input is not a string
	@param input Test value
	*/
check.isNotString = function(input) {
	return !check.isString(input);
};

/** Checks whether the input is a number
	@param input Test value
	*/
check.isNumber = function(input) {
	return check.is(Number, input);
};

/** Returns 'true' if the input is not a number.
	Not to be confused with 'check.isNaN'
	@param input Test value
	*/
check.isNotNumber = function(input) {
	return !check.isNumber(input);
};

/** Checks whether the input is an array
	@param input Test value
	*/
check.isArray = function(input) {
	return Array.isArray? Array.isArray(input) : check.is(Array, input);
};

/** Returns 'true' if the input is not an array
	@param input Test value
	*/
check.isNotArray = function(input) {
	return !check.isArray(input);
};

module.exports = check;