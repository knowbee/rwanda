/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Kirehe
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Gahara } from "./sectors/gahara";
import { Gatore } from "./sectors/gatore";
import { Kigarama } from "./sectors/kigarama";
import { Kigina } from "./sectors/kigina";
import { Kirehe as _Kirehe } from "./sectors/kirehe";
import { Mahama } from "./sectors/mahama";
import { Mpanga } from "./sectors/mpanga";
import { Musaza } from "./sectors/musaza";
import { Mushikiri } from "./sectors/mushikiri";
import { Nasho } from "./sectors/nasho";
import { Nyamugari } from "./sectors/nyamugari";
import { Nyarubuye } from "./sectors/nyarubuye";

export const Kirehe: District = {
	Gahara,
	Gatore,
	Kigarama,
	Kigina,
	Kirehe: _Kirehe,
	Mahama,
	Mpanga,
	Musaza,
	Mushikiri,
	Nasho,
	Nyamugari,
	Nyarubuye,
};
