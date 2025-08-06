/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Jarama
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Ihanika: Cell = [
	"Irebero",
	"Kabonero",
	"Kamapfizi",
	"Kivugiza",
	"Nyamugari",
	"Umuka",
];

const _Jarama: Cell = [
	"Abiyunze",
	"Akabeza",
	"Dufatanye",
	"Duterimbere",
	"Irarire",
	"Twizerane",
	"Ubumwe",
];

const Karenge: Cell = [
	"Akabuga",
	"Akagoma",
	"Akajevuba",
	"Gisoko",
	"Kanombe",
	"Karenge",
	"Kavumu",
	"Korandebe",
	"Nyamirambo",
	"Nyarurembo",
	"Rusenyi",
	"Shirinyota",
];

const Kibimba: Cell = [
	"Akabira",
	"Akaziba",
	"Cyahafi",
	"Ibabiri",
	"Murama",
	"Uruhuha",
	"Urukomo",
];

const Kigoma: Cell = [
	"Icyurusambu",
	"Iramiro",
	"Kigoma",
	"Meraneza",
	"Mubaha",
	"Ramba",
	"Remera",
	"Vunga",
];

export const Jarama: Sector = {
	Ihanika,
	Jarama: _Jarama,
	Karenge,
	Kibimba,
	Kigoma,
};
