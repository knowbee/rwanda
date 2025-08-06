/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ngeruka
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gihembe: Cell = [
	"Buhara",
	"Kabaya",
	"Kabuye",
	"Kadebu",
	"Kagasa",
	"Karambo",
	"Kirasaniro",
	"Kururama",
	"Nyakariba",
	"Nyarubande",
	"Rusagara",
	"Rutare",
	"Ruzinge",
	"Shitwe",
];

const Murama: Cell = [
	"Agashyamba",
	"Bishenyi",
	"Fatinkanda",
	"Gakurazo",
	"Gatanga",
	"Ikoni",
	"Kagege",
	"Kankuriyingoma",
	"Kigandu",
	"Kinamba",
	"Murama",
	"Muyange",
	"Nyakagarama",
	"Rusamaza",
	"Rwabisheshe",
	"Shami",
];

const _Ngeruka: Cell = [
	"Binyonzwe",
	"Kamajeri",
	"Kamasonga",
	"Karugondo",
	"Kivugiza",
	"Muyange",
	"Ngeruka",
];

const Nyakayenzi: Cell = [
	"Heru",
	"Kabuye",
	"Karama",
	"Kavumu",
	"Kibaya",
	"Kibungo",
	"Kimiduha",
	"Murambi",
	"Nyakayenzi",
	"Twimpara",
];

const Rutonde: Cell = [
	"Akajuri",
	"Kabare",
	"Kabumbwe",
	"Kagano",
	"Kamugera",
	"Kamugore",
	"Kigarama",
	"Rubirizi",
	"Rugazi",
	"Runyonza",
	"Rusibya",
];

export const Ngeruka: Sector = {
	Gihembe,
	Murama,
	Ngeruka: _Ngeruka,
	Nyakayenzi,
	Rutonde,
};
