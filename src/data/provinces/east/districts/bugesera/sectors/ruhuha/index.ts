/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ruhuha
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bihari: Cell = [
	"Bihari",
	"Busasamana",
	"Masenga I",
	"Masenga II",
	"Mukoma",
	"Nyagafunzo",
	"Rugarama",
	"Rwanzunga",
];

const Gatanga: Cell = [
	"Butereri",
	"Kayigi",
	"Kibaza",
	"Nyaburiba",
	"Nyakagarama",
	"Rwanika",
];

const Gikundamvura: Cell = [
	"Gikundamvura",
	"Kanombe",
	"Kazabagarura",
	"Kiyovu",
	"Rukurazo",
	"Rusenyi",
];

const Kindama: Cell = [
	"Gatare",
	"Gatovu",
	"Kagasera",
	"Kamweru",
	"Kibaza",
	"Kindama",
	"Rebero",
	"Ruramba",
	"Rutare",
	"Saruduha",
];

const _Ruhuha: Cell = [
	"Kimikamba",
	"Mubano",
	"Nyabaranga",
	"Ruhuha I",
	"Ruhuha II",
];

export const Ruhuha: Sector = {
	Bihari,
	Gatanga,
	Gikundamvura,
	Kindama,
	Ruhuha: _Ruhuha,
};
