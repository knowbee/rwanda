/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mamba
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gakoma: Cell = [
	"Gakomeye",
	"Gatare",
	"Kinamba",
	"Kivomo",
	"Kizenga",
	"Rebero",
	"Rugenge",
	"Rugwiza",
	"Ruhuha",
	"Sokofi",
];

const Kabumbwe: Cell = [
	"Buye",
	"Gahararo",
	"Kabuga",
	"Kirwa",
	"Muhabura",
	"Munopfu",
	"Nunga",
	"Nyarugenge",
];

const _Mamba: Cell = [
	"Buhima",
	"Gakoma",
	"Gatovu",
	"Kamudogo",
	"Karama",
	"Kirase",
	"Mashenyi",
	"Nyarugenge",
	"Rugunga",
];

const Muyaga: Cell = [
	"Butezi",
	"Cadi",
	"Cyarwa",
	"Kabeza",
	"Kibumba",
	"Mutori",
	"Nyamirama",
	"Ruhamagariro",
	"Shyembe",
];

const Ramba: Cell = [
	"Gatare",
	"Gatoke",
	"Kayenzi",
	"Kigangazi",
	"Murama",
	"Murambi",
	"Nyiramageni",
	"Runazi",
	"Rurama",
	"Rusave",
	"Rwimvubu",
];

export const Mamba: Sector = {
	Gakoma,
	Kabumbwe,
	Mamba: _Mamba,
	Muyaga,
	Ramba,
};
