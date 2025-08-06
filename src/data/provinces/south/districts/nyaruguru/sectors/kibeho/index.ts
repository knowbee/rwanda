/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kibeho
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gakoma: Cell = ["Nyagishayo", "Rurembo", "Viro"];

const _Kibeho: Cell = ["Agateko", "Akajonge", "Sinayi"];

const Mbasa: Cell = ["Kinazi", "Migina", "Rwimbogo"];

const Mpanda: Cell = ["Banga", "Kibayi", "Mpanda", "Munege"];

const Mubuga: Cell = [
	"Mubuga",
	"Nyarusovu",
	"Nyarwumba",
	"Umurambi",
	"Uwintobo",
];

const Nyange: Cell = ["Agateko", "Kigona", "Mpatswe", "Nkomero"];

export const Kibeho: Sector = {
	Gakoma,
	Kibeho: _Kibeho,
	Mbasa,
	Mpanda,
	Mubuga,
	Nyange,
};
