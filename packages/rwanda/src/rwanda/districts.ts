import { Rwanda } from "@rwanda/data/provinces";
import type { TProvince } from "@rwanda/types";

type district_params = {
	provinces: TProvince | TProvince[];
};

export function Districts(params?: district_params): string[] | undefined {
	const { provinces } = params || {};

	if (Array.isArray(provinces)) {
		const districts: string[] = provinces.flatMap((province) =>
			get_districts(province),
		);
		return districts;
	}

	if (provinces) {
		return get_districts(provinces);
	}

	const all_districts: string[] = Object.keys(Rwanda).flatMap((province) =>
		get_districts(province as TProvince),
	);

	return all_districts.length > 0 ? all_districts : undefined;
}

function get_districts(province: TProvince): string[] {
	return Object.keys(Rwanda[province]);
}
