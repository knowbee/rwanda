/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Musaza
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gasarabwayi: Cell = [
	"Gasarabwayi",
	"Gicuma",
	"Kanyosha",
	"Nyakariba I",
	"Nyakariba II",
	"Nyakiriba",
	"Rukumba",
	"Rwinyundo",
];

const Kabuga: Cell = [
	"Gikenke",
	"Kabuga",
	"Kagasa",
	"Kambwire",
	"Kimeya",
	"Nyamugari",
	"Rubuye I",
	"Rubuye II",
	"Rugango",
	"Rwamurema",
];

const Mubuga: Cell = [
	"Kanogo",
	"Kanombe",
	"Kiyovu",
	"Mubuga",
	"Runyinya",
	"Rwamuhazi",
	"Ryabega",
	"Ryarugazi",
];

const _Musaza: Cell = [
	"Gatwe I",
	"Gatwe II",
	"Kanyinya I",
	"Kanyinya II",
	"Musaza",
	"Muyoka",
	"Nyakariba",
];

const Nganda: Cell = [
	"Gacuba I",
	"Gacuba II",
	"Kamagare",
	"Kaziba",
	"Murura",
	"Nganda",
	"Nganda Ville I",
	"Nganda Ville II",
	"Nyamiyaga",
	"Ruseke",
	"Rwabugagara",
	"Rwamushongore",
];

export const Musaza: Sector = {
	Gasarabwayi,
	Kabuga,
	Mubuga,
	Musaza: _Musaza,
	Nganda,
};
