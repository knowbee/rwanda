/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Rubavu
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Bugeshi } from "./sectors/bugeshi";
import { Busasamana } from "./sectors/busasamana";
import { Cyanzarwe } from "./sectors/cyanzarwe";
import { Gisenyi } from "./sectors/gisenyi";
import { Kanama } from "./sectors/kanama";
import { Kanzenze } from "./sectors/kanzenze";
import { Mudende } from "./sectors/mudende";
import { Nyakiriba } from "./sectors/nyakiriba";
import { Nyamyumba } from "./sectors/nyamyumba";
import { Nyundo } from "./sectors/nyundo";
import { Rubavu as _Rubavu } from "./sectors/rubavu";
import { Rugerero } from "./sectors/rugerero";

export const Rubavu: District = {
	Bugeshi,
	Busasamana,
	Cyanzarwe,
	Gisenyi,
	Kanama,
	Kanzenze,
	Mudende,
	Nyakiriba,
	Nyamyumba,
	Nyundo,
	Rubavu: _Rubavu,
	Rugerero,
};
