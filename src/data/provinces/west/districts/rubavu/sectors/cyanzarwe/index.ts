/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Cyanzarwe
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Busigari: Cell = ["Bisizi", "Bugu", "Kanembwe", "Rwashungwe"];

const _Cyanzarwe: Cell = [
	"Butango",
	"Cyanzarwe",
	"Gasenyi",
	"Karangara",
	"Kiruhura",
	"Rushura",
];

const Gora: Cell = ["Burima", "Gora", "Kabere"];

const Kinyanzovu: Cell = ["Bushanga", "Kanyentambi", "Kibaya", "Muhororo"];

const Makurizo: Cell = [
	"Gashuha",
	"Makurizo",
	"Mukingo",
	"Nyamugari",
	"Ruhuranda",
];

const Rwangara: Cell = [
	"Buramazi",
	"Hanika",
	"Muti",
	"Nyakabanda",
	"Nyakabungo",
];

const Rwanzekuma: Cell = [
	"Kabirizi",
	"Karambi",
	"Kinyamiyaga",
	"Munaba",
	"Rukorakore",
];

const Ryabizige: Cell = [
	"Burere",
	"Kanyamagare",
	"Kavumu",
	"Muhuhuri",
	"Musene",
	"Nganzo",
];

export const Cyanzarwe: Sector = {
	Busigari,
	Cyanzarwe: _Cyanzarwe,
	Gora,
	Kinyanzovu,
	Makurizo,
	Rwangara,
	Rwanzekuma,
	Ryabizige,
};
