/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Gahanga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Gahanga: Cell = [
	"Gahanga",
	"Gatare",
	"Gatovu",
	"Rinini",
	"Rwinanka",
	"Ubumwe",
];

const Kagasa: Cell = [
	"Kabeza",
	"Kabidandi",
	"Kiyanja",
	"Nyacyonga",
	"Nyagafunzo",
	"Nyakuguma",
	"Rugando II",
];

const Karembure: Cell = [
	"Amahoro",
	"Bigo",
	"Kabeza",
	"Kamuyinga",
	"Karembure",
	"Kimena",
	"Mubuga",
	"Rwamaya",
];

const Murinja: Cell = [
	"Kampuro",
	"Kigasa",
	"Mashyiga",
	"Nyabigugu",
	"Nyamuharaza",
	"Rukore",
	"Runyoni",
	"Sabununga",
];

const Nunga: Cell = [
	"Kigarama",
	"Kinyana",
	"Mugendo",
	"Nunga I",
	"Nunga II",
	"Rugasa",
];

const Rwabutenge: Cell = [
	"Gahosha",
	"Gashubi",
	"Kaboshya",
	"Karambo",
	"Rebero",
	"Rugando I",
];

export const Gahanga: Sector = {
	Gahanga: _Gahanga,
	Kagasa,
	Karembure,
	Murinja,
	Nunga,
	Rwabutenge,
};
