/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Minazi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gasiho: Cell = [
	"Gahombo",
	"Gahunda",
	"Gasangwa",
	"Gihinga",
	"Kabarima",
	"Kigeyo",
	"Mbogo",
];

const Munyana: Cell = ["Gihororo", "Gitwa", "Kanka", "Kivuba", "Nyabitare"];

const Murambi: Cell = ["Gisovu", "Kabuga", "Musave", "Nyanza", "Nyarubuye"];

const Raba: Cell = [
	"Bukonde",
	"Gaharo",
	"Gitaragwe",
	"Munihi",
	"Mutara",
	"Ndegamire",
	"Sarabuye",
];

export const Minazi: Sector = {
	Gasiho,
	Munyana,
	Murambi,
	Raba,
};
