/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kigali
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Kigali: Cell = [
	"Akirwanda",
	"Gisenga",
	"Kadobogo",
	"Kagarama",
	"Kibisogi",
	"Muganza",
	"Murama",
	"Rubuye",
	"Ruhango",
	"Ryasharangabo",
];

const Mwendo: Cell = [
	"Agakomeye",
	"Akagugu",
	"Amahoro",
	"Amajyambere",
	"Birambo",
	"Isangano",
	"Kanyabami",
	"Karambo",
	"Mwendo",
	"Ruhuha",
	"Ubuzima",
	"Umutekano",
];

const Nyabugogo: Cell = [
	"Gakoni",
	"Gatare",
	"Giticyinyoni",
	"Kadobogo",
	"Kamenge",
	"Karama",
	"Kiruhura",
	"Nyabikoni",
	"Nyabugogo",
	"Ruhondo",
];

const Ruriba: Cell = [
	"Misibya",
	"Nyabitare",
	"Ruhango",
	"Ruharabuge",
	"Ruriba",
	"Ruzigimbogo",
	"Ryamakomari",
	"Tubungo",
];

const Rwesero: Cell = [
	"Akanyamirambo",
	"Akinama",
	"Makaga",
	"Musimba",
	"Ruhogo",
	"Rwesero",
	"Rweza",
	"Vuganyana",
];

export const Kigali: Sector = {
	Kigali: _Kigali,
	Mwendo,
	Nyabugogo,
	Ruriba,
	Rwesero,
};
