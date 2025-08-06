/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ngarama
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bugamba: Cell = [
	"Akagerero",
	"Cyamuganga",
	"Kajevuba",
	"Kinihira",
	"Kinyinya",
];

const Karambi: Cell = [
	"Cyankondo",
	"Kamuri",
	"Karambi",
	"Kimbugu",
	"Mishenyi",
	"Ruhuha",
	"Rurama",
	"Rushenyi",
	"Ruziranyenzi",
	"Rwagakara",
];

const Kigasha: Cell = [
	"Akabuga",
	"Akabuye",
	"Akagarama",
	"Akajevuba",
	"Byimana",
	"Cyabahima",
	"Cyahafi",
	"Gikundamvura",
	"Ikirongo",
	"Iperu",
	"Kinunga",
	"Kiyovu",
	"Kizunguruko",
	"Mbogo",
	"Nyagisa",
	"Nyantojo",
	"Rukombe",
	"Rurama",
	"Ruyonza",
	"Rwangingo",
];

const _Ngarama: Cell = [
	"Amahoro",
	"Gatungo",
	"Ibare",
	"Intsinzi",
	"Kabeho",
	"Kiyovu",
	"Rugarama",
	"Urukundo",
];

const Nyarubungo: Cell = [
	"Burambira",
	"Kintarama",
	"Kivumu",
	"Murama",
	"Rugarama",
	"Ruhengeri",
	"Rutovu",
	"Rwiri",
];

export const Ngarama: Sector = {
	Bugamba,
	Karambi,
	Kigasha,
	Ngarama: _Ngarama,
	Nyarubungo,
};
