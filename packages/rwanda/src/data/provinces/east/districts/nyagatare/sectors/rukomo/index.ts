/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rukomo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gahurura: Cell = [
	"Amahoro",
	"Busasamana",
	"Isangano",
	"Nomero I",
	"Rambura",
	"Ruyonza",
	"Ubumwe",
	"Urugwiro",
	"Urukundo",
	"Urumuri",
];

const Gashenyi: Cell = [
	"Agasasa",
	"Bukamba",
	"Gashenyi",
	"Gisenyi",
	"Huriro",
	"Isangano",
	"Kiyovu",
	"Murore",
	"Nyamirambo",
	"Rebero",
	"Rukomo",
	"Rurembo",
];

const Nyakagarama: Cell = [
	"Akamashama",
	"Akamasheka",
	"Amahoro",
	"Amizero",
	"Gashenyi",
	"Gashura",
	"Isangano",
	"Karugondo",
	"Kayenzi",
	"Musenyi",
	"Nyakagarama",
	"Nyamworoma",
];

const RukomoII: Cell = [
	"Amahoro",
	"Berwa",
	"Isangano",
	"Kabeza",
	"Mwurirwa",
	"Nyange",
	"Nyarubuye",
	"Nyarurama",
	"Rebero",
	"Rugabano",
];

const Rurenge: Cell = [
	"Akajuka",
	"Benishyaka",
	"Biryogo",
	"Kabeza",
	"Kabusunzu",
	"Nyabwunyu",
	"Nyamirambo",
	"Rurenge",
	"Rushashi",
	"Rwiju",
];

export const Rukomo: Sector = {
	Gahurura,
	Gashenyi,
	Nyakagarama,
	"Rukomo II": RukomoII,
	Rurenge,
};
