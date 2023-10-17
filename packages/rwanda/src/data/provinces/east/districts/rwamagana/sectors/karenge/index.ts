/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Karenge
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bicaca: Cell = [
	"Bicaca",
	"Cyanyirampazi",
	"Cyarugaju",
	"Kabeza",
	"Kajevuba",
	"Karuyenzi",
	"Runzenze",
];

const Byimana: Cell = ["Byimana", "Karambo", "Kiyaya", "Rukori"];

const Kabasore: Cell = ["Ipide", "Kabasore", "Migamba", "Nyagatovu", "Ruvomo"];

const Kangamba: Cell = [
	"Byimana",
	"Kagese",
	"Kangamba",
	"Kimarambasa",
	"Nkongi",
];

const _Karenge: Cell = ["Bwiza", "Karenge", "Ntebe", "Rebero"];

const Nyabubare: Cell = [
	"Feri",
	"Kanyangese",
	"Nyabubare",
	"Rwinka",
	"Ryamugabo",
];

const Nyamatete: Cell = [
	"Cyerwa",
	"Mutabo",
	"Ndengo",
	"Nyagasenyi",
	"Nyakabuye",
	"Nyamatete",
];

export const Karenge: Sector = {
	Bicaca,
	Byimana,
	Kabasore,
	Kangamba,
	Karenge: _Karenge,
	Nyabubare,
	Nyamatete,
};
