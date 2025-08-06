/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nyamata
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kanazi: Cell = [
	"Bihari",
	"Cyeru",
	"Gitovu",
	"Kagirazina",
	"Musagara",
	"Nyarugati I",
	"Nyarugati II",
	"Rugando",
	"Sumbure",
];

const Kayumba: Cell = [
	"Gatare",
	"Karambi",
	"Kayenzi",
	"Murambi",
	"Nyagatovu",
	"Nyakwibereka",
	"Nyiramatuntu",
	"Rwanza",
];

const Maranyundo: Cell = [
	"Gahembe",
	"Gisunzu",
	"Mukoma",
	"Muyange",
	"Rugarama",
	"Rusagara",
];

const Murama: Cell = [
	"Bishweshwe",
	"Gataraga",
	"Gatare",
	"Kasebigege",
	"Kivugiza",
	"Kiyogoma",
	"Mwesa",
	"Rucucu",
	"Ruhanga",
	"Rutobotobo",
	"Rutukura",
];

const NyamataYUmujyi: Cell = [
	"Gasenga I",
	"Gasenga II",
	"Gatare I",
	"Gatare II",
	"Gatare III",
	"Nyabivumu",
	"Nyamata I",
	"Nyamata II",
	"Rugarama I",
	"Rugarama II",
	"Rugarama III",
	"Rwakibirizi I",
	"Rwakibirizi II",
];

export const Nyamata: Sector = {
	Kanazi,
	Kayumba,
	Maranyundo,
	Murama,
	"Nyamata y'Umujyi": NyamataYUmujyi,
};
