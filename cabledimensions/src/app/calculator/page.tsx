import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Calculator() {
	return (
		<div className="m-8 flex justify-center justify-items-center justify-self-center">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Set your cable parameters</CardTitle>
					<CardDescription>
						Based on the <span className="text-blue-500">IEC 60364-5-52</span>{" "}
						standard.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="conductor-material">Conductor material</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="al">Aluminum</SelectItem>
										<SelectItem value="cu">Copper</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="number-of-phases">Number of phases</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="three-phases">3 Phases</SelectItem>
										<SelectItem value="single-phase">1 Phase</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="voltage">Voltage</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="four-hundred-fifteen">415 V</SelectItem>
										<SelectItem value="two-hundred-thirty">230 V</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="rated-power">Rated power (Watts)</Label>
								<Input id="name" placeholder="Name of your project" />
							</div>

							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="installation-method">Installation Method</Label>
								<Select>
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="four-hundred-fifteen">415 V</SelectItem>
										<SelectItem value="two-hundred-thirty">230 V</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Calculate</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
