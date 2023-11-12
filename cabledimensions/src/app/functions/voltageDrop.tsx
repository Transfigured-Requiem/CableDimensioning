import { MethodOfInstall, TypeOfInsulation } from "../calculator/page"
import { useContext, useEffect, useState } from "react"
//import { lambdaValues } from "./constants"
import { LampDesk } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function voltageDrop(mat: string) {
	//const method = useContext(MethodOfInstall)

	const pf = parseFloat(localStorage.getItem("pf"))
	const qf = Math.sin(Math.acos(pf))
	const Ib = parseFloat(localStorage.getItem("Ib")) || 1
	const phs = parseFloat(localStorage.getItem("phases"))
	const Size = parseFloat(localStorage.getItem("Size"))
	const V = parseFloat(localStorage.getItem("V")) || 1
	//const mat = localStorage.getItem("material") || "N/A"
	const len = parseFloat(localStorage.getItem("length")) || 1

	const mtd = localStorage.getItem("mtd")
	// const lambdaValues = {
	// 	"0": 0.08, // Multi/single-core cables in trefoil arrangement
	// 	"1": 0.08, // Multi-core cable in conduit in a thermally insulated wall
	// 	"2": 0.09, // Single-core cables touching in flat layers
	// 	"3": 0.09, // Multi-core cable in conduit on a wooden or masonry wall
	// 	"4": 0.13, // Single-core or multi-core cable on a wooden or masonry wall
	// 	"5": 0.13, // Multi-core cable in ducts in the ground
	// 	"6": 0.13, // Multi-core cables designed to be buried directly in the ground
	// 	"7": 0.13, // Multi-core cable in free air
	// 	"8": 0.09, // Single-core cables, touching in free air
	// 	"9": 0.13, // Single-core cables, spaced in free air
	// }
	//const lambda: number = lambdaValues[chosenMethod]
	// Declare b and rho outside the if blocks
	let b, rho, lambda
	if (mtd === "0" || mtd === "1") {
		lambda = 0.08
	} else if (mtd === "2" || mtd === "3" || mtd === "8") {
		lambda = 0.09
	} else {
		lambda = 0.13
	}
	if (phs === 3) {
		b = 1
	} else {
		b = 2
	}

	if (mat === "cu") {
		rho = 0.023
	} else {
		rho = 0.037
	}

	const v = b * len * Ib * ((rho / Size) * pf + lambda * qf)
	//const v = b * len * Ib * (rho / Size) * 100
	const Dv = v / V || "\t ..."
	localStorage.setItem("Dv", JSON.stringify(Dv))
	let out
	if (Dv <= 3) {
		out = "secondary"
	} else {
		out = "destructive"
	}

	return (
		<div className="">
			{/* <p className="bg-red-500">{b}</p>
			<p className="bg-yellow-500">{len}</p>
			<p className="bg-blue-500">{Ib}</p>
			<p className="bg-green-500">{rho}</p>
			<p className="bg-purple-500">{Size}</p>
			<p className="bg-orange-500">{pf}</p>
			<p className="bg-pink-500">{lambda}</p>
			<p className="bg-cyan-500">{qf}</p> */}

			{/* <p className="bg-red-500">{typeof b}</p>
			<p className="bg-yellow-500">{typeof len}</p>
			<p className="bg-blue-500">{typeof Ib}</p>
			<p className="bg-green-500">{typeof rho}</p>
			<p className="bg-purple-500">{typeof Size}</p>
			<p className="bg-orange-500">{typeof pf}</p>
			<p className="bg-pink-500">{typeof lambda}</p>
			<p className="bg-cyan-500">{typeof qf}</p>
			<p className="bg-cyan-500">{typeof V}</p> */}
			<Badge variant={`${out}`} className="w-[50%]">
				<i>Voltage Drop </i>={Dv}
				<span className="w-5"></span>
				<i> [%]</i>
			</Badge>
		</div>
	)
	//[Dv, "====", Size, "====", rho, "====", pf, "====", lambda]
}
