import { cn } from "@/lib/utils"
import React, { useState, useContext } from "react"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

import { MethodOfInstall } from "../calculator/page"

import { ambientTemperature } from "./ambientTemperature"

import { TypeOfInsulation } from "../calculator/page"
import { insulationMaterials } from "./constants"
import { thermalResistivity } from "./constants"

import { thermalRes } from "./thermalRes"
export function ThermalConstant() {
	const method = useContext(MethodOfInstall)
	const insulation = useContext(TypeOfInsulation)

	// const [isDropdownOpen, setDropdownOpen] = useState(false)
	// const [selectedValue, setSelectedValue] = useState("")

	const [selectedTemperature, setSelectedTemperature] = useState("")

	const [thermalResistivityOpen, setThermalResistivityOpen] = useState(false)
	const [thermalResistivityValue, setThermalResistivityValue] = useState("")

	// const installationMethods = [
	// 	{
	// 		value: "0",
	// 		label:
	// 			"[A1] Insulated conductors in conduit in a thermally insulated wall.",
	// 	},
	// 	{
	// 		value: "1",
	// 		label: "[A2] Multi-core cable in conduit in a thermally insulated wall.",
	// 	},
	// 	{
	// 		value: "2",
	// 		label:
	// 			"[B1] Insulated conductors in conduit on a wooden or masonry wall.",
	// 	},
	// 	{
	// 		value: "3",
	// 		label: "[B2] Multi-core cable in conduit on a wooden or masonry wall.",
	// 	},
	// 	{
	// 		value: "4",
	// 		label: "[C] Single-core or multi-core cable on a wooden or masonry wall.",
	// 	},
	// 	{
	// 		value: "5",
	// 		label: "[D1] Multi-core cable in ducts in the ground.",
	// 	},
	// 	{
	// 		value: "6",
	// 		label:
	// 			"[D2] Multi-core cables designed to be buried directly in the ground.",
	// 	},
	// 	{
	// 		value: "7",
	// 		label: "[E] Multi-core cable in free air.",
	// 	},
	// 	{
	// 		value: "8",
	// 		label: "[F] Single-core cables, touching in free air.",
	// 	},
	// 	{
	// 		value: "9",
	// 		label: "[G] Single-core cables, spaced in free air.",
	// 	},
	// ]

	return (
		<div className="flex flex-col space-y-1.5">
			{/* <div className="flex flex-col space-y-1.5">
				<Label htmlFor="conductor-material">Installation method</Label>
				<Popover open={isDropdownOpen} onOpenChange={setDropdownOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={isDropdownOpen}
							className="w-full justify-between"
						>
							{selectedValue
								? installationMethods.find(
										(framework) => framework.value === selectedValue
								  )?.label
								: "Select installation method..."}

							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Command>
							<CommandInput placeholder="Search installation method..." />
							<CommandEmpty>
								<span className="text-red-500 font-bold">
									Installation method not found.
								</span>
							</CommandEmpty>
							<CommandGroup>
								{installationMethods.map((framework) => (
									<CommandItem
										key={framework.value}
										value={framework.value}
										onSelect={(currentValue) => {
											setSelectedValue(
												currentValue === selectedValue ? "" : currentValue
											)
											setDropdownOpen(false)
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												selectedValue === framework.value
													? "opacity-100"
													: "opacity-0"
											)}
										/>
										{framework.label}
									</CommandItem>
								))}
							</CommandGroup>
						</Command>
					</PopoverContent>
				</Popover>
			</div> */}
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="thermal-resistivity">
					Thermal Resistivity{" "}
					<span className="text-grey-500 opacity-30">
						[set for methods D1 and D2 otherwise it&apos;s unity]
					</span>
				</Label>
				<Popover
					open={thermalResistivityOpen}
					onOpenChange={setThermalResistivityOpen}
				>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={thermalResistivityOpen}
							className="w-auto justify-between"
						>
							{thermalResistivityValue
								? thermalResistivity.find(
										(material) => material.value === thermalResistivityValue
								  )?.label
								: "Select thermal resistivity ..."}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Command>
							<CommandInput placeholder="Search thermal resistivity ..." />
							<CommandEmpty>
								<span className="text-red-500 font-bold">
									Thermal resistivity not found.
								</span>
							</CommandEmpty>
							<CommandGroup>
								{thermalResistivity.map((material) => (
									<CommandItem
										key={material.value}
										value={material.value}
										onSelect={(currentValue) => {
											setThermalResistivityValue(
												currentValue === thermalResistivityValue
													? ""
													: currentValue
											)
											setThermalResistivityOpen(false)
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												thermalResistivityValue === material.value
													? "opacity-100"
													: "opacity-0"
											)}
										/>
										{material.label}
									</CommandItem>
								))}
							</CommandGroup>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
			<p>
				<span className="text-yellow-500 font-bold">Here boy</span> ={method}
			</p>
			<p>
				<span className="text-yellow-500 font-bold">Here boy</span> =
				{thermalResistivityValue}
			</p>
			<div className="flex flex-col space-y-1.5"></div>
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>K</i>
					<sub>R</sub>=
					{thermalRes(parseFloat(method), parseFloat(thermalResistivityValue))}
				</Badge>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="temperature">
					Ambient ground or air temperature (&deg;C)
				</Label>
				<Input
					id="temperature"
					placeholder="T"
					value={selectedTemperature}
					onChange={(event) => setSelectedTemperature(event.target.value)}
				/>
			</div>
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>K</i>
					<sub>T</sub>=
					{ambientTemperature(
						method,
						parseFloat(selectedTemperature),
						insulation
					)}
				</Badge>
			</div>
		</div>
	)
}
