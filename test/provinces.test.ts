import { describe, expect, it } from "vitest";
import { Provinces } from "../src";

describe("🇷🇼 Rwanda - Provinces", () => {
	it("should return all provinces in Rwanda", () => {
		const provinces = Provinces();
		expect(provinces).toEqual(["East", "Kigali", "North", "South", "West"]);
		expect(provinces).toHaveLength(5);
	});
});
