/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Muganza
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyumba: Cell = [
	"Byiza",
	"Cyumba",
	"Gitwa",
	"Kabacuzi",
	"Kamabango",
	"Musatsi",
	"Mutorerwa",
	"Nyagatovu",
	"Nyiraburiba",
	"Rugantete",
	"Rutare",
	"Rwimisambi",
];

const _Muganza: Cell = [
	"Agasharu",
	"Agatongati",
	"Amajuri",
	"Cyanamo",
	"Gitisi",
	"Rwamugoyi",
	"Rwinkuba",
	"Ubusenyi",
	"Urusaro",
];

const Remera: Cell = [
	"Agakurwe",
	"Agaseke",
	"Akarambo",
	"Butare",
	"Akajyanama",
	"Taba",
];

const Rwamiko: Cell = [
	"Agasharu",
	"Agatovu",
	"Akarubumba",
	"Akimirama",
	"Ubuseruka",
	"Gako",
	"Impinga",
	"Kabahongo",
	"Kiberengeri",
	"Kidaturwa",
	"Kigina",
	"Kiyogoro",
	"Mbehe",
	"Nyagatovu",
	"Nyamagana",
	"Ryarumenangiga",
	"Umunazi",
];

const Saga: Cell = [
	"Akabacuzi",
	"Bucaya",
	"Buhiza",
	"Duwane",
	"Impinga",
	"Isangano",
	"Kanto I",
	"Kanto II",
	"Nyabigugu",
	"Nyagafumberi",
	"Nyakagezi",
	"Nyamiheto I",
	"Nyamiheto II",
	"Rwinkuba",
];

export const Muganza: Sector = {
	Cyumba,
	Muganza: _Muganza,
	Remera,
	Rwamiko,
	Saga,
};
