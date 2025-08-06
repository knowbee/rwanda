/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rugendabari
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gasave: Cell = [
	"Gakoma",
	"Gasharu",
	"Giturwa",
	"Nyagasozi",
	"Nyakibuye",
	"Nyamatete",
];

const Kanyana: Cell = ["Gasovu", "Kabuba", "Muheta", "Ntonde"];

const Kibaga: Cell = ["Kiduha", "Mataba", "Njamena"];

const Mpinga: Cell = ["Buganda", "Gisiza"];

const Nsanga: Cell = ["Mpongo", "Ngando", "Nyundo", "Rugwiza", "Twabumbogo"];

export const Rugendabari: Sector = {
	Gasave,
	Kanyana,
	Kibaga,
	Mpinga,
	Nsanga,
};
