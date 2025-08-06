/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kamubuga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Kamubuga: Cell = [
	"Gasebeya",
	"Gashishi",
	"Gitwe",
	"Kabuye",
	"Kanshenge",
	"Kanyirantege",
	"Marira",
	"Nyarungu",
	"Raro",
	"Rugari",
	"Ruhehe",
	"Runeka",
];

const Kidomo: Cell = [
	"Bucyaba",
	"Bugogo",
	"Kidomo",
	"Kintobo",
	"Njugi",
	"Nyamusongati",
	"Rugeshi",
	"Rutagara",
];

const Mbatabata: Cell = [
	"Buhinda",
	"Gatare",
	"Horero",
	"Kabyaza",
	"Karingorera",
	"Mbatabata",
	"Mwasha",
	"Ryabirere",
];

const Rukore: Cell = [
	"Kabutwa",
	"Karangara",
	"Kinyababa",
	"Rungu",
	"Rusasa",
	"Rusumo",
	"Rwata",
	"Taba",
];

export const Kamubuga: Sector = {
	Kamubuga: _Kamubuga,
	Kidomo,
	Mbatabata,
	Rukore,
};
