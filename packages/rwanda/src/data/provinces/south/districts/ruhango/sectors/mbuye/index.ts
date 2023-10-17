/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mbuye
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyanza: Cell = ["Kabungo", "Murambi", "Nyamikoni", "Rwamiko", "Wimana"];

const Gisanga: Cell = [
	"Bienvenue",
	"Gisanga",
	"Gishari",
	"Karama",
	"Kavumu",
	"Nyarugenge",
	"Sabudari",
	"Sahara",
];

const Kabuga: Cell = [
	"Kabuga",
	"Kinyinya",
	"Kirwa",
	"Mpungwe",
	"Musenyi",
	"Nyabisindu",
	"Nyakabanda",
	"Nyamutarama",
	"Rugarama",
	"Rwinkuba",
];

const Kizibere: Cell = [
	"Bereshi",
	"Biraro",
	"Bunyeshywa",
	"Kangoma",
	"Kivumu",
	"Kizibere",
	"Mayunzwe",
	"Nyamiyaga",
	"Rebero",
	"Ruhuha",
];

const _Mbuye: Cell = [
	"Buremera",
	"Cyeru",
	"Cyobe",
	"Kamurema",
	"Kanyinya",
	"Kinyambo",
	"Ruyenzi",
	"Rwimposha",
];

const Mwendo: Cell = [
	"Cyanika",
	"Gafunzo",
	"Gasanganya",
	"Gatare",
	"Giticyuma",
	"Ipate",
	"Kabuga",
	"Karama",
	"Karusizi",
	"Kavumu",
	"Kidoma",
	"Mataba",
	"Vunga",
];

const Nyakarekare: Cell = [
	"Bereshi",
	"Jari",
	"Kigabiro",
	"Nyakarekare",
	"Nyaruyonga",
	"Rubona",
	"Ruyenzi",
	"Vugiza",
];

export const Mbuye: Sector = {
	Cyanza,
	Gisanga,
	Kabuga,
	Kizibere,
	Mbuye: _Mbuye,
	Mwendo,
	Nyakarekare,
};
