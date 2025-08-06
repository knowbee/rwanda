/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kicukiro
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gasharu: Cell = ["Amajyambere", "Gasharu", "Sakirwa", "Umunyinya"];

const Kagina: Cell = [
	"Gashiha",
	"Iriba",
	"Multimedia",
	"Umunyinya",
	"Umuremure",
	"Urugero",
];

const _Kicukiro: Cell = [
	"Gasave",
	"Isoko",
	"Karisimbi",
	"Kicukiro",
	"Triangle",
	"Ubumwe",
];

const Ngoma: Cell = ["Ahitegeye", "Intaho", "Iriba", "Isangano", "Urugero"];

export const Kicukiro: Sector = {
	Gasharu,
	Kagina,
	Kicukiro: _Kicukiro,
	Ngoma,
};
