"use client"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { baseCurrent } from "../functions/calculator"
import { ambientTemperature } from "../functions/ambientTemperature"
import React, { useState } from "react"
import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Calculator() {
	// Initialize state variables for input values
	const [apparentPower, setApparentPower] = useState("")
	const [powerFactor, setPowerFactor] = useState("")
	const [selectedVoltage, setSelectedVoltage] = useState("") // Default voltage
	const [calculatedIb, setCalculatedIb] = useState(null) // State to store the calculated Ib
	//const [selectedMedium, setSelectedMedium] = useState("air")
	const [selectedInsulation, setSelectedInsulation] = useState("") // 0: PVC | 1: XLPE or EPR
	const [selectedTemperature, setSelectedTemperature] = useState("")
	const [selectedMethod, setSelectedMethod] = useState("")

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

	const handleInsulationChange = (event) => {
		setSelectedInsulation(event.target.value)
	}

	// Function to handle changes in installation method
	const handleMethodChange = (event) => {
		setSelectedMethod(event.target.value)
	}

	// Calculate Ib
	const calculateIb = () => {
		// Convert input values to numbers and check for validity
		const S = parseFloat(apparentPower)
		const pf = parseFloat(powerFactor)
		const V = parseFloat(selectedVoltage)

		if (!isNaN(S) && !isNaN(pf) && !isNaN(V)) {
			return baseCurrent(S, V, pf)
		} else {
			return "Invalid input"
		}
	}
	const calculateTempConst = () => {
		const method = selectedMethod
		const temp = parseFloat(selectedTemperature) // Parse the input temperature as a float
		const insulation = parseFloat(selectedInsulation)

		if (!isNaN(temp) && temp >= 10) {
			return ambientTemperature(method, temp, insulation)
		} else {
			return "Invalid temperature input"
		}
	}

	// Function to reset the input fields
	const handleCancel = () => {
		setApparentPower("")
		setPowerFactor("")
		setSelectedVoltage("")
		setCalculatedIb(null)
	}
	return (
		<div className="m-8 flex justify-center justify-items-center justify-self-center">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Set your cable parameters</CardTitle>
					<CardDescription>
						Based on the <span className="text-blue-500">IEC 60364-5-52</span>{" "}
						standard.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="conductor-material">Conductor material</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="al">Aluminum</SelectItem>
										<SelectItem value="cu">Copper</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="number-of-phases">Insulation material</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent
										onChange={handleInsulationChange}
										value={selectedInsulation}
										position="popper"
									>
										<SelectItem value="0">
											PVC [<i>T</i>
											<sub>max</sub>= 70&deg;C]
										</SelectItem>
										<SelectItem value="1">
											XLPE or EPR [<i>T</i>
											<sub>max</sub>= 90&deg;C]
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="installation-method">Installation Method</Label>
								<Select>
									{/* value={selectedMethod} onChange={handleMethodChange} */}
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent
										value={selectedMethod}
										onChange={handleMethodChange}
										position="popper"
									>
										<SelectItem value="A1">
											[A1] Insulated conductors in conduit in a thermally
											insulated wall.
										</SelectItem>
										<SelectItem value="A2">
											[A2] Multi-core cable in conduit in a thermally insulated
											wall.
										</SelectItem>
										<SelectItem value="B1">
											[B1] Insulated conductors in conduit on a wooden or
											masonry wall.
										</SelectItem>
										<SelectItem value="B2">
											[B2] Multi-core cable in conduit on a wooden or masonry
											wall.
										</SelectItem>
										<SelectItem value="C">
											[C] Single-core or multi-core cable on a wooden or masonry
											wall.
										</SelectItem>
										<SelectItem value="D1">
											[D1] Multi-core cable in ducts in the ground.
										</SelectItem>
										<SelectItem value="D2">
											[D2] Multi-core cables designed to be buried directly in
											the ground.
										</SelectItem>
										<SelectItem value="E">
											[E] Multicore cable in free air.
										</SelectItem>
										<SelectItem value="F">
											[F] Single-core cables, touching in free air.
										</SelectItem>
										<SelectItem value="G">
											[G] Single-core cables, spaced in free air.
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="temperature">
									Ambient ground or air temperature (&deg;C)
								</Label>
								<Input
									id="temperature"
									placeholder="T"
									value={selectedTemperature}
									onChange={(event) =>
										setSelectedTemperature(event.target.value)
									}
								/>
							</div>

							<Alert>
								<Terminal className="h-4 w-4" />
								<AlertTitle>Temperature Constant</AlertTitle>
								<AlertDescription>
									<i>K</i>
									<sub>T</sub>= {calculateTempConst()}
								</AlertDescription>
							</Alert>
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
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="power-factor">
									Number of circuits or multi-core cables
								</Label>
								<Input
									id="power-factor"
									placeholder="Number of circuits or multi-core cables"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="power-factor">Length (m)</Label>
								<Input id="length" placeholder="length" />
							</div>
							<Alert>
								<Terminal className="h-4 w-4" />
								<AlertTitle>Design Current</AlertTitle>
								<AlertDescription>
									<i>I</i>
									<sub> b</sub>= {calculateIb()}
								</AlertDescription>
								<AlertTitle>Normalized Current</AlertTitle>
								<AlertDescription>
									<i>I</i>
									<sub> n</sub>= {calculateIb()[1]}
								</AlertDescription>
							</Alert>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline" onClick={handleCancel}>
						Cancel
					</Button>
					<Button onClick={calculateIb}>Calculate</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
