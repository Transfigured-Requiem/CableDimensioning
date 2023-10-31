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
		value: "1",
		label: "Copper",
	},
	{
		value: "2",
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
}
