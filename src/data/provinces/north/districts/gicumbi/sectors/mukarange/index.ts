/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mukarange
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyamuganga: Cell = ["Burambira", "Ndarama", "Nyakabungo", "Rugarama"];

const Gatenga: Cell = [
	"Ibereshi",
	"Kagunga",
	"Kiyorwa",
	"Mugina",
	"Nyacyoroma",
	"Nyange",
];

const Kiruhura: Cell = ["Burembo", "Gacwamba", "Kariba", "Nyamutoko"];

const Mutarama: Cell = ["Gikore", "Kaziba", "Mafumirwa", "Murara", "Rugeshi"];

const Rugerero: Cell = [
	"Gakizi",
	"Kagarama",
	"Kinnyogo",
	"Munyege",
	"Rurembo",
	"Rushasha",
	"Ruziku",
];

const Rusambya: Cell = ["Kabungo", "Kagane", "Nyagakizi", "Rusambya"];

export const Mukarange: Sector = {
	Cyamuganga,
	Gatenga,
	Kiruhura,
	Mutarama,
	Rugerero,
	Rusambya,
};
