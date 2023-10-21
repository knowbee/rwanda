/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Katabagemu
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bayigaburire: Cell = [
	"Agasasa",
	"Bingaro",
	"Byimana",
	"Gikandura",
	"Igikorosi",
	"Kibuye",
	"Nyagahandagaza",
];

const Kaduha: Cell = [
	"Kaduha I",
	"Kaduha II",
	"Kanyinya",
	"Nyabiyonza",
	"Urumuri",
];

const Kanyeganyege: Cell = ["Kabaya", "Kabeza", "Kanyeganyege", "Rebero"];

const _Katabagemu: Cell = [
	"Gashenyi",
	"Kagogo",
	"Kajevuba",
	"Kigarama",
	"Nyabwunyu",
	"Umunanira",
];

const Kigarama: Cell = [
	"Kanguka",
	"Kibuye",
	"Kigarama",
	"Rebero",
	"Shirimpumu",
];

const Nyakigando: Cell = [
	"Byimana",
	"Kabeza",
	"Kamutara",
	"Ntoma",
	"Nyakigando I",
	"Nyakigando II",
	"Rebero",
];

const Rubira: Cell = ["Igitego", "Isangano", "Kanyesunzu", "Rubira"];

const Rugazi: Cell = ["Akabira", "Burera", "Ishyirahamwe", "Rwagisangangabo"];

const Rutoma: Cell = ["Buyugi", "Kabeza", "Mahoro", "Rutoma", "Ryaruganzu"];

export const Katabagemu: Sector = {
	Bayigaburire,
	Kaduha,
	Kanyeganyege,
	Katabagemu: _Katabagemu,
	Kigarama,
	Nyakigando,
	Rubira,
	Rugazi,
	Rutoma,
};
