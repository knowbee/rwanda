import { describe, expect, expectTypeOf, it } from "vitest";
import { Districts } from "../src";

describe("🇷🇼 Rwanda - Districts", () => {
	it("should return all districts in Rwanda", () => {
		const districts = Districts();
		expect(districts).toEqual([
			"Bugesera",
			"Gatsibo",
			"Kayonza",
			"Kirehe",
			"Ngoma",
			"Nyagatare",
			"Rwamagana",
			"Gasabo",
			"Kicukiro",
			"Nyarugenge",
			"Burera",
			"Gakenke",
			"Gicumbi",
			"Musanze",
			"Rulindo",
			"Gisagara",
			"Huye",
			"Kamonyi",
			"Muhanga",
			"Nyamagabe",
			"Nyanza",
			"Nyaruguru",
			"Ruhango",
			"Karongi",
			"Ngororero",
			"Nyabihu",
			"Nyamasheke",
			"Rubavu",
			"Rusizi",
			"Rutsiro",
		]);
	});

	it("should return all districts in a given province", () => {
		const districts = Districts({ provinces: "Kigali" });
		expectTypeOf(districts).toMatchTypeOf<string[] | undefined>();
	});

	it("should return an array of districts of two provinces", () => {
		const districts = Districts({ provinces: ["Kigali", "North"] });
		const kigali_districts = Districts({ provinces: "Kigali" });
		const north_districts = Districts({ provinces: "North" });

		expectTypeOf(districts).toMatchTypeOf<string[] | undefined>();

		if (districts && kigali_districts && north_districts) {
			expect(districts).toEqual([...kigali_districts, ...north_districts]);
		}
	});

	it("should return length of districts equal to 30", function () {
		const districts = Districts();
		expect(districts).toHaveLength(30);
	});
});
