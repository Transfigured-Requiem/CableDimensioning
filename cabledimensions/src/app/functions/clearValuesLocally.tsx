import React from "react"
import { Button } from "@/components/ui/button"
function ClearVals() {
	// Function to handle the button click and delete values from localStorage
	const handleDeleteButtonClick = () => {
		const keysToDelete = [
			"currentIn",
			"currentIt",
			"KG",
			"KT",
			"KR",
			"V",
			"W",
			"pf",
			"T",
			"KT",
			"KR",
			"Ib",
			"In",
			"arrangement",
			"numberCkt",
			"insulation",
			"material",
			"phases",
			"Iz",
			"Size",
			// Add more keys as needed
		]

		keysToDelete.forEach((key) => {
			localStorage.removeItem(key)
		})
	}

	return (
		<div className="grid justify-items-end">
			{/* Your component content */}
			<Button
				variant="destructive"
				className="text-md font-semibold"
				onClick={handleDeleteButtonClick}
			>
				Reset all values
			</Button>
		</div>
	)
}

export default ClearVals
