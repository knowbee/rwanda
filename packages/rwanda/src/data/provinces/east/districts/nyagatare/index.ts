/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Nyagatare
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Gatunda } from "./sectors/gatunda";
import { Karama } from "./sectors/karama";
import { Karangazi } from "./sectors/karangazi";
import { Katabagemu } from "./sectors/katabagemu";
import { Kiyombe } from "./sectors/kiyombe";
import { Matimba } from "./sectors/matimba";
import { Mimuri } from "./sectors/mimuri";
import { Mukama } from "./sectors/mukama";
import { Musheri } from "./sectors/musheri";
import { Nyagatare as _Nyagatare } from "./sectors/nyagatare";
import { Rukomo } from "./sectors/rukomo";
import { Rwempasha } from "./sectors/rwempasha";
import { Rwimiyaga } from "./sectors/rwimiyaga";
import { Tabagwe } from "./sectors/tabagwe";

export const Nyagatare: District = {
	Gatunda,
	Karama,
	Karangazi,
	Katabagemu,
	Kiyombe,
	Matimba,
	Mimuri,
	Mukama,
	Musheri,
	Nyagatare: _Nyagatare,
	Rukomo,
	Rwempasha,
	Rwimiyaga,
	Tabagwe,
};
