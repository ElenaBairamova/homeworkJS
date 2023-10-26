"use strict";

function solveEquation(a, b, c) {

	let arr = [];

	let d = (b ** 2 - 4 * a * c);

	if (d > 0) {

		let root1 = (-b + Math.sqrt(d)) / (2 * a);

		let root2 = (-b - Math.sqrt(d)) / (2 * a);

		arr.push(root1, root2);

		return arr;

	}

	if (d === 0) {

		let root3 = -b / (2 * a);

		arr.push(root3);

		return arr;

	}

	return arr;

}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let p = parseInt(percent) / 100 / 12;

	let s = parseInt(amount - contribution);

	let n = countMonths;

	let payment = s * (p + (p / (((1 + p) ** n) - 1)));

	let totalAmount = (payment * n).toFixed(2);

	console.log(totalAmount);

	return +totalAmount;

}