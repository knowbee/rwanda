/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kibirizi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Duwani: Cell = [
	"Buhoro",
	"Burashi",
	"Cyahafi",
	"Duwani",
	"Karambo",
	"Kinteko",
	"Kivumu",
	"Mubuga",
	"Murambi",
	"Rwuya",
	"Taba",
];

const _Kibirizi: Cell = [
	"Burashi",
	"Gasagara",
	"Kabakobwa",
	"Kigarama",
	"Mareba",
	"Mbeho",
	"Ruhuha",
	"Shenyeri",
	"Torero",
];

const Muyira: Cell = [
	"Agahumiro",
	"Agasharu",
	"Akagarama",
	"Akayohani",
	"Akirasaniro",
	"Impinga",
	"Nyagasozi",
	"Nyagisasa",
	"Rwinzuki",
	"Itaba",
	"Zihare",
];

const Ruturo: Cell = [
	"Agatongati",
	"Akabuhuzu",
	"Akamuzenga",
	"Akarugaju",
	"Impinga",
	"Kabagoti",
	"Karengera",
	"Kigarama",
	"Ntobo",
	"Nyabununi",
	"Rubazi",
];

export const Kibirizi: Sector = {
	Duwani,
	Kibirizi: _Kibirizi,
	Muyira,
	Ruturo,
};
