/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Murama
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bunyentongo: Cell = [
	"Bweramvura",
	"Gahengeri",
	"Gisunzu",
	"Kabeza",
	"Kagarama",
	"Mpilindi",
	"Nyamabuye",
	"Shyanda",
];

const Muko: Cell = ["Gihazo", "Karama", "Ngoma", "Rebezo", "Rugarama"];

const _Murama: Cell = [
	"Bubindi",
	"Kajevuba",
	"Murama",
	"Rusaro",
	"Rwabugengeri",
];

const Nyakanazi: Cell = [
	"Busasamana",
	"Nyagahinga",
	"Nyakanazi",
	"Rugazi",
	"Rurenge",
];

const Rusave: Cell = [
	"Bicumbi",
	"Bwinyana",
	"Byimana",
	"Gasutamo",
	"Kinyinya",
	"Seresi",
];

export const Murama: Sector = {
	Bunyentongo,
	Muko,
	Murama: _Murama,
	Nyakanazi,
	Rusave,
};
