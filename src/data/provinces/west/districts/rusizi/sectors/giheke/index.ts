/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Giheke
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { Cell, Sector } from "@rwanda/types";

const Cyendajuru: Cell = ["Burembo", "Kabeza", "Kibakure", "Murinzi"];

const Gakomeye: Cell = ["Buzi", "Gacyamo", "Kabuga", "Kagarama", "Ruvumbu"];

const _Giheke: Cell = [
	"Karambo",
	"Murambi",
	"Rugombo",
	"Rwumvangoma",
	"Wimana",
];

const Kamashangi: Cell = ["Gitwa", "Isha", "Kamuhozi", "Rukombe"];

const Kigenge: Cell = ["Gahinga", "Gahurubuka", "Rwamiko"];

const Ntura: Cell = [
	"Bubanga",
	"Kabujyogoro",
	"Kabyuma",
	"Karambi",
	"Kavuye",
	"Kigenge",
	"Ntura",
	"Rebero",
];

const Rwega: Cell = ["Impala", "Kanoga", "Rwega"];

const Turambi: Cell = ["Kamuhoza", "Munyove", "Rwinkwavu", "Turambi"];

export const Giheke: Sector = {
	Cyendajuru,
	Gakomeye,
	Giheke: _Giheke,
	Kamashangi,
	Kigenge,
	Ntura,
	Rwega,
	Turambi,
};
