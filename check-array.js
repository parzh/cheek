"use strict";

let check = {};

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
	return check.isArray(array) && array.every(check.isDefined);
};

module.exports = check;