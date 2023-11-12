import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command"
import { Label } from "@/components/ui/label"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import { useContext, useEffect, useState } from "react"

import { MethodOfInstall, TypeOfInsulation } from "../calculator/page"
import ClearVals from "./clearValuesLocally"
import { cableMaterials, phaseOptions } from "./constants"
//import { copperSize, aluminumSize } from "./chooseColumn"
import { conductorSize } from "../functions/choose"
import PdfGenerator from "./PDFGenerator"
import { voltageDrop } from "./voltageDrop"
export function CableSize() {
	const method = useContext(MethodOfInstall)
	const insulation = useContext(TypeOfInsulation)
	{
		localStorage.setItem("insulation", JSON.stringify(insulation))
	}
	const storedCurrent = JSON.parse(localStorage.getItem("currentIn"))

	const [storedKG, setStoredKG] = useState(() => {
		try {
			const data = localStorage.getItem("KG")
			return data ? JSON.parse(data) : 1.0 // Provide a default value if needed
		} catch (error) {
			console.error("Error parsing KG from localStorage")
			return 1.0 // Provide a default value if there's an error
		}
	})

	useEffect(() => {
		const data = localStorage.getItem("KG")
		try {
			const parsedData = data ? JSON.parse(data) : 1.0
			setStoredKG(parsedData)
		} catch (error) {
			console.error("Error parsing KG from localStorage")
			setStoredKG(1.0)
		}
	}, [])

	const storedKT = JSON.parse(localStorage.getItem("KT"))
	const storedKR = JSON.parse(localStorage.getItem("KR"))
	const currentIt2 = JSON.parse(localStorage.getItem("currentItdb"))
	// !isNaN(storedKG)
	// 	? (storedKG = 1)
	// 	: (storedKG = JSON.parse(localStorage.getItem("KG")))
	const theCurrentIt = storedCurrent / (storedKG * storedKR * storedKT)
	localStorage.setItem("theCurrent", JSON.stringify(theCurrentIt))
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	const [isPopoverOpen, setPopoverOpen] = useState(false)
	const [selectedPhase, setSelectedPhase] = useState("") // Default value set to "1"

	// Find the selected cable material label
	const selectedCableMaterialLabel =
		cableMaterials.find((framework) => framework.value === value)?.label || ""

	// Find the selected number of phases label
	const selectedNumberOfPhasesLabel =
		phaseOptions.find((option) => option.value === selectedPhase)?.label || ""

	// Store the selected cable material label in local storage
	localStorage.setItem("material", JSON.stringify(selectedCableMaterialLabel))

	// Store the selected number of phases label in local storage
	localStorage.setItem("phases", JSON.stringify(selectedNumberOfPhasesLabel))

	const material = value

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
					<sub>t</sub>={theCurrentIt} <span className="w-5"></span>
					<i> [A]</i>
				</Badge>
				{/* <p>
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
				</p> */}
				<p>
					{/* <span className="text-green-500 font-bold">Column</span> = */}
					{/* {chooseColumn(
						insulation,
						parseFloat(selectedPhase),
						parseFloat(method)
					)} */}
				</p>
				<div>
					{/* <span className="text-yellow-500 font-bold">Current Column</span> = */}
					{conductorSize(
						value,
						insulation,
						parseFloat(selectedPhase),
						parseFloat(method)
					)}
				</div>
				<div>{voltageDrop(material)}</div>
				{/* <div className="mt-4 flex flex-col items-end">
					<ClearVals />
					<PdfGenerator />
				</div> */}
			</div>
			<div className="mt-4 flex flex-col items-end">
				<ClearVals />
				<PdfGenerator />
			</div>
		</div>
	)
}
