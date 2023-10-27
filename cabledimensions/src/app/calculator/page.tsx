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
import React, { useState } from "react"
import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Calculator() {
	// Initialize state variables for input values
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
								<Label htmlFor="number-of-phases">Number of phases</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="three-phases">3 Phases</SelectItem>
										<SelectItem value="single-phase">1 Phase</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="installation-method">Installation Method</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
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
								<Label htmlFor="voltage">Voltage (V)</Label>
								<Input
									id="voltage"
									placeholder="V"
									value={selectedVoltage}
									onChange={handleVoltageChange}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="rated-power">Rated power (VA)</Label>
								<Input
									id="rated-power"
									placeholder="S"
									value={apparentPower}
									onChange={handleApparentPowerChange}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="power-factor">Power factor</Label>
								<Input
									id="power-factor"
									placeholder="pf"
									value={powerFactor}
									onChange={handlePowerFactorChange}
								/>
							</div>
							<Alert variant="">
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
					<Button variant="outline">Cancel</Button>
					<Button>Calculate</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
