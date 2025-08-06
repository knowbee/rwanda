/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Huye
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

// const gishamvu = require('./sectors/gishamvu');
// const huye = require('./sectors/huye');
// const karama = require('./sectors/karama');
// const kigoma = require('./sectors/kigoma');
// const kinazi = require('./sectors/kinazi');
// const maraba = require('./sectors/maraba');
// const mbazi = require('./sectors/mbazi');
// const mukura = require('./sectors/mukura');
// const ngoma = require('./sectors/ngoma');
// const ruhashya = require('./sectors/ruhashya');
// const rusatira = require('./sectors/rusatira');
// const rwaniro = require('./sectors/rwaniro');
// const simbi = require('./sectors/simbi');
// const tumba = require('./sectors/tumba');

import type { District } from "@rwanda/types";
import { Gishamvu } from "./sectors/gishamvu";
import { Huye as _Huye } from "./sectors/huye";
import { Karama } from "./sectors/karama";
import { Kigoma } from "./sectors/kigoma";
import { Kinazi } from "./sectors/kinazi";
import { Maraba } from "./sectors/maraba";
import { Mbazi } from "./sectors/mbazi";
import { Mukura } from "./sectors/mukura";
import { Ngoma } from "./sectors/ngoma";
import { Ruhashya } from "./sectors/ruhashya";
import { Rusatira } from "./sectors/rusatira";
import { Rwaniro } from "./sectors/rwaniro";
import { Simbi } from "./sectors/simbi";
import { Tumba } from "./sectors/tumba";

export const Huye: District = {
	Gishamvu,
	Huye: _Huye,
	Karama,
	Kigoma,
	Kinazi,
	Maraba,
	Mbazi,
	Mukura,
	Ngoma,
	Ruhashya,
	Rusatira,
	Rwaniro,
	Simbi,
	Tumba,
};
