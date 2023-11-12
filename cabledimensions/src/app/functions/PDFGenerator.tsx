import React from "react"
import { Button } from "@/components/ui/button"
import { saveAs } from "file-saver"

const PdfGenerator = () => {
	const downloadTextFile = () => {
		// Get values from local storage
		const V = localStorage.getItem("V") || "N/A"
		const W = localStorage.getItem("W") || "N/A"
		const pf = localStorage.getItem("pf") || "N/A"
		const T = localStorage.getItem("T") || "N/A"
		const KT = localStorage.getItem("KT") || "N/A"
		const KR = localStorage.getItem("KR") || "N/A"
		const KG = localStorage.getItem("KG") || "N/A"
		const Ib = localStorage.getItem("Ib") || "N/A"
		const In = localStorage.getItem("In") || "N/A"

		const Arr = localStorage.getItem("arrangement") || "N/A"
		const Num = localStorage.getItem("numberCkt") || "N/A"
		const ins = localStorage.getItem("insulation") || "N/A"

		const mat = localStorage.getItem("material") || "N/A"
		const phs = localStorage.getItem("phases") || "N/A"

		const Iz = localStorage.getItem("Iz") || "N/A"
		const Size = localStorage.getItem("Size") || "N/A"
		const Dv = localStorage.getItem("Dv") || "N/A"

		// Create a string with the variable values
		const fileContent = `
| Parameter                               | Value    | Unit |
| --------------------------------------- | -------- | ---- |
| Cable Arrangement                       | ${Arr}   |      |
| Number of circuits or multi-core cables | ${Num}   |      |
| Insulation type                         | ${ins}   |      |
| Cable material                          | ${mat}   |      |
| Number of phases                        | ${phs}   |      |
| Voltage (V)                             | ${V}     | V    |
| Power (W)                               | ${W}     | W    |
| Power Factor (pf)                       | ${pf}    |      |
| Fuse Rating (Ib)                        | ${Ib}    | A    |
| Nominal Current (In)                    | ${In}    | A    |
| Thermal Constant (KT)                   | ${KT}    |      |
| Resistivity Constant (KR)               | ${KR}    |      |
| Grouping Constant (KG)                  | ${KG}    |      |
| Ambient Temperature (T)                 | ${T}     | °C   |
| Cable Rating (Iz)                       | ${Iz}    |      |
| Size                                    | ${Size}  | mm²  |
| Voltage Drop                            | ${Dv}    | %    |
`

		// Example of how to use the fileContent string
		console.log(fileContent)

		// Create a Blob with the file content
		const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" })

		// Trigger the download
		saveAs(blob, "data.md")
	}

	return (
		<div className="grid justify-items-end  mt-4">
			<Button
				variant="outline"
				className="text-md font-semibold"
				onClick={downloadTextFile}
			>
				Download Data
			</Button>
		</div>
	)
}

export default PdfGenerator
