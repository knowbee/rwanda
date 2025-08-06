/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Murambi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Murambi: Cell = [
	"Agacyamo",
	"Agasharu",
	"Agatagara",
	"Akamashya",
	"Byimana",
	"Kabarondo",
	"Kabuga",
	"Kigote",
	"Kimironko",
	"Kiniga",
	"Mataba",
	"Ryampunga",
	"Urugarama",
];

const Nyamiyaga: Cell = [
	"Bweranyange",
	"Kabeza",
	"Kagenge",
	"Kiniga",
	"Runyinya",
];

const Rwankuba: Cell = [
	"Akarambo",
	"Akayenzi",
	"Ikinyaga",
	"Impanzi",
	"Nyagasambu",
	"Nyagatovu",
	"Umwiga",
	"Urugarama",
];

const Rwimitereri: Cell = [
	"Bushenyi",
	"Bweya",
	"Byimana",
	"Kibumba",
	"Kigote",
	"Kimondo",
	"Kinunga",
	"Nyakabanda",
	"Rugarama",
];

export const Murambi: Sector = {
	Murambi: _Murambi,
	Nyamiyaga,
	Rwankuba,
	Rwimitereri,
};
