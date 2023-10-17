/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Cyumba
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gasunzu: Cell = ["Mubuga", "Mugera", "Ryamuromba", "Zihare"];

const Muhambo: Cell = ["Kiliba", "Nyamabare", "Rugerero"];

const Nyakabungo: Cell = [
	"Burambira",
	"Gashija",
	"Gatoki",
	"Kabare",
	"Kigombe",
	"Remera",
	"Ryaruhumba",
];

const Nyambare: Cell = ["Burambira", "Gipandi", "Remera", "Rusebeya"];

const Nyaruka: Cell = ["Burindi", "Humura", "Maya", "Murore", "Rusambya"];

const Rwankonjo: Cell = ["Gatuna", "Kagera", "Keyebe", "Kivuruga", "Rukizi"];

export const Cyumba: Sector = {
	Gasunzu,
	Muhambo,
	Nyakabungo,
	Nyambare,
	Nyaruka,
	Rwankonjo,
};
