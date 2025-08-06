/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kimonyi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Birira: Cell = [
	"Gakoro",
	"Kabagoyi",
	"Kadahenda",
	"Mbugayera",
	"Rurembo",
];

const Buramira: Cell = [
	"Kabaya",
	"Kagwene",
	"Kamugeni",
	"Nyiramuyenzi",
	"Ruhinga",
];

const Kivumu: Cell = ["Masoro", "Muregeya", "Musezero", "Ndorahe", "Nyamugari"];

const Mbizi: Cell = ["Buhuma", "Bushubi", "Gatumo", "Rugondo"];

export const Kimonyi: Sector = {
	Birira,
	Buramira,
	Kivumu,
	Mbizi,
};
