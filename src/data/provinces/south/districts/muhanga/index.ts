/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Muhanga
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Cyeza } from "./sectors/cyeza";
import { Kabacuzi } from "./sectors/kabacuzi";
import { Kibangu } from "./sectors/kibangu";
import { Kiyumba } from "./sectors/kiyumba";
import { Muhanga as _Muhanga } from "./sectors/muhanga";
import { Mushishiro } from "./sectors/mushishiro";
import { Nyabinoni } from "./sectors/nyabinoni";
import { Nyamabuye } from "./sectors/nyamabuye";
import { Nyarusange } from "./sectors/nyarusange";
import { Rongi } from "./sectors/rongi";
import { Rugendabari } from "./sectors/rugendabari";
import { Shyogwe } from "./sectors/shyogwe";

export const Muhanga: District = {
	Cyeza,
	Kabacuzi,
	Kibangu,
	Kiyumba,
	Muhanga: _Muhanga,
	Mushishiro,
	Nyabinoni,
	Nyamabuye,
	Nyarusange,
	Rongi,
	Rugendabari,
	Shyogwe,
};
