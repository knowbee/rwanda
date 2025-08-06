/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Gatenga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Gatenga: Cell = [
	"Amahoro",
	"Gakoki",
	"Gatenga",
	"Ihuriro",
	"Isangano",
	"Rugari",
];

const Karambo: Cell = [
	"Gwiza",
	"Ihuriro",
	"Jyambere",
	"Kamabuye",
	"Mahoro",
	"Ramiro",
	"Rebero",
	"Rugwiro",
	"Ruhuka",
	"Sangwa",
];

const Nyanza: Cell = [
	"Bwiza",
	"Cyeza",
	"Gasabo",
	"Ihuriro",
	"Isonga",
	"Juru",
	"Marembo",
	"Murambi",
	"Nyanza",
	"Rebero",
	"Rusororo",
	"Sabaganga",
	"Taba",
];

const Nyarurama: Cell = ["Bigo", "Bisambu", "Kabeza", "Nyabikenke"];

export const Gatenga: Sector = {
	Gatenga: _Gatenga,
	Karambo,
	Nyanza,
	Nyarurama,
};
