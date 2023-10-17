/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Muyongwe
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bumba: Cell = [
	"Bumba",
	"Buzu",
	"Gikoro",
	"Gitovu",
	"Gitwe",
	"Mataba",
	"Shiru",
];

const Gisiza: Cell = [
	"Gitanda",
	"Kabingo",
	"Kiyebe",
	"Muramba",
	"Ruhoko",
	"Sanzare",
];

const Karyango: Cell = ["Gikombe", "Kibingo", "Mahaha", "Mugera"];

const Nganzo: Cell = ["Muhororo", "Nganzo", "Ngoma", "Nyarubuye", "Vugangoma"];

const Va: Cell = ["Bukwera", "Businde", "Gikombe", "Mutoyi", "Ranzi"];

export const Muyongwe: Sector = {
	Bumba,
	Gisiza,
	Karyango,
	Nganzo,
	Va,
};
