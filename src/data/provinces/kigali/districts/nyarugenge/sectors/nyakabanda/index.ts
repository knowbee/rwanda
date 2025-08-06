/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nyakabanda
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const MunaniraI: Cell = [
	"Kabusunzu",
	"Munanira",
	"Ntaraga",
	"Nyagasozi",
	"Rurembo",
];

const MunaniraII: Cell = [
	"Gasiza",
	"Kamwiza",
	"Kanyange",
	"Karudandi",
	"Kigabiro",
	"Kokobe",
	"Mucyuranyana",
	"Nkundumurimbo",
];

const NyakabandaI: Cell = [
	"Akinkware",
	"Gapfupfu",
	"Gasiza",
	"Kariyeri",
	"Kokobe",
	"Munini",
	"Nyakabanda",
	"Rwagitanga",
];

const NyakabandaII: Cell = [
	"Ibuhoro",
	"Kabeza",
	"Kanyiranganji",
	"Karujongi",
	"Kigarama",
	"Kirwa",
];

export const Nyakabanda: Sector = {
	"Munanira I": MunaniraI,
	"Munanira II": MunaniraII,
	"Nyakabanda I": NyakabandaI,
	"Nyakabanda II": NyakabandaII,
};
