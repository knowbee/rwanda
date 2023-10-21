/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Gatsibo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Gasange } from "./sectors/gasange";
import { Gatsibo as _Gatsibo } from "./sectors/gatsibo";
import { Gitoki } from "./sectors/gitoki";
import { Kabarore } from "./sectors/kabarore";
import { Kageyo } from "./sectors/kageyo";
import { Kiramuruzi } from "./sectors/kiramuruzi";
import { Kiziguro } from "./sectors/kiziguro";
import { Muhura } from "./sectors/muhura";
import { Murambi } from "./sectors/murambi";
import { Ngarama } from "./sectors/ngarama";
import { Nyagihanga } from "./sectors/nyagihanga";
import { Remera } from "./sectors/remera";
import { Rugarama } from "./sectors/rugarama";
import { Rwimbogo } from "./sectors/rwimbogo";

export const Gatsibo: District = {
	Gasange,
	Gatsibo: _Gatsibo,
	Gitoki,
	Kabarore,
	Kageyo,
	Kiramuruzi,
	Kiziguro,
	Muhura,
	Murambi,
	Ngarama,
	Nyagihanga,
	Remera,
	Rugarama,
	Rwimbogo,
};
