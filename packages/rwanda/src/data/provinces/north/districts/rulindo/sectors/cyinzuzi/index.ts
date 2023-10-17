/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Cyinzuzi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Budakiranya: Cell = [
	"Gatagara",
	"Gihinga",
	"Kamatongo",
	"Kanyoni",
	"Kavumu",
	"Kigarama",
	"Nyakabanga",
	"Rugaragara",
];

const Migendezo: Cell = [
	"Cyanya",
	"Gitabage",
	"Karambo",
	"Marembo",
	"Ngabitsinze",
	"Nyamugali",
	"Remera",
	"Rusagara",
];

const Rudogo: Cell = [
	"Gasekabuye",
	"Gaseke",
	"Gasizi",
	"Gihuke",
	"Kirambo",
	"Munini",
	"Munoga",
	"Musenyi",
];

export const Cyinzuzi: Sector = {
	Budakiranya,
	Migendezo,
	Rudogo,
};
