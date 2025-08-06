/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nyagisozi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Maraba: Cell = ["Bugarama", "Maraba", "Nkima", "Rushunguriro"];

const Mwoya: Cell = [
	"Agatovu",
	"Bwerankori",
	"Muhombo",
	"Mwoya",
	"Nkomero",
	"Nyagashubi",
];

const Nkakwa: Cell = [
	"Bihembe",
	"Kaduha",
	"Nkakwa",
	"Nyarubuye",
	"Rarire",
	"Rubuga",
];

const _Nyagisozi: Cell = [
	"Muriza",
	"Nyagishayo",
	"Nyamiyaga",
	"Ryabidandi",
	"Uwimfizi",
];

export const Nyagisozi: Sector = {
	Maraba,
	Mwoya,
	Nkakwa,
	Nyagisozi: _Nyagisozi,
};
