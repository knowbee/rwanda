/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Nyanza
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Busasamana } from "./sectors/busasamana";
import { Busoro } from "./sectors/busoro";
import { Cyabakamyi } from "./sectors/cyabakamyi";
import { Kibilizi } from "./sectors/kibilizi";
import { Kigoma } from "./sectors/kigoma";
import { Mukingo } from "./sectors/mukingo";
import { Muyira } from "./sectors/muyira";
import { Ntyazo } from "./sectors/ntyazo";
import { Nyagisozi } from "./sectors/nyagisozi";
import { Rwabicuma } from "./sectors/rwabicuma";

export const Nyanza: District = {
	Busasamana: Busasamana,
	Busoro: Busoro,
	Cyabakamyi: Cyabakamyi,
	Kibilizi: Kibilizi,
	Kigoma: Kigoma,
	Mukingo: Mukingo,
	Muyira: Muyira,
	Ntyazo: Ntyazo,
	Nyagisozi: Nyagisozi,
	Rwabicuma: Rwabicuma,
};
