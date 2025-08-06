/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Nyabimata
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gihemvu: Cell = ["Bihembe", "Bugina", "Gihemvu", "Rugarama"];

const Kabere: Cell = ["Kabere", "Nyarunazi", "Uwurusugi"];

const Mishungero: Cell = [
	"Mishungero",
	"Muyira",
	"Ngarama",
	"Rubindi",
	"Uwaruhigi",
];

const _Nyabimata: Cell = ["Murambi", "Mutobwe", "Nyabimata", "Rwerere"];

const Ruhinga: Cell = ["Agasugi", "Cyumuzi", "Ndaro", "Ruhinga"];

export const Nyabimata: Sector = {
	Gihemvu,
	Kabere,
	Mishungero,
	Nyabimata: _Nyabimata,
	Ruhinga,
};
