"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { BaseCurrent } from "../functions/BaseCurrent"
import { CableArrangement } from "../functions/CableArrangement"
import { ThermalConstant } from "../functions/ThermalConstant"

export default function Calculator() {
	const [selectedTemperature, setSelectedTemperature] = useState("")

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
									<ThermalConstant />
								</TabsContent>
								<TabsContent value="cable-parameters"></TabsContent>
							</Tabs>
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
