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
import { baseCurrent, normalCurrent } from "../functions/calculator"
import { ambientTemperature } from "../functions/ambientTemperature"
import { groupingConstant } from "../functions/groupingConstanCalc"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InsulationMaterial } from "../functions/InsulationMaterial"
import { InstallationMethod } from "../functions/InstallationMethod"
import { ConductorMaterial } from "../functions/ConductorMaterial"
import { CableArrangement } from "../functions/CableArrangement"
import { NumberOfCircuits } from "../functions/NumberOfCircuits"
import { BaseCurrent } from "../functions/BaseCurrent"
import { CableSize } from "../functions/CableSize"
import { ThermalConstant } from "../functions/ThermalConstant"

export default function Calculator() {
	// Initialize state variables for input values
	// const [apparentPower, setApparentPower] = useState("")
	// const [powerFactor, setPowerFactor] = useState("")
	// const [selectedVoltage, setSelectedVoltage] = useState("") // Default voltage
	//const [calculatedIb, setCalculatedIb] = useState(null) // State to store the calculated Ib
	// const [selectedInsulation, setSelectedInsulation] = useState("") // 0: PVC | 1: XLPE or EPR
	const [selectedTemperature, setSelectedTemperature] = useState("")

	// const [selectedArrangement, setSelectedArrangement] = useState("")
	// const [numberOfAdjCkt, setNumberOfAdjCkt] = useState("")

	// Function to handle input changes
	// const handleApparentPowerChange = (event) => {
	// 	setApparentPower(event.target.value)
	// }

	// const handlePowerFactorChange = (event) => {
	// 	setPowerFactor(event.target.value)
	// }

	// // Function to handle voltage selection
	// const handleVoltageChange = (event) => {
	// 	setSelectedVoltage(event.target.value)
	// }

	// const S = parseFloat(apparentPower)
	// const pf = parseFloat(powerFactor)
	// const V = parseFloat(selectedVoltage)
	// // Calculate Ib
	// const calculateIb = () => {
	// 	// Convert input values to numbers and check for validity

	// 	if (!isNaN(S) && !isNaN(pf) && !isNaN(V)) {
	// 		return baseCurrent(S, V, pf)
	// 	} else {
	// 		return "..."
	// 	}
	// }

	// const calculateIn = () => {
	// 	if (!isNaN(S) && !isNaN(pf) && !isNaN(V)) {
	// 		let Ib = baseCurrent(S, V, pf)
	// 		return Math.round(Ib)
	// 	} else {
	// 		return "..."
	// 	}
	// }
	// const calculateTempConst = () => {
	// 	const method = selectedMethod
	// 	const temp = parseFloat(selectedTemperature) // Parse the input temperature as a float
	// 	const insulation = value

	// 	if (!isNaN(temp) && temp >= 10) {
	// 		return ambientTemperature(method, temp, insulation)
	// 	} else {
	// 		return ".!.."
	// 	}
	// }

	// const calculateGroupConst = () => {
	// 	const arrangement = parseFloat(selectedArrangement)
	// 	const numberOfCkt = parseFloat(numberOfAdjCkt)
	// 	const validArrangements = [0, 1, 2, 3, 4]
	// 	const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 16, 20]
	// 	if (!validNumbers.includes(numberOfCkt)) {
	// 		return "Invalid Number of circuits"
	// 	} else if (!validArrangements.includes(arrangement)) {
	// 		return "Invalid Arrangment code"
	// 	} else {
	// 		return groupingConstant(arrangement, numberOfCkt)
	// 	}
	// }

	// const arrangementsTable = [
	// 	{
	// 		arrangement: "[A-F] Bunched in air, on a surface, embedded or enclosed.",
	// 		code: "0",
	// 	},
	// 	{
	// 		arrangement: "[C] Single layer on wall, floor or unperforated tray.",
	// 		code: "1",
	// 	},

	return (
		<div className="m-8 flex justify-center justify-items-center justify-self-center">
			<Card className="w-[920px]  sm:h-4/5">
				<CardHeader>
					<CardTitle>Set your cable parameters</CardTitle>
					<CardDescription>
						Based on the <span className="text-blue-500">IEC 60364-5-52</span>{" "}
						standard.
					</CardDescription>
				</CardHeader>
				<CardContent className="">
					<form>
						<div className="grid w-full items-center gap-4">
							<Tabs defaultValue="base-current" className="w-auto ">
								<TabsList className="grid w-full grid-cols-4">
									<TabsTrigger value="base-current">Base Current</TabsTrigger>
									<TabsTrigger value="grouping-constant">
										Grouping Constant
									</TabsTrigger>
									<TabsTrigger value="thermal-insulation-constant">
										Thermal Insulation Constant
									</TabsTrigger>
									<TabsTrigger value="cable-parameters">
										Cable Parameters
									</TabsTrigger>
								</TabsList>
								<TabsContent value="base-current">
									<BaseCurrent />
								</TabsContent>
								<TabsContent value="grouping-constant">
									<CableArrangement />
								</TabsContent>
								<TabsContent value="thermal-insulation-constant">
									{/* <InsulationMaterial />
									<InstallationMethod />
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
									</div> */}
									<ThermalConstant />
								</TabsContent>
								<TabsContent value="cable-parameters"></TabsContent>
							</Tabs>
							{/* <BaseCurrent /> */}
							{/* <ConductorMaterial /> */}

							{/* <CableArrangement /> */}
							{/* <NumberOfCircuits /> */}

							{/* <div className="flex flex-col space-y-1.5">
								<Label htmlFor="numberCkt">
									Number of circuits or multi-core cables
								</Label>
								<Input
									id="numberCkt"
									placeholder="Number of circuits or multi-core cables"
									value={numberOfAdjCkt}
									onChange={(event) => setNumberOfAdjCkt(event.target.value)}
								/>
							</div>
							<Badge variant="default" className="">
								<i>K</i>
								<sub>G</sub>= {calculateGroupConst()}
							</Badge> */}

							{/* <Badge variant="default" className="">
								<i>K</i>
								<sub>T</sub>= {calculateTempConst()}
							</Badge> */}

							{/* <div className="flex flex-col space-y-1.5">
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
								<Label htmlFor="power-factor">Length (m)</Label>
								<Input id="length" placeholder="length" />
							</div>
							<Badge variant="default">
								<i>I</i>
								<sub> b</sub>= {calculateIb()}
							</Badge>
							<Badge variant="default" className="">
								<i>I</i>
								<sub> n</sub>= {calculateIn()}
							</Badge> */}
						</div>
					</form>
				</CardContent>

				{/* <CardFooter className="flex justify-between">
							<Button variant="outline" onClick={handleCancel}>
								Cancel
							</Button>
							<Button onClick={calculateIb}>Calculate</Button>
						</CardFooter> */}
			</Card>

			{/* <div className="ml-20 mr-20 text-md">
				<Table>
					<TableCaption>Arrangements Codes table</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[400px]">Arrangement</TableHead>
							<TableHead>Code</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{arrangementsTable.map((arrangement) => (
							<TableRow key={arrangement.arrangement}>
								<TableCell className="font-medium">
									{arrangement.arrangement}
								</TableCell>
								<TableCell>{arrangement.code}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div> */}
		</div>
	)
}
