/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Murundi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Buhabwa: Cell = [
	"Buhabwa",
	"Cyamburara",
	"Gakoma",
	"Miyaga",
	"Mucucu",
	"Murundi",
];

const Karambi: Cell = [
	"Akamina",
	"Bugarura",
	"Gafunzo",
	"Kabana",
	"Kabuga",
	"Karambi",
	"Kiyovu",
	"Ngumeri I",
	"Ngumeri II",
	"Nyagashanga",
	"Nyamirama",
	"Rugunga",
	"Rukoyoyo",
	"Rumuri",
	"Rushenyi",
	"Rwasama",
	"Rwinsheke I",
	"Rwinsheke II",
];

const _Murundi: Cell = [
	"Kayongo",
	"Kibari",
	"Kinyana",
	"Macuba",
	"Nyanga",
	"Rucaca",
];

const Ryamanyoni: Cell = [
	"Akanyerezo",
	"Cyandorimana",
	"Kabingo",
	"Kaneke",
	"Kanyegera",
	"Ngarama",
	"Nyabugando",
	"Rwakabanda",
	"Rwinyambo",
	"Ryakirenzi I",
	"Ryakirenzi II",
	"Ryamanyoni",
	"Ubwiza",
];

export const Murundi: Sector = {
	Buhabwa,
	Karambi,
	Murundi: _Murundi,
	Ryamanyoni,
};
