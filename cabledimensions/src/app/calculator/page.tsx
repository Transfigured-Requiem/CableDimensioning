"use client"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import React, { useState } from "react"
import { BaseCurrent } from "../functions/BaseCurrent"
import { CableArrangement } from "../functions/CableArrangement"
import { CableSize } from "../functions/CableSize"
import { ThermalConstant } from "../functions/ThermalConstant"

export const MethodOfInstall = React.createContext()
export const TypeOfInsulation = React.createContext()
export const MaterialOfConductor = React.createContext()

import {
	installationMethods,
	insulationMaterials,
} from "../functions/constants"
//import { copperSize } from "../functions/chooseColumn"

export default function Calculator() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")
	const [open2, setOpen2] = useState(false)
	const [value2, setValue2] = useState("")
	if (typeof window !== "undefined") {
		localStorage.setItem("mtd", JSON.stringify(value))
	}
	return (
		<div className="flex flex-col items-center justify-center overflow-hidden">
			<div className="m-8 flex justify-center justify-items-center justify-self-center overflow-hidden h-[780px]">
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
									<TypeOfInsulation.Provider value={value2}>
										<MaterialOfConductor.Provider value={""}>
											<Tabs defaultValue="base-current" className="w-auto ">
												<TabsList className="grid w-full grid-cols-4">
													<TabsTrigger value="base-current">
														Base Current
													</TabsTrigger>
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
													<div className="flex flex-col space-y-1.5 mt-3">
														<Label htmlFor="conductor-material">
															Insulation material
														</Label>
														<Popover open={open2} onOpenChange={setOpen2}>
															<PopoverTrigger asChild>
																<Button
																	variant="outline"
																	role="combobox"
																	aria-expanded={open2}
																	className="w-auto justify-between"
																>
																	{value2
																		? insulationMaterials.find(
																				(framework) =>
																					framework.value === value2
																		  )?.label
																		: "Select insulation material..."}

																	<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
																</Button>
															</PopoverTrigger>
															<PopoverContent className="w-auto p-0">
																<Command>
																	<CommandInput placeholder="Search insulation material..." />
																	<CommandEmpty>
																		<span className="text-red-500 font-bold">
																			Insulation material not found.
																		</span>
																	</CommandEmpty>
																	<CommandGroup>
																		{insulationMaterials.map((framework) => (
																			<CommandItem
																				key={framework.value}
																				value={framework.value}
																				onSelect={(currentValue) => {
																					setValue2(
																						currentValue === value2
																							? ""
																							: currentValue
																					)
																					setOpen2(false)
																				}}
																			>
																				<Check
																					className={cn(
																						"mr-2 h-4 w-4",
																						value2 === framework.value
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

													<div className="flex flex-col space-y-1.5 mt-3">
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
																						currentValue === value
																							? ""
																							: currentValue
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
												</TabsContent>
											</Tabs>
										</MaterialOfConductor.Provider>
									</TypeOfInsulation.Provider>
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
			<div className="fixed bottom-0 right-0  p-4">
				<p className="text-blue-500">
					Made by: <br />
					<strong>
						Abderrahmane Taha Khenchouche <br /> Abdelmalek Mahmoud
					</strong>
				</p>
			</div>
		</div>
	)
}
