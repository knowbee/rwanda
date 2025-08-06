/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mwulire
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bicumbi: Cell = [
	"Bicumbi",
	"Gasharu",
	"Karama",
	"Manene",
	"Nyagihanga",
	"Rwimbogo",
	"Sabusaro",
];

const Bushenyi: Cell = [
	"Byange",
	"Kabahima",
	"Kangaruye",
	"Rebero",
	"Rubiha",
	"Ruseke",
];

const _Mwulire: Cell = [
	"Cyome",
	"Gisanza",
	"Akagarama",
	"Kigabiro",
	"Mpinga",
	"Munini I",
	"Munini II",
	"Rebero",
];

const Ntunga: Cell = [
	"Cyimbazi",
	"Kabacuzi",
	"Kadasumbwa",
	"Karuzigura",
	"Kiyovu",
	"Nkira",
	"Ntunga",
	"Rugarama",
	"Rugenge",
];

export const Mwulire: Sector = {
	Bicumbi,
	Bushenyi,
	Mwulire: _Mwulire,
	Ntunga,
};
