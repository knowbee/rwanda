/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Bwisige
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const _Bwisige: Cell = [
	"Kabuye",
	"Kavuruga",
	"Kidandali",
	"Ndoha",
	"Nyakabungo",
	"Nyarubuye",
	"Nyarwina",
	"Rutoma",
	"Rwarurema",
];

const Gihuke: Cell = [
	"Cyamukanya",
	"Kumana",
	"Kumunini",
	"Kuwindenge",
	"Muneke",
	"Murehe",
	"Nyagakizi",
	"Nyakagera",
	"Nyamugari",
	"Rurenge",
];

const Mukono: Cell = [
	"Akavuza",
	"Murambi",
	"Nyarumba",
	"Nyirantungu",
	"Rwebisheke",
	"Rwondo",
	"Ryakirayi",
];

const Nyabushingitwa: Cell = [
	"Gahondo",
	"Musayo",
	"Ndayabana",
	"Nyagatoma",
	"Ruhuha",
	"Warufu",
];

export const Bwisige: Sector = {
	Bwisige: _Bwisige,
	Gihuke,
	Mukono,
	Nyabushingitwa,
};
