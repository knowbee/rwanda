/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Shangasha
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bushara: Cell = ["Bushara", "Gasura", "Gatare", "Nganzo"];

const Kitazigurwa: Cell = [
	"Gacyamo",
	"Iharama",
	"Mubuga",
	"Ntomvu",
	"Rugarama",
];

const Nyabishambi: Cell = [
	"Gasiza",
	"Kagali",
	"Karambo",
	"Matyazo",
	"Murambo",
	"Rukiniro",
	"Rutete",
];

const Nyabubare: Cell = [
	"Bikumba",
	"Irembo",
	"Karuhanga",
	"Nyakabingo",
	"Nyamiyaga",
];

const _Shangasha: Cell = [
	"Ituze",
	"Kabeza",
	"Kajyanjyali",
	"Rugali",
	"Runaba",
	"Ryamatebura",
];

export const Shangasha: Sector = {
	Bushara,
	Kitazigurwa,
	Nyabishambi,
	Nyabubare,
	Shangasha: _Shangasha,
};
