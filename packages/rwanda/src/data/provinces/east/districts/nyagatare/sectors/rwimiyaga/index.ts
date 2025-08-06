/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rwimiyaga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gacundezi: Cell = [
	"Bugaragara",
	"Gacundezi I",
	"Gacundezi II",
	"Rukundo I",
	"Rukundo II",
	"Rukundo III",
];

const Kabeza: Cell = [
	"Gatovu",
	"Kabeza",
	"Kabeza Centre",
	"Kavumu",
	"Rugarama",
	"Rukiri I",
	"Rukiri II",
];

const Kirebe: Cell = ["Gatebe I", "Gatebe II", "Kirebe", "Rukindo"];

const Ntoma: Cell = ["Gashwenu", "Kibuye", "Kimaramu", "Nyampire", "Rwembogo"];

const Nyarupfubire: Cell = [
	"Kamagiri",
	"Nyakagando I",
	"Nyakagando II",
	"Nyarupfubire I",
	"Nyarupfubire II",
	"Rwimiyaga I",
	"Rwimiyaga II",
];

const Nyendo: Cell = ["Isangano", "Nyamirama", "Rebero", "Remera"];

const Rutungu: Cell = [
	"Bwera",
	"Cyamunyana",
	"Gakagati I",
	"Gakagati II",
	"Rubira",
];

const _Rwimiyaga: Cell = [
	"Byimana",
	"Gakoma",
	"Kizungu",
	"Mahoro",
	"Muyange",
	"Rebero",
	"Rwinyange",
];

export const Rwimiyaga: Sector = {
	Gacundezi,
	Kabeza,
	Kirebe,
	Ntoma,
	Nyarupfubire,
	Nyendo,
	Rutungu,
	Rwimiyaga: _Rwimiyaga,
};
