/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kintobo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gatovu: Cell = [
	"Gatovu Centre",
	"Giharo",
	"Nyagitaba",
	"Nyarusekera",
	"Rubande",
];

const _Kintobo: Cell = ["Bikingi", "Gakoro", "Gasura", "Gasyo", "Kansesa"];

const Nyagisozi: Cell = [
	"Dehero",
	"Hungiro",
	"Nyanshundura",
	"Rutoyi",
	"Sinayi",
];

const Nyamugari: Cell = [
	"Kabagundu",
	"Kariyeri",
	"Karucuranya",
	"Kiyumba",
	"Kizunga",
];

const Rukondo: Cell = ["Kamanga", "Kankima", "Kimpundu", "Mugogo"];

const Ryinyo: Cell = [
	"Gahwege",
	"Gasenyi",
	"Humiro",
	"Kabashumba Centre",
	"Kadaterurwa",
	"Kirwa",
	"Rwamikeri",
];

export const Kintobo: Sector = {
	Gatovu,
	Kintobo: _Kintobo,
	Nyagisozi,
	Nyamugari,
	Rukondo,
	Ryinyo,
};
