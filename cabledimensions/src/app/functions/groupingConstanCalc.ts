export function groupingConstant(
	arrangement: number,
	numberOfCircuits: number
) {
	const groupingConstants = [
		[1, 0.8, 0.7, 0.65, 0.6, 0.57, 0.54, 0.52, 0.5, 0.45, 0.41, 0.38],
		[1, 0.85, 0.79, 0.75, 0.73, 0.72, 0.72, 0.71, 0.7, null, null, null],
		[0.95, 0.81, 0.72, 0.68, 0.66, 0.64, 0.63, 0.62, 0.61, null, null, null],
		[1, 0.88, 0.82, 0.77, 0.75, 0.73, 0.73, 0.72, 0.72, null, null, null],
		[1, 0.87, 0.82, 0.8, 0.8, 0.79, 0.79, 0.78, 0.78, null, null, null],
	]

	const column = numberOfCircuits

	const row = arrangement

	const selectedValue = groupingConstants[row][column]

	return selectedValue
}
