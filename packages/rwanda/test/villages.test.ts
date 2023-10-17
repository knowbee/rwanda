import { describe, expect, expectTypeOf, it } from "vitest";
import { Villages } from "../src";

describe("🇷🇼 Rwanda - Villages", () => {
	it("should return all villages in Rwanda", () => {
		const villages = Villages();
		expectTypeOf(villages).toMatchTypeOf<string[] | undefined>();
	});

	it("should return length of villages equal to 14837", function () {
		const villages = Villages();
		expect(villages?.length).toEqual(14837);
	});

	it("should return an array of villages of a district", function () {
		const villages = Villages({
			province: "Kigali",
			district: "Kicukiro",
			sector: "Nyarugunga",
			cell: "Nonko",
		});
		expectTypeOf(villages).toMatchTypeOf<string[] | undefined>();
	});

	it("should not break on invalid params (province | district | sector | cell)", function () {
		const villages = Villages({
			province: "Kigali",
			district: "Bugesera",
			sector: "Nyarugunga",
			cell: "Nonko",
		});
		expect(villages).toBeUndefined();
	});

	it("should not break on sector typo", function () {
		const villages = Villages({
			province: "Kigali",
			district: "Kicukiro",
			sector: "nyarUguNgA",
			cell: "nONko",
		});

		expect(villages).toEqual([
			"Gasaraba",
			"Gihanga",
			"Gitara",
			"Kavumu",
			"Mahoro",
			"Nyarutovu",
			"Rugali",
			"Runyonza",
		]);
	});

	// ? These kinds of tests might become obsolete once all data becomes strictly typed.
	it("should return undefined when there is a typo", function () {
		const villages = Villages({
			province: "Kigali",
			district: "Kicukiro",
			sector: "Nyarugunga",
			cell: "Noko",
		});
		expect(villages).toBeUndefined();
	});
});
