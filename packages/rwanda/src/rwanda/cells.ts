import { Rwanda } from "@rwanda/data/provinces";
import { format_input } from "@rwanda/format";
import type { TDistrict, TProvince } from "@rwanda/types";

/* 
    TODO: Give the consumer the ability to select all cells in a province, or all cells in a district, , or all cells in a sector, and not necessarily a must to provide all three
*/

type CellParams = {
	province: TProvince;
	district: TDistrict;
	sector: string;
};

export function Cells(params?: CellParams): string[] | undefined {
	const cells: string[] = [];

	// if no params (province | district | sector) are provided, return all cells in Rwanda
	if (!params) {
		for (const province of Object.keys(Rwanda)) {
			const province_key = province as TProvince;
			for (const district of Object.keys(Rwanda[province_key])) {
				for (const sector of Object.keys(Rwanda[province_key][district])) {
					for (const cell of Object.keys(
						Rwanda[province_key][district][sector],
					)) {
						cells.push(cell);
					}
				}
			}
		}
		return cells;
	}

	let { province, district, sector } = params;

	// to avoid typos, because sector names are not typed
	sector = format_input(sector);

	// wrong district or sector provided, i.e. a district or sector that does not exist in their respective levels
	if (!Rwanda[province][district] || !Rwanda[province][district][sector]) {
		return undefined;
	}

	// return cells in requested provice, district and sector
	for (const cell of Object.keys(Rwanda[province][district][sector])) {
		cells.push(cell);
	}

	return cells;
}
