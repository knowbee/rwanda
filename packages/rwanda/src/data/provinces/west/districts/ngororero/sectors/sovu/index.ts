/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Sovu
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Birembo: Cell = ["Kabayengo", "Mahembe", "Muyange", "Nshano", "Ruseke"];

const Kagano: Cell = ["Gitabage", "Karambo", "Ndagarago", "Nyamuza", "Rusenge"];

const Kanyana: Cell = [
	"Bitaba",
	"Gahombo",
	"Gashihe",
	"Mugobati",
	"Ruganda",
	"Rusebeya",
];

const Musenyi: Cell = ["Gihonga", "Gisakavu", "Gisiza", "Kabuga", "Rubindi"];

const Nyabipfura: Cell = [
	"Butenga",
	"Gatare",
	"Migendezo",
	"Nyirabwina",
	"Sanzare",
];

const Rutovu: Cell = [
	"Gasiza",
	"Kanyirajana",
	"Kigusa",
	"Ngaza",
	"Ngugu",
	"Rukeri",
];

export const Sovu: Sector = {
	Birembo,
	Kagano,
	Kanyana,
	Musenyi,
	Nyabipfura,
	Rutovu,
};
