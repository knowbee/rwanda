/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Tumba
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyarwa: Cell = [
	"Agahora",
	"Agasengasenge",
	"Agasharu",
	"Agateme",
	"Icyiri",
	"Kabeza",
	"Kigarama",
	"Mukoni",
	"Taba",
];

const Cyimana: Cell = [
	"Abizerwa",
	"Akamuhoza",
	"Amahoro",
	"Ubumwe",
	"Ubwiyunge",
];

const Gitwa: Cell = ["Gasenyi", "Berwa", "Nyarurembo", "Rebero", "Rimba"];

const Mpare: Cell = [
	"Agasharu",
	"Akabuga",
	"Akarugiranka",
	"Kigarama",
	"Musange",
	"Runyinya",
	"Rwanyanza",
];

const RangoB: Cell = [
	"Akabeza",
	"Akakanyamanza",
	"Byimana",
	"Impuhwe",
	"Kigarama",
	"Ntangarugero",
	"Urugwiro",
];

export const Tumba: Sector = {
	Cyarwa,
	Cyimana,
	Gitwa,
	Mpare,
	"Rango B": RangoB,
};
