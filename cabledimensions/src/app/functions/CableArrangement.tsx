import { cn } from "@/lib/utils"
import React, { useState } from "react"
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

//import { arr } from "./group"
import { groupingConstant } from "./groupingConstanCalc"
export function CableArrangement() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState(0)

	const [open1, setOpen1] = useState(false)
	const [value1, setValue1] = useState()
	const cableArrangements = [
		{
			value: "0",
			label: "[A-F] Bunched in air, on a surface, embedded or enclosed.",
		},
		{
			value: "1",
			label: "[C] Single layer on wall, floor or unperforated tray.",
		},
		{
			value: "2",
			label: "[C] Single layer fixed directly under a wooden ceiling.",
		},
		{
			value: "3",
			label:
				"[E and F] Single layer on a perforated horizontal or vertical tray.",
		},
		{
			value: "4",
			label: "[E and F] Single layer on ladder support or cleats etc.",
		},
	]

	const validNumbers = [
		{ value: "0", label: "1 circuit or multi-core cable" },
		{ value: "1", label: "2 circuits or multi-core cables" },
		{ value: "2", label: "3 circuits or multi-core cables" },
		{ value: "3", label: "4 circuits or multi-core cables" },
		{ value: "4", label: "5 circuits or multi-core cables" },
		{ value: "5", label: "6 circuits or multi-core cables" },
		{ value: "6", label: "7 circuits or multi-core cables" },
		{ value: "7", label: "8 circuits or multi-core cables" },
		{ value: "8", label: "9 circuits or multi-core cables" },
		{ value: "9", label: "12 circuits or multi-core cables" },
		{ value: "10", label: "16 circuits or multi-core cables" },
		{ value: "11", label: "20 circuits or multi-core cables" },
	]
	// const [numberOfCircuits, setNumberOfCircuits] = useState("1")
	// //const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 16, 20]
	// const colIndex = validNumbers.indexOf(parseFloat(numberOfCircuits))
	// const errorHandling = () => {
	// 	if (numberOfCircuits === "") {
	// 		return "..."
	// 	} else if (!validNumbers.includes(parseFloat(numberOfCircuits))) {
	// 		return "Invalid number of circuits or multi-core cables"
	// 	} else {
	// 		return numberOfCircuits
	// 	}
	// }
	let arr = []

	return (
		<div className="flex flex-col space-y-1.5">
			<Label htmlFor="conductor-material">Cable Arrangement</Label>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-auto justify-between"
					>
						{value
							? cableArrangements.find((framework) => framework.value === value)
									?.label
							: "Select cable arrangement..."}

						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Command>
						<CommandInput placeholder="Search cable arrangement..." />
						<CommandEmpty>
							<span className="text-red-500 font-bold">
								Cable arrangement not found.
							</span>
						</CommandEmpty>
						<CommandGroup>
							{cableArrangements.map((framework) => (
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
			<p className="text-blue-500">{(arr[0] = parseFloat(value))}</p>
			<Label htmlFor="conductor-material1">
				Number of circuits or multi-core cables
			</Label>
			<Popover open={open1} onOpenChange={setOpen1}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open1}
						className="w-auto justify-between"
					>
						{value1
							? validNumbers.find((number) => number.value === value1)?.label
							: "Select number of circuits or multi-core cables..."}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Command>
						<CommandInput placeholder="Search number of circuits or multi-core cables..." />
						<CommandEmpty>
							<span className="text-red-500 font-bold">
								Number of circuits or multi-core cables not found.
							</span>
						</CommandEmpty>
						<CommandGroup>
							{validNumbers.map((number) => (
								<CommandItem
									key={number.value}
									value={number.value}
									onSelect={(currentValue) => {
										setValue1(currentValue === value1 ? "" : currentValue)
										setOpen1(false)
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value1 === number.value ? "opacity-100" : "opacity-0"
										)}
									/>
									{number.label}
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>

			<p className="text-blue-500">{(arr[1] = parseFloat(value1))}</p>

			{/* <div className="flex flex-col space-y-1.5">
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
			<p className="text-blue-500">{(arr[1] = parseFloat(numberOfCircuits))}</p>
			<Badge variant="default" className="">
				<i>K</i>
				<sub>G</sub> = "this is just number of ckts now" -> {errorHandling()} """"""""   
                {groupingConstant(arr[0],arr[1])}
                {/* {tempIndex} */}
			{/* </Badge> */}
			<div className="">
				<Badge variant="default" className="w-[50%]">
					<i>K</i>
					<sub>G</sub>={groupingConstant(arr[0], arr[1])}
				</Badge>
			</div>
		</div>
	)
}

//export { tempIndex }
