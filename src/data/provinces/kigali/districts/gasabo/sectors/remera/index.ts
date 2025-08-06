/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Remera
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Nyabisindu: Cell = [
	"Amarembo I",
	"Amarembo II",
	"Gihogere",
	"Kagara",
	"Kinunga",
	"Nyabisindu",
	"Rugarama",
];

const Nyarutarama: Cell = [
	"Gishushu",
	"Juru",
	"Kamahwa",
	"Kangondo I",
	"Kangondo II",
	"Kibiraro I",
	"Kibiraro II",
];

const RukiriI: Cell = [
	"Agashyitsi",
	"Amajyambere",
	"Izuba",
	"Gisimenti",
	"Ubumwe",
	"Ukwezi",
	"Urumuri",
];

const RukiriII: Cell = [
	"Amahoro",
	"Rebero",
	"Ruturusu I",
	"Ruturusu II",
	"Ubumwe",
];

export const Remera: Sector = {
	Nyabisindu,
	Nyarutarama,
	"Rukiri I": RukiriI,
	"Rukiri II": RukiriII,
};
