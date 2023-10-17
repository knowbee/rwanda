/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Gishamvu
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Nyakibanda: Cell = ["Byimana", "Kamabuye", "Karambo", "Kigarama"];

const Nyumba: Cell = [
	"Akagahaya",
	"Busoro",
	"Gasyankingi",
	"Gishamvu",
	"Mirambi",
	"Nyagatama",
];

const Ryakibogo: Cell = [
	"Gakombe",
	"Gasekebuye",
	"Gitwa",
	"Impinga",
	"Kadahokwa",
	"Kidahire",
	"Kiduha",
];

const Shori: Cell = [
	"Akabere",
	"Cyambwe",
	"Kabeza",
	"Karubare",
	"Kinyovi",
	"Rebero",
	"Rusasa",
	"Umunyinya",
];

export const Gishamvu: Sector = {
	Nyakibanda,
	Nyumba,
	Ryakibogo,
	Shori,
};
