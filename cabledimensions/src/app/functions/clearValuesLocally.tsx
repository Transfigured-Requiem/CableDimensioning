import React from "react"
import { Button } from "@/components/ui/button"
function ClearVals() {
	// Function to handle the button click and delete values from localStorage
	const handleDeleteButtonClick = () => {
		localStorage.removeItem("currentIn")
		localStorage.removeItem("currentIt")
		localStorage.removeItem("KG")
		localStorage.removeItem("KT")
		localStorage.removeItem("KR")
	}

	return (
		<div>
			{/* Your component content */}
			<Button variant="outline" onClick={handleDeleteButtonClick}>
				Reset all values
			</Button>
		</div>
	)
}

export default ClearVals
