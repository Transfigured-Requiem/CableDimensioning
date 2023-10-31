import { useState } from "react"

// Retrieving and using the data from localStorage
const storedCurrent = localStorage.getItem("currentIn")
const s = localStorage.getItem("KG") // Retrieve the value as a string
const storedKT = localStorage.getItem("KT")
const storedKR = localStorage.getItem("KR")

//const [v, setV] = useState()

if (storedCurrent && s && storedKT && storedKR) {
	const In = parseFloat(storedCurrent)
	const KG = parseFloat(s)
	const KT = parseFloat(storedKT)
	const KR = parseFloat(storedKR)

	const currentIt = In / (KG * KT * KR)
	localStorage.setItem("currentIt", JSON.stringify(currentIt))
}
//const storedIt = JSON.parse(localStorage.getItem("Kt"))
//export { currentIt }
