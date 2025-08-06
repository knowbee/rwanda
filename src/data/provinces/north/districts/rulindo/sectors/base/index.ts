/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Base
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyohoha: Cell = [
	"Bukangano",
	"Buramba",
	"Gihemba",
	"Gitwa",
	"Kabingo",
	"Kabuga",
	"Musenyi",
	"Mushongi",
	"Nyangoyi",
	"Rubanda",
];

const Gitare: Cell = [
	"Bushyiga",
	"Gatete",
	"Gihora",
	"Gisiza",
	"Kirwa",
	"Mugenda I",
	"Mugenda II",
	"Nyamugali",
	"Rugaragara",
	"Rugerero",
];

const Rwamahwa: Cell = [
	"Base",
	"Cyondo",
	"Gitovu",
	"Kabahama",
	"Kabeza",
	"Karambi",
	"Kiruli",
	"Mutima",
];

export const Base: Sector = {
	Cyohoha,
	Gitare,
	Rwamahwa,
};
