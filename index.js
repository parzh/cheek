"use strict";

let check = input => check.input(input);

// ***

(function() {
	class ReleaseError extends Error {
		constructor() {
			super("This feature is not yet implemented");
		}
	}

	function getMethodByName(methodName) {
		let method = check[methodName];

		if (!method)
			throw new ReferenceError(`'check.${methodName}' is not a function`);

		else return method;
	}

	function getLongEnoughMethodByName({ methodName, argsLength = 1 }) {
		let method = getMethodByName(methodName);

		if (method.length > argsLength)
			throw new SyntaxError(`Not enough arguments for method 'check.${methodName}' to proceed`);

		else return method;
	}

	function prepareProxyBase() {
		return new Object();
	}

	// GENERAL

	check.isTruthy = function(input) {
		return !!input;
	};

	check.isFalsy = function(input) {
		return !check.isTruthy(input);
	};

	check.isTrue = function(input) {
		return check.isBoolean(input) && input == true;
	};

	check.isFalse = function(input) {
		return check.isBoolean(input) && input == false;
	};

	check.and = function(input, operand) {
		return !!input && !!operand;
	};

	check.nand = function(input, operand) {
		return !check.and(input, operand);
	};

	check.or = function(input, operand) {
		return !!(+!!input | +!!operand);
	};

	check.nor = function(input, operand) {
		return !check.or(input, operand);
	};

	check.xor = function(input, operand) {
		return !!(+!!input ^ +!!operand);
	};

	check.ternary = function(input) {
		return check.isNotDefined(input)? undefined : check.is(Number, input)? check.isNegative(input)? false : check.isPositive(input)? true : undefined : check.isFalsy(input)? false : true;
	};

	// EXISTENCE

	check.isUndefined = function(input) {
		return typeof input === "undefined";
	};

	check.isNull = function(input) {
		return input === null;
	};

	check.isNotNull = function(input) {
		return !check.isNull(input);
	};

	check.isDefined = function(input) {
		return !check.isUndefined(input) && check.isNotNull(input);
	};

	check.isNotDefined = function(input) {
		return !check.isDefined(input);
	};

	// TYPES

	check.is = function(Type, input) {
		return input instanceof Type || Type[Symbol.hasInstance](input) || check.hasProperty(Type, "name") && (typeof input === Type.name.toLowerCase());
	};

	check.isNot = function(Type, input) {
		return !check.is(Type, input);
	};

	check.isEither = function(types, input) {
		return types.some(Type => check.is(Type, input));
	};

	check.isNeither = function(types, input) {
		return !check.isEither(types, input);
	};

	// ***

	check.isPrimitive = function(input) {
		return check.isNotDefined(input) || check.isNot(Object, input);
	};

	check.isObject = function(input) {
		return !check.isPrimitive(input);
	};

	// ***

	check.isString = function(input) {
		return check.is(String, input);
	};

	check.isNotString = function(input) {
		return !check.isString(input);
	};

	check.isNumber = function(input) {
		return check.is(Number, input);
	};

	check.isNotNumber = function(input) {
		return !check.isNumber(input);
	};

	check.isArray = function(input) {
		return Array.isArray(input);
	};

	check.isArraylike = function(input) {
		return check.isArray(input) || (check.isDefined(input) && (check.isIterable(input) || check.isDefined(input.length)));
	};

	check.isIterable = function(input) {
		return (typeof Symbol !== "undefined") && check.is(Function, input[Symbol.iterator]);
	};

	check.isNotIterable = function(input) {
		return !check.isIterable(input);
	};

	check.isNotArray = function(input) {
		return !check.isArray(input);
	};

	check.isFunction = function(input) {
		return check.is(Function, input);
	};

	check.isNotFunction = function(input) {
		return !check.isFunction(input);
	};

	check.isBoolean = function(input) {
		return check.is(Boolean, input);
	};

	check.isNotBoolean = function(input) {
		return !check.isBoolean(input);
	};

	// OBJECT

	check.isCircular = function(object) {
		let result = null;

		try {
			JSON.stringify(object);
			result = false;
		}

		catch (error) {
			result = true;
		}

		return result;
	};

	check.isNotCircular = function(object) {
		return !check.isCircular(object);
	};

	check.hasProperty = function(object, key) {
		if (check.isNotArray(key))
			return check.isDefined(object[key]) || (key || "").toString() in Object(object);

		else if (key.length <= 1)
			return check.hasProperty(object, key[0]);

		let result = false;
		let last = key.pop();
		let path = `object.${ key.join(".") }`;

		try {
			result = check.hasProperty(eval(path), last);
		}

		catch (error) {
			if (!(error instanceof TypeError))
				throw error;
		}

		return result;
	};

	check.hasNoProperty = function(object, key) {
		return !check.hasProperty(object, key);
	};

	check.equals = function(object, operand, typesafe = false) {
		if (Object.is(object, operand) || object === operand)
			return true;

		if (check(operand).is(object.constructor))
			if (check(object).isEither([Number, String, Boolean]))
				return object == operand;

			else if (check(object).isFunction())
				return object.toString() === operand.toString();

			else null; // i try to avoid curly braces in if-else statements

		else if (typesafe)
			return false;

		if (check.every([object, operand]).isPrimitive())
			return false;

		// ***

		for (let key in object)
			if (!check.equals(object[key], operand[key]))
				return false;

		for (let key in operand)
			if (!check.equals(operand[key], object[key]))
				return false;

		return true;
	};

	// ARRAY

	check.isEmptyArray = function(input) {
		return check.isArray(input) && (!input.length || input.every(check.isNotDefined));
	};

	check.isNotEmptyArray = function(input) {
		return !check.isEmptyArray(input);
	};

	check.contains = function(array, element) {
		return check.isArray(array) && !!~array.indexOf(element);
	};

	check.lacks = function(array, element) {
		return check.isArray(array) && !~array.indexOf(element);
	};
		
	check.isFirstIn = function(array, input) {
		return check.isArray(array) && array[0] === input;
	};
		
	check.isNotFirstIn = function(array, input) {
		return check.isArray(array) && array[0] !== input;
	};

	check.isLastIn = function(array, input) {
		return check.isArray(array) && array[array.length - 1] === input;
	};
		
	check.isNotLastIn = function(array, input) {
		return check.isArray(array) && array[array.length - 1] !== input;
	};

	// STRING

	check.isEmptyString = function(input) {
		return check.isString(input) && !input.length;
	};

	check.isNotEmptyString = function(input) {
		return !check.isEmptyString(input);
	};

	check.includes = function(source, element) {
		return check.isEither([String, Array], source) && !!~source.indexOf(element);
	};

		/* no opposed method for '.includes()' */

	check.startsWith = function(source, substr) {
		return check.isString(source) && !source.indexOf(substr);
	};

	check.endsWith = function(source, substr) {
		return check.isString(source) && (source.lastIndexOf(substr) === source.length - substr.length);
	};

	// NUMBER

	check.isNaN = function(input) {
		return Number.isNaN(input);
	};

	check.isNotNaN = function(input) {
		return !check.isNaN(input);
	};

	check.isFinite = function(input) {
		return Number.isFinite(input);
	};

	check.isNotFinite = function(input) {
		return !check.isFinite(input);
	};

	// ***

	check.isInteger = function(input) {
		return check.isDivisibleBy(input, 1);
	};

	check.isNotInteger = function(input) {
		return !check.isInteger(input);
	};

	check.isNatural = function(input, zero = true) {
		return check.isInteger(input) && (zero? check.isNonNegative(input) : check.isPositive(input));
	};

	check.isNotNatural = function(input, zero = true) {
		return !check.isNatural(input, zero);
	};

	check.isPercent = function(input) {
		return check.isInRange(input, [0, 1], "inclusively");
	};

	check.isNotPercent = function(input) {
		return !check.isPercent(input);
	};

	// ***

	check.isEqualTo = function(input, operand) {
		return input === operand;
	};

	check.isEqualToAny = function(input, operands) {
		return operands.some(operand => check.isEqualTo(input, operand));
	};

	check.isGreaterThan = function(input, operand) {
		return input > operand;
	};

	check.isGreaterThanOrEqualTo = function(input, operand) {
		return input >= operand;
	};

	check.isLessThan = function(input, operand) {
		return input < operand;
	};

	check.isLessThanOrEqualTo = function(input, operand) {
		return input <= operand;
	};

	// ***

	check.isPositive = function(input) {
		return input > 0;
	};

	check.isNotPositive = function(input) {
		return !check.isPositive(input);
	};

	check.isNegative = function(input) {
		return input < 0;
	};

	check.isNotNegative = function(input) {
		return !check.isNegative(input);
	};

	check.isZero = function(input) {
		return check.isNumber(input) && input == 0;
	};

	check.isNotZero = function(input) {
		return !check.isZero(input);
	};

	// ***

	check.isDivisibleBy = function(numerator, denominator) {
		return !(numerator % denominator);
	};

	check.isNotDivisibleBy = function(numerator, denominator) {
		return !check.isDivisibleBy(numerator, denominator);
	};

	// ***

	check.isInRange = function(input, range, inclusively = true) {
		inclusively = /^excl/i.test(inclusively)? false : !!inclusively;
		return inclusively? (input >= range[0] && input <= range[1]) : (input > range[0] && input < range[1]);
	};

	check.isNotInRange = function(input, range, inclusively = true) {
		return !check.isInRange(input, range, inclusively);
	};

	// BUNDLE

	check.bundle = function(methodNames, inputs) {
		let methods = methodNames.map(methodName => getLongEnoughMethodByName({ methodName }));

		return inputs.map(input => methods.map(method => method(input)));
	};

	check.everyMethod = function(methodNames, input) {
		return check.bundle(methodNames, [input])[0].every(Boolean);
	};

	check.someMethod = function(methodNames, input) {
		return check.bundle(methodNames, [input])[0].some(Boolean);
	};

	check.everyInput = function(methodName, inputs) {
		return check.bundle([methodName], inputs).map(result => result[0]).every(Boolean);
	};

	check.someInput = function(methodName, inputs) {
		return check.bundle([methodName], inputs).map(result => result[0]).some(Boolean);
	};

	// PROXY

	check.input = function(input) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (check.isDefined(obj[methodName]))
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
						return (additional) => getMethodByName(methodName)(additional, input);

					case "bundle":
					case "everyInput":
					case "someInput":
						throw new TypeError(`The method 'check.${methodName}' requires multiple inputs. Use 'check.inputs( ... ).${methodName}' instead`);
				}
			}
		});
	};

	check.inputs = function(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (check.isDefined(obj[methodName]))
					return obj[methodName];

				else switch (methodName) {
					default:
						getMethodByName(methodName); // verify presence of the method at the first place
						throw new TypeError(`The method 'check.${methodName}' requires a single input. Use 'check.input( ... ).${methodName}' instead`);

					case "bundle":
					case "everyInput":
					case "someInput":
						return (methodNameOrNames) => getMethodByName(methodName)(methodNameOrNames, inputs);
				}
			}
		});
	};

	check.every = function(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (check.isDefined(obj[methodName]))
					return obj[methodName];

				else return (...args) => inputs.map(input => check(input)[methodName](...args)).every(Boolean);
			}
		});
	};

	check.some = function(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (check.isDefined(obj[methodName]))
					return obj[methodName];

				else return (...args) => inputs.map(input => check(input)[methodName](...args)).some(Boolean);
			}
		});
	};

	check.none = function(inputs) {
		return new Proxy(prepareProxyBase(), {
			get(obj, methodName) {
				if (check.isDefined(obj[methodName]))
					return obj[methodName];

				else return (...args) => !check.some(inputs)[methodName](...args);
			}
		});
	};
})();

// Setting alias
check.prop = check.hasProperty;
check.noprop = check.hasNoProperty;

check.hasFirst = check.isFirstIn;
check.hasLast = check.isLastIn;

check.isNonZero = check.isNotZero;
check.isInfinite = check.isNotFinite;
check.isIndivisibleBy = check.isNotDivisibleBy;
check.isNotFloat = check.isInteger;
check.isFloat = check.isNotInteger;
check.isNonNegative = check.isNotNegative;

check.eq = check.isEqualTo;
check.eqa = check.isEqualToAny;
check.gt = check.isGreaterThan;
check.gte = check.isGreaterThanOrEqualTo;
check.lt = check.isLessThan;
check.lte = check.isLessThanOrEqualTo;
check.pos = check.isPositive;
check.neg = check.isNegative;

check.each = check.every;
check.any = check.some;
check.neither = check.none;

if (typeof module !== "undefined" && check.isDefined(module.exports))
	module.exports = check;
