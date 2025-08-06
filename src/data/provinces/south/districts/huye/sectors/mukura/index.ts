/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mukura
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bukomeye: Cell = [
	"Bweramana",
	"Cyiri",
	"Gahanga",
	"Gasunzwe",
	"Kigarama",
	"Kizenga",
	"Nyagakingi",
	"Sata",
	"Shingangabo",
	"Taba",
];

const Buvumu: Cell = [
	"Akagarama",
	"Akayenzi",
	"Akogo",
	"Amasanganzira",
	"Kabeza",
	"Akabutora",
	"Mpinga",
	"Nyagasambu",
	"Remera",
	"Rujumbura",
	"Rusenyi",
	"Taba",
];

const Icyeru: Cell = [
	"Akabuga",
	"Akamahinda",
	"Gakombe",
	"Nyagisenyi",
	"Nyarusambu",
];

const RangoA: Cell = [
	"Agakera",
	"Agakombe",
	"Gaseke",
	"Kabahora",
	"Mpaza",
	"Nyamata",
	"Rwinuma",
];

export const Mukura: Sector = {
	Bukomeye,
	Buvumu,
	Icyeru,
	"Rango A": RangoA,
};
