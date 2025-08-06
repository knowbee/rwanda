/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rwimbogo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { Cell, Sector } from "@rwanda/types";

const Karenge: Cell = [
	"Batura",
	"Gatanga",
	"Gishoma",
	"Makambi",
	"Nyabihanga",
	"Ruzeneko",
];

const Muhehwe: Cell = [
	"Kibare",
	"Murama",
	"Musigiti",
	"Nyarusebeya",
	"Renga",
	"Rungunga",
];

const Mushaka: Cell = [
	"Gakombe",
	"Gatambamo",
	"Kabajoba",
	"Kamabuye",
	"Nyagashora",
];

const Rubugu: Cell = ["Gatare", "Ntenyi", "Nyange", "Rukombe"];

const Ruganda: Cell = ["Cyunguriro", "Musumba", "Rubamba", "Rubuye", "Ruhinga"];

export const Rwimbogo: Sector = {
	Karenge,
	Muhehwe,
	Mushaka,
	Rubugu,
	Ruganda,
};
