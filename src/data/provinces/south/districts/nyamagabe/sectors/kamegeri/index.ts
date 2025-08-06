/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kamegeri
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Bwama: Cell = ["Gitwa", "Kamiro", "Kigarama"];

const _Kamegeri: Cell = ["Kinyovu", "Ntaruka", "Rweru", "Sovu"];

const Kirehe: Cell = ["Gasharu", "Kigarama", "Ryanyirataba"];

const Kizi: Cell = ["Gakomeye", "Kagarama", "Kinyana"];

const Nyarusiza: Cell = ["Bande", "Nyarusange", "Nyarusiza", "Rutuna"];

const Rususa: Cell = ["Bahina", "Baro", "Kigarama", "Muhembe"];

export const Kamegeri: Sector = {
	Bwama,
	Kamegeri: _Kamegeri,
	Kirehe,
	Kizi,
	Nyarusiza,
	Rususa,
};
