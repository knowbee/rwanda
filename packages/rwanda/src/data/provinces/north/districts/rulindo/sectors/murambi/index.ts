/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Murambi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bubangu: Cell = [
	"Gashubi",
	"Karambo",
	"Karwa",
	"Mayange",
	"Nyagisozi",
	"Rebero",
	"Ruhunga",
	"Taba",
];

const Gatwa: Cell = [
	"Agatare",
	"Akarambi",
	"Amataba",
	"Gisiza",
	"Kabeza",
	"Karambo",
	"Kigarama",
];

const Mugambazi: Cell = [
	"Amahoro",
	"Buliza",
	"Gahama",
	"Gashinge",
	"Kigarama",
	"Nyarurembo",
	"Ruri",
];

const Mvuzo: Cell = [
	"Iraro",
	"Kabeza",
	"Kabuga",
	"Munyinya",
	"Mutabo",
	"Ntyaba",
	"Rurama",
];

export const Murambi: Sector = {
	Bubangu,
	Gatwa,
	Mugambazi,
	Mvuzo,
};
