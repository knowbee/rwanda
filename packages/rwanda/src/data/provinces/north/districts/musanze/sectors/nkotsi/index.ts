/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nkotsi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bikara: Cell = [
	"Barizo",
	"Kabaya",
	"Karambi",
	"Kindiki",
	"Kinkware",
	"Kiruhura",
	"Nyakinama",
	"Rubindi",
];

const Gashinga: Cell = ["Buhanga", "Gitaraga", "Kabasaza", "Musebeya"];

const Mubago: Cell = [
	"Bugugu",
	"Buhamo",
	"Musembe",
	"Nyagahondo",
	"Nyarubingo",
];

const Rugeshi: Cell = [
	"Bigabiro",
	"Gahanga",
	"Gasebeya",
	"Karambo",
	"Mucyamo",
	"Mutuzo",
];

const Ruyumba: Cell = [
	"Cyivugiza",
	"Gasiza",
	"Kamusheshe",
	"Murindi",
	"Nyakigezi",
];

export const Nkotsi: Sector = {
	Bikara,
	Gashinga,
	Mubago,
	Rugeshi,
	Ruyumba,
};
