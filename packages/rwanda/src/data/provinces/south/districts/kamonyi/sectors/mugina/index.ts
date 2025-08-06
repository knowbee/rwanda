/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mugina
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Jenda: Cell = [
	"Kigarama",
	"Kiyonza",
	"Mataba Nord",
	"Munini",
	"Nyamurenga",
];

const Kabugondo: Cell = ["Bihenga", "Cyeru", "Mataba Sud", "Runzenzi"];

const Mbati: Cell = ["Kansoro", "Kigorora", "Mbati", "Mikamba", "Murambi"];

const _Mugina: Cell = ["Kagasa", "Kireka", "Mparo", "Mugina"];

const Nteko: Cell = ["Gishari", "Kona", "Ntasi", "Nyagisozi", "Rusoro"];

export const Mugina: Sector = {
	Jenda,
	Kabugondo,
	Mbati,
	Mugina: _Mugina,
	Nteko,
};
