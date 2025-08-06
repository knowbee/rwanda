/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Masoro
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kabuga: Cell = [
	"Gisiza",
	"Kanunga",
	"Karambi",
	"Kigarama",
	"Nyakibande",
	"Nyakizu",
	"Rubaya",
];

const Kigarama: Cell = ["Gacyamo", "Marenge", "Nyakabungo", "Rukurazo"];

const Kivugiza: Cell = ["Gasenga", "Musega", "Nyarurembo", "Rebero"];

const Nyamyumba: Cell = ["Kabeza", "Kabuga", "Kigomwa", "Marembo", "Rusenyi"];

const Shengampuli: Cell = [
	"Agasharu",
	"Amataba",
	"Nyabinyana",
	"Rusine",
	"Umubuga",
	"Umutagata",
];

export const Masoro: Sector = {
	Kabuga,
	Kigarama,
	Kivugiza,
	Nyamyumba,
	Shengampuli,
};
