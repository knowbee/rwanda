/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kimihurura
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kamukina: Cell = [
	"Inyamibwa",
	"Isangano",
	"Isano",
	"Ituze",
	"Izuba",
	"Juru",
	"Nyenyeri",
	"Umurava",
	"Urumuri",
];

const _Kimihurura: Cell = [
	"Amahoro",
	"Amajyambere",
	"Imihigo",
	"Intambwe",
	"Mutara",
	"Rugarama",
	"Ubumwe",
	"Umutekano",
	"Urwego",
];

const Rugando: Cell = ["Gasange", "Gasasa", "Marembo", "Rebero", "Taba"];

export const Kimihurura: Sector = {
	Kamukina,
	Kimihurura: _Kimihurura,
	Rugando,
};
