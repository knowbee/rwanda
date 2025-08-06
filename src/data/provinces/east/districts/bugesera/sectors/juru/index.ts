/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Juru
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Juru: Cell = [
	"Ayabakiza",
	"Bisagara",
	"Nyamigende",
	"Rugarama",
	"Rwamakara",
	"Twabagarama",
];

const Kabukuba: Cell = [
	"Gikana",
	"Gikurazo",
	"Kabukuba",
	"Kamatongo",
	"Majanja",
	"Mbuye",
	"Rushubi",
];

const Mugorore: Cell = [
	"Cyirabo",
	"Gatora",
	"Kajevuba",
	"Mugorore",
	"Murambi",
	"Rebero",
	"Rwamurama",
	"Tabarari",
];

const Musovu: Cell = [
	"Bitega",
	"Cyabasonga",
	"Cyingaju",
	"Kabeza",
	"Nyaruhuru",
];

const Rwinume: Cell = [
	"Gisororo",
	"Kabeza",
	"Katarara",
	"Kinihira",
	"Rwimpyisi",
	"Uwimpunga",
];

export const Juru: Sector = {
	Juru: _Juru,
	Kabukuba,
	Mugorore,
	Musovu,
	Rwinume,
};
