"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BaseCurrent } from "../functions/BaseCurrent"
import { CableArrangement } from "../functions/CableArrangement"
import { ThermalConstant } from "../functions/ThermalConstant"
import { CableSize } from "../functions/CableSize"
import { cn } from "@/lib/utils"
import React, { useContext, useState } from "react"
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

export const MethodOfInstall = React.createContext()
export default function Calculator() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	const installationMethods = [
		{
			value: "0",
			label:
				"[A1] Insulated conductors in conduit in a thermally insulated wall.",
		},
		{
			value: "1",
			label: "[A2] Multi-core cable in conduit in a thermally insulated wall.",
		},
		{
			value: "2",
			label:
				"[B1] Insulated conductors in conduit on a wooden or masonry wall.",
		},
		{
			value: "3",
			label: "[B2] Multi-core cable in conduit on a wooden or masonry wall.",
		},
		{
			value: "4",
			label: "[C] Single-core or multi-core cable on a wooden or masonry wall.",
		},
		{
			value: "5",
			label: "[D1] Multi-core cable in ducts in the ground.",
		},
		{
			value: "6",
			label:
				"[D2] Multi-core cables designed to be buried directly in the ground.",
		},
		{
			value: "7",
			label: "[E] Multi-core cable in free air.",
		},
		{
			value: "8",
			label: "[F] Single-core cables, touching in free air.",
		},
		{
			value: "9",
			label: "[G] Single-core cables, spaced in free air.",
		},
	]

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
							<MethodOfInstall.Provider value={value}>
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
										<div className="flex flex-col space-y-1.5">
											<Label htmlFor="conductor-material">
												Installation method
											</Label>
											<Popover open={open} onOpenChange={setOpen}>
												<PopoverTrigger asChild>
													<Button
														variant="outline"
														role="combobox"
														aria-expanded={open}
														className="w-full justify-between"
													>
														{value
															? installationMethods.find(
																	(framework) => framework.value === value
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
																		setValue(
																			currentValue === value ? "" : currentValue
																		)
																		setOpen(false)
																	}}
																>
																	<Check
																		className={cn(
																			"mr-2 h-4 w-4",
																			value === framework.value
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
										</div>
										<ThermalConstant />
									</TabsContent>
									<TabsContent value="cable-parameters">
										<CableSize />
										<p>
											<span className="text-blue-500 font-bold">
												Installation method
											</span>{" "}
											= {value}
										</p>
									</TabsContent>
								</Tabs>
							</MethodOfInstall.Provider>
						</div>
					</form>
				</CardContent>
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
