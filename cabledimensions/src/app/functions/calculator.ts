function baseCurrent(S: number, V: number, pf: number) {
	let Ib = S / (pf * V)
	return Ib
}

function normalCurrent(Ib) {
	let In = Math.round(Ib)
}

export { baseCurrent, normalCurrent }
