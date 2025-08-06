/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Districts - Rulindo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

// const base = require('./sectors/base');
// const burega = require('./sectors/burega');
// const bushoki = require('./sectors/bushoki');
// const buyoga = require('./sectors/buyoga');
// const cyinzuzi = require('./sectors/cyinzuzi');
// const cyungo = require('./sectors/cyungo');
// const kinihira = require('./sectors/kinihira');
// const kisaro = require('./sectors/kisaro');
// const masoro = require('./sectors/masoro');
// const mbogo = require('./sectors/mbogo');
// const murambi = require('./sectors/murambi');
// const ngoma = require('./sectors/ngoma');
// const ntarabana = require('./sectors/ntarabana');
// const rukozo = require('./sectors/rukozo');
// const rusiga = require('./sectors/rusiga');
// const shyorongi = require('./sectors/shyorongi');
// const tumba = require('./sectors/tumba');

import type { District } from "@rwanda/types";
import { Base } from "./sectors/base";
import { Burega } from "./sectors/burega";
import { Bushoki } from "./sectors/bushoki";
import { Buyoga } from "./sectors/buyoga";
import { Cyinzuzi } from "./sectors/cyinzuzi";
import { Cyungo } from "./sectors/cyungo";
import { Kinihira } from "./sectors/kinihira";
import { Kisaro } from "./sectors/kisaro";
import { Masoro } from "./sectors/masoro";
import { Mbogo } from "./sectors/mbogo";
import { Murambi } from "./sectors/murambi";
import { Ngoma } from "./sectors/ngoma";
import { Ntarabana } from "./sectors/ntarabana";
import { Rukozo } from "./sectors/rukozo";
import { Rusiga } from "./sectors/rusiga";
import { Shyorongi } from "./sectors/shyorongi";
import { Tumba } from "./sectors/tumba";

export const Rulindo: District = {
	Base,
	Burega,
	Bushoki,
	Buyoga,
	Cyinzuzi,
	Cyungo,
	Kinihira,
	Kisaro,
	Masoro,
	Mbogo,
	Murambi,
	Ngoma,
	Ntarabana,
	Rukozo,
	Rusiga,
	Shyorongi,
	Tumba,
};
