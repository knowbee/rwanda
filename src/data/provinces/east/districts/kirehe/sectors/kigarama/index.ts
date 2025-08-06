/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kigarama
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyanya: Cell = [
	"Cyanya",
	"Gakoni",
	"Kabimba I",
	"Kabimba II",
	"Kigende",
	"Nyakavogo",
	"Nyamikoni",
	"Nyamirambo I",
	"Nyamirambo II",
	"Nyarutovu",
	"Rubare",
];

const _Kigarama: Cell = [
	"Gahindu",
	"Humure",
	"Kigarama",
	"Kiravunga",
	"Nyakazinga",
	"Nyamiyaga",
	"Nyarutojo",
	"Rugari",
	"Rurenge",
	"Samuko",
];

const Kiremera: Cell = [
	"Bweranka I",
	"Bweranka II",
	"Cyanika",
	"Irama",
	"Kagane",
	"Kagorogoro",
	"Kaguriro",
	"Karenge I",
	"Karenge II",
	"Kayirarye",
	"Kimesho",
	"Kiremera",
	"Nyaryenge",
	"Rwesinge",
	"Umunezero",
];

const Nyakerera: Cell = [
	"Gasenyi",
	"Gatari",
	"Kabare",
	"Kabuga",
	"Kiyovu",
	"Nyabubare",
	"Ruhandagazi",
	"Rukiri",
	"Ryamukaza",
];

const Nyankurazo: Cell = [
	"Kabeza",
	"Kivu",
	"Marembo",
	"Nshungerezi",
	"Nyagahanga",
	"Nyakabungo",
	"Nyakigera",
	"Nyakwisi",
	"Rama",
	"Ruhuha",
	"Rusumo",
];

export const Kigarama: Sector = {
	Cyanya,
	Kigarama: _Kigarama,
	Kiremera,
	Nyakerera,
	Nyankurazo,
};
