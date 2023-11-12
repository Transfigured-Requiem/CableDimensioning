const insulationMaterials = [
	{
		value: "pvc",
		label: "PVC",
	},
	{
		value: "xlpe",
		label: "XLPE or EPR",
	},
]

const lambdaValues = {
	"0": 0.08, // Multi/single-core cables in trefoil arrangement
	"1": 0.08, // Multi-core cable in conduit in a thermally insulated wall
	"2": 0.09, // Single-core cables touching in flat layers
	"3": 0.09, // Multi-core cable in conduit on a wooden or masonry wall
	"4": 0.13, // Single-core or multi-core cable on a wooden or masonry wall
	"5": 0.13, // Multi-core cable in ducts in the ground
	"6": 0.13, // Multi-core cables designed to be buried directly in the ground
	"7": 0.13, // Multi-core cable in free air
	"8": 0.09, // Single-core cables, touching in free air
	"9": 0.13, // Single-core cables, spaced in free air
}

const installationMethods = [
	{
		value: "0",
		label:
			"[A1] Insulated conductors in conduit in a thermally insulated wall.",
	},
	{
		value: "1",
		label: "[A2] Multi-core cable in conduit in a thermally insulated wall.",
	},
	{
		value: "2",
		label: "[B1] Insulated conductors in conduit on a wooden or masonry wall.",
	},
	{
		value: "3",
		label: "[B2] Multi-core cable in conduit on a wooden or masonry wall.",
	},
	{
		value: "4",
		label: "[C] Single-core or multi-core cable on a wooden or masonry wall.",
	},
	{
		value: "5",
		label: "[D1] Multi-core cable in ducts in the ground.",
	},
	{
		value: "6",
		label:
			"[D2] Multi-core cables designed to be buried directly in the ground.",
	},
	{
		value: "7",
		label: "[E] Multi-core cable in free air.",
	},
	{
		value: "8",
		label: "[F] Single-core cables, touching in free air.",
	},
	{
		value: "9",
		label: "[G] Single-core cables, spaced in free air.",
	},
]

const phaseOptions = [
	{
		value: "1",
		label: "1 Phase",
	},
	{
		value: "2",
		label: "2 Phases",
	},
	{
		value: "3",
		label: "3 Phases",
	},
]

const cableMaterials = [
	{
		value: "cu",
		label: "Copper",
	},
	{
		value: "al",
		label: "Aluminium",
	},
]

const thermalResistivity = [
	{
		value: "0",
		label: "1 [K·m/W]",
	},
	{
		value: "1",
		label: "1.5 [K·m/W]",
	},
	{
		value: "2",
		label: "2 [K·m/W]",
	},
	{
		value: "3",
		label: "2.5 [K·m/W]",
	},
	{
		value: "4",
		label: "3 [K·m/W]",
	},
]

export {
	insulationMaterials,
	installationMethods,
	phaseOptions,
	cableMaterials,
	thermalResistivity,
	lambdaValues,
}
