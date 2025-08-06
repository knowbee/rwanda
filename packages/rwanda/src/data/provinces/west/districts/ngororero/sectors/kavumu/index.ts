/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kavumu
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Birembo: Cell = [
	"Buhuma",
	"Gashaki",
	"Kantobo",
	"Nyabitsina",
	"Rwanamiza",
];

const Gitwa: Cell = ["Biraro", "Karambi", "Kaziba", "Nyamugari", "Nyarukara"];

const Murinzi: Cell = [
	"Cyasenge",
	"Gasibya",
	"Ntebeyinuma",
	"Nyaramba",
	"Ruhurura",
];

const Nyamugeyo: Cell = [
	"Gatovu",
	"Kabere",
	"Karambo",
	"Murimba",
	"Nyabubanda",
];

const Rugeshi: Cell = ["Cyuzi", "Gasumo", "Kabeza", "Karambi", "Mwiyanike"];

const Tetero: Cell = ["Bereshi", "Gatsibo", "Kasumo", "Mizingo", "Ruherahere"];

export const Kavumu: Sector = {
	Birembo,
	Gitwa,
	Murinzi,
	Nyamugeyo,
	Rugeshi,
	Tetero,
};
