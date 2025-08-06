/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Miyove
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gakenke: Cell = [
	"Gisiza",
	"Karwanira",
	"Kirwa",
	"Kivomo",
	"Museke",
	"Nyarurambi",
	"Rugandu",
];

const _Miyove: Cell = [
	"Kamonyi",
	"Karambo",
	"Mpinga",
	"Mukaka",
	"Murambo",
	"Murehe",
	"Nyamiyaga",
	"Nyarubuye",
	"Rebero",
	"Remera",
];

const Mubuga: Cell = [
	"Gatare",
	"Gitsimbura",
	"Kabuga",
	"Kacyiru",
	"Kagote",
	"Kaje",
	"Kirwa",
	"Kivumu",
	"Mubuga",
	"Murambo",
	"Rutovu",
	"Tetero",
];

export const Miyove: Sector = {
	Gakenke,
	Miyove: _Miyove,
	Mubuga,
};
