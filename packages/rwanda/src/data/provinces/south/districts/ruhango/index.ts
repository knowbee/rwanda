/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Ruhango
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Bweramana } from "./sectors/bweramana";
import { Byimana } from "./sectors/byimana";
import { Kabagali } from "./sectors/kabagali";
import { Kinazi } from "./sectors/kinazi";
import { Kinihira } from "./sectors/kinihira";
import { Mbuye } from "./sectors/mbuye";
import { Mwendo } from "./sectors/mwendo";
import { Ntongwe } from "./sectors/ntongwe";
import { Ruhango as _Ruhango } from "./sectors/ruhango";

export const Ruhango: District = {
	Bweramana,
	Byimana,
	Kabagali,
	Kinazi,
	Kinihira,
	Mbuye,
	Mwendo,
	Ntongwe,
	Ruhango: _Ruhango,
};
