/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Gatare
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bakopfu: Cell = ["Karambo", "Karumbi", "Muhingo", "Twiya"];

const _Gatare: Cell = ["Gashasha", "Kiyovu", "Murembo", "Rwamakara", "Uwisuri"];

const Mukongoro: Cell = [
	"Gikungu",
	"Kagano",
	"Kageyo",
	"Nyakabuye",
	"Rukereko",
];

const Ruganda: Cell = [
	"Gasharu",
	"Gituntu",
	"Kamamara",
	"Masangano",
	"Runaba",
	"Rwangambibi",
];

const Shyeru: Cell = ["Baziro", "Bimba", "Kagusa", "Ruhanga", "Rushyarara"];

export const Gatare: Sector = {
	Bakopfu,
	Gatare: _Gatare,
	Mukongoro,
	Ruganda,
	Shyeru,
};
