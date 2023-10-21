/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Hindiro
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gatare: Cell = ["Buyungu", "Kigarama", "Muhororo", "Nyagasozi"];

const Gatega: Cell = [
	"Cyahafi",
	"Gapfura",
	"Gasharu",
	"Gasovu",
	"Huriro",
	"Kabenge",
	"Kagarama",
	"Rutsiro",
	"Sereri",
];

const Kajinge: Cell = ["Bwoga", "Kamana", "Rugari", "Rugeshi"];

const Marantima: Cell = [
	"Kagugu",
	"Karambo",
	"Kiribata",
	"Munyegera",
	"Muvugangoma",
	"Rugarika",
];

const Rugendabari: Cell = ["Kabuga", "Kamonyi", "Mituga", "Mukoni"];

const Runyinya: Cell = ["Marembo", "Murambi", "Rugarambiro", "Rwamiko"];

export const Hindiro: Sector = {
	Gatare,
	Gatega,
	Kajinge,
	Marantima,
	Rugendabari,
	Runyinya,
};
