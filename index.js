"use strict";

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

// ARRAY

/** Checks whether the array is empty
	@param array Test array
	*/
check.isEmpty = function(array) {
	return check.isArray(array) && (!array.length || array.every(check.isNotDefined));
};

/** Returns 'true' if the array is not empty
	@param array Test array
	*/
check.isNotEmpty = function(array) {
	return check.isArray(array) && !!array.length && array.every(check.isDefined);
};

// NUMBER

/** Checks whether the input is exactly 'NaN'.
	Not to be confused with 'check.isNotNumber'
	@param input Test value
	*/
check.isNaN = function(input) {
	return (Number.isNaN || isNaN)(input);
};

/** Returns 'true' if the input is not NaN
	@param input Test value
	*/
check.isNotNaN = function(input) {
	return !check.isNaN(input);
};

/**	Checks whether the input is equal to the operand
	@param input Test value
	@param operand Comparison value
	*/
check.isEqualTo = check.eq = check.equals = function(input, operand) {
	return input === operand;
};

/**	Checks whether the input is equal to any of the operands
	@param input Test value
	@param operands Bunch of comparison values
	*/
check.isEqualToAny = check.eqa = function(input, operands) {
	return operands.some(operand => check.isEqualTo(input, operand));
};

/**	Checks whether the input is greater than the operand
	@param input Test value
	@param operand Comparison value
	*/
check.isGreaterThan = check.gt = function(input, operand) {
	return input > operand;
};

/**	Checks whether the input is greater than or equal to the operand
	@param input Test value
	@param operand Comparison value
	*/
check.isGreaterThanOrEqualTo = check.gte = function(input, operand) {
	return input >= operand;
};

/**	Checks whether the input is less than the operand
	@param input Test value
	@param operand Comparison value
	*/
check.isLessThan = check.lt = function(input, operand) {
	return input < operand;
};

/**	Checks whether the input is less than or equal to the operand
	@param input Test value
	@param operand Comparison value
	*/
check.isLessThanOrEqualTo = check.lte = function(input, operand) {
	return input <= operand;
};

/** Checks whether the input is a finite number
	@param input Test value
	*/
check.isFinite = function(input) {
	return Number.isFinite(input);
};

/** Returns 'true' if the input is not a finite number
	@param input Test value
	*/
check.isInfinite = function(input) {
	return !check.isFinite(input);
};

/** Checks whether 'numerator' is divisible by 'denominator'
	@param numerator Will be divided by 'denominator'
	@param denominator Will divide 'numerator'
	*/
check.isDivisibleBy = function(numerator, denominator) {
	return !(numerator % denominator);
};

/** Returns 'true' if 'numerator' is not divisible by 'denominator'.
	Consider method spelling: "isIndivisibleBy" instead of "isNotDivisibleBy".
	@param numerator Will be divided by 'denominator'
	@param denominator Will divide 'numerator'
	*/
check.isIndivisibleBy = function(numerator, denominator) {
	return !check.isDivisibleBy(numerator, denominator);
};

/**	Checks whether the input is an integer
	@param input Test value
	*/
check.isInteger = function(input) {
	return Number.isInteger? Number.isInteger(input) : check.isDivisibleBy(input, 1);
};

/**	Returns 'true' if the input is not an integer
	@param input Test value
	*/
check.isNotInteger = function(input) {
	return !check.isInteger(input);
};

/**	Checks whether the input has a fractional part
	@param input Test value
	*/
check.isFloat = function(input) {
	return check.isIndivisibleBy(input, 1);
};

/**	Returns 'true' if the input has not fractional part
	@param input Test value
	*/
check.isNotFloat = function(input) {
	return !check.isFloat(input);
};

/**	Checks whether the input is greater than zero
	@param input Test value
	*/
check.isPositive = function(input) {
	return check.isGreaterThan(input, 0);
};

/**	Checks whether the input is greater than or equal to zero.
	Not to be confused with 'check.isPositive'.
	@param input Test value
	*/
check.isNonNegative = function(input) {
	return check.isGreaterThanOrEqualTo(input, 0);
};

/**	Checks whether the input is less than zero
	@param input Test value
	*/
check.isNegative = function(input) {
	return check.isLessThan(input, 0);
};

/**	Returns 'true' if the input is less than or equal to zero.
	Not to be confused with 'check.isNegative'.
	@param input Test value
	*/
check.isNotPositive = function(input) {
	return check.isLessThanOrEqualTo(input, 0);
};

/** Checks whether the input is finite number without fractional part, and greater than [or equal to] zero
	@param input Test value
	@param zero If not defined or 'true', zero is considered as natural number
	*/
check.isNatural = function(input, zero = true) {
	return check.isInteger(input) && (zero? check.isNonNegative(input) : check.isPositive(input));
};

/** Returns 'true' if input is either infinite, or has a fractional part, or less than [or equal to] zero
	@param input Test value
	@param zero If not defined or 'true', zero is considered as natural number
	*/
check.isNotNatural = function(input, zero) {
	return !check.isNatural(input, zero);
};

/** Checks whether the input is in provided range inclusively or exclusively
	@param input Test value
	@param range Array of two numbers: min and max value of range
	@param inclusively If 'true', edge-matching will return 'true'
	*/
check.isInRange = function(input, range, inclusively) {
	inclusively = /^excl/i.test(inclusively)? false : !!inclusively;
	return inclusively? (input >= range[0] && input <= range[1]) : (input > range[0] && input < range[1]);
};

/** Returns 'true' if the input is not in provided range inclusively or exclusively
	@param input Test value
	@param range Array of two numbers: min and max value of range
	@param inclusively If 'true' edge-matching will return 'true'
	*/
check.isNotInRange = function(input, range, inclusively) {
	return !check.isInRange(input, range, inclusively);
};

// MULTIPLE

/** Returns a multidimensional array of input-method verifications
	@param inputs An array of test values
	@param methodNames An array of 'check' object methods names
	*/
check.bundle = function(inputs = [], methodNames = []) {

	function getMethodByName(methodName) {
		let method = check[methodName];

		if (!method)
			throw new ReferenceError(`'check.${methodName}' is not a function`);

		else if (method.length > 1)
			throw new SyntaxError(`Not enough arguments for method 'check.${methodName}' to proceed`);

		else return method;
	}

	let methods = methodNames.map(getMethodByName);

	return inputs.map(input => methods.map(method => method(input)));
};

/** Returns 'true' if all of the verifications return 'true'
	@param input Test value
	@param methodNames An array of 'check' object methods names
	*/
check.everyMethod = function(input, methodNames) {
	return check.bundle([input], methodNames)[0].every(Boolean);
};

/** Returns 'true' if any of provided verifications returns 'true'
	@param input Test value
	@param methodNames An array of 'check' object methods names
	*/
check.someMethod = function(input, methodNames) {
	return check.bundle([input], methodNames)[0].some(Boolean);
};

/** Returns 'true' if all input values comply with requirement.
	Consider the order of arguments.
	@param method Function name without 'check.' part
	@param inputs An array of test values
	*/
check.everyInput = function(method, inputs) {
	return check.bundle(inputs, [method]).map(result => result[0]).every(Boolean);
};

/** Returns 'true' if any of input values complies with requirement.
	Consider the order of arguments.
	@param method Function name without 'check.' part
	@param inputs An array of test values
	*/
check.someInput = function(method, inputs) {
	return check.bundle(inputs, [method]).map(result => result[0]).some(Boolean);
};

module.exports = check;