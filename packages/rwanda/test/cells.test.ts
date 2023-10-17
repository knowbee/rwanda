import { describe, expect, expectTypeOf, it } from "vitest";
import { Cells } from "../src";

describe("🇷🇼 Rwanda - Cells", () => {
	it("should return all cells in Rwanda", () => {
		const cells = Cells();
		expectTypeOf(cells).toMatchTypeOf<string[] | undefined>();
	});

	it("should return length of cells equal to 2149", function () {
		const cells = Cells();
		expect(cells?.length).toEqual(2149);
	});

	it("should return an array of cells of a district", function () {
		const cells = Cells({
			province: "Kigali",
			district: "Kicukiro",
			sector: "Nyarugunga",
		});
		expectTypeOf(cells).toMatchTypeOf<string[] | undefined>();
	});

	it("should not break on invalid params (province | district | sector)", function () {
		const cells = Cells({
			province: "Kigali",
			district: "Bugesera",
			sector: "Nyarugunga",
		});
		expect(cells).toBeUndefined();
	});

	it("should not break on sector typo", function () {
		const cells = Cells({
			province: "Kigali",
			district: "Kicukiro",
			sector: "nyarUguNgA",
		});
		expect(cells).toEqual(["Kamashashi", "Nonko", "Rwimbogo"]);
	});
});
