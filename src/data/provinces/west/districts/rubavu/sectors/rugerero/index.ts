/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rugerero
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { Cell, Sector } from "@rwanda/types";

const Basa: Cell = [
	"Buranga",
	"Gahinga",
	"Kabeza",
	"Kanyukiro",
	"Mukumya",
	"Nyaruhengeri",
	"Tagaza",
];

const Gisa: Cell = [
	"Gatangare",
	"Gihira",
	"Gisa",
	"Kabashanja",
	"Kaniga",
	"Ndobogo",
	"Rusongati",
	"Shwemu",
];

const Kabilizi: Cell = [
	"Amahoro",
	"Gakoro",
	"Nkama",
	"Nyamyiri",
	"Ruhangiro",
	"Rukukumbo",
];

const Muhira: Cell = [
	"Gatebe I",
	"Gatebe II",
	"Gitebe I",
	"Gitebe II",
	"Kasonga",
	"Kizi",
	"Rusamaza",
];

const _Rugerero: Cell = [
	"Kabarora",
	"Kibaya",
	"Nyantomvu",
	"Nyarurembo",
	"Rukingo",
	"Ruranga",
];

const Rushubi: Cell = [
	"Busheke",
	"Butangi",
	"Butumba",
	"Kabashara",
	"Kazika",
	"Kimina",
	"Muhingo",
];

const Rwaza: Cell = [
	"Byima",
	"Cyanika",
	"Gashovu",
	"Gateko",
	"Kiroji",
	"Mushoko",
	"Rebero",
	"Rohero",
	"Rucyamo",
	"Rwaza",
];

export const Rugerero: Sector = {
	Basa,
	Gisa,
	Kabilizi,
	Muhira,
	Rugerero: _Rugerero,
	Rushubi,
	Rwaza,
};
