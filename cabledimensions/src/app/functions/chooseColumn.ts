export function chooseColumn(
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
		return [row, " ", column, " ", trueColumn]
	} else {
		// Handle the case when row is out of range
		console.error("Invalid methodOfInstall value:", methodOfInstall)
		return null // Or return an appropriate default value
	}
}
