/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mwiri
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kageyo: Cell = [
	"Gisunzu",
	"Kiyonza",
	"Ndago",
	"Rugeyo",
	"Rwisirabo I",
	"Rwisirabo II",
	"Sebasengo",
];

const Migera: Cell = ["Agahiza", "Murori", "Mwiri", "Nyakagarama", "Umutekano"];

const Nyamugari: Cell = [
	"Gasarabwayi",
	"Kabeza",
	"Kabukeye",
	"Kigarama",
	"Ruhoroba",
	"Rwazana",
	"Ryamutumo",
];

const Nyawera: Cell = [
	"Gitega",
	"Muhozi",
	"Murehe",
	"Nyakabungo",
	"Ryakibanda",
];

export const Mwiri: Sector = {
	Kageyo,
	Migera,
	Nyamugari,
	Nyawera,
};
