import React, { useContext, useState } from "react"
export const FirstColumn = React.createContext()
import { copperTableJSON } from "./copperTable"
import { aluminumTableJSON } from "./aluminumTable"
//import { currentIt } from "./calculateIt"
import { Badge } from "@/components/ui/badge"

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
	const currentIt = JSON.parse(localStorage.getItem("theCurrent"))
	// This variable stores the result of the chooseColumn function
	const col = chooseColumn(i, n, m)

	// Map the copperTableJSON to create an array of arrays containing values from the specified column
	const copperArray = copperTableJSON.map((obj) => {
		return parseFloat(obj[`col__${col}`]) // Parse the value as a number
	})

	// Find the first value greater than currentIt
	const firstGreaterValue = copperArray.find((value) => value > currentIt)
	//const firstGreaterValue = copperArray.find((value) => value > currentIt);

	let output

	if (firstGreaterValue === undefined) {
		output = "Not specified"
	} else {
		output = firstGreaterValue
	}
	let conductorSize = null
	if (firstGreaterValue !== undefined) {
		const index = copperArray.indexOf(firstGreaterValue)
		if (index !== -1) {
			conductorSize = copperTableJSON[index].col
		}
	}

	return (
		<div className="flex flex-col space-y-1.5">
			<p>
				Stored Value (It): {currentIt} <i> [A]</i>
			</p>
			<p>
				First Value Greater Than It: {output} <i> [A]</i>
			</p>
			{/* <p>Size of conductor:</p> */}
			{/* <p>First Value Greater Than Kt: {firstGreaterValue}</p> */}
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>I</i>
					<sub>z</sub>={output}
					<i> [A]</i>
				</Badge>
			</div>
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>Size of Cu conductor</i>={conductorSize}
					<i> [mm²]</i>
				</Badge>
			</div>
		</div>
	)
}

function aluminumSize(i: string, n: number, m: number) {
	const currentIt = JSON.parse(localStorage.getItem("theCurrent"))
	// This variable stores the result of the chooseColumn function
	const col = chooseColumn(i, n, m)

	// Map the aluminumTableJSON to create an array of arrays containing values from the specified column
	const aluminumArray = aluminumTableJSON.map((obj) => {
		return parseFloat(obj[`col__${col}`]) // Parse the value as a number
	})

	// Find the first value greater than currentIt
	const firstGreaterValue = aluminumArray.find((value) => value > currentIt)
	//const firstGreaterValue = aluminumArray.find((value) => value > currentIt);

	let output

	if (firstGreaterValue === undefined) {
		output = "Not specified"
	} else {
		output = firstGreaterValue
	}
	let conductorSize = null
	if (firstGreaterValue !== undefined) {
		const index = aluminumArray.indexOf(firstGreaterValue)
		if (index !== -1) {
			conductorSize = aluminumTableJSON[index].col
		}
	}

	return (
		<div className="flex flex-col space-y-1.5">
			<p>
				Stored Value (It): {currentIt} <i> [A]</i>
			</p>
			<p>
				First Value Greater Than It: {output} <i> [A]</i>
			</p>
			{/* <p>Size of conductor:</p> */}
			{/* <p>First Value Greater Than Kt: {firstGreaterValue}</p> */}
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>I</i>
					<sub>z</sub>={output}
					<i> [A]</i>
				</Badge>
			</div>
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>Size of Al conductor</i>={conductorSize}
					<i> [mm²]</i>
				</Badge>
			</div>
		</div>
	)
}
function conductorSize(c: string, i: string, n: number, m: number) {
	// This variable stores the result of the chooseColumn function
	//const col = chooseColumn(i, n, m)
	if (c === "cu") {
		return copperSize(i, n, m)
	} else if (c === "al") {
		return aluminumSize(i, n, m)
	} else {
		return "~~~"
	}
	//return aluminumSize(i, n, m)
}

export { chooseColumn, conductorSize }
