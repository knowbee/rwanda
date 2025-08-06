/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Munyaga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kaduha: Cell = [
	"Gishike",
	"Kababero",
	"Kabare",
	"Kamamana",
	"Kangabo",
	"Kigabiro",
	"Rwakigara",
	"Rwimbogo",
];

const Nkungu: Cell = [
	"Kabuye",
	"Kiryango",
	"Mataba",
	"Nyagakombe",
	"Rudashya",
	"Rushangara",
];

const Rweru: Cell = ["Birayi", "Gatare", "Kabingo", "Kanyegera", "Mubuga"];

const Zinga: Cell = ["Cyinganzwa", "Kabazeyi", "Karambo", "Rwisange"];

export const Munyaga: Sector = {
	Kaduha,
	Nkungu,
	Rweru,
	Zinga,
};
