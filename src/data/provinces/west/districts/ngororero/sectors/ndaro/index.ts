/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ndaro
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bijyojyo: Cell = [
	"Bijyojyo",
	"Birima",
	"Cyajongo",
	"Gasave",
	"Kavumu",
	"Kibuga",
	"Runyoni",
	"Rutonde",
];

const Bitabage: Cell = [
	"Gasharu",
	"Gituza",
	"Kamuyobora",
	"Kinga",
	"Nganzo",
	"Ngugu",
	"Nyamugari",
	"Rwamikeri",
];

const Kabageshi: Cell = ["Gasharu", "Kabuga", "Kandamira", "Masoro", "Ruhanga"];

const Kibanda: Cell = [
	"Kamina",
	"Kideberi",
	"Kimirehe",
	"Kirombozi",
	"Ruhuha",
	"Rutambiro",
	"Rwamateke",
	"Rwambogo",
];

const Kinyovi: Cell = ["Gahunga", "Giseke", "Rugeyo", "Rusebeya"];

export const Ndaro: Sector = {
	Bijyojyo,
	Bitabage,
	Kabageshi,
	Kibanda,
	Kinyovi,
};
