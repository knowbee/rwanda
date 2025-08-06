/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ndego
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Byimana: Cell = [
	"Busasamana",
	"Irebero",
	"Kabeza",
	"Kururembo",
	"Nyakabingo",
	"Nyamata",
];

const Isangano: Cell = [
	"Gafunzo",
	"Gashonga",
	"Kabusunzu",
	"Kagese",
	"Kagoma",
	"Kamahoro",
	"Kanyinya",
	"Kibare",
];

const Karambi: Cell = [
	"Gasenyi",
	"Ihema",
	"Kagasa",
	"Kamabuye",
	"Kumunini",
	"Murambi",
	"Musenyi",
	"Remera",
];

const Kiyovu: Cell = ["Gasabo", "Humure", "Iramiro", "Mwurire", "Nyamugali"];

export const Ndego: Sector = {
	Byimana,
	Isangano,
	Karambi,
	Kiyovu,
};
