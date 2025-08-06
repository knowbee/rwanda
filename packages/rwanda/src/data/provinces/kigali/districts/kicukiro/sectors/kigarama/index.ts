/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kigarama
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bwerankori: Cell = [
	"Gakokobe",
	"Gatare",
	"Imena",
	"Ituze",
	"Kabutare",
	"Kimisange",
	"Nyenyeri",
	"Ubumenyi",
];

const Karugira: Cell = [
	"Ibuga",
	"Ihuriro",
	"Murambi",
	"Rutoki",
	"Taba",
	"Terimbere",
	"Ubutare",
	"Umurimo",
];

const _Kigarama: Cell = [
	"Akimana",
	"Amahoro",
	"Byimana",
	"Indatwa",
	"Ingenzi",
	"Kabeza",
	"Karurayi",
	"Mataba",
	"Umucyo",
];

const Nyarurama: Cell = [
	"Kamabuye",
	"Karuyenzi",
	"Kivu",
	"Rebero",
	"Twishorezo",
	"Zuba",
];

const Rwampara: Cell = [
	"Amajyambere",
	"Bwiza",
	"Nyarurembo",
	"Ubumwe",
	"Umutekano",
	"Urumuri",
	"Uwateke",
];

export const Kigarama: Sector = {
	Bwerankori,
	Karugira,
	Kigarama: _Kigarama,
	Nyarurama,
	Rwampara,
};
