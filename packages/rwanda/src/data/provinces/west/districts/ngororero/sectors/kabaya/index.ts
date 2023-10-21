/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kabaya
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Busunzu: Cell = [
	"Gitaba",
	"Kabarenzi",
	"Kabere",
	"Kabuganza",
	"Kabusizi",
	"Kinyamiyaga",
];

const Gaseke: Cell = [
	"Mbandari",
	"Mitabo",
	"Mizingo",
	"Muturagara",
	"Nyamugari",
	"Nyamweru",
	"Rugari",
];

const _Kabaya: Cell = [
	"Bitare",
	"Kimisagara",
	"Kiyovu",
	"Migongo",
	"Nyanza",
	"Rebero",
	"Rurembo",
	"Rwantozi",
];

const Mwendo: Cell = [
	"Bukonde",
	"Butare",
	"Kabeza",
	"Karambi",
	"Merabuye",
	"Nyabarinda",
	"Rubambiro",
];

const Ngoma: Cell = [
	"Gisebeya",
	"Gitumba",
	"Hanika",
	"Ngoma",
	"Nyamugeyo",
	"Rukorati",
	"Rutoyi",
];

const Nyenyeri: Cell = [
	"Bukonde",
	"Gashyitsi",
	"Kabasare",
	"Kimiramba",
	"Kirwa",
	"Nyamugari",
	"Nyasenge",
];

export const Kabaya: Sector = {
	Busunzu,
	Gaseke,
	Kabaya: _Kabaya,
	Mwendo,
	Ngoma,
	Nyenyeri,
};
