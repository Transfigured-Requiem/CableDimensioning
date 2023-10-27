export function ambientTemperature(
	method: string,
	temperature: number,
	insulation: number
) {
	// col 0: temp | col 1: PVC | col 2: XLPE or EPR
	const ambientAirTemp = [
		[10, 1.22, 1.15],
		[15, 1.17, 1.12],
		[20, 1.12, 1.08],
		[25, 1.06, 1.04],
		[30, 1, 1],
		[35, 0.94, 0.96],
		[40, 0.87, 0.91],
		[45, 0.79, 0.87],
		[50, 0.71, 0.82],
		[55, 0.61, 0.76],
		[60, 0.5, 0.71],
		[65, null, 0.65],
		[70, null, 0.58],
		[75, null, 0.5],
		[80, null, 0.41],
		[85, null, null],
		[90, null, null],
	]

	const ambientGroundTemp = [
		[10, 1.1, 1.07],
		[15, 1.05, 1.04],
		[20, 1, 1],
		[25, 0.95, 0.96],
		[30, 0.89, 0.93],
		[35, 0.84, 0.89],
		[40, 0.77, 0.85],
		[45, 0.71, 0.8],
		[50, 0.63, 0.76],
		[55, 0.55, 0.71],
		[60, 0.45, 0.65],
		[65, null, 0.6],
		[70, null, 0.53],
		[75, null, 0.46],
		[80, null, 0.38],
		[85, null, null],
		[90, null, null],
	]

	// Determine which array to use based on the method
	const validMethods = ["A1", "A2", "B1", "B2", "C", "E", "F", "G"]
	let selectedArray

	if (validMethods.includes(method)) {
		// Method is one of "A1", "A2", "B1", "B2", "C", "E", "F", or "G"
		selectedArray = ambientAirTemp
	} else {
		// Method is "D1" or "D2"
		selectedArray = ambientGroundTemp
	}

	// Determine which column to access based on the insulation
	const column = insulation === 0 ? 2 : 1

	// Find the row in the selected array based on the provided temperature
	const row = selectedArray.findIndex((entry) => entry[0] === temperature)

	if (row === -1) {
		return "Temperature not found in the array"
	}

	// Access the value from the selected column and row
	const selectedValue = selectedArray[row][column]

	return selectedValue
}
