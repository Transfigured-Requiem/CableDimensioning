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

export function ConductorMaterial() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	const cableMaterials = [
		{
			value: "1",
			label: "Copper",
		},
		{
			value: "2",
			label: "Aluminium",
		},
	]

	return (
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
	)
}
