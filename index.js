"use strict";

let check = {

	// GENERAL

	isTruthy(input) {
		return new Boolean(input).valueOf();
	},

	isFalsy(input) {
		return !check.isTruthy(input);
	},

	isTrue(input) {
		return check.isBoolean(input) && input == true;
	},

	isFalse(input) {
		return check.isBoolean(input) && input == false;
	},

	// EXISTANCE

	isUndefined(input) {
		return typeof input === "undefined";
	},

	isNull(input) {
		return input === null;
	},

	isNotNull(input) {
		return !check.isNull(input);
	},

	isDefined(input) {
		return !check.isUndefined(input) && check.isNotNull(input);
	},

	isNotDefined(input) {
		return !check.isDefined(input);
	},

	// TYPES

	is(Type, input) {
		return input instanceof Type || (typeof Symbol !== "undefined") && Type[Symbol.hasInstance](input) || typeof input === Type.name.toLowerCase();
	},

	isNot(Type, input) {
		return !check.is(Type, input);
	},

	isEither(types, input) {
		return types.some(Type => check.is(Type, input));
	},

	isNeither(types, input) {
		return !check.isEither(types, input);
	},

	// ***

	isPrimitive(input) {
		return check.isNotDefined(input) || check.isNot(Object, input);
	},

	isObject(input) {
		return !check.isPrimitive(input);
	},

	// ***

	isString(input) {
		return check.is(String, input);
	},

	isNotString(input) {
		return !check.isString(input);
	},

	isNumber(input) {
		return check.is(Number, input);
	},

	isNotNumber(input) {
		return !check.isNumber(input);
	},

	isArray(input) {
		return Array.isArray? Array.isArray(input) : check.is(Array, input);
	},

	isNotArray(input) {
		return !check.isArray(input);
	},

	isBoolean(input) {
		return check.is(Boolean, input);
	},

	isNotBoolean(input) {
		return !check.isBoolean(input);
	},

	// ARRAY

	isEmpty(array) {
		return check.isArray(array) && (!array.length || array.every(check.isNotDefined));
	},

	isNotEmpty(array) {
		return check.isArray(array) && !!array.length && array.every(check.isDefined);
	},

	// NUMBER

	isNaN(input) {
		return (Number.isNaN || isNaN)(input);
	},

	isNotNaN(input) {
		return !check.isNaN(input);
	},

	isFinite(input) {
		return Number.isFinite(input);
	},

	isNotFinite(input) {
		return !check.isFinite(input);
	},

	// ***

	isInteger(input) {
		return Number.isInteger? Number.isInteger(input) : check.isDivisibleBy(input, 1);
	},

	isNotInteger(input) {
		return !check.isInteger(input);
	},

	isNatural(input, zero = true) {
		return check.isInteger(input) && (zero? check.isNonNegative(input) : check.isPositive(input));
	},

	isNotNatural(input, zero = true) {
		return !check.isNatural(input, zero);
	},

	isPercent(input) {
		return check.isInRange(input, [0, 1], "inclusively");
	},

	isNotPercent(input) {
		return !check.isPercent(input);
	},

	// ***

	isEqualTo(input, operand) {
		return input === operand;
	},

	isEqualToAny(input, operands) {
		return operands.some(operand => check.isEqualTo(input, operand));
	},

	isGreaterThan(input, operand) {
		return input > operand;
	},

	isGreaterThanOrEqualTo(input, operand) {
		return input >= operand;
	},

	isLessThan(input, operand) {
		return input < operand;
	},

	isLessThanOrEqualTo(input, operand) {
		return input <= operand;
	},

	// ***

	isPositive(input) {
		return input > 0;
	},

	isNotPositive(input) {
		return !check.isPositive(input);
	},

	isNegative(input) {
		return input < 0;
	},

	isNotNegative(input) {
		return !check.isNegative(input);
	},

	// ***

	isDivisibleBy(numerator, denominator) {
		return !(numerator % denominator);
	},

	isNotDivisibleBy(numerator, denominator) {
		return !check.isDivisibleBy(numerator, denominator);
	},

	// ***

	isInRange(input, range, inclusively = true) {
		inclusively = /^excl/i.test(inclusively)? false : !!inclusively;
		return inclusively? (input >= range[0] && input <= range[1]) : (input > range[0] && input < range[1]);
	},

	isNotInRange(input, range, inclusively = true) {
		return !check.isInRange(input, range, inclusively);
	},

	// BUNDLE

	bundle(inputs, methodNames) {

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
	},

	everyMethod(input, methodNames) {
		return check.bundle([input], methodNames)[0].every(Boolean);
	},

	someMethod(input, methodNames) {
		return check.bundle([input], methodNames)[0].some(Boolean);
	},

	everyInput(methodName, inputs) {
		return check.bundle(inputs, [methodName]).map(result => result[0]).every(Boolean);
	},

	someInput(methodName, inputs) {
		return check.bundle(inputs, [methodName]).map(result => result[0]).some(Boolean);
	},

	// OTHER

	input(input) {
		return new Proxy({}, {
			get(obj, method) {
				switch (method) {
					default:
						return (...args) => check[method](input, ...args);

					case "is":
					case "isNot":
					case "isEither":
					case "isNeither":
						return (TypeOrTypes) => check[method](TypeOrTypes, input);

					case "everyMethod":
					case "someMethod":
						return (methodNames) => check[method](input, methodNames); // TODO: Update when the function signatures are changed

					case "bundle":
					case "everyInput":
					case "someInput":
						throw new TypeError(`The method 'check.${method}' requires multiple inputs and cannot be performed via 'check.input( ... )'`);
				}
			}
		});
	}
};

// Setting alias
check.eq = check.equals = check.isEqualTo;
check.eqa = check.isEqualToAny;
check.gt = check.isGreaterThan;
check.gte = check.isGreaterThanOrEqualTo;
check.lt = check.isLessThan;
check.lte = check.isLessThanOrEqualTo;

check.isInfinite = check.isNotFinite;
check.isIndivisibleBy = check.isNotDivisibleBy;
check.isNotFloat = check.isInteger;
check.isFloat = check.isNotInteger;
check.isNonNegative = check.isNotNegative;

module.exports = check;