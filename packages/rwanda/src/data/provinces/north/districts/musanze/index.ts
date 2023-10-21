/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Musanze
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Busogo } from "./sectors/busogo";
import { Cyuve } from "./sectors/cyuve";
import { Gacaca } from "./sectors/gacaca";
import { Gashaki } from "./sectors/gashaki";
import { Gataraga } from "./sectors/gataraga";
import { Kimonyi } from "./sectors/kimonyi";
import { Kinigi } from "./sectors/kinigi";
import { Muhoza } from "./sectors/muhoza";
import { Muko } from "./sectors/muko";
import { Musanze as _Musanze } from "./sectors/musanze";
import { Nkotsi } from "./sectors/nkotsi";
import { Nyange } from "./sectors/nyange";
import { Remera } from "./sectors/remera";
import { Rwaza } from "./sectors/rwaza";
import { Shingiro } from "./sectors/shingiro";

export const Musanze: District = {
	Busogo,
	Cyuve,
	Gacaca,
	Gashaki,
	Gataraga,
	Kimonyi,
	Kinigi,
	Muhoza,
	Muko,
	Musanze: _Musanze,
	Nkotsi,
	Nyange,
	Remera,
	Rwaza,
	Shingiro,
};
