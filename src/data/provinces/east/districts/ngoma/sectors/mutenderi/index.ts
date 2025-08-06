/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mutenderi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Karwema: Cell = ["Cyanamo", "Gitesanyi", "Meraneza", "Musenyi"];

const Kibare: Cell = ["Kabombo", "Mutukura", "Ndarage", "Rwakaza", "Rwankamba"];

const _Mutenderi: Cell = [
	"Agatonde",
	"Akarimbu",
	"Cyanyunga",
	"Kibaya",
	"Tonero",
];

const Muzingira: Cell = [
	"Gatonde",
	"Rusave",
	"Rwakandari",
	"Shyagashya",
	"Umuyange",
];

const Nyagasozi: Cell = ["Nyagasozi", "Nyamirindi", "Nyamugari"];

export const Mutenderi: Sector = {
	Karwema,
	Kibare,
	Mutenderi: _Mutenderi,
	Muzingira,
	Nyagasozi,
};
