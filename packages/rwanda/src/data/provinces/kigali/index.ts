/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Provinces - Kigali
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Province } from "@rwanda/types";
import { Gasabo } from "./districts/gasabo";
import { Kicukiro } from "./districts/kicukiro";
import { Nyarugenge } from "./districts/nyarugenge";

export const Kigali: Province = {
	Gasabo,
	Kicukiro,
	Nyarugenge,
};
