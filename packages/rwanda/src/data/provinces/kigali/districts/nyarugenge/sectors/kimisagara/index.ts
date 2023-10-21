/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kimisagara
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kamuhoza: Cell = [
	"Buhoro",
	"Busasamana",
	"Isimbi",
	"Ituze",
	"Karama",
	"Karwarugabo",
	"Kigabiro",
	"Mataba",
	"Munini",
	"Ntaraga",
	"Nunga",
	"Rurama",
	"Rutunga",
	"Tetero",
];

const Katabaro: Cell = [
	"Akamahoro",
	"Akishinge",
	"Akishuri",
	"Amahumbezi",
	"Inganzo",
	"Kigarama",
	"Mpazi",
	"Mugina",
	"Ubumwe",
	"Ubusabane",
	"Umubano",
	"Umurinzi",
	"Uruyange",
];

const _Kimisagara: Cell = [
	"Akabeza",
	"Amahoro",
	"Birama",
	"Buhoro",
	"Bwiza",
	"Byimana",
	"Gakaraza",
	"Gaseke",
	"Ihuriro",
	"Inkurunziza",
	"Karambi",
	"Kigina",
	"Kimisagara",
	"Kove",
	"Muganza",
	"Nyabugogo",
	"Nyagakoki",
	"Nyakabingo",
	"Nyamabuye",
	"Sangwa",
	"Sano",
];

export const Kimisagara: Sector = {
	Kamuhoza,
	Katabaro,
	Kimisagara: _Kimisagara,
};
