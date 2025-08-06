/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Shangi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Burimba: Cell = [
	"Busangati",
	"Gikombe",
	"Kabahande",
	"Nyakagano",
	"Nyakibingo",
	"Rubayi",
	"Rukohwa",
];

const Mataba: Cell = [
	"Gabiro",
	"Gasumo",
	"Mataba",
	"Mpishyi",
	"Ruzinga",
	"Rwabagoyi",
];

const Mugera: Cell = [
	"Bweranyange",
	"Karugero",
	"Karuhatana",
	"Karuhigi",
	"Kavo",
	"Rwonga",
];

const Nyamugari: Cell = [
	"Amahoro",
	"Bitaba",
	"Kabare",
	"Mpande",
	"Nyamateke",
	"Nyamihondo",
	"Rubavu",
];

const _Shangi: Cell = [
	"Bugomba",
	"Busasamana",
	"Gasharu",
	"Kabere",
	"Karambo",
	"Ngoboka",
	"Taba",
];

export const Shangi: Sector = {
	Burimba,
	Mataba,
	Mugera,
	Nyamugari,
	Shangi: _Shangi,
};
