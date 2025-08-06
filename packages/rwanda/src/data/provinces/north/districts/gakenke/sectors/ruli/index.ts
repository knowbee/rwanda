/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ruli
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Busoro: Cell = [
	"Congoli",
	"Cyoganyoni",
	"Gitaba",
	"Kabare",
	"Kibirizi",
	"Nkoto",
	"Rugaragara",
];

const Gikingo: Cell = [
	"Bushoka",
	"Gatwa",
	"Kabingo",
	"Karango",
	"Nyamugari",
	"Rumasa",
];

const Jango: Cell = [
	"Gatagara",
	"Gihura",
	"Gitonde",
	"Kinyonzo",
	"Mubuga",
	"Murehe",
];

const _Ruli: Cell = [
	"Bariza",
	"Gahondo",
	"Gataba",
	"Mugambazi",
	"Ngayake",
	"Nyakarambi",
];

const Rwesero: Cell = ["Gatare", "Gisizi", "Mabago", "Mugwato", "Nyarunyinya"];

export const Ruli: Sector = {
	Busoro,
	Gikingo,
	Jango,
	Ruli: _Ruli,
	Rwesero,
};
