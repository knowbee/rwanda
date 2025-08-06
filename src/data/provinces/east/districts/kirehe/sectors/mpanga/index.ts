/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mpanga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bwiyorere: Cell = [
	"Bihembe",
	"Cyimparage",
	"Gisenyi",
	"Kacyiru",
	"Kamarashavu",
	"Kangarame",
	"Nyagasenyi",
	"Nyakabande",
	"Ruhama",
];

const Kankobwa: Cell = ["Kankobwa", "Murundi", "Nyamiyaga", "Remera", "Rusha"];

const _Mpanga: Cell = [
	"Kabuye I",
	"Kabuye II",
	"Mpanga",
	"Nyagatovu",
	"Rurambi I",
	"Rurambi II",
];

const Mushongi: Cell = [
	"Gitoma",
	"Kayanga",
	"Mishenyi",
	"Mushongi",
	"Ngugu I",
	"Ngugu II",
];

const Nasho: Cell = [
	"Agasasa",
	"Busasamana I",
	"Busasamana II",
	"Ibanda",
	"Mutwe",
	"Nyabubare I",
	"Nyabubare II",
	"Nyawera I",
	"Nyawera II",
	"Pilote",
];

const Nyakabungo: Cell = [
	"Cyamuhabura",
	"Gikushya",
	"Gitega",
	"Isenga",
	"Kabuga",
	"Nyagatovu",
	"Nyakabungo",
	"Rudandi",
	"Rushenyi",
];

const Rubaya: Cell = [
	"Akinzuki",
	"Byimana",
	"Gacenshero",
	"Kabeza",
	"Mumpinga",
	"Murambi",
	"Rubaya",
	"Rukonji",
	"Rushonga",
];

export const Mpanga: Sector = {
	Bwiyorere,
	Kankobwa,
	Mpanga: _Mpanga,
	Mushongi,
	Nasho,
	Nyakabungo,
	Rubaya,
};
