/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Musheri
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Kibirizi: Cell = ["Kabungo", "Kibirizi", "Nyamenge", "Nyamisange"];

const Kijojo: Cell = ["Kagwegwe", "Kanyinya", "Kijojo", "Rwakabungo"];

const _Musheri: Cell = ["Gakiri", "Kiyaza", "Mugari", "Musheri"];

const Ntoma: Cell = ["Bikonoka", "Murisanga", "Ntoma", "Rukundo", "Rutarama"];

const Nyagatabire: Cell = ["Gikunyu", "Mushorerwa", "Nyagatabire", "Rugarama"];

const Nyamiyonga: Cell = ["Cyenombe", "Isangano", "Nyamiyonga", "Shirimpumu"];

const RugaramaI: Cell = ["Humure", "Karambi", "Karuca", "Nyabyihura"];

const RugaramaII: Cell = ["Kibitaka", "Rebero", "Rwenyana", "Umunini"];

export const Musheri: Sector = {
	Kibirizi,
	Kijojo,
	Musheri: _Musheri,
	Ntoma,
	Nyagatabire,
	Nyamiyonga,
	RugaramaI,
	RugaramaII,
};
