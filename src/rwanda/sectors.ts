import { Rwanda } from "@rwanda/data/provinces";
import type { TDistrict, TProvince } from "@rwanda/types";

/* 
    TODO: By process of elimination, the district params should only satisfy the province selected
    * i.e if province is "Kigali", then district should only be "Gasabo" | "Kicukiro" | "Nyarugenge"

    TODO: Give the consumer the ability to select all sectors in a province, or all sectors in a district, and not necessarily a must to provide both province and district
*/

type sector_params = {
	province: TProvince;
	district: TDistrict;
};

export function Sectors(params?: sector_params): string[] | undefined {
	const sectors: string[] = [];

	// if no params (province or district) are provided, return all sectors in Rwanda
	if (!params) {
		for (const province of Object.keys(Rwanda)) {
			const province_key = province as TProvince;
			for (const district of Object.keys(Rwanda[province_key])) {
				for (const sector of Object.keys(Rwanda[province_key][district])) {
					sectors.push(sector);
				}
			}
		}
		return sectors;
	}

	const { province, district } = params;

	// if a province, but a wrong district is provided, i.e. a district that does not exist in the province
	if (!Rwanda[province][district]) {
		return undefined;
	}

	for (const district of Object.keys(Rwanda[province])) {
		for (const sector of Object.keys(Rwanda[province][district])) {
			sectors.push(sector);
		}
	}
	return sectors;
}
