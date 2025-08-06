/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Musenyi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gicaca: Cell = [
	"Bidudu",
	"Cyanika",
	"Cyarubazi",
	"Gatare",
	"Gihari",
	"Kagusa",
	"Kamahango",
	"Kavumu",
	"Kidudu",
	"Migina",
	"Ngarama",
	"Remera",
	"Rusagara",
];

const _Musenyi: Cell = [
	"Bidudu",
	"Bishinge",
	"Bizenga",
	"Cyeru",
	"Gakomeye",
	"Gakurazo",
	"Kigarama",
	"Kijuri",
	"Kiringa",
	"Muhanga",
	"Nunga",
	"Nyagasagara",
	"Rugando",
	"Rugeyo",
];

const Nyagihunika: Cell = [
	"Gatoki",
	"Gitagata",
	"Kigusa",
	"Kiruhura",
	"Mbonwa",
	"Nyakajuri",
	"Rugarama",
	"Rushubi",
	"Rwankeri",
];

const Rulindo: Cell = [
	"Kabeza",
	"Kabuye",
	"Kagunga",
	"Kanyamata",
	"Karambo",
	"Karubanzangabo",
	"Kinyovi",
	"Nyamuri",
	"Rulindo",
	"Runyonza",
];

export const Musenyi: Sector = {
	Gicaca,
	Musenyi: _Musenyi,
	Nyagihunika,
	Rulindo,
};
