/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Huye
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Muyogoro: Cell = [
	"Agacyamu",
	"Agasharu",
	"Akagarama",
	"Akaruzi",
	"Kigarama",
	"Munini",
	"Nkamatira",
	"Nyarutovu",
	"Nyarwumba",
	"Rugerero",
	"Rwankoni",
	"Rwaza",
	"Shuni",
];

const Nyakagezi: Cell = [
	"Gatongati",
	"Kamutima",
	"Karuhinda",
	"Kigarama",
	"Kinyana",
	"Kinyinya",
	"Mbuba",
	"Munanira",
	"Nyarunazi",
	"Rugarama",
];

const Rukira: Cell = [
	"Agacyamu",
	"Agahenerezo",
	"Agakombe",
	"Agasharu",
	"Gitwa",
	"Kanazi",
	"Kaseramba",
	"Kubutare",
	"Magonde",
	"Nyagasambu",
	"Nyanza",
	"Rugarama",
	"Sabaderi",
];

const Sovu: Cell = [
	"Gako",
	"Gasongati",
	"Gikombe",
	"Kabagendera",
	"Karambo",
	"Karuhayi",
	"Kigarama",
	"Ngobagoba",
	"Rwezamenyo",
];

export const Huye: Sector = {
	Muyogoro,
	Nyakagezi,
	Rukira,
	Sovu,
};
