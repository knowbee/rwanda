/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Nyarugenge
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Gitega } from "./sectors/gitega";
import { Kanyinya } from "./sectors/kanyinya";
import { Kigali } from "./sectors/kigali";
import { Kimisagara } from "./sectors/kimisagara";
import { Mageregere } from "./sectors/mageregere";
import { Muhima } from "./sectors/muhima";
import { Nyakabanda } from "./sectors/nyakabanda";
import { Nyamirambo } from "./sectors/nyamirambo";
import { Nyarugenge as _Nyarugenge } from "./sectors/nyarugenge";
import { Rwezamenyo } from "./sectors/rwezamenyo";

export const Nyarugenge: District = {
	Gitega,
	Kanyinya,
	Kigali,
	Kimisagara,
	Mageregere,
	Muhima,
	Nyakabanda,
	Nyamirambo,
	Nyarugenge: _Nyarugenge,
	Rwezamenyo,
};
