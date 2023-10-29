import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import React, { useState } from "react"

import { groupingConstant } from "./groupingConstant"
import { CableArrangement } from "./CableArrangement"
import {arr} from "./group"
export function NumberOfCircuits() {
	const [numberOfCircuits, setNumberOfCircuits] = useState("1")
	const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 16, 20]
    const colIndex = validNumbers.indexOf(parseFloat(numberOfCircuits))
	const errorHandling = () => {
		if (numberOfCircuits === "") {
			return "..."
		} else if (!validNumbers.includes(parseFloat(numberOfCircuits))) {
			return "Invalid number of circuits or multi-core cables"
		} else {
			return numberOfCircuits
		}
	}
	// if (numberOfCircuits === "") {
	// 	return "Number of circuits or multi-core cables"
	// } else if (!validNumbers.includes(parseFloat(numberOfCircuits))) {
	// 	return "Invalid number of circuits or multi-core cables"
	// } else {
	// 	return ""
	// }

	//  const calculateGroupConst = () => {
	// 	const arrangement = parseFloat(selectedArrangement)
	// 	const numberOfCkt = parseFloat(numberOfCircuits)
	// 	const validArrangements = [0, 1, 2, 3, 4]
	// 	const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 16, 20]
	// 	if (!validNumbers.includes(numberOfCkt)) {
	// 		return "Invalid Number of circuits"
	// 	} else if (!validArrangements.includes(arrangement)) {
	// 		return "Invalid Arrangement code"
	// 	} else {
	// 		return groupingConstant(arrangement, numberOfCkt)
	// 	}
	// }
	return (
		<div className="grid w-full items-center gap-4">
            
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="numberCkt">
					Number of circuits or multi-core cables
				</Label>
				<Input
					id="numberCkt"
					placeholder="Number of circuits or multi-core cables"
					value={numberOfCircuits}
					onChange={(event) => setNumberOfCircuits(event.target.value)}
				/>
			</div>
			<Badge variant="default" className="">
				<i>K</i>
				<sub>G</sub> = "this is just number of ckts now" -> {errorHandling()} """"""""   
                {groupingConstant(2, colIndex)}
                {/* {tempIndex} */}
			</Badge>
		</div>
	)
}

//export default NumberOfCircuits
