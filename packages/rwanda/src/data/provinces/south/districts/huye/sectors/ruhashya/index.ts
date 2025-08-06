/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ruhashya
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Busheshi: Cell = [
	"Kamuhoza",
	"Kibyagira",
	"Nyabijyo",
	"Nyagatovu",
	"Umuyange",
];

const Gatovu: Cell = ["Dutare", "Karambo", "Kigoma", "Kiyanza", "Murama"];

const Karama: Cell = ["Gakoni", "Kampogo", "Nyakigezi", "Rukubiro", "Umuyinza"];

const Mara: Cell = ["Bwankusi", "Gashikiri", "Gitwa", "Karambo", "Rwamara"];

const Muhororo: Cell = [
	"Agasharu",
	"Kinziramuhindo",
	"Nyakabingo",
	"Shyara",
	"Taba",
];

const Rugogwe: Cell = ["Agasharu", "Akanyana", "Umurambi"];

const _Ruhashya: Cell = [
	"Igerero",
	"Kigarama",
	"Mbagabaga",
	"Muginga",
	"Rugarama",
	"Rwamabare",
];

export const Ruhashya: Sector = {
	Busheshi,
	Gatovu,
	Karama,
	Mara,
	Muhororo,
	Rugogwe,
	Ruhashya: _Ruhashya,
};
