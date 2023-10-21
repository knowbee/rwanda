/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Ngororero
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { District } from "@rwanda/types";
import { Bwira } from "./sectors/bwira";
import { Gatumba } from "./sectors/gatumba";
import { Hindiro } from "./sectors/hindiro";
import { Kabaya } from "./sectors/kabaya";
import { Kageyo } from "./sectors/kageyo";
import { Kavumu } from "./sectors/kavumu";
import { Matyazo } from "./sectors/matyazo";
import { Muhanda } from "./sectors/muhanda";
import { Muhororo } from "./sectors/muhororo";
import { Ndaro } from "./sectors/ndaro";
import { Ngororero as _Ngororero } from "./sectors/ngororero";
import { Nyange } from "./sectors/nyange";
import { Sovu } from "./sectors/sovu";

export const Ngororero: District = {
	Bwira,
	Gatumba,
	Hindiro,
	Kabaya,
	Kageyo,
	Kavumu,
	Matyazo,
	Muhanda,
	Muhororo,
	Ndaro,
	Ngororero: _Ngororero,
	Nyange,
	Sovu,
};
