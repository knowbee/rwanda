/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Niboye
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gatare: Cell = [
	"Byimana",
	"Gatare",
	"Imena",
	"Kamahoro",
	"Kigarama",
	"Rugunga",
	"Rurembo",
	"Taba",
];

const _Niboye: Cell = [
	"Buhoro",
	"Gaseke",
	"Gateke",
	"Gorora",
	"Kigabiro",
	"Kinunga",
	"Kiruhura",
	"Munini",
	"Murehe",
	"Mwijabo",
	"Mwijuto",
	"Nyarubande",
	"Rwezamenyo",
	"Sovu",
	"Taba",
];

const Nyakabanda: Cell = [
	"Amahoro",
	"Amarebe",
	"Amarembo",
	"Bigabiro",
	"Bukinanyana",
	"Bumanzi",
	"Bwiza",
	"Gatsibo",
	"Gikundiro",
	"Indakemwa",
	"Indamutsa",
	"Indatwa",
	"Inyarurembo",
	"Isangano",
	"Karama",
	"Kinyana",
	"Rugwiro",
	"Umurava",
];

export const Niboye: Sector = {
	Gatare,
	Niboye: _Niboye,
	Nyakabanda,
};
