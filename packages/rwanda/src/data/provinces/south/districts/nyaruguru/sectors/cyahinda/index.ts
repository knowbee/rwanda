/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Cyahinda
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Coko: Cell = ["Agasharu", "Coko", "Gitara", "Ruko"];

const _Cyahinda: Cell = [
	"Cyahinda",
	"Cyanwa",
	"Kinyaga",
	"Saburunduru",
	"Rutega",
];

const Gasasa: Cell = ["Gasasa", "Kavumu", "Mugari", "Ryamarembo"];

const Muhambara: Cell = [
	"Busanza",
	"Byanone",
	"Gasharu",
	"Kubitiro",
	"Nyagatovu",
	"Rebero",
];

const Rutobwe: Cell = [
	"Kanyinya",
	"Kibumba",
	"Ngobyi",
	"Rubona",
	"Rugarama",
	"Rutobwe",
];

export const Cyahinda: Sector = {
	Coko,
	Cyahinda: _Cyahinda,
	Gasasa,
	Muhambara,
	Rutobwe,
};
