/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kirehe
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gahama: Cell = [
	"Byimana",
	"Kabeza",
	"Kaziba",
	"Kiyovu",
	"Muhweza",
	"Murugarama",
	"Ntungamo",
	"Nyakatsi",
	"Nyamazi",
	"Rebero",
];

const _Kirehe: Cell = [
	"Agatwa",
	"Byimana",
	"Kamasaro",
	"Kirehe",
	"Mirambi",
	"Runyinya",
];

const Nyabigega: Cell = [
	"Bugarura",
	"Duterimbere",
	"Gahuzamiryango",
	"Kabeza",
	"Kamuhoza",
	"Mushirarungu",
	"Nyarurembo",
	"Rurenge",
	"Twizerane",
	"Vatikani",
];

const Nyabikokora: Cell = [
	"Bwiza",
	"Byimana",
	"Kaduha",
	"Karenge",
	"Kiyovu",
	"Kwihanika",
	"Kwirebero",
	"Mumpinga",
	"Nyarurembo",
	"Nyarusange",
	"Rugenge",
	"Rugero",
	"Rurama",
	"Rusamaza",
	"Rutonde",
];

const Rwesero: Cell = [
	"Bengazi",
	"Byimana",
	"Gahama",
	"Kabeza",
	"Karuhura",
	"Munini",
	"Rwabikweto",
	"Rwesero",
];

export const Kirehe: Sector = {
	Gahama,
	Kirehe: _Kirehe,
	Nyabigega,
	Nyabikokora,
	Rwesero,
};
