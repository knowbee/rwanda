/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Gacaca
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gakoro: Cell = [
	"Butunda",
	"Cyiri",
	"Gahama",
	"Murora",
	"Murundo",
	"Nkomero",
];

const Gasakuza: Cell = [
	"Gasenyi",
	"Gataba",
	"Karushenyi",
	"Nyamugari",
	"Ruhasa",
	"Rurambo",
];

const Kabirizi: Cell = [
	"Gitovu",
	"Kabushanda",
	"Kanama",
	"Karama",
	"Mata",
	"Mukungwa",
	"Rungu",
];

const Karwasa: Cell = ["Burengo", "Kabukende", "Karambi", "Kavumu", "Sarazi"];

export const Gacaca: Sector = {
	Gakoro,
	Gasakuza,
	Kabirizi,
	Karwasa,
};
