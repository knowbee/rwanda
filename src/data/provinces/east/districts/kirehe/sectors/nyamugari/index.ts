/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nyamugari
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bukora: Cell = [
	"Bukinanyana",
	"Bukora",
	"Busasamana",
	"Bweramana",
	"Kabuga",
	"Maranyundo",
	"Mudahunga",
	"Mumararungu",
	"Mushirarungu",
	"Mwima",
	"Nyabiyenzi",
	"Remanyundo",
];

const Kagasa: Cell = [
	"Bwiza",
	"Ituze",
	"Kagasa",
	"Kamabuye",
	"Kameya",
	"Mataba",
	"Nyabayama",
	"Nyakariba",
	"Nyamirama",
	"Nyarurembo",
	"Rebero",
	"Urugwiro",
];

const Kazizi: Cell = [
	"Amahoro",
	"Byimana",
	"Gahomvu",
	"Gasabo",
	"Gasetsa",
	"Gashanga",
	"Jyambere",
	"Kabwayi",
	"Mucyo",
	"Nyenyeri",
	"Tetero",
	"Ururembo",
];

const Kiyanzi: Cell = [
	"Kabungeri",
	"Kabuye",
	"Kacyiru",
	"Kagera",
	"Kamarashavu",
	"Karambi",
	"Karehe",
	"Karembo",
	"Kinamba",
	"Matare",
	"Mitako",
	"Murambi",
	"Muyinza",
	"Nyarwamura",
	"Remera",
	"Rusumo",
];

const _Nyamugari: Cell = [
	"Amahoro",
	"Gasenyi",
	"Ihuriro",
	"Isangano",
	"Kabeza",
	"Kamugarura",
	"Kimigisha",
	"Munini",
	"Muramba",
	"Nyagahama",
	"Nyamugari Centre",
	"Rama",
	"Rebero",
	"Rurembo",
	"Rusozi",
	"Ubumwe",
	"Umubano",
	"Umunezero",
];

export const Nyamugari: Sector = {
	Bukora,
	Kagasa,
	Kazizi,
	Kiyanzi,
	Nyamugari: _Nyamugari,
};
