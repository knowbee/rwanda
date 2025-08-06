/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Musha
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Akabare: Cell = [
	"Akabare",
	"Binunga",
	"Budahigwa",
	"Duha",
	"Gashikiri",
	"Rugabano",
	"Rukombe",
];

const Budahanda: Cell = ["Karambo", "Nyantoki", "Rwabiyange"];

const Kagarama: Cell = [
	"Kagarama",
	"Kiruhura",
	"Muhogoto",
	"Nyagacyamo",
	"Nyamigano",
];

const _Musha: Cell = [
	"Gatika",
	"Kadasumbwa",
	"Karifuru",
	"Nyakiriba",
	"Rugarama",
];

const Nyabisindu: Cell = [
	"Agashuhe",
	"Busanza",
	"Bwiza",
	"Nyabisindu",
	"Rujumbura",
	"Rwamivu",
	"Umunini",
];

const Nyakabanda: Cell = ["Bitsibo", "Ruhita", "Rutoma"];

export const Musha: Sector = {
	Akabare,
	Budahanda,
	Kagarama,
	Musha: _Musha,
	Nyabisindu,
	Nyakabanda,
};
