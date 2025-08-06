/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Kicukiro
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Gahanga } from "./sectors/gahanga";
import { Gatenga } from "./sectors/gatenga";
import { Gikondo } from "./sectors/gikondo";
import { Kagarama } from "./sectors/kagarama";
import { Kanombe } from "./sectors/kanombe";
import { Kicukiro as _Kicukiro } from "./sectors/kicukiro";
import { Kigarama } from "./sectors/kigarama";
import { Masaka } from "./sectors/masaka";
import { Niboye } from "./sectors/niboye";
import { Nyarugunga } from "./sectors/nyarugunga";

export const Kicukiro: District = {
	Gahanga,
	Gatenga,
	Gikondo,
	Kagarama,
	Kanombe,
	Kicukiro: _Kicukiro,
	Kigarama,
	Masaka,
	Niboye,
	Nyarugunga,
};
