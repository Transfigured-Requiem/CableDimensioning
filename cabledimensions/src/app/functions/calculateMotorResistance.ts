export function calculateRes(
	V: number,
	P: number,
	poles: number,
	k: number, // Include k as a parameter
	n: number,
	eff: number,
	pf: number,
	f: number,
	speed: number
) {
	const startCurrent = (n * P) / (eff * V * pf * Math.sqrt(3))

	const rotorResistance =
		Math.pow(3 * Math.pow(V, 2) * eff * pf, 2) /
		(Math.PI *
			(poles / 120) *
			Math.abs((120 * f) / poles - speed) *
			k *
			n *
			Math.pow(P, 2))

	const startTorque = (30 * (V * V)) / (2 * Math.PI * f * rotorResistance)

	if (typeof window !== "undefined") {
		localStorage.setItem("startCurrent", JSON.stringify(startCurrent))
		localStorage.setItem("rotorResistance", JSON.stringify(rotorResistance))
		localStorage.setItem("startTorque", JSON.stringify(startTorque))
	}
}
