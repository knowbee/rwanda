/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kivu
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Cyanyirankora: Cell = ["Businde", "Cyanyirankora", "Gakuta", "Ruganza"];

const Gahurizo: Cell = ["Gasezo", "Kintama", "Kintare", "Uwamizirikano"];

const Kimina: Cell = ["Kabeza", "Kabingo", "Kimina", "Uwisaga"];

const _Kivu: Cell = ["Kavumu", "Kivu", "Murambi", "Rubumburi", "Rusuzumiro"];

const Rugerero: Cell = ["Kivumu", "Misundwe", "Nyarwotsi", "Rugerero"];

export const Kivu: Sector = {
	Cyanyirankora,
	Gahurizo,
	Kimina,
	Kivu: _Kivu,
	Rugerero,
};
