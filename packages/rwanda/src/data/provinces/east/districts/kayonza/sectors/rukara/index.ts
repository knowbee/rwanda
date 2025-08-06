/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rukara
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kawangire: Cell = [
	"Butimba I",
	"Butimba II",
	"Gakenyeri",
	"Gitega",
	"Karama",
	"Kidogo",
	"Kinunga",
	"Rwempasha",
];

const _Rukara: Cell = [
	"Butimba",
	"Buyonza",
	"Gitarama",
	"Ibiza",
	"Kabuga",
	"Kamajigija",
	"Karambo I",
	"Karambo II",
	"Karubamba",
	"Kinunga I",
	"Kinunga II",
	"Mitungo",
	"Mumuri",
	"Munyinya",
	"Muzizi",
	"Nyagaharabuge",
	"Nyirarukara",
	"Uruyenzi",
];

const Rwimishinya: Cell = [
	"Akabare I",
	"Akabare II",
	"Karagari I",
	"Karagari II",
	"Kigwene I",
	"Kigwene II",
	"Kinunga I",
	"Kinunga II",
	"Mirambi I",
	"Mirambi II",
	"Mirambi III",
	"Nyarutunga I",
	"Nyarutunga II",
];

export const Rukara: Sector = {
	Kawangire,
	Rukara: _Rukara,
	Rwimishinya,
};
