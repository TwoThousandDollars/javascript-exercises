function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (arr) {
	if (!Array.isArray(arr) || !arr.length) return 0;
	return arr.reduce((add, curr) => add + curr)
}

function multiply (arr) {
	if (!Array.isArray(arr) || !arr.length) return 0;
	return arr.reduce((add, curr) => add * curr)
}

function power(n, x) {
	let result = n;
	for (let i = 1; i < x; i++) {
		result *= n;
	}
	return result;
}

function factorial(x) {
	// take a number multiply it by the (x - 1)
	if (x === 0) return 1;
	let result = x;
	for (let i = (x - 1); i > 0; i--) {
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}