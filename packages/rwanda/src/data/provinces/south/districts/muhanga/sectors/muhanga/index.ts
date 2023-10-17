/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Muhanga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kanyinya: Cell = [
	"Gakomeye",
	"Kanyungura",
	"Mataba",
	"Nyabugwiza",
	"Nyamitanga",
];

const Nganzo: Cell = [
	"Gasenyi",
	"Gitongati",
	"Kabingo",
	"Kagombero",
	"Kamazu",
	"Karama",
	"Kumukenke",
	"Masumo",
];

const Nyamirama: Cell = [
	"Cyurutare",
	"Gahabwa",
	"Kantonganiye",
	"Namankurwe",
	"Nyiramarangara",
	"Rwabagenzi",
];

const Remera: Cell = [
	"Gisiza",
	"Kiyoro",
	"Muhanga",
	"Munzereri",
	"Murama",
	"Naganiro",
];

const Tyazo: Cell = ["Gasaka", "Gitima", "Kivomo", "Nyahinda", "Ruhuha"];

export const Muhanga: Sector = {
	Kanyinya,
	Nganzo,
	Nyamirama,
	Remera,
	Tyazo,
};
