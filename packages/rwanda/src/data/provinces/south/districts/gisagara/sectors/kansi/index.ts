/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kansi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Akaboti: Cell = [
	"Agacyamu",
	"Agataba",
	"Akabuga",
	"Akayenzi",
	"Gatare",
	"Impinga",
	"Rugarama",
	"Ruhuha",
];

const Bwiza: Cell = [
	"Akakinka",
	"Akambogo",
	"Gitwa",
	"Kimanama",
	"Mbeho",
	"Nyakibungo",
	"Nyaruhengeri",
];

const Sabusaro: Cell = [
	"Akayenzi",
	"Gikore",
	"Muhororo",
	"Nyamure",
	"Nyarunazi",
	"Ruhangaye",
];

const Umunini: Cell = [
	"Agatare",
	"Akabagari",
	"Gisororo",
	"Kaburanjwiri",
	"Kaduha",
	"Kamugani",
	"Kigarama",
	"Nyange",
];

export const Kansi: Sector = {
	Akaboti,
	Bwiza,
	Sabusaro,
	Umunini,
};
