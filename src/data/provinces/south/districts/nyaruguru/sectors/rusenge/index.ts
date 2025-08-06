/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rusenge
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bunge: Cell = ["Bunge", "Jali", "Nyanzoga", "Toraniro"];

const Cyuna: Cell = ["Cyuna", "Kiramutse", "Remera", "Uwamuhizi"];

const Gikunzi: Cell = ["Jali", "Kibu", "Munanira", "Rwabujagi"];

const Mariba: Cell = ["Gihango", "Kabuye", "Miko", "Rasaniro"];

const Raranzige: Cell = [
	"Akabacura",
	"Gasave",
	"Karimba",
	"Ntanda",
	"Nyamugari",
];

const _Rusenge: Cell = ["Kabacuzi", "Kamusindi", "Kavumu", "Runyinya"];

export const Rusenge: Sector = {
	Bunge,
	Cyuna,
	Gikunzi,
	Mariba,
	Raranzige,
	Rusenge: _Rusenge,
};
