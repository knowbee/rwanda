/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rukozo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Buraro: Cell = [
	"Kabgayi",
	"Kabingo",
	"Kamiyove",
	"Kivomo",
	"Murwa",
	"Nyenyeri",
	"Rukingu",
	"Shyondwe",
];

const Bwimo: Cell = [
	"Bushyana",
	"Gatiba",
	"Gatwa",
	"Kadendegeri",
	"Kavumo",
	"Mwana",
];

const Mberuka: Cell = ["Gahwazi", "Gakubo", "Kabera", "Mataba", "Mutungo"];

const Mbuye: Cell = ["Kibare", "Mujebe", "Musave", "Nyarusebeya", "Ruhanga"];

export const Rukozo: Sector = {
	Buraro,
	Bwimo,
	Mberuka,
	Mbuye,
};
