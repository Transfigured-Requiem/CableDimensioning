"use client"

import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"

import { calculateRes } from "./calculateMotorResistance"

//import { copperSize, aluminumSize } from "./chooseColumn"
export function ResistanceMotor() {
	const [voltage, setVoltage] = useState("")
	const [power, setPower] = useState("")
	const [speed, setSpeed] = useState("")
	const [poles, setPoles] = useState("")
	const [constK, setConstK] = useState("")
	const [constN, setConstN] = useState("")
	const [efficiency, setEfficiency] = useState("")
	const [powerFactor, setPowerFactor] = useState("")
	const [sourceFrequency, setSourceFrequency] = useState("")
	//const [voltage, setVoltage] = useState("")
	if (typeof window !== "undefined") {
		const rotorResistance = localStorage.getItem("rotorResistance") || "N/A"
		const startTorque = localStorage.getItem("startTorque") || "N/A"
		const startCurrent = localStorage.getItem("startCurrent") || "N/A"
	}

	const [buttonPressed, setButtonPressed] = useState(false)

	// Define your state variables (rotorResistance, startTorque, startCurrent)

	const handleButtonClick = (event) => {
		event.preventDefault() // Prevent the default form submission behavior
		// Perform your calculations and update the state variables here
		setButtonPressed(true)
	}
	return (
		<div className="space-y-2.5">
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="voltage">Line-to-Line Voltage (V)</Label>
				<Input
					id="voltage"
					placeholder="V"
					value={voltage}
					onChange={(event) => {
						setVoltage(event.target.value)
					}}
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="rated-power">Rated power (W)</Label>
				<Input
					id="rated-power"
					placeholder="P"
					value={power}
					onChange={(event) => {
						setPower(event.target.value)
					}}
				/>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="power-factor">Speed (RPM)</Label>
				<Input
					id="speed"
					placeholder="Speed (RPM)"
					value={speed}
					onChange={(event) => {
						setSpeed(event.target.value)
					}}
				/>
			</div>
			{/* ======================================================== */}

			<div className="flex space-x-4">
				<div className="flex-1 flex flex-col space-y-1.5 mt-8">
					<Label htmlFor="poles">Number of Poles</Label>
					<Input
						id="poles"
						placeholder="number of poles"
						value={poles}
						onChange={(event) => {
							setPoles(event.target.value)
						}}
					/>
				</div>

				<div className="flex-1 flex flex-col space-y-1.5 mt-8">
					<Label htmlFor="power-factor">Power Factor &quot;pf&quot;</Label>
					<Input
						id="power-factor"
						placeholder="pf"
						value={powerFactor}
						onChange={(event) => {
							setPowerFactor(event.target.value)
						}}
					/>
				</div>

				<div className="flex-1 flex flex-col space-y-1.5 mt-8">
					<Label htmlFor="source-frequency">
						Source Frequency &quot;f&quot;
					</Label>
					<Input
						id="source-frequency"
						placeholder="f"
						value={sourceFrequency}
						onChange={(event) => {
							setSourceFrequency(event.target.value)
						}}
					/>
				</div>
			</div>

			{/* ======================================================== */}
			<div className="flex space-x-4 ">
				<div className="flex-1 flex flex-col space-y-1.5 mt-8">
					<Label htmlFor="motor-constant">
						Motor Design Constant &quot;k&quot;
					</Label>
					<Input
						id="motor-constant"
						placeholder="k"
						value={constK}
						onChange={(event) => {
							setConstK(event.target.value)
						}}
					/>
				</div>

				<div className="flex-1 flex flex-col space-y-1.5 mt-8">
					<Label htmlFor="start-current-factor">
						Start Current Factor &quot;n&quot;
					</Label>
					<Input
						id="start-current-factor"
						placeholder="n"
						value={constN}
						onChange={(event) => {
							setConstN(event.target.value)
						}}
					/>
				</div>

				<div className="flex-1 flex flex-col space-y-1.5 mt-8">
					<Label htmlFor="efficiency">Efficiency &quot;η&quot;</Label>
					<Input
						id="efficiency"
						placeholder="η"
						value={efficiency}
						onChange={(event) => {
							setEfficiency(event.target.value)
						}}
					/>
				</div>
			</div>

			{/* ======================================================== */}
			{calculateRes(
				parseFloat(voltage),
				parseFloat(power),
				parseFloat(poles),
				parseFloat(constK),
				parseFloat(constN),
				parseFloat(efficiency),
				parseFloat(powerFactor),
				parseFloat(sourceFrequency),
				parseFloat(speed)
			)}
			{/* ======================================================== */}

			<div className="">
				<div>
					<div className="relative">
						<Button
							variant="default"
							className="text-md font-semibold absolute right-0"
							onClick={handleButtonClick}
						>
							Calculate
						</Button>
					</div>

					{/* <form onSubmit={(e) => e.preventDefault()}> */}
					{/* Other form elements can go here */}
					{/* <button onClick={handleButtonClick}>Calculate</button> */}
					{/* </form> */}
					{/* <Button
					variant="destructive"
					className="text-md font-semibold"
					onClick={handleButtonClick}
				>
					Calculate
				</Button> */}

					{buttonPressed && (
						<div>
							{/* Your Badge components here */}
							<div className="">
								<Badge variant="default" className="w-[40%]">
									<i>R</i>
									<sub> rotor</sub>= {rotorResistance}
									<span className="w-5"></span>
									<i> [Ohm]</i>
								</Badge>
							</div>
							<div className="">
								<Badge variant="secondary" className="w-[40%]">
									<i>T</i>
									<sub> start</sub>= {startTorque}
									<span className="w-5"></span>
									<i> [Nm]</i>
								</Badge>
							</div>
							<div className="">
								<Badge variant="secondary" className="w-[40%]">
									<i>I</i>
									<sub> rotor</sub>= {startCurrent}
									<span className="w-5"></span>
									<i> [A]</i>
								</Badge>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
