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

// ***

let cheek = input => cheek.input(input);

// GENERAL

cheek.isTruthy = function(input) {
	return new Boolean(input).valueOf();
},

cheek.isFalsy = function(input) {
	return !cheek.isTruthy(input);
},

cheek.isTrue = function(input) {
	return cheek.isBoolean(input) && input == true;
},

cheek.isFalse = function(input) {
	return cheek.isBoolean(input) && input == false;
},

// EXISTANCE

cheek.isUndefined = function(input) {
	return typeof input === "undefined";
},

cheek.isNull = function(input) {
	return input === null;
},

cheek.isNotNull = function(input) {
	return !cheek.isNull(input);
},

cheek.isDefined = function(input) {
	return !cheek.isUndefined(input) && cheek.isNotNull(input);
},

cheek.isNotDefined = function(input) {
	return !cheek.isDefined(input);
},

// TYPES

cheek.is = function(Type, input) {
	return input instanceof Type || (typeof Symbol !== "undefined") && Type[Symbol.hasInstance](input) || typeof input === Type.name.toLowerCase();
},

cheek.isNot = function(Type, input) {
	return !cheek.is(Type, input);
},

cheek.isEither = function(types, input) {
	return types.some(Type => cheek.is(Type, input));
},

cheek.isNeither = function(types, input) {
	return !cheek.isEither(types, input);
},

// ***

cheek.isPrimitive = function(input) {
	return cheek.isNotDefined(input) || cheek.isNot(Object, input);
},

cheek.isObject = function(input) {
	return !cheek.isPrimitive(input);
},

// ***

cheek.isString = function(input) {
	return cheek.is(String, input);
},

cheek.isNotString = function(input) {
	return !cheek.isString(input);
},

cheek.isNumber = function(input) {
	return cheek.is(Number, input);
},

cheek.isNotNumber = function(input) {
	return !cheek.isNumber(input);
},

cheek.isArray = function(input) {
	return Array.isArray? Array.isArray(input) : cheek.is(Array, input);
},

cheek.isArraylike = function(input) {
	return cheek.isArray(input) || (cheek.isDefined(input) && ((typeof Symbol !== "undefined") && (Symbol.iterator in input)) || ("length" in input));
},

cheek.isNotArray = function(input) {
	return !cheek.isArray(input);
},

cheek.isBoolean = function(input) {
	return cheek.is(Boolean, input);
},

cheek.isNotBoolean = function(input) {
	return !cheek.isBoolean(input);
},

// ARRAY

cheek.isEmptyArray = function(input) {
	return cheek.isArray(input) && (!input.length || input.every(cheek.isNotDefined));
},

cheek.isNotEmptyArray = function(input) {
	return !cheek.isEmptyArray(input);
},

cheek.contains = function(array, element) {
	return cheek.isArray(array) && !!~array.indexOf(element);
},

cheek.lacks = function(array, element) {
	return cheek.isArray(array) && !~array.indexOf(element);
},
	
cheek.isFirstIn = function(array, input) {
	return cheek.isArray(array) && array[0] === input;
},
	
cheek.isNotFirstIn = function(array, input) {
	return cheek.isArray(array) && array[0] !== input;
},

cheek.isLastIn = function(array, input) {
	return cheek.isArray(array) && array[array.length - 1] === input;
},
	
cheek.isNotLastIn = function(array, input) {
	return cheek.isArray(array) && array[array.length - 1] !== input;
},

// STRING

cheek.isEmptyString = function(input) {
	return cheek.isString(input) && !input.length;
},

cheek.isNotEmptyString = function(input) {
	return !cheek.isEmptyString(input);
},

cheek.includes = function(source, substr) {
	return cheek.isString(source) && !!~source.indexOf(substr);
},

	/* no opposed method for '.includes()' */

cheek.startsWith = function(source, substr) {
	return cheek.isString(source) && !source.indexOf(substr);
},

cheek.endsWith = function(source, substr) {
	return cheek.isString(source) && (source.lastIndexOf(substr) === source.length - substr.length);
},

// NUMBER

cheek.isNaN = function(input) {
	return (Number.isNaN || isNaN)(input);
},

cheek.isNotNaN = function(input) {
	return !cheek.isNaN(input);
},

