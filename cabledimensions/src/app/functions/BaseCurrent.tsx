import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function BaseCurrent() {
	const [apparentPower, setApparentPower] = useState("")
	const [powerFactor, setPowerFactor] = useState("")
	const [selectedVoltage, setSelectedVoltage] = useState("") // Default voltage

	// Function to handle input changes
	const handleApparentPowerChange = (event) => {
		setApparentPower(event.target.value)
	}

	const handlePowerFactorChange = (event) => {
		setPowerFactor(event.target.value)
	}

	// Function to handle voltage selection
	const handleVoltageChange = (event) => {
		setSelectedVoltage(event.target.value)
	}

	const S = parseFloat(apparentPower)
	const pf = parseFloat(powerFactor)
	const V = parseFloat(selectedVoltage)
	// Calculate Ib
	const calculateIb = () => {
		// Convert input values to numbers and check for validity

		if (!isNaN(S) && !isNaN(pf) && !isNaN(V)) {
			let Ib = S / (pf * V)
			return Ib
		} else {
			return "..."
		}
	}

	const calculateIn = () => {
		if (!isNaN(S) && !isNaN(pf) && !isNaN(V)) {
			let Ib = S / (pf * V)
			return Math.round(Ib)
		} else {
			return "..."
		}
	}

	return (
		<div className="flex flex-col space-y-1.5">
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="voltage">Line-to-Neutral Voltage (V)</Label>
				<Input
					id="voltage"
					placeholder="V"
					value={selectedVoltage}
					onChange={handleVoltageChange}
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="rated-power">Rated power (W)</Label>
				<Input
					id="rated-power"
					placeholder="P"
					value={apparentPower}
					onChange={handleApparentPowerChange}
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="power-factor">Power factor</Label>
				<Input
					id="power-factor"
					placeholder="cos(θ)"
					value={powerFactor}
					onChange={handlePowerFactorChange}
				/>
			</div>
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>I</i>
					<sub> b</sub>= {calculateIb()}
				</Badge>
			</div>
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>I</i>
					<sub> n</sub>= {calculateIn()}
				</Badge>
			</div>
		</div>
	)
}