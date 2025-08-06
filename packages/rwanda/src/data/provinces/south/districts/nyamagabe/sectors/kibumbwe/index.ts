/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kibumbwe
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bwenda: Cell = ["Munyinya", "Murambi", "Murwa", "Nyagatovu", "Nyamirama"];

const Gakanka: Cell = [
	"Cyeru",
	"Gikomero",
	"Munini",
	"Nkurubuye",
	"Nyarubuye",
	"Rambya",
];

const Kibibi: Cell = [
	"Gatandaganya",
	"Kabere",
	"Kanyege",
	"Kirwa",
	"Rwezamenyo",
	"Ryingarura",
];

const Nyakiza: Cell = [
	"Dusenyi",
	"Karambo",
	"Kinyana",
	"Murambi",
	"Nyakizu",
	"Zigati",
];

export const Kibumbwe: Sector = {
	Bwenda,
	Gakanka,
	Kibibi,
	Nyakiza,
};
