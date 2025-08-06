/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Muhoza
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyabararika: Cell = [
	"Buhuye",
	"Bwuzuri",
	"Gasanze",
	"Gatare",
	"Gatorwa",
	"Kabogobogo",
	"Yorodani",
];

const Kigombe: Cell = [
	"Kavumu",
	"Kiryi",
	"Mugara",
	"Nduruma",
	"Nyamagumba",
	"Nyamuremure",
	"Rukereza",
];

const Mpenge: Cell = ["Gikwege", "Giramahoro", "Mpenge", "Rukoro", "Rusagara"];

const Ruhengeri: Cell = [
	"Buhoro",
	"Burera",
	"Bushozi",
	"Byimana",
	"Kabaya",
	"Muhe",
	"Susa",
];

export const Muhoza: Sector = {
	Cyabararika,
	Kigombe,
	Mpenge,
	Ruhengeri,
};
