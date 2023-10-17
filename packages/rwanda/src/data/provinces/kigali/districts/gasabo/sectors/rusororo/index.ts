/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rusororo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bisenga: Cell = ["Bisenga", "Gakenyeri", "Gasiza", "Kidogo"];

const Gasagara: Cell = [
	"Agatare",
	"Gasagara",
	"Kamasasa",
	"Rugagi",
	"Ryabazana",
];

const KabugaI: Cell = [
	"Abatangampundu",
	"Amahoro",
	"Isangano",
	"Kabeza",
	"Kalisimbi",
	"Masango",
];

const KabugaII: Cell = [
	"Bwiza",
	"Cyanamo",
	"Gatare",
	"Kamashashi",
	"Mataba",
	"Nyagakombe",
	"Ruhangare",
];

const Kinyana: Cell = ["Busenyi", "Kigabiro", "Kinyana", "Nyagisozi"];

const Mbandazi: Cell = [
	"Cyeru",
	"Karambo",
	"Kataruha",
	"Mugeyo",
	"Rugarama",
	"Samuduha",
];

const Nyagahinga: Cell = [
	"Gisharara",
	"Kabutare",
	"Kanyinya",
	"Kigarama",
	"Nyarucundura",
	"Runyonza",
	"Urumuri",
];

const Ruhanga: Cell = ["Kinyaga", "Mirama", "Nyagacyamo", "Rugende", "Ruhanga"];

export const Rusororo: Sector = {
	Bisenga,
	Gasagara,
	"Kabuga I": KabugaI,
	"Kabuga II": KabugaII,
	Kinyana,
	Mbandazi,
	Nyagahinga,
	Ruhanga,
};
