/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Gikonko
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyiri: Cell = [
	"Curusi",
	"Cyendajuru",
	"Cyimpuga",
	"Katiro",
	"Kigitega",
	"Kinyana",
	"Murambi",
	"Musambi",
	"Sanzu",
];

const Gasagara: Cell = [
	"Agasenyi",
	"Karukambira",
	"Bibungo",
	"Gasagara",
	"Karehe",
	"Mugusa",
	"Remera",
	"Mubezi",
];

const _Gikonko: Cell = [
	"Gahabwa",
	"Karubondo",
	"Manyinya",
	"Rugarama",
	"Runyinya",
];

const Mbogo: Cell = [
	"Bukorota",
	"Buremera",
	"Kirivuga",
	"Mbogo",
	"Nyakabuye",
	"Nyiramageni",
	"Rwatano",
	"Rwintare",
];

export const Gikonko: Sector = {
	Cyiri,
	Gasagara,
	Gikonko: _Gikonko,
	Mbogo,
};
