import React, { useState, useContext } from "react"

//import
import { MethodOfInstall } from "../calculator/page"
export function thermalRes(method: number, index: number) {
	const correctionFactors = [1.18, 1.1, 1.05, 1, 0.96]
	const methodOfInstall = useContext(MethodOfInstall)

	let unity
	if (method === 5 || method === 6) {
		unity = correctionFactors[index]
		localStorage.setItem("KR", JSON.stringify(unity))

		return unity
	} else {
		unity = 1.0

		localStorage.setItem("KR", JSON.stringify(unity))

		return unity
	}
}
