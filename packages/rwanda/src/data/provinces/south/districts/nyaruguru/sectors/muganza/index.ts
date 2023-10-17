/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Muganza
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Muganza: Cell = [
	"Gashinge",
	"Mubazi",
	"Muganza",
	"Ngara",
	"Nyabirondo",
	"Rambyanyana",
];

const Rukore: Cell = [
	"Kanazi",
	"Karanka",
	"Nyagisenyi",
	"Remera",
	"Rwishywa",
	"Uwinzira",
];

const Samiyonga: Cell = [
	"Bigugu",
	"Cyurukore",
	"Gituntu",
	"Kigwene",
	"Mazimeru",
	"Murambi",
	"Tangabo",
];

const Uwacyiza: Cell = [
	"Bitaba",
	"Migendo",
	"Mukongoro",
	"Murambya",
	"Mutovu",
	"Sekera",
];

export const Muganza: Sector = {
	Muganza: _Muganza,
	Rukore,
	Samiyonga,
	Uwacyiza,
};
