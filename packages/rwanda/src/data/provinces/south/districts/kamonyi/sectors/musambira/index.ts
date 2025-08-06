/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Musambira
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Buhoro: Cell = ["Busasamana", "Gihembe", "Gihogwe", "Reramacu"];

const Cyambwe: Cell = [
	"Bimomwe",
	"Gacaca",
	"Giheta",
	"Rugarama",
	"Ruvumura",
	"Shaka",
];

const Karengera: Cell = [
	"Kamayanja",
	"Mbari",
	"Nyarusange",
	"Nyarutovu",
	"Rubanga",
];

const Kivumu: Cell = [
	"Gahondo",
	"Gitega",
	"Munazi",
	"Nyagisozi",
	"Nyerenga",
	"Wimana",
];

const Mpushi: Cell = [
	"Gitwiko",
	"Kabere",
	"Kamashashi",
	"Kingoma",
	"Nyarubuye",
	"Nyarurama",
];

const Rukambura: Cell = ["Bitsibo", "Ngoma", "Nkomane", "Nyamirembe"];

export const Musambira: Sector = {
	Buhoro,
	Cyambwe,
	Karengera,
	Kivumu,
	Mpushi,
	Rukambura,
};
