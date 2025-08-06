/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Bungwe
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Bungwe: Cell = [
	"Bungwe",
	"Gakeri",
	"Gatenga",
	"Kinihira",
	"Nyabyondo",
	"Rweru",
	"Zaneza",
];

const Bushenya: Cell = ["Buhinga", "Bushenya", "Gifumba", "Mbuga", "Ryamayaya"];

const Mudugari: Cell = [
	"Buzaniro",
	"Kivumo",
	"Mubuga",
	"Rubayo",
	"Sangabuzi",
	"Vunga",
];

const Tumba: Cell = [
	"Byorera",
	"Karwema",
	"Mubuga",
	"Murambo",
	"Mutungo",
	"Nama",
	"Nyarukore",
	"Tumba",
];

export const Bungwe: Sector = {
	Bungwe: _Bungwe,
	Bushenya,
	Mudugari,
	Tumba,
};
