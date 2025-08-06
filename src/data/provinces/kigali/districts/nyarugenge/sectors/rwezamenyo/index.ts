/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Sectors - Rwezamenyo
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import type { Cell, Sector } from "@rwanda/types";

const KabuguruI: Cell = ["Muhoza", "Muhuza", "Mumararungu", "Murambi"];

const KabuguruII: Cell = ["Buhoro", "Gasabo", "Mutara", "Ubusabane"];

const RwezamenyoI: Cell = [
	"Abatarushwa",
	"Indatwa",
	"Inkerakubanza",
	"Intwari",
];

const RwezamenyoII: Cell = ["Amahoro", "Umucyo", "Urumuri"];

export const Rwezamenyo: Sector = {
	"Kabuguru I": KabuguruI,
	"Kabuguru II": KabuguruII,
	"Rwezamenyo I": RwezamenyoI,
	"Rwezamenyo II": RwezamenyoII,
};
