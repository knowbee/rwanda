/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nemba
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Buranga: Cell = [
	"Buranga",
	"Burego",
	"Butare",
	"Kanyansyo",
	"Muganwa",
	"Mukaka",
	"Rukoji",
];

const Gahinga: Cell = ["Bitare", "Bukurura", "Kabaya", "Kilimbi"];

const Gisozi: Cell = [
	"Gisagara",
	"Kabushara",
	"Kamatete",
	"Kanama",
	"Kanunga",
	"Kanzoka",
	"Karukara",
	"Kirehe",
	"Mushubi",
	"Nyamyumba",
];

const Mucaca: Cell = [
	"Cyahafi",
	"Gatare",
	"Kabingo",
	"Kabuye",
	"Kamuvunyi",
	"Kiruhura",
	"Kiryamo",
	"Munyege",
	"Musange",
	"Ntakabavu",
	"Nyamiyaga",
];

export const Nemba: Sector = {
	Buranga,
	Gahinga,
	Gisozi,
	Mucaca,
};
