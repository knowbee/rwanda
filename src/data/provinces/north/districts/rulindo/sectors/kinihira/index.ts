/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kinihira
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Butunzi: Cell = [
	"Akamiyove",
	"Barayi",
	"Bunahi",
	"Gisekuru",
	"Kinihira",
	"Ndorandi",
];

const Karegamazi: Cell = [
	"Buhita",
	"Bwishya",
	"Gatembe",
	"Magezi",
	"Mutoyi",
	"Ntunguru",
];

const Marembo: Cell = ["Buhunde", "Cyogo", "Gatare", "Kigali", "Kiyebe"];

const Rebero: Cell = ["Kabuga", "Karambi", "Kirwa", "Ndusu", "Rugundu", "Taba"];

export const Kinihira: Sector = {
	Butunzi,
	Karegamazi,
	Marembo,
	Rebero,
};
