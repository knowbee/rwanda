/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Kinazi
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const Burima: Cell = [
	"Burima",
	"Mirambi",
	"Nyagahama",
	"Nyamiyaga",
	"Nyarugenge",
	"Nyaruteja",
];

const Gisali: Cell = [
	"Gisari",
	"Kabeza",
	"Kaduha",
	"Kakirenzi",
	"Kamuraza",
	"Kanaba",
	"Kibanda",
	"Matara",
	"Nyabusunzu",
	"Nyiranduga",
	"Remera",
];

const _Kinazi: Cell = [
	"Gasiza",
	"Impara",
	"Kabuga",
	"Kacyiru",
	"Kamabuye",
	"Karama",
	"Kareshya",
	"Karuhuga",
	"Marche -commun",
	"Mpemba",
	"Nyabinyenga",
	"Nyabisindu",
	"Nyiraruhinga",
	"Rebero",
	"Ruhuha",
];

const Rubona: Cell = [
	"Buhanika",
	"Gafumba",
	"Gako",
	"Gashike",
	"Kagazi",
	"Kigarama",
	"Rubona",
	"Susa",
];

const Rutabo: Cell = [
	"Bugiranteko",
	"Gatonde",
	"Gitwa",
	"Kanka",
	"Mukoma",
	"Nyarugunga",
	"Nyarunazi",
	"Nyirarubayi",
	"Runzenze",
	"Rutabo",
];

export const Kinazi: Sector = {
	Burima,
	Gisali,
	Kinazi: _Kinazi,
	Rubona,
	Rutabo,
};
