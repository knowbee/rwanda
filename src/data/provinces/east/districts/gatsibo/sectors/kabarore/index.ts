/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kabarore
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Kabarore: Cell = ["Bihinga", "Kabarore I", "Kabaroreii", "Kabingo"];

const Kabeza: Cell = ["Gatoki", "Kabeza", "Mishenyi", "Ryanjeru"];

const Karenge: Cell = ["Karenge", "Mutarama", "Nyarubuye"];

const Marimba: Cell = [
	"Kabare",
	"Kanteri",
	"Marimba",
	"Nyarwanya",
	"Rebero",
	"Rutenderi",
	"Rwimbogo",
];

const Nyabikiri: Cell = ["Kabeza", "Ngarama", "Nyabikiri"];

const Simbwa: Cell = ["Kibondo I", "Kibondo II", "Ruhuha", "Simbwa"];

export const Kabarore: Sector = {
	Kabarore: _Kabarore,
	Kabeza,
	Karenge,
	Marimba,
	Nyabikiri,
	Simbwa,
};
