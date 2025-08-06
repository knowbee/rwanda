/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Karambo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kanyanza: Cell = [
	"Gatembe",
	"Kabuhunu",
	"Kabutare",
	"Karambi",
	"Karenge",
	"Marembo",
	"Nyiramisabike",
];

const _Karambo: Cell = [
	"Bataga",
	"Bumbeja",
	"Bushumba",
	"Cyumba",
	"Gasovu",
	"Gatare",
	"Gatorero",
	"Gishingo",
	"Kigarama",
	"Mugamba",
	"Nyiramuhimba",
	"Rwamiko",
	"Ryarurimbura",
];

const Kirebe: Cell = [
	"Bukondo",
	"Bukunga",
	"Bukweto",
	"Kabuye",
	"Kavumu",
	"Mubuga",
	"Mwiyanike",
	"Nyabigugu",
];

export const Karambo: Sector = {
	Kanyanza,
	Karambo: _Karambo,
	Kirebe,
};
