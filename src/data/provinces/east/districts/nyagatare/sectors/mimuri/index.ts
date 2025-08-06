/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mimuri
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bibare: Cell = [
	"Bibare",
	"Karukwanzi",
	"Nyakagenge",
	"Nyamafura",
	"Nyaruziba",
	"Rwimirama",
	"Urugano",
	"Urutambi",
];

const Gakoma: Cell = [
	"Gakoma",
	"Gisenyi",
	"Kanyinya",
	"Kumusaraba",
	"Nyagahandagaza",
	"Nyarwina",
	"Rusororo",
];

const Mahoro: Cell = [
	"Cyabwana",
	"Gitwe",
	"Iterambere",
	"Kabeza",
	"Mizero",
	"Nyabugogo",
	"Nyagahita",
	"Rebero",
	"Rubumba",
	"Shenga",
];

const _Mimuri: Cell = [
	"Byimana",
	"Indahemuka",
	"Isangano",
	"Karukwanzi",
	"Rebero",
	"Rwimirama",
];

const Rugari: Cell = [
	"Amahoro",
	"Isangano",
	"Nteko",
	"Rebero",
	"Ubumwe",
	"Urumuri",
];

export const Mimuri: Sector = {
	Bibare,
	Gakoma,
	Mahoro,
	Mimuri: _Mimuri,
	Rugari,
};
