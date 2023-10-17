/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rwempasha
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyenjonjo: Cell = ["Cyenjonjo I", "Cyenjonjo II", "Rutare II"];

const Gasinga: Cell = ["Gasinga", "Nyendo", "Rwibishorogoto"];

const Kabare: Cell = ["Gituro", "Kabare", "Ururimbi"];

const Kazaza: Cell = ["Gakindo", "Kazaza", "Rukiri"];

const Mishenyi: Cell = ["Gicwamba", "Kinungu", "Mishenyi"];

const Rugarama: Cell = ["Bubare", "Rugarama"];

const Rukorota: Cell = ["Bukonji", "Rukorota"];

const Rutare: Cell = ["Mashaka", "Nshuli", "Rutare"];

const _Rwempasha: Cell = ["Nyarubare", "Rwahi", "Rwempasha", "Uwinkiko"];

const Ryeru: Cell = ["Bweya", "Ryeru"];

export const Rwempasha: Sector = {
	Cyenjonjo,
	Gasinga,
	Kabare,
	Kazaza,
	Mishenyi,
	Rugarama,
	Rukorota,
	Rutare,
	Rwempasha: _Rwempasha,
	Ryeru,
};
