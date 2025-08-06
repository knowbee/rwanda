/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rongi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gasagara: Cell = [
	"Fumbwe",
	"Gasharu",
	"Kidahwe",
	"Murehe",
	"Musenyi",
	"Nyabugombe",
];

const Gasharu: Cell = [
	"Birehe",
	"Gituza",
	"Kabirizi",
	"Kabuga",
	"Karama",
	"Nyamiyaga",
];

const Karambo: Cell = [
	"Gifurwe",
	"Gitwa",
	"Nyabikenke",
	"Nyagasozi",
	"Rushenyi",
];

const Nyamirambo: Cell = [
	"Gisoro",
	"Kabakungu",
	"Karambi",
	"Masizi",
	"Mugwato",
	"Ntarabana",
	"Rugogwe",
	"Rwamure",
];

const Ruhango: Cell = ["Burerabana", "Kondo", "Muyebe", "Rukoma"];

export const Rongi: Sector = {
	Gasagara,
	Gasharu,
	Karambo,
	Nyamirambo,
	Ruhango,
};
