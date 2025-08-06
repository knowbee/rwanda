/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nkomane
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bitandara: Cell = [
	"Bitandara",
	"Buhanzi",
	"Munanira",
	"Muyange",
	"Rugeyo",
];

const Musaraba: Cell = [
	"Gatorove",
	"Gihunga",
	"Kimbogo",
	"Musaraba",
	"Rusoyo",
	"Rutare",
	"Rwimpiri",
];

const Mutengeri: Cell = [
	"Cyurwufe",
	"Gihwahwa",
	"Kavumu",
	"Kivumu",
	"Mutengeri",
	"Tubuye",
];

const _Nkomane: Cell = ["Banda", "Kagano", "Mugari", "Mutarama", "Ruhinga"];

const Nyarwungo: Cell = [
	"Bisharara",
	"Bucyero",
	"Marambo",
	"Nyaruhombo",
	"Nyarwungo",
	"Rangi",
	"Rutoyi",
];

const Twiya: Cell = ["Gakomeye", "Gishenge", "Karukoma", "Kibuga", "Twiya"];

export const Nkomane: Sector = {
	Bitandara,
	Musaraba,
	Mutengeri,
	Nkomane: _Nkomane,
	Nyarwungo,
	Twiya,
};
