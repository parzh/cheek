"use strict";

let cheek = {

	// GENERAL

	isTruthy(input) {
		return new Boolean(input).valueOf();
	},

	isFalsy(input) {
		return !cheek.isTruthy(input);
	},

	isTrue(input) {
		return cheek.isBoolean(input) && input == true;
	},

	isFalse(input) {
		return cheek.isBoolean(input) && input == false;
	},

	// EXISTANCE

	isUndefined(input) {
		return typeof input === "undefined";
	},

	isNull(input) {
		return input === null;
	},

	isNotNull(input) {
		return !cheek.isNull(input);
	},

	isDefined(input) {
		return !cheek.isUndefined(input) && cheek.isNotNull(input);
	},

	isNotDefined(input) {
		return !cheek.isDefined(input);
	},

	// TYPES

	is(Type, input) {
		return input instanceof Type || (typeof Symbol !== "undefined") && Type[Symbol.hasInstance](input) || typeof input === Type.name.toLowerCase();
	},

	isNot(Type, input) {
		return !cheek.is(Type, input);
	},

	isEither(types, input) {
		return types.some(Type => cheek.is(Type, input));
	},

	isNeither(types, input) {
		return !cheek.isEither(types, input);
	},

	// ***

	isPrimitive(input) {
		return cheek.isNotDefined(input) || cheek.isNot(Object, input);
	},

	isObject(input) {
		return !cheek.isPrimitive(input);
	},

	// ***

	isString(input) {
		return cheek.is(String, input);
	},

	isNotString(input) {
		return !cheek.isString(input);
	},

	isNumber(input) {
		return cheek.is(Number, input);
	},

	isNotNumber(input) {
		return !cheek.isNumber(input);
	},

	isArray(input) {
		return Array.isArray? Array.isArray(input) : cheek.is(Array, input);
	},

	isNotArray(input) {
		return !cheek.isArray(input);
	},

	isBoolean(input) {
		return cheek.is(Boolean, input);
	},

	isNotBoolean(input) {
		return !cheek.isBoolean(input);
	},

	// ARRAY

	isEmpty(array) {
		return cheek.isArray(array) && (!array.length || array.every(cheek.isNotDefined));
	},

	isNotEmpty(array) {
		return cheek.isArray(array) && !!array.length && array.every(cheek.isDefined);
	},

	// NUMBER

	isNaN(input) {
		return (Number.isNaN || isNaN)(input);
	},

	isNotNaN(input) {
		return !cheek.isNaN(input);
	},

	isFinite(input) {
		return Number.isFinite(input);
	},

	isNotFinite(input) {
		return !cheek.isFinite(input);
	},

	// ***

	isInteger(input) {
		return Number.isInteger? Number.isInteger(input) : cheek.isDivisibleBy(input, 1);
	},

	isNotInteger(input) {
		return !cheek.isInteger(input);
	},

	isNatural(input, zero = true) {
		return cheek.isInteger(input) && (zero? cheek.isNonNegative(input) : cheek.isPositive(input));
	},

	isNotNatural(input, zero = true) {
		return !cheek.isNatural(input, zero);
	},

	isPercent(input) {
		return cheek.isInRange(input, [0, 1], "inclusively");
	},

	isNotPercent(input) {
		return !cheek.isPercent(input);
	},

	// ***

	isEqualTo(input, operand) {
		return input === operand;
	},

	isEqualToAny(input, operands) {
		return operands.some(operand => cheek.isEqualTo(input, operand));
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
		return !cheek.isPositive(input);
	},

	isNegative(input) {
		return input < 0;
	},

	isNotNegative(input) {
		return !cheek.isNegative(input);
	},

	// ***

	isDivisibleBy(numerator, denominator) {
		return !(numerator % denominator);
	},

	isNotDivisibleBy(numerator, denominator) {
		return !cheek.isDivisibleBy(numerator, denominator);
	},

	// ***

	isInRange(input, range, inclusively = true) {
		inclusively = /^excl/i.test(inclusively)? false : !!inclusively;
		return inclusively? (input >= range[0] && input <= range[1]) : (input > range[0] && input < range[1]);
	},

	isNotInRange(input, range, inclusively = true) {
		return !cheek.isInRange(input, range, inclusively);
	},

	// BUNDLE

	bundle(inputs, methodNames) {

		function getMethodByName(methodName) {
			let method = cheek[methodName];

			if (!method)
				throw new ReferenceError(`'cheek.${methodName}' is not a function`);

			else if (method.length > 1)
				throw new SyntaxError(`Not enough arguments for method 'cheek.${methodName}' to proceed`);

			else return method;
		}

		let methods = methodNames.map(getMethodByName);

		return inputs.map(input => methods.map(method => method(input)));
	},

	everyMethod(input, methodNames) {
		return cheek.bundle([input], methodNames)[0].every(Boolean);
	},

	someMethod(input, methodNames) {
		return cheek.bundle([input], methodNames)[0].some(Boolean);
	},

	everyInput(methodName, inputs) {
		return cheek.bundle(inputs, [methodName]).map(result => result[0]).every(Boolean);
	},

	someInput(methodName, inputs) {
		return cheek.bundle(inputs, [methodName]).map(result => result[0]).some(Boolean);
	},

	// OTHER

	input(input) {
		return new Proxy({}, {
			get(obj, method) {
				switch (method) {
					default:
						return (...args) => cheek[method](input, ...args);

					case "is":
					case "isNot":
					case "isEither":
					case "isNeither":
						return (TypeOrTypes) => cheek[method](TypeOrTypes, input);

					case "everyMethod":
					case "someMethod":
						return (methodNames) => cheek[method](input, methodNames); // TODO: Update when the function signatures are changed

					case "bundle":
					case "everyInput":
					case "someInput":
						throw new TypeError(`The method 'cheek.${method}' requires multiple inputs and cannot be performed via 'cheek.input( ... )'`);
				}
			}
		});
	}
};

// Setting alias
cheek.eq = cheek.equals = cheek.isEqualTo;
cheek.eqa = cheek.isEqualToAny;
cheek.gt = cheek.isGreaterThan;
cheek.gte = cheek.isGreaterThanOrEqualTo;
cheek.lt = cheek.isLessThan;
cheek.lte = cheek.isLessThanOrEqualTo;

cheek.isInfinite = cheek.isNotFinite;
cheek.isIndivisibleBy = cheek.isNotDivisibleBy;
cheek.isNotFloat = cheek.isInteger;
cheek.isFloat = cheek.isNotInteger;
cheek.isNonNegative = cheek.isNotNegative;

module.exports = cheek;