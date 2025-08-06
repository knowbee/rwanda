/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Tabagwe
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gishuro: Cell = [
	"Gatoma",
	"Kaborogota",
	"Kayanja",
	"Nyagatare",
	"Nyasine",
];

const Gitengure: Cell = [
	"Bitibyoma",
	"Gitengure",
	"Kayigiro",
	"Nshuri",
	"Nyagasigati",
];

const Nkoma: Cell = [
	"Agafaru",
	"Ibare",
	"Kabeza",
	"Kaduha",
	"Kigando",
	"Mutozo",
	"Nkoma",
	"Rugabano",
	"Runyinya",
];

const Nyabitekeri: Cell = [
	"Kabeza",
	"Kabirizi",
	"Kamate",
	"Kangoma",
	"Kiyovu",
	"Munini",
];

const Nyagatoma: Cell = [
	"Agafaro",
	"Agasongero",
	"Akajevuba",
	"Kabusunzu",
	"Mutungisa",
	"Runyeri",
];

const Shonga: Cell = [
	"Gikoba",
	"Nyakanoni",
	"Nyakigando",
	"Rwubuzizi",
	"Shonga",
];

const _Tabagwe: Cell = [
	"Gakamba",
	"Gasheshe",
	"Kagarama",
	"Nyenyeri",
	"Tabagwe",
];

export const Tabagwe: Sector = {
	Gishuro,
	Gitengure,
	Nkoma,
	Nyabitekeri,
	Nyagatoma,
	Shonga,
	Tabagwe: _Tabagwe,
};
