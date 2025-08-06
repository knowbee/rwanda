/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Matyazo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Binana: Cell = ["Busoro", "Kabuye", "Kaseke", "Kavumu", "Nyagisozi"];

const Gitega: Cell = [
	"Barama",
	"Gahanda",
	"Gasayo",
	"Gataka",
	"Kabara",
	"Rwankenke",
];

const Matare: Cell = [
	"Gako",
	"Gitega",
	"Kamasorori",
	"Munyinya",
	"Mwumba",
	"Nyenyeri",
];

const Rutare: Cell = ["Kabingo", "Nyakiliba", "Ruhurura", "Rwamabuye", "Shori"];

const Rwamiko: Cell = ["Butare", "Nyakibande", "Rusororo", "Rwamiko"];

export const Matyazo: Sector = {
	Binana,
	Gitega,
	Matare,
	Rutare,
	Rwamiko,
};
