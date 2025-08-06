/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Coko
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kiruku: Cell = [
	"Buhuri",
	"Bukamba",
	"Bushagashi",
	"Gatare",
	"Mucumazo",
	"Ntarabana",
	"Nyamasuka",
	"Rubuguma",
];

const Mbirima: Cell = [
	"Akanduga",
	"Burengo",
	"Bushyama",
	"Matovu",
	"Mbogo",
	"Murambi",
	"Rwahi",
	"Shyunga",
];

const Nyange: Cell = [
	"Buhara",
	"Gaseke",
	"Karambo",
	"Karoli",
	"Musasa",
	"Ntobwe",
	"Vumandi",
];

const Nyanza: Cell = ["Baramba", "Gikamba", "Gitaba", "Kavumu", "Tumba"];

export const Coko: Sector = {
	Kiruku,
	Mbirima,
	Nyange,
	Nyanza,
};
