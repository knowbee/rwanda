/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Runda
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gihara: Cell = [
	"Bikimba",
	"Bimba",
	"Kabasanza",
	"Nyagatare",
	"Rukaragata",
	"Ruyigi",
];

const Kabagesera: Cell = [
	"Bwirabo",
	"Kabagesera",
	"Muhambara",
	"Rubuye",
	"Rugogwe",
];

const Kagina: Cell = ["Gasharara", "Kagina", "Kamuhoza", "Kigusa", "Rugarama"];

const Muganza: Cell = [
	"Kigabiro",
	"Musebeya",
	"Nyagacyamu",
	"Nyaruhoko",
	"Rubona",
];

const Ruyenzi: Cell = ["Kibaya", "Nyabitare", "Nyagacaca", "Rubumba", "Rugazi"];

export const Runda: Sector = {
	Gihara,
	Kabagesera,
	Kagina,
	Muganza,
	Ruyenzi,
};
