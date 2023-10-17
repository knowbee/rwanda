/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nyarusange
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Mbiriri: Cell = [
	"Gasave",
	"Gasharu",
	"Gisasa",
	"Karehe",
	"Kintobo",
	"Ntenderi",
	"Nyarushora",
];

const Musongati: Cell = [
	"Cyiciro",
	"Jabiro",
	"Kagarama",
	"Kamanga",
	"Murambi",
	"Ngororano",
];

const Ngaru: Cell = ["Gitega", "Kibirizi", "Remera", "Rukamiro"];

const Rusovu: Cell = ["Mututu", "Rukurazo", "Rwambariro", "Vugo"];

export const Nyarusange: Sector = {
	Mbiriri,
	Musongati,
	Ngaru,
	Rusovu,
};
