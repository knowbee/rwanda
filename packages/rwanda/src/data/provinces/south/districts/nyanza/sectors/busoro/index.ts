/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Busoro
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gitovu: Cell = [
	"Gitega",
	"Kabeza",
	"Kayenzi",
	"Muhindo",
	"Musumba",
	"Nazareti",
	"Nyacyonga",
	"Nyagasambu",
	"Rushoka",
];

const Kimirama: Cell = [
	"Gitwa",
	"Kimirama",
	"Kireranyana",
	"Ndamira",
	"Nyamiyonga",
	"Nyarugenge",
	"Rugarama",
];

const Masangano: Cell = [
	"Busoro",
	"Bweramana",
	"Gikombe",
	"Masangano",
	"Murambi",
	"Nyarugunga",
	"Runyonza",
	"Shinga",
];

const Munyinya: Cell = ["Kagarama", "Karambi", "Kigali", "Kivugiza", "Rwara"];

const Rukingiro: Cell = [
	"Cyamugani",
	"Cyuriro",
	"Gasambu",
	"Runazi",
	"Rwanamiza",
	"Rwangoga",
];

const Shyira: Cell = [
	"Gahogo",
	"Kinkanga",
	"Nyamoyaga",
	"Rucyamo",
	"Rusharu",
	"Saruduha",
];

export const Busoro: Sector = {
	Gitovu,
	Kimirama,
	Masangano,
	Munyinya,
	Rukingiro,
	Shyira,
};
