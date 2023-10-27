export function baseCurrent(S: number, V: number, pf: number) {
	let Ib = S / (pf * V)
	let In = Math.round(Ib)
	const currents = [Ib, In]
	return currents
}
