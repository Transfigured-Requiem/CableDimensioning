import React, { useContext, useState } from "react"
export const FirstColumn = React.createContext()
import { copperTableJSON } from "./copperTable"
import { aluminumTableJSON } from "./aluminumTable"

function chooseColumn(
	insulationType: string,
	numberOfPhases: number,
	methodOfInstall: number
) {
	const columnIndex = [
		[2, 1, 5, 4],
		[1, 0, 4, 3],
		[4, 3, 8, 6],
		[3, 2, 6, 5],
		[6, 4, 9, 7],
		[12, 13, 14, 15],
		[12, 13, 14, 15],
		[7, 5, 10, 8],
		[8, 6, 11, 9],
		[0, 0, 0, 0],
	]
	let column: number
	let row: number = methodOfInstall

	if (insulationType === "pvc" && numberOfPhases < 3) {
		column = 0
	} else if (insulationType === "pvc" && numberOfPhases === 3) {
		column = 1
	} else if (insulationType === "xlpe" && numberOfPhases < 3) {
		column = 2
	} else if (insulationType === "xlpe" && numberOfPhases === 3) {
		column = 3
	} else column = 0

	// Check if the row is within a valid range
	if (row >= 0 && row < columnIndex.length) {
		const trueColumn = columnIndex[row][column]
		return trueColumn
	} else {
		// Handle the case when row is out of range
		console.error("Invalid methodOfInstall value:", methodOfInstall)
		return null // Or return an appropriate default value
	}
}

function copperSize(i: string, n: number, m: number) {
	// This variable stores the result of the chooseColumn function
	const col = chooseColumn(i, n, m)

	// Map the copperTableJSON to create an array of arrays containing values from the specified column
	const copperArray = copperTableJSON.map((obj) => {
		return [obj[`col__${col}`]]
	})

	return copperArray
}

function aluminumSize(i: string, n: number, m: number) {
	// This variable stores the result of the chooseColumn function
	const col = chooseColumn(i, n, m)

	// Map the copperTableJSON to create an array of arrays containing values from the specified column
	const aluminumArray = aluminumTableJSON.map((obj) => {
		return [obj[`col__${col}`]]
	})

	return aluminumArray
}

// function coondar(c: string, i: string, n: number, m: number) {
// 	// This variable stores the result of the chooseColumn function
// 	//const col = chooseColumn(i, n, m)
// 	if (c === "1") {
// 		return copperSize(i, n, m)
// 	} else {
// 		return aluminumSize(i, n, m)
// 	}
// }
export { chooseColumn, copperSize, aluminumSize }
