const {
  Provinces,
  Districts,
  District,
  Sectors,
  Sector,
  Cells,
  Cell,
  Villages,
  Village
} = require("../index.js");
const chai = require("chai");
const expect = chai.expect;

describe("Rwanda", async () => {
  describe("getting provinces", () => {
    it("should return array of provinces", function() {
      const provinces = Provinces();
      expect(provinces).to.deep.equal([
        "East",
        "Kigali",
        "North",
        "South",
        "West"
      ]);
    });
    it("should return length of provinces equal to 5", function() {
      const provinces = Provinces();
      const length = provinces.length;
      expect(length).to.equal(5);
    });
  });

  describe("getting districts", () => {
    it("should return array of districts", function() {
      const districts = Districts();
      expect(districts).to.deep.equal([
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
        "Rutsiro",
        "Rusizi"
      ]);
    });
    it("should return array of districts of a province", function() {
      const districts = District("Kigali");
      const type = typeof districts;
      expect(type).to.equal("object");
    });
    it("should return length of districts equal to 30", function() {
      const districts = Districts();
      const length = districts.length;
      expect(length).to.equal(30);
    });
  });

  describe("getting sectors", () => {
    it("should return length of sectors equal to 416", function() {
      const sectors = Sectors();
      const length = sectors.length;
      const type = typeof sectors;
      expect(length).to.equal(416);
      expect(type).to.equal("object");
    });
    it("should return array of sectors of a district", function() {
      const sectors = Sector("South", "Huye");
      const type = typeof sectors;
      expect(type).to.equal("object");
    });
    it("should return undefined", function() {
      const sectors = Sector("South");
      expect(sectors).to.equal(undefined);
    });
  });
  describe("getting cells", () => {
    it("should return length of cells equal to 2149", function() {
      const cells = Cells();
      const length = cells.length;
      const type = typeof cells;
      expect(length).to.equal(2149);
      expect(type).to.equal("object");
    });
    it("should return array of cells of a sector", function() {
      const cells = Cell("South", "Huye", "Tumba");
      const type = typeof cells;
      expect(type).to.equal("object");
    });
    it("should return undefined", function() {
      const cells = Cell("South", "Huye");
      expect(cells).to.equal(undefined);
    });
  });

  describe("getting villages", () => {
    it("should return length of villages equal to 14837", function() {
      const villages = Villages();
      const length = villages.length;
      const type = typeof villages;
      expect(length).to.equal(14837);
      expect(type).to.equal("object");
    });
    it("should return array of villages of a cell", function() {
      const villages = Village("South", "Huye", "Tumba", "Cyarwa");
      const type = typeof villages;
      expect(type).to.equal("object");
    });
    it("should return undefined", function() {
      const villages = Village("South", "Huye", "Tumba");
      expect(villages).to.equal(undefined);
    });
  });
});
