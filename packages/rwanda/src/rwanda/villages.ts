import { Rwanda } from "@rwanda/data/provinces";
import { format_input } from "@rwanda/format";
import type { TDistrict, TProvince } from "@rwanda/types";

/* 
    TODO: Give the consumer the ability to select all villages in a province, or all villages in a district, , or all villages in a sector, or all villages in a cell, and not necessarily a must to provide all four
*/

type VillageParams = {
	province: TProvince;
	district: TDistrict;
	sector: string;
	cell: string;
};

export function Villages(params?: VillageParams): string[] | undefined {
	const villages: string[] = [];

	// if no params (province | district | sector | cell) are provided, return all villages in Rwanda
	if (!params) {
		for (const province of Object.keys(Rwanda)) {
			const province_key = province as TProvince;
			for (const district of Object.keys(Rwanda[province_key])) {
				for (const sector of Object.keys(Rwanda[province_key][district])) {
					for (const cell of Object.keys(
						Rwanda[province_key][district][sector],
					)) {
						for (const village of Object.keys(
							Rwanda[province_key][district][sector][cell],
						)) {
							villages.push(village);
						}
					}
				}
			}
		}
		return villages;
	}

	let { province, district, sector, cell } = params;

	// to avoid typos, because sector & cell names are not typed
	sector = format_input(sector);
	cell = format_input(cell);

	// wrong district or sector or cell provided, i.e. a district or sector or cell that does not exist in their respective levels
	if (
		!Rwanda[province][district] ||
		!Rwanda[province][district][sector] ||
		!Rwanda[province][district][sector][cell]
	) {
		return undefined;
	}

	// return villages in requested provice, district, sector and cell
	for (const village of Object.values(
		Rwanda[province][district][sector][cell],
	)) {
		villages.push(village);
	}

	return villages;
}
