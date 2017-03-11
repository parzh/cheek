"use strict";

function getMethodByName(methodName) {
	let method = cheek[methodName];

	if (!method)
		throw new ReferenceError(`'cheek.${methodName}' is not a function`);

	else return method;
}

function getLongEnoughMethodByName({ methodName, argsLength = 1 }) {
	let method = getMethodByName(methodName);

	if (method.length > argsLength)
		throw new SyntaxError(`Not enough arguments for method 'cheek.${methodName}' to proceed`);

	else return method;
}

function prepareProxyBase() {
	return new Object();
}

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

	isArraylike(input) {
		return cheek.isArray(input) || (cheek.isDefined(input) && ((typeof Symbol !== "undefined") && (Symbol.iterator in input)) || ("length" in input));
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

	isEmptyArray(input) {
		return cheek.isArray(input) && (!input.length || input.every(cheek.isNotDefined));
	},

	isNotEmptyArray(input) {
		return cheek.isArray(input) && !!input.length && input.every(cheek.isDefined);
	},

	contains(array, element) {
		return cheek.isArray(array) && !!~array.indexOf(element);
	},

	lacks(array, element) {
		return cheek.isArray(array) && !~array.indexOf(element);
	},
	
	isFirstIn(array, input) {
		return cheek.isArray(array) && array[0] === input;
	},
	
	isNotFirstIn(array, input) {
		return cheek.isArray(array) && array[0] !== input;
	},
	
	isLastIn(array, input) {
		return cheek.isArray(array) && array[array.length - 1] === input;
	},
	
	isNotLastIn(array, input) {
		return cheek.isArray(array) && array[array.length - 1] !== input;
	},

	// STRING

	isEmptyString(input) {
		return cheek.isString(source) && !source.length;
	},

	isNotEmptyString(input) {
		return cheek.isString(source) && !!source.length;
	},

	includes(source, substr) {
		return cheek.isString(source) && !!~source.indexOf(substr);
	},

	/* no opposed method for '.includes()' */

	startsWith(source, substr) {
		return cheek.isString(source) && !source.indexOf(substr);
	},

	endsWith(source, substr) {
		return cheek.isString(source) && (source.lastIndexOf(substr) === source.length - substr.length);
	},

	// NUMBER

	isNaN(input) {
		return (Number.isNaN || isNaN)(input);
	},

	isNotNaN(input) {
		return !cheek.isNaN(input);
	},

	isFinite(input) {
		return (Number.isFinite || isFinite)(input);
	},

	isNotFinite(input) {
		return !cheek.isFinite(input);
	},

	// ***

	isInteger(input) {
		return cheek.isDivisibleBy(input, 1);
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

	isZero(input) {
		return cheek.isNumber(input) && input == 0;
	},

	isNotZero(input) {
		return !cheek.isZero(input);
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

	bundle(methodNames, inputs) {
		let methods = methodNames.map(methodName => getLongEnoughMethodByName({ methodName }));

		return inputs.map(input => methods.map(method => method(input)));
	},

	everyMethod(methodNames, input) {
		return cheek.bundle(methodNames, [input])[0].every(Boolean);
	},

	someMethod(methodNames, input) {
		return cheek.bundle(methodNames, [input])[0].some(Boolean);
	},

	everyInput(methodName, inputs) {
		return cheek.bundle([methodName], inputs).map(result => result[0]).every(Boolean);
	},

	someInput(methodName, inputs) {
		return cheek.bundle([methodName], inputs).map(result => result[0]).some(Boolean);
	},

	// OTHER

	input(input) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (obj[methodName])
					return obj[methodName];

				else switch (methodName) {
					default:
						return (...args) => getLongEnoughMethodByName({ methodName, argsLength: args.length + 1 })(input, ...args);

					case "is":
					case "isNot":
					case "isEither":
					case "isNeither":
					case "everyMethod":
					case "someMethod":
						return (additional) => cheek[methodName](additional, input);

					case "bundle":
					case "everyInput":
					case "someInput":
						throw new TypeError(`The method 'cheek.${methodName}' requires multiple inputs. Use 'cheek.inputs( ... ).${methodName}' instead`);
				}
			}
		});
	},

	inputs(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (obj[methodName])
					return obj[methodName];

				else switch (methodName) {
					default:
						getMethodByName(methodName); // verify the presence of a method at the first place
						throw new TypeError(`The method 'cheek.${methodName}' requires a single input. Use 'cheek.input( ... ).${methodName}' instead`);

					case "bundle":
					case "everyInput":
					case "someInput":
						return (methodNameOrNames) => cheek[methodName](methodNameOrNames, inputs);
				}
			}
		});
	},

	every(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (obj[methodName])
					return obj[methodName];

				else return (...args) => inputs.map(input => cheek.input(input)[methodName](...args)).every(Boolean);
			}
		});
	},

	some(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (obj[methodName])
					return obj[methodName];

				else return (...args) => inputs.map(input => cheek.input(input)[methodName](...args)).some(Boolean);
			}
		});
	},

	none(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (obj[methodName])
					return obj[methodName];

				else return (...args) => !cheek.some(inputs)[methodName](...args);
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

cheek.isNonZero = cheek.isNotZero;
cheek.isInfinite = cheek.isNotFinite;
cheek.isIndivisibleBy = cheek.isNotDivisibleBy;
cheek.isNotFloat = cheek.isInteger;
cheek.isFloat = cheek.isNotInteger;
cheek.isNonNegative = cheek.isNotNegative;
cheek.pos = cheek.isPositive;
cheek.neg = cheek.isNegative;

cheek.each = cheek.every;
cheek.any = cheek.some;
cheek.neither = cheek.none;

module.exports = cheek;
