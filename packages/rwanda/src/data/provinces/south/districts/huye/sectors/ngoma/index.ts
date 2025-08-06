/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ngoma
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Butare: Cell = [
	"Akabuye",
	"Bukinanyana",
	"Buye",
	"Gasoro",
	"Kabutare",
	"Karubanda",
	"Mamba",
	"Busenyi",
	"Taba",
];

const Kaburemera: Cell = [
	"Gatoki",
	"Kaguhu",
	"Karambi",
	"Nyabubare",
	"Nyagapfizi",
	"Rugarama",
	"Runga",
];

const Matyazo: Cell = [
	"Gafurwe",
	"Kabeza",
	"Kamucuzi",
	"Nyabitare",
	"Rurenda",
	"Rusisiro",
	"Ruvuzo",
];

const _Ngoma: Cell = [
	"Ngoma V",
	"Ngoma I",
	"Ngoma III",
	"Ngoma IV",
	"Ngoma VI",
	"Ngoma II",
];

export const Ngoma: Sector = {
	Butare,
	Kaburemera,
	Matyazo,
	Ngoma: _Ngoma,
};
