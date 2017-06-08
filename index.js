"use strict";

let check = input => check.input(input);

// ***

(function() {
	class ReleaseError extends Error {
		constructor() {
			super("This feature is not yet implemented");
		}
	}

	// ***

	function _getMethodByName(methodName, argsLength = null) {
		let method = check[methodName];

		if (!method)
			throw new ReferenceError(`'check.${methodName}' is not a function`);

		else if (argsLength && method.length > (argsLength || 1))
			throw new SyntaxError(`Not enough arguments for method 'check.${methodName}' to proceed`);

		else return method;
	}

	// ***

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
		return check.isArray(input) || check.isDefined(input) && (check.isIterable(input) || check.isDefined(input.length));
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

	check.isGenerator = function(input) {
		return check.is((function*(){}).constructor, input);
	};

	check.isNotGenerator = function(input) {
		return !check.isGenerator(input);
	};

	check.isBoolean = function(input) {
		return check.is(Boolean, input);
	};

	check.isNotBoolean = function(input) {
		return !check.isBoolean(input);
	};

	// OBJECT

	function _equals(object, operand, _memory) {
		// strictly compare inputs
		// NaN === NaN; -0 === +0;
		if (Object.is(object, operand) || object === operand)
			return true;

		// ensure that both inputs are defined
		if (check.any([object, operand]).isNotDefined())
			return object === operand;

		// ensure inputs are of the same type
		if (check(operand).isNot(object.constructor))
			return false;

		// loosely compare inputs
		if (check(object).isEither([Number, String, Boolean]))
			return object == operand;

		// ***

		// check non-primitive inputs are equally circular (or equally not)
		if (check.xor(check.isCircular(object), check.isCircular(operand)))
			return false;

		// prepare memory for this loop
		if (check(_memory).isNotDefined())
			_memory = { object: [], operand: [] };

		// check circular inputs are circular in the same way
		for (let _object of _memory.object)
			if (_object === object)
				return _memory.operand[_memory.object.indexOf(_object)] === operand;

		// prepare memory for the next loop
		_memory.object.push(object);
		_memory.operand.push(operand);

		// make the next loop
		for (let key in object)
			if (check(operand).hasNoProperty(key))
				return false;

			else if (!_equals(object[key], operand[key], _memory))
				return false;

		// exclude current loop from memory
		_memory.object.pop();
		_memory.operand.pop();

		// return default result
		return true;
	}

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

	check.equals = function(object, operand) {
		return _equals(object, operand, null);
	};

	check.isCallable = function(object) {
		let result = null;

		try {
			object();
			result = true;
		}

		catch (error) {
			result = false;
		}

		return result;
	};

	check.isNotCallable = function(object) {
		return !check.isCallable(object);
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
		return source.startsWith(substr);
	};

	check.endsWith = function(source, substr) {
		return source.endsWith(substr);
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
		let _inclusively = /^excl/i.test(inclusively)? false : !!inclusively;
		let _range = [ Math.min(...range), Math.max(...range) ];

		return _inclusively? (input >= _range[0] && input <= _range[1]) : (input > _range[0] && input < _range[1]);
	};

	check.isNotInRange = function(input, range, inclusively = true) {
		return !check.isInRange(input, range, inclusively);
	};

	// BUNDLE

	check.bundle = function(methodNames, inputs) {
		let methods = methodNames.map(methodName => _getMethodByName(methodName, 1));

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

	function _prepareProxyBase() {
		return new Object();
	}

	function _Proxy(callback) {
		return new Proxy(_prepareProxyBase(), {
			get(obj, methodName) {
				if (check.hasProperty(obj, methodName))
					return obj[methodName];

				else return callback(methodName);
			}
		});
	}

	check.input = function(input) {
		return _Proxy(function(methodName) {
			switch (methodName) {
				default:
					return (...args) => _getMethodByName(methodName, args.length + 1)(input, ...args);

				case "is":
				case "isNot":
				case "isEither":
				case "isNeither":
				case "everyMethod":
				case "someMethod":
					return operand => _getMethodByName(methodName)(operand, input);

				case "bundle":
				case "everyInput":
				case "someInput":
					throw new TypeError(`The method 'check.${methodName}' requires multiple inputs. Use 'check.inputs( ... ).${methodName}' instead`);
			}
		});
	};

	check.inputs = function(inputs) {
		return _Proxy(function(methodName) {
			if (check(inputs).isNotIterable())
				throw new TypeError(`The method 'check.inputs' requires an array of inputs`);

			let method = _getMethodByName(methodName);

			switch (methodName) {
				default:
					throw new TypeError(`The method 'check.${methodName}' requires a single input. Use 'check.input( ... ).${methodName}' instead`);

				case "bundle":
				case "everyInput":
				case "someInput":
					return (methodNameOrNames) => method(methodNameOrNames, inputs);
			}
		});
	};

	function _multiple(inputs, methodName, ...args) {
		let results = [];

		for (let input of inputs)
			results.push(check(input)[methodName](...args));

		return results;
	}

	check.every = function(inputs) {
		return _Proxy(methodName => (...args) => _multiple(inputs, methodName, ...args).every(check.isTrue));
	};

	check.some = function(inputs) {
		return _Proxy(methodName => (...args) => _multiple(inputs, methodName, ...args).some(check.isTrue));
	};

	check.none = function(inputs) {
		return _Proxy(methodName => (...args) => !check.some(inputs)[methodName](...args));
	};
})();

// Shortening alias
check.def = check.isDefined;
check.ndef = check.isNotDefined;

check.prop = check.hasProperty;
check.noprop = check.hasNoProperty;

check.eq = check.isEqualTo;
check.eqa = check.isEqualToAny;
check.gt = check.isGreaterThan;
check.gte = check.isGreaterThanOrEqualTo;
check.lt = check.isLessThan;
check.lte = check.isLessThanOrEqualTo;
check.pos = check.isPositive;
check.neg = check.isNegative;

// Convenience alias
check.hasFirst = check.isFirstIn;
check.hasLast = check.isLastIn;

check.isNonZero = check.isNotZero;
check.isInfinite = check.isNotFinite;
check.isIndivisibleBy = check.isNotDivisibleBy;
check.isNotFloat = check.isInteger;
check.isFloat = check.isNotInteger;
check.isNonNegative = check.isNotNegative;

check.each = check.every;
check.any = check.some;
check.neither = check.none;

if (typeof module !== "undefined" && check.isDefined(module.exports))
	module.exports = check;
