/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Mugombwa
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Baziro: Cell = [
	"Banzankuru",
	"Gitungwa",
	"Nyabinyenga",
	"Nyagatovu",
	"Nyamirama",
	"Nyarukeri",
	"Nyesumo",
];

const Kibayi: Cell = [
	"Agakanka",
	"Akarutsibuka",
	"Akashyamba",
	"Akabuga",
	"Rinda",
	"Rwahambi",
	"Udukoni",
];

const Kibu: Cell = [
	"Agasharu",
	"Akabugabo",
	"Akagashuma",
	"Mushongi",
	"Rurenge",
];

const _Mugombwa: Cell = [
	"Agasharu",
	"Akagarama",
	"Akarambo",
	"Bishya",
	"Impinga",
	"Migina",
];

const Mukomacara: Cell = [
	"Agakomansyo",
	"Akanyamirama",
	"Akarangabo",
	"Akatare",
	"Gitarama",
	"Kabuye",
	"Nyabisonga",
	"Nyarusange",
	"Umukungu",
];

export const Mugombwa: Sector = {
	Baziro,
	Kibayi,
	Kibu,
	Mugombwa: _Mugombwa,
	Mukomacara,
};
