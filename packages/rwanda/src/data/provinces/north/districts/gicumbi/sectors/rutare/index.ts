/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rutare
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bikumba: Cell = [
	"Karugeyo",
	"Kintaganirwa",
	"Marembo",
	"Matyazo",
	"Nyabisindu",
];

const Gasharu: Cell = [
	"Buyegero",
	"Kabagabo",
	"Kabusunzu",
	"Kagarama",
	"Rwimbogo",
	"Yogi",
];

const Gatwaro: Cell = ["Bureranyana", "Gashinya", "Kabira", "Kanaba"];

const Kigabiro: Cell = [
	"Kabuye",
	"Munini",
	"Nyakabingo",
	"Nyakavunga",
	"Rugarama",
];

const Munanira: Cell = ["Bushokanyambo", "Gasharu", "Kirwa", "Mataba", "Ruti"];

const Nkoto: Cell = [
	"Bariza",
	"Bwangamwanda",
	"Murehe",
	"Nyagatoma",
	"Nyansenge",
];

export const Rutare: Sector = {
	Bikumba,
	Gasharu,
	Gatwaro,
	Kigabiro,
	Munanira,
	Nkoto,
};
