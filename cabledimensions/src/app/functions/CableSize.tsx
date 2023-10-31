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
import { Badge } from "@/components/ui/badge"

import { MethodOfInstall } from "../calculator/page"
import { phaseOptions } from "./constants"
import { cableMaterials } from "./constants"
import { TypeOfInsulation } from "../calculator/page"
import ClearVals from "./clearValuesLocally"
import { chooseColumn, aluminumSize } from "./chooseColumn"
import { copperSize } from "../functions/choose"
//import { copperSize, aluminumSize } from "./chooseColumn"
import { currentIt } from "./calculateIt"
import { copperArray } from "./copperTable"
import { conductorSize } from "../functions/choose"
export function CableSize() {
	const method = useContext(MethodOfInstall)
	const insulation = useContext(TypeOfInsulation)
	const storedCurrent = JSON.parse(localStorage.getItem("currentIn"))
	const storedKG = JSON.parse(localStorage.getItem("KG"))
	const storedKT = JSON.parse(localStorage.getItem("KT"))
	const storedKR = JSON.parse(localStorage.getItem("KR"))
	const currentIt2 = JSON.parse(localStorage.getItem("currentItdb"))

	const theCurrentIt = storedCurrent / (storedKG * storedKR * storedKT)
	localStorage.setItem("theCurrent", JSON.stringify(theCurrentIt))
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	const [isPopoverOpen, setPopoverOpen] = useState(false)
	const [selectedPhase, setSelectedPhase] = useState("") // Default value set to "1"

	return (
		<div className="flex flex-col space-y-1.5">
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="conductor-material">Cable material</Label>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="w-auto justify-between"
						>
							{value
								? cableMaterials.find((framework) => framework.value === value)
										?.label
								: "Select cable material..."}

							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Command>
							<CommandInput placeholder="Search cable material..." />
							<CommandEmpty>
								<span className="text-red-500 font-bold">
									Cable material not found.
								</span>
							</CommandEmpty>
							<CommandGroup>
								{cableMaterials.map((framework) => (
									<CommandItem
										key={framework.value}
										value={framework.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue)
											setOpen(false)
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												value === framework.value ? "opacity-100" : "opacity-0"
											)}
										/>
										{framework.label}
									</CommandItem>
								))}
							</CommandGroup>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
			<div className="flex flex-col space-y-1.5">
				<Label htmlFor="number-of-phases">Number of phases</Label>
				<Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={isPopoverOpen}
							className="w-auto justify-between"
						>
							{selectedPhase
								? phaseOptions.find((option) => option.value === selectedPhase)
										?.label
								: "Select number of phases..."}

							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Command>
							<CommandInput placeholder="Search number of phases..." />
							<CommandEmpty>
								<span className="text-red-500 font-bold">
									Number of phases not found.
								</span>
							</CommandEmpty>
							<CommandGroup>
								{phaseOptions.map((option) => (
									<CommandItem
										key={option.value}
										value={option.value}
										onSelect={(currentValue) => {
											setSelectedPhase(
												currentValue === selectedPhase ? "" : currentValue
											)
											setPopoverOpen(false)
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												selectedPhase === option.value
													? "opacity-100"
													: "opacity-0"
											)}
										/>
										{option.label}
									</CommandItem>
								))}
							</CommandGroup>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>I</i>
					<sub>t</sub>={"waiting"}
				</Badge>
				<p>
					<span className="text-blue-500 font-bold">Installation method</span> ={" "}
					{method}
				</p>
				<p>
					<span className="text-blue-500 font-bold">Conductor</span> = {value}
				</p>
				<p>
					<span className="text-blue-500 font-bold">Phase</span> ={" "}
					{selectedPhase}
				</p>
				<p>
					<span className="text-blue-500 font-bold">Insulation</span> ={" "}
					{insulation}
				</p>
				<p>
					<span className="text-red-500 font-bold">In</span> ={storedCurrent}
				</p>
				<p>
					<span className="text-zinc-500 font-bold">KG</span> ={storedKG}
				</p>
				<p>
					<span className="text-zinc-500 font-bold">KT</span> ={storedKT}
				</p>
				<p>
					<span className="text-zinc-500 font-bold">KR</span> ={storedKR}
				</p>
				<p>
					<span className="text-purple-500 font-bold">It</span> ={theCurrentIt}
				</p>
				<p>
					<span className="text-green-500 font-bold">Column</span> =
					{chooseColumn(
						insulation,
						parseFloat(selectedPhase),
						parseFloat(method)
					)}
				</p>
				<p>
					<span className="text-yellow-500 font-bold">Current Column</span> =
					{conductorSize(
						value,
						insulation,
						parseFloat(selectedPhase),
						parseFloat(method)
					)}
				</p>
				<ClearVals />
			</div>
		</div>
	)
}
