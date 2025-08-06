/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kinoni
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gafuka: Cell = [
	"Basumba",
	"Bugeyo",
	"Buharo",
	"Kabeza",
	"Kanoni",
	"Ntwana",
	"Nyagafunzo",
];

const Nkenke: Cell = ["Birwa", "Kigina", "Kigugu", "Nyagatoki", "Sunzu"];

const Nkumba: Cell = [
	"Cyanya",
	"Cyivugiza",
	"Kabaguma",
	"Karambo",
	"Mbaya",
	"Mubuga",
	"Mutabo",
];

const Ntaruka: Cell = [
	"Cyamabuye",
	"Gikoro",
	"Kabaya",
	"Karuganda",
	"Nyabagenzi",
	"Nyarubuye",
	"Nyarurembo",
	"Ryamakoro",
	"Shenyi",
];

export const Kinoni: Sector = {
	Gafuka,
	Nkenke,
	Nkumba,
	Ntaruka,
};
