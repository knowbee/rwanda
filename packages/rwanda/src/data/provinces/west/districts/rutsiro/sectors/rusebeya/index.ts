/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rusebeya
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { Cell, Sector } from "@rwanda/types";

const Kabona: Cell = [
	"Byiniro",
	"Kibara",
	"Munini",
	"Murengeri",
	"Ntereye",
	"Nyagasambu",
	"Rusheshi",
	"Rwamvura",
];

const Mberi: Cell = [
	"Bungwe",
	"Gakeri",
	"Gashihe",
	"Gatenga",
	"Gihinga",
	"Kabeza",
	"Kacyiru",
	"Kagano",
	"Marimba",
	"Ruganda",
	"Rurimba",
];

const Remera: Cell = [
	"Bihira",
	"Bweramana",
	"Gahunga",
	"Kabarirwa",
	"Kiyanja",
	"Nturo",
	"Ruhuha",
	"Rurambo",
	"Shyembe",
];

const Ruronde: Cell = ["Gisozi", "Kigali", "Kirumbi", "Mubuga", "Nyamibombwe"];

export const Rusebeya: Sector = {
	Kabona,
	Mberi,
	Remera,
	Ruronde,
};
