/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Matimba
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bwera: Cell = ["Bwera", "Ntoma", "Rugaga"];

const Byimana: Cell = [
	"Byimana I",
	"Byimana II",
	"Byimana III",
	"Kabuga I",
	"Kabuga II",
];

const Cyembogo: Cell = ["Byimana", "Kabeza", "Kamahoro", "Kiyovu"];

const Kagitumba: Cell = [
	"Gishara",
	"Kagera",
	"Kagitumba",
	"Kamabuye",
	"Munini",
	"Musenyi",
	"Muvumba",
	"Nziranziza",
];

const Kanyonza: Cell = ["Gakoma", "Musebeya", "Musha", "Nyampeke", "Rukundo"];

const _Matimba: Cell = [
	"Umudugudu Wa I",
	"Umudugudu Wa II",
	"Umudugudu Wa III",
	"Umudugudu Wa IV",
	"Umudugudu Wa V",
	"Umudugudu Wa VI",
	"Umudugudu Wa VII",
];

const Nyabwishongwezi: Cell = [
	"Nyabwishongwezi I",
	"Nyabwishongwezi II",
	"Nyabwishongwezi III",
];

const Rwentanga: Cell = [
	"Kagezi I",
	"Kagezi II",
	"Mitayayo I",
	"Mitayayo II",
	"Rwentanga",
];

export const Matimba: Sector = {
	Bwera,
	Byimana,
	Cyembogo,
	Kagitumba,
	Kanyonza,
	Matimba: _Matimba,
	Nyabwishongwezi,
	Rwentanga,
};
