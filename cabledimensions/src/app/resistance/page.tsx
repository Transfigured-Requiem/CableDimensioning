import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

import { ResistanceMotor } from "../functions/resistanceMotor"

export default function page() {
	return (
		<div className="flex flex-col items-center justify-center overflow-hidden">
			<div className="m-8 flex justify-center justify-items-center justify-self-center overflow-hidden h-[880px]">
				<Card className="w-[920px]  sm:h-4/5">
					<CardHeader>
						<CardTitle>Set your motor parameters</CardTitle>
						<CardDescription>
							Input motor parameters to calculate required{" "}
							<span className="text-blue-500">
								&quot;external resistance&quot;
							</span>{" "}
							for the wound rotor induction motor starter.
						</CardDescription>
					</CardHeader>
					<CardContent className="">
						<form>
							<div className="grid w-full items-center gap-4">
								<Tabs defaultValue="base-current" className="w-auto ">
									{/* <TabsList className="grid w-full grid-cols-4">
										<TabsTrigger value="base-current">
											Wound Starter Induction Motor External Resistance
										</TabsTrigger>
									</TabsList> */}
									<TabsContent value="base-current">
										<ResistanceMotor />
									</TabsContent>
								</Tabs>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