cheek.isFinite = function(input) {
	return (Number.isFinite || isFinite)(input);
},

cheek.isNotFinite = function(input) {
	return !cheek.isFinite(input);
},

// ***

cheek.isInteger = function(input) {
	return cheek.isDivisibleBy(input, 1);
},

cheek.isNotInteger = function(input) {
	return !cheek.isInteger(input);
},

cheek.isNatural = function(input, zero = true) {
	return cheek.isInteger(input) && (zero? cheek.isNonNegative(input) : cheek.isPositive(input));
},

cheek.isNotNatural = function(input, zero = true) {
	return !cheek.isNatural(input, zero);
},

cheek.isPercent = function(input) {
	return cheek.isInRange(input, [0, 1], "inclusively");
},

cheek.isNotPercent = function(input) {
	return !cheek.isPercent(input);
},

// ***

cheek.isEqualTo = function(input, operand) {
	return input === operand;
},

cheek.isEqualToAny = function(input, operands) {
	return operands.some(operand => cheek.isEqualTo(input, operand));
},

cheek.isGreaterThan = function(input, operand) {
	return input > operand;
},

cheek.isGreaterThanOrEqualTo = function(input, operand) {
	return input >= operand;
},

cheek.isLessThan = function(input, operand) {
	return input < operand;
},

cheek.isLessThanOrEqualTo = function(input, operand) {
	return input <= operand;
},

// ***

cheek.isPositive = function(input) {
	return input > 0;
},

cheek.isNotPositive = function(input) {
	return !cheek.isPositive(input);
},

cheek.isNegative = function(input) {
	return input < 0;
},

cheek.isNotNegative = function(input) {
	return !cheek.isNegative(input);
},

cheek.isZero = function(input) {
	return cheek.isNumber(input) && input == 0;
},

cheek.isNotZero = function(input) {
	return !cheek.isZero(input);
},

// ***

cheek.isDivisibleBy = function(numerator, denominator) {
	return !(numerator % denominator);
},

cheek.isNotDivisibleBy = function(numerator, denominator) {
	return !cheek.isDivisibleBy(numerator, denominator);
},

// ***

cheek.isInRange = function(input, range, inclusively = true) {
	inclusively = /^excl/i.test(inclusively)? false : !!inclusively;
	return inclusively? (input >= range[0] && input <= range[1]) : (input > range[0] && input < range[1]);
},

cheek.isNotInRange = function(input, range, inclusively = true) {
	return !cheek.isInRange(input, range, inclusively);
},

// BUNDLE

cheek.bundle = function(methodNames, inputs) {
	let methods = methodNames.map(methodName => getLongEnoughMethodByName({ methodName }));

	return inputs.map(input => methods.map(method => method(input)));
},

cheek.everyMethod = function(methodNames, input) {
	return cheek.bundle(methodNames, [input])[0].every(Boolean);
},

cheek.someMethod = function(methodNames, input) {
	return cheek.bundle(methodNames, [input])[0].some(Boolean);
},

cheek.everyInput = function(methodName, inputs) {
	return cheek.bundle([methodName], inputs).map(result => result[0]).every(Boolean);
},

cheek.someInput = function(methodName, inputs) {
	return cheek.bundle([methodName], inputs).map(result => result[0]).some(Boolean);
},

// PROXY

cheek.input = function(input) {
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

cheek.inputs = function(inputs) {
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

cheek.every = function(inputs) {
	return new Proxy(prepareProxyBase(), {
		get(obj, methodName) {
			if (obj[methodName])
				return obj[methodName];

			else return (...args) => inputs.map(input => cheek.input(input)[methodName](...args)).every(Boolean);
		}
	});
},

cheek.some = function(inputs) {
	return new Proxy(prepareProxyBase(), {
		get(obj, methodName) {
			if (obj[methodName])
				return obj[methodName];

			else return (...args) => inputs.map(input => cheek.input(input)[methodName](...args)).some(Boolean);
		}
	});
},

cheek.none = function(inputs) {
	return new Proxy(prepareProxyBase(), {
		get(obj, methodName) {
			if (obj[methodName])
				return obj[methodName];

			else return (...args) => !cheek.some(inputs)[methodName](...args);
		}
	});
}

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
