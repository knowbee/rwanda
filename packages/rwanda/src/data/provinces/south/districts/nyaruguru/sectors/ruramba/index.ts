/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Ruramba
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Gabiro: Cell = ["Bukoro", "Kageyo", "Kansi", "Nyamirambo", "Ryamuhumbi"];

const Giseke: Cell = ["Giseke", "Kabari", "Kidogo", "Matyazo", "Tugogo"];

const Nyarugano: Cell = ["Gisorora", "Kinyonyo", "Nyarugano", "Uruyange"];

const Rugogwe: Cell = ["Rugogwe", "Rugusa", "Titi"];

const _Ruramba: Cell = ["Bugizi", "Busasamana", "Karambi", "Ruramba"];

export const Ruramba: Sector = {
	Gabiro,
	Giseke,
	Nyarugano,
	Rugogwe,
	Ruramba: _Ruramba,
};
