/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nyagatare
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Barija: Cell = ["Barija A", "Barija B", "Burumba", "Kinihira"];

const Bushoga: Cell = [
	"Bushoga",
	"Cyabahanga",
	"Cyonyo",
	"Ruhuha I",
	"Ruhuha II",
	"Ryinkuyu",
];

const Cyabayaga: Cell = [
	"Akamonyi",
	"Bihinga",
	"Cyabayaga",
	"Nyakabuye",
	"Urugero",
];

const Gakirage: Cell = [
	"Gakirage",
	"Kiboga I",
	"Kiboga II",
	"Mihingo",
	"Nkongi",
	"Urumuri",
];

const Kamagiri: Cell = ["Kamagiri", "Karungi", "Nkerenke"];

const Nsheke: Cell = ["Kabare", "Nsheke", "Nyegeza"];

const _Nyagatare: Cell = [
	"Mirama I",
	"Mirama II",
	"Nyagatare I",
	"Nyagatare II",
	"Nyagatare III",
];

const Rutaraka: Cell = ["Gihorobwa", "Mugari", "Nkonji", "Rutaraka", "Ryabega"];

const Ryabega: Cell = ["Marongero", "Rugendo", "Ryabega"];

export const Nyagatare: Sector = {
	Barija,
	Bushoga,
	Cyabayaga,
	Gakirage,
	Kamagiri,
	Nsheke,
	Nyagatare: _Nyagatare,
	Rutaraka,
	Ryabega,
};
